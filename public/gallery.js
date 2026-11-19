(() => {
  'use strict';
  const root=document.querySelector('#projects');
  if(!root)return;
  const en=document.documentElement.lang==='en';
  const cards=[...root.querySelectorAll('.project-card')];
  const search=root.querySelector('#project-search');
  let revealCard=()=>{};
  if (search) {
    const filters = [...root.querySelectorAll('[data-project-filter]')];
    const categorySelect = root.querySelector('#project-category');
    const stackSelect = root.querySelector('#project-stack');
    const shortcuts = [...root.querySelectorAll('[data-stack]')];
    const more = root.querySelector('#project-more');
    const count = root.querySelector('.project-count');
    const normalize = text => text.normalize('NFKC').toLowerCase().trim();
    const entries = cards.map(card => ({
      card,
      categories: card.dataset.projectCategories.split(' '),
      searchText: normalize(card.dataset.projectSearch),
      stacks: [...card.querySelectorAll('.project-technology li')].map(tag => tag.textContent)
    }));
    const params = new URLSearchParams(location.search);
    const stackOptions = [...stackSelect.options];
    const stackLabels = new Map(stackOptions.map(option => [option.value, option.textContent.replace(/ \(\d+\)$/, '')]));
    let category = filters.some(button => button.dataset.projectFilter === params.get('category'))
      ? params.get('category') : 'all';
    let stack = stackOptions.find(option => normalize(option.value) === normalize(params.get('stack') || ''))?.value || '';
    let limit = 9;
    let matches = entries;
    search.value = params.get('search') || '';

    function update() {
      const terms = normalize(search.value).split(/\s+/).filter(Boolean);
      const eligible = entries.filter(entry =>
        (category === 'all' || entry.categories.includes(category)) &&
        terms.every(term => entry.searchText.includes(term))
      );
      const stackCounts = new Map();
      for (const entry of eligible) {
        for (const name of entry.stacks.length ? entry.stacks : ['other']) {
          stackCounts.set(name, (stackCounts.get(name) || 0) + 1);
        }
      }
      matches = eligible.filter(entry => !stack || (stack === 'other' ? !entry.stacks.length : entry.stacks.includes(stack)));
      const visible = new Set(matches.slice(0, limit).map(entry => entry.card));
      for (const card of cards) card.hidden = !visible.has(card);
      for (const button of filters) {
        const active = button.dataset.projectFilter === category;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
      }
      for (const option of stackOptions) {
        const size = option.value ? (stackCounts.get(option.value) || 0) : eligible.length;
        option.textContent = stackLabels.get(option.value) + ' (' + size + ')';
      }
      for (const button of shortcuts) {
        const key = button.dataset.stack;
        button.querySelector('span').textContent = stackCounts.get(key) || 0;
        button.classList.toggle('active', key === stack);
        button.setAttribute('aria-pressed', String(key === stack));
      }
      categorySelect.value = category;
      stackSelect.value = stack;
      count.textContent = en ? visible.size + ' of ' + matches.length + ' projects'
        : matches.length + '件中 ' + visible.size + '件を表示';
      more.parentElement.hidden = visible.size >= matches.length;
      more.querySelector('.project-more-count').textContent = en
        ? (matches.length - visible.size) + ' remaining' : '残り' + (matches.length - visible.size) + '件';
      root.querySelector('.project-empty').hidden = matches.length > 0;
    }

    function applyFilters() {
      const url = new URL(location.href);
      for (const [key, value] of Object.entries({ category: category === 'all' ? '' : category, stack, search: search.value.trim() })) {
        if (value) url.searchParams.set(key, value);
        else url.searchParams.delete(key);
      }
      url.hash = '';
      history.replaceState(null, '', url);
      limit = 9;
      update();
    }

    function selectCategory(value) {
      category = value;
      applyFilters();
    }

    filters.forEach(button => button.addEventListener('click', () => selectCategory(button.dataset.projectFilter)));
    categorySelect.addEventListener('change', () => selectCategory(categorySelect.value));
    stackSelect.addEventListener('change', () => {
      stack = stackSelect.value;
      applyFilters();
    });
    shortcuts.forEach(button => button.addEventListener('click', () => {
      stack = button.dataset.stack === stack ? '' : button.dataset.stack;
      applyFilters();
    }));
    search.addEventListener('input', applyFilters);
    search.addEventListener('search', applyFilters);
    more.addEventListener('click', () => {
      const next = matches[limit];
      limit += 9;
      update();
      next?.card.querySelector('a')?.focus({ preventScroll: true });
    });
    root.querySelector('#project-reset').addEventListener('click', () => {
      search.value = '';
      stack = '';
      selectCategory('all');
      search.focus({ preventScroll: true });
    });
    revealCard = card => {
      let index = matches.findIndex(entry => entry.card === card);
      if (index < 0) {
        category = 'all';
        stack = '';
        search.value = '';
        applyFilters();
        const url = new URL(location.href);
        url.hash = card.id;
        history.replaceState(null, '', url);
        index = cards.indexOf(card);
      }
      limit = Math.max(limit, Math.ceil((index + 1) / 9) * 9);
      update();
    };
    root.querySelector('.project-toolbar').hidden = false;
    update();
  }
  const dialog=root.querySelector('#project-dialog');
  if(typeof dialog.showModal!=='function')return;
  let opener;
  function openProject(card,trigger){
    opener=trigger;
    const original=card.querySelector('.project-preview img');
    const image=dialog.querySelector('img');
    dialog.dataset.projectId=card.dataset.projectId;
    dialog.querySelector('h2').textContent=card.querySelector('h3').textContent;
    const insights=card.querySelector('[data-project-insights]');
    dialog.querySelector('.dialog-insights').replaceChildren(...(insights?[insights.content.cloneNode(true)]:[]));
    image.src=original.src;image.alt=original.alt;image.width=original.naturalWidth||original.width;image.height=original.naturalHeight||original.height;
    if(!dialog.open)dialog.showModal();dialog.scrollTop=0;
    document.documentElement.classList.add('project-preview-open');
  }
  function show(card,trigger){
    const url=new URL(location.href);url.hash=card.id;history.replaceState(null,'',url);
    openProject(card,trigger);
  }
  cards.forEach(card=>{
    const button = card.querySelector('[data-open-case]');
    button.hidden = false;
    button.setAttribute('aria-haspopup', 'dialog');
    button.setAttribute('aria-controls', 'project-dialog');
    button.addEventListener('click', () => show(card, button));
    const link=card.querySelector('[data-project-preview]');
    link.setAttribute('aria-haspopup','dialog');link.setAttribute('aria-controls','project-dialog');
    link.addEventListener('click',event=>{if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||event.button)return;event.preventDefault();show(card,link);});
  });
  function openHash(){
    const card=cards.find(card=>'#'+card.id===location.hash);
    if(!card)return;
    revealCard(card);
    requestAnimationFrame(()=>{card.scrollIntoView({block:'start',behavior:'instant'});openProject(card,card.querySelector('[data-project-preview]'));});
  }
  window.addEventListener('hashchange',openHash);
  dialog.querySelector('.project-dialog-close').addEventListener('click',()=>dialog.close());
  dialog.querySelector('.dialog-insights').addEventListener('click',event=>{if(event.target.closest('.dialog-voice'))dialog.close();});
  dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close();});
  dialog.addEventListener('close',()=>{document.documentElement.classList.remove('project-preview-open');opener?.focus({preventScroll:true});});
  openHash();
})();
