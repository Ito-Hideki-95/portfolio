import { projects, projectCategories } from './projects.mjs';

const copy = {
  ja: {
    title: 'つくったものが、\n語ること。',
    intro: '企業の顔から、選ばれるお店まで。\nさまざまな業種の制作実績をご紹介します。',
    count: '掲載サイト・ページ', all: 'すべて', categories: '制作実績のカテゴリー',
    search: '制作実績を検索', placeholder: 'サイト名・業種・技術で探す',
    view: 'サイトを見る', zoom: '画面を拡大', more: 'もっと見る',
    noResults: '該当する実績が見つかりませんでした。', reset: '絞り込みをリセット',
    note: '画像は各サイトの公開画面・メインビジュアルです。現在の表示とは異なる場合があります。',
    close: 'プレビューを閉じる', newTab: '新しいタブで開きます',
    unavailable: 'サイトイメージ準備中', image: '公開サイトの画面', paused: '公開先は休止中',
  },
  en: {
    title: 'A closer look\nat the work.',
    intro: 'From company stories to online stores.\nExplore work across a range of industries.',
    count: 'WEBSITES & PAGES', all: 'All work', categories: 'Portfolio categories',
    search: 'Search portfolio', placeholder: 'Search sites, industries or platforms',
    view: 'Visit website', zoom: 'Preview website', more: 'Show more work',
    noResults: 'No projects match your search.', reset: 'Reset filters',
    note: 'Images show public website screens or main visuals. Live websites may have changed.',
    close: 'Close preview', newTab: 'Opens in a new tab',
    unavailable: 'Site image coming soon', image: 'Public website screen', paused: 'Public site paused',
  },
};

export function renderGallery(locale, escape) {
  const e = escape, c = copy[locale];
  const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12"/></svg>';
  const categories = { all: { ja: copy.ja.all, en: copy.en.all }, ...projectCategories };
  const featured = ['one-pilates', 'blue-square', 'anker', 'hakuhodo-technologies', 'ohora', 'partners'];
  const ordered = [...featured.map(id => projects.find(p => p.id === id)), ...projects.filter(p => !featured.includes(p.id))];
  return `<section id="projects" class="section projects-section" aria-labelledby="projects-heading">
    <div class="container">
      <div class="section-heading reveal">
        <p class="eyebrow"><span class="section-number">01</span>SELECTED WORK</p>
        <div class="heading-row"><h2 id="projects-heading">${e(c.title).replace(/\n/g, '<br>')}</h2><div class="projects-intro"><p>${e(c.intro).replace(/\n/g, '<br>')}</p><p class="project-total"><strong>${projects.length}</strong><span>${e(c.count)}</span></p></div></div>
      </div>
      <div class="project-toolbar" hidden>
        <label class="project-category-select"><span>${e(c.categories)}</span><select id="project-category" aria-controls="project-grid">${Object.entries(categories).map(([key, value]) => `<option value="${key}">${e(value[locale])} (${key === 'all' ? projects.length : projects.filter(p => p.categories.includes(key)).length})</option>`).join('')}</select></label>
        <div class="project-filters" role="group" aria-label="${e(c.categories)}">${Object.entries(categories).map(([key, value]) => `<button class="project-filter${key === 'all' ? ' active' : ''}" type="button" data-project-filter="${key}" aria-pressed="${key === 'all'}">${e(value[locale])}<span>${key === 'all' ? projects.length : projects.filter(p => p.categories.includes(key)).length}</span></button>`).join('')}</div>
        <div class="project-search-row"><label class="project-search"><span class="sr-only">${e(c.search)}</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg><input type="search" id="project-search" placeholder="${e(c.placeholder)}" autocomplete="off" maxlength="120" aria-controls="project-grid"></label><p class="project-count mono" role="status" aria-live="polite" aria-atomic="true"></p></div>
      </div>
      <div class="project-grid" id="project-grid">${ordered.map(p => {
        const name = p.name[locale], description = p.description[locale];
        const category = projectCategories[p.categories[0]][locale];
        const platform = locale === 'en' ? ({ 'ペライチ': 'Peraichi', 'カラーミーショップ': 'Color Me Shop' }[p.platform] || p.platform) : p.platform;
        const alt = `${name} — ${p.imageKind === 'visual' ? (locale === 'ja' ? 'メインビジュアル' : 'Main visual') : p.imageKind === 'archive' ? (locale === 'ja' ? '公開サイトの記録画像' : 'Archived website screen') : c.image}`;
        const search = [p.name.ja, p.name.en, p.description.ja, p.description.en, p.url, p.platform, ...p.categories.flatMap(key => Object.values(projectCategories[key]))].join(' ');
        return `<article class="project-card" data-project-id="${e(p.id)}" data-project-categories="${e(p.categories.join(' '))}" data-project-search="${e(search)}">
          <div class="project-window"><div class="project-browser" aria-hidden="true"><span><i></i><i></i><i></i></span><span>${e(new URL(p.url).hostname.replace(/^www\./, ''))}</span>${arrow}</div>${p.image ? `<a class="project-preview" href="${e(p.image)}" target="_blank" rel="noopener noreferrer" data-project-preview aria-label="${e(name)} — ${e(c.zoom)}"><img src="${e(p.image)}" alt="${e(alt)}" width="${p.imageWidth || 1440}" height="${p.imageHeight || 900}" loading="lazy" decoding="async"><span class="project-preview-label">${e(c.zoom)}${arrow}</span></a>` : `<div class="project-placeholder"><strong>${e(name)}</strong><span>${e(c.unavailable)}</span></div>`}</div>
          <div class="project-copy"><p class="project-meta"><span>${e(category)}</span>${platform ? `<span>${e(platform)}</span>` : ''}${p.status === 'paused' ? `<span class="project-status">${e(c.paused)}</span>` : ''}</p><h3>${e(name)}</h3><p class="project-description">${e(description)}</p><a class="project-site text-link" href="${e(p.url)}" target="_blank" rel="noopener noreferrer">${e(c.view)}${arrow}<span class="sr-only"> — ${e(name)} (${e(c.newTab)})</span></a></div>
        </article>`;
      }).join('')}</div>
      <div class="project-empty" hidden><p>${e(c.noResults)}</p><button class="text-link" id="project-reset" type="button">${e(c.reset)}${arrow}</button></div>
      <div class="projects-more" hidden><button class="button button-outline" id="project-more" type="button" aria-controls="project-grid">${e(c.more)}<span class="project-more-count mono"></span><span aria-hidden="true">＋</span></button></div>
      <p class="section-note">${e(c.note)}</p>
    </div>
    <dialog class="project-dialog" id="project-dialog" aria-labelledby="project-dialog-title"><div class="project-dialog-shell"><div class="project-dialog-header"><h2 id="project-dialog-title"></h2><button type="button" class="icon-button project-dialog-close" aria-label="${e(c.close)}" autofocus><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg></button></div><div class="project-dialog-media"><img alt=""></div><div class="project-dialog-footer"><p></p><a class="button button-dark" target="_blank" rel="noopener noreferrer">${e(c.view)}${arrow}<span class="sr-only"> (${e(c.newTab)})</span></a></div></div></dialog>
  </section>`;
}
