(() => {
  'use strict';
  for (const text of document.querySelectorAll('[data-review-text]')) {
    const button = text.nextElementSibling;
    if (!button?.classList.contains('review-text-toggle')) continue;
    const setExpanded = expanded => {
      text.classList.toggle('is-expanded', expanded);
      button.setAttribute('aria-expanded', String(expanded));
      const label = expanded ? button.dataset.collapseLabel : button.dataset.expandLabel;
      button.setAttribute('aria-label', label);
      button.title = label;
      button.querySelector('span').textContent = expanded ? button.dataset.collapseText : '…';
    };
    const measure = () => {
      const limit = parseFloat(getComputedStyle(text).lineHeight) * 5;
      const overflows = text.scrollHeight > limit + 2;
      text.classList.toggle('is-collapsible', overflows);
      button.hidden = !overflows;
      if (!overflows) setExpanded(false);
    };
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') !== 'true';
      setExpanded(expanded);
      if (!expanded) {
        const bounds = button.getBoundingClientRect();
        const header = document.querySelector('.site-header')?.getBoundingClientRect().bottom || 0;
        if (bounds.top < header || bounds.bottom > innerHeight) button.scrollIntoView({block:'center', inline:'nearest', behavior:'instant'});
      }
    });
    measure();
    if ('ResizeObserver' in window) new ResizeObserver(measure).observe(text);
    else window.addEventListener('resize', measure, {passive:true});
  }
})();
