import { projectCategories } from './projects.mjs';
import { getPortfolio, orderPortfolio, selectedProjectIds } from './portfolio.mjs';
const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12"/></svg>';
export const pagePath = (locale, page = '') => (locale === 'en' ? '/en/' : '/') + (page ? page + '/' : '');
const text = {
 ja: { heading:'実績から伝える、\n開発のかたち。', library:'制作・開発実績', all:'すべての実績を見る', visit:'公開サイトを見る', preview:'詳細を見る', close:'詳細を閉じる', role:'担当した実装', focus:'担当した実装・対応', strength:'この実績で活かした視点', deliverables:'対応内容・納品物', voice:'この案件のお客様の声', category:'カテゴリー', search:'実現したい機能・技術・サイト名で検索', more:'ほかの実績を表示', empty:'条件に一致する実績はありません。', reset:'絞り込みを解除', detail:'件の掲載実績', newTab:'新しいタブで開きます', image:'サイト画面', visual:'サイトのメインビジュアル', diagram:'機能構成図', architecture:'システム構成', openArchitecture:'構成図を拡大する', stack:'使用技術', originalStack:'制作時の環境', original:'制作時', allLabel:'すべて', overview:'会員システム、継続運用、Web・EC。具体的な対応内容から、ご検討中のプロジェクトに近い実績をご覧いただけます。' },
 en: { heading:'The work.\nThe thinking behind it.', library:'Project portfolio', all:'Explore all projects', visit:'Visit website', preview:'View details', close:'Close details', role:'My implementation work', focus:'Implementation & delivery', strength:'What this work brings together', deliverables:'Work delivered', voice:'Feedback on this project', category:'Category', search:'Search by feature, technology or site', more:'Load more projects', empty:'No projects match your search.', reset:'Clear filters', detail:'PORTFOLIO ENTRIES', newTab:'Opens in a new tab', image:'Website screen', visual:'Website visual', diagram:'Functional diagram', architecture:'System architecture', openArchitecture:'Open full diagram', stack:'Technologies', originalStack:'Project technology', original:'Project', allLabel:'All', overview:'Membership systems, ongoing operations, websites and commerce. Explore concrete contributions and find work relevant to your project.' },
};
function technologies(project) {
 const unique = values => [...new Map(values.map(item => [item.name.toLowerCase(), item])).values()];
 // Case-study technology comes from owner-supplied project records.
 const original = [
  ...(project.study.technologies || []).map(name => ({ name, basis:'owner' })),
  ...(project.insight?.technologies || []).filter(item => item.basis === 'owner'),
 ];
 if (project.platform && !original.some(item => item.name.toLowerCase() === project.platform.toLowerCase())) original.push({name:project.platform,basis:'owner'});
 const current = (project.insight?.technologies || []).filter(item => item.basis === 'public');
 return { items:unique(original.length ? original : current), original:original.length > 0 };
}
function websiteLink(project, locale, e, className) {
 if (!project.url || project.websiteAvailable === false || project.status === 'paused') return '';
 const c=text[locale];
 return '<a class="'+className+'" href="'+e(project.url)+'" target="_blank" rel="noopener noreferrer" aria-label="'+e(c.visit+' — '+project.title+' ('+c.newTab+')')+'">'+e(c.visit)+' '+arrow+'<span class="sr-only"> ('+e(c.newTab)+')</span></a>';
}
function details(project, locale, e) {
 const c=text[locale], tech=technologies(project), architecture=project.study.architecture;
 const list=(title,items)=>items.length ? '<div class="case-detail-block"><h3>'+e(title)+'</h3><ul>'+items.map(item=>'<li>'+e(item)+'</li>').join('')+'</ul></div>' : '';
 const stackLabel=project.study.technologyLabel?.[locale] || (tech.original?c.originalStack:c.stack);
 const diagram=architecture ? '<div class="case-detail-block"><h3>'+e(c.architecture)+'</h3><figure class="case-architecture"><a class="case-architecture-preview" href="'+e(architecture.image)+'" target="_blank" rel="noopener noreferrer" aria-label="'+e(c.openArchitecture+' — '+project.title+' ('+c.newTab+')')+'"><img src="'+e(architecture.image)+'" alt="'+e(architecture.alt[locale])+'" width="'+architecture.width+'" height="'+architecture.height+'" loading="lazy" decoding="async"><span>'+e(c.openArchitecture)+' '+arrow+'</span></a><figcaption>'+e(architecture.caption[locale])+'</figcaption></figure></div>' : '';
 const voice=project.featured?'<a class="dialog-voice text-link" href="'+pagePath(locale)+'#client-voice-'+project.featured.voice+'">'+e(c.voice)+arrow+'</a>':'';
 const website=websiteLink(project,locale,e,'dialog-site button button-dark');
 return (project.study.siteType?'<p class="project-type">'+e(project.study.siteType[locale])+'</p>':'')+'<p class="dialog-description">'+e(project.lead)+'</p><div class="case-detail-block case-strength"><h3>'+e(c.strength)+'</h3><p>'+e(project.strength)+'</p></div>'+list(c.focus,project.focus)+list(c.deliverables,project.deliverables)+(tech.items.length ? '<div class="case-detail-block"><h3>'+e(stackLabel)+'</h3><ul class="project-stack-list">'+tech.items.map(item=>'<li>'+e(item.name)+'</li>').join('')+'</ul></div>' : '')+diagram+(voice||website?'<div class="case-detail-actions">'+voice+website+'</div>':'');
}
export function projectCard(project, locale, e, spotlight=false) {
 const c=text[locale], tech=technologies(project), diagram=project.imageKind==='diagram';
 const website=websiteLink(project,locale,e,'project-visit button button-outline');
 const keywords=[project.title,project.name.ja,project.name.en,project.url,project.platform,project.lead,project.strength,project.role,...project.focus,...project.deliverables,...tech.items.map(item=>item.name),...Object.values(project.study.siteType || {}),...Object.values(project.study.lead),...project.study.focus.flatMap(item=>Object.values(item)),...project.categories.flatMap(key=>Object.values(projectCategories[key]))].filter(Boolean).join(' ');
 return '<article class="project-card'+(spotlight?' featured-case':'')+'" id="project-'+e(project.id)+'" data-project-id="'+e(project.id)+'" data-project-categories="'+e(project.categories.join(' '))+'" data-project-search="'+e(keywords)+'">'+
 '<div class="project-window"><a class="project-preview" href="'+e(project.image)+'" target="_blank" rel="noopener noreferrer" data-project-preview aria-label="'+e(project.title+' — '+c.preview)+'"><img src="'+e(project.image)+'" alt="'+e(project.imageAlt || project.title+' — '+(diagram?c.diagram:project.imageKind==='visual'?c.visual:c.image))+'" width="'+project.imageWidth+'" height="'+project.imageHeight+'" loading="lazy" decoding="async"><span class="project-preview-label" aria-hidden="true">'+e(c.preview)+' '+arrow+'</span></a></div>'+
 '<div class="project-copy"><div class="project-overview"><h3>'+e(project.title)+'</h3>'+(project.study.siteType?'<p class="project-type">'+e(project.study.siteType[locale])+'</p>':'')+'<div class="case-focus-preview"><p class="project-detail-label">'+e(project.study.contributionLabel?.[locale] || c.role)+'</p><ul>'+project.focus.map(item=>'<li>'+e(item)+'</li>').join('')+'</ul></div></div>'+
 (tech.items.length?'<div class="project-technology"><p class="project-detail-label">'+e(project.study.technologyLabel?.[locale] || c.stack)+'</p><ul class="project-stack-list">'+tech.items.map(item=>'<li>'+e(item.name)+'</li>').join('')+'</ul></div>':'')+
 '<div class="project-actions"><button class="project-open-case button" type="button" data-open-case hidden aria-label="'+e(project.title+' — '+c.preview)+'">'+e(locale === 'ja' ? '開発内容を見る' : 'View case study')+'</button>'+website+'</div><template data-project-insights>'+details(project,locale,e)+'</template></div></article>';
}
function stackFilterOptions(catalog, locale, e) {
  const stacks = new Map();
  let unspecified = 0;
  for (const project of catalog) {
    const { items } = technologies(project);
    if (!items.length) unspecified++;
    for (const { name } of items) {
      stacks.set(name, (stacks.get(name) || 0) + 1);
    }
  }
  const byPopularity = [...stacks].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], locale));
  let stackOptions = byPopularity.map(([name, count]) =>
    `<option value="${e(name)}">${e(name)} (${count})</option>`).join('');
  if (unspecified) {
    const label = locale === 'ja' ? '技術記載なし' : 'Technology unspecified';
    stackOptions += `<option value="other">${e(label)} (${unspecified})</option>`;
  }
  return { byPopularity, stackOptions };
}

