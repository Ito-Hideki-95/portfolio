export function renderPortfolioGuide(locale, projectPath) {
  const ja = locale === 'ja';
  const title = ja ? '制作実績ガイド' : 'Project guide';
  return `<aside class="guide-tools" aria-label="${title}">
    <button type="button" class="guide-toggle" popovertarget="portfolio-guide" aria-label="${title}" title="${title}" hidden>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" aria-hidden="true"><path d="M12 6c-2.7-2-6.3-2.5-10-1.5V19c3.7-1 7.3-.5 10 1.5 2.7-2 6.3-2.5 10-1.5V4.5C18.3 3.5 14.7 4 12 6Zm0 0v14.5"/></svg>
    </button>
    <div hidden popover="auto" id="portfolio-guide" class="guide-panel" role="dialog" aria-labelledby="guide-title">
      <header><h2 id="guide-title">${title}</h2><button type="button" popovertarget="portfolio-guide" popovertargetaction="hide" aria-label="${ja?'閉じる':'Close'}">×</button></header>
      <div class="guide-options">
        <a href="${projectPath}#project-digital-certificates">${ja?'デジタル認定証・会員証システム':'Digital certificates and membership cards'}</a>
        <a href="${projectPath}#project-flash-reserve">${ja?'Flash Reserve－瞬約－の保守・運用':'Flash Reserve service maintenance'}</a>
        <a href="${projectPath}#project-vivum-sallier">${ja?'美容室の予約サイト兼ECサイト':'Salon booking and online store'}</a>
      </div>
    </div>
    <a class="back-to-top" href="#main" aria-label="${ja?'ページの先頭へ':'Back to top'}" hidden>↑</a>
  </aside>`;
}
