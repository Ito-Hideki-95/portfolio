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
  description: '業務システム・AI・Web／アプリ開発を、業務理解から設計・実装・テスト・公開・保守まで一貫して支援します。開発経験と、クライアントからいただいた実際の評価をご紹介します。',
  experienceYears: 11,
};

// 2026-11-03に提供されたランサーズ評価原稿から、クライアントのコメント本文のみを掲載。
// 返信文・報酬・顧客名は含めません。コメントは原文を維持し、案件名は掲載用に表記。
export const reviews = [
  {
    project: 'Flash Reserve－瞬間－ Webサービス保守・運用',
    sourceProject: '【長期継続／技術パートナー候補】 Webサービス保守・運用エンジニア募集',
    projectUrl: 'https://flash-reserve.com/',
    projectLinkLabel: '公開サイトを見る',
    image: '/images/reviews/flash-reserve-screen.webp',
    imageAlt: 'Flash Reserveの日本語トップ画面。レストランの写真に見出し、ナビゲーション、会員登録とログインのボタンが配置されている',
    imageCaption: 'Flash Reserveのトップ画面',
    imageWidth: 2160,
    imageHeight: 1350,
    imageFit: 'contain',
    date: '2026-10-14',
    rating: '満足',
    comment: 'この度は、Webサービスのシステム保守・運用環境の整備にご尽力いただき、誠にありがとうございました。\n\n技術的な知識と問題解決能力に優れており、こちらの要望や課題を的確に理解したうえで、丁寧かつ誠実に対応していただきました。\n\n特に、専門的な内容についてもわかりやすく説明いただけるため、安心して仕事をお任せできるエンジニアの方です。\n\n技術力だけでなく、責任感やコミュニケーション能力の面でも大変信頼できる方だと感じています。\n\n今後もぜひ継続してお仕事をご一緒したいと思っています。',
  },
  {
    project: '美容室の予約サイト兼ECサイト構築',
    sourceProject: 'テスト・最終調整・リリース',
    projectUrl: 'https://vivum-sallier.com/',
    projectLinkLabel: '公開サイトを見る',
    image: '/images/reviews/vivum-sallier-screen.webp',
    imageAlt: 'vivum・S’allierのトップ画面。ロゴ、メニュー、予約とオンラインストアのボタン、店内写真とサロンの紹介文が表示されている',
    imageCaption: 'vivum・S’allierのトップ画面',
    imageWidth: 2160,
    imageHeight: 1350,
    imageFit: 'contain',
    date: '2026-09-01',
    rating: '満足',
    comment: '丁寧なヒアリングで細かな調整も適切な対応いただきありがとうございます。',
  },
  {
    project: 'HTMLサイトのWordPress移行',
    sourceProject: '静的HTMLサイトのデータをWordPressサイトへ移植',
    projectUrl: 'https://visual-anatomy-wp.com/',
    projectLinkLabel: '公開サイトを見る',
    image: '/images/reviews/visual-anatomy.jpg',
    imageAlt: 'Visual Anatomyの会員案内ページで公開されている、多極神経細胞などの解剖学イラストの見本',
    imageCaption: 'Visual Anatomyの公開サンプル',
    imageWidth: 485,
    imageHeight: 347,
    imageFit: 'contain',
    date: '2026-06-10',
    rating: '満足',
    comment: '知識も経験も豊富な方で特に不安もなく作業をお願いすることができました。',
  },
  {
    project: 'Pythonによるデータ自動取得',
    sourceProject: '【Pythonスクレイピング】旅行パッケージ価格データ自動取得スクリプト開発（API解析）',
    projectUrl: 'https://www.lancers.jp/menu/detail/1351229',
    projectLinkLabel: 'サービス紹介を見る',
    image: '/images/reviews/data-collection.jpg',
    imageAlt: 'データ収集サービス紹介画像。情報の自動収集、整形、CSV出力の流れを説明',
    imageCaption: 'データ収集サービスの紹介画像',
    imageWidth: 999,
    imageHeight: 562,
    imageFit: 'contain',
    date: '2026-03-11',
    rating: '満足',
    comment: '丁寧かつ誠実に、専門的な知識や経験を持ってご提案をいただき大変好印象でした。',
  },
];

