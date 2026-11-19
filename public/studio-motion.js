/* The poster is the default for reduced motion, data saving, and unsupported playback. */
(() => {
  const film = document.querySelector('[data-studio-film]');
  if (!film || !('IntersectionObserver' in window) || !film.canPlayType('video/mp4')) return;

  const root = document.documentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const connection = navigator.connection;
  let inView = false;
  let failed = false;

  function updatePlayback() {
    const canRun = inView && !document.hidden && !reduced.matches &&
      !connection?.saveData && root.dataset.motion === 'running' &&
      !root.classList.contains('project-preview-open');

    if (!canRun || failed) {
      film.pause();
      return;
    }
    if (!film.hasAttribute('src')) {
      film.muted = true;
      film.src = '/images/hero/virtual-studio-loop.mp4';
    }
    film.play().catch(() => { /* Autoplay policies can keep the poster visible. */ });
  }

  film.addEventListener('playing', () => { film.dataset.ready = ''; });
  film.addEventListener('error', () => {
    failed = true;
    film.removeAttribute('data-ready');
  });
  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    updatePlayback();
  }).observe(film);
  new MutationObserver(updatePlayback).observe(root, {
    attributes: true, attributeFilter: ['data-motion', 'class'],
  });
  document.addEventListener('visibilitychange', updatePlayback);
  reduced.addEventListener('change', updatePlayback);
  connection?.addEventListener('change', updatePlayback);
  window.addEventListener('pagehide', () => film.pause());
  window.addEventListener('pageshow', updatePlayback);
})();
