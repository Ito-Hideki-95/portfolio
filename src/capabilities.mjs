const capabilityCopy = {
  "ja": {
    "heading": "対応できる機能・開発領域",
    "intro": "ご検討中の機能や業務上の課題に応じて、設計・実装から公開後の運用まで対応します。関連する実績やご感想もあわせてご確認いただけます。",
    "cards": [
      {
        "title": "会員管理・証明書発行の業務システム",
        "body": "会員データのCSV一括登録、ログイン、PDF証明書の発行、QRコードによる検証機能に対応します。公開後の運用を見据え、操作資料まで整備します。",
        "tags": [
          "会員管理",
          "CSV",
          "PDF",
          "QRコード"
        ],
        "href": "/projects/#project-digital-certificates",
        "link": "会員・証明書システムの対応事例"
      },
      {
        "title": "バックエンドの設計・障害対応",
        "body": "監査ログや、異常時に処理を停止する設計に対応します。不具合の原因調査から修正、テスト資料の更新、ご報告まで承ります。",
        "tags": [
          "監査ログ",
          "エラー処理",
          "不具合調査",
          "テスト"
        ],
        "href": "/projects/#project-backend-audit",
        "link": "バックエンド改善の対応事例"
      },
      {
        "title": "Webサービスの保守・運用支援",
        "body": "既存サービスの保守、運用環境の整備、不具合の調査・改修に対応します。技術的な内容や対応方針をわかりやすくご説明します。",
        "tags": [
          "保守・運用",
          "環境整備",
          "技術説明"
        ],
        "href": "/projects/#project-flash-reserve",
        "link": "予約サービスの保守事例"
      },
      {
        "title": "既存コンテンツのCMS移行",
        "body": "静的HTMLサイトのデータをWordPressへ移行するなど、既存コンテンツを活用したCMSへの移行・改修に対応します。",
        "tags": [
          "WordPress",
          "HTML",
          "データ移行"
        ],
        "href": "/projects/#project-visual-anatomy",
        "link": "WordPressへの移行事例"
      },
      {
        "title": "情報取得・データ処理の設計",
        "body": "Pythonによる情報取得やAPI解析について、データの利用条件と業務上の目的を整理し、実装方針をご提案します。",
        "tags": [
          "Python",
          "API",
          "要件整理"
        ],
        "href": "/#client-voice-4",
        "link": "データ自動取得の提案へのご感想"
      },
      {
        "title": "Web・ECサイトの画面制作",
        "body": "WordPressやShopifyなどによるWeb・ECサイトの制作に対応します。公開サイトの画面事例から、情報整理や商品紹介の構成をご確認いただけます。",
        "tags": [
          "WordPress",
          "Shopify",
          "HTML・CSS"
        ],
        "href": "/projects/?search=Shopify",
        "link": "ECサイトの画面事例"
      }
    ]
  },
  "en": {
    "heading": "Development capabilities",
    "intro": "I support the design, implementation and ongoing operation of systems that meet your business requirements. Related project examples and client feedback are available below.",
    "cards": [
      {
        "title": "Membership and certificate systems",
        "body": "I implement bulk member imports, sign-in, PDF certificates and QR-code verification, with operating documentation to support use after delivery.",
        "tags": [
          "Member management",
          "CSV",
          "PDF",
          "QR codes"
        ],
        "href": "/en/projects/#project-digital-certificates",
        "link": "Membership and certificate case study"
      },
      {
        "title": "Backend design and troubleshooting",
        "body": "I implement audit logging and controls that stop processing under invalid conditions. Support includes defect investigation, fixes, test-document updates and reporting.",
        "tags": [
          "Audit logs",
          "Error handling",
          "Troubleshooting",
          "Testing"
        ],
        "href": "/en/projects/#project-backend-audit",
        "link": "Backend improvement case study"
      },
      {
        "title": "Web service maintenance and operations",
        "body": "I maintain existing services, improve operating environments and investigate defects, explaining technical issues and the proposed response clearly.",
        "tags": [
          "Maintenance",
          "Operating environments",
          "Technical communication"
        ],
        "href": "/en/projects/#project-flash-reserve",
        "link": "Booking service maintenance case study"
      },
      {
        "title": "Existing content migration to a CMS",
        "body": "I migrate and adapt existing content for a CMS, including moving data from static HTML websites into WordPress.",
        "tags": [
          "WordPress",
          "HTML",
          "Data migration"
        ],
        "href": "/en/projects/#project-visual-anatomy",
        "link": "WordPress migration case study"
      },
      {
        "title": "Data collection and processing design",
        "body": "I propose implementation approaches for Python-based data collection and API analysis after reviewing source conditions and the intended business use.",
        "tags": [
          "Python",
          "API",
          "Requirements"
        ],
        "href": "/en/#client-voice-4",
        "link": "Feedback on a data collection proposal"
      },
      {
        "title": "Website and e-commerce interfaces",
        "body": "I develop websites and e-commerce interfaces using platforms such as WordPress and Shopify. Public website examples illustrate content organization and product presentation.",
        "tags": [
          "WordPress",
          "Shopify",
          "HTML & CSS"
        ],
        "href": "/en/projects/?search=Shopify",
        "link": "E-commerce interface examples"
      }
    ]
  }
};

export function renderCapabilities(locale, e) {
  const copy = capabilityCopy[locale === 'en' ? 'en' : 'ja'];
  const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6"/></svg>';
  return `<section class="capabilities" aria-labelledby="capabilities-heading"><div class="capabilities-heading"><h3 id="capabilities-heading">${e(copy.heading)}</h3><p>${e(copy.intro)}</p></div><div class="capability-grid">${copy.cards.map((card, index) => `<article class="capability-card"><span class="capability-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span><h4>${e(card.title)}</h4><p class="capability-body">${e(card.body)}</p><ul class="capability-tags">${card.tags.map(tag => `<li>${e(tag)}</li>`).join('')}</ul><a class="capability-link" href="${e(card.href)}">${e(card.link)}${arrow}</a></article>`).join('')}</div></section>`;
}
