# 制作実績の公開サイト分析

確認日：2026年11月12日。対象は制作実績ギャラリーの70サイトです。**現在の公開情報を確認できたもの67件、保存画面などによる部分確認3件**を整理しました。

本書は、各サイトで閲覧できる機能・画面・導線と、公開ソースから判別できる技術を記録したものです。個人の担当範囲、制作時の構成、非公開の管理機能やAPI実装は、公開サイトだけでは確定できません。掲載機能を「本人がすべて実装した」と読み替えず、実装担当・設計担当・保守担当などの範囲は案件資料で確認します。

技術の根拠は次のように分けています。

- **公開確認**：HTML内の識別子、テーマ・ライブラリ資産、埋め込みコード、外部サービスへのリンクなどを確認。ライブラリの記載は、その読み込みを確認したことを示します。
- **本人申告**：所有者が提供した制作時の分類。現行サイトの技術と異なる場合も区別して記載しています。
- **部分確認**：公開先の休止・404・閲覧制限により、確認範囲を限定。動作中の機能として断定せず、画面の状態を明記しています。

予約・応募・購入のボタンや入力項目は公開状態で確認しました。注文確定、予約確定、問い合わせ送信、ログイン後の機能の検証は行っていません。外部予約サービスへのリンク・ウィジェットは、その案内や埋め込みとして扱います。

| 部分確認のサイト | 確認できた状態 |
| --- | --- |
| ORCASA | 対象LPは404。保存画像のファーストビュー、相談ボタン、電話案内を確認。 |
| らむ亭.com | 現行ページは一時閉店告知。旧ECの購入機能は未確認。 |
| Japan Trend Shop | 現行ページはHTTP 403。公開記録の保存画像で検索・分類・言語/通貨・カートの画面を確認。 |

各項目の主リンクは公開サイト、追加リンクは機能確認に使用した詳細ページまたは保存画像です。

## 01. ONE PILATES STUDIO