export const experiences = [
  {
    id: 'business', number: '01', category: 'BUSINESS SYSTEM', theme: 'business',
    title: '複雑な業務を、\n迷わず使える仕組みに。',
    domain: '保険・金融関連システム',
    description: '複雑な条件判定や候補管理、CSV・PDF入出力など、業務のルールをシステムに落とし込む開発を経験。権限と履歴にも配慮し、日々の運用を支えます。',
    tags: ['条件判定・候補管理', '帳票出力', '権限制御・監査ログ'],
    scope: '条件判定、候補管理、データ入出力、操作履歴、帳票機能',
    consideration: '業務ルールの整理と、利用者ごとの操作範囲・記録の設計を重視しています。',
    image: '', // 掲載許可済み画像を public/images/ に置き /images/xxx.webp を指定
    imageAlt: '',
  },
  {
    id: 'reservation', number: '02', category: 'MEMBERSHIP & BOOKING', theme: 'reservation',
    title: '予約から通知・決済まで、\n途切れない体験を。',
    domain: '予約・会員サービス',
    description: '外部サイトの情報取得、空席検知、LINE・メール通知、会員管理、Stripe決済を経験。クラウドへの移行や、その後の保守にも対応します。',
    tags: ['LINE・メール通知', '会員管理・Stripe', 'クラウド移行・保守'],
    scope: '情報取得、空席検知、通知、会員管理、決済連携、移行・保守',
    consideration: '利用者の動きと管理者の運用を合わせて整理し、外部サービスとの連携を設計します。',
    image: '', imageAlt: '',
  },
  {
    id: 'automation', number: '03', category: 'AI & AUTOMATION', theme: 'automation',
    title: '繰り返す作業を、\n次の仕事に使える時間へ。',
    domain: '業務効率化・AI活用',
    description: 'API連携、データ集計、生成AI、RAG、AIエージェントなどの開発経験を活かし、現場の業務に合わせた自動化の方法をご提案します。',
    tags: ['API・データ連携', '生成AI・RAG', '業務自動化'],
    scope: 'データ収集・集計、API連携、生成AI活用、社内業務の自動化',
    consideration: '費用対効果と確認が必要な工程を整理し、業務で継続利用できる範囲から実装します。',
    image: '', imageAlt: '',
  },
];

// 添付原稿で確認できた01〜13を収録。料金・納期は提案値のため未掲載です。
export const services = [
  { id: '01', category: 'ai', title: 'AIチャットボット', text: 'FAQの自動回答、Webサイトへの設置、担当窓口への案内まで。', scope: 'FAQ整理 / 回答調整 / Webへの設置' },
  { id: '02', category: 'ai', title: '社内AI検索・RAG', text: '社内資料やナレッジを、必要な情報にたどり着ける検索環境へ。', scope: '社内資料の検索 / ナレッジ活用' },
  { id: '03', category: 'ai', title: 'AI帳票処理・データ抽出', text: '帳票から必要な情報を取り出し、データとして扱いやすく。', scope: '帳票の読み取り / データ抽出' },
  { id: '04', category: 'ai', title: 'AIエージェント', text: '複数の工程にまたがる作業を整理し、業務に合う自動化を設計。', scope: '工程の整理 / 複数ステップの自動化' },
  { id: '05', category: 'ai', title: 'メール・議事録・報告書のAI支援', text: '文章をまとめる、整える、作成する。日々の業務をAIで支援。', scope: '文章作成支援 / 要約 / 情報整理' },
  { id: '06', category: 'system', title: 'オーダーメイド業務管理', text: '業務フローに合わせた管理画面、権限制御、帳票出力。', scope: '業務管理 / 管理画面 / 帳票' },
  { id: '07', category: 'system', title: '申請・承認・タスク管理', text: '申請から承認までの流れと、担当・進捗を見える化。', scope: 'ワークフロー / 承認 / 進捗管理' },
  { id: '08', category: 'system', title: 'ダッシュボード・集計レポート', text: '点在するデータをまとめ、集計とレポート作成を効率化。', scope: 'データ集計 / 可視化 / レポート' },
  { id: '09', category: 'system', title: 'Web情報収集・データ整形', text: '利用条件を確認したうえで、情報取得とデータ整形を自動化。', scope: '情報収集 / データ加工 / 定期処理' },
  { id: '10', category: 'web', title: '企業サイト・WordPress', text: '更新しやすさと、スマートフォンでの使いやすさを両立。', scope: '企業サイト / CMS / レスポンシブ対応' },
  { id: '11', category: 'web', title: 'LP制作・問い合わせ導線', text: '伝える内容を整理し、サービスの理解から相談につながるページに。', scope: 'LP / 導線設計 / 表示の最適化' },
  { id: '12', category: 'web', title: 'ECサイト・オンラインストア', text: 'Shopifyなどを用い、商品管理から注文までの導線を整備。', scope: 'EC構築 / 商品管理 / 注文機能' },
  { id: '13', category: 'system', title: '会員・サブスクリプション', text: '会員登録、ログイン、利用権限、Stripeなどの決済連携。', scope: '認証 / 会員管理 / 継続課金' },
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
  ['何を作るか、まだ決まっていません。', '現在の業務や、困っている作業からお聞かせください。業務フローと優先順位を整理し、費用対効果や拡張性を踏まえて実装方法をご提案します。'],
  ['一部分の改修や、他社が作ったシステムも相談できますか？', '部分改修、既存システムの引き継ぎにも対応しています。まずは現状の構成と症状を確認し、DB・API・インフラを含めて必要な調査や修正の範囲を整理します。'],
  ['費用と納期は、どのように決まりますか？', '必要な機能、対象範囲、利用環境、資料の準備状況を確認して個別にご案内します。着手前に納期と受入条件を明確にし、外部サービスの利用料なども合わせて整理します。'],
  ['公開後の保守や、担当者への引き継ぎは可能ですか？', '公開・保守を見据えて開発し、品質確認、テスト結果、操作資料、引き継ぎまで対応します。保守の対象範囲と対応条件は、事前にご相談のうえ決定します。'],
  ['機密情報や、社内データを扱う場合は？', 'アクセス権限、操作ログ、データ保護に配慮して設計します。利用するデータや外部サービスの範囲、社内の運用条件を事前に確認します。'],
];
