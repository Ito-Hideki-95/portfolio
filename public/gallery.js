(() => {
  'use strict';
  const root=document.querySelector('#projects');
  if(!root)return;
  const en=document.documentElement.lang==='en';
  const cards=[...root.querySelectorAll('.project-card')];
  const search=root.querySelector('#project-search');
  let revealCard=()=>{};
  if(search){
    const filters=[...root.querySelectorAll('[data-project-filter]')];
    const select=root.querySelector('#project-category');
    const more=root.querySelector('#project-more');
    const count=root.querySelector('.project-count');
    const normalize=text=>text.normalize('NFKC').toLocaleLowerCase().trim();
    const index=new Map(cards.map(card=>[card,normalize(card.dataset.projectSearch)]));
    const params=new URLSearchParams(location.search);
    let category=filters.some(f=>f.dataset.projectFilter===params.get('category'))?params.get('category'):'all';
    search.value=params.get('search')||'';
    let limit=9, matches=cards;
    function update(reset=false){
      if(reset)limit=9;
      const terms=normalize(search.value).split(/\s+/).filter(Boolean);
      matches=cards.filter(card=>(category==='all'||card.dataset.projectCategories.split(' ').includes(category))&&terms.every(term=>index.get(card).includes(term)));
      const visible=new Set(matches.slice(0,limit));
      cards.forEach(card=>card.hidden=!visible.has(card));
      filters.forEach(filter=>{const active=filter.dataset.projectFilter===category;filter.classList.toggle('active',active);filter.setAttribute('aria-pressed',String(active));});
      select.value=category;
      count.textContent=en?visible.size+' of '+matches.length+' projects':matches.length+'件中 '+visible.size+'件を表示';
      more.parentElement.hidden=visible.size>=matches.length;
      more.querySelector('.project-more-count').textContent=en?(matches.length-visible.size)+' remaining':'残り'+(matches.length-visible.size)+'件';
      root.querySelector('.project-empty').hidden=matches.length>0;
    }
    function syncURL(){
      const url=new URL(location.href);
      category==='all'?url.searchParams.delete('category'):url.searchParams.set('category',category);
      search.value.trim()?url.searchParams.set('search',search.value.trim()):url.searchParams.delete('search');
      url.hash='';history.replaceState(null,'',url);
    }
    function selectCategory(value){category=value;syncURL();update(true);}
    filters.forEach(filter=>filter.addEventListener('click',()=>selectCategory(filter.dataset.projectFilter)));
    search.addEventListener('input',()=>{syncURL();update(true);});
    search.addEventListener('search',()=>{syncURL();update(true);});
    select.addEventListener('change',()=>selectCategory(select.value));
    more.addEventListener('click',()=>{const next=matches[limit];limit+=9;update();next?.querySelector('a')?.focus({preventScroll:true});});
    root.querySelector('#project-reset').addEventListener('click',()=>{search.value='';selectCategory('all');search.focus({preventScroll:true});});
    revealCard=card=>{category='all';search.value='';limit=Math.max(9,Math.ceil((cards.indexOf(card)+1)/9)*9);update();};
    root.querySelector('.project-toolbar').hidden=false;update();
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
