(() => {
  'use strict';
  const root = document.querySelector('#projects');
  if (!root) return;
  const en = document.documentElement.lang === 'en';
  const cards = [...root.querySelectorAll('.project-card')];
  const search = root.querySelector('#project-search');
  if (search) {
    const filters = [...root.querySelectorAll('[data-project-filter]')];
    const categorySelect = root.querySelector('#project-category');
    const more = root.querySelector('#project-more');
    const count = root.querySelector('.project-count');
    const normalize = text => text.normalize('NFKC').toLocaleLowerCase().trim();
    const searchIndex = new Map(cards.map(card => [card, normalize(card.dataset.projectSearch)]));
    const params = new URLSearchParams(location.search);
    let category = filters.some(f => f.dataset.projectFilter === params.get('category')) ? params.get('category') : 'all';
    let limit = 9;
    let matches = cards;
    function update(reset = false) {
      if (reset) limit = 9;
      const terms = normalize(search.value).split(/\s+/).filter(Boolean);
      matches = cards.filter(card => (category === 'all' || card.dataset.projectCategories.split(' ').includes(category)) && terms.every(term => searchIndex.get(card).includes(term)));
      const visible = new Set(matches.slice(0,limit));
      for (const card of cards) card.hidden = !visible.has(card);
      for (const filter of filters) {
        const active = filter.dataset.projectFilter === category;
        filter.classList.toggle('active',active);
        filter.setAttribute('aria-pressed',String(active));
      }
      categorySelect.value = category;
      count.textContent = en ? `${visible.size} of ${matches.length} projects` : `${matches.length}件中 ${visible.size}件を表示`;
      more.parentElement.hidden = visible.size >= matches.length;
      more.querySelector('.project-more-count').textContent = en ? `${matches.length-visible.size} remaining` : `残り${matches.length-visible.size}件`;
      root.querySelector('.project-empty').hidden = matches.length > 0;
    }
    function selectCategory(value) {
      category = value;
      const url = new URL(location.href);
      if (category === 'all') url.searchParams.delete('category'); else url.searchParams.set('category',category);
      history.replaceState(null,'',url);
      update(true);
    }
    filters.forEach(filter => filter.addEventListener('click',() => selectCategory(filter.dataset.projectFilter)));
    search.addEventListener('input',() => update(true));
    search.addEventListener('search',() => update(true));
    categorySelect.addEventListener('change',() => selectCategory(categorySelect.value));
    more.addEventListener('click',() => {
      const firstNew = matches[limit]; limit += 9; update();
      firstNew?.querySelector('a')?.focus({preventScroll:true});
    });
    root.querySelector('#project-reset').addEventListener('click',() => {search.value='';selectCategory('all');search.focus({preventScroll:true});});
    root.querySelector('.project-toolbar').hidden = false;
    update();
  }
  const dialog = root.querySelector('#project-dialog');
  if (typeof dialog.showModal !== 'function') return;
  let opener;
  function openProject(card, trigger) {
    opener = trigger;
    const original = card.querySelector('.project-preview img');
    const image = dialog.querySelector('img');
    dialog.querySelector('h2').textContent = card.querySelector('h3').textContent;
    dialog.querySelector('.dialog-description').textContent = card.querySelector('.project-description').textContent;
    dialog.querySelector('.dialog-site').href = card.querySelector('.project-site').href;
    const scope = card.querySelector('.project-scope');
    dialog.querySelector('.dialog-scope').replaceChildren(...(scope ? [scope.cloneNode(true)] : []));
    const voice = card.querySelector('.featured-voice');
    const voiceLink = dialog.querySelector('.dialog-voice');
    voiceLink.hidden = !voice;
    if (voice) voiceLink.href = voice.href;
    image.src = original.src; image.alt = original.alt;
    image.width = original.naturalWidth || original.width;
    image.height = original.naturalHeight || original.height;
    dialog.showModal(); dialog.scrollTop=0;
    document.documentElement.classList.add('project-preview-open');
  }
  for (const card of cards) {
    const link = card.querySelector('[data-project-preview]');
    link.setAttribute('aria-haspopup','dialog'); link.setAttribute('aria-controls','project-dialog');
    link.addEventListener('click',event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button) return;
      event.preventDefault(); openProject(card,link);
    });
    const button = card.querySelector('[data-open-project]');
    button.hidden = false; button.setAttribute('aria-haspopup','dialog'); button.setAttribute('aria-controls','project-dialog');
    button.addEventListener('click',() => openProject(card,button));
  }
  dialog.querySelector('.project-dialog-close').addEventListener('click',() => dialog.close());
  dialog.querySelector('.dialog-voice').addEventListener('click',() => dialog.close());
  dialog.addEventListener('click',event => {
    if (event.target !== dialog) return;
    const box=dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });
  dialog.addEventListener('close',() => {document.documentElement.classList.remove('project-preview-open');opener?.focus({preventScroll:true});});
})();
