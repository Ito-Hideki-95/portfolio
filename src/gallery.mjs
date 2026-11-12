import { projects, projectCategories } from './projects.mjs';
import { getFeatured } from './featured.mjs';
import { projectInsights } from './project-insights.mjs';
const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12"/></svg>';
export const pagePath = (locale, page = '') => `${locale === 'en' ? '/en/' : '/'}${page ? `${page}/` : ''}`;
const copy = {
  ja: { heading: '制作実績と\n対応内容のご紹介', intro: '公開サイトの機能・技術と、確認済みの担当範囲をご紹介します。', all: '制作実績一覧', visit: '公開サイトを確認', preview: '実績の詳細', close: '詳細を閉じる', role: '担当業務', focus: '対応のポイント', voice: 'この案件に寄せられたご感想', category: 'カテゴリー', search: '機能・技術・サイト名で検索', more: 'ほかの実績を表示', empty: '条件に一致する制作実績はありません。', reset: '絞り込みを解除', note: '各サイトで公開されている機能・技術を掲載し、担当範囲を確認できる案件には対応内容を併記しています。画像は保存時点の画面のため、現在の公開サイトと異なる場合があります。', library: '制作実績一覧', detail: '掲載サイト・ページ', newTab: '新しいタブで開きます', paused: '公開先は休止中', image: '公開サイトの画像' },
  en: { heading: 'Projects and\ncontributions', intro: 'Website features and technologies are presented alongside confirmed contributions to selected projects.', all: 'All projects', visit: 'Visit the website', preview: 'Project details', close: 'Close details', role: 'Scope of my work', focus: 'Approach', voice: 'Client feedback on this project', category: 'Category', search: 'Search by feature, technology or site', more: 'Load more projects', empty: 'No projects match the selected criteria.', reset: 'Clear filters', note: 'Features and technologies describe the public websites; confirmed contributions are identified separately. Saved images may differ from the current websites.', library: 'Project portfolio', detail: 'WEBSITES & PAGES', newTab: 'Opens in a new tab', paused: 'Website temporarily closed', image: 'Public website image' },
};

const labels = {
  ja:{features:'サイトの主な機能',stack:'技術・サービス',publicStack:'公開サイトで確認した技術・サービス',originalStack:'制作時の技術・サービス',original:'制作時',sources:'情報の確認範囲・出典',observed:'機能の説明は、公開サイトで確認できる内容に基づいています。',partial:'保存時の画面・資料と、現在閲覧できる公開情報をもとにご紹介しています。',checked:'情報確認日',basis:'担当範囲を確認できる案件は、担当業務を別途記載しています。'},
  en:{features:'Website features',stack:'Technologies & services',publicStack:'Technologies identified on the public website',originalStack:'Reported original technologies and services',original:'Original',sources:'Scope of information & sources',observed:'Feature descriptions are based on information available on the public website.',partial:'Based on saved website images, supplied materials and currently accessible public information.',checked:'Information reviewed',basis:'Confirmed contributions are identified separately where available.'},
};
function technologyGroups(insight) {
  const unique = list => [...new Map(list.map(item=>[item.name.toLowerCase(),item])).values()];
  const observed=unique(insight?.technologies?.filter(item=>item.basis==='public')||[]);
  const names=new Set(observed.map(item=>item.name.toLowerCase()));
  const original=unique((insight?.technologies||[]).filter(item=>item.basis==='owner'&&!names.has(item.name.toLowerCase())));
  return {observed,original};
}
function featureList(insight,locale,e) {
  const c=labels[locale];
  return insight?.features?.length ? '<div class="project-functions"><p class="project-detail-label">'+c.features+'</p><ul>'+insight.features.map(feature=>'<li>'+e(feature[locale])+'</li>').join('')+'</ul></div>' : '';
}
function detailContent(insight,locale,e) {
  if (!insight) return '';
  const c=labels[locale],{observed,original}=technologyGroups(insight);
  const stack=(title,items)=>items.length?'<div class="project-stack-group"><h3>'+title+'</h3><ul class="project-stack-list">'+items.map(item=>'<li>'+e(item.name)+'</li>').join('')+'</ul></div>':'';
  const sources=[...new Map(insight.sources.map(source=>[source.url,source])).values()];
  return '<div class="project-insights">'+featureList(insight,locale,e)+stack(c.publicStack,observed)+stack(c.originalStack,original)+'<details class="project-source-note"><summary>'+c.sources+'<span aria-hidden="true">+</span></summary><p>'+c.observed+' '+c.basis+'</p>'+(insight.status!=='verified'?'<p>'+e(insight.availability?.[locale]||c.partial)+'</p>':'')+'<p>'+c.checked+': <time datetime="'+e(insight.checkedAt)+'">'+e(insight.checkedAt)+'</time></p><ul>'+sources.map(source=>'<li><a href="'+e(source.url)+'" target="_blank" rel="noopener noreferrer">'+e(source.url.startsWith('/') ? (locale === 'ja' ? '保存時のサイト画面' : 'Saved website image') : new URL(source.url).hostname+new URL(source.url).pathname)+'</a></li>').join('')+'</ul></details></div>';
}

