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

export function getFeatured(locale) {
  const { reviews } = getContent(locale);
  return cases.map(item => ({ id: item.id, ...item[locale], category: item.category, review: reviews[item.review], voice: item.review + 1 }));
}
