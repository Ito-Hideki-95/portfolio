# Development Partner — ポートフォリオ

業務システム・AI・Web／アプリ開発者のポートフォリオサイトです。ソースコードはこのフォルダ内にあります。

ソースの保存先は [Ito-Hideki-95/portfolio](https://github.com/Ito-Hideki-95/portfolio)、メインブランチは `main` です。`D:\portfolio` の `origin` にこのリポジトリを設定しています。

公開URL：**https://negitoro-95-portfolio.vercel.app**

Vercelの `ito-hideki-95-portfolio` プロジェクトにGitHubを連携済みです。`main` にpushすると、本番サイトが自動デプロイされます。

Node.js の標準機能でHTMLを生成する静的サイトです。外部パッケージのインストールは不要です。Vercelで配信するファイルは `dist/` に生成されます。

## すぐに確認する

Node.js 22以上を用意し、このフォルダで実行します。Windows PowerShellで `npm` の実行ポリシーエラーが出る場合は `npm.cmd` を使ってください。

```powershell
cd D:\portfolio
npm.cmd run dev
```

ブラウザで <http://localhost:3000> を開きます。`src/` または `public/` のファイルを保存すると、再ビルドしてブラウザを自動更新します。停止は `Ctrl+C` です。

```powershell
npm.cmd run check
npm.cmd run build
npm.cmd run preview
```

`check` はJavaScriptの構文確認、`build` は本番用ファイル生成、`preview` は生成したサイトのローカル確認です。プレビューは保存時の自動更新を行いません。

## 編集する場所

| 変更内容 | ファイル |
| --- | --- |
| 公開名、問い合わせ先、公開URL、開発経験、クライアントの評価、サービス、技術、FAQ | `src/content.mjs` |
| ページ構成、メインコピー、仕事の進め方 | `src/page.mjs` |
| 色、余白、フォント、スマートフォン表示 | `public/styles.css` |
| 絞り込み、メニュー、相談文の生成 | `public/app.js` |
| 掲載許可を得た実績画像 | `public/images/` に追加 |
| Vercelのビルド設定 | `vercel.json` |

`dist/` は毎回作り直す生成物です。直接編集せず、GitHubにはソースをアップロードします。

## 初回公開の前に

`src/content.mjs` の冒頭を設定してください。

```js
export const site = {
  brandName: 'ご自身の屋号',
  ownerName: '公開するお名前・屋号',
  contactUrl: 'https://www.lancers.jp/profile/ご自身のID',
  contactLabel: 'ランサーズで相談する',
  siteUrl: 'https://ご自身のプロジェクト.vercel.app',
  indexable: false,
  // その他の項目は維持
};
```

現時点のお名前は仮のブランド表記です。お問い合わせ先が空欄の間は外部への相談ボタンを表示しません。相談文をコピーする機能は利用できますが、メール送信・フォーム送信は実装していません。

原稿を確認し、氏名・連絡先・公開URLを設定した後に `indexable: true` にします。これにより検索エンジン向けの `robots` とサイトマップを切り替えます。`noindex` は閲覧制限ではないため、公開URLを知っている人は閲覧できます。

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

- 開発経験11年は提供されたプロフィールに基づき、「私について」の文章に掲載しています。
- 開発経験は提供された概要を整理したものです。個別案件の成果数値・顧客名は追加していません。
- クライアントの評価は、2026年11月3日に提供されたランサーズの評価原稿から4件を選び、コメント全文と評価日を掲載しています。ご自身の返信・報酬・顧客名は掲載していません。編集は `src/content.mjs` の `reviews` で行います。
- 評価に添えた画像は、ご指定のサイトの公開画像です。画像は拡大表示でき、各サイトへのリンクも掲載しています。取得元は [画像の出典](docs/image-sources.md) に記録しています。
- 3種類の図は説明用の構成イメージです。納品画面のスクリーンショットではありません。
- 添付原稿は「全20サービス」という表題ですが、受領した本文は13番の途中までです。01〜13の確認できた内容を掲載しています。
- 原稿中の料金・納期は出品設定案のため、サイトでは個別見積もりとしています。
- 外部フォント、解析タグ、Cookie、外部APIへの送信は使用していません。

## 技術的な構成

`src/content.mjs` と `src/page.mjs` から `scripts/build.mjs` が静的HTMLを生成します。主要な本文とサービスはHTMLに含まれ、JavaScriptが無効でも閲覧できます。サイトマップは公開URLと `indexable: true` を設定した場合のみ生成されます。

Vercelでは Framework Preset が **Other**、Build Command が **npm run build**、Output Directory が **dist** です。`vercel.json` に設定済みです。データベースや環境変数は不要です。
