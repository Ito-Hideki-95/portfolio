# お客様の声に掲載する画像

2026年11月4日に指定された4つのURLを確認し、以下の公開画像を選定しました。画像ファイルは内容を加工せず `public/images/reviews/` に保存しています。カードのサムネイルから元の大きさで開けます。

| 掲載案件 | ローカルファイル | 公開ページ | 画像の取得元・内容 |
| --- | --- | --- | --- |
| Flash Reserve－瞬間－ Webサービス保守・運用 | `flash-reserve.png` | [Flash Reserve](https://flash-reserve.com/) | [メインビジュアル](https://flash-reserve.com/hero.png)。木のカウンターが並ぶレストランの写真。 |
| 美容室の予約サイト兼ECサイト構築 | `vivum-sallier.png` | [vivum・S’allier](https://vivum-sallier.com/) | [店内写真](https://img21.shop-pro.jp/PA01521/563/etc_base64/dG9wX2Fib3V0XzE.png?cmsp_timestamp=20260523155446)。トップページに掲載された店内の写真。 |
| HTMLサイトのWordPress移行 | `visual-anatomy.jpg` | [Visual Anatomy 会員登録のご案内](https://visual-anatomy-wp.com/membership/) | [公開サンプル](https://visual-anatomy-wp.com/wp-content/themes/Visual-anatomy/img/membership-example-20261008-small.jpg)。会員案内で公開された解剖学イラストの見本。 |
| Pythonによるデータ自動取得 | `data-collection.jpg` | [ランサーズのデータ収集サービス](https://www.lancers.jp/menu/detail/1351229) | [サービス紹介画像](https://img2.lancers.jp/projectblob/929859/3498515/69222924f4481f11d6383e940a11e591de5f8689232cde23949b729be72605d2/39504269_1000_0.png)。収集・整形・CSV出力のサービス紹介。応答はJPEGのため、ローカルでは `.jpg` で保存。 |

Visual Anatomyの会員限定ページにはアクセスしていません。公開された会員案内のサンプルを使っています。Python案件の画像は当該納品物の画面ではなく、指定されたサービスページの紹介画像として表記しています。

案件名は2026年11月4日の指定を優先しています。Flash Reserve公式サイト上の名称は「瞬約」ですが、このポートフォリオの案件名は指定どおり「瞬間」としています。

差し替えは `src/content.mjs` の各 `reviews` にある `image`・`imageAlt`・`imageCaption`・`imageWidth`・`imageHeight` を更新してください。図解画像の `imageFit: 'contain'` は、文字や図を切り取らず全体を表示する指定です。
