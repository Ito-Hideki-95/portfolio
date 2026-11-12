// このファイルがサイトの文章・リンクの編集窓口です。
// ownerName は任意。名前を表示しない場合は空欄のままにしてください。
export const site = {
  brandName: 'Development Partner',
  ownerName: '',
  role: '業務システム・AI・Web / アプリ開発',
  contactUrl: '', // 空欄のときは外部への連絡ボタンを表示しません
  contactLabel: 'お問い合わせ',
  siteUrl: 'https://emoto-negitoro-portfolio.vercel.app',
  indexable: false, // 内容の確認・連絡先の設定後に true にすると検索登録を許可
  description: '業務内容を把握したうえで、業務システム・AI・Web／アプリの設計・実装・テスト・公開・保守まで一貫してご支援します。対応領域、制作実績、クライアントからいただいた評価をご紹介します。',
  experienceYears: 11,
};

// 所有者から提供された6件の評価原文を全文掲載。長文は表示上のみ折りたたみます。
// 返信文・報酬・顧客名は含めません。comment / highlight は原文を保持。根拠は docs/client-feedback.md。
export const reviews = [
  {
    "project": "Flash Reserve－瞬間－ Webサービス保守・運用",
    "sourceProject": "【長期継続／技術パートナー候補】 Webサービス保守・運用エンジニア募集",
    "projectUrl": "https://flash-reserve.com/",
    "projectLinkLabel": "公開サイトを確認する",
    "image": "/images/reviews/flash-reserve-screen.webp",
    "imageAlt": "Flash Reserveの日本語トップ画面。レストランの写真に見出し、ナビゲーション、会員登録とログインのボタンが配置されている",
    "imageCaption": "Flash Reserveのトップ画面",
    "imageWidth": 2160,
    "imageHeight": 1350,
    "imageFit": "contain",
    "date": "2026-10-14",
    "comment": "この度は、Webサービスのシステム保守・運用環境の整備にご尽力いただき、誠にありがとうございました。\n\n技術的な知識と問題解決能力に優れており、こちらの要望や課題を的確に理解したうえで、丁寧かつ誠実に対応していただきました。\n\n特に、専門的な内容についてもわかりやすく説明いただけるため、安心して仕事をお任せできるエンジニアの方です。\n\n技術力だけでなく、責任感やコミュニケーション能力の面でも大変信頼できる方だと感じています。\n\n今後もぜひ継続してお仕事をご一緒したいと思っています。",
    "theme": "わかりやすい技術説明",
    "highlight": "特に、専門的な内容についてもわかりやすく説明いただけるため、安心して仕事をお任せできるエンジニアの方です。",
    "projectSummary": "Webサービスのシステム保守と運用環境の整備を担当しました。",
    "sourceUrl": "https://www.lancers.jp/profile/negitoro256?ref=header_menu",
    "commentIsExcerpt": false
  },
  {
    "project": "美容室の予約サイト兼ECサイト構築",
    "sourceProject": "テスト・最終調整・リリース",
    "projectUrl": "https://vivum-sallier.com/",
    "projectLinkLabel": "公開サイトを確認する",
    "image": "/images/reviews/vivum-sallier-screen.webp",
    "imageAlt": "vivum・S’allierのトップ画面。ロゴ、メニュー、予約とオンラインストアのボタン、店内写真とサロンの紹介文が表示されている",
    "imageCaption": "vivum・S’allierのトップ画面",
    "imageWidth": 2160,
    "imageHeight": 1350,
    "imageFit": "contain",
    "date": "2026-09-01",
    "comment": "丁寧なヒアリングで細かな調整も適切な対応いただきありがとうございます。",
    "theme": "ご要望に沿った調整",
    "highlight": "丁寧なヒアリングで細かな調整も適切な対応いただきありがとうございます。",
    "projectSummary": "美容室の予約・ECサイトのテスト、最終調整、リリースに対応しました。",
    "sourceUrl": "https://www.lancers.jp/profile/negitoro256?ref=header_menu",
    "commentIsExcerpt": false
  },
  {
    "project": "HTMLサイトのWordPress移行",
    "sourceProject": "静的HTMLサイトのデータをWordPressサイトへ移植",
    "projectUrl": "https://visual-anatomy-wp.com/",
    "projectLinkLabel": "公開サイトを確認する",
    "image": "/images/reviews/visual-anatomy.jpg",
    "imageAlt": "Visual Anatomyの会員案内ページで公開されている、多極神経細胞などの解剖学イラストの見本",
    "imageCaption": "Visual Anatomyの公開サンプル",
    "imageWidth": 485,
    "imageHeight": 347,
    "imageFit": "contain",
    "date": "2026-06-10",
    "comment": "知識も経験も豊富な方で特に不安もなく作業をお願いすることができました。",
    "theme": "既存サイト移行への対応",
    "highlight": "知識も経験も豊富な方で特に不安もなく作業をお願いすることができました。",
    "projectSummary": "既存の静的HTMLサイトをWordPressへ移行しました。",
    "sourceUrl": "https://www.lancers.jp/profile/negitoro256?ref=header_menu",
    "commentIsExcerpt": false
  },
  {
    "project": "Pythonによるデータ自動取得",
    "sourceProject": "【Pythonスクレイピング】旅行パッケージ価格データ自動取得スクリプト開発（API解析）",
    "projectUrl": "https://www.lancers.jp/menu/detail/1351229",
    "projectLinkLabel": "サービス紹介を確認する",
    "image": "/images/reviews/data-collection.jpg",
    "imageAlt": "データ収集サービス紹介画像。情報の自動収集、整形、CSV出力の流れを説明",
    "imageCaption": "データ収集サービスの紹介画像",
    "imageWidth": 999,
    "imageHeight": 562,
    "imageFit": "contain",
    "date": "2026-03-11",
    "comment": "丁寧かつ誠実に、専門的な知識や経験を持ってご提案をいただき大変好印象でした。",
    "theme": "専門知識に基づくご提案",
    "highlight": "丁寧かつ誠実に、専門的な知識や経験を持ってご提案をいただき大変好印象でした。",
    "projectSummary": "旅行パッケージ価格データの自動取得・API解析に関する案件です。画像はサービス紹介用です。",
    "sourceUrl": "https://www.lancers.jp/profile/negitoro256?ref=header_menu",
    "commentIsExcerpt": false
  },
  {
    "project": "デジタル認定証・会員証システム",
    "sourceProject": "QRコード認証付きデジタル認定証明書・ デジタル会員証Webシステム開発の依頼",
    "date": "2026-09-15",
    "comment": "とても丁寧かつ迅速にご対応いただきました。\n\n今回、デジタル認定証明書・デジタル認定会員証のWebシステム開発をお願いしましたが、開発途中の仕様確認や細かな修正依頼についても、一つひとつ内容を確認しながら柔軟にご対応いただきました。\n\nCSVの大量データ取込、会員ログイン、PDF認定証、QRコードによる第三者確認など、複数の機能がある案件でしたが、不具合や確認事項が発生した際も原因や対応内容を分かりやすく説明していただき、安心して進めることができました。\n\nまた、納品後の運用を考慮した操作マニュアルも作成いただき、今後の文言変更やURL変更、トラブル時の対応方法まで丁寧にまとめていただきました。\n\nこちらから度々細かな修正をお願いすることもありましたが、最後まで誠実にご対応いただき、大変感謝しております。\n\nこの度はありがとうございました。\n\n今後、追加開発や改修が必要になった際にも、ぜひご相談させていただきたいと思います。",
    "highlight": "納品後の運用を考慮した操作マニュアルも作成いただき",
    "theme": "運用を考慮した引き継ぎ",
    "projectSummary": "CSV一括取込、会員ログイン、PDF認定証、QRコード照合を備えたシステムを開発し、運用マニュアルを作成しました。",
    "sourceUrl": "https://crowdworks.jp/public/employees/4377423/feedbacks",
    "commentIsExcerpt": false
  },
  {
    "project": "バックエンド開発・監査ログ設計",
    "sourceProject": "Webプログラミングの仕事",
    "date": "2026-03-20",
    "comment": "M1（マイルストーン1）の納品です。\n\n設計書の理解度が高く、Fail-Closedや監査ログの設計など、バックエンドのロジックが非常にしっかりしています。\n\n検収時に1件不具合がありましたが、原因特定・修正・報告まで当日中に対応いただきました。\n\nテスト資料の更新も迅速で、コミュニケーションが取りやすい方です。引き続きM2もよろしくお願いいたします。",
    "highlight": "バックエンドのロジックが非常にしっかりしています。",
    "theme": "バックエンド設計・検証への対応",
    "projectSummary": "M1納品時の評価です。Fail-Closed・監査ログの設計、不具合の原因特定・修正、テスト資料の更新に対応しました。",
    "sourceUrl": "https://crowdworks.jp/public/employees/4377423/feedbacks",
    "commentIsExcerpt": false
  }
];

