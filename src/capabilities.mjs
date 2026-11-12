const capabilityCopy = {
  ja: {
    heading: '対応できる機能・開発領域',
    intro: 'ご検討中の機能や業務上の課題に応じて、設計・実装から公開後の運用まで対応します。',
    cards: [
      {
        title: '会員管理・証明書発行の業務システム',
        body: '業務の流れに合わせて、ログイン、会員データのCSV入出力、PDF証明書の発行、QRコードによる確認画面を設計・実装します。',
        tags: ['会員管理', 'CSV', 'PDF', 'QRコード'],
        href: '/#client-voice-5',
        link: '会員・証明書システムのご感想'
      },
      {
        title: '権限制御・障害対応・品質改善',
        body: '利用権限や操作履歴を整理し、異常時に処理を停止する設計に対応します。不具合の原因調査から修正、テスト結果のご報告まで承ります。',
        tags: ['権限制御', '監査ログ', 'エラー処理', 'テスト'],
        href: '/#client-voice-6',
        link: 'バックエンド改善のご感想'
      },
      {
        title: '予約サービスの保守・通知連携',
        body: '既存の予約サービスの保守・改修に対応します。LINE・メール通知、会員管理、決済サービスとの連携についてもご相談を承ります。',
        tags: ['LINE Messaging API', 'Stripe', '保守・改修'],
        href: '/#client-voice-1',
        link: '予約サービス保守のご感想'
      },
      {
        title: 'CMS・ECサイトの構築と運用支援',
        body: 'CMSの移行・改修、商品一覧や注文画面の構築に対応します。公開後の更新手順や商品管理を考慮し、運用しやすい構成をご提案します。',
        tags: ['WordPress', 'Shopify', 'EC-CUBE'],
        href: '/#client-voice-3',
        link: 'CMS移行のご感想'
      },
      {
        title: 'データ連携・集計・定型業務の自動化',
        body: 'データ集計やAPIを通じたシステム連携を自動化します。生成AI・RAGによる社内検索や業務支援ツールも、ご利用目的に合わせて設計します。',
        tags: ['Python', 'API', 'RAG', '生成AI'],
        href: '/services/',
        link: '対応サービスの詳細'
      },
      {
        title: 'Web・モバイルアプリの画面開発',
        body: 'スマートフォンでの操作性にも配慮したWeb画面・アプリを制作します。既存APIとの接続、入力・検索・情報表示の設計に対応します。',
        tags: ['TypeScript', 'React', 'Next.js', 'Flutter'],
        href: '/projects/',
        link: '制作実績の一覧'
      }
    ]
  },
  en: {
    heading: 'Development capabilities',
    intro: 'I support the design, implementation and ongoing operation of systems that meet your business requirements.',
    cards: [
      {
        title: 'Membership and certificate systems',
        body: 'I design and implement login, member-data imports and exports, PDF certificate generation and QR verification screens to support your operational workflows.',
        tags: ['Member management', 'CSV', 'PDF', 'QR codes'],
        href: '/en/#client-voice-5',
        link: 'Client feedback on membership systems'
      },
      {
        title: 'Access control and software reliability',
        body: 'I define access permissions, audit records and controls that stop processing under invalid conditions. Support includes investigating defects, implementing corrections and reporting test results.',
        tags: ['Access control', 'Audit logs', 'Error handling', 'Testing'],
        href: '/en/#client-voice-6',
        link: 'Client feedback on backend improvements'
      },
      {
        title: 'Booking maintenance and notifications',
        body: 'I maintain and improve existing booking services, with support for LINE and email notifications, member management and payment-service connections.',
        tags: ['LINE Messaging API', 'Stripe', 'Maintenance'],
        href: '/en/#client-voice-1',
        link: 'Client feedback on booking maintenance'
      },
      {
        title: 'CMS and e-commerce implementation',
        body: 'I migrate and improve CMS platforms and develop product catalogs and ordering interfaces, taking ongoing content updates and product management into account.',
        tags: ['WordPress', 'Shopify', 'EC-CUBE'],
        href: '/en/#client-voice-3',
        link: 'Client feedback on CMS migration'
      },
      {
        title: 'Data integration and workflow automation',
        body: 'I automate data aggregation and API-based workflows. Internal search and business-support tools using generative AI and RAG are designed around your requirements.',
        tags: ['Python', 'API', 'RAG', 'Generative AI'],
        href: '/en/services/',
        link: 'Service details'
      },
      {
        title: 'Web and mobile interface development',
        body: 'I develop web and mobile interfaces with attention to usability, including connections to existing APIs, data-entry workflows, search and information presentation.',
        tags: ['TypeScript', 'React', 'Next.js', 'Flutter'],
        href: '/en/projects/',
        link: 'Project portfolio'
      }
    ]
  }
};

export function renderCapabilities(locale, e) {
  const copy = capabilityCopy[locale === 'en' ? 'en' : 'ja'];
  const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6"/></svg>';
  return `<section class="capabilities" aria-labelledby="capabilities-heading"><div class="capabilities-heading"><h3 id="capabilities-heading">${e(copy.heading)}</h3><p>${e(copy.intro)}</p></div><div class="capability-grid">${copy.cards.map((card, index) => `<article class="capability-card"><span class="capability-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span><h4>${e(card.title)}</h4><p class="capability-body">${e(card.body)}</p><ul class="capability-tags">${card.tags.map(tag => `<li>${e(tag)}</li>`).join('')}</ul><a class="capability-link" href="${e(card.href)}">${e(card.link)}${arrow}</a></article>`).join('')}</div></section>`;
}
