// Public website observations; owner-supplied technology is identified separately.
// Personal contributions are recorded in featured.mjs and the client feedback.
export const projectInsights = {
  "one-pilates": {
    "id": "one-pilates",
    "summary": {
      "ja": "女性向けピラティススタジオの案内サイト。地域別の店舗案内、プログラム・料金の比較から、hacomonoの体験予約・会員予約ページへ案内します。",
      "en": "A Pilates studio website that connects regional studio information, exercise programs and pricing with trial and member booking links. Visitors can compare available facilities and follow a clear route to the external reservation service."
    },
    "features": [
      {
        "ja": "地域・店舗別の施設案内",
        "en": "Regional studio and facility directory"
      },
      {
        "ja": "プログラム・月額料金・体験案内",
        "en": "Programs, membership fees and trial information"
      },
      {
        "ja": "hacomonoの体験・会員予約へ誘導",
        "en": "Links to hacomono trial and member booking"
      }
    ],
    "technologies": [
      {
        "name": "WordPress",
        "basis": "public",
        "evidence": "https://one-pilates.jp/ の公開HTMLで wp-content を確認。テーマ／CMSアセットとして確認。"
      },
      {
        "name": "jQuery",
        "basis": "public",
        "evidence": "https://one-pilates.jp/ の公開HTMLで jquery- を確認。配信アセットの名称として確認。"
      },
      {
        "name": "hacomono",
        "basis": "public",
        "evidence": "公式サイトの予約リンク先は mythel.hacomono.jp。外部予約先として確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://one-pilates.jp/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      },
      {
        "url": "https://one-pilates.jp/studio/",
        "note": "公開された機能の詳細・入力項目・外部サービスへのリンクを追加確認。"
      }
    ],
    "limitations": "公開ページから確認した表示・機能・導線です。個人の担当範囲、非公開の管理機能、API・決済処理の内部実装は公開情報だけでは確定できません。"
  },
  "pias-recruit": {
    "id": "pias-recruit",
    "summary": {
      "ja": "総合職・販売職・美容サービス職の採用情報を整理する入口サイト。応募対象ごとの案内、年度別マイページへのリンク、採用ニュースをまとめています。",
      "en": "A recruitment gateway for corporate, sales and beauty service roles. It organizes different applicant routes, links graduates to year-specific application portals, and publishes recruitment announcements so candidates can find the relevant next step."
    },
    "features": [
      {
        "ja": "総合職・販売職・美容サービス職の案内",
        "en": "Separate corporate, retail and beauty career routes"
      },
      {
        "ja": "年度別エントリー・マイページへのリンク",
        "en": "Year-specific application and applicant portal links"
      },
      {
        "ja": "募集開始・仕事体験などのニュース一覧",
        "en": "Recruitment and internship announcement feed"
      }
    ],
    "technologies": [
      {
        "name": "jQuery",
        "basis": "public",
        "evidence": "https://www.pias-recruit.jp/ の公開HTMLで jquery. を確認。配信アセットの名称として確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://www.pias-recruit.jp/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      }
    ],
    "limitations": "公開ページから確認した表示・機能・導線です。個人の担当範囲、非公開の管理機能、API・決済処理の内部実装は公開情報だけでは確定できません。"
  },
  "tasumo": {
    "id": "tasumo",
    "summary": {
      "ja": "クロレラ食品のブランド紹介と通販をまとめたShopifyストア。商品写真・原材料の説明、内容量の選択、定期便の案内、カートへの追加を備えています。",
      "en": "A Shopify food store combining the chlorella brand story with practical product selection. Product pages explain ingredients, present package-size choices and subscription information, and provide an add-to-cart route with customer account access."
    },
    "features": [
      {
        "ja": "商品画像・原材料・使い方の紹介",
        "en": "Product galleries, ingredients and usage information"
      },
      {
        "ja": "内容量・セット数の選択と定期便案内",
        "en": "Package-size choices and subscription information"
      },
      {
        "ja": "商品検索・カート・マイページ導線",
        "en": "Product search, cart and customer account routes"
      }
    ],
    "technologies": [
      {
        "name": "Shopify",
        "basis": "public",
        "evidence": "https://tasumo.jp/ の公開HTMLで Shopify.shop を確認。ストアフロントのShopify識別子を確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://tasumo.jp/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      },
      {
        "url": "https://tasumo.jp/products/kakeru-midori",
        "note": "公開された機能の詳細・入力項目・外部サービスへのリンクを追加確認。"
      }
    ],
    "limitations": "公開ページから確認した表示・機能・導線です。個人の担当範囲、非公開の管理機能、API・決済処理の内部実装は公開情報だけでは確定できません。"
  },
  "demaecan-recruit": {
    "id": "demaecan-recruit",
    "summary": {
      "ja": "出前館の事業・プロダクトと働く環境を伝える採用サイト。社員インタビューや福利厚生を紹介し、キャリア採用と新卒採用それぞれのHRMOS求人へ案内します。",
      "en": "A careers website explaining Demae-can’s products, business and working environment. Employee interviews and benefits information help candidates explore the company, while separate graduate and experienced-hire links lead to the relevant HRMOS recruitment pages."
    },
    "features": [
      {
        "ja": "事業・プロダクト・開発環境の紹介",
        "en": "Business, product and development environment pages"
      },
      {
        "ja": "社員インタビュー・福利厚生の掲載",
        "en": "Employee interviews and benefits information"
      },
      {
        "ja": "新卒・キャリア別のHRMOS求人リンク",
        "en": "Separate graduate and career links to HRMOS"
      }
    ],
    "technologies": [
      {
        "name": "WordPress",
        "basis": "owner",
        "evidence": "ポートフォリオ所有者が提供した制作実績分類／既存src/projects.mjsのplatform。現行サイトの内部実装を意味しない。"
      },
      {
        "name": "Next.js",
        "basis": "public",
        "evidence": "https://recruit.demae-can.co.jp/ の公開HTMLで /_next/ を確認。配信アセットの名称として確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://recruit.demae-can.co.jp/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      }
    ],
    "limitations": "申告された制作時の技術はWordPress。現在の公開ページはNext.jsのアセットを配信しており、制作当時と同一の構成とは断定できません。"
  },
  "partners": {
    "id": "partners",
    "summary": {
      "ja": "不動産売買・賃貸管理・資産運用サービスを案内する企業サイト。サービス別の詳細ページ、顧客インタビュー、ニュースから、問い合わせフォームへつなぎます。",
      "en": "A property services website that separates sales, purchases, property management and other business areas. Dedicated service pages, customer stories and corporate news give prospective customers context before directing them to the inquiry form."
    },
    "features": [
      {
        "ja": "不動産サービス別の詳細ページ",
        "en": "Dedicated pages for each property service"
      },
      {
        "ja": "顧客インタビュー・ニュース掲載",
        "en": "Customer interviews and corporate news"
      },
      {
        "ja": "相談フォーム・電話への導線",
        "en": "Inquiry form and telephone contact routes"
      }
    ],
    "technologies": [
      {
        "name": "WordPress",
        "basis": "public",
        "evidence": "https://partners-re.co.jp/ の公開HTMLで wp-content を確認。テーマ／CMSアセットとして確認。"
      },
      {
        "name": "jQuery",
        "basis": "public",
        "evidence": "https://partners-re.co.jp/ の公開HTMLで jquery- を確認。配信アセットの名称として確認。"
      },
      {
        "name": "GSAP",
        "basis": "public",
        "evidence": "https://partners-re.co.jp/ の公開HTMLで gsap. を確認。配信アセットの名称として確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://partners-re.co.jp/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      }
    ],
    "limitations": "公開ページから確認した表示・機能・導線です。個人の担当範囲、非公開の管理機能、API・決済処理の内部実装は公開情報だけでは確定できません。"
  },
  "artvanlines": {
    "id": "artvanlines",
    "summary": {
      "ja": "物流サービス、輸送車両、全国の拠点を整理した企業サイト。荷物や輸送目的に応じたサービス情報と業界別の事例を示し、法人の問い合わせへ案内します。",
      "en": "A logistics company website organizing transport services, vehicle information and its nationwide branch network. Service descriptions and industry-specific examples help business visitors identify relevant options before reaching the corporate inquiry route."
    },
    "features": [
      {
        "ja": "輸送サービス・車両の用途別紹介",
        "en": "Transport services and vehicle-use information"
      },
      {
        "ja": "全国の物流拠点案内",
        "en": "Nationwide logistics branch directory"
      },
      {
        "ja": "業界別事例と法人問い合わせ導線",
        "en": "Industry case studies and business inquiry route"
      }
    ],
    "technologies": [
      {
        "name": "HTML / CSS / JavaScript",
        "basis": "public",
        "evidence": "https://www.artvanlines.co.jp/ の公開HTML、スタイル指定、script要素を確認。CMS・サーバー実装は断定していない。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://www.artvanlines.co.jp/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      }
    ],
    "limitations": "公開ページから確認した表示・機能・導線です。個人の担当範囲、非公開の管理機能、API・決済処理の内部実装は公開情報だけでは確定できません。"
  },
  "hakuhodo-technologies": {
    "id": "hakuhodo-technologies",
    "summary": {
      "ja": "技術組織ごとの役割と募集情報を示す採用サイト。組織紹介、働き方・育成制度、社員インタビューをまとめ、求職者が希望する領域を調べられる構成です。",
      "en": "A technology recruitment website organized around specialist teams and their roles. Department pages, workplace policies, development programs and employee stories help applicants explore relevant opportunities and understand the organization before following recruitment links."
    },
    "features": [
      {
        "ja": "技術領域・組織別の紹介と募集案内",
        "en": "Team and technical-area introductions with hiring routes"
      },
      {
        "ja": "働き方・研修・評価制度の情報",
        "en": "Workstyle, training and evaluation information"
      },
      {
        "ja": "タグ別の記事・社員インタビュー",
        "en": "Tagged articles and employee interviews"
      }
    ],
    "technologies": [
      {
        "name": "WordPress",
        "basis": "public",
        "evidence": "https://recruit.hakuhodo-technologies.co.jp/ の公開HTMLで wp-content を確認。テーマ／CMSアセットとして確認。"
      },
      {
        "name": "jQuery",
        "basis": "public",
        "evidence": "https://recruit.hakuhodo-technologies.co.jp/ の公開HTMLで jquery. を確認。配信アセットの名称として確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://recruit.hakuhodo-technologies.co.jp/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      }
    ],
    "limitations": "公開ページから確認した表示・機能・導線です。個人の担当範囲、非公開の管理機能、API・決済処理の内部実装は公開情報だけでは確定できません。"
  },
  "plusr": {
    "id": "plusr",
    "summary": {
      "ja": "訪問リハビリ職の採用サイト。常勤・非常勤の働き方と社員の声を比較でき、希望勤務形態を選ぶ応募フォームとLINEの応募窓口を用意しています。",
      "en": "A rehabilitation recruitment website with distinct full-time and part-time work information. Staff interviews support role comparison, while an application form captures employment preferences and a separate LINE link offers another contact route."
    },
    "features": [
      {
        "ja": "常勤・非常勤の働き方を分けて紹介",
        "en": "Separate full-time and part-time work pages"
      },
      {
        "ja": "希望勤務形態を選べる応募フォーム",
        "en": "Application form with employment-type choices"
      },
      {
        "ja": "社員インタビューとLINE応募リンク",
        "en": "Staff interviews and a LINE application link"
      }
    ],
    "technologies": [
      {
        "name": "WordPress",
        "basis": "public",
        "evidence": "https://www.plusr.jp/recruit/ の公開HTMLで wp-content を確認。テーマ／CMSアセットとして確認。"
      },
      {
        "name": "jQuery",
        "basis": "public",
        "evidence": "https://www.plusr.jp/recruit/ の公開HTMLで jquery. を確認。配信アセットの名称として確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://www.plusr.jp/recruit/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      },
      {
        "url": "https://www.plusr.jp/recruit/entry/",
        "note": "公開された機能の詳細・入力項目・外部サービスへのリンクを追加確認。"
      }
    ],
    "limitations": "公開ページから確認した表示・機能・導線です。個人の担当範囲、非公開の管理機能、API・決済処理の内部実装は公開情報だけでは確定できません。"
  },
  "autotechnic": {
    "id": "autotechnic",
    "summary": {
      "ja": "自動車開発の職種と働く人を紹介する採用サイト。新卒・キャリア・再入社で入口を分け、説明会やインターン情報から外部の応募ページへ案内します。",
      "en": "An automotive engineering careers website that distinguishes graduate, experienced and alumni recruitment. Role descriptions, employee profiles and event information connect visitors with company briefings, internships and the appropriate external application portal."
    },
    "features": [
      {
        "ja": "新卒・キャリア・再入社別の募集案内",
        "en": "Graduate, experienced and alumni recruitment routes"
      },
      {
        "ja": "開発・設計・CAE・IT職種の紹介",
        "en": "Development, design, CAE and IT role pages"
      },
      {
        "ja": "説明会・インターン情報と応募リンク",
        "en": "Briefing and internship information with application links"
      }
    ],
    "technologies": [
      {
        "name": "WordPress",
        "basis": "public",
        "evidence": "https://www.autotechnic.co.jp/recruit/ の公開HTMLで wp-content を確認。テーマ／CMSアセットとして確認。"
      },
      {
        "name": "jQuery",
        "basis": "public",
        "evidence": "https://www.autotechnic.co.jp/recruit/ の公開HTMLで jquery- を確認。配信アセットの名称として確認。"
      },
      {
        "name": "Swiper",
        "basis": "public",
        "evidence": "https://www.autotechnic.co.jp/recruit/ の公開HTMLで swiper- を確認。配信アセットの名称として確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://www.autotechnic.co.jp/recruit/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      }
    ],
    "limitations": "公開ページから確認した表示・機能・導線です。個人の担当範囲、非公開の管理機能、API・決済処理の内部実装は公開情報だけでは確定できません。"
  },
  "hba": {
    "id": "hba",
    "summary": {
      "ja": "社員・職種・職場を多角的に紹介するIT企業の採用サイト。複数拠点の360度オフィスツアー、対談記事、募集要項と応募導線をまとめています。",
      "en": "An IT recruitment website presenting employees, job roles and working environments. Embedded 360-degree tours show several offices, while interview features, application requirements and distinct recruitment links help candidates explore their next steps."
    },
    "features": [
      {
        "ja": "複数拠点の360度オフィスツアー",
        "en": "Embedded 360-degree tours of several offices"
      },
      {
        "ja": "社員紹介・職種紹介・対談記事",
        "en": "Employee profiles, role descriptions and interviews"
      },
      {
        "ja": "新卒・キャリア別の応募導線",
        "en": "Separate graduate and career application routes"
      }
    ],
    "technologies": [
      {
        "name": "WordPress",
        "basis": "public",
        "evidence": "https://www.hba.co.jp/recruit/ の公開HTMLで wp-content を確認。テーマ／CMSアセットとして確認。"
      },
      {
        "name": "jQuery",
        "basis": "public",
        "evidence": "https://www.hba.co.jp/recruit/ の公開HTMLで jquery- を確認。配信アセットの名称として確認。"
      },
      {
        "name": "Swiper",
        "basis": "public",
        "evidence": "https://www.hba.co.jp/recruit/ の公開HTMLで swiper- を確認。配信アセットの名称として確認。"
      },
      {
        "name": "RICOH360",
        "basis": "public",
        "evidence": "360度オフィスツアーページが embed.ricoh360.com のiframeを埋め込み。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://www.hba.co.jp/recruit/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      },
      {
        "url": "https://www.hba.co.jp/recruit/virtual-office-tour/",
        "note": "公開された機能の詳細・入力項目・外部サービスへのリンクを追加確認。"
      }
    ],
    "limitations": "公開ページから確認した表示・機能・導線です。個人の担当範囲、非公開の管理機能、API・決済処理の内部実装は公開情報だけでは確定できません。"
  },
  "pias-ats": {
    "id": "pias-ats",
    "summary": {
      "ja": "美容職の募集をブランドと職種から探せる採用サイト。社員の働き方を紹介し、新卒・中途・再入社・キャリア登録に応じた応募先へ案内します。",
      "en": "A beauty careers website that organizes opportunities by brand and profession. Employee interviews and workplace information accompany separate routes for graduates, experienced applicants, returning employees and career registration, with external recruitment services clearly linked."
    },
    "features": [
      {
        "ja": "ブランド別・職種別の仕事紹介",
        "en": "Brand-specific and profession-specific career pages"
      },
      {
        "ja": "社員インタビュー・採用ブログ",
        "en": "Employee interviews and recruitment blog"
      },
      {
        "ja": "応募区分別の外部求人・LINE等への導線",
        "en": "Applicant-specific links to job portals and LINE"
      }
    ],
    "technologies": [
      {
        "name": "WordPress",
        "basis": "public",
        "evidence": "https://www.pias-recruit.jp/ats/ の公開HTMLで wp-content を確認。テーマ／CMSアセットとして確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://www.pias-recruit.jp/ats/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      },
      {
        "url": "https://www.pias-recruit.jp/ats/entry/",
        "note": "公開された機能の詳細・入力項目・外部サービスへのリンクを追加確認。"
      }
    ],
    "limitations": "公開ページから確認した表示・機能・導線です。個人の担当範囲、非公開の管理機能、API・決済処理の内部実装は公開情報だけでは確定できません。"
  },
  "orange-life": {
    "id": "orange-life",
    "summary": {
      "ja": "葬祭サービスの仕事と社風を紹介する採用サイト。職種別インタビュー、社員アンケート、仕事の一日を見せ、募集要項とエントリーへつなぐ構成です。",
      "en": "A funeral services recruitment website explaining roles and company culture through employee interviews, staff survey results and a day-in-the-life feature. Recruitment requirements and entry links give prospective applicants a clear next step."
    },
    "features": [
      {
        "ja": "職種別インタビュー・経営陣対談",
        "en": "Role-based interviews and leadership conversations"
      },
      {
        "ja": "社員アンケート・一日の仕事紹介",
        "en": "Employee survey results and day-in-the-life content"
      },
      {
        "ja": "募集要項・エントリーへの案内",
        "en": "Recruitment requirements and entry routes"
      }
    ],
    "technologies": [
      {
        "name": "WordPress",
        "basis": "public",
        "evidence": "https://orange-life-recruit.jp/ の公開HTMLで wp-content を確認。テーマ／CMSアセットとして確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://orange-life-recruit.jp/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      }
    ],
    "limitations": "公開ページから確認した表示・機能・導線です。個人の担当範囲、非公開の管理機能、API・決済処理の内部実装は公開情報だけでは確定できません。"
  },
  "jhca": {
    "id": "jhca",
    "summary": {
      "ja": "ハウスコーティング協会の活動と加盟店を紹介するサイト。加盟店一覧、保証・技術に関する情報、更新記事、会員専用ページへの入口を整理しています。",
      "en": "An industry association website presenting coating standards, support activities and member companies. A member directory, technical notices and an entrance to member-only content organize information for both consumers and participating businesses."
    },
    "features": [
      {
        "ja": "加盟店一覧と協会活動の紹介",
        "en": "Member-company directory and association activities"
      },
      {
        "ja": "保証・技術情報・お知らせの更新",
        "en": "Warranty, technical information and news pages"
      },
      {
        "ja": "会員専用ページへの入口",
        "en": "Entrance to the member-only area"
      }
    ],
    "technologies": [
      {
        "name": "WordPress",
        "basis": "public",
        "evidence": "https://j-h-c-a.com/ の公開HTMLで wp-includes を確認。テーマ／CMSアセットとして確認。"
      },
      {
        "name": "jQuery",
        "basis": "public",
        "evidence": "https://j-h-c-a.com/ の公開HTMLで jquery- を確認。配信アセットの名称として確認。"
      },
      {
        "name": "Swiper",
        "basis": "public",
        "evidence": "https://j-h-c-a.com/ の公開HTMLで swiper- を確認。配信アセットの名称として確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://j-h-c-a.com/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      }
    ],
    "limitations": "公開ページから確認した表示・機能・導線です。個人の担当範囲、非公開の管理機能、API・決済処理の内部実装は公開情報だけでは確定できません。"
  },
  "me-create": {
    "id": "me-create",
    "summary": {
      "ja": "幼稚園の紹介を想定したWordPress・SWELLサイト。施設写真、年間行事、入園案内、よくある質問とお知らせを、保護者が目的別にたどれる構成です。",
      "en": "A kindergarten information website using WordPress and SWELL. Facility introductions, annual events, admission guidance, frequently asked questions and dated notices are organized around the information families need when exploring the school."
    },
    "features": [
      {
        "ja": "施設・教育方針・年間行事の紹介",
        "en": "Facilities, educational approach and annual events"
      },
      {
        "ja": "入園案内・FAQ・問い合わせ導線",
        "en": "Admission guidance, FAQ and contact routes"
      },
      {
        "ja": "日付・分類付きのお知らせ一覧",
        "en": "Dated and categorized school notices"
      }
    ],
    "technologies": [
      {
        "name": "WordPress",
        "basis": "public",
        "evidence": "https://me-create.net/kindergarten/ の公開HTMLで wp-content を確認。テーマ／CMSアセットとして確認。"
      },
      {
        "name": "SWELL",
        "basis": "public",
        "evidence": "https://me-create.net/kindergarten/ の公開HTMLで themes/swell を確認。配信アセットの名称として確認。"
      },
      {
        "name": "Swiper",
        "basis": "public",
        "evidence": "https://me-create.net/kindergarten/ の公開HTMLで swiper- を確認。配信アセットの名称として確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://me-create.net/kindergarten/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      }
    ],
    "limitations": "公開ページにテスト投稿が含まれます。幼稚園向けサイトの画面・機能として記載し、実在施設への納品や運用成果までは断定していません。"
  },
  "wamu": {
    "id": "wamu",
    "summary": {
      "ja": "業務用美容機器を用途別に紹介するメーカーサイト。製品詳細と導入サロンの事例を読み比べ、資料請求や無料デモの申し込み、導入後のサポートへ案内します。",
      "en": "A professional beauty equipment website grouping products by treatment purpose. Product details, salon case studies and support information help business buyers compare options before following document-request and demonstration inquiry links."
    },
    "features": [
      {
        "ja": "用途別の製品一覧・詳細ページ",
        "en": "Product catalog organized by treatment purpose"
      },
      {
        "ja": "導入サロンの事例・関連記事",
        "en": "Salon case studies and editorial articles"
      },
      {
        "ja": "資料請求・無料デモへの導線",
        "en": "Document-request and demonstration inquiry routes"
      }
    ],
    "technologies": [
      {
        "name": "HTML / CSS / JavaScript",
        "basis": "public",
        "evidence": "https://wamu-gr.co.jp/ の公開HTML、スタイル指定、script要素を確認。CMS・サーバー実装は断定していない。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://wamu-gr.co.jp/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      }
    ],
    "limitations": "公開ページから確認した表示・機能・導線です。個人の担当範囲、非公開の管理機能、API・決済処理の内部実装は公開情報だけでは確定できません。"
  },
  "sygnhouse": {
    "id": "sygnhouse",
    "summary": {
      "ja": "バイク用品の製品情報と購入後サポートを集約したサイト。製品シリーズの紹介、販売店案内、説明書・更新情報、修理相談の会員ページへつながります。",
      "en": "A motorcycle accessories website combining product discovery with after-sales support. Visitors can explore product families, find dealers, access manuals and software update information, or follow links to the member service for repair inquiries."
    },
    "features": [
      {
        "ja": "製品シリーズ別の商品紹介・サイト内検索",
        "en": "Product-family navigation and site search"
      },
      {
        "ja": "販売店・専門スタッフ在籍店の案内",
        "en": "Dealer and specialist retailer directory"
      },
      {
        "ja": "説明書・更新情報・修理相談への導線",
        "en": "Manuals, update information and repair inquiry links"
      }
    ],
    "technologies": [
      {
        "name": "WordPress",
        "basis": "public",
        "evidence": "https://sygnhouse.jp/ の公開HTMLで wp-content を確認。テーマ／CMSアセットとして確認。"
      },
      {
        "name": "jQuery",
        "basis": "public",
        "evidence": "https://sygnhouse.jp/ の公開HTMLで jquery- を確認。配信アセットの名称として確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://sygnhouse.jp/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      }
    ],
    "limitations": "公開ページから確認した表示・機能・導線です。個人の担当範囲、非公開の管理機能、API・決済処理の内部実装は公開情報だけでは確定できません。"
  },
  "wamu-school": {
    "id": "wamu-school",
    "summary": {
      "ja": "エステスクールの特徴、カリキュラム、進路、コースを一ページで説明するLP。ページ内の申し込み欄には、氏名・性別・年齢・連絡先の入力項目があります。",
      "en": "A beauty school landing page presenting course options, curriculum, qualifications and career routes in a single sequence. An on-page entry form collects the applicant’s name, age, gender and contact information without requiring a separate navigation step."
    },
    "features": [
      {
        "ja": "特徴・カリキュラム・キャリアパスの紹介",
        "en": "School features, curriculum and career paths"
      },
      {
        "ja": "コース・資格取得情報の掲載",
        "en": "Course options and qualification information"
      },
      {
        "ja": "氏名・年齢・連絡先の申し込みフォーム",
        "en": "On-page entry form for applicant details"
      }
    ],
    "technologies": [
      {
        "name": "jQuery",
        "basis": "public",
        "evidence": "https://wamu-gr.co.jp/product/school/ の公開HTMLで jquery. を確認。配信アセットの名称として確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://wamu-gr.co.jp/product/school/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      }
    ],
    "limitations": "公開ページから確認した表示・機能・導線です。個人の担当範囲、非公開の管理機能、API・決済処理の内部実装は公開情報だけでは確定できません。"
  },
  "spice": {
    "id": "spice",
    "summary": {
      "ja": "IRIAM配信者事務所のブランドサイト。所属ライバーの一覧から個別プロフィールへ進めるほか、イベントニュースとオーディションの応募窓口を案内しています。",
      "en": "A virtual streamer agency website with a roster that links to individual performer profiles. Agency news, event reports and audition routes let visitors discover creators, follow activity updates and find information about joining the agency."
    },
    "features": [
      {
        "ja": "所属ライバー一覧・個別プロフィール",
        "en": "Streamer roster and individual profile pages"
      },
      {
        "ja": "日付付きニュース・イベント案内",
        "en": "Dated news and event information"
      },
      {
        "ja": "オーディション・問い合わせへの導線",
        "en": "Audition and inquiry routes"
      }
    ],
    "technologies": [
      {
        "name": "STUDIO",
        "basis": "public",
        "evidence": "公開HTMLのgeneratorメタ情報はStudio.Design。ブラウザーでライバー一覧・ニュース・応募導線を確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://spice-vliver.com/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      }
    ],
    "limitations": "公開ページから確認した表示・機能・導線です。個人の担当範囲、非公開の管理機能、API・決済処理の内部実装は公開情報だけでは確定できません。"
  },
  "orcasa": {
    "id": "orcasa",
    "summary": {
      "ja": "リフォーム・リノベーションを紹介するLP。保存済みの掲載画面では、室内写真を大きく見せ、無料デザイン相談と電話窓口を目立つ位置に配置しています。",
      "en": "An interior renovation landing page represented by the saved portfolio screenshot. The archived view emphasizes a large interior photograph, a prominent free design consultation button and telephone information; the original landing-page URL currently returns a not-found page."
    },
    "features": [
      {
        "ja": "室内写真を大きく見せるファーストビュー",
        "en": "Large interior photography in the archived hero"
      },
      {
        "ja": "無料デザイン相談へのボタン",
        "en": "Prominent free design consultation button"
      },
      {
        "ja": "電話番号・受付時間の表示",
        "en": "Visible telephone contact and opening hours"
      }
    ],
    "technologies": [],
    "checkedAt": "2026-11-12",
    "status": "partial",
    "sources": [
      {
        "url": "https://orcasa.jp/lp2504",
        "note": "2026-11-12: HTTP 404／Page not found。公開中のLPとして検証不可。"
      },
      {
        "url": "/images/projects/orcasa.webp",
        "note": "docs/project-sources.md記録済みの既存画面キャプチャ。室内写真、無料デザイン相談、電話・受付時間のみ確認。"
      }
    ],
    "limitations": "対象LPはHTTP 404で、ブラウザーでもPage not foundを確認。機能説明は既存の保存画像で確認できる範囲のみ。現在の404ページのSTUDIO構成を旧LPの技術とみなしていません。",
    "availability": {
      "ja": "元のLPは現在公開されていないため、保存した画面で確認できる内容を掲載しています。",
      "en": "The original landing page is no longer available. This entry describes the saved site image."
    }
  },
  "oliver": {
    "id": "oliver",
    "summary": {
      "ja": "オフィス移転・改装を検討する企業向けLP。課題と解決策を対で示す事例紹介から、オフィス見学予約、無料相談、資料ダウンロードの各窓口へ案内します。",
      "en": "An office relocation and refurbishment landing page for business customers. Case studies pair workplace challenges with proposed solutions, then offer distinct routes for office tours, free consultation and downloadable information about the service."
    },
    "features": [
      {
        "ja": "課題・解決策を組み合わせた事例紹介",
        "en": "Case studies pairing challenges with solutions"
      },
      {
        "ja": "オフィス見学・無料相談の申し込み導線",
        "en": "Office tour and free consultation request routes"
      },
      {
        "ja": "資料ダウンロードの専用ページ",
        "en": "Dedicated information download page"
      }
    ],
    "technologies": [
      {
        "name": "WordPress",
        "basis": "public",
        "evidence": "https://www.oliverinc.co.jp/lp/place2-5/ の公開HTMLで wp-content を確認。テーマ／CMSアセットとして確認。"
      },
      {
        "name": "jQuery",
        "basis": "public",
        "evidence": "https://www.oliverinc.co.jp/lp/place2-5/ の公開HTMLで jquery. を確認。配信アセットの名称として確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://www.oliverinc.co.jp/lp/place2-5/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      }
    ],
    "limitations": "公開ページから確認した表示・機能・導線です。個人の担当範囲、非公開の管理機能、API・決済処理の内部実装は公開情報だけでは確定できません。"
  },
  "tatsuei": {
    "id": "tatsuei",
    "summary": {
      "ja": "型枠工事会社の事業と現場実績を伝えるWordPressサイト。施工事例とお役立ち記事を更新し、現場のInstagram投稿、求人情報、工事相談へつなぎます。",
      "en": "A formwork contractor website using WordPress to present services and construction projects. Dated case studies and educational articles sit alongside an Instagram project feed, recruitment information and inquiry routes for prospective customers."
    },
    "features": [
      {
        "ja": "施工実績の一覧・詳細記事",
        "en": "Construction project listing and detail articles"
      },
      {
        "ja": "新着情報・型枠工事の解説記事",
        "en": "Company news and formwork guidance articles"
      },
      {
        "ja": "現場Instagram投稿・求人・相談導線",
        "en": "Site-work Instagram feed, recruitment and inquiry routes"
      }
    ],
    "technologies": [
      {
        "name": "WordPress",
        "basis": "public",
        "evidence": "https://tatsuei-katawaku.com/ の公開HTMLで wp-content を確認。テーマ／CMSアセットとして確認。"
      },
      {
        "name": "SWELL",
        "basis": "public",
        "evidence": "https://tatsuei-katawaku.com/ の公開HTMLで themes/swell を確認。配信アセットの名称として確認。"
      },
      {
        "name": "jQuery",
        "basis": "public",
        "evidence": "https://tatsuei-katawaku.com/ の公開HTMLで jquery. を確認。配信アセットの名称として確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://tatsuei-katawaku.com/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      }
    ],
    "limitations": "公開ページから確認した表示・機能・導線です。個人の担当範囲、非公開の管理機能、API・決済処理の内部実装は公開情報だけでは確定できません。"
  },
  "kouyo": {
    "id": "kouyo",
    "summary": {
      "ja": "土木工事と建築工事を分けて案内する建設会社サイト。工事分野がわかる施工事例と写真を掲載し、対応業務の確認から採用情報や問い合わせへ進めます。",
      "en": "A construction company website separating civil engineering and building services. Categorized project photographs and case pages help visitors identify relevant experience, with company details, recruitment information and inquiry links available from the main navigation."
    },
    "features": [
      {
        "ja": "土木・建築別のサービス詳細",
        "en": "Separate civil engineering and building service pages"
      },
      {
        "ja": "工事分類付きの施工事例・写真",
        "en": "Construction case studies labeled by project type"
      },
      {
        "ja": "採用情報・会社案内・問い合わせ導線",
        "en": "Recruitment, company information and inquiry routes"
      }
    ],
    "technologies": [
      {
        "name": "WordPress",
        "basis": "public",
        "evidence": "https://kouyo-omuta.com/ の公開HTMLで wp-content を確認。テーマ／CMSアセットとして確認。"
      },
      {
        "name": "SWELL",
        "basis": "public",
        "evidence": "https://kouyo-omuta.com/ の公開HTMLで themes/swell を確認。配信アセットの名称として確認。"
      },
      {
        "name": "Swiper",
        "basis": "public",
        "evidence": "https://kouyo-omuta.com/ の公開HTMLで swiper- を確認。配信アセットの名称として確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://kouyo-omuta.com/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      }
    ],
    "limitations": "公開ページから確認した表示・機能・導線です。個人の担当範囲、非公開の管理機能、API・決済処理の内部実装は公開情報だけでは確定できません。"
  },
  "carche": {
    "id": "carche",
    "summary": {
      "ja": "中古車買取の相談を受け付けるLP。査定事例と手続きの流れを画像で説明し、LINE相談の入口、電話、氏名・電話番号・地域を入力するフォームを配置しています。",
      "en": "A used-car purchase inquiry landing page presenting valuation examples and the transaction process. Visitors can choose a LINE contact entry, telephone link or a short inquiry form collecting their name, phone number and area."
    },
    "features": [
      {
        "ja": "車種別の査定事例・売却手順の紹介",
        "en": "Vehicle valuation examples and selling process"
      },
      {
        "ja": "LINE相談入口・電話リンク",
        "en": "LINE contact entry and telephone link"
      },
      {
        "ja": "氏名・電話番号・地域の問い合わせフォーム",
        "en": "Inquiry form with name, phone and area fields"
      }
    ],
    "technologies": [
      {
        "name": "HTML / CSS / JavaScript",
        "basis": "public",
        "evidence": "https://carche.site/ の公開HTML、スタイル指定、script要素を確認。CMS・サーバー実装は断定していない。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://carche.site/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      }
    ],
    "limitations": "LINE相談入口 /line-login.php と問い合わせフォームを公開画面で確認。認証、送信、通知、API連携の内部処理は実行・検証していません。"
  },
  "orisyanace": {
    "id": "orisyanace",
    "summary": {
      "ja": "ボトルと装飾を選び、オリジナル商品の注文内容を組み立てる画面。テンプレート・本数・オプション・配送希望を整理し、LINEへ送る注文文を確認・コピーできます。",
      "en": "A custom bottle order configurator with template, quantity, decoration and delivery choices. Customers can review the assembled order, copy its text and follow the LINE contact route, with age confirmation presented before alcohol-related browsing."
    },
    "features": [
      {
        "ja": "ボトル・テンプレート・装飾オプション選択",
        "en": "Bottle, template and decoration option selection"
      },
      {
        "ja": "地域別のお届け希望日・時間帯選択",
        "en": "Region-based delivery date and time preferences"
      },
      {
        "ja": "注文内容の確認・コピーとLINE送信案内",
        "en": "Order summary, text copying and LINE handoff instructions"
      }
    ],
    "technologies": [
      {
        "name": "LINE",
        "basis": "owner",
        "evidence": "ポートフォリオ所有者が提供した制作実績分類／既存src/projects.mjsのplatform。現行サイトの内部実装を意味しない。"
      },
      {
        "name": "WordPress",
        "basis": "public",
        "evidence": "https://orisyanace-order.com/ の公開HTMLで wp-content を確認。テーマ／CMSアセットとして確認。"
      },
      {
        "name": "jQuery",
        "basis": "public",
        "evidence": "https://orisyanace-order.com/ の公開HTMLで jquery. を確認。配信アセットの名称として確認。"
      },
      {
        "name": "Swiper",
        "basis": "public",
        "evidence": "https://orisyanace-order.com/ の公開HTMLで swiper- を確認。配信アセットの名称として確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://orisyanace-order.com/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      }
    ],
    "limitations": "公開画面・HTMLで選択項目、注文文コピー、配送希望とLINEへの案内を確認。注文送信・決済・外部通知の動作やバックエンドの担当範囲は未検証です。"
  },
  "the-golf-house": {
    "id": "the-golf-house",
    "summary": {
      "ja": "個室インドアゴルフの店舗・料金・レッスンを案内するサイト。日本語・英語・中国語の入口があり、初回体験のLINE窓口と会員専用の外部予約ページを分けています。",
      "en": "An indoor golf website presenting locations, plans and instructors, with Japanese, English and Chinese entry points. Trial visitors are directed to LINE, while existing members receive a separate link to the external booking service."
    },
    "features": [
      {
        "ja": "店舗・料金プラン・講師の紹介",
        "en": "Location, pricing-plan and instructor information"
      },
      {
        "ja": "日本語・英語・中国語ページへの切替",
        "en": "Japanese, English and Chinese page links"
      },
      {
        "ja": "体験LINE窓口・会員予約サイトへのリンク",
        "en": "LINE trial contact and external member booking link"
      }
    ],
    "technologies": [
      {
        "name": "ペライチ",
        "basis": "owner",
        "evidence": "ポートフォリオ所有者が提供した制作実績分類／既存src/projects.mjsのplatform。現行サイトの内部実装を意味しない。"
      },
      {
        "name": "WordPress",
        "basis": "public",
        "evidence": "https://thegolfhouse.net/ の公開HTMLで wp-content を確認。テーマ／CMSアセットとして確認。"
      },
      {
        "name": "SWELL",
        "basis": "public",
        "evidence": "https://thegolfhouse.net/ の公開HTMLで themes/swell を確認。配信アセットの名称として確認。"
      },
      {
        "name": "jQuery",
        "basis": "public",
        "evidence": "https://thegolfhouse.net/ の公開HTMLで jquery- を確認。配信アセットの名称として確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://thegolfhouse.net/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      }
    ],
    "limitations": "申告された制作時の技術はペライチ。現在の公開HTMLではWordPressとSWELLが確認できます。LINE・予約サイトは外部への導線であり、API連携の実装内容は未確認です。"
  },
  "lounge-range": {
    "id": "lounge-range",
    "summary": {
      "ja": "会員制インドアゴルフの店舗を地域別に探せるサイト。店舗一覧から各店の紹介へ進め、開業情報や会員向け情報、加盟・取材など目的別の相談窓口を設けています。",
      "en": "A membership golf website with a regional location directory and individual venue pages. Opening announcements and membership information support discovery, while separate inquiry routes address franchise partnerships, media requests and event-space use."
    },
    "features": [
      {
        "ja": "都道府県・市区別の店舗一覧",
        "en": "Location directory organized by region and city"
      },
      {
        "ja": "店舗詳細・新規開業ニュース",
        "en": "Individual venue pages and opening announcements"
      },
      {
        "ja": "加盟・取材・イベント等の相談導線",
        "en": "Separate franchise, media and event inquiry routes"
      }
    ],
    "technologies": [
      {
        "name": "ペライチ",
        "basis": "owner",
        "evidence": "ポートフォリオ所有者が提供した制作実績分類／既存src/projects.mjsのplatform。現行サイトの内部実装を意味しない。"
      },
      {
        "name": "WordPress",
        "basis": "public",
        "evidence": "https://lounge-range.com/ の公開HTMLで wp-content を確認。テーマ／CMSアセットとして確認。"
      },
      {
        "name": "jQuery",
        "basis": "public",
        "evidence": "https://lounge-range.com/ の公開HTMLで jquery. を確認。配信アセットの名称として確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://lounge-range.com/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      },
      {
        "url": "https://lounge-range.com/courses/",
        "note": "公開された機能の詳細・入力項目・外部サービスへのリンクを追加確認。"
      }
    ],
    "limitations": "申告された制作時の技術はペライチ。現在の公開HTMLではWordPressが確認できます。制作当時の構成・担当範囲は公開ページだけでは確定できません。"
  },
  "loun9ine": {
    "id": "loun9ine",
    "summary": {
      "ja": "ゴルフラウンジの設備・店舗・レッスンを紹介するサイト。設備動画や料金プランから利用を検討でき、体験予約の流れを説明して外部のhacomono予約へ案内します。",
      "en": "A golf lounge website introducing facilities, locations, instructors and lesson options. Embedded facility videos and pricing information support comparison, while the trial-booking guide links visitors to the external hacomono reservation service."
    },
    "features": [
      {
        "ja": "店舗・設備紹介と動画埋め込み",
        "en": "Venue and facility pages with embedded videos"
      },
      {
        "ja": "料金プラン・講師・レッスン紹介",
        "en": "Pricing, instructor and lesson information"
      },
      {
        "ja": "体験の手順とhacomono予約リンク",
        "en": "Trial guidance and a hacomono booking link"
      }
    ],
    "technologies": [
      {
        "name": "ペライチ",
        "basis": "owner",
        "evidence": "ポートフォリオ所有者が提供した制作実績分類／既存src/projects.mjsのplatform。現行サイトの内部実装を意味しない。"
      },
      {
        "name": "jQuery",
        "basis": "public",
        "evidence": "https://www.loun9ine.jp/ の公開HTMLで jquery- を確認。配信アセットの名称として確認。"
      },
      {
        "name": "hacomono",
        "basis": "public",
        "evidence": "予約リンク先は loun9ine.hacomono.jp。外部予約サービスへの誘導として確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://www.loun9ine.jp/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      }
    ],
    "limitations": "ペライチは本人申告の制作時技術です。現在の公開HTMLでは確認できません。hacomonoは外部予約先へのリンクとして確認しています。"
  },
  "saucony": {
    "id": "saucony",
    "summary": {
      "ja": "ランニングシューズのShopify公式ストア。性別・利用シーン・モデル別のカテゴリから商品へ進め、レビューやお気に入り、会員ページを使って購入を検討できます。",
      "en": "A Shopify footwear store with product navigation by gender, activity and model family. Reviews, favorites and customer account routes support product comparison, while new-arrival and sale collections provide additional paths into the catalog."
    },
    "features": [
      {
        "ja": "性別・用途・モデル別の商品カテゴリ",
        "en": "Product categories by gender, activity and model"
      },
      {
        "ja": "レビュー・お気に入り・会員ページ",
        "en": "Product reviews, favorites and customer accounts"
      },
      {
        "ja": "新着・セール商品と購入導線",
        "en": "New-arrival and sale collections with purchase routes"
      }
    ],
    "technologies": [
      {
        "name": "Shopify",
        "basis": "public",
        "evidence": "https://saucony.jp/ の公開HTMLで Shopify.shop を確認。ストアフロントのShopify識別子を確認。"
      },
      {
        "name": "jQuery",
        "basis": "public",
        "evidence": "https://saucony.jp/ の公開HTMLで jquery. を確認。配信アセットの名称として確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://saucony.jp/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      }
    ],
    "limitations": "公開ページから確認した表示・機能・導線です。個人の担当範囲、非公開の管理機能、API・決済処理の内部実装は公開情報だけでは確定できません。"
  },
  "ohora": {
    "id": "ohora",
    "summary": {
      "ja": "ジェルネイルの商品を種類・長さ・用途から選べるShopifyストア。レビューやお気に入りを表示し、初心者向けセットと使い方ガイドからカートへ進める構成です。",
      "en": "A Shopify nail store with collections organized by product type, length and use. Reviews and favorites support selection, while starter sets, application guidance and visible add-to-cart controls help visitors move from discovery toward purchase."
    },
    "features": [
      {
        "ja": "ネイルの種類・長さ・用途別カテゴリ",
        "en": "Nail collections by type, length and use"
      },
      {
        "ja": "商品レビュー・お気に入り・カート",
        "en": "Product reviews, favorites and cart controls"
      },
      {
        "ja": "初心者向けセット・使い方ガイド",
        "en": "Starter sets and application guides"
      }
    ],
    "technologies": [
      {
        "name": "Shopify",
        "basis": "public",
        "evidence": "https://ohora.co.jp/ の公開HTMLで Shopify.shop を確認。ストアフロントのShopify識別子を確認。"
      },
      {
        "name": "jQuery",
        "basis": "public",
        "evidence": "https://ohora.co.jp/ の公開HTMLで jquery. を確認。配信アセットの名称として確認。"
      },
      {
        "name": "Swiper",
        "basis": "public",
        "evidence": "https://ohora.co.jp/ の公開HTMLで swiper- を確認。配信アセットの名称として確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://ohora.co.jp/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      }
    ],
    "limitations": "公開ページから確認した表示・機能・導線です。個人の担当範囲、非公開の管理機能、API・決済処理の内部実装は公開情報だけでは確定できません。"
  },
  "brighte": {
    "id": "brighte",
    "summary": {
      "ja": "美容家電とケア用品のブランド・通販サイト。製品ごとの説明と価格から商品ページへ進み、カート・会員ページ、取扱店舗、FAQなど購入前後の情報を確認できます。",
      "en": "A beauty device store combining detailed product presentations with shopping routes. Product pages and pricing lead toward the cart, while account access, retailer information and frequently asked questions support customers before and after purchase."
    },
    "features": [
      {
        "ja": "美容家電・ケア用品の製品詳細と価格",
        "en": "Beauty device and care-product details with prices"
      },
      {
        "ja": "カート・会員ログインの導線",
        "en": "Cart and customer account access"
      },
      {
        "ja": "取扱店舗・FAQ・ニュース案内",
        "en": "Retailer information, FAQ and news"
      }
    ],
    "technologies": [
      {
        "name": "Shopify",
        "basis": "owner",
        "evidence": "ポートフォリオ所有者が提供した制作実績分類／既存src/projects.mjsのplatform。現行サイトの内部実装を意味しない。"
      },
      {
        "name": "Swiper",
        "basis": "public",
        "evidence": "https://brighte.jp/ の公開HTMLで swiper- を確認。配信アセットの名称として確認。"
      },
      {
        "name": "microCMS SDK",
        "basis": "public",
        "evidence": "公開HTMLが unpkg.com/microcms-js-sdk@latest/dist/umd/microcms-js-sdk.js を読み込み。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://brighte.jp/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      }
    ],
    "limitations": "Shopifyは本人申告の制作時技術です。現行ページではShopifyを確認できず、microCMS SDKとSwiperの読み込みを確認しています。現行EC基盤は断定していません。"
  },
  "carome": {
    "id": "carome",
    "summary": {
      "ja": "スキンケア・アクセサリーを扱うShopifyストア。商品一覧にレビュー・価格・在庫状態を表示し、単品の購入と定期購入の案内、会員ページへの入口を分けています。",
      "en": "A Shopify beauty and accessories store showing product reviews, prices and stock status directly in the catalog. Product pages, customer account access and a separate subscription route organize both one-time shopping and recurring purchase information."
    },
    "features": [
      {
        "ja": "商品レビュー・価格・売り切れ表示",
        "en": "Product reviews, prices and sold-out labels"
      },
      {
        "ja": "商品詳細・カート・会員ログイン",
        "en": "Product pages, cart and customer login"
      },
      {
        "ja": "定期購入サービスへの専用導線",
        "en": "Dedicated route to subscription shopping"
      }
    ],
    "technologies": [
      {
        "name": "Shopify",
        "basis": "public",
        "evidence": "https://carome.jp/ の公開HTMLで Shopify.shop を確認。ストアフロントのShopify識別子を確認。"
      },
      {
        "name": "jQuery",
        "basis": "public",
        "evidence": "https://carome.jp/ の公開HTMLで jquery. を確認。配信アセットの名称として確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://carome.jp/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      }
    ],
    "limitations": "公開ページから確認した表示・機能・導線です。個人の担当範囲、非公開の管理機能、API・決済処理の内部実装は公開情報だけでは確定できません。"
  },
  "nemuli": {
    "id": "nemuli",
    "summary": {
      "ja": "寝具の通販とマットレス選びを支援するShopifyサイト。体型・寝姿勢などを尋ねる診断ページ、商品カテゴリ、睡眠コラムを組み合わせて商品理解を助けます。",
      "en": "A Shopify bedding website centered on a mattress recommendation questionnaire. Body and sleep-related questions, product categories, explanatory diagrams and sleep articles give visitors several ways to understand the range before exploring the relevant purchase options."
    },
    "features": [
      {
        "ja": "体型・寝姿勢に関するマットレス診断",
        "en": "Mattress questionnaire about body and sleeping preferences"
      },
      {
        "ja": "マットレス・枕などの商品カテゴリ",
        "en": "Product categories for mattresses, pillows and bedding"
      },
      {
        "ja": "製品構造の図解・睡眠コラム・FAQ",
        "en": "Product diagrams, sleep articles and FAQ"
      }
    ],
    "technologies": [
      {
        "name": "Shopify",
        "basis": "public",
        "evidence": "https://nemuli.co.jp/ の公開HTMLで cdn.shopify.com を確認。ストアフロントのShopify識別子を確認。"
      },
      {
        "name": "GSAP",
        "basis": "public",
        "evidence": "https://nemuli.co.jp/ の公開HTMLで gsap/ を確認。配信アセットの名称として確認。"
      },
      {
        "name": "Swiper",
        "basis": "public",
        "evidence": "https://nemuli.co.jp/ の公開HTMLで swiper- を確認。配信アセットの名称として確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://nemuli.co.jp/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      },
      {
        "url": "https://nemuli.co.jp/pages/diagnose",
        "note": "公開された機能の詳細・入力項目・外部サービスへのリンクを追加確認。"
      }
    ],
    "limitations": "公開ページから確認した表示・機能・導線です。個人の担当範囲、非公開の管理機能、API・決済処理の内部実装は公開情報だけでは確定できません。"
  },
  "nuset": {
    "id": "nuset",
    "summary": {
      "ja": "スキンケア製品の特徴と購入導線をまとめたShopifyサイト。成分・容量・価格を商品ごとに示し、ブランド解説、購入ガイド、FAQ、カートと会員ページを備えています。",
      "en": "A Shopify skincare website connecting brand information with product shopping. Ingredient explanations, product sizes and prices support comparison, while a shopping guide, FAQ, customer accounts and cart controls provide the practical information needed to place an order."
    },
    "features": [
      {
        "ja": "製品別の成分・容量・価格案内",
        "en": "Product ingredients, sizes and prices"
      },
      {
        "ja": "商品詳細・カート・マイページ",
        "en": "Product pages, cart and customer accounts"
      },
      {
        "ja": "ブランド解説・購入ガイド・FAQ",
        "en": "Brand explanations, shopping guide and FAQ"
      }
    ],
    "technologies": [
      {
        "name": "Shopify",
        "basis": "public",
        "evidence": "https://nuset.jp/ の公開HTMLで Shopify.shop を確認。ストアフロントのShopify識別子を確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://nuset.jp/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      }
    ],
    "limitations": "公開ページから確認した表示・機能・導線です。個人の担当範囲、非公開の管理機能、API・決済処理の内部実装は公開情報だけでは確定できません。"
  },
  "anker": {
    "id": "anker",
    "summary": {
      "ja": "充電器・音響機器などを扱うShopify公式ストア。製品名や用途による検索、カテゴリ一覧、レビュー付き商品カード、会員サービスや法人窓口をまとめています。",
      "en": "A Shopify electronics store spanning charging, audio and other product categories. Search by product name or use, review-bearing product cards, customer account services and a business customer route help different visitors navigate a broad catalog."
    },
    "features": [
      {
        "ja": "製品名・用途検索とカテゴリナビ",
        "en": "Search by product name or use and category navigation"
      },
      {
        "ja": "レビュー・価格・新製品／セール表示",
        "en": "Reviews, prices and new-arrival or sale displays"
      },
      {
        "ja": "会員サービス・直営店・法人向け導線",
        "en": "Membership, physical store and business customer routes"
      }
    ],
    "technologies": [
      {
        "name": "Shopify",
        "basis": "public",
        "evidence": "https://www.ankerjapan.com/ の公開HTMLで cdn.shopify.com を確認。ストアフロントのShopify識別子を確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://www.ankerjapan.com/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      }
    ],
    "limitations": "公開ページから確認した表示・機能・導線です。個人の担当範囲、非公開の管理機能、API・決済処理の内部実装は公開情報だけでは確定できません。"
  },
  "moft": {
    "id": "moft",
    "summary": {
      "ja": "スマートフォン・PC周辺用品のShopifyストア。対応機種と用途から商品・セットを探せ、カラーやレビューを確認しながら選べる構成で、予約販売も案内しています。",
      "en": "A Shopify accessories store organizing products and bundles around device compatibility and everyday use. Product reviews and collection pages support comparison, while limited bundles and clearly labeled preorder campaigns give visitors distinct shopping options."
    },
    "features": [
      {
        "ja": "対応機種・用途別の商品とセット案内",
        "en": "Device-compatible product and bundle categories"
      },
      {
        "ja": "商品レビュー・価格・商品詳細",
        "en": "Product reviews, prices and detail pages"
      },
      {
        "ja": "予約販売・限定セットの専用導線",
        "en": "Dedicated preorder and limited-bundle routes"
      }
    ],
    "technologies": [
      {
        "name": "Shopify",
        "basis": "public",
        "evidence": "https://www.moftjapan.com/ の公開HTMLで cdn.shopify.com を確認。ストアフロントのShopify識別子を確認。"
      },
      {
        "name": "jQuery",
        "basis": "public",
        "evidence": "https://www.moftjapan.com/ の公開HTMLで jquery. を確認。配信アセットの名称として確認。"
      },
      {
        "name": "Swiper",
        "basis": "public",
        "evidence": "https://www.moftjapan.com/ の公開HTMLで swiper. を確認。配信アセットの名称として確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://www.moftjapan.com/",
        "note": "2026-11-12: 公開ページの本文・リンク・HTMLアセットを確認。"
      }
    ],
    "limitations": "公開ページから確認した表示・機能・導線です。個人の担当範囲、非公開の管理機能、API・決済処理の内部実装は公開情報だけでは確定できません。"
  },
  "laprotein": {
    "id": "laprotein",
    "summary": {
      "ja": "プロテインの味・容量別の商品紹介から通常購入・定期購入へつなぐECサイト。商品画像、栄養情報、数量選択、購入者レビューをまとめ、購入前の比較を支える構成です。",
      "en": "A protein storefront that connects flavor and pack-size information with one-off and subscription purchasing. Product galleries, nutrition information, quantity controls and customer reviews help shoppers compare the range before choosing a product."
    },
    "features": [
      {
        "ja": "味・容量別の商品一覧と詳細画像",
        "en": "Flavor and pack-size browsing with product galleries"
      },
      {
        "ja": "数量選択・カート追加と定期購入の案内",
        "en": "Quantity controls, cart actions and subscription guidance"
      },
      {
        "ja": "商品レビューと配送・購入条件のFAQ",
        "en": "Product reviews and delivery/purchase FAQs"
      }
    ],
    "technologies": [
      {
        "name": "Shopify",
        "basis": "public",
        "evidence": "Shopify.shop設定 / cdn.shopify.comのストア資産"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://laprotein.jp/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      },
      {
        "url": "https://laprotein.jp/products/macha-oi",
        "note": "商品詳細で画像、数量、カート、レビューを確認。トップのFAQに定期購入条件。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "misshelly": {
    "id": "misshelly",
    "summary": {
      "ja": "ヘアケア商品の単品・セット・詰め替えを紹介するブランドEC。商品画像の拡大、使用方法・成分の説明、レビュー、数量選択を一つの商品ページに集約しています。",
      "en": "A haircare storefront covering individual products, bundles and refills. Its product pages combine zoomable photography, usage and ingredient information, customer reviews and quantity selection, connecting the brand story with an informed purchasing journey."
    },
    "features": [
      {
        "ja": "単品・セット・詰め替え商品の比較導線",
        "en": "Navigation across individual products, sets and refills"
      },
      {
        "ja": "商品画像の拡大と使用方法・成分表示",
        "en": "Image zoom with usage and ingredient details"
      },
      {
        "ja": "レビュー・数量選択・カート追加",
        "en": "Reviews, quantity selection and add-to-cart controls"
      }
    ],
    "technologies": [
      {
        "name": "Shopify",
        "basis": "public",
        "evidence": "Shopify.shop設定 / cdn.shopify.comのストア資産"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://misshelly.com/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      },
      {
        "url": "https://misshelly.com/products/moist-shampoo",
        "note": "ズーム、レビュー、数量、カート追加、使用方法、全成分を確認。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "revel": {
    "id": "revel",
    "summary": {
      "ja": "革財布・小物を用途別に探せるECサイト。限定商品や人気商品の一覧から、素材・寸法の詳細、ラッピング・ロゴの選択、お気に入り登録へ進める構成です。",
      "en": "A leather-goods store organized by product use, limited collections and popular items. Detailed pages explain materials and dimensions and expose gift-wrapping and logo choices, wishlist controls and product reviews to support purchase decisions."
    },
    "features": [
      {
        "ja": "財布・キーケースなど用途別カテゴリー",
        "en": "Use-based categories for wallets, key cases and accessories"
      },
      {
        "ja": "ラッピング・ロゴデザインの選択",
        "en": "Gift-wrapping and logo-design options"
      },
      {
        "ja": "お気に入り保存と画像付き商品レビュー",
        "en": "Wishlist controls and image-capable product reviews"
      }
    ],
    "technologies": [
      {
        "name": "Shopify",
        "basis": "public",
        "evidence": "Shopify.shop設定 / cdn.shopify.comのストア資産"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://revel.jp/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      },
      {
        "url": "https://revel.jp/products/mini2-italy-scratch-ash-gray",
        "note": "素材・寸法、ラッピング、ロゴ選択、お気に入り、画像/動画レビュー投稿UIを確認。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "mitsuboshi": {
    "id": "mitsuboshi",
    "summary": {
      "ja": "天然素材の衣服とストールを扱うECサイト。衣類の種類別ナビゲーションに加え、自宅試着の案内、素材やものづくりのコラムを購入導線と組み合わせています。",
      "en": "A clothing and stole storefront organized by garment type. Home-fitting guidance, material stories and editorial articles complement the product collections, while keyword search, account access and a shopping bag connect discovery with purchasing."
    },
    "features": [
      {
        "ja": "衣類・ストールの細分化された商品分類",
        "en": "Detailed garment and stole categories"
      },
      {
        "ja": "自宅試着サービスの案内ページ",
        "en": "Dedicated home-fitting service guidance"
      },
      {
        "ja": "素材コラム・利用者紹介から商品への導線",
        "en": "Material stories and customer features linked to shopping"
      }
    ],
    "technologies": [
      {
        "name": "Shopify",
        "basis": "public",
        "evidence": "Shopify.shop設定 / cdn.shopify.comのストア資産"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://www.mitsuboshi1887.com/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      },
      {
        "url": "https://www.mitsuboshi1887.com/blogs/power-of-wool/trial-fitting",
        "note": "公式の自宅試着案内ページ。トップに衣類分類、検索、カート。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "ramutei": {
    "id": "ramutei",
    "summary": {
      "ja": "らむ亭の公開先は現在、一時閉店のお知らせページです。ブランド表示、営業状況の告知、関連サイトへの導線を確認でき、過去のEC機能は公開情報から確認できません。",
      "en": "The current Ramutei address displays a temporary closure notice. Its public page presents the brand, business-status information and related-site links with animated decoration; former e-commerce functions cannot be verified from the page now available."
    },
    "features": [
      {
        "ja": "一時閉店のお知らせと営業状況の表示",
        "en": "Temporary closure and business-status notice"
      },
      {
        "ja": "ロゴと雲のCSSアニメーション",
        "en": "Logo presentation and CSS cloud animation"
      },
      {
        "ja": "関連サイトへのリンク",
        "en": "Links to related websites"
      }
    ],
    "technologies": [
      {
        "name": "Shopify",
        "basis": "owner",
        "evidence": "ポートフォリオ所有者が提供した制作実績の分類。現在の公開ソースで同基盤を確認できたという意味ではない。"
      },
      {
        "name": "CSS Animations",
        "basis": "public",
        "evidence": "公開CSSに@keyframes floatCloudとanimation指定"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "partial",
    "sources": [
      {
        "url": "https://ramutei.com/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      }
    ],
    "limitations": "2026-02-25付の一時閉店告知を確認。現行の保存画像も告知ページ。Shopifyは本人申告の過去スタックであり現行ページからは未確認。",
    "availability": {
      "ja": "現在の公開ページは休止のお知らせです。以前の構成と現在確認できる情報を区別して紹介しています。",
      "en": "The current site displays a temporary closure notice. Historical technology is listed separately."
    }
  },
  "runtrip": {
    "id": "runtrip",
    "summary": {
      "ja": "ランニング用品をキーワード・ブランド・特集から探せるECサイト。シューズやウェアの商品一覧に、用途に合わせた特集と関連マガジンを組み合わせています。",
      "en": "A running-goods storefront combining keyword search, brand navigation and product collections. Shoe and apparel listings are supported by use-case features and links to related magazine articles, helping visitors move from running advice to suitable equipment."
    },
    "features": [
      {
        "ja": "キーワード検索とブランド別の商品一覧",
        "en": "Keyword search and brand-based product browsing"
      },
      {
        "ja": "レース・季節・用途別の特集コレクション",
        "en": "Collections organized around races, seasons and use cases"
      },
      {
        "ja": "商品紹介とランニングマガジンへの導線",
        "en": "Product discovery linked with running magazine content"
      }
    ],
    "technologies": [
      {
        "name": "Shopify",
        "basis": "public",
        "evidence": "Shopify.shop設定 / cdn.shopify.comのストア資産"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://store.runtrip.jp/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "brooklyn": {
    "id": "brooklyn",
    "summary": {
      "ja": "革製品をカテゴリー・色・革の種類から選べるECサイト。男女別ランキング、商品バリエーション、オーダーの案内、店舗紹介を横断して商品を検討できます。",
      "en": "A leather-goods storefront with navigation by product category, color and leather type. Separate rankings, product variants, custom-order guidance and store information give shoppers several ways to compare products and explore the brand’s offering."
    },
    "features": [
      {
        "ja": "カテゴリー・カラー・革素材からの商品探索",
        "en": "Product navigation by category, color and leather"
      },
      {
        "ja": "男女別ランキングとカラーバリエーション",
        "en": "Separate rankings and visible color variants"
      },
      {
        "ja": "オーダー案内と店舗一覧への導線",
        "en": "Routes to custom-order information and store listings"
      }
    ],
    "technologies": [
      {
        "name": "Shopify",
        "basis": "public",
        "evidence": "Shopify.shop設定 / cdn.shopify.comのストア資産"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://brooklyn.co.jp/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "fumikoda": {
    "id": "fumikoda",
    "summary": {
      "ja": "バッグ・小物のECとブランド情報を統合したサイト。日本語・英語・中国語と通貨の切り替えに対応し、商品コレクション、お試し購入、素材や製造背景を紹介します。",
      "en": "A bag and accessory storefront combining shopping with brand information. Visible language and currency selectors accompany product collections, trial-purchase guidance and stories about materials and manufacturing, supporting both domestic and international product discovery."
    },
    "features": [
      {
        "ja": "日本語・英語・中国語と通貨の切り替え",
        "en": "Japanese, English and Chinese language and currency selectors"
      },
      {
        "ja": "用途・素材別のバッグコレクション",
        "en": "Bag collections organized by use and material"
      },
      {
        "ja": "お試し購入と直営店・催事の案内",
        "en": "Trial-purchase guidance and store/event information"
      }
    ],
    "technologies": [
      {
        "name": "Shopify",
        "basis": "public",
        "evidence": "Shopify.shop設定 / cdn.shopify.comのストア資産"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://fumikoda.jp/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "actus": {
    "id": "actus",
    "summary": {
      "ja": "家具・雑貨をカテゴリー・ブランド・ランキングから探せるECサイト。お気に入りや閲覧履歴、スタッフのスタイリング、住所を知らずに贈れるeギフトの案内を備えています。",
      "en": "A furniture and homewares store offering category, brand and ranking-based discovery. Wishlist and browsing-history controls sit alongside staff styling content and e-gift guidance, connecting inspiration, product comparison and gift selection within one shopping site."
    },
    "features": [
      {
        "ja": "カテゴリー・ブランド・キーワードの商品検索",
        "en": "Category, brand and keyword product discovery"
      },
      {
        "ja": "お気に入り・閲覧履歴・スタッフスタイリング",
        "en": "Wishlist, browsing history and staff styling content"
      },
      {
        "ja": "用途別ギフトとeギフトの案内",
        "en": "Occasion-based gift browsing and e-gift guidance"
      }
    ],
    "technologies": [
      {
        "name": "jQuery",
        "basis": "public",
        "evidence": "/static/mallDefault/js/lib/jquery.min.js"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://online.actus-interior.com/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "fashionwalker": {
    "id": "fashionwalker",
    "summary": {
      "ja": "ブランド横断で服・靴・バッグを探せるファッションEC。カテゴリー検索、集計期間を変えられるランキング、お気に入りやマイブランドの導線を用意しています。",
      "en": "A multi-brand fashion store with category and keyword discovery for clothing, footwear and accessories. Its public interface includes adjustable ranking periods, item favorites and personal-brand controls, enabling focused browsing across a broad product catalog."
    },
    "features": [
      {
        "ja": "商品名・カテゴリー・ブランドでの商品探索",
        "en": "Product-name, category and brand navigation"
      },
      {
        "ja": "集計期間・カテゴリーを指定できるランキング",
        "en": "Rankings with period and category settings"
      },
      {
        "ja": "商品のお気に入りとマイブランドの導線",
        "en": "Item favorites and personal-brand controls"
      }
    ],
    "technologies": [
      {
        "name": "jQuery",
        "basis": "public",
        "evidence": "ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"
      },
      {
        "name": "Slick",
        "basis": "public",
        "evidence": "cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://fashionwalker.com/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "magaseek": {
    "id": "magaseek",
    "summary": {
      "ja": "レディース・メンズ・キッズ・スポーツをまとめたファッションEC。予約商品やクーポン対象商品を探せる導線、マイブランド、閲覧履歴、条件付きランキングを備えています。",
      "en": "A multi-category fashion store spanning women, men, children and sports. Public navigation highlights preorder and coupon-eligible products, while personal-brand controls, browsing history and configurable rankings help users narrow the catalog to their shopping interests."
    },
    "features": [
      {
        "ja": "予約商品・クーポン対象・セール別の商品導線",
        "en": "Navigation for preorder, coupon-eligible and sale items"
      },
      {
        "ja": "マイブランドと閲覧履歴の表示導線",
        "en": "Personal-brand and browsing-history controls"
      },
      {
        "ja": "期間や分類を切り替える商品ランキング",
        "en": "Product rankings with period and category settings"
      }
    ],
    "technologies": [
      {
        "name": "jQuery",
        "basis": "public",
        "evidence": "ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"
      },
      {
        "name": "Slick",
        "basis": "public",
        "evidence": "cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://www.magaseek.com/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "family-town": {
    "id": "family-town",
    "summary": {
      "ja": "不二家のグッズや菓子を販売する公式EC。ぬいぐるみ・生活雑貨・冷凍スイーツなどの商品分類、新商品とランキング、会員ページや買い物かごを備えています。",
      "en": "Fujiya’s official store groups character merchandise, confectionery and chilled or frozen products into distinct shopping categories. New-product and ranking sections complement member access and cart controls, with public guidance covering delivery and shopping conditions."
    },
    "features": [
      {
        "ja": "グッズ・菓子・冷凍スイーツの商品分類",
        "en": "Separate merchandise, confectionery and frozen-dessert categories"
      },
      {
        "ja": "新商品と売れ筋ランキングの表示",
        "en": "New-arrival and popular-product sections"
      },
      {
        "ja": "会員ページ・買い物かご・配送案内",
        "en": "Member access, shopping cart and delivery guidance"
      }
    ],
    "technologies": [
      {
        "name": "MakeShop",
        "basis": "public",
        "evidence": "gigaplus.makeshop.jpのストア資産"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://www.family-town.jp/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "vivum-sallier": {
    "id": "vivum-sallier",
    "summary": {
      "ja": "ヘアサロンとフェイシャルスパの紹介に、ケア商品のECを組み合わせたサイト。メニュー・プロフィールから外部のSquare予約へ案内し、商品購入や記事閲覧へつなぎます。",
      "en": "A hair-salon and facial-spa website combined with a care-product store. Service and profile information route visitors to an external Square appointment page, while product listings, cart access and journal content support a separate shopping journey."
    },
    "features": [
      {
        "ja": "ヘア・スパのメニューと担当者紹介",
        "en": "Hair and spa service menus with practitioner profiles"
      },
      {
        "ja": "Squareの外部予約ページへの導線",
        "en": "Link to an external Square appointment page"
      },
      {
        "ja": "ケア商品の一覧・カートとジャーナル",
        "en": "Care-product listings, cart access and journal content"
      }
    ],
    "technologies": [
      {
        "name": "カラーミーショップ",
        "basis": "public",
        "evidence": "img21.shop-pro.jpのテーマ資産とshop-pro.jp内の商品・コンテンツ導線"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://vivum-sallier.com/",
        "note": "EUC-JPを正しく復号した公開HTMLの本文とリンクを確認。"
      },
      {
        "url": "https://book.squareup.com/appointments/ptdjn1y7twc8gp/location/LJB3A8YC4635J/services",
        "note": "トップのReserveリンク先。外部予約へのリンクを確認し、独自予約システムやAPI連携とは表現しない。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "tachibana": {
    "id": "tachibana",
    "summary": {
      "ja": "警察実務・法律書の書籍EC。月刊誌・単行本・電子書籍を分け、分野別分類とキーワード検索、新刊・ランキングから目的の本を探せる構成です。文字サイズの変更も備えています。",
      "en": "A specialist publishing store separating magazines, printed books and digital editions. Subject categories, keyword search, new releases and rankings guide readers to relevant titles, while text-size controls and cart totals support catalog browsing and purchasing."
    },
    "features": [
      {
        "ja": "法分野・書籍形式別のカタログと検索",
        "en": "Catalog browsing by legal subject and publication format"
      },
      {
        "ja": "新刊・ランキング・定期購読への導線",
        "en": "New releases, rankings and subscription information"
      },
      {
        "ja": "文字サイズ変更と冊数・金額のカート表示",
        "en": "Text-size controls and cart quantity/total display"
      }
    ],
    "technologies": [
      {
        "name": "EC-CUBE",
        "basis": "public",
        "evidence": "eccube.jsおよびEC-CUBEの公開フロントエンド識別子"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://tachibanashobo.co.jp/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "setoguchi": {
    "id": "setoguchi",
    "summary": {
      "ja": "精肉の用途・部位・重量から商品を選べるギフトEC。商品詳細で包装・熨斗・名入れ・紙袋を選択でき、複数のお届け先設定や冷凍配送の案内へつなぎます。",
      "en": "A meat and gift storefront organized by cooking use, cut and weight. Product pages expose wrapping, gift-label, name and bag options, with guidance for multiple delivery addresses and frozen shipping to support detailed gift orders."
    },
    "features": [
      {
        "ja": "料理用途・部位・重量別の商品分類",
        "en": "Product categories by cooking use, cut and weight"
      },
      {
        "ja": "包装・熨斗・名入れ・紙袋の指定",
        "en": "Wrapping, gift-label, recipient-name and bag options"
      },
      {
        "ja": "複数配送先設定と冷凍配送の案内",
        "en": "Guidance for multiple delivery addresses and frozen shipping"
      }
    ],
    "technologies": [
      {
        "name": "EC-CUBE",
        "basis": "public",
        "evidence": "eccube.jsおよびEC-CUBEの公開フロントエンド識別子"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://setoguchiseinikuten.co.jp/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      },
      {
        "url": "https://setoguchiseinikuten.co.jp/products/detail/9",
        "note": "商品フォームで包装、熨斗表書き、名入れ、紙袋、数量を確認。複数配送先設定の説明リンクも掲載。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "koredake": {
    "id": "koredake",
    "summary": {
      "ja": "プロテインの形状・栄養成分・原材料を比較しながら選べるブランドEC。大袋と個包装の商品導線に、栄養量の図表、原材料表示、FAQと会員ログインを組み合わせています。",
      "en": "A protein brand storefront that presents pack formats, nutrient information and ingredients together. Separate powder and shake-pack routes, nutritional charts, ingredient references, FAQs and account access help visitors evaluate products before moving into the store."
    },
    "features": [
      {
        "ja": "大袋パウダー・個包装タイプの商品導線",
        "en": "Separate routes for powder bags and individual shake packs"
      },
      {
        "ja": "栄養成分の図表と原材料の詳細表示",
        "en": "Nutrition charts and detailed ingredient references"
      },
      {
        "ja": "FAQ・会員ログイン・問い合わせへの導線",
        "en": "FAQ, account-login and enquiry routes"
      }
    ],
    "technologies": [
      {
        "name": "ecforce",
        "basis": "owner",
        "evidence": "ポートフォリオ所有者が提供した制作実績の分類。現在の公開ソースで同基盤を確認できたという意味ではない。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://koredake.co.jp/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      },
      {
        "url": "https://koredake.co.jp/shop/products",
        "note": "POWDER/SHAKE PACKの商品形状別導線。基盤名は本人申告のみ。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "upt": {
    "id": "upt",
    "summary": {
      "ja": "コスメ・スキンケアを商品種別とキーワードで探せるECサイト。単品・セット・定期コースを区別し、商品紹介から会員ページ、カート、取扱店舗の案内へつなぎます。",
      "en": "A cosmetics and skincare storefront with keyword and category search. Individual items, sets and subscription offers are clearly separated, with routes to product information, account access, cart controls and retail stockists supporting different purchasing needs."
    },
    "features": [
      {
        "ja": "キーワード・カテゴリーによる商品絞り込み",
        "en": "Product filtering by keyword and category"
      },
      {
        "ja": "単品・セット・定期コースの区分表示",
        "en": "Separate individual, set and subscription product sections"
      },
      {
        "ja": "会員ページ・カート・取扱店舗の案内",
        "en": "Account, cart and stockist information routes"
      }
    ],
    "technologies": [
      {
        "name": "ecforce",
        "basis": "public",
        "evidence": "ec-force.s3.amazonaws.comおよびec_forceテーマ資産"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://uptofficial.jp/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "kutoon": {
    "id": "kutoon",
    "summary": {
      "ja": "子ども靴レンタルの検索カタログ。メーカーと普段のサイズから中敷き寸法の目安を示し、サイズ・ブランド・色・状態・貸出可否で商品を絞り込める構成です。",
      "en": "A children’s shoe-rental catalog with a size-assistance interface based on the child’s existing shoe brand and size. Filters cover insole dimensions, brand, color, condition and rental availability, with product-level cart and availability controls."
    },
    "features": [
      {
        "ja": "メーカー・サイズから中敷き寸法を案内",
        "en": "Brand-and-size inputs for insole-size guidance"
      },
      {
        "ja": "サイズ・色・状態・ブランドの複合絞り込み",
        "en": "Combined size, color, condition and brand filters"
      },
      {
        "ja": "レンタル可能・貸出中の表示とカート導線",
        "en": "Available/on-loan labels and cart actions"
      }
    ],
    "technologies": [
      {
        "name": "WordPress",
        "basis": "public",
        "evidence": "wp-content / wp-includesの公開資産"
      },
      {
        "name": "WooCommerce",
        "basis": "public",
        "evidence": "wp-content/plugins/woocommerce/assets/ の公開スクリプト"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://kutoon.net/shop/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "japan-trend-shop": {
    "id": "japan-trend-shop",
    "summary": {
      "ja": "日本の商品を海外へ紹介する越境ECの記録画面。商品検索と用途別カテゴリー、言語・通貨の選択、商品カードからのカート追加を確認できます。現行サイトの動作は未確認です。",
      "en": "An archived view of an international store for Japanese goods shows product search, category navigation, language and currency selectors, and product-card cart buttons. The live site could not be inspected, so these describe the saved screen rather than current operation."
    },
    "features": [
      {
        "ja": "記録画面：商品検索とカテゴリー分類",
        "en": "Archived screen: product search and category navigation"
      },
      {
        "ja": "記録画面：言語・通貨セレクター",
        "en": "Archived screen: language and currency selectors"
      },
      {
        "ja": "記録画面：価格表示とカート追加ボタン",
        "en": "Archived screen: prices and add-to-cart buttons"
      }
    ],
    "technologies": [],
    "checkedAt": "2026-11-12",
    "status": "partial",
    "sources": [
      {
        "url": "https://www.japantrendshop.com/",
        "note": "現行ページはHTTP403で閲覧不可。"
      },
      {
        "url": "https://urlscan.io/result/01a032ae-748b-778b-af89-605875ab387a/",
        "note": "既存docs/project-sources.mdで出典確認した公開記録。保存画像を目視確認。撮影日不明。"
      }
    ],
    "limitations": "現行サイトはHTTP403で閲覧できず。public/images/projects/japan-trend-shop.pngの保存画面のみを分析。Globalは用途分類のため技術名として採用しない。",
    "availability": {
      "ja": "現在のページは取得できなかったため、保存した画面と提供資料をもとに紹介しています。",
      "en": "The current page could not be retrieved. This entry is based on the saved image and supplied information."
    }
  },
  "carjurajah": {
    "id": "carjurajah",
    "summary": {
      "ja": "複数店舗のスパメニューと料金を整理したサロンサイト。初回利用者向けの説明、店舗別キャンペーン、アクセス情報、テーマ別の美容コラムを一つの案内にまとめています。",
      "en": "A multi-location spa website organizing treatment menus and price lists alongside first-visit guidance. Location-specific campaigns, shop information and categorized beauty columns help visitors compare services and find the appropriate branch before making contact."
    },
    "features": [
      {
        "ja": "施術メニューと料金一覧の分離表示",
        "en": "Separate treatment catalog and price-list pages"
      },
      {
        "ja": "地域別店舗一覧と店舗別キャンペーン",
        "en": "Location listings and branch-specific campaigns"
      },
      {
        "ja": "初回利用ガイドとテーマ別コラム",
        "en": "First-visit guidance and topic-based editorial content"
      }
    ],
    "technologies": [
      {
        "name": "WordPress",
        "basis": "public",
        "evidence": "wp-content / wp-includesの公開テーマ・スクリプト"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://www.carjurajah.jp/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "kireisalone": {
    "id": "kireisalone",
    "summary": {
      "ja": "サロンの体験申込と無料カウンセリングを中心に構成したサイト。店舗と希望日時を選ぶ申込導線、施術コースの案内、各店舗の地図と連絡先をまとめています。",
      "en": "A salon website centered on trial visits and free consultations. Its public pages describe choosing a branch and preferred date for enquiries, with treatment-course information, location maps and contact details supporting the visit-planning process."
    },
    "features": [
      {
        "ja": "体験・無料カウンセリングへの申込導線",
        "en": "Routes to trial and free-consultation requests"
      },
      {
        "ja": "店舗・希望日時を指定する問い合わせ案内",
        "en": "Enquiry guidance for branch and preferred-date selection"
      },
      {
        "ja": "複数店舗のGoogleマップと連絡先",
        "en": "Google Maps embeds and contact information for each branch"
      }
    ],
    "technologies": [
      {
        "name": "jQuery",
        "basis": "public",
        "evidence": "公開HTMLがjquery.min.jsを読み込み"
      },
      {
        "name": "Swiper",
        "basis": "public",
        "evidence": "cdn.jsdelivr.net/npm/swiper@5.0.2/js/swiper.min.js"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://kireisalone.jp/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "studio-breath": {
    "id": "studio-breath",
    "summary": {
      "ja": "ヨガ・ピラティス・スタジオ貸出を分けて紹介する教室サイト。レッスン別の外部予約先、料金プラン、インストラクター情報、Instagram投稿をまとめて閲覧できます。",
      "en": "A studio website separating yoga, Pilates and studio-rental services. Service-specific links route to external booking providers, while pricing, instructor profiles and embedded Instagram content help visitors choose a class and understand the studio before booking."
    },
    "features": [
      {
        "ja": "レッスン種別に応じた外部予約への振り分け",
        "en": "Service-specific routing to external booking providers"
      },
      {
        "ja": "料金プランとインストラクター一覧",
        "en": "Pricing plans and instructor listings"
      },
      {
        "ja": "Instagram投稿とスタジオブログの掲載",
        "en": "Instagram content and studio blog publishing"
      }
    ],
    "technologies": [
      {
        "name": "WordPress",
        "basis": "public",
        "evidence": "wp-content / wp-includesの公開資産"
      },
      {
        "name": "SWELL",
        "basis": "public",
        "evidence": "wp-content/themes/swell/build/js/main.min.js"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://studiobreath.com/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "blackcat-pilates": {
    "id": "blackcat-pilates",
    "summary": {
      "ja": "少人数ピラティスのサービス・料金・体験案内を整理したサイト。店舗ごとの外部体験予約へ誘導し、初心者向けFAQやブログでレッスン前の疑問を解消する構成です。",
      "en": "A small-group Pilates website bringing service explanations, pricing and trial guidance together. Location-specific external trial links, beginner FAQs and regularly organized blog content help prospective participants understand the classes and prepare for a first visit."
    },
    "features": [
      {
        "ja": "店舗別の外部体験予約ページへの導線",
        "en": "Location-specific links to external trial booking"
      },
      {
        "ja": "料金プラン・初回利用ガイド・FAQ",
        "en": "Pricing, first-visit guidance and FAQs"
      },
      {
        "ja": "ピラティスのテーマ別ブログとお知らせ",
        "en": "Pilates-focused blog and news content"
      }
    ],
    "technologies": [
      {
        "name": "WordPress",
        "basis": "public",
        "evidence": "wp-content / wp-includesの公開資産"
      },
      {
        "name": "SWELL",
        "basis": "public",
        "evidence": "wp-content/themes/swell/build/css/main.css"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://blackcat-pilates.com/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "osaka-bc": {
    "id": "osaka-bc",
    "summary": {
      "ja": "複数院の美容診療を施術名や悩みから探せるクリニックサイト。施術詳細・料金・院情報を整理し、外部のWeb予約ページや問い合わせへ進める構成です。",
      "en": "A multi-clinic website organizing aesthetic treatments by procedure and visitor concern. Treatment information, price guidance and clinic details are linked with an external web-booking service and enquiry routes, helping visitors identify an appropriate consultation path."
    },
    "features": [
      {
        "ja": "施術・悩み別の診療メニューナビゲーション",
        "en": "Treatment navigation by procedure and visitor concern"
      },
      {
        "ja": "院別のアクセス・診療案内",
        "en": "Clinic-specific access and visit information"
      },
      {
        "ja": "外部Web予約と問い合わせへの導線",
        "en": "External web-booking and enquiry routes"
      }
    ],
    "technologies": [
      {
        "name": "WordPress",
        "basis": "public",
        "evidence": "wp-content / wp-includesの公開テーマ・スクリプト"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://osaka-bc.com/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "ttc": {
    "id": "ttc",
    "summary": {
      "ja": "美容外科の施術・料金・症例・医師を整理したサイト。部位別の施術分類、症例写真の詳細表示、料金表やキャンペーン情報を組み合わせ、相談前の比較を支えます。",
      "en": "A cosmetic-clinic website organizing procedures, prices, case photographs and doctor information. Body-area treatment categories, case-detail displays and campaign pages support comparison before consultation, with clearly separated information routes rather than a single undifferentiated service list."
    },
    "features": [
      {
        "ja": "部位・施術カテゴリー別のメニュー",
        "en": "Treatment menus grouped by body area and category"
      },
      {
        "ja": "症例写真の詳細表示と医師プロフィール",
        "en": "Case-photo detail displays and doctor profiles"
      },
      {
        "ja": "料金表・キャンペーン・相談導線",
        "en": "Price lists, campaigns and consultation routes"
      }
    ],
    "technologies": [
      {
        "name": "WordPress",
        "basis": "public",
        "evidence": "wp-content / wp-includesの公開テーマ・スクリプト"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://t-t-c.net/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "aloop": {
    "id": "aloop",
    "summary": {
      "ja": "肌の悩みから施術を探せるクリニックサイト。悩みタグによるメニュー分類と、施術ごとのプラン・料金表示を備え、外部の予約ページへ案内する構成です。",
      "en": "A dermatology-clinic website that organizes treatments around skin concerns. Concern tags, treatment-specific plan and price panels, doctor information and links to an external booking service connect information discovery with a suitable consultation route."
    },
    "features": [
      {
        "ja": "肌の悩みタグによる施術の分類",
        "en": "Treatment categories organized by skin-concern tags"
      },
      {
        "ja": "施術別のプラン・料金を開く詳細表示",
        "en": "Expandable treatment plan and price information"
      },
      {
        "ja": "施術から外部予約ページへの導線",
        "en": "Treatment-level links to an external booking page"
      }
    ],
    "technologies": [
      {
        "name": "WordPress",
        "basis": "public",
        "evidence": "wp-content / wp-includesの公開テーマ・スクリプト"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://aloop.clinic/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "hidaka-dental": {
    "id": "hidaka-dental",
    "summary": {
      "ja": "マウスピース矯正の検討に必要な情報を一ページに整理したLP。治療例の詳細展開、矯正方法の比較、流れ・費用を掲載し、初診予約や無料相談へ案内します。",
      "en": "A clear-aligner landing page that organizes treatment examples, comparison information, process and fees in a single journey. Expandable case details and repeated consultation links help visitors review the available information before opening the external first-visit booking route."
    },
    "features": [
      {
        "ja": "症例の詳細・費用・リスク情報の展開表示",
        "en": "Expandable case, cost and risk information"
      },
      {
        "ja": "矯正方法の比較と治療ステップの説明",
        "en": "Treatment-method comparison and process explanation"
      },
      {
        "ja": "初診Web予約と無料相談への導線",
        "en": "External first-visit booking and free-consultation routes"
      }
    ],
    "technologies": [
      {
        "name": "jQuery",
        "basis": "public",
        "evidence": "../common/js/jquery-3.5.1.min.js"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://www.hidaka-dental-clinic.com/lp/suresmile/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "takaya-dental": {
    "id": "takaya-dental",
    "summary": {
      "ja": "インプラントの治療方法・流れ・費用をまとめた専門LP。悩み別のページ内移動、治療選択肢の比較、医院情報を備え、Web予約と相談の導線へつなぎます。",
      "en": "An implant-dentistry landing page covering treatment options, process and costs. Concern-based in-page navigation and comparison content help readers locate relevant explanations, while clinic information and external booking links provide a clear route toward consultation."
    },
    "features": [
      {
        "ja": "悩み別の質問から該当説明へ移動",
        "en": "Concern-based links to relevant in-page explanations"
      },
      {
        "ja": "治療選択肢・工程・費用の整理",
        "en": "Structured treatment-option, process and cost information"
      },
      {
        "ja": "外部Web予約・電話・地図への導線",
        "en": "External booking, telephone and map links"
      }
    ],
    "technologies": [
      {
        "name": "jQuery",
        "basis": "public",
        "evidence": "../assets/js/jquery-3.7.1.min.js"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://takayadentalsonobe.com/lp/implant/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "fujisawa-dental": {
    "id": "fujisawa-dental",
    "summary": {
      "ja": "マウスピース矯正の特長・治療例・費用を集約した専門ページ。ページ内ナビゲーションで説明をたどり、症例や治療手順を確認して矯正相談へ進める構成です。",
      "en": "A clear-aligner treatment page combining procedure information, case examples and costs. In-page navigation guides visitors through the clinic’s approach and treatment steps, with consultation routes and clinic details placed alongside the information needed to prepare for an enquiry."
    },
    "features": [
      {
        "ja": "特長・費用・症例へ移動するページ内ナビ",
        "en": "In-page navigation to features, fees and cases"
      },
      {
        "ja": "症例写真・治療手順・料金の説明",
        "en": "Case photography, treatment steps and fee information"
      },
      {
        "ja": "矯正相談と医院アクセスへの導線",
        "en": "Consultation and clinic-access routes"
      }
    ],
    "technologies": [
      {
        "name": "WordPress",
        "basis": "public",
        "evidence": "wp-content / wp-includesの公開テーマ・スクリプト"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://www.fujisawa-kyouseishika.com/invisalign/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "shelikes": {
    "id": "shelikes",
    "summary": {
      "ja": "キャリアスクールのコース・料金・受講者事例を一つのLPにまとめたサイト。職種別のコース案内、プラン比較とFAQから、無料体験レッスンの申込へつなぎます。",
      "en": "A career-school landing page combining role-based course introductions, pricing plans and learner stories. Comparison content, support explanations and FAQs guide visitors toward repeated trial-lesson calls to action within a long-form page focused on course discovery."
    },
    "features": [
      {
        "ja": "職種別のコース紹介と学習サポート案内",
        "en": "Role-based course introductions and learning-support content"
      },
      {
        "ja": "料金プラン・他社比較・FAQの整理",
        "en": "Pricing-plan, comparison and FAQ sections"
      },
      {
        "ja": "ページ各所から無料体験へ進むCTA",
        "en": "Repeated calls to action for introductory lessons"
      }
    ],
    "technologies": [
      {
        "name": "STUDIO",
        "basis": "public",
        "evidence": "公開HTMLのmeta name=\"generator\" content=\"Studio.Design\""
      },
      {
        "name": "Nuxt",
        "basis": "public",
        "evidence": "公開HTMLに/_nuxt/資産と__NUXT__設定"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://shelikes.jp/landing_pages/jp_a/",
        "note": "公開HTMLと隔離ブラウザーの描画後DOMを確認。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "blue-square": {
    "id": "blue-square",
    "summary": {
      "ja": "三つのヴィラを写真と設備情報で比較できる宿泊サイト。客室ごとの空室確認導線、宿泊検索、アクセス・周辺案内・FAQを組み合わせ、滞在検討から予約へ案内します。",
      "en": "A villa website presenting three room types through photography and amenity information. Room-specific availability routes and an external accommodation-search widget sit alongside access guidance, nearby activities and FAQs to support stay planning before reservation."
    },
    "features": [
      {
        "ja": "三つのヴィラの写真・設備・備品比較",
        "en": "Photo, facility and amenity comparison across three villas"
      },
      {
        "ja": "外部予約サービスの宿泊検索ウィジェット",
        "en": "Accommodation-search widget from an external booking service"
      },
      {
        "ja": "周辺の過ごし方・アクセス・FAQ",
        "en": "Nearby activities, access information and FAQs"
      }
    ],
    "technologies": [
      {
        "name": "WordPress",
        "basis": "public",
        "evidence": "wp-content/themes/bluesquare/"
      },
      {
        "name": "Swiper",
        "basis": "public",
        "evidence": "wp-content/themes/bluesquare/assets/js/swiper-bundle.min.js"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://bluesquare-echizen.com/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "yroom": {
    "id": "yroom",
    "summary": {
      "ja": "複数施設の客室を、施設・利用シーン・大人と子どもの人数で絞り込めるホテルサイト。価格順の並べ替え、設備やチェックインの説明、施設別の外部予約導線を備えています。",
      "en": "An apartment-hotel website with room filters for property, trip purpose and adult/child counts. Price sorting, amenity details and check-in guidance complement property-specific external booking links, helping guests compare rooms and prepare for their stay."
    },
    "features": [
      {
        "ja": "施設・利用シーン・大人／子ども人数で客室検索",
        "en": "Room filters for property, trip purpose and adult/child counts"
      },
      {
        "ja": "価格順・施設順の並べ替えと客室詳細",
        "en": "Price/property sorting and room-detail pages"
      },
      {
        "ja": "Beds24の施設別予約ページへのリンク",
        "en": "Property-specific links to Beds24 booking pages"
      }
    ],
    "technologies": [
      {
        "name": "WordPress",
        "basis": "public",
        "evidence": "wp-content / wp-includesの公開テーマ・スクリプト"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://yroom.jp/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      },
      {
        "url": "https://yroom.jp/yourroom/",
        "note": "公開検索ページで施設・シーンの複数選択、大人/こども人数、低価格順/施設順、結果一覧を確認。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "oga-yamado": {
    "id": "oga-yamado",
    "summary": {
      "ja": "自然・料理・客室・温泉をテーマ別に紹介する宿泊サイト。写真中心の滞在案内からTriplaの予約ウィジェットへ進め、館内情報や地図、問い合わせを確認できます。",
      "en": "A resort website organizing the stay around nature, dining, rooms and hot springs. Photo-led content connects with a Tripla booking widget, facility information, maps and enquiry routes, enabling visitors to explore the property before starting a reservation."
    },
    "features": [
      {
        "ja": "自然・料理・客室・温泉のテーマ別紹介",
        "en": "Separate nature, dining, room and hot-spring sections"
      },
      {
        "ja": "Tripla予約ウィジェットへの導線",
        "en": "Route to the Tripla accommodation-booking widget"
      },
      {
        "ja": "館内案内・地図・FAQと問い合わせ",
        "en": "Facility guide, maps, FAQs and enquiry routes"
      }
    ],
    "technologies": [
      {
        "name": "jQuery",
        "basis": "public",
        "evidence": "https://code.jquery.com/jquery-3.7.1.min.js"
      },
      {
        "name": "Tripla",
        "basis": "public",
        "evidence": "https://tripla.jp/sdk/javascript/tripla.min.jsを読み込み、tripla_booking_widget_open=searchの予約リンク"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://oga.yamado.co.jp/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "yadoito": {
    "id": "yadoito",
    "summary": {
      "ja": "一棟貸しの宿を歴史・客室・食事から紹介するサイト。建物の物語と写真による案内を組み合わせ、空室検索・外部予約、アクセスやFAQへつなぐ構成です。",
      "en": "A private-villa website presenting the property through its history, rooms and dining. Illustrated storytelling and photography connect with availability search and external booking, while access details and FAQs provide practical support for planning the stay."
    },
    "features": [
      {
        "ja": "宿の歴史を伝えるイラストと写真の構成",
        "en": "Illustrated history and property photography"
      },
      {
        "ja": "客室・食事・アクセス・FAQの案内",
        "en": "Room, dining, access and FAQ information"
      },
      {
        "ja": "外部予約サービスへの空室検索リンク",
        "en": "Availability-search link to an external booking service"
      }
    ],
    "technologies": [
      {
        "name": "WordPress",
        "basis": "public",
        "evidence": "/wp/wp-content/themes/standard_sass/"
      },
      {
        "name": "GSAP",
        "basis": "public",
        "evidence": "/wp/wp-content/themes/standard_sass/js/gsap.min.js"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://yadoito.18rou.com/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "harvestclub": {
    "id": "harvestclub",
    "summary": {
      "ja": "会員制リゾートの施設選びと利用案内を統合したサイト。各ホテルの写真ギャラリー、会員権の説明、会員向けの空室照会・予約・マイページへの入口を整理しています。",
      "en": "A resort-membership website connecting destination discovery with member services. Hotel photo galleries and ownership information are separated from public entry points to availability checks, reservations and account access, helping visitors identify the appropriate information or member workflow."
    },
    "features": [
      {
        "ja": "全国の施設一覧と写真ギャラリー",
        "en": "Destination listings and hotel photo galleries"
      },
      {
        "ja": "会員権・入会手続き・施設利用の案内",
        "en": "Membership, joining and facility-use guidance"
      },
      {
        "ja": "空室照会・オンライン予約・会員ページへの入口",
        "en": "Entry points for availability, booking and member accounts"
      }
    ],
    "technologies": [
      {
        "name": "jQuery",
        "basis": "public",
        "evidence": "common/js/jquery-1.12.4.min.js"
      },
      {
        "name": "Modaal",
        "basis": "public",
        "evidence": "common/js/modaal/js/modaal.min.js"
      },
      {
        "name": "simpleParallax",
        "basis": "public",
        "evidence": "common/js/simpleParallax.min.js"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://www.harvestclub.com/",
        "note": "公開本文・ナビゲーション・リンク・HTML資産を確認。"
      }
    ],
    "limitations": "公開ページ上の機能・導線と取得可能なフロントエンドを確認。管理画面、決済完了処理、非公開API、本人の担当範囲は未確認。"
  },
  "flash-reserve": {
    "id": "flash-reserve",
    "summary": {
      "ja": "飲食店予約サイトの空席を検知し、LINE・メールで知らせる通知サービス。LINEログイン、通知対象店舗・料金プランの案内を備えています。",
      "en": "A restaurant availability notification service with LINE and email alerts, LINE sign-in, restaurant information and notification plans."
    },
    "features": [
      {
        "ja": "予約サイトの空席情報をLINE・メールで通知",
        "en": "Restaurant availability alerts through LINE and email"
      },
      {
        "ja": "LINEログインと通知プランの案内",
        "en": "LINE sign-in and notification plan information"
      },
      {
        "ja": "通知対象店舗・決済登録への導線",
        "en": "Routes to restaurant selection and payment registration"
      }
    ],
    "technologies": [
      {
        "name": "LINE",
        "basis": "public",
        "evidence": "公開画面にLINEログイン、LINEによる空席通知の案内。内部APIの実装は未確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://flash-reserve.com/ja/",
        "note": "公開ページでサービス説明、料金、対象店舗、登録の導線を確認。"
      }
    ],
    "limitations": "サイトの公開機能と、本人の保守・運用担当範囲は区別。フレームワークや決済基盤は非公開。"
  },
  "visual-anatomy": {
    "id": "visual-anatomy",
    "summary": {
      "ja": "解剖学コンテンツを会員向けに公開するWordPressサイト。ログイン、会員登録・更新案内、キーワード検索を備えています。",
      "en": "A WordPress anatomy resource with member-only content, sign-in, membership and renewal guidance, and keyword search."
    },
    "features": [
      {
        "ja": "会員ログインとコンテンツの閲覧制限",
        "en": "Member sign-in and restricted content access"
      },
      {
        "ja": "会員登録・有効期間の更新案内",
        "en": "Membership registration and renewal guidance"
      },
      {
        "ja": "キーワード検索・問い合わせへの導線",
        "en": "Keyword search and contact links"
      }
    ],
    "technologies": [
      {
        "name": "WordPress",
        "basis": "public",
        "evidence": "公開HTMLにwp-contentおよびwp-includesのアセットを確認。"
      },
      {
        "name": "Simple Membership",
        "basis": "public",
        "evidence": "公開HTMLに/plugins/simple-membership/の配信アセットを確認。"
      },
      {
        "name": "Contact Form 7",
        "basis": "public",
        "evidence": "公開HTMLに/plugins/contact-form-7/の配信アセットを確認。"
      }
    ],
    "checkedAt": "2026-11-12",
    "status": "verified",
    "sources": [
      {
        "url": "https://visual-anatomy-wp.com/",
        "note": "会員ログイン、会員登録・更新案内、検索フォーム、WordPress関連アセットを確認。"
      }
    ],
    "limitations": "本人の担当範囲は静的HTMLデータのWordPress移植。すべての既存プラグインの実装担当であるとは断定しない。"
  }
};
