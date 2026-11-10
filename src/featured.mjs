import { getContent } from './locales.mjs';

// Scope comes from the supplied project names and client comments.
// No project-specific technology, delivery dates or outcome metrics are inferred.
const cases = [
  {
    id: 'flash-reserve', review: 0, category: 'WEB SERVICE / OPERATIONS',
    ja: {
      title: 'Flash Reserve－瞬間－',
      description: '飲食店予約サービスの保守・運用環境を整備。要望と課題を確認し、専門的な内容もわかりやすく共有しながら対応しました。',
      scope: 'Webサービスの保守・運用環境の整備',
      focus: '技術的な説明と、継続運用を見据えた対応',
    },
    en: {
      title: 'Flash Reserve',
      description: 'Maintenance and operating-environment improvements for a restaurant reservation service, with clear explanations of technical issues and careful attention to client requirements.',
      scope: 'Web service maintenance and operating-environment improvements',
      focus: 'Clear technical communication and ongoing operations',
    },
  },
  {
    id: 'vivum-sallier', review: 1, category: 'SALON / E-COMMERCE',
    ja: {
      title: 'vivum・S’allier',
      description: '美容室の予約サイト兼ECサイト構築。テスト・最終調整・リリースの工程で、ヒアリングを通して細かな調整に対応しました。',
      scope: 'テスト・最終調整・リリース',
      focus: 'ご要望の聞き取りと、細部の調整',
    },
    en: {
      title: 'vivum · S’allier',
      description: 'A salon booking and e-commerce website. My work covered testing, final adjustments and release, with careful listening to resolve the smaller details.',
      scope: 'Testing, final adjustments and release',
      focus: 'Understanding requests and refining the details',
    },
  },
  {
    id: 'visual-anatomy', review: 2, category: 'WORDPRESS / MIGRATION',
    ja: {
      title: 'Visual Anatomy',
      description: '静的HTMLサイトのデータをWordPressへ移植。既存サイトの移行案件として、知識と経験を活かして対応しました。',
      scope: '静的HTMLサイトのデータをWordPressへ移植',
      focus: '既存サイトからCMSへの移行',
    },
    en: {
      title: 'Visual Anatomy',
      description: 'Migration of an existing static HTML site’s data into WordPress, applying development experience to an established website.',
      scope: 'Migrating static HTML website data into WordPress',
      focus: 'Moving an existing website into a CMS',
    },
  },
];

const copy = {
  ja: { scope: '担当した内容', focus: '取り組みのポイント', zoom: '画面を拡大', voice: 'この案件のクライアントの声', inquire: '似た内容を相談する', visit: '公開サイトを見る', newTab: '新しいタブで開きます' },
  en: { scope: 'My contribution', focus: 'Focus of the work', zoom: 'View image', voice: 'Read this client’s feedback', inquire: 'Discuss a similar project', visit: 'Visit website', newTab: 'Opens in a new tab' },
};

export function renderFeatured(locale, e) {
  const { reviews, services, copy: content } = getContent(locale);
  const c = copy[locale];
  const inquiryTopics = [content.topics[1], services[11].title, services[9].title];
  const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12"/></svg>';
  return '<div class="featured-cases">' + cases.map((item, index) => {
    const data = item[locale], review = reviews[item.review];
    return `<article class="featured-case${index === 0 ? ' featured-case-lead' : ''}" id="case-${item.id}">
      <figure class="featured-media"><div class="project-browser" aria-hidden="true"><span><i></i><i></i><i></i></span><span>${e(new URL(review.projectUrl).hostname)}</span>${arrow}</div>
        <a class="project-preview" href="${e(review.image)}" target="_blank" rel="noopener noreferrer" data-project-preview aria-label="${e(data.title)} — ${e(c.zoom)}"><img src="${e(review.image)}" alt="${e(review.imageAlt)}" width="${review.imageWidth}" height="${review.imageHeight}" loading="lazy" decoding="async"><span class="project-preview-label">${e(c.zoom)}${arrow}</span></a>
        <figcaption>${e(review.imageCaption)}</figcaption>
      </figure>
      <div class="featured-copy"><p class="featured-category mono">0${index + 1} / ${item.category}</p><h3>${e(data.title)}</h3><p class="project-description">${e(data.description)}</p>
        <dl class="featured-scope"><div><dt>${e(c.scope)}</dt><dd>${e(data.scope)}</dd></div><div><dt>${e(c.focus)}</dt><dd>${e(data.focus)}</dd></div></dl>
        <a class="featured-voice text-link" href="#client-voice-${item.review + 1}">${e(c.voice)}${arrow}</a>
        <div class="featured-actions"><a class="button button-dark" href="#contact" data-inquiry="${e(inquiryTopics[index])}">${e(c.inquire)}${arrow}</a><a class="project-site text-link" href="${e(review.projectUrl)}" target="_blank" rel="noopener noreferrer">${e(c.visit)}${arrow}<span class="sr-only"> (${e(c.newTab)})</span></a></div>
      </div>
    </article>`;
  }).join('') + '</div>';
}
