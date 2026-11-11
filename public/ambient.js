/* Decorative fluid field. Original implementation; no third-party runtime. */
(() => {
  'use strict';
  const root = document.documentElement;
  if (root.dataset.ambientInitialized) return;
  root.dataset.ambientInitialized = 'true';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const mouseAvailable = matchMedia('(any-hover: hover) and (any-pointer: fine)');
  const IDLE_MS = 5500;
  let canvas, renderer, frame = 0, lastFrame = 0, lastInput = 0;
  let previous = null, pending = null, distance = 0, sizeDirty = true, destroyed = false;

  function allowed() {
    return !destroyed && !document.hidden && !reduced.matches && mouseAvailable.matches &&
      root.dataset.motion !== 'paused' && !root.classList.contains('project-preview-open');
  }
  function makeCanvas() {
    const element = document.createElement('canvas');
    element.id = 'ambient-canvas';
    element.className = 'ambient-canvas';
    element.setAttribute('aria-hidden', 'true');
    element.hidden = true;
    document.body.prepend(element);
    return element;
  }
  function dimensions() {
    return [Math.max(1, root.clientWidth), Math.max(1, innerHeight), Math.min(devicePixelRatio || 1, 1.5)];
  }
  function useFallback() {
    renderer?.destroy();
    canvas?.remove();
    canvas = makeCanvas();
    renderer = createSoftTrail(canvas);
    sizeDirty = true;
    return !!renderer;
  }
  function initialize() {
    if (renderer) return true;
    canvas = makeCanvas();
    renderer = createFluid(canvas);
    if (!renderer && !useFallback()) { canvas.remove(); return false; }
    root.classList.add('has-fluid-backdrop');
    if (renderer.kind === 'webgl2') {
      canvas.addEventListener('webglcontextlost', event => {
        event.preventDefault();
        if (destroyed || event.currentTarget !== canvas) return;
        stop();
        if (!useFallback()) root.classList.remove('has-fluid-backdrop');
      }, { once: true });
    }
    return true;
  }
  function stop() {
    cancelAnimationFrame(frame);
    frame = 0;
    lastFrame = 0;
    pending = previous = null;
    if (canvas) { canvas.hidden = true; canvas.dataset.state = 'idle'; }
    renderer?.clear();
  }
  function tick(now) {
    frame = 0;
    if (!allowed() || now - lastInput > IDLE_MS) { stop(); return; }
    const dt = Math.min(0.033, Math.max(0.001, (now - (lastFrame || now - 16.67)) / 1000));
    lastFrame = now;
    if (sizeDirty) {
      try { renderer.resize(...dimensions()); sizeDirty = false; }
      catch { stop(); if (!useFallback()) return; renderer.resize(...dimensions()); sizeDirty = false; }
    }
    if (pending) { renderer.stroke(pending); pending = null; }
    renderer.step(dt, root.dataset.theme === 'dark');
    canvas.hidden = false;
    canvas.dataset.state = 'running';
    frame = requestAnimationFrame(tick);
  }
  function onPointer(event) {
    if (event.pointerType !== 'mouse' || !allowed()) return;
    // Controls retain normal hit testing; only a decorative background receives these coordinates.
    const width = Math.max(1, root.clientWidth), height = Math.max(1, innerHeight);
    const point = [Math.max(0, Math.min(1, event.clientX / width)), 1 - Math.max(0, Math.min(1, event.clientY / height))];
    if (!previous) { previous = point; return; }
    const travel = Math.hypot((point[0] - previous[0]) * width, (point[1] - previous[1]) * height);
    if (travel < 0.5) return;
    if (!initialize()) return;
    distance += Math.min(travel, 100);
    pending = { from: pending?.from || previous, to: point, hue: 0.57 + 0.17 * Math.sin(distance / 750) };
    previous = point;
    lastInput = performance.now();
    if (!frame) frame = requestAnimationFrame(tick);
  }
  function sync() { if (!allowed()) stop(); }
  function resize() { sizeDirty = true; stop(); }
  function leave() { previous = null; }
  function visibility() { if (document.hidden) stop(); }
  const preferences = new MutationObserver(sync);
  preferences.observe(root, { attributes: true, attributeFilter: ['data-motion', 'class'] });
  window.addEventListener('pointermove', onPointer, { passive: true });
  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('scroll', leave, { passive: true });
  window.addEventListener('blur', stop);
  root.addEventListener('pointerleave', leave);
  document.addEventListener('visibilitychange', visibility);
  reduced.addEventListener('change', sync);
  mouseAvailable.addEventListener('change', sync);
  window.addEventListener('pagehide', event => {
    stop();
    if (event.persisted) return;
    destroyed = true;
    renderer?.destroy();
    preferences.disconnect();
    window.removeEventListener('pointermove', onPointer);
    window.removeEventListener('resize', resize);
    window.removeEventListener('scroll', leave);
    window.removeEventListener('blur', stop);
    root.removeEventListener('pointerleave', leave);
    document.removeEventListener('visibilitychange', visibility);
    reduced.removeEventListener('change', sync);
    mouseAvailable.removeEventListener('change', sync);
  });

  function pigment(hue) {
    // A cyan / blue / violet palette; phase changes with distance, not wall-clock time.
    return [0, 2 / 3, 1 / 3].map(phase => {
      const wave = Math.abs(((hue + phase) % 1) * 6 - 3) - 1;
      return 0.16 + 0.76 * Math.max(0, Math.min(1, wave));
    });
  }

  function createFluid(element) {
    const gl = element.getContext('webgl2', { alpha: true, premultipliedAlpha: true, antialias: false, depth: false, stencil: false, powerPreference: 'low-power' });
    if (!gl) return null;
    const programs = [], fields = [];
    let velocity, dye, pressure, curl, divergence, aspect = 1, flowSize = [1, 1], dyeSize = [1, 1];
    const releaseFields = () => {
      fields.splice(0).forEach(field => { gl.deleteTexture(field.texture); gl.deleteFramebuffer(field.framebuffer); });
    };
    const destroy = () => {
      releaseFields();
      programs.splice(0).forEach(program => gl.deleteProgram(program.handle));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
    const vertexSource = `#version 300 es
      precision highp float;
      out vec2 uv;
      void main() {
        vec2 point = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
        uv = point;
        gl_Position = vec4(point * 2.0 - 1.0, 0.0, 1.0);
      }`;
    function compile(type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader); throw new Error('Ambient shader unavailable');
      }
      return shader;
    }
    function program(source) {
      const vertex = compile(gl.VERTEX_SHADER, vertexSource);
      let fragment, handle;
      try {
        fragment = compile(gl.FRAGMENT_SHADER, `#version 300 es
          precision highp float;
          precision highp sampler2D;
          in vec2 uv;
          out vec4 result;
          ${source}`);
        handle = gl.createProgram();
        gl.attachShader(handle, vertex); gl.attachShader(handle, fragment); gl.linkProgram(handle);
        if (!gl.getProgramParameter(handle, gl.LINK_STATUS)) throw new Error('Ambient program unavailable');
        const uniforms = {};
        for (let i = 0; i < gl.getProgramParameter(handle, gl.ACTIVE_UNIFORMS); i++) {
          const info = gl.getActiveUniform(handle, i);
          uniforms[info.name] = gl.getUniformLocation(handle, info.name);
        }
        const value = { handle, uniforms };
        programs.push(value);
        return value;
      } catch (error) { if (handle) gl.deleteProgram(handle); throw error; }
      finally { gl.deleteShader(vertex); if (fragment) gl.deleteShader(fragment); }
    }
    function field(width, height) {
      const texture = gl.createTexture(), framebuffer = gl.createFramebuffer();
      const value = { texture, framebuffer, width, height };
      fields.push(value);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA16F, width, height, 0, gl.RGBA, gl.HALF_FLOAT, null);
      gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
      if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) throw new Error('Ambient texture unavailable');
      gl.clear(gl.COLOR_BUFFER_BIT);
      return value;
    }
    function pair(width, height) {
      return { read: field(width, height), write: field(width, height), swap() { [this.read, this.write] = [this.write, this.read]; } };
    }
    function draw(shader, target, values) {
      gl.useProgram(shader.handle);
      gl.bindFramebuffer(gl.FRAMEBUFFER, target?.framebuffer || null);
      gl.viewport(0, 0, target?.width || element.width, target?.height || element.height);
      let unit = 0;
      for (const [name, value] of Object.entries(values)) {
        const location = shader.uniforms[name];
        if (location === undefined) continue;
        if (value?.texture) {
          gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, value.texture);
          gl.uniform1i(location, unit++);
        } else if (Array.isArray(value)) {
          if (value.length === 2) gl.uniform2f(location, ...value);
          else gl.uniform3f(location, ...value);
        } else gl.uniform1f(location, value);
      }
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }
    function clear() {
      if (gl.isContextLost()) return;
      gl.clearColor(0, 0, 0, 0);
      for (const value of fields) { gl.bindFramebuffer(gl.FRAMEBUFFER, value.framebuffer); gl.clear(gl.COLOR_BUFFER_BIT); }
      gl.bindFramebuffer(gl.FRAMEBUFFER, null); gl.clear(gl.COLOR_BUFFER_BIT);
    }
    try {
      if (!gl.getExtension('EXT_color_buffer_float')) throw new Error('Float rendering unavailable');
      gl.disable(gl.BLEND); gl.disable(gl.DEPTH_TEST); gl.clearColor(0, 0, 0, 0);
      const advect = program(`
        uniform sampler2D flow, source;
        uniform vec2 flowTexel;
        uniform float dt, decay;
        void main() {
          vec2 departure = uv - texture(flow, uv).xy * flowTexel * dt;
          result = texture(source, departure) * exp(-decay * dt);
        }`);
      const inject = program(`
        uniform sampler2D source;
        uniform vec2 start, end;
        uniform vec3 amount;
        uniform float aspect, radius, limit;
        void main() {
          vec2 scale = vec2(aspect, 1.0);
          vec2 segment = (end - start) * scale;
          vec2 relative = (uv - start) * scale;
          float along = clamp(dot(relative, segment) / max(dot(segment, segment), 0.000001), 0.0, 1.0);
          vec2 offset = relative - segment * along;
          float ink = exp(-dot(offset, offset) / (radius * radius));
          result = vec4(clamp(texture(source, uv).xyz + amount * ink, -limit, limit), 0.0);
        }`);
      const calculateCurl = program(`
        uniform sampler2D flow;
        uniform vec2 pixel;
        void main() {
          float up = texture(flow, uv + vec2(0, pixel.y)).x;
          float down = texture(flow, uv - vec2(0, pixel.y)).x;
          float left = texture(flow, uv - vec2(pixel.x, 0)).y;
          float right = texture(flow, uv + vec2(pixel.x, 0)).y;
          result = vec4((right - left - up + down) * 0.5, 0, 0, 0);
        }`);
      const swirl = program(`
        uniform sampler2D flow, rotation;
        uniform vec2 pixel;
        uniform float dt;
        void main() {
          float left = abs(texture(rotation, uv - vec2(pixel.x, 0)).x);
          float right = abs(texture(rotation, uv + vec2(pixel.x, 0)).x);
          float down = abs(texture(rotation, uv - vec2(0, pixel.y)).x);
          float up = abs(texture(rotation, uv + vec2(0, pixel.y)).x);
          vec2 gradient = vec2(right - left, up - down);
          vec2 tangent = vec2(gradient.y, -gradient.x) / max(length(gradient), 0.0001);
          vec2 velocity = texture(flow, uv).xy + tangent * texture(rotation, uv).x * dt * 12.0;
          result = vec4(clamp(velocity, -350.0, 350.0), 0, 0);
        }`);
      const calculateDivergence = program(`
        uniform sampler2D flow;
        uniform vec2 pixel;
        void main() {
          vec2 center = texture(flow, uv).xy;
          float left = uv.x < pixel.x ? -center.x : texture(flow, uv - vec2(pixel.x, 0)).x;
          float right = uv.x > 1.0 - pixel.x ? -center.x : texture(flow, uv + vec2(pixel.x, 0)).x;
          float down = uv.y < pixel.y ? -center.y : texture(flow, uv - vec2(0, pixel.y)).y;
          float up = uv.y > 1.0 - pixel.y ? -center.y : texture(flow, uv + vec2(0, pixel.y)).y;
          result = vec4((right - left + up - down) * 0.5, 0, 0, 0);
        }`);
      const solve = program(`
        uniform sampler2D pressure, divergence;
        uniform vec2 pixel;
        void main() {
          float neighbors = texture(pressure, uv - vec2(pixel.x, 0)).x + texture(pressure, uv + vec2(pixel.x, 0)).x
            + texture(pressure, uv - vec2(0, pixel.y)).x + texture(pressure, uv + vec2(0, pixel.y)).x;
          result = vec4((neighbors - texture(divergence, uv).x) * 0.25, 0, 0, 0);
        }`);
      const project = program(`
        uniform sampler2D flow, pressure;
        uniform vec2 pixel;
        void main() {
          vec2 gradient = vec2(texture(pressure, uv + vec2(pixel.x, 0)).x - texture(pressure, uv - vec2(pixel.x, 0)).x,
            texture(pressure, uv + vec2(0, pixel.y)).x - texture(pressure, uv - vec2(0, pixel.y)).x);
          result = vec4(texture(flow, uv).xy - 0.5 * gradient, 0, 0);
        }`);
      const display = program(`
        uniform sampler2D ink;
        uniform vec2 pixel;
        uniform float opacity;
        float density(vec2 p) { vec3 c = texture(ink, p).rgb; return max(c.r, max(c.g, c.b)); }
        void main() {
          vec3 value = max(texture(ink, uv).rgb, 0.0);
          float amount = max(value.r, max(value.g, value.b));
          float dx = density(uv + vec2(pixel.x, 0)) - density(uv - vec2(pixel.x, 0));
          float dy = density(uv + vec2(0, pixel.y)) - density(uv - vec2(0, pixel.y));
          vec3 normal = normalize(vec3(-dx * 3.5, -dy * 3.5, 0.3));
          float light = 0.73 + 0.27 * max(dot(normal, normalize(vec3(-0.4, 0.7, 0.7))), 0.0);
          vec3 tint = pow(value / max(amount, 0.0001), vec3(0.85)) * light;
          float alpha = (1.0 - exp(-amount * 0.7)) * opacity;
          result = vec4(tint * alpha, alpha);
        }`);
      return {
        kind: 'webgl2',
        resize(width, height, dpr) {
          releaseFields();
          aspect = width / height;
          const scale = Math.min(dpr, 960 / width, 720 / height);
          element.width = Math.max(1, Math.round(width * scale));
          element.height = Math.max(1, Math.round(height * scale));
          const sized = edge => width >= height ? [edge, Math.max(32, Math.round(edge / aspect))] : [Math.max(32, Math.round(edge * aspect)), edge];
          const simulation = sized(112), color = sized(512);
          flowSize = [1 / simulation[0], 1 / simulation[1]];
          dyeSize = [1 / color[0], 1 / color[1]];
          velocity = pair(...simulation); dye = pair(...color); pressure = pair(...simulation);
          curl = field(...simulation); divergence = field(...simulation);
          element.dataset.engine = 'webgl2'; clear();
        },
        stroke({ from, to, hue }) {
          const force = [(to[0] - from[0]) / flowSize[0] * 48, (to[1] - from[1]) / flowSize[1] * 48, 0];
          const speed = Math.hypot(force[0], force[1]);
          if (speed > 240) { force[0] *= 240 / speed; force[1] *= 240 / speed; }
          draw(inject, velocity.write, { source: velocity.read, start: from, end: to, amount: force, aspect, radius: 0.055, limit: 350 }); velocity.swap();
          draw(inject, dye.write, { source: dye.read, start: from, end: to, amount: pigment(hue).map(c => c * 1.15), aspect, radius: 0.032, limit: 3.0 }); dye.swap();
        },
        step(dt, dark) {
          draw(advect, velocity.write, { flow: velocity.read, source: velocity.read, flowTexel: flowSize, dt, decay: 0.95 }); velocity.swap();
          draw(calculateCurl, curl, { flow: velocity.read, pixel: flowSize });
          draw(swirl, velocity.write, { flow: velocity.read, rotation: curl, pixel: flowSize, dt }); velocity.swap();
          draw(calculateDivergence, divergence, { flow: velocity.read, pixel: flowSize });
          gl.bindFramebuffer(gl.FRAMEBUFFER, pressure.read.framebuffer); gl.clear(gl.COLOR_BUFFER_BIT);
          for (let i = 0; i < 10; i++) { draw(solve, pressure.write, { pressure: pressure.read, divergence, pixel: flowSize }); pressure.swap(); }
          draw(project, velocity.write, { flow: velocity.read, pressure: pressure.read, pixel: flowSize }); velocity.swap();
          draw(advect, dye.write, { flow: velocity.read, source: dye.read, flowTexel: flowSize, dt, decay: 1.1 }); dye.swap();
          draw(display, null, { ink: dye.read, pixel: dyeSize, opacity: dark ? 0.72 : 0.50 });
        },
        clear, destroy,
      };
    } catch { destroy(); return null; }
  }

  // Soft, short-lived swirls keep the interaction available without float WebGL support.
  function createSoftTrail(element) {
    const context = element.getContext('2d', { alpha: true });
    if (!context) return null;
    let width = 1, height = 1, motes = [];
    return {
      kind: 'canvas2d',
      resize(w, h) {
        width = w; height = h;
        const scale = Math.min(1, 1280 / w, 1000 / h);
        element.width = Math.round(w * scale); element.height = Math.round(h * scale);
        context.setTransform(scale, 0, 0, scale, 0, 0);
        element.dataset.engine = 'canvas2d'; motes = [];
      },
      stroke({ from, to, hue }) {
        const dx = (to[0] - from[0]) * width, dy = -(to[1] - from[1]) * height;
        const length = Math.hypot(dx, dy), count = Math.min(8, Math.max(1, Math.ceil(length / 18)));
        for (let i = 0; i < count; i++) {
          const along = (i + 1) / count;
          motes.push({ x: (from[0] + (to[0] - from[0]) * along) * width,
            y: (1 - from[1] - (to[1] - from[1]) * along) * height,
            vx: dx * 1.8, vy: dy * 1.8, age: 0, hue: hue * 360,
            turn: Math.sin(distance * 0.013 + i) * 2, radius: 27 + Math.min(length, 60) * 0.3 });
        }
        if (motes.length > 72) motes.splice(0, motes.length - 72);
      },
      step(dt, dark) {
        context.clearRect(0, 0, width, height);
        motes = motes.filter(mote => mote.age < 2.4);
        for (const mote of motes) {
          mote.age += dt;
          const oldX = mote.vx, turn = mote.turn * dt;
          mote.vx = (mote.vx - mote.vy * turn) * Math.exp(-dt * 1.9);
          mote.vy = (mote.vy + oldX * turn) * Math.exp(-dt * 1.9);
          mote.x += mote.vx * dt; mote.y += mote.vy * dt;
          const radius = mote.radius * (1 + mote.age * 0.4), fade = Math.pow(Math.max(0, 1 - mote.age / 2.4), 2);
          const gradient = context.createRadialGradient(mote.x, mote.y, 0, mote.x, mote.y, radius);
          gradient.addColorStop(0, `hsla(${mote.hue},80%,${dark ? 62 : 50}%,${fade * (dark ? 0.23 : 0.12)})`);
          gradient.addColorStop(0.5, `hsla(${mote.hue + 12},80%,60%,${fade * 0.06})`);
          gradient.addColorStop(1, `hsla(${mote.hue},80%,60%,0)`);
          context.fillStyle = gradient;
          context.fillRect(mote.x - radius, mote.y - radius, radius * 2, radius * 2);
        }
      },
      clear() { motes = []; context.clearRect(0, 0, width, height); },
      destroy() { motes = []; element.width = element.height = 1; },
    };
  }
})();
