---
title: 配置环境
description: 为教程准备终端、Git、Python 和项目虚拟环境
---

本章的目标是能够在克隆仓库后运行离线案例。所有命令都从仓库根目录执行。

## 1. 获取项目

```bash
git clone https://github.com/luzhiyu-econ/EconLLM-Lab.git
cd EconLLM-Lab
```

运行 `git status`，应看到当前分支与工作区状态。初次学习不需要修改历史课程资料；新教程在 `src/content/docs/`，示例在 `examples/`。

## 2. 检查工具

```bash
git --version
uv --version
uv python list --only-installed
```

示例要求 Python 3.11 或更新版本，并使用 `uv` 管理项目环境。没有安装 `uv` 时，先依照 [uv 官方安装说明](https://docs.astral.sh/uv/getting-started/installation/)安装。不要在仓库目录内创建 `.venv`。

## 3. 在本地磁盘创建环境

仓库可能位于网络文件系统，因此虚拟环境放在本地 SSD。项目 `.envrc` 已记录位置；未启用 direnv 时，先在当前终端执行：

```bash
export UV_PROJECT_ENVIRONMENT="$HOME/.venvs/EconLLM-Lab"
uv sync
uv run python -m examples.growth_target.run --offline
```

最后一条命令应提示“4/5 行与人工标准完全一致”，并在 `outputs/growth_target/results.csv` 生成 5 行结果。若 `uv` 报 Python 版本不符，先安装兼容的 Python，再运行 `uv sync`。

## 4. 本地预览网站（可选）

要编辑教程页面，另需 Node.js 24 或更新版本：运行 `npm ci`、`npm run dev`。提交前运行 `npm run check` 和 `npm run build`。生成的 `dist/` 不入库。
