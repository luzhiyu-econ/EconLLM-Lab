---
title: Git 速查
description: 完成本教程所需的最少 Git 操作
---

Git 用来记录教程文字、代码和人工校验标准如何变化。首次学习只需要克隆、查看状态、在新分支提交。旧站的长篇 Git 教程完整保存在 `archive/legacy-docs/第一章/`，这里保留日常会用到的命令。

## 获取与查看

```bash
git clone https://github.com/luzhiyu-econ/EconLLM-Lab.git
cd EconLLM-Lab
git status
git log --oneline -5
```

`git status` 告诉你哪些文件已修改、哪些还没有纳入版本控制。修改页面前运行一次，提交前再运行一次。

## 在分支上修改

```bash
git switch -c docs/improve-api
git diff -- src/content/docs/guide/api.md
git add src/content/docs/guide/api.md
git commit -m "docs: clarify API example"
```

提交信息与代码文件名使用英文。推送后通过 Pull Request 让构建与链接检查运行。不要把 `.env`、API 密钥、`node_modules/`、虚拟环境或生成的 `outputs/` 加进提交。

## 常见问题

- **`git status` 显示意外文件**：先确认来源，再决定忽略、归档或提交，不要用清理命令盲删。
- **无法推送**：先检查当前分支、远端权限和是否落后于远端；保留自己未提交的工作。
- **改错文件**：使用 `git diff` 查看差异。撤销前确认该文件没有要保留的内容。

更完整的概念和命令见 [Git 官方文档](https://git-scm.com/doc)。
