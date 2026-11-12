const capabilityCopy = {
  ja: {
    heading: '実装できること',
    intro: '実現したい機能から、必要な設計・実装・運用までご相談いただけます。',
    cards: [
      {
        title: '会員情報を、証明書の発行までつなぐ',
        body: 'ログイン、会員データのCSV入出力、PDF証明書の発行、QRコードを使う確認画面など、業務に必要な一連の機能を組み立てます。',
        tags: ['会員管理', 'CSV', 'PDF', 'QRコード'],
        href: '/#client-voice-5',
        link: '会員・証明書システムの声'
      },
      {
        title: '異常時にも、安心して使える仕組みへ',
        body: '権限と操作履歴を整理し、異常な状態では処理を止める設計に対応。不具合の原因調査から修正・テスト結果の共有まで進めます。',
        tags: ['権限制御', '監査ログ', 'エラー処理', 'テスト'],
        href: '/#client-voice-6',
        link: 'バックエンド改善の声'
      },
      {
        title: '予約・通知サービスを、継続して使いやすく',
        body: '既存予約サービスの保守・改修に対応します。LINE・メール通知や、会員・決済まわりの連携もご相談いただけます。',
        tags: ['LINE Messaging API', 'Stripe', '保守・改修'],
        href: '/#client-voice-1',
        link: '予約サービスの保守・運用の声'
      },
      {
        title: '更新も販売も、運用しやすいサイトに',
        body: 'CMSの移行・改修から、商品一覧や注文導線の構築まで対応。公開後の更新や商品管理を見据えて、サイトを整えます。',
        tags: ['WordPress', 'Shopify', 'EC-CUBE'],
        href: '/#client-voice-3',
        link: 'CMS移行の声'
      },
      {
        title: '集計・検索・繰り返す作業を自動化する',
        body: 'データ集計やAPI連携を自動化。生成AI・RAGを使う社内検索や業務支援ツールも、目的に合わせて設計します。',
        tags: ['Python', 'API', 'RAG', '生成AI'],
        href: '/services/',
        link: '対応サービスを見る'
      },
      {
        title: 'Webでもアプリでも、使いやすい画面へ',
        body: 'スマートフォンでも使いやすいWeb画面やアプリを制作。既存APIとつなぎ、入力・検索・情報表示の流れを整えます。',
        tags: ['TypeScript', 'React', 'Next.js', 'Flutter'],
        href: '/projects/',
        link: '制作実績を見る'
      }
    ]
  },
  en: {
    heading: 'What I can build',
    intro: 'Start with the functionality you need. I can help with the design, implementation and ongoing operation.',
    cards: [
      {
        title: 'From member records to certificates',
        body: 'Connect login, CSV imports and exports, PDF certificate generation and QR verification screens into a workflow that fits your operations.',
        tags: ['Member management', 'CSV', 'PDF', 'QR codes'],
        href: '/en/#client-voice-5',
        link: 'Read the membership system feedback'
      },
      {
        title: 'Reliable behavior when things go wrong',
        body: 'Define permissions, keep audit records and stop processing when conditions are invalid. I investigate defects, implement fixes and share the test results.',
        tags: ['Access control', 'Audit logs', 'Error handling', 'Testing'],
        href: '/en/#client-voice-6',
        link: 'Read the backend improvement feedback'
      },
      {
        title: 'Keep booking services working smoothly',
        body: 'Maintain and improve existing booking services. I also help with LINE and email notifications, membership features and payment connections.',
        tags: ['LINE Messaging API', 'Stripe', 'Maintenance'],
        href: '/en/#client-voice-1',
        link: 'Read the booking maintenance feedback'
      },
      {
        title: 'Make publishing and selling easier',
        body: 'Migrate or improve your CMS and build product catalogs and ordering flows. Site updates and product management are part of the design from the start.',
        tags: ['WordPress', 'Shopify', 'EC-CUBE'],
        href: '/en/#client-voice-3',
        link: 'Read the CMS migration feedback'
      },
      {
        title: 'Automate reporting, search and routine work',
        body: 'Automate data aggregation and API workflows. I can also design internal search and business tools using generative AI and RAG around your specific needs.',
        tags: ['Python', 'API', 'RAG', 'Generative AI'],
        href: '/en/services/',
        link: 'Explore available services'
      },
      {
        title: 'Usable interfaces across web and mobile',
        body: 'Build websites and apps that work comfortably on a phone. Connect existing APIs and organize data entry, search and information displays into clear user flows.',
        tags: ['TypeScript', 'React', 'Next.js', 'Flutter'],
        href: '/en/projects/',
        link: 'Explore the project library'
      }
    ]
  }
};

export function renderCapabilities(locale, e) {
  const copy = capabilityCopy[locale === 'en' ? 'en' : 'ja'];
  const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6"/></svg>';
  return `<section class="capabilities" aria-labelledby="capabilities-heading"><div class="capabilities-heading"><h3 id="capabilities-heading">${e(copy.heading)}</h3><p>${e(copy.intro)}</p></div><div class="capability-grid">${copy.cards.map((card, index) => `<article class="capability-card"><span class="capability-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span><h4>${e(card.title)}</h4><p class="capability-body">${e(card.body)}</p><ul class="capability-tags">${card.tags.map(tag => `<li>${e(tag)}</li>`).join('')}</ul><a class="capability-link" href="${e(card.href)}">${e(card.link)}${arrow}</a></article>`).join('')}</div></section>`;
}
