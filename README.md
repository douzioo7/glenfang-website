# 豆子的空间小站

基于 Astro 的静态个人内容站，内容以 Markdown 保存在 `src/content/`。

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