function catalogDiscovery(catalog, locale, e) {
  const c = text[locale];
  const { stackOptions } = stackFilterOptions(catalog, locale, e);
  const search = locale === 'ja' ? '実績を検索' : 'Search projects';
  const all = locale === 'ja' ? 'すべての技術' : 'All technologies';
  return `<form class="catalog-discovery" role="search" aria-label="${e(search)}" action="${pagePath(locale, 'projects')}" method="get">
    <label>${e(search)}<input type="search" name="search" maxlength="120" placeholder="${e(c.search)}"></label>
    <label>${e(c.stack)}<select name="stack"><option value="">${e(all)}</option>${stackOptions}</select></label>
    <button type="submit" class="button button-dark">${e(locale === 'ja' ? '検索する' : 'Search')}</button>
  </form>`;
}

function projectToolbar(catalog, locale, e) {
  const c = text[locale];
  const categories = { all: { ja: 'すべて', en: 'All' }, ...projectCategories };
  const { byPopularity, stackOptions } = stackFilterOptions(catalog, locale, e);
  const stackName = locale === 'ja' ? '技術で絞り込み' : 'Filter by technology';
  const allStacks = locale === 'ja' ? 'すべての技術' : 'All technologies';
  const categoryControls = Object.entries(categories).map(([id, label]) => {
    const size = id === 'all' ? catalog.length : catalog.filter(project => project.categories.includes(id)).length;
    return `<button type="button" class="project-filter${id === 'all' ? ' active' : ''}" data-project-filter="${e(id)}" aria-pressed="${id === 'all'}" aria-controls="project-grid">${e(label[locale])}<span>${size}</span></button>`;
  }).join('');
  const categoryOptions = Object.entries(categories).map(([id, label]) =>
    `<option value="${e(id)}">${e(label[locale])}</option>`).join('');
  const stackChips = byPopularity.slice(0, 6).map(([name, count]) =>
    `<button type="button" class="project-filter stack-shortcut" data-stack="${e(name)}" aria-pressed="false" aria-controls="project-grid">${e(name)}<span>${count}</span></button>`).join('');
  return `<div class="project-toolbar" hidden>
    <div class="project-search-row">
      <label class="project-search"><span class="sr-only">${e(c.search)}</span><input type="search" id="project-search" placeholder="${e(c.search)}" autocomplete="off" maxlength="120" aria-controls="project-grid"></label>
      <p class="project-count" role="status" aria-live="polite"></p>
    </div>
    <div class="project-filters" role="group" aria-label="${e(c.category)}">${categoryControls}</div>
    <label class="project-category-select">${e(c.category)}<select id="project-category" aria-controls="project-grid">${categoryOptions}</select></label>
    <div class="project-stack-controls">
      <label class="stack-select-label" for="project-stack">${e(stackName)}</label>
      <select id="project-stack" aria-controls="project-grid"><option value="">${e(allStacks)} (${catalog.length})</option>${stackOptions}</select>
      <div class="stack-shortcuts" role="group" aria-label="${e(stackName)}">${stackChips}</div>
    </div>
  </div>`;
}

