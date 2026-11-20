export function renderPortfolioGuide(locale, projectPath) {
  const ja = locale === 'ja';
  const title = ja ? '制作実績ガイド' : 'Project guide';
  return `<aside class="guide-tools" aria-label="${title}">
    <button type="button" class="guide-toggle" popovertarget="portfolio-guide" aria-label="${title}" hidden>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M20 10.7a7.6 7.6 0 0 1-8 7.6 10 10 0 0 1-2.3-.3L5 20l.9-4A7.2 7.2 0 0 1 4 10.7a8 8 0 0 1 16 0Z"/></svg>
    </button>
    <div hidden popover="auto" id="portfolio-guide" class="guide-panel" role="dialog" aria-labelledby="guide-title">
      <header><h2 id="guide-title">${title}</h2><button type="button" popovertarget="portfolio-guide" popovertargetaction="hide" aria-label="${ja?'閉じる':'Close'}">×</button></header>
      <p>${ja?'ご検討中の内容に近い事例をお選びください。':'What kind of project are you considering?'}</p>
      <div class="guide-options">
        <a href="${projectPath}#project-digital-certificates">${ja?'会員・業務システムの開発':'Build a membership system'}</a>
        <a href="${projectPath}#project-flash-reserve">${ja?'既存サービスの保守・改善':'Maintain an existing service'}</a>
        <a href="${projectPath}#project-vivum-sallier">${ja?'予約サイト・ECの制作':'Create a booking or commerce site'}</a>
      </div>
    </div>
    <a class="back-to-top" href="#main" aria-label="${ja?'ページの先頭へ':'Back to top'}" hidden>↑</a>
  </aside>`;
}
