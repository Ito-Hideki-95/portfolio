(() => {
  'use strict';
  const root = document.querySelector('#projects');
  if (!root) return;
  const en = document.documentElement.lang === 'en';
  const cards = [...root.querySelectorAll('.project-card')];
  const filters = [...root.querySelectorAll('[data-project-filter]')];
  const search = root.querySelector('#project-search');
  const categorySelect = root.querySelector('#project-category');
  const more = root.querySelector('#project-more');
  const count = root.querySelector('.project-count');
  const normalize = text => text.normalize('NFKC').toLocaleLowerCase().trim();
  const searchIndex = new Map(cards.map(card => [card, normalize(card.dataset.projectSearch)]));
  let category = 'all';
  let limit = 6;
  let matches = cards;

  function update(reset = false) {
    if (reset) limit = 6;
    const terms = normalize(search.value).split(/\s+/).filter(Boolean);
    matches = cards.filter(card => (category === 'all' || card.dataset.projectCategories.split(' ').includes(category)) && terms.every(term => searchIndex.get(card).includes(term)));
    const visible = new Set(matches.slice(0, limit));
    for (const card of cards) card.hidden = !visible.has(card);
    for (const filter of filters) {
      const active = filter.dataset.projectFilter === category;
      filter.classList.toggle('active', active);
      filter.setAttribute('aria-pressed', String(active));
    }
    categorySelect.value = category;
    count.textContent = en ? `${visible.size} of ${matches.length} projects` : `${matches.length}件中 ${visible.size}件を表示`;
    more.parentElement.hidden = visible.size >= matches.length;
    more.querySelector('.project-more-count').textContent = en ? `${matches.length - visible.size} remaining` : `残り${matches.length - visible.size}件`;
    root.querySelector('.project-empty').hidden = matches.length > 0;
  }
  filters.forEach(filter => filter.addEventListener('click', () => {
    category = filter.dataset.projectFilter;
    update(true);
  }));
  search.addEventListener('input', () => update(true));
  categorySelect.addEventListener('change', () => { category = categorySelect.value; update(true); });
  search.addEventListener('search', () => update(true));
  more.addEventListener('click', () => {
    const firstNew = matches[limit];
    limit += 6;
    update();
    // Move keyboard focus to the first revealed project, not past the newly added work.
    firstNew?.querySelector('a')?.focus({ preventScroll: true });
  });
  root.querySelector('#project-reset').addEventListener('click', () => {
    category = 'all'; search.value = ''; update(true); search.focus({ preventScroll: true });
  });
  root.querySelector('.project-toolbar').hidden = false;
  update();

  const dialog = root.querySelector('#project-dialog');
  if (typeof dialog.showModal !== 'function') return;
  for (const link of root.querySelectorAll('[data-project-preview]')) {
    link.setAttribute('aria-haspopup', 'dialog');
    link.setAttribute('aria-controls', 'project-dialog');
    // The image link remains usable without JavaScript and with modifier keys.
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button) return;
      event.preventDefault();
      const card = link.closest('.project-card');
      const image = dialog.querySelector('img');
      const original = link.querySelector('img');
      dialog.querySelector('h2').textContent = card.querySelector('h3').textContent;
      dialog.querySelector('.project-dialog-footer p').textContent = card.querySelector('.project-description').textContent;
      dialog.querySelector('.project-dialog-footer a').href = card.querySelector('.project-site').href;
      image.src = original.src;
      image.alt = original.alt;
      image.width = original.naturalWidth || original.width;
      image.height = original.naturalHeight || original.height;
      dialog.showModal();
      document.documentElement.classList.add('project-preview-open');
    });
  }
  dialog.querySelector('.project-dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) {
      const box = dialog.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
    }
  });
  dialog.addEventListener('close', () => document.documentElement.classList.remove('project-preview-open'));
})();