export function renderGallery(locale,e,full=false) {
 const c=text[locale], catalog=orderPortfolio(getPortfolio(locale));
 const visible=full?catalog:selectedProjectIds.map(id=>catalog.find(project=>project.id===id));
 return '<section id="projects" class="section projects-section" aria-labelledby="projects-heading" data-catalog="'+full+'"><div class="container"><div class="project-heading reveal"><div><p class="eyebrow">'+(full?'PROJECT LIBRARY':'SELECTED WORK')+'</p><h2 id="projects-heading">'+e(full?c.library:c.heading).replace(/\n/g,'<br>')+'</h2></div><div class="case-heading-intro"><p>'+e(c.overview)+'</p><span class="case-total">'+catalog.length+' '+e(c.detail)+'</span></div><canvas class="stack-atlas" aria-hidden="true" width="700" height="340"></canvas></div>'+
 (full ? projectToolbar(catalog, locale, e) : catalogDiscovery(catalog, locale, e))+
 '<div class="project-grid'+(full?'':' selected-project-grid')+'" id="project-grid">'+visible.map(project=>projectCard(project,locale,e,!full)).join('')+'</div>'+
 (full?'<div class="project-empty" hidden><p>'+e(c.empty)+'</p><button class="text-link" id="project-reset" type="button">'+e(c.reset)+'</button></div><div class="projects-more" hidden><button class="button button-outline" id="project-more" type="button" aria-controls="project-grid">'+e(c.more)+' <span class="project-more-count"></span> +</button></div>':'<div class="section-action"><a class="button button-dark" href="'+pagePath(locale,'projects')+'">'+e(c.all)+' <span>'+catalog.length+'</span>'+arrow+'</a></div>')+'</div>'+
 '<dialog class="project-dialog" id="project-dialog" aria-labelledby="project-dialog-title"><div class="project-dialog-shell"><button type="button" class="icon-button project-dialog-close" aria-label="'+e(c.close)+'" autofocus>×</button><div class="project-dialog-media"><img alt=""></div><div class="project-dialog-info"><p class="eyebrow">PROJECT DETAILS</p><h2 id="project-dialog-title"></h2><div class="dialog-insights"></div></div></div></dialog></section>';
}
