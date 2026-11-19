// A projected, rotating stack diagram. It has no input or network dependencies.
(() => {
  const canvas = document.querySelector('.stack-atlas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const root = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const tau = 2 * Math.PI;
  const logos = ['react','postgresql','python','shopify','typescript','cloudflare','vuedotjs','laravel'];
  const symbols = logos.map(name => {
    const image = new Image();
    image.onload = () => { if (visible) paint(); };
    image.src = '/images/stack/' + name + '.svg';
    return image;
  });
  let seed = 29;
  const random = () => ((seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 4294967296);
  const galaxy = Array.from({length:440}, (_, i) => {
    const r = Math.pow(random(), .67) * 61, a = (i % 3) * tau / 3 + r * .055 + (random() - .5) * .7;
    return [Math.cos(a)*r, Math.sin(a)*r*.47, random()*.9+.24];
  });
  const stars = Array.from({length:120}, () => [random()*700,random()*370,random()*.9+.3]);
  let visible = false, frame = 0, previous = 0, phase = .72;

  function onSphere(latitude, longitude) {
    const side = Math.cos(latitude);
    const y = Math.sin(latitude), z = side * Math.sin(longitude);
    return [side * Math.cos(longitude), y * .91 - z * .42, y * .42 + z * .91];
  }
  function orbit(angle, index) {
    const tilt = [-.26,.52,-.95,.97][index % 4];
    const radius = 160 + 12 * (index % 3);
    const x = radius * Math.cos(angle), y = radius * .38 * Math.sin(angle);
    return [x * Math.cos(tilt) - y * Math.sin(tilt), x * Math.sin(tilt) + y * Math.cos(tilt), Math.sin(angle)];
  }
  function paint() {
    const width = canvas.clientWidth;
    if (!width) return;
    const height = canvas.clientHeight, dpr = Math.min(devicePixelRatio || 1, 1.75);
    if (canvas.width !== Math.round(width*dpr) || canvas.height !== Math.round(height*dpr)) {
      canvas.width = Math.round(width*dpr); canvas.height = Math.round(height*dpr);
    }
    ctx.setTransform(canvas.width/700,0,0,canvas.height/370,0,0);
    ctx.clearRect(0,0,700,370);
    const dark = root.dataset.theme === 'dark';
    ctx.fillStyle = dark ? '#d5e6ff7a' : '#45695160';
    for (const [x,y,r] of stars) ctx.fillRect(x,y,r,r);
    ctx.save();
    ctx.translate(575,64); ctx.rotate(-.39);
    ctx.fillStyle = dark ? '#b5c5f4b8' : '#53715e85';
    for (const [x,y,r] of galaxy) ctx.fillRect(x,y,r,r);
    ctx.restore();
    ctx.save();
    ctx.translate(340,186);
    const halo = ctx.createRadialGradient(0,0,65,0,0,165);
    halo.addColorStop(0,dark ? '#48dba94a' : '#67c29244'); halo.addColorStop(1,'#38c99400');
    ctx.fillStyle = halo; ctx.fillRect(-170,-170,340,340);
    function ring(index, front) {
      ctx.beginPath();
      for (let n=0;n<=96;n++) {
        const a=(front ? 0 : Math.PI)+Math.PI*n/96;
        const [x,y]=orbit(a,index);
        if (!n) ctx.moveTo(x,y); else ctx.lineTo(x,y);
      }
      ctx.lineWidth = front ? 1.05 : .7;
      ctx.strokeStyle = dark ? (front ? '#9bf3b690' : '#9ac9e05e') : (front ? '#3376509c' : '#496e6c66');
      ctx.stroke();
    }
    for (let i=0;i<4;i++) ring(i,false);
    function marker(index,position) {
      const [x,y,z] = position, size = 17+z*2;
      ctx.beginPath(); ctx.arc(x,y,size,0,tau);
      ctx.fillStyle=dark ? '#def3e5' : '#f9fffc'; ctx.fill();
      ctx.strokeStyle=dark ? '#97ddb5' : '#83ae93'; ctx.lineWidth=1; ctx.stroke();
      const image=symbols[index];
      if (image.complete && image.naturalWidth) ctx.drawImage(image,x-size*.65,y-size*.65,size*1.3,size*1.3);
    }
    const positions = logos.map((_,i)=>orbit(phase*.4+i*2.27,i));
    positions.forEach((p,i)=>{if (p[2]<0) marker(i,p);});
    const radius=88;
    const globe = ctx.createRadialGradient(-32,-40,4,5,12,104);
    globe.addColorStop(0,dark ? '#9dd8ab' : '#91caa0'); globe.addColorStop(.34,'#478371');
    globe.addColorStop(.72,'#153f3b'); globe.addColorStop(.96,'#081d28'); globe.addColorStop(1,'#2c6857');
    ctx.fillStyle=globe; ctx.beginPath(); ctx.arc(0,0,radius,0,tau); ctx.fill();
    function meridian(samples) {
      ctx.beginPath(); let pen=false;
      for(let j=0;j<=64;j++) {
        const [lat,lon] = samples(j/64);
        const [x,y,z] = onSphere(lat,lon);
        if(z<0){pen=false;continue;}
        if(pen)ctx.lineTo(x*radius,y*radius); else ctx.moveTo(x*radius,y*radius);
        pen=true;
      }
      ctx.stroke();
    }
    ctx.strokeStyle='#c5f6cd88';ctx.lineWidth=.8;
    for(let i=1;i<15;i++) meridian(t=>[-Math.PI/2+i*Math.PI/15,t*tau+phase]);
    for(let i=0;i<24;i++) meridian(t=>[(t-.5)*Math.PI,i*tau/24+phase]);
    for(let i=0;i<4;i++) ring(i,true);
    positions.forEach((p,i)=>{if(p[2]>=0)marker(i,p);});
    ctx.restore();
  }
  function tick(now) {
    frame=0;
    if(!visible || document.hidden) return;
    if(now-previous>41) {
      phase+= previous ? Math.min(now-previous,100)*.000095 : 0;
      previous=now; paint();
    }
    if(!reduce.matches && root.dataset.motion!=='paused') frame=requestAnimationFrame(tick);
  }
  function sync() {
    cancelAnimationFrame(frame); frame=0; previous=0;
    if(visible && !document.hidden){paint(); if(!reduce.matches && root.dataset.motion!=='paused') frame=requestAnimationFrame(tick);}
  }
  if('IntersectionObserver' in window) {
    new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;sync();}).observe(canvas);
  } else {visible=true;sync();}
  new MutationObserver(sync).observe(root,{attributes:true,attributeFilter:['data-motion','data-theme']});
  if('ResizeObserver' in window) new ResizeObserver(()=>{if(visible)paint();}).observe(canvas);
  document.addEventListener('visibilitychange',sync);
  reduce.addEventListener('change',sync);
})();
