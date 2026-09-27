# EconLLM-Lab

面向经济学研究者的 LLM 实操教程。正式网站：[zhiyulu.org/EconLLM-Lab](https://zhiyulu.org/EconLLM-Lab/)；[前言](https://zhiyulu.org/EconLLM-Lab/preface/)保留原站全文。

## 网站

站点使用 Astro + Starlight，发布到 GitHub Pages。需要 Node.js 24+。

```bash
npm ci
npm run dev
npm run check
npm run build
npm run check:links
```

`src/content/docs/` 是发布正文，`src/components/` 和 `src/styles/` 是界面，`public/` 是静态资源。`dist/` 为构建输出，不入库。提交到 `main` 后由 GitHub Actions 构建发布。

## 可运行案例

案例使用 Python 3.11+ 标准库。项目虚拟环境必须放在本地 SSD；没有 direnv 时手动设置环境变量：

```bash
export UV_PROJECT_ENVIRONMENT="$HOME/.venvs/EconLLM-Lab"
uv sync
uv run python -m examples.growth_target.run --offline
uv run python -m unittest discover tests
```

在线调用还需 `LLM_BASE_URL`、`LLM_MODEL`、`LLM_API_KEY`。先阅读网站的 API 章节；不要把密钥写入仓库。示例输出集中在 `outputs/growth_target/`，并被 Git 忽略。

## 目录与更新

- `src/content/docs/`：当前可发布的教程。新章节须有可运行示例、预期结果与核验说明。
- `examples/growth_target/`：短节选、人工标准、模拟回复和运行脚本。
- `archive/`：旧站与课程资料，见 [历史资料索引](archive/README.md)。历史材料不参与站点构建。
- `.github/workflows/`：PR 检查和 `main` 发布。

编辑流程：创建分支 → 修改正文或案例 → 运行检查 → 提交 Pull Request → 合并到 `main` → 核验线上页面。未完成的主题先写入路线图，不建立空白导航页。

项目作者编写内容按 [MIT 许可证](LICENSE)使用；历史目录中的第三方资料遵循其原许可。
