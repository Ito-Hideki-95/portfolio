(() => {
  const panel = document.querySelector('#portfolio-guide');
  const toggle = document.querySelector('.guide-toggle');
  if (panel && toggle && 'showPopover' in panel) {
    panel.hidden = false;
    toggle.hidden = false;
    panel.addEventListener('click', event => {
      if (event.target.closest('a')) panel.hidePopover();
    });
  }
  const top = document.querySelector('.back-to-top');
  const main = document.querySelector('#main');
  if (!top || !main || !('IntersectionObserver' in window)) return;
  const marker = document.createElement('span');
  marker.className = 'top-marker';
  marker.setAttribute('aria-hidden','true');
  main.prepend(marker);
  new IntersectionObserver(([entry]) => {
    top.hidden = entry.isIntersecting || entry.boundingClientRect.top > 0;
  }, {rootMargin:'550px 0px 0px'}).observe(marker);
})();
