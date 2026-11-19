// Apply saved display preferences before styles load to avoid a theme flash.
(() => {
  const read = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const theme = read('portfolio-theme');
  document.documentElement.dataset.theme = ['light', 'dark'].includes(theme) ? theme : 'dark';
  document.documentElement.dataset.motion = matchMedia('(prefers-reduced-motion: reduce)').matches || read('portfolio-motion') === 'paused' ? 'paused' : 'running';
})();