export const experiences = [
  {
    id: 'business', number: '01', category: 'BUSINESS SYSTEM', theme: 'business',
    title: '業務要件に基づく\nシステム開発',
    domain: '保険・金融関連システム',
    description: '保険・金融関連の業務において、複雑な条件判定、候補管理、CSV・PDF入出力などの開発を経験しています。業務ルールに加え、権限制御と操作履歴を考慮し、日々の運用を支えるシステムを設計します。',
    tags: ['条件判定・候補管理', '帳票出力', '権限制御・監査ログ'],
    scope: '条件判定、候補管理、データ入出力、操作履歴、帳票機能',
    consideration: '業務ルールを整理し、利用者ごとの操作範囲と記録方法を明確にすることを重視しています。',
    image: '', // 掲載許可済み画像を public/images/ に置き /images/xxx.webp を指定
    imageAlt: '',
  },
  {
    id: 'reservation', number: '02', category: 'MEMBERSHIP & BOOKING', theme: 'reservation',
    title: '予約・会員サービスの\n開発・運用支援',
    domain: '予約・会員サービス',
    description: '外部サイトからの情報取得、空席検知、LINE・メール通知、会員管理、Stripe決済の開発経験があります。クラウドへの移行と、公開後の保守にも対応します。',
    tags: ['LINE・メール通知', '会員管理・Stripe', 'クラウド移行・保守'],
    scope: '情報取得、空席検知、通知、会員管理、決済連携、移行・保守',
    consideration: '利用者の操作と管理者の運用を確認し、外部サービスとの連携方法を設計します。',
    image: '', imageAlt: '',
  },
  {
    id: 'automation', number: '03', category: 'AI & AUTOMATION', theme: 'automation',
    title: 'AI・API連携による\n業務効率化',
    domain: '業務効率化・AI活用',
    description: 'API連携、データ集計、生成AI、RAG、AIエージェントなどの開発経験をもとに、業務内容に応じた自動化の方法をご提案します。',
    tags: ['API・データ連携', '生成AI・RAG', '業務自動化'],
    scope: 'データ収集・集計、API連携、生成AI活用、社内業務の自動化',
    consideration: '費用対効果と人による確認が必要な工程を整理し、継続して運用できる範囲から実装します。',
    image: '', imageAlt: '',
  },
];

