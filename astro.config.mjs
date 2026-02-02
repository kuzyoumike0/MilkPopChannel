import { defineConfig } from "astro/config";

export default defineConfig({
  // ✅ GitHub Pages 用の基本設定
  // - site: 自分の GitHub Pages ドメインに書き換える（例: https://xxx.github.io）
  // - base: 本番(ビルド)時だけ「/リポジトリ名/」にする（ローカルは / でOK）
  //   ※ actions で GITHUB_REPOSITORY (= owner/repo) が入る
  site: process.env.SITE_URL ?? "https://YOUR_GITHUB_NAME.github.io",
  base:
    process.env.NODE_ENV === "production" && process.env.GITHUB_REPOSITORY
      ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}/`
      : "/",
});
