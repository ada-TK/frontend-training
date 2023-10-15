# Terms Agreement Web Portal

## 前提条件

- APIクライアントの実装はAPIスキーマ(yamlファイル)から[openapi-generator-cli](https://github.com/OpenAPITools/openapi-generator-cli)を使って自動生成します
  - 自動生成されるソースコードはyamlファイルとの乖離を防ぐため構成管理対象から外します
  - そのためCIなどで静的コード解析・テストを実施する時は事前に自動生成スクリプトを実行しておきます

## 必要なツール

- [Java | Amazon Corretto 17](https://docs.aws.amazon.com/corretto/latest/corretto-17-ug/downloads-list.html)
  - [openapi-generator](https://github.com/OpenAPITools/openapi-generator#13---download-jar)はJavaが必要なので
- [VSCode](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/ja/download/)
  - LTS推奨版、**14.17.0 以上、15 未満をインストールしてください**
- [Chrome](https://www.google.com/chrome/)
- [React Developer Tools - Chrome Web Store](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
  - ブラウザでReactのデバッグを簡単にするエクステンションです
- [git](https://git-scm.com/download/win)

## Getting Started

### 1. リポジトリのクローン

```bash
git clone https://gitlab.com/tance-co-ltd/tp/tp-front-terms-agreement-web-portal.git
cd tp-front-terms-agreement-web-portal
```

### 2. ライブラリのインストール

**npm i は禁止です。必ず ci してください。**

```bash
npm ci
```

### 3. API コール部分の自動生成

- プロジェクトのルートフォルダに`schema.yaml`という名前でスキーマ定義を配置してください。

  - `schema.yaml.sample`は、`schema.yaml`のサンプルです。これを使って後続手順「バックエンドAPI接続先の設定」を実施してもコンパイルエラーになるので必ず本リポジトリに対応するスキーマ定義を配置してください

- 以下を実行して`src/api-client`配下にAPIコールのソースコードを自動生成します

```bash
npm run gen-client
```

### 4. バックエンド API 接続先の設定

- `.env.sample`ファイルを`.env`にリネームします

```bash
copy /-Y .env.sample .env
```

- `.env`を編集します。`REACT_APP_BASE_URL`にバックエンドAPIのベースURL、APIキーを指定します

```diff
- REACT_APP_BASE_URL=http://127.0.0.1:3100
+ REACT_APP_BASE_URL=your-backend-base-url
- REACT_APP_API_KEY=API_KEY
+ REACT_APP_API_KEY=your-backend-api-key
```

### 5. モック API の起動

- 「バックエンドAPI接続先の設定」にてモックAPIを指定した場合は以下を実行してモックAPIサーバを起動します
  - コマンドを実行する代わりに[Stoplight Studio](https://stoplight.io/studio/)を使えば、[schema.yaml](./schema.yaml)を開いて簡単に起動できます

```bash
npm run e2e:run-mock
```

### 6. アプリの起動

- 以下を実行してアプリを起動します

```bash
npm start
```

- [http://localhost:3000](http://localhost:3000)をブラウザで開きます

## ローカル開発環境でのユニットテスト、モジュール間結合テスト

- 以下を実行してください。

```bash
npm run test:unit
```

- 上記コマンドは一度きりの実行ですがファイルの変更をWatchするのであれば以下を実行してください。
使い方の詳細は[Running Tests | Create React App](https://create-react-app.dev/docs/running-tests/#command-line-interface)を参照してください。

```bash
npm test
```
