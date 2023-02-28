# APIドキュメント自動生成システム

このGitHub Actionsのワークフローは、[**Docusaurus**](https://docusaurus.io)のプロジェクトの自動ビルド・デプロイを行うものです。このワークフローを使用することで、[**Docusaurus**](https://docusaurus.io)のサイトを簡単かつ迅速に公開することができます。

## 導入方法

このリポジトリのワークフローを使用するには、以下の手順に従ってください。

1. `release.yml`ファイルをリポジトリにダウンロードする
  * 以下のURLにアクセスし、リポジトリ内の`release.yml`ファイルを開く: [https://github.com/Mf-3d/example-repo-A/blob/main/.github/workflows/release.yml](https://github.com/Mf-3d/example-repo-A/blob/main/.github/workflows/release.yml)
  * 「Raw」ボタンをクリックして、`release.yml`ファイルの生のテキストを表示する。
  * テキストをコピーし、お使いのリポジトリに新しいファイルとして貼り付ける。ファイル名は`release.yml`とし、`.github/workflows`に配置する。

2. Workflow permissionsを設定する
  * リポジトリのページで「Settings」をクリックする。
  * 「Workflow permissions」で、許可するワークフローを「read and write」に変更する。

3. ドキュメント用のリポジトリの作成
  * ドキュメント用のリポジトリを作成し、Docusaurusサイトのプロジェクトを配置する。
  * 例えば、以下のような手順で作成できる。
    * GitHubの「New Repository」をクリックして、新しいリポジトリを作成する。
    * ドキュメント用のリポジトリをローカルにクローンする。
    * Docusaurusサイトのプロジェクトを作成する。
    * ドキュメント用のリポジトリをGitHubにプッシュする。

4. `release.yml`ファイルの編集
  * `release.yml`ファイルをエディタで開く。
  * 以下の箇所を編集する。
    * `Mf-3d`となっている箇所を、ご自身のユーザーネーム（または組織の名前）に変更する。
    * `example-repo-A`となっている箇所を、`release.yml`の置いてあるリポジトリの名前に変更する。
    * `example-repo-B`となっている箇所を、ドキュメント用のリポジトリの名前に変更する。
    * コミットメッセージの内容を必要に応じて変更する。
    
5. コミットとプッシュ
  * 変更をコミットする。
  * 例えば、以下のようにコマンドを実行する。
    * git add .
    * git commit -m "add: release workflow"
    * git push

これで、release.ymlの置いてあるリポジトリに新しいバージョンがリリースされると、 Docusaurusサイトのビルドが自動的にトリガされ、ドキュメント用のリポジトリのビルドファイルがrelease.ymlの置いてあるリポジトリの/docsフォルダにコピー（なければ作成）されます。

## 注意事項
* `release.yml`のreleaseトリガーは、**正式バージョンがリリースされた場合にのみ**動作します。
* このワークフローを使用するには、[**Docusaurus v2**](https://v2.docusaurus.io/)が必要です。