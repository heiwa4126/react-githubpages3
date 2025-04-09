# react-github3

SPA ではないマルチページの React-Router v7 (旧 Remix)を
GitHub Pages に出すテスト。

**失敗中**  
↓  
サブディレクトリに出すのは諦めた。[カスタムドメイン](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
を使ってみる。  
↓  
**とりあえずカスタムドメインで出来たのでよしとする**。GitHub Actions もすいぶんシンプルになった。

## 苦闘メモ

サブディレクトリに出すのが難しい。
SPA だと簡単なんだけど。マルチページはちょっと。

マルチページは
`http://<FQDN>/` に出すのは何の問題もないけど
`http://<FQDN>/<repository name>` に出すのが難しい

使えそうなツールは

- Vite の base:
- react-router.config.ts の basename:
- HTML に`<base href=>`

basename は `build/client/<basename>` の下にページを作ってくれるが、assets や public は build/client/に出る。

`<Link>`や`<NavLink>`がめんどくさすぎる。
