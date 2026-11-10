# Development Partner — ポートフォリオ

業務システム・AI・Web／アプリ開発者のポートフォリオサイトです。ソースコードはこのフォルダ内にあります。

ソースの保存先は [Ito-Hideki-95/portfolio](https://github.com/Ito-Hideki-95/portfolio)、メインブランチは `main` です。`D:\04 portfolio` の `origin` にこのリポジトリを設定しています。

公開URL：**https://emoto-negitoro-portfolio.vercel.app**

英語版：**https://emoto-negitoro-portfolio.vercel.app/en/**

参考サイトの構成に合わせ、左右に分かれた導入、プロフィール、経験のタイムライン、球体の技術ロゴ、実績カード、業種別の実績導線、クライアントの声、サービス、FAQ、お問い合わせを配置しています。個人名は表示せず、Development Partnerをサイト名にしています。ヒーローには実際の制作サイトの画面を掲載しています。

淡いブルーを基調に、白・黒・指定色 `#0162b4` のセクションを組み合わせています。昼間／夜間と日本語／英語の切り替え、半透明、回転、スクロール表示、スワイプ、右から左へ流れる技術ロゴに対応しています。ヘッダーで動きを停止でき、端末の動きを減らす設定も尊重します。

トップに担当範囲が確認できる3事例と6サイトのカードを掲載しています。全71ページは `/projects/`、英語版は `/en/projects/` で閲覧でき、カテゴリー・検索・9件ずつの追加表示に対応します。プロフィール・技術・サービス・FAQも専用ページがあります。クライアントコメントは原文を維持し、タイムラインの日付はコメント受領日として表示します。

Vercelの `ito-hideki-95-portfolio` プロジェクトにGitHubを連携済みです。`main` にpushすると、本番サイトが自動デプロイされます。

Node.js の標準機能でHTMLを生成する静的サイトです。外部パッケージのインストールは不要です。Vercelで配信するファイルは `dist/` に生成されます。

## すぐに確認する

Node.js 22以上を用意し、このフォルダで実行します。Windows PowerShellで `npm` の実行ポリシーエラーが出る場合は `npm.cmd` を使ってください。

```powershell
cd "D:\04 portfolio"
npm.cmd run dev
```

ブラウザで <http://localhost:3000> を開きます。`src/` または `public/` のファイルを保存すると、再ビルドしてブラウザを自動更新します。停止は `Ctrl+C` です。

```powershell
npm.cmd run check
npm.cmd test
npm.cmd run build
npm.cmd run preview
```

`check` はJavaScriptの構文確認、`build` は本番用ファイル生成、`preview` は生成したサイトのローカル確認です。プレビューは保存時の自動更新を行いません。

## 編集する場所

| 変更内容 | ファイル |
| --- | --- |
| 公開名、問い合わせ先、公開URL、開発経験、クライアントの評価、サービス、技術、FAQ | `src/content.mjs` |
| 日本語・英語の紹介文、見出し、仕事の進め方、英訳、ロゴ一覧 | `src/locales.mjs` |
| 制作実績のURL、日英の名称・紹介文、画像、カテゴリー | `src/projects.mjs` |
| 注目事例の説明・担当範囲 | `src/featured.mjs` |
| 実績一覧の構成・文言、トップの9件 | `src/gallery.mjs` |
| 実績一覧の見た目・検索・絞り込み・画像拡大 | `public/styles.css` / `public/gallery.js` |
| ページ構成、各セクションのHTML | `src/page.mjs` / `src/sections.mjs` |
| 色、余白、フォント、スマートフォン表示 | `public/styles.css` |
| 表示設定、スワイプ、演出、絞り込み、メニュー、相談文の生成 | `public/app.js` |
| 描画前のテーマ・動きの設定 | `public/preferences.js` |
| 掲載許可を得た実績画像 | `public/images/` に追加 |
| Vercelのビルド設定 | `vercel.json` |

`dist/` は毎回作り直す生成物です。直接編集せず、GitHubにはソースをアップロードします。

## 初回公開の前に

`src/content.mjs` の冒頭を設定してください。

```js
export const site = {
  brandName: 'ご自身の屋号',
  ownerName: '', // 個人名は表示しない,
  contactUrl: 'mailto:discordworks2522@gmail.com',
  contactLabel: 'メールで相談する',
  siteUrl: 'https://ご自身のプロジェクト.vercel.app',
  indexable: false,
  // その他の項目は維持
};
```

個人名は表示せず、Development Partnerをサイト名にしています。お問い合わせ先は `discordworks2522@gmail.com` です。メールボタンとメールアドレスのコピー、作成した相談文を宛先・件名・本文つきでメールアプリに開く機能があります。送信は利用者がメールアプリで確認して行います。このサイトのサーバーから送信する機能はありません。`contactUrl` は `https://` の問い合わせ先、または単一の宛先を持つ `mailto:` を設定できます。

原稿・サイト名・連絡先・公開URLを確認した後に `indexable: true` にします。これにより検索エンジン向けの `robots` とサイトマップを切り替えます。`noindex` は閲覧制限ではないため、公開URLを知っている人は閲覧できます。

## GitHubとVercel

具体的な手順は [公開・更新ガイド](docs/deployment.md)、ご準備いただく内容は [素材準備シート](docs/materials.md) を参照してください。

```text
編集 → 保存 → localhost が自動更新
              ↓ 確認して commit / push
            GitHub → Vercelが自動ビルド → 公開URLを更新
```

初回のGitHub・Vercel連携は、ご自身のアカウントで行います。以降はGitHubへのpushで自動デプロイされます。ファイルの保存だけでは公開サイトは更新されません。

日常の更新は、ローカル表示を確認した後に以下を実行します。

```powershell
npm.cmd run build
git diff
git add .
git commit -m "Update portfolio"
git push
```

別のPCで編集する場合は `git clone https://github.com/Ito-Hideki-95/portfolio.git` で取得してください。複数のPCで作業する場合は、編集を始める前に `git pull --ff-only` で最新に揃えます。

## 掲載情報の範囲

- 開発経験11年は提供されたプロフィールに基づき、経験のタイムラインに掲載しています。
- 業務システムの開発経験は提供された概要を整理したものです。個別案件の成果数値は追加していません。
- 制作実績のURLとプラットフォーム分類は所有者が提示した情報に基づきます。紹介文は公開サイトの用途・内容を要約し、担当工程や成果数値は推測していません。
- クライアントの評価は、2026年11月3日に提供されたランサーズの評価原稿から4件を選び、コメント全文と評価日を掲載しています。ご自身の返信・報酬・顧客名は掲載していません。編集は `src/content.mjs` の `reviews` で行います。
- 評価に添えた画像は、ご指定のサイトの公開画面・公開画像です。Flash Reserveと美容室は文字・ボタンを含む実際のトップ画面を掲載しています。画像は拡大表示でき、各サイトへのリンクも掲載しています。取得元は [画像の出典](docs/image-sources.md) に記録しています。
- 添付原稿は「全20サービス」という表題ですが、受領した本文は13番の途中までです。01〜13の確認できた内容を掲載しています。
- 原稿中の料金・納期は出品設定案のため、サイトでは個別見積もりとしています。
- 外部フォント、解析タグ、Cookie、外部APIへの送信は使用していません。テーマと動きの設定のみブラウザーのlocalStorageに保存します。相談フォームの入力は保存しません。
- 英語ページの評価コメントは翻訳であることを明示し、日本語の原文も開いて確認できます。
- 技術ロゴはSimple Icons 16.0.0のSVGをローカル配信しています。[ライセンス](docs/licenses/simple-icons.md) と [表示・編集ガイド](docs/display-guide.md) を参照してください。

## 技術的な構成

`src/content.mjs` と `src/page.mjs` から `scripts/build.mjs` が静的HTMLを生成します。主要な本文とサービスはHTMLに含まれ、JavaScriptが無効でも閲覧できます。サイトマップは公開URLと `indexable: true` を設定した場合のみ生成されます。

Vercelでは Framework Preset が **Other**、Build Command が **npm run build**、Output Directory が **dist** です。`vercel.json` に設定済みです。データベースや環境変数は不要です。
