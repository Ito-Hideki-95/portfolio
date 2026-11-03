# お客様の声に掲載する画像

2026年11月4日に指定された4つのURLを確認し、以下の公開画面・公開画像を選定しました。画像ファイルは `public/images/reviews/` に保存しています。カードのサムネイルから元の大きさで開けます。

| 掲載案件 | ローカルファイル | 公開ページ | 画像の取得元・内容 |
| --- | --- | --- | --- |
| Flash Reserve－瞬間－ Webサービス保守・運用 | `flash-reserve-screen.webp` | [Flash Reserve 日本語トップ](https://flash-reserve.com/ja/) | 実際のトップ画面。レストランの写真、ロゴ、見出し、ナビゲーション、会員登録・ログインボタンを含む。 |
| 美容室の予約サイト兼ECサイト構築 | `vivum-sallier-screen.webp` | [vivum・S’allier](https://vivum-sallier.com/) | 実際のトップ画面。ロゴ、メニュー、予約・オンラインストアボタン、メインの店内写真、サロン紹介を含む。 |
| HTMLサイトのWordPress移行 | `visual-anatomy.jpg` | [Visual Anatomy 会員登録のご案内](https://visual-anatomy-wp.com/membership/) | [公開サンプル](https://visual-anatomy-wp.com/wp-content/themes/Visual-anatomy/img/membership-example-20261008-small.jpg)。会員案内で公開された解剖学イラストの見本。 |
| Pythonによるデータ自動取得 | `data-collection.jpg` | [ランサーズのデータ収集サービス](https://www.lancers.jp/menu/detail/1351229) | [サービス紹介画像](https://img2.lancers.jp/projectblob/929859/3498515/69222924f4481f11d6383e940a11e591de5f8689232cde23949b729be72605d2/39504269_1000_0.png)。収集・整形・CSV出力のサービス紹介。応答はJPEGのため、ローカルでは `.jpg` で保存。 |

Flash Reserveと美容室の画面は、2026年11月4日にChromeで撮影しました。表示領域は1440×900 CSS px、端末倍率は1.5で、保存画像は2160×1350 pxのWebPです。公開ページのレイアウト・文字・ボタン・写真をそのまま撮影し、後から文字やボタンを合成していません。Flash Reserveは日本語版を使用しています。

当初選定した写真も保存しています。`flash-reserve.png` は [レストランのメインビジュアル](https://flash-reserve.com/hero.png)、`vivum-sallier.png` は [店内写真](https://img21.shop-pro.jp/PA01521/563/etc_base64/dG9wX2Fib3V0XzE.png?cmsp_timestamp=20260523155446) です。前者は撮影画面の背景、後者は美容室の紹介部分に掲載されています。

Visual Anatomyの会員限定ページにはアクセスしていません。公開された会員案内のサンプルを使っています。Python案件の画像は当該納品物の画面ではなく、指定されたサービスページの紹介画像として表記しています。

案件名は2026年11月4日の指定を優先しています。Flash Reserve公式サイト上の名称は「瞬約」ですが、このポートフォリオの案件名は指定どおり「瞬間」としています。

差し替えは `src/content.mjs` の各 `reviews` にある `image`・`imageAlt`・`imageCaption`・`imageWidth`・`imageHeight` を更新してください。`imageFit: 'contain'` は、文字・ボタン・図を切り取らず全体を表示する指定です。
