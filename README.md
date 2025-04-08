# react-github3

SPA ではないマルチページの React-Router v7 (旧 Remix)を
GitHub Pages に出すテスト。

**現在失敗中**

SPA は簡単なんだけど。

マルチページは
`http://<FQDN>/` に出すのは何の問題もないけど
`http://<FQDN>/<repository name>` に出すのが難しい

使えそうなツールは

- Vite の base:
- react-router.config.ts の basename:

basename は `build/client/<basename>` の下にページを作ってくれるが、assets や public は build/client/に出る。

base は

`
