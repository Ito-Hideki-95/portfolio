import { stackLogos } from './locales.mjs';
import { pagePath } from './gallery.mjs';

const technologyNames = {
  '01': ['Claude', 'React'],
  '02': ['Python', 'PostgreSQL'],
  '03': ['Python', 'FastAPI'],
  '04': ['Python', 'Claude'],
  '05': ['Claude', 'TypeScript'],
  '06': ['Laravel', 'PostgreSQL'],
  '07': ['React', 'PostgreSQL'],
  '08': ['Python', 'React'],
  '09': ['Python', 'Node.js'],
  '10': ['WordPress', 'PHP'],
  '11': ['HTML', 'CSS'],
  '12': ['Shopify', 'JavaScript'],
  '13': ['Stripe', 'Supabase'],
};
const logoSlugs = new Map(stackLogos);
const caseLinks = {
  '06': ['projects/#project-digital-certificates', '認定証・会員証システムの事例', 'Certificate and membership system'],
  '07': ['projects/#project-backend-audit', '権限制御・監査ログの事例', 'Access control and audit logging'],
  '09': ['#client-voice-4', 'データ取得のご提案へのご感想', 'Feedback on a data collection proposal'],
  '10': ['projects/#project-visual-anatomy', 'WordPressへの移行事例', 'WordPress migration case'],
  '12': ['projects/#project-vivum-sallier', '美容室のECサイト制作事例', 'Salon e-commerce case'],
  '13': ['projects/#project-digital-certificates', '会員ログイン・認定証の事例', 'Member access and certificates'],
};

export function renderServiceCards(locale, services, copy, escape) {
  const japanese = locale === 'ja';
  const home = pagePath(locale);
  const close = japanese ? '閉じる' : 'Close';
  const technologyLabel = japanese ? '対応技術の例' : 'Example technologies';

  const cards = services.map(service => {
    const title = escape(service.title);
    const related = caseLinks[service.id];
    const relatedLink = related
      ? `<a class="text-link" href="${escape(home + related[0])}">${escape(related[japanese ? 1 : 2])}<span aria-hidden="true">↗</span></a>`
      : '';
    const technologies = (technologyNames[service.id] || []).map(name =>
      `<li><img src="/images/stack/${logoSlugs.get(name)}.svg" alt="" width="22" height="22" loading="lazy"><span>${escape(name)}</span></li>`
    ).join('');
    return `<article class="service-item" data-category="${escape(service.category)}">
      <span class="service-category">${escape(copy.categories[service.category])}</span>
      <h3>${title}</h3>
      <p>${escape(service.text)}</p>
      <ul class="service-technologies" aria-label="${technologyLabel}">${technologies}</ul>
      <details class="service-disclosure">
        <summary>${escape(copy.serviceDetails)}<span aria-hidden="true">↗</span></summary>
        <div class="service-detail-content">
          <p>${escape(service.scope)}</p>
          ${relatedLink}
        </div>
      </details>
    </article>`;
  });
  return cards.join('') + `<dialog id="service-scope-dialog" class="service-scope-dialog" aria-labelledby="service-scope-title">
    <form method="dialog"><button type="submit" class="icon-button" aria-label="${close}" autofocus><span aria-hidden="true">×</span></button></form>
    <h2 id="service-scope-title"></h2>
    <div data-service-panel></div>
  </dialog>`;
}