// 添付原稿で確認できた01〜13を収録。料金・納期は提案値のため未掲載です。
export const services = [
  { id: '01', category: 'ai', title: 'AIチャットボット', text: 'FAQの自動回答、Webサイトへの設置、担当窓口への案内に対応します。', scope: 'FAQ整理 / 回答調整 / Webへの設置' },
  { id: '02', category: 'ai', title: '社内AI検索・RAG', text: '社内資料やナレッジを検索し、必要な情報を参照できる環境を構築します。', scope: '社内資料の検索 / ナレッジ活用' },
  { id: '03', category: 'ai', title: 'AI帳票処理・データ抽出', text: '帳票から必要な情報を抽出し、業務で利用しやすいデータに整えます。', scope: '帳票の読み取り / データ抽出' },
  { id: '04', category: 'ai', title: 'AIエージェント', text: '複数の工程にまたがる作業を整理し、業務に適した自動化の方法を設計します。', scope: '工程の整理 / 複数ステップの自動化' },
  { id: '05', category: 'ai', title: 'メール・議事録・報告書のAI支援', text: 'メール、議事録、報告書の作成・要約・情報整理をAIで支援します。', scope: '文章作成支援 / 要約 / 情報整理' },
  { id: '06', category: 'system', title: '業務管理システムの個別開発', text: '業務フローに合わせて、管理画面、権限制御、帳票出力の機能を開発します。', scope: '業務管理 / 管理画面 / 帳票' },
  { id: '07', category: 'system', title: '申請・承認・タスク管理', text: '申請・承認の流れを整理し、担当者と進捗を確認できる仕組みを構築します。', scope: 'ワークフロー / 承認 / 進捗管理' },
  { id: '08', category: 'system', title: 'ダッシュボード・集計レポート', text: '複数のデータを集約し、集計とレポート作成の効率化を支援します。', scope: 'データ集計 / 可視化 / レポート' },
  { id: '09', category: 'system', title: 'Web情報収集・データ整形', text: '取得元の利用条件を確認したうえで、情報取得とデータ整形を自動化します。', scope: '情報収集 / データ加工 / 定期処理' },
  { id: '10', category: 'web', title: '企業サイト・WordPress', text: '更新作業とスマートフォンでの操作性を考慮し、企業サイトを構築します。', scope: '企業サイト / CMS / レスポンシブ対応' },
  { id: '11', category: 'web', title: 'LP制作・お問い合わせ導線', text: '掲載内容を整理し、サービスのご案内からお問い合わせまでの導線を設計します。', scope: 'LP / 導線設計 / 表示の最適化' },
  { id: '12', category: 'web', title: 'ECサイト・オンラインストア', text: 'Shopifyなどを用い、商品管理から注文までの機能と導線を整備します。', scope: 'EC構築 / 商品管理 / 注文機能' },
  { id: '13', category: 'system', title: '会員・サブスクリプション', text: '会員登録、ログイン、利用権限の管理、Stripeなどの決済連携に対応します。', scope: '認証 / 会員管理 / 継続課金' },
];

