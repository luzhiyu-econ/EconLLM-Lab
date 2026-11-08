---
title: AI Agent 的配置与使用
description: 收录 AI Agent 官方安装教程，并介绍科研任务中的环境准备、AGENTS.md、Skills 与上下文构建。
---

## 一、官方安装教程

安装、登录和模型接入，可以直接参照各工具的官方教程。这里集中列出入口，方便查找。

| Agent | 官方安装与入门教程 |
| --- | --- |
| Codex | [CLI 安装与启动](https://learn.chatgpt.com/docs/codex/cli)；[桌面端入门](https://learn.chatgpt.com/docs/quickstart) |
| Claude Code | [安装与首次使用](https://code.claude.com/docs/en/quickstart) |
| OpenCode | [安装与模型连接](https://opencode.ai/docs/) |
| DeepSeek Harness | [官方中文说明：安装与运行](https://github.com/deepseek-ai/deepseek-harness/blob/master/README.zh.md) |
| Kimi Code | [安装与首次使用](https://www.kimi.com/code/docs/en/kimi-code-cli/guides/getting-started.html) |
| Gemini CLI | [安装教程](https://geminicli.com/docs/get-started/installation/) |
| Qwen Code | [官方安装与快速开始](https://github.com/QwenLM/qwen-code#installation) |
| GitHub Copilot CLI | [安装与认证](https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli) |
| Cline | [安装教程](https://docs.cline.bot/getting-started/installing-cline) |
| Aider | [安装教程](https://aider.chat/docs/install.html) |

## 二、科研任务中的使用建议

### 先准备任务真正需要的运行环境

安装好 Agent，只是让执行框架能够运行。要进行其他正式处理工作，仍然需要相应的软件、依赖包和数据；要排版论文，仍然需要编译器、字体和文档类。开始较长的任务前，应当先检查并准备这些条件，避免程序写到一半，才发现实际运行的环境还没有配好。

### 通用的 Skill 尽量集中维护

跨项目使用的 Skill 尽量放在全局目录下，集中维护。文献检索、跑回归、画图、Word 排版这些能力，经常会在不同项目中用到。集中维护，修改一次就能继续复用；如果每个项目都复制一份，后来很难确定哪些副本也需要同步修改。项目特有的材料和约定，则留在项目目录中。

### 项目说明 AGENTS.md 要保持简洁

这里的项目说明指项目中的 `AGENTS.md` 文件，用于记录项目目标、主要文件入口、运行方式和长期约定。

如果每次任务遇到特殊情况，都向 `AGENTS.md` 追加要求，长期约定和临时细节就容易混在一起。文件越来越长，当前真正重要的要求反而容易被淹没。因此，应当保留核心信息，具体材料和实现细节留在原文件中，让 Agent 根据任务读取；已经过时的临时要求则及时清理。

### 先写清规范，再考虑做成 Skill

遇到固定工作流，可以先把约定写进 `AGENTS.md`，观察 Agent 能否完成。如果同一类任务仍然反复出错，或者每次都需要重新交代相同的步骤，再把这些做法整理成 Skill。不必一开始就为所有任务设计一套复杂规则。

Skill 也要有清楚的职责。文献检索、回归分析、绘图和文档排版，可以分别整理，再按任务组合。把“完成整篇论文”塞进一个很长的 Skill，容易混杂不同环节的要求；机械地为每一章都建一份，也未必有用。更值得积累的是跨项目复用的底层做法。

### Plan first：先构建上下文，再安排工作

复杂任务开始前，需要先构建上下文：明确研究目标和本次任务，提供相关材料与文件入口，说明已有结果、当前进度、约束条件和预期产出，再让 Agent 按需读取材料、检查数据和程序。在这些信息的基础上形成执行计划。

例如，要补充一张图，需要先交代图要回答的问题、沿用的样本和变量定义，再让 Agent 读取已有结果与绘图程序，确认输入和输出位置，随后安排修改、运行和核对的步骤。

### 提前配置例行操作的权限和完成提醒

对已经明确交给 Agent 的工作，可以提前配好常用操作的权限，减少读取文件、运行程序时的反复中断。再加上完成提示音或桌面通知，同时处理几项任务时，就不用不断切换窗口查看进度。遇到需要补充信息的情况，也可以让它及时提醒。
