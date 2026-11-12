(() => {
  'use strict';
  const root = document.documentElement;
  const en = root.lang === 'en';
  const read = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const save = (key, value) => { try { localStorage.setItem(key, value); } catch {} };
  const themeMedia = matchMedia('(prefers-color-scheme: dark)');
  const reducedMedia = matchMedia('(prefers-reduced-motion: reduce)');
  let themeChoice = read('portfolio-theme');
  let motionChoice = read('portfolio-motion');
  const themeButton = document.querySelector('.theme-toggle');
  const motionButtons = [...document.querySelectorAll('.motion-toggle')];
  const moving = () => root.dataset.motion === 'running';
  const scrollBehavior = () => moving() ? 'smooth' : 'instant';
  function syncPreferences() {
    const dark = ['dark', 'light'].includes(themeChoice) ? themeChoice === 'dark' : themeMedia.matches;
    const paused = reducedMedia.matches || motionChoice === 'paused';
    root.dataset.theme = dark ? 'dark' : 'light';
    root.dataset.motion = paused ? 'paused' : 'running';
    document.querySelector('meta[name="theme-color"]').content = dark ? '#101a2a' : '#edf6ff';
    themeButton.querySelector('.theme-label').textContent = dark ? themeButton.dataset.night : themeButton.dataset.day;
    themeButton.setAttribute('aria-label', dark ? themeButton.dataset.toDay : themeButton.dataset.toNight);
    themeButton.title = themeButton.getAttribute('aria-label');
    for (const button of motionButtons) {
      const label = reducedMedia.matches ? button.dataset.reduced : paused ? button.dataset.resume : button.dataset.pause;
      button.setAttribute('aria-label', label);
      button.setAttribute('aria-pressed', String(paused));
      button.title = label;
      button.disabled = reducedMedia.matches;
      button.querySelector('.motion-label').textContent = reducedMedia.matches ? (en ? 'Reduced motion' : '動きを抑制中') : label;
      button.hidden = false;
    }
    themeButton.hidden = false;
  }
  themeButton.addEventListener('click', () => {
    themeChoice = root.dataset.theme === 'dark' ? 'light' : 'dark';
    save('portfolio-theme', themeChoice);
    syncPreferences();
  });
  for (const button of motionButtons) button.addEventListener('click', () => {
    motionChoice = moving() ? 'paused' : 'running';
    save('portfolio-motion', motionChoice);
    syncPreferences();
  });
  themeMedia.addEventListener('change', syncPreferences);
  reducedMedia.addEventListener('change', syncPreferences);
  window.addEventListener('storage', event => {
    if (event.key === 'portfolio-theme' || event.key === null) themeChoice = read('portfolio-theme');
    if (event.key === 'portfolio-motion' || event.key === null) motionChoice = read('portfolio-motion');
    syncPreferences();
  });
  syncPreferences();
  root.classList.add('js');
  document.addEventListener('visibilitychange', () => root.classList.toggle('tab-hidden', document.hidden));

  // Language links are ordinary links to complete static pages. Keep the current section.
  const sections = [...document.querySelectorAll('main > section[id]')];
  document.querySelectorAll('[data-language]').forEach(link => link.addEventListener('click', () => {
    const current = [...sections].reverse().find(section => section.getBoundingClientRect().top <= 160);
    const target = new URL(link.href);
    target.search = location.search;
    target.hash = current && current.id !== 'top' ? current.id : '';
    link.href = target.href;
  }));

  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  nav.classList.add('js-nav');
  menuButton.hidden = false;
  function closeMenu(restoreFocus = false) {
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    if (restoreFocus) menuButton.focus();
  }
  menuButton.addEventListener('click', () => {
    const opened = menuButton.getAttribute('aria-expanded') !== 'true';
    nav.classList.toggle('is-open', opened);
    menuButton.setAttribute('aria-expanded', String(opened));
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true); });
  document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
  matchMedia('(min-width: 1081px)').addEventListener('change', () => closeMenu());

  // Native touch scrolling, arrow controls, keyboard navigation and mouse dragging.
  const track = document.querySelector('.review-track');
  if (track) {
    const cards = [...track.querySelectorAll('.review-card')];
    const previous = document.querySelector('.review-prev');
    const next = document.querySelector('.review-next');
    const position = document.querySelector('.review-position');
    let currentIndex = 0;
    function nearestSlide() {
      const left = track.getBoundingClientRect().left;
      return cards.reduce((best, card, i) => Math.abs(card.getBoundingClientRect().left - left) < Math.abs(cards[best].getBoundingClientRect().left - left) ? i : best, 0);
    }
    function updateCarousel() {
      currentIndex = nearestSlide();
      previous.disabled = currentIndex === 0;
      next.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
      const text = `${String(currentIndex + 1).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
      if (position.textContent !== text) position.textContent = text;
    }
    function goTo(index) {
      const card = cards[Math.max(0, Math.min(cards.length - 1, index))];
      const left = track.scrollLeft + card.getBoundingClientRect().left - track.getBoundingClientRect().left;
      track.scrollTo({ left, behavior: scrollBehavior() });
    }
    previous.addEventListener('click', () => goTo(currentIndex - 1));
    next.addEventListener('click', () => goTo(currentIndex + 1));
    let scrollTimer;
    track.addEventListener('scroll', () => { clearTimeout(scrollTimer); scrollTimer = setTimeout(updateCarousel, 80); }, { passive: true });
    track.addEventListener('keydown', event => {
      if (event.target !== track) return;
      const destinations = { ArrowLeft: currentIndex - 1, ArrowRight: currentIndex + 1, Home: 0, End: cards.length - 1 };
      if (Object.hasOwn(destinations, event.key)) { event.preventDefault(); goTo(destinations[event.key]); }
    });
    let drag = null;
    let suppressClick = false;
    track.addEventListener('pointerdown', event => {
      if (event.pointerType !== 'mouse' || event.button !== 0 || event.target.closest('button,summary,input,textarea,select')) return;
      drag = { id: event.pointerId, x: event.clientX, y: event.clientY, scroll: track.scrollLeft, active: false };
    });
    track.addEventListener('pointermove', event => {
      if (!drag || drag.id !== event.pointerId) return;
      const dx = event.clientX - drag.x;
      if (!drag.active && Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(event.clientY - drag.y)) {
        drag.active = true;
        suppressClick = true;
        track.setPointerCapture(event.pointerId);
        track.classList.add('is-dragging');
      }
      if (drag.active) { event.preventDefault(); track.scrollLeft = drag.scroll - dx; }
    });
    function finishDrag() {
      if (!drag) return;
      const { id, active } = drag;
      drag = null;
      track.classList.remove('is-dragging');
      if (track.hasPointerCapture(id)) track.releasePointerCapture(id);
      if (active) { updateCarousel(); goTo(currentIndex); }
      setTimeout(() => { suppressClick = false; }, 150);
    }
    window.addEventListener('pointerup', finishDrag);
    track.addEventListener('pointercancel', finishDrag);
    track.addEventListener('lostpointercapture', finishDrag);
    track.addEventListener('dragstart', event => event.preventDefault());
    track.addEventListener('click', event => { if (suppressClick) { event.preventDefault(); event.stopPropagation(); } }, true);
    document.querySelector('.review-controls').hidden = false;
    updateCarousel();
    window.addEventListener('resize', updateCarousel);
  }

  const reveals = [...document.querySelectorAll('.reveal')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }, { rootMargin: '0px 0px -35px 0px', threshold: 0.04 });
    root.classList.add('reveal-ready');
    reveals.forEach(element => observer.observe(element));
    const motionObserver = new IntersectionObserver(entries => {
      for (const entry of entries) entry.target.classList.toggle('motion-offscreen', !entry.isIntersecting);
    }, { rootMargin: '150px' });
    document.querySelectorAll('.stack-section,.industries-section').forEach(element => motionObserver.observe(element));
  } else reveals.forEach(element => element.classList.add('is-visible'));
  const progress = document.querySelector('.reading-progress');
  const steps = document.querySelector('.process-steps');
  let frame = 0;
  function updateProgress() {
    frame = 0;
    const max = root.scrollHeight - innerHeight;
    const amount = max > 0 ? Math.max(0, Math.min(1, scrollY / max)) : 0;
    root.style.setProperty('--page-progress', amount.toFixed(4));
    progress.style.transform = `scaleX(${amount})`;
    const bounds = steps?.getBoundingClientRect();
    if (steps) steps.style.setProperty('--process-progress', Math.max(0, Math.min(1, (innerHeight * 0.65 - bounds.top) / bounds.height)).toFixed(4));
  }
  const requestProgress = () => { if (!frame) frame = requestAnimationFrame(updateProgress); };
  window.addEventListener('scroll', requestProgress, { passive: true });
  window.addEventListener('resize', requestProgress);
  updateProgress();

  const serviceCards = [...document.querySelectorAll('.service-item')];
  if (serviceCards.length) {
    const initialLimit = Number(document.querySelector('.services-grid').dataset.serviceLimit) || 8;
    const filters = [...document.querySelectorAll('[data-filter]')];
    const counter = document.querySelector('.service-count');
    const more = document.querySelector('.services-more');
    const showAll = document.querySelector('#show-all-services');
    let category = 'all';
    let expanded = false;
    function updateServices() {
      const matching = serviceCards.filter(card => category === 'all' || card.dataset.category === category);
      const visible = category === 'all' && !expanded ? matching.slice(0, initialLimit) : matching;
      for (const card of serviceCards) card.hidden = !visible.includes(card);
      for (const filter of filters) { const active = filter.dataset.filter === category; filter.classList.toggle('active', active); filter.setAttribute('aria-pressed', String(active)); }
      counter.textContent = en ? `Showing ${visible.length} of ${matching.length}` : `${visible.length} / ${matching.length} 件を表示`;
      more.hidden = category !== 'all' || expanded || matching.length <= initialLimit;
      showAll.setAttribute('aria-expanded', String(expanded));
      requestProgress();
    }
    for (const filter of filters) filter.addEventListener('click', () => { category = filter.dataset.filter; expanded = false; updateServices(); });
    showAll.addEventListener('click', () => { expanded = true; updateServices(); serviceCards[initialLimit]?.querySelector('summary')?.focus({ preventScroll: true }); });
    document.querySelector('.service-toolbar').hidden = false;
    updateServices();
  }


  // Rotate the complete portfolio, loading only the current and upcoming previews eagerly.
  const showcase = document.querySelector('.hero-showcase');
  if (showcase) {
    const slides = [...showcase.querySelectorAll('.hero-slide')];
    const viewport = showcase.querySelector('.hero-slides');
    const toggle = showcase.querySelector('.hero-autoplay');
    const position = showcase.querySelector('.hero-position');
    const announcement = showcase.querySelector('.hero-status');
    const INTERVAL_MS = 2000;
    let slide = 0, requested = 0, timer = 0, requestId = 0;
    let playback = true, hovered = false, touching = false, visible = false, suspended = false;
    const normalize = index => (index + slides.length) % slides.length;
    const canPlay = () => playback && moving() && !document.hidden && visible && !suspended && !hovered && !touching &&
      !root.classList.contains('project-preview-open') &&
      (!showcase.contains(document.activeElement) || document.activeElement === toggle);
    const stopTimer = () => { clearTimeout(timer); timer = 0; };
    async function loadSlide(index) {
      const image = slides[normalize(index)].querySelector('img');
      image.loading = 'eager';
      if (image.complete && image.naturalWidth) return true;
      try { await image.decode(); return image.naturalWidth > 0; } catch { return false; }
    }
    function schedule() {
      stopTimer();
      const enabled = playback && moving();
      toggle.disabled = !moving();
      toggle.setAttribute('aria-label', !moving() ? (en ? 'Slideshow paused by motion settings' : '動きの設定によりスライドショーを停止中') : enabled ? (en ? 'Pause slideshow' : 'スライドショーを一時停止') : (en ? 'Play slideshow' : 'スライドショーを再生'));
      toggle.title = toggle.getAttribute('aria-label');
      toggle.querySelector('.hero-pause-icon').hidden = !enabled;
      toggle.querySelector('.hero-play-icon').hidden = enabled;
      if (!canPlay() || slides.length < 2) return;
      void loadSlide(slide + 1);
      timer = setTimeout(() => { timer = 0; void showSlide(slide + 1, false); }, INTERVAL_MS);
    }
    async function showSlide(next, manual = true) {
      stopTimer();
      requested = normalize(next);
      const target = requested, request = ++requestId;
      const ready = await loadSlide(target);
      if (request !== requestId) return;
      if (!manual && !canPlay()) { requested = slide; return; }
      if (ready) {
        slides[slide].hidden = true;
        slide = target;
        slides[slide].hidden = false;
        position.textContent = String(slide + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0');
        if (manual) announcement.textContent = position.textContent + ' — ' + slides[slide].querySelector('strong').textContent;
      } else {
        requested = slide;
        if (manual) announcement.textContent = en ? 'The preview could not be loaded. Please try again.' : '画像を読み込めませんでした。もう一度お試しください。';
      }
      schedule();
    }
    showcase.querySelector('.hero-carousel-controls').hidden = false;
    showcase.querySelector('.hero-prev').addEventListener('click', () => void showSlide(requested - 1));
    showcase.querySelector('.hero-next').addEventListener('click', () => void showSlide(requested + 1));
    toggle.addEventListener('click', () => { playback = !playback; schedule(); });
    viewport.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') { hovered = true; schedule(); } });
    viewport.addEventListener('pointerleave', event => { if (event.pointerType === 'mouse') { hovered = false; schedule(); } });
    showcase.addEventListener('focusin', schedule);
    showcase.addEventListener('focusout', () => queueMicrotask(schedule));
    let touchStart;
    viewport.addEventListener('touchstart', event => {
      touching = true; stopTimer();
      touchStart = {x:event.changedTouches[0].clientX,y:event.changedTouches[0].clientY};
    }, {passive:true});
    viewport.addEventListener('touchend', event => {
      touching = false;
      if (touchStart) {
        const dx = event.changedTouches[0].clientX - touchStart.x, dy = event.changedTouches[0].clientY - touchStart.y;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) void showSlide(requested + (dx < 0 ? 1 : -1));
        else schedule();
      }
      touchStart = null;
    }, {passive:true});
    viewport.addEventListener('touchcancel', () => { touching = false; touchStart = null; schedule(); }, {passive:true});
    const preferenceObserver = new MutationObserver(schedule);
    preferenceObserver.observe(root, {attributes:true, attributeFilter:['data-motion','class']});
    document.addEventListener('visibilitychange', schedule);
    let visibilityObserver;
    if ('IntersectionObserver' in window) {
      visibilityObserver = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; schedule(); }, {threshold:0});
      visibilityObserver.observe(showcase);
    } else { visible = true; }
    window.addEventListener('pageshow', () => { suspended = false; schedule(); });
    window.addEventListener('pagehide', event => {
      suspended = true; stopTimer(); requestId++;
      if (event.persisted) return;
      preferenceObserver.disconnect(); visibilityObserver?.disconnect();
      document.removeEventListener('visibilitychange', schedule);
    });
    void loadSlide(0).then(schedule);
  }
  const sectionLinks = [...document.querySelectorAll('[data-nav-section]')];
  if ('IntersectionObserver' in window && document.body.dataset.page === 'home') {
    const navigationObserver = new IntersectionObserver(entries => {
      const entry = entries.find(item => item.isIntersecting);
      if (!entry) return;
      sectionLinks.forEach(link => link.classList.toggle('is-active', link.dataset.navSection === entry.target.id));
    }, {rootMargin:'-15% 0px -65% 0px'});
    sections.forEach(section => navigationObserver.observe(section));
  }

  // Project briefs never leave this page and are not persisted.
  const copyEmail = document.querySelector('#copy-email');
  if (copyEmail) {
    copyEmail.hidden = false;
    copyEmail.addEventListener('click', async () => {
      const emailStatus = document.querySelector('.email-status');
      try {
        if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(copyEmail.dataset.email);
        emailStatus.textContent = en ? 'Email address copied.' : 'メールアドレスをコピーしました。';
      } catch {
        emailStatus.textContent = en ? 'Please select and copy the email address above.' : '上のメールアドレスを選択してコピーしてください。';
      }
    });
  }
  const form = document.querySelector('#brief-form');
  const topic = document.querySelector('#brief-topic');
  const output = document.querySelector('#brief-output');
  const result = document.querySelector('.brief-result');
  const status = document.querySelector('.brief-status');
  document.querySelectorAll('[data-inquiry]').forEach(link => link.addEventListener('click', () => {
    topic.value = link.dataset.inquiry;
    result.hidden = true;
    status.textContent = en ? `Selected: ${topic.value}. You can add your budget and timeline below.` : `「${topic.value}」を選択しました。ご予算やご希望を入力できます。`;
  }));
  form.addEventListener('input', () => { result.hidden = true; status.textContent = ''; });
  form.addEventListener('submit', event => {
    event.preventDefault();
    const values = new FormData(form);
    const message = String(values.get('message') || '').trim();
    output.value = en ? [
      'I saw your portfolio and would like to discuss a development project.', '',
      `Project: ${values.get('topic')}`, `Budget: ${values.get('budget')}`, `Timeline: ${values.get('timing')}`, '',
      'My challenge or idea:', message || 'I would like to explain my current situation and discuss how to move forward.', '',
      'Please let me know how you could help and what the next steps would be.',
    ].join('\n') : [
      'ポートフォリオを拝見し、開発について相談したくご連絡しました。', '',
      `【相談内容】${values.get('topic')}`, `【予算の目安】${values.get('budget')}`, `【希望時期】${values.get('timing')}`, '',
      '【困っていること・実現したいこと】', message || 'まずは現状をお伝えし、進め方から相談したいです。', '',
      '対応可能な範囲と、進め方についてご相談させてください。',
    ].join('\n');
    const emailDraft = document.querySelector('#email-brief');
    if (emailDraft) {
      const subject = en ? 'Portfolio inquiry: ' + values.get('topic') : 'ポートフォリオからのご相談：' + values.get('topic');
      emailDraft.href = 'mailto:' + emailDraft.dataset.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(output.value);
    }
    result.hidden = false;
    status.textContent = en ? 'Your brief is ready to review and copy. It has not been sent.' : '相談文を作成しました。内容を確認してコピーできます。まだ送信されていません。';
    output.focus({ preventScroll: true });
    result.scrollIntoView({ behavior: scrollBehavior(), block: 'nearest' });
  });
  document.querySelector('.brief-submit').disabled = false;
  document.querySelector('#copy-brief').addEventListener('click', async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(output.value);
      status.textContent = en ? 'Copied. Paste the brief into your preferred contact channel.' : '相談文をコピーしました。ご利用の連絡先に貼り付けてお送りください。';
    } catch {
      output.focus(); output.select();
      status.textContent = en ? 'Automatic copying is unavailable. Please copy the selected text manually.' : '自動コピーを利用できませんでした。選択された相談文を、コピー操作でコピーしてください。';
    }
  });
})();
