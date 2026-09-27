# EconLLM-Lab

网站：[zhiyulu.org/EconLLM-Lab](https://zhiyulu.org/EconLLM-Lab/)。站点根地址会直接跳转到[前言](https://zhiyulu.org/EconLLM-Lab/preface/)。

目前公开原前言 `src/content/docs/preface.md` 和新前言提纲 `src/content/docs/main-thesis.md`。第零章至第三章尚未建立正文页；后续由作者重写后逐篇加入 `src/content/docs/` 和 `astro.config.mjs` 的侧边栏。

## 本地预览

需要 Node.js 24+：

```bash
npm ci
npm run dev
npm run check
npm run build
```

站点使用 Astro 和 Starlight；提交到 `main` 后由 `.github/workflows/pages.yml` 发布到 GitHub Pages。`dist/` 是构建结果，不入库。

`archive/lectures/` 保存原有课堂资料，不参与网站构建。旧站正文已从当前分支移除，必要时可从 `backup/pre-astro-main` 标签查阅。

项目作者编写内容按 [MIT 许可证](LICENSE)使用；历史目录中的第三方资料遵循其原许可。
