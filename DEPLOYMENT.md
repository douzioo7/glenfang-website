# 部署说明

## 主站

本站是静态 Astro 站点。将 `glenfang.cc` 的 DNS 指向 VPS 后，在服务器上执行：

```sh
npm ci
npm run build
```

把生成的 `dist/` 目录配置为 Nginx 的站点根目录。更新内容时，拉取最新 Git 提交后重新构建并替换 `dist/`。

## Twikoo 评论

1. 为 `comments.glenfang.cc` 配置 DNS 和 HTTPS 反向代理。
2. 在 VPS 上安装与前端脚本相同版本的 Twikoo 服务端（当前为 `1.7.20`）。默认内置 LokiJS 数据库的数据目录必须挂载到持久化磁盘并定期备份；如有 MongoDB，可设置 `MONGODB_URI` 使用外部数据库。
3. 让服务仅监听本机地址，再由 Nginx 代理到它；在 Twikoo 管理面板中设置允许的来源为 `https://glenfang.cc`。
4. 在主站部署环境设置 `PUBLIC_TWIKOO_ENV_ID=https://comments.glenfang.cc`，然后重新构建网站。

请同时升级前端和服务端 Twikoo 版本，以避免协议不兼容。详细参数见 [Twikoo 私有部署文档](https://twikoo.js.org/backend.html)。

## 发布前检查

```sh
npm run astro -- check
npm run build
```
