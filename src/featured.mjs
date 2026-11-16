import { getContent } from './locales.mjs';

// Scope comes from owner-confirmed project records, delivery materials and client comments.
// Stable review IDs keep case links independent of the display order.
const cases = [
  {
    id: 'digital-certificates', reviewId: 'client-voice-5', category: 'MEMBERSHIP / CERTIFICATES',
    ja: {
      title: 'デジタル認定証・会員証システム',
      description: '会員ログイン、CSV一括取込、PDF認定証の発行、QRコードによる第三者確認を備えたWebシステムを開発しました。運用マニュアルには、文言・URLの変更やトラブル時の対応手順もまとめました。',
      scope: '認定証・会員証システムの開発と運用資料の整備',
      focus: '仕様の確認と調整を重ね、納品後の更新・運用まで引き継ぎ',
    },
    en: {
      title: 'Digital certificates & membership system',
      description: 'I developed a web system with member login, bulk CSV imports, PDF certificates and third-party verification via QR codes. The operating manual covered content and URL changes as well as troubleshooting.',
      scope: 'Web system development and operating documentation',
      focus: 'Specification reviews and adjustments, followed by guidance for ongoing operation and updates',
    },
  },
  {
    id: 'flash-reserve', reviewId: 'client-voice-1', category: 'WEB SERVICE / OPERATIONS',
    ja: {
      title: 'Flash Reserve－瞬約－',
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
    id: 'backend-audit', reviewId: 'client-voice-6', category: 'BACKEND / QUALITY',
    ja: {
      title: 'バックエンド開発・監査ログ設計',
      description: '組織ごとの権限制御、監査ログ、トランザクション処理、実ファイルのSHA-256検証を実装しました。データベース移行の再現性確認と回帰テストを行い、ソースコード・検証結果・技術資料の最終納品を完了しました。',
      scope: 'バックエンドの設計・実装・検証・最終納品（完了）',
      focus: 'データベース側で権限と更新条件を検証し、操作履歴とデータの整合性を確保',
    },
    en: {
      title: 'Backend logic & audit logging',
      description: 'I implemented organization-scoped access controls, audit logs, transactional updates and server-side SHA-256 verification of stored files. I verified database migration reproducibility, performed regression testing and completed final delivery of the source code, verification results and technical documentation.',
      scope: 'Backend design, implementation, verification and final delivery — completed',
      focus: 'Database-enforced permissions and update conditions, with traceable operations and data integrity controls',
    },
  },
  {
    id: 'vivum-sallier', reviewId: 'client-voice-2', category: 'SALON / E-COMMERCE',
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
    id: 'visual-anatomy', reviewId: 'client-voice-3', category: 'WORDPRESS / MIGRATION',
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
  return cases.map(item => {
    const review = reviews.find(review => review.id === item.reviewId);
    if (!review) throw new Error('Missing featured review: ' + item.reviewId);
    return { id: item.id, ...item[locale], category: item.category, review: { ...review, image: review.image || null }, voice: Number(item.reviewId.split('-').at(-1)), features: review.functionTags };
  });
}
