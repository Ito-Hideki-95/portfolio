# GitHubへのアップロードとVercelでの公開

このサイトは `D:\04 portfolio` にあるソースをGitHubに保存し、Vercelを連携して公開する構成です。初回連携後は、GitHubへのpushで自動デプロイできます。

このプロジェクトの保存先は **[Ito-Hideki-95/portfolio](https://github.com/Ito-Hideki-95/portfolio)**、ブランチは **main** です。リポジトリは作成済みで、ローカルの `origin` に設定しています。通常の更新では手順2・3の新規作成を繰り返す必要はありません。Vercelの初回設定は手順4、日常の更新は手順6を参照してください。

## このプロジェクトの公開先

- 公開URL：**https://emoto-negitoro-portfolio.vercel.app**
- Vercelプロジェクト：`ito-hideki-95-portfolio`
- GitHub連携：`Ito-Hideki-95/portfolio` の `main`
- 公開設定：`vercel.json`、配信するソースの除外設定：`.vercelignore`

新しい公開URLは既存プロジェクトの本番ドメインとして割り当てています。GitHubへの更新はこのURLにも反映されます。個人名は表示しません。

Vercelのプロジェクト作成とGitHub連携は完了しています。以降の通常更新では手順4の初回設定を繰り返す必要はありません。手順6のcommit / pushで更新します。

公開名とお問い合わせ先は `src/content.mjs` で設定できます。現在は `indexable: false` のため検索エンジンへの登録を抑止していますが、上記URLを知っている方はログインなしで閲覧できます。

## 1. ローカルで内容を確認する

```powershell
cd "D:\04 portfolio"
npm.cmd run dev
```

<http://localhost:3000> を開きます。画面の表示、文章、スマートフォンのレイアウト、サービスの絞り込み、相談文の作成を確認します。保存するとブラウザが自動更新されます。

公開前に `src/content.mjs` の `brandName`、`contactUrl`、`contactLabel` を実際の情報へ変更します。`siteUrl` はVercelの初回デプロイ後に設定できます。

## 2. 自分のGitHubにリポジトリを作る

1. [GitHubの新規リポジトリ画面](https://github.com/new) を開きます。
2. Ownerでご自身のアカウントを選び、Repository nameに `portfolio` などを入力します。
3. ソースを非公開にする場合は **Private** を選びます。サイト自体の公開とは別の設定です。
4. 最初はREADME、.gitignore、Licenseを自動追加せず、空のリポジトリを作成します。
5. 表示されたHTTPSのリポジトリURLを控えます。

GitHubのCLI操作は [GitHub公式手順](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github) も参照できます。

## 3. ソースをアップロードする

以下の `あなたのGitHub名`、メールアドレス、URLを、ご自身のものに置き換えます。メールはGitHubで確認済みのアドレス、またはGitHubのSettings → Emailsで表示されるnoreplyアドレスを使用してください。

```powershell
cd "D:\04 portfolio"
git init -b main
git config user.name "あなたのGitHub名"
git config user.email "GitHubで確認済みのメールアドレス"
git status
git add .
git commit -m "Build developer portfolio"
git remote add origin https://github.com/あなたのGitHub名/portfolio.git
git push -u origin main
```

既に初期化済みなら `git init` は不要です。`origin` が既にある場合は `git remote -v` でURLを確認し、同じURLなら追加を省略します。別のURLなら、意図する保存先を確認してから `git remote set-url origin 正しいURL` で変更します。

認証画面が表示されたら、ご自身のGitHubアカウントでログインします。パスワードやアクセストークンを、このリポジトリやチャットに貼り付ける必要はありません。

Git操作に慣れていない場合は [GitHub Desktop](https://desktop.github.com/) でも同じ操作ができます。ローカルリポジトリを追加し、Commit、Publish repositoryまたはPush originを実行します。

## 4. 自分のVercelへデプロイする

1. [Vercelの新規プロジェクト画面](https://vercel.com/new) に、ご自身のアカウントでログインします。
2. GitHubを連携し、手順2で作ったリポジトリへのアクセスを許可します。
3. 対象の `Ito-Hideki-95/portfolio` を **Import** します。
4. 公開先のアカウント／チームを確認し、下記の設定で **Deploy** を実行します。

| 項目 | このプロジェクトの値 |
| --- | --- |
| Framework Preset | Other |
| Root Directory | リポジトリ直下（通常は `./`） |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | デフォルトのまま |
| Node.js | Vercelが提供する22以上の対応バージョン |
| Environment Variables | 不要 |

設定値は `vercel.json` に用意しています。[ビルド設定の公式説明](https://vercel.com/docs/builds/configure-a-build) では、公開対象はOutput Directory内の生成物です。

デプロイが **Ready** になると `https://プロジェクト名.vercel.app` などのURLが発行されます。このURLを実際に開いて確認します。ログイン画面が表示される場合は、Vercel側のDeployment Protectionと共有対象を確認します。

受託開発サービスの案内として運用するため、Vercelのプランは商用利用に適したものを確認してください。公式の [Hobbyプラン説明](https://vercel.com/docs/plans/hobby) では非商用の個人利用に制限されています。このサイトの営業用途を踏まえると、Proなどの利用条件を確認するのが適切です。

## 5. 公開URL・検索設定を仕上げる

1. `src/content.mjs` の `siteUrl` に、実際に発行された本番URLを設定します。
2. 表示名、連絡先、実績の公開範囲、文章を確認します。
3. 検索エンジンに公開する段階で `indexable: true` に変更します。
4. `npm.cmd run check` と `npm.cmd run build` を実行します。
5. commit / pushします。

```powershell
git add src/content.mjs
git commit -m "Set public profile and production URL"
git push
```

このフォルダでは `main` と `origin/main` を連携して使用します。GitHubにアップロードされている内容は [リポジトリ](https://github.com/Ito-Hideki-95/portfolio) で確認できます。別のPCでも編集する場合は、作業前に `git pull --ff-only` で更新を取り込みます。

独自ドメインを使う場合は、Vercelの対象プロジェクトのSettings → Domainsで追加し、表示されるDNS設定をドメイン管理会社で行います。設定後、`siteUrl` も独自ドメインへ更新します。

## 6. 以降の更新と確認

```powershell
# 変更を確認してから公開
npm.cmd run check
npm.cmd run build
git diff
git add .
git commit -m "Update portfolio content"
git push
```

VercelのGit連携では、通常、Production Branch（この構成では `main`）へのpushが本番の更新になり、それ以外のブランチへのpushやPull RequestではPreview Deploymentを利用できます。[VercelのGitHub連携](https://vercel.com/docs/git/vercel-for-github)

公開前に別URLで変更を確認したい場合：

```powershell
git switch -c update/portfolio-copy
# 文章・画像を変更し、ローカルで確認
git add .
git commit -m "Preview portfolio updates"
git push -u origin update/portfolio-copy
```

GitHubでPull Requestを作り、Vercelが表示するPreview URLを確認します。問題がなければ `main` へマージすると本番が更新されます。

**保存だけで更新されるのはローカル画面です。公開サイトの更新はGitHubへのpushがきっかけです。**

## 自動デプロイが動かないとき

- VercelのSettings → Gitで、正しいGitHubリポジトリが接続されているか確認します。
- Production Branchが `main` か確認します。
- `git status` と `git log -1` で、変更がcommitされ、GitHubまでpushされたか確認します。
- VercelのDeploymentsで直近のコミットとエラーを確認します。
- ビルド失敗ならBuild Logsを確認します。ローカルの `npm.cmd run build` でも再現するか試します。
- GitHubの連携権限やコミット作成者のVercelプロジェクトへのアクセスも確認します。

初回連携が済んだら、リポジトリURLと公開URLを共有いただくと、その構成に合わせて次の修正とデプロイ確認を進められます。