[one-pilates.jp](https://one-pilates.jp/)

- 地域・店舗別の施設案内
- プログラム・月額料金・体験案内
- hacomonoの体験・会員予約へ誘導

技術：公開確認 — WordPress / jQuery / hacomono（外部予約先）。

追加資料：[確認ページ](https://one-pilates.jp/studio/)。

## 02. ピアスグループ 新卒採用

[www.pias-recruit.jp](https://www.pias-recruit.jp/)

- 総合職・販売職・美容サービス職の案内
- 年度別エントリー・マイページへのリンク
- 募集開始・仕事体験などのニュース一覧

技術：公開確認 — jQuery。

## 03. tasumo

[tasumo.jp](https://tasumo.jp/)

- 商品画像・原材料・使い方の紹介
- 内容量・セット数の選択と定期便案内
- 商品検索・カート・マイページ導線

技術：公開確認 — Shopify。

追加資料：[確認ページ](https://tasumo.jp/products/kakeru-midori)。

## 04. 出前館 採用サイト

[recruit.demae-can.co.jp](https://recruit.demae-can.co.jp/)

- 事業・プロダクト・開発環境の紹介
- 社員インタビュー・福利厚生の掲載
- 新卒・キャリア別のHRMOS求人リンク

技術：公開確認 — Next.js。本人申告 — WordPress。

確認範囲：制作時のWordPressは本人申告。現在の公開ページにはNext.jsのアセットがあります。

## 05. PARTNERS

[partners-re.co.jp](https://partners-re.co.jp/)

- 不動産サービス別の詳細ページ
- 顧客インタビュー・ニュース掲載
- 相談フォーム・電話への導線

技術：公開確認 — WordPress / jQuery / GSAP。

## 06. アートバンライン

[www.artvanlines.co.jp](https://www.artvanlines.co.jp/)

- 輸送サービス・車両の用途別紹介
- 全国の物流拠点案内
- 業界別事例と法人問い合わせ導線

技術：公開確認 — HTML / CSS / JavaScript。

## 07. 博報堂テクノロジーズ 採用サイト

[recruit.hakuhodo-technologies.co.jp](https://recruit.hakuhodo-technologies.co.jp/)

- 技術領域・組織別の紹介と募集案内
- 働き方・研修・評価制度の情報
- タグ別の記事・社員インタビュー

技術：公開確認 — WordPress / jQuery。

## 08. プラスアール 採用サイト

[www.plusr.jp](https://www.plusr.jp/recruit/)

- 常勤・非常勤の働き方を分けて紹介
- 希望勤務形態を選べる応募フォーム
- 社員インタビューとLINE応募リンク

技術：公開確認 — WordPress / jQuery。

追加資料：[確認ページ](https://www.plusr.jp/recruit/entry/)。

## 09. オートテクニックジャパン 採用

[www.autotechnic.co.jp](https://www.autotechnic.co.jp/recruit/)

- 新卒・キャリア・再入社別の募集案内
- 開発・設計・CAE・IT職種の紹介
- 説明会・インターン情報と応募リンク

技術：公開確認 — WordPress / jQuery / Swiper。

## 10. HBA 採用サイト

[www.hba.co.jp](https://www.hba.co.jp/recruit/)

- 複数拠点の360度オフィスツアー
- 社員紹介・職種紹介・対談記事
- 新卒・キャリア別の応募導線

技術：公開確認 — WordPress / jQuery / Swiper / RICOH360（埋め込みツアー）。

追加資料：[確認ページ](https://www.hba.co.jp/recruit/virtual-office-tour/)。

## 11. ピアスグループ 美容職採用

[www.pias-recruit.jp](https://www.pias-recruit.jp/ats/)

- ブランド別・職種別の仕事紹介
- 社員インタビュー・採用ブログ
- 応募区分別の外部求人・LINE等への導線

技術：公開確認 — WordPress。

追加資料：[確認ページ](https://www.pias-recruit.jp/ats/entry/)。

## 12. オレンジライフ 採用サイト

[orange-life-recruit.jp](https://orange-life-recruit.jp/)

- 職種別インタビュー・経営陣対談
- 社員アンケート・一日の仕事紹介
- 募集要項・エントリーへの案内

技術：公開確認 — WordPress。

## 13. 日本ハウスコーティング協会

[j-h-c-a.com](https://j-h-c-a.com/)

- 加盟店一覧と協会活動の紹介
- 保証・技術情報・お知らせの更新
- 会員専用ページへの入口

技術：公開確認 — WordPress / jQuery / Swiper。

## 14. ABC幼稚園

[me-create.net](https://me-create.net/kindergarten/)

- 施設・教育方針・年間行事の紹介
- 入園案内・FAQ・問い合わせ導線
- 日付・分類付きのお知らせ一覧

技術：公開確認 — WordPress / SWELL / Swiper。

確認範囲：幼稚園サイトの紹介例として掲載されています。実在園の運営システムや入園受付の稼働までは確認していません。

## 15. 株式会社ワム

[wamu-gr.co.jp](https://wamu-gr.co.jp/)

- 用途別の製品一覧・詳細ページ
- 導入サロンの事例・関連記事
- 資料請求・無料デモへの導線

技術：公開確認 — HTML / CSS / JavaScript。

## 16. SYGNHOUSE

[sygnhouse.jp](https://sygnhouse.jp/)

- 製品シリーズ別の商品紹介・サイト内検索
- 販売店・専門スタッフ在籍店の案内
- 説明書・更新情報・修理相談への導線

技術：公開確認 — WordPress / jQuery。

## 17. ヴィーナススクール

[wamu-gr.co.jp](https://wamu-gr.co.jp/product/school/)

- 特徴・カリキュラム・キャリアパスの紹介
- コース・資格取得情報の掲載
- 氏名・年齢・連絡先の申し込みフォーム

技術：公開確認 — jQuery。

## 18. Spice

[spice-vliver.com](https://spice-vliver.com/)

- 所属ライバー一覧・個別プロフィール
- 日付付きニュース・イベント案内
- オーディション・問い合わせへの導線

技術：公開確認 — STUDIO。

## 19. Orcasa リフォーム・リノベーション

[orcasa.jp](https://orcasa.jp/lp2504) — **部分確認**

- 室内写真を大きく見せるファーストビュー
- 無料デザイン相談へのボタン
- 電話番号・受付時間の表示

技術：公開技術の特定なし。

追加資料：[保存画面](../public/images/projects/orcasa.webp)。

確認範囲：対象LPは現在404。記載した画面要素は保存画像で確認した範囲です。現在の404ページの基盤を旧LPの技術に転用していません。

## 20. オリバー Place2.5

[www.oliverinc.co.jp](https://www.oliverinc.co.jp/lp/place2-5/)

- 課題・解決策を組み合わせた事例紹介
- オフィス見学・無料相談の申し込み導線
- 資料ダウンロードの専用ページ

技術：公開確認 — WordPress / jQuery。

## 21. タツエイ

[tatsuei-katawaku.com](https://tatsuei-katawaku.com/)

- 施工実績の一覧・詳細記事
- 新着情報・型枠工事の解説記事
- 現場Instagram投稿・求人・相談導線

技術：公開確認 — WordPress / SWELL / jQuery。

## 22. 株式会社 光陽

[kouyo-omuta.com](https://kouyo-omuta.com/)

- 土木・建築別のサービス詳細
- 工事分類付きの施工事例・写真
- 採用情報・会社案内・問い合わせ導線

技術：公開確認 — WordPress / SWELL / Swiper。

## 23. オートワンダー

[carche.site](https://carche.site/)

- 車種別の査定事例・売却手順の紹介
- LINE相談入口・電話リンク
- 氏名・電話番号・地域の問い合わせフォーム

技術：公開確認 — HTML / CSS / JavaScript。

確認範囲：LINE相談ボタンは同一ドメインの /line-login.php を指します。認証処理やLINE APIの実装は確認していないため、LINEの技術バッジは採用しません。

## 24. おりしゃんえーす

[orisyanace-order.com](https://orisyanace-order.com/)

- ボトル・テンプレート・装飾オプション選択
- 地域別のお届け希望日・時間帯選択
- 注文内容の確認・コピーとLINE送信案内

技術：公開確認 — WordPress / jQuery / Swiper。本人申告 — LINE。

確認範囲：LINEへの注文文の確認・コピーと送信案内を確認。APIによる自動送信は確認していません。

## 25. The Golf House

[thegolfhouse.net](https://thegolfhouse.net/)

- 店舗・料金プラン・講師の紹介
- 日本語・英語・中国語ページへの切替
- 体験LINE窓口・会員予約サイトへのリンク

技術：公開確認 — WordPress / SWELL / jQuery。本人申告 — ペライチ。

確認範囲：ペライチは本人申告の制作時分類。現在はWordPress・SWELLの公開資産を確認しています。

## 26. LoungeRange

[lounge-range.com](https://lounge-range.com/)

- 都道府県・市区別の店舗一覧
- 店舗詳細・新規開業ニュース
- 加盟・取材・イベント等の相談導線

技術：公開確認 — WordPress / jQuery。本人申告 — ペライチ。

追加資料：[確認ページ](https://lounge-range.com/courses/)。

確認範囲：ペライチは本人申告の制作時分類。現在はWordPressの公開資産を確認しています。

## 27. Loun9ine

[www.loun9ine.jp](https://www.loun9ine.jp/)

- 店舗・設備紹介と動画埋め込み
- 料金プラン・講師・レッスン紹介
- 体験の手順とhacomono予約リンク

技術：公開確認 — jQuery / hacomono（外部予約先）。本人申告 — ペライチ。

確認範囲：ペライチは本人申告。hacomonoは外部予約リンク先として確認しています。

## 28. SAUCONY

[saucony.jp](https://saucony.jp/)

- 性別・用途・モデル別の商品カテゴリ
- レビュー・お気に入り・会員ページ
- 新着・セール商品と購入導線

技術：公開確認 — Shopify / jQuery。

## 29. ohora

[ohora.co.jp](https://ohora.co.jp/)

- ネイルの種類・長さ・用途別カテゴリ
- 商品レビュー・お気に入り・カート
- 初心者向けセット・使い方ガイド

技術：公開確認 — Shopify / jQuery / Swiper。

## 30. Brighte

[brighte.jp](https://brighte.jp/)

- 美容家電・ケア用品の製品詳細と価格
- カート・会員ログインの導線
- 取扱店舗・FAQ・ニュース案内

技術：公開確認 — Swiper / microCMS SDK。本人申告 — Shopify。

確認範囲：Shopifyは本人申告。現在の公開ページで確認したのはmicroCMS SDKとSwiperの読み込みで、現行EC基盤は断定していません。

## 31. CAROME.

[carome.jp](https://carome.jp/)

- 商品レビュー・価格・売り切れ表示
- 商品詳細・カート・会員ログイン
- 定期購入サービスへの専用導線

技術：公開確認 — Shopify / jQuery。

## 32. nemuli

[nemuli.co.jp](https://nemuli.co.jp/)

- 体型・寝姿勢に関するマットレス診断
- マットレス・枕などの商品カテゴリ
- 製品構造の図解・睡眠コラム・FAQ

技術：公開確認 — Shopify / GSAP / Swiper。

追加資料：[確認ページ](https://nemuli.co.jp/pages/diagnose)。

## 33. NUSET

[nuset.jp](https://nuset.jp/)

- 製品別の成分・容量・価格案内
- 商品詳細・カート・マイページ
- ブランド解説・購入ガイド・FAQ

技術：公開確認 — Shopify。

## 34. Anker Japan

[www.ankerjapan.com](https://www.ankerjapan.com/)

- 製品名・用途検索とカテゴリナビ
- レビュー・価格・新製品／セール表示
- 会員サービス・直営店・法人向け導線

技術：公開確認 — Shopify。

## 35. MOFT Japan

[www.moftjapan.com](https://www.moftjapan.com/)

- 対応機種・用途別の商品とセット案内
- 商品レビュー・価格・商品詳細
- 予約販売・限定セットの専用導線

技術：公開確認 — Shopify / jQuery / Swiper。

## 36. La protein

[laprotein.jp](https://laprotein.jp/)

- 味・容量別の商品一覧と詳細画像
- 数量選択・カート追加と定期購入の案内
- 商品レビューと配送・購入条件のFAQ

技術：公開確認 — Shopify。

追加資料：[確認ページ](https://laprotein.jp/products/macha-oi)。

## 37. Misshelly

[misshelly.com](https://misshelly.com/)

- 単品・セット・詰め替え商品の比較導線
- 商品画像の拡大と使用方法・成分表示
- レビュー・数量選択・カート追加

技術：公開確認 — Shopify。

追加資料：[確認ページ](https://misshelly.com/products/moist-shampoo)。

## 38. REVEL

[revel.jp](https://revel.jp/)

- 財布・キーケースなど用途別カテゴリー
- ラッピング・ロゴデザインの選択
- お気に入り保存と画像付き商品レビュー

技術：公開確認 — Shopify。

追加資料：[確認ページ](https://revel.jp/products/mini2-italy-scratch-ash-gray)。

## 39. MITSUBOSHI 1887

[www.mitsuboshi1887.com](https://www.mitsuboshi1887.com/)

- 衣類・ストールの細分化された商品分類
- 自宅試着サービスの案内ページ
- 素材コラム・利用者紹介から商品への導線

技術：公開確認 — Shopify。

追加資料：[確認ページ](https://www.mitsuboshi1887.com/blogs/power-of-wool/trial-fitting)。

## 40. らむ亭.com

[ramutei.com](https://ramutei.com/) — **部分確認**

- 一時閉店のお知らせと営業状況の表示
- ロゴと雲のCSSアニメーション
- 関連サイトへのリンク

技術：公開確認 — CSS Animations。本人申告 — Shopify。

確認範囲：2026年2月25日付の一時閉店告知を確認。保存画像も告知ページです。Shopifyは本人申告の過去分類であり、旧ECの購入機能は現在の公開情報から確認できません。

## 41. Runtrip Store

[store.runtrip.jp](https://store.runtrip.jp/)

- キーワード検索とブランド別の商品一覧
- レース・季節・用途別の特集コレクション
- 商品紹介とランニングマガジンへの導線

技術：公開確認 — Shopify。

## 42. BROOKLYN MUSEUM

[brooklyn.co.jp](https://brooklyn.co.jp/)

- カテゴリー・カラー・革素材からの商品探索
- 男女別ランキングとカラーバリエーション
- オーダー案内と店舗一覧への導線

技術：公開確認 — Shopify。

## 43. FUMIKODA

[fumikoda.jp](https://fumikoda.jp/)

- 日本語・英語・中国語と通貨の切り替え
- 用途・素材別のバッグコレクション
- お試し購入と直営店・催事の案内

技術：公開確認 — Shopify。

## 44. ACTUS online

[online.actus-interior.com](https://online.actus-interior.com/)

- カテゴリー・ブランド・キーワードの商品検索
- お気に入り・閲覧履歴・スタッフスタイリング
- 用途別ギフトとeギフトの案内

技術：公開確認 — jQuery。

## 45. FASHION WALKER

[fashionwalker.com](https://fashionwalker.com/)

- 商品名・カテゴリー・ブランドでの商品探索
- 集計期間・カテゴリーを指定できるランキング
- 商品のお気に入りとマイブランドの導線

技術：公開確認 — jQuery / Slick。

## 46. MAGASEEK

[www.magaseek.com](https://www.magaseek.com/)

- 予約商品・クーポン対象・セール別の商品導線
- マイブランドと閲覧履歴の表示導線
- 期間や分類を切り替える商品ランキング

技術：公開確認 — jQuery / Slick。

## 47. 不二家 ファミリータウン

[www.family-town.jp](https://www.family-town.jp/)

- グッズ・菓子・冷凍スイーツの商品分類
- 新商品と売れ筋ランキングの表示
- 会員ページ・買い物かご・配送案内

技術：公開確認 — MakeShop。

## 48. vivum・S’allier

[vivum-sallier.com](https://vivum-sallier.com/)

- ヘア・スパのメニューと担当者紹介
- Squareの外部予約ページへの導線
- ケア商品の一覧・カートとジャーナル

技術：公開確認 — カラーミーショップ。

追加資料：[確認ページ](https://book.squareup.com/appointments/ptdjn1y7twc8gp/location/LJB3A8YC4635J/services)。

確認範囲：EUC-JPの公開HTMLを復号して確認。Square Appointmentsは外部予約ページへのリンクです。

## 49. 立花書房

[tachibanashobo.co.jp](https://tachibanashobo.co.jp/)

- 法分野・書籍形式別のカタログと検索
- 新刊・ランキング・定期購読への導線
- 文字サイズ変更と冊数・金額のカート表示

技術：公開確認 — EC-CUBE。

## 50. 瀬戸口精肉店

[setoguchiseinikuten.co.jp](https://setoguchiseinikuten.co.jp/)

- 料理用途・部位・重量別の商品分類
- 包装・熨斗・名入れ・紙袋の指定
- 複数配送先設定と冷凍配送の案内

技術：公開確認 — EC-CUBE。

追加資料：[確認ページ](https://setoguchiseinikuten.co.jp/products/detail/9)。

## 51. KOREDAKE

[koredake.co.jp](https://koredake.co.jp/)

- 大袋パウダー・個包装タイプの商品導線
- 栄養成分の図表と原材料の詳細表示
- FAQ・会員ログイン・問い合わせへの導線

技術：公開技術の特定なし。本人申告 — ecforce。

追加資料：[確認ページ](https://koredake.co.jp/shop/products)。

確認範囲：ecforceは本人申告。現行HTMLで基盤名を直接特定できる識別子は確認できませんでした。

## 52. Upt

[uptofficial.jp](https://uptofficial.jp/)

- キーワード・カテゴリーによる商品絞り込み
- 単品・セット・定期コースの区分表示
- 会員ページ・カート・取扱店舗の案内

技術：公開確認 — ecforce。

## 53. Kutoon

[kutoon.net](https://kutoon.net/shop/)

- メーカー・サイズから中敷き寸法を案内
- サイズ・色・状態・ブランドの複合絞り込み
- レンタル可能・貸出中の表示とカート導線

技術：公開確認 — WordPress / WooCommerce。

## 54. Japan Trend Shop

[www.japantrendshop.com](https://www.japantrendshop.com/) — **部分確認**

- 記録画面：商品検索とカテゴリー分類
- 記録画面：言語・通貨セレクター
- 記録画面：価格表示とカート追加ボタン

技術：公開技術の特定なし。

追加資料：[確認ページ](https://urlscan.io/result/01a032ae-748b-778b-af89-605875ab387a/)。

確認範囲：現行サイトはHTTP 403。既存の公開記録画像を目視確認しました。記録の撮影日は不明です。Globalは市場分類のため技術名として採用しません。

## 55. カージュラジャ ザ ビューティスパ

[www.carjurajah.jp](https://www.carjurajah.jp/)

- 施術メニューと料金一覧の分離表示
- 地域別店舗一覧と店舗別キャンペーン
- 初回利用ガイドとテーマ別コラム

技術：公開確認 — WordPress。

## 56. キレイサローネ

[kireisalone.jp](https://kireisalone.jp/)

- 体験・無料カウンセリングへの申込導線
- 店舗・希望日時を指定する問い合わせ案内
- 複数店舗のGoogleマップと連絡先

技術：公開確認 — jQuery / Swiper。

## 57. STUDIO BREATH

[studiobreath.com](https://studiobreath.com/)

- レッスン種別に応じた外部予約への振り分け
- 料金プランとインストラクター一覧
- Instagram投稿とスタジオブログの掲載

技術：公開確認 — WordPress / SWELL。

## 58. BLACK CAT

[blackcat-pilates.com](https://blackcat-pilates.com/)

- 店舗別の外部体験予約ページへの導線
- 料金プラン・初回利用ガイド・FAQ
- ピラティスのテーマ別ブログとお知らせ

技術：公開確認 — WordPress / SWELL。

## 59. 大美会クリニック

[osaka-bc.com](https://osaka-bc.com/)

- 施術・悩み別の診療メニューナビゲーション
- 院別のアクセス・診療案内
- 外部Web予約と問い合わせへの導線

技術：公開確認 — WordPress。

## 60. 東京転生クリニック

[t-t-c.net](https://t-t-c.net/)

- 部位・施術カテゴリー別のメニュー
- 症例写真の詳細表示と医師プロフィール
- 料金表・キャンペーン・相談導線

技術：公開確認 — WordPress。

## 61. ALOOP CLINIC & LAB

[aloop.clinic](https://aloop.clinic/)

- 肌の悩みタグによる施術の分類
- 施術別のプラン・料金を開く詳細表示
- 施術から外部予約ページへの導線

技術：公開確認 — WordPress。

## 62. 日高歯科医院 マウスピース矯正

[www.hidaka-dental-clinic.com](https://www.hidaka-dental-clinic.com/lp/suresmile/)

- 症例の詳細・費用・リスク情報の展開表示
- 矯正方法の比較と治療ステップの説明
- 初診Web予約と無料相談への導線

技術：公開確認 — jQuery。

## 63. 高屋歯科医院 インプラント

[takayadentalsonobe.com](https://takayadentalsonobe.com/lp/implant/)

- 悩み別の質問から該当説明へ移動
- 治療選択肢・工程・費用の整理
- 外部Web予約・電話・地図への導線

技術：公開確認 — jQuery。

## 64. 清水歯科藤沢院 矯正治療

[www.fujisawa-kyouseishika.com](https://www.fujisawa-kyouseishika.com/invisalign/)

- 特長・費用・症例へ移動するページ内ナビ
- 症例写真・治療手順・料金の説明
- 矯正相談と医院アクセスへの導線

技術：公開確認 — WordPress。

## 65. SHElikes

[shelikes.jp](https://shelikes.jp/landing_pages/jp_a/)

- 職種別のコース紹介と学習サポート案内
- 料金プラン・他社比較・FAQの整理
- ページ各所から無料体験へ進むCTA

技術：公開確認 — STUDIO / Nuxt。

確認範囲：通常のHTML抽出では本文を取得できなかったため、隔離ブラウザーの描画後DOMを確認。STUDIOのgenerator情報とNuxt資産は公開ソースで確認しました。

## 66. BLUE SQUARE

[bluesquare-echizen.com](https://bluesquare-echizen.com/)

- 三つのヴィラの写真・設備・備品比較
- 外部予約サービスの宿泊検索ウィジェット
- 周辺の過ごし方・アクセス・FAQ

技術：公開確認 — WordPress / Swiper。

## 67. YOURROOM

[yroom.jp](https://yroom.jp/)

- 施設・利用シーン・大人／子ども人数で客室検索
- 価格順・施設順の並べ替えと客室詳細
- Beds24の施設別予約ページへのリンク

技術：公開確認 — WordPress。

追加資料：[確認ページ](https://yroom.jp/yourroom/)。

## 68. 山人 -oga-

[oga.yamado.co.jp](https://oga.yamado.co.jp/)

- 自然・料理・客室・温泉のテーマ別紹介
- Tripla予約ウィジェットへの導線
- 館内案内・地図・FAQと問い合わせ

技術：公開確認 — jQuery / Tripla（予約ウィジェット）。

## 69. 十八楼 離れ 宿いとう

[yadoito.18rou.com](https://yadoito.18rou.com/)

- 宿の歴史を伝えるイラストと写真の構成
- 客室・食事・アクセス・FAQの案内
- 外部予約サービスへの空室検索リンク

技術：公開確認 — WordPress / GSAP。

## 70. 東急ハーヴェストクラブ

[www.harvestclub.com](https://www.harvestclub.com/)

- 全国の施設一覧と写真ギャラリー
- 会員権・入会手続き・施設利用の案内
- 空室照会・オンライン予約・会員ページへの入口

技術：公開確認 — jQuery / Modaal / simpleParallax。

## 更新時の確認事項

公開先はリニューアル・休止されることがあります。各案件の担当範囲を追加する際は、契約・納品・保守記録を確認し、公開サイトで観察した機能と分けて記載します。技術を変更する際は、本人申告の制作時技術を上書きせず、現在の公開ページで確認した技術との違いを残します。


## トップページの追加2サイト

ギャラリー70件に加え、以下の注目事例も公開情報を確認しました。vivum・S’allierはギャラリー内の記録と共通です。

### flash-reserve

飲食店予約サイトの空席を検知し、LINE・メールで知らせる通知サービス。LINEログイン、通知対象店舗・料金プランの案内を備えています。

- 予約サイトの空席情報をLINE・メールで通知
- LINEログインと通知プランの案内
- 通知対象店舗・決済登録への導線

公開確認：LINE。

[確認元](https://flash-reserve.com/ja/)。サイトの公開機能と、本人の保守・運用担当範囲は区別。フレームワークや決済基盤は非公開。

### visual-anatomy

解剖学コンテンツを会員向けに公開するWordPressサイト。ログイン、会員登録・更新案内、キーワード検索を備えています。

- 会員ログインとコンテンツの閲覧制限
- 会員登録・有効期間の更新案内
- キーワード検索・問い合わせへの導線

公開確認：WordPress、Simple Membership、Contact Form 7。

[確認元](https://visual-anatomy-wp.com/)。本人の担当範囲は静的HTMLデータのWordPress移植。すべての既存プラグインの実装担当であるとは断定しない。