export const technologies = [
  ['FRONTEND', 'HTML / CSS / JavaScript / TypeScript / React / Next.js / Vue.js / Nuxt.js'],
  ['BACKEND', 'PHP / Laravel / Python / Django / FastAPI / Node.js / Ruby on Rails / Go'],
  ['DATABASE & CLOUD', 'MySQL / PostgreSQL / Redis / Firebase / Supabase / AWS / GCP / Cloudflare'],
  ['CMS & COMMERCE', 'WordPress / SWELL / Shopify / EC-CUBE / STUDIO / Wix / ペライチ'],
  ['APPLICATION', 'Flutter / React Native / Android / iOS / Unity'],
  ['INTEGRATION & AI', 'LINE Messaging API / Stripe / Salesforce / kintone / ChatGPT / Claude / LLM / RAG / Bot / AIエージェント / SEO・SEM'],
];

export const faqs = [
  ['要件が未確定の段階でも相談できますか？', 'はい。現在の業務内容や課題からお伺いします。業務フローと優先順位を整理し、費用対効果や拡張性を踏まえて実装方法をご提案します。'],
  ['部分的な改修や、他社が開発したシステムの引き継ぎは可能ですか？', '部分改修と既存システムの引き継ぎに対応しています。現在の構成と問題の状況を確認し、データベース・API・インフラを含めて、必要な調査と修正の範囲を整理します。'],
  ['費用と納期は、どのように決定しますか？', '必要な機能、対象範囲、利用環境、資料の準備状況を確認し、個別にお見積もりします。着手前に納期と受入条件を明確にし、外部サービスの利用料なども合わせてご案内します。'],
  ['公開後の保守や、ご担当者への引き継ぎは可能ですか？', '公開後の運用を考慮して開発し、品質確認、テスト結果と操作資料のご提供、引き継ぎまで対応します。保守の対象範囲と対応条件は、事前にご相談のうえ決定します。'],
  ['機密情報や社内データは、どのように取り扱いますか？', 'アクセス権限、操作ログ、データ保護を考慮して設計します。利用するデータと外部サービスの範囲、社内の運用条件を事前に確認します。'],
];