export function projectCard(p, locale, e, featured = false) {
  const c = copy[locale], home = pagePath(locale);
  const name = featured ? p.title : p.name[locale];
  const insight = projectInsights[p.id];
  const description = featured ? p.description : insight?.summary[locale] || p.description[locale];
  const groups = technologyGroups(insight);
  const technology = [...groups.observed,...groups.original].slice(0,3);
  const image = featured ? p.review.image : p.image;
  const url = featured ? p.review.projectUrl : p.url;
  const category = featured ? p.category : projectCategories[p.categories[0]][locale];
  const platform = !featured && p.platform ? ({ 'ペライチ': 'Peraichi', 'カラーミーショップ': 'Color Me Shop' }[p.platform] || p.platform) : '';
  const alt = featured ? p.review.imageAlt : `${name} — ${c.image}`;
  const search = featured ? '' : [p.name.ja,p.name.en,p.description.ja,p.description.en,p.url,p.platform,...(insight?.features||[]).flatMap(feature=>[feature.ja,feature.en]),...(insight?.technologies||[]).map(item=>item.name),insight?.summary.ja||'',insight?.summary.en||'',...p.categories.flatMap(key=>Object.values(projectCategories[key]))].join(' ');
  return `<article class="project-card${featured ? ' featured-case' : ''}" data-project-id="${e(p.id)}"${featured ? '' : ` data-project-categories="${e(p.categories.join(' '))}" data-project-search="${e(search)}"`}>
    <div class="project-window"><a class="project-preview" href="${e(image)}" target="_blank" rel="noopener noreferrer" data-project-preview aria-label="${e(name)} — ${e(c.preview)}"><img src="${e(image)}" alt="${e(alt)}" width="${featured ? p.review.imageWidth : p.imageWidth || 1440}" height="${featured ? p.review.imageHeight : p.imageHeight || 900}" loading="lazy" decoding="async"><span class="project-image-tag">${e(category)}</span><span class="project-preview-label">${e(c.preview)} ${arrow}</span></a></div>
    <div class="project-copy"><p class="project-domain">${e(new URL(url).hostname.replace(/^www\./,''))}</p><h3>${e(name)}</h3><p class="project-description">${e(description)}</p>${featureList(insight,locale,e)}${technology.length?`<div class="project-technology"><p class="project-detail-label">${labels[locale].stack}</p><ul class="project-stack-list">${technology.map(item=>`<li>${e(item.name)}${item.basis==='owner'?` <small>${labels[locale].original}</small>`:''}</li>`).join('')}</ul></div>`:''}<template data-project-insights>${detailContent(insight,locale,e)}</template>
    ${featured ? `<dl class="project-scope"><div><dt>${e(c.role)}</dt><dd>${e(p.scope)}</dd></div><div><dt>${e(c.focus)}</dt><dd>${e(p.focus)}</dd></div></dl><a class="featured-voice text-link" href="${home}#client-voice-${p.voice}">${e(c.voice)} ${arrow}</a>` : `<div class="project-tags"><span>${e(category)}</span>${platform && !insight ? `<span>${e(platform)}</span>` : ''}${p.status === 'paused' ? `<span>${e(c.paused)}</span>` : ''}</div>`}
    <div class="project-card-footer"><button type="button" class="text-link project-details-button" data-open-project hidden>${e(c.preview)} ${arrow}</button><a class="project-site icon-link" href="${e(url)}" target="_blank" rel="noopener noreferrer" aria-label="${e(c.visit)} — ${e(name)} (${e(c.newTab)})">${arrow}</a></div></div>
  </article>`;
}
export function renderGallery(locale, e, full = false) {
  const c = copy[locale];
  const picks = ['one-pilates','blue-square','anker','hakuhodo-technologies','ohora','partners'];
  const ordered = [...picks.map(id => projects.find(p => p.id === id)), ...projects.filter(p => !picks.includes(p.id))];
  const categories = {all:{ja:'すべて',en:'All projects'}, ...projectCategories};
  return `<section id="projects" class="section projects-section" aria-labelledby="projects-heading" data-catalog="${full}"><div class="container">
    <div class="project-heading reveal"><div><p class="eyebrow">${full ? 'PROJECT LIBRARY' : 'SELECTED WORK'}</p><h2 id="projects-heading">${e(full ? c.library : c.heading).replace(/\n/g,'<br>')}</h2></div><aside class="discipline-panel"><p class="eyebrow">${full ? `${projects.length} ${c.detail}` : 'DISCIPLINES'}</p><p>${locale === 'ja' ? '業務システム、AI・自動化、Web・EC、アプリ開発の各領域に対応します。' : 'I support projects across business systems, AI and automation, websites, e-commerce and application development.'}</p><div class="pill-list">${['Business systems','AI & automation','Web & commerce','Applications'].map(x=>`<span>${x}</span>`).join('')}</div></aside></div>
    <p class="section-intro">${e(c.intro)}</p>
    ${full ? `<div class="project-toolbar" hidden><div class="project-filters" role="group" aria-label="${e(c.category)}">${Object.entries(categories).map(([key,value])=>`<button type="button" class="project-filter${key==='all'?' active':''}" data-project-filter="${key}" aria-pressed="${key==='all'}">${e(value[locale])}<span>${key==='all'?projects.length:projects.filter(p=>p.categories.includes(key)).length}</span></button>`).join('')}</div><div class="project-search-row"><label class="project-category-select"><span class="sr-only">${e(c.category)}</span><select id="project-category" aria-controls="project-grid">${Object.entries(categories).map(([key,value])=>`<option value="${key}">${e(value[locale])}</option>`).join('')}</select></label><label class="project-search"><span class="sr-only">${e(c.search)}</span><input type="search" id="project-search" placeholder="${e(c.search)}" autocomplete="off" maxlength="120" aria-controls="project-grid"></label><p class="project-count" role="status" aria-live="polite"></p></div></div>` : ''}
    <div class="project-grid" id="project-grid">${full ? ordered.map(p=>projectCard(p,locale,e)).join('') : getFeatured(locale).map(p=>projectCard(p,locale,e,true)).join('')+ordered.slice(0,6).map(p=>projectCard(p,locale,e)).join('')}</div>
    ${full ? `<div class="project-empty" hidden><p>${e(c.empty)}</p><button class="text-link" id="project-reset" type="button">${e(c.reset)}</button></div><div class="projects-more" hidden><button class="button button-outline" id="project-more" type="button" aria-controls="project-grid">${e(c.more)} <span class="project-more-count"></span> +</button></div>` : `<div class="section-action"><a class="button button-dark" href="${pagePath(locale,'projects')}">${e(c.all)} <span>${projects.length}</span>${arrow}</a></div>`}
    <p class="section-note">${e(c.note)}</p></div>
    <dialog class="project-dialog" id="project-dialog" aria-labelledby="project-dialog-title"><div class="project-dialog-shell"><button type="button" class="icon-button project-dialog-close" aria-label="${e(c.close)}" autofocus>×</button><div class="project-dialog-media"><img alt=""></div><div class="project-dialog-info"><p class="eyebrow">PROJECT DETAILS</p><h2 id="project-dialog-title"></h2><p class="dialog-description"></p><div class="dialog-scope"></div><div class="dialog-insights"></div><a class="dialog-voice text-link" hidden>${e(c.voice)} ${arrow}</a><a class="dialog-site button button-dark" target="_blank" rel="noopener noreferrer">${e(c.visit)} ${arrow}<span class="sr-only"> (${e(c.newTab)})</span></a></div></div></dialog></section>`;
}
