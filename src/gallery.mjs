import { projects, projectCategories } from './projects.mjs';
import { getFeatured } from './featured.mjs';
import { projectInsights } from './project-insights.mjs';
const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12"/></svg>';
export const pagePath = (locale, page = '') => `${locale === 'en' ? '/en/' : '/'}${page ? `${page}/` : ''}`;
const copy = {
  ja: { heading: '仕事を知る。\n次の可能性が見える。', intro: '公開サイトの機能・技術と、実際に担当した内容をご紹介します。', all: '制作実績をすべて見る', visit: '公開サイトを見る', preview: 'プロジェクトを見る', close: '閉じる', role: '担当した内容', focus: '取り組みのポイント', voice: 'この案件のクライアントの声', category: 'カテゴリー', search: '機能・技術・サイト名で探す', more: 'さらに表示', empty: '該当する実績が見つかりませんでした。', reset: '絞り込みをリセット', note: '各サイトの公開機能・技術を紹介しています。担当内容は確認できる案件に併記。画像は保存時の画面で、現在の表示とは異なる場合があります。', library: '制作実績ライブラリ', detail: '掲載サイト・ページ', newTab: '新しいタブで開きます', paused: '公開先は休止中', image: '公開サイトの画像' },
  en: { heading: 'Real projects.\nThoughtful solutions.', intro: 'Explore website features, technologies and confirmed contributions to selected projects.', all: 'Explore all projects', visit: 'Visit website', preview: 'View project', close: 'Close project', role: 'My contribution', focus: 'Focus of the work', voice: 'Read this client’s feedback', category: 'Category', search: 'Search features, technologies or sites', more: 'Show more projects', empty: 'No projects match your search.', reset: 'Reset filters', note: 'Features and technologies describe the public sites; confirmed contributions are listed separately. Saved images may differ from the current websites.', library: 'Project library', detail: 'WEBSITES & PAGES', newTab: 'Opens in a new tab', paused: 'Public site paused', image: 'Public website image' },
};

const labels = {
  ja:{features:'サイトの主な機能',stack:'技術・サービス',publicStack:'公開サイトで確認できる構成',originalStack:'制作時の構成',original:'制作時',sources:'掲載情報・出典',observed:'公開サイトの機能を紹介しています。',partial:'掲載時の画面・資料と、現在確認できる情報をもとに紹介しています。',checked:'確認日',basis:'担当範囲が確認できる案件には、担当内容を併記しています。'},
  en:{features:'Website features',stack:'Technology & services',publicStack:'Observed public-site stack',originalStack:'Original project stack',original:'Original',sources:'About this entry & sources',observed:'Features describe the public website.',partial:'Based on saved site images, supplied materials and currently accessible information.',checked:'Reviewed',basis:'Confirmed contributions are described separately where available.'},
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
  const categories = {all:{ja:'すべて',en:'All work'}, ...projectCategories};
  return `<section id="projects" class="section projects-section" aria-labelledby="projects-heading" data-catalog="${full}"><div class="container">
    <div class="project-heading reveal"><div><p class="eyebrow">${full ? 'PROJECT LIBRARY' : 'SELECTED WORK'}</p><h2 id="projects-heading">${e(full ? c.library : c.heading).replace(/\n/g,'<br>')}</h2></div><aside class="discipline-panel"><p class="eyebrow">${full ? `${projects.length} ${c.detail}` : 'DISCIPLINES'}</p><p>${locale === 'ja' ? '業務を支えるシステムから、ブランドの魅力が伝わるWebサイトまで。' : 'From systems that support everyday operations to websites that bring a brand to life.'}</p><div class="pill-list">${['Business systems','AI & automation','Web & commerce','Applications'].map(x=>`<span>${x}</span>`).join('')}</div></aside></div>
    <p class="section-intro">${e(c.intro)}</p>
    ${full ? `<div class="project-toolbar" hidden><div class="project-filters" role="group" aria-label="${e(c.category)}">${Object.entries(categories).map(([key,value])=>`<button type="button" class="project-filter${key==='all'?' active':''}" data-project-filter="${key}" aria-pressed="${key==='all'}">${e(value[locale])}<span>${key==='all'?projects.length:projects.filter(p=>p.categories.includes(key)).length}</span></button>`).join('')}</div><div class="project-search-row"><label class="project-category-select"><span class="sr-only">${e(c.category)}</span><select id="project-category" aria-controls="project-grid">${Object.entries(categories).map(([key,value])=>`<option value="${key}">${e(value[locale])}</option>`).join('')}</select></label><label class="project-search"><span class="sr-only">${e(c.search)}</span><input type="search" id="project-search" placeholder="${e(c.search)}" autocomplete="off" maxlength="120" aria-controls="project-grid"></label><p class="project-count" role="status" aria-live="polite"></p></div></div>` : ''}
    <div class="project-grid" id="project-grid">${full ? ordered.map(p=>projectCard(p,locale,e)).join('') : getFeatured(locale).map(p=>projectCard(p,locale,e,true)).join('')+ordered.slice(0,6).map(p=>projectCard(p,locale,e)).join('')}</div>
    ${full ? `<div class="project-empty" hidden><p>${e(c.empty)}</p><button class="text-link" id="project-reset" type="button">${e(c.reset)}</button></div><div class="projects-more" hidden><button class="button button-outline" id="project-more" type="button" aria-controls="project-grid">${e(c.more)} <span class="project-more-count"></span> +</button></div>` : `<div class="section-action"><a class="button button-dark" href="${pagePath(locale,'projects')}">${e(c.all)} <span>${projects.length}</span>${arrow}</a></div>`}
    <p class="section-note">${e(c.note)}</p></div>
    <dialog class="project-dialog" id="project-dialog" aria-labelledby="project-dialog-title"><div class="project-dialog-shell"><button type="button" class="icon-button project-dialog-close" aria-label="${e(c.close)}" autofocus>×</button><div class="project-dialog-media"><img alt=""></div><div class="project-dialog-info"><p class="eyebrow">PROJECT DETAILS</p><h2 id="project-dialog-title"></h2><p class="dialog-description"></p><div class="dialog-scope"></div><div class="dialog-insights"></div><a class="dialog-voice text-link" hidden>${e(c.voice)} ${arrow}</a><a class="dialog-site button button-dark" target="_blank" rel="noopener noreferrer">${e(c.visit)} ${arrow}<span class="sr-only"> (${e(c.newTab)})</span></a></div></div></dialog></section>`;
}
