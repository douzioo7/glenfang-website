# 豆子的空间小站

基于 Astro 的静态个人内容站，内容以 Markdown 保存在 `src/content/`。

## 版权与联系

原创程序代码、样式、配置、脚本和技术文档使用 [MIT](./LICENSE)。
文章、原创图片、个人文案、Logo、图标和站点名称不包含在 MIT 授权内，
详见 [内容授权边界](./CONTENT_LICENSE.md) 及网站 `/copyright/` 页面。
复用代码时请替换个人信息和身份素材。

作者：豆子；公开邮箱：glenfangoo7@gmail.com；GitHub：https://github.com/douzioo7。
网站联系方式统一维护在 `src/config/site.ts`。

## 内容发现与 SEO

- `/archive/`：按年份倒序展示三个栏目的全部已发布文章。
- `/rss.xml`：全站摘要订阅，包含标题、摘要、日期、分类与原文链接。
- `/sitemap-index.xml`：构建时自动生成的站点地图入口。
- `/robots.txt`：允许抓取并提供站点地图地址。
- `/404.html`：自定义错误页面，设置 `noindex`；服务器配置见 DEPLOYMENT.md。

归档、RSS 和文章路由共用草稿过滤逻辑。公开仓库中的草稿源码仍然公开，
`draft: true` 不应被当作保密措施。
生产域名统一读取 `src/config/site.ts` 的 `site.url`，也用于 Astro 配置、
canonical、分享元数据、RSS 和站点地图。HTML 页面统一使用尾部斜杠。
文章使用 BlogPosting 结构化数据及真实发布日期；没有封面时不生成虚构分享图。

## 发布文章

在 `src/content/reading`、`cooking` 或 `notes` 下新增 `.md` 文件，并使用以下元数据：

```yaml
---
title: "文章标题"
description: "用于列表和搜索摘要的简短介绍。"
pubDate: 2026-08-28
cover: "/images/example.jpg" # 可选
coverAlt: "封面说明" # 可选
tags: ["标签一", "标签二"]
draft: false
---
```

`draft: true` 的文章不会出现在首页、栏目列表或生产构建结果中。图片放在 `public/images/`，再以 `/images/文件名` 引用。

## 本地开发

```sh
npm run dev
npm run astro -- check
npm run build
```

站点、作者介绍、公开联系方式和评论开关统一维护在 `src/config/site.ts`。评论默认连接 `https://comments.glenfang.cc`，无需在服务器额外设置构建变量；可通过 `PUBLIC_TWIKOO_ENV_ID` 覆盖地址。设置 `site.comments.enabled` 为 `false` 可关闭评论入口。参见 `.env.example` 和 [DEPLOYMENT.md](./DEPLOYMENT.md)。
