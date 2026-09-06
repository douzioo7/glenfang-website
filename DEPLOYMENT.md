# 部署说明

## 主站

本站是静态 Astro 站点。现有 GitHub Actions 在 main 分支推送后调用 VPS 的 `/opt/docker/website/deploy.sh`。本地检查构建使用：

```sh
npm ci
npm run build
```

生产站点使用 Docker Nginx，静态文件挂载目录为 `/opt/docker/website/html`，通过 Nginx Proxy Manager 和 Cloudflare Tunnel 对外提供访问。

## Twikoo 评论

1. 为 `comments.glenfang.cc` 配置 DNS 和 HTTPS 反向代理。
2. 在 VPS 上安装与前端脚本相同版本的 Twikoo 服务端（当前为 `1.7.20`）。默认内置 LokiJS 数据库的数据目录必须挂载到持久化磁盘并定期备份；如有 MongoDB，可设置 `MONGODB_URI` 使用外部数据库。
3. 容器内监听 8080，通过 Docker 内网由 Nginx Proxy Manager 代理，不映射宿主机端口；在 Twikoo 管理面板中设置允许的来源为 `https://glenfang.cc`。
4. 主站的 `src/config/site.ts` 已默认启用评论并指向 `https://comments.glenfang.cc`，提交代码后沿用现有自动部署流程重新构建。`PUBLIC_TWIKOO_ENV_ID` 仅用于可选覆盖地址，空值使用项目默认地址。

现有 Docker 部署配置保存在 `deploy/twikoo/docker-compose.yml`，在 VPS `/opt/docker/twikoo` 下运行，加入外部网络 `npm_network`，不映射宿主机端口。Nginx Proxy Manager 将评论域名转发至 `http://twikoo:8080`，Tunnel 将该域名转发至 `http://localhost:8080`。数据挂载为 `/opt/docker/twikoo/data:/app/data`。

上线后需通过文章评论框的管理入口完成管理员初始化及审核配置；前端开关不代替服务端审核规则。第一版要求昵称必填、邮箱选填、先审核后公开，关闭图片上传和邮件通知。完成配置后再验收访客留言、审核、回复、删除和容器重启后的数据保留。

请同时升级前端和服务端 Twikoo 版本，以避免协议不兼容。详细参数见 [Twikoo 私有部署文档](https://twikoo.js.org/backend.html)。

## 发布前检查

```sh
npm run astro -- check
npm run build
```
