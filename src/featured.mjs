import { getContent } from './locales.mjs';

// Scope comes from the supplied project names and client comments.
// No project-specific technology, delivery dates or outcome metrics are inferred.
const cases = [
  {
    id: 'flash-reserve', review: 0, category: 'WEB SERVICE / OPERATIONS',
    ja: {
      title: 'Flash Reserve－瞬間－',
      description: '飲食店予約サービスの保守・運用環境の整備を担当しました。ご要望と課題を確認し、技術的な内容もわかりやすくご説明しながら対応しました。',
      scope: 'Webサービスの保守・運用環境の整備',
      focus: '技術内容のわかりやすいご説明と、継続運用への配慮',
    },
    en: {
      title: 'Flash Reserve',
      description: 'I handled maintenance and operating-environment improvements for a restaurant reservation service, explaining technical issues clearly and addressing the client’s requirements.',
      scope: 'Web service maintenance and operating-environment improvements',
      focus: 'Clear technical communication and consideration for ongoing operations',
    },
  },
  {
    id: 'vivum-sallier', review: 1, category: 'SALON / E-COMMERCE',
    ja: {
      title: 'vivum・S’allier',
      description: '美容室の予約サイト兼ECサイトにおいて、テスト・最終調整・リリースを担当しました。ご要望を丁寧に伺い、必要な調整に対応しました。',
      scope: 'テスト・最終調整・リリース',
      focus: 'ご要望の確認と、細部にわたる調整',
    },
    en: {
      title: 'vivum · S’allier',
      description: 'I handled testing, final adjustments and release for a salon booking and e-commerce website, clarifying the client’s requirements and addressing the necessary refinements.',
      scope: 'Testing, final adjustments and release',
      focus: 'Clarifying requirements and addressing detailed adjustments',
    },
  },
  {
    id: 'visual-anatomy', review: 2, category: 'WORDPRESS / MIGRATION',
    ja: {
      title: 'Visual Anatomy',
      description: '既存の静的HTMLサイトからWordPressへのデータ移植を担当しました。',
      scope: '静的HTMLサイトのデータをWordPressへ移植',
      focus: '既存コンテンツのCMSへの移行',
    },
    en: {
      title: 'Visual Anatomy',
      description: 'I migrated data from an existing static HTML website into WordPress.',
      scope: 'Migrating static HTML website data into WordPress',
      focus: 'Migrating existing content into a CMS',
    },
  },
];

export function getFeatured(locale) {
  const { reviews } = getContent(locale);
  return cases.map(item => ({ id: item.id, ...item[locale], category: item.category, review: reviews[item.review], voice: item.review + 1 }));
}
