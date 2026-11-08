---
title: Agent框架与原理
description: 从零构建 AI Agent 的教程、框架与工作机制
---

这里收录从零实现 AI Agent、解释运行机制与组织工作流程的学习资源。希望看清工具、提示词和代码怎样连接，可以先阅读逐步实现的教程，再结合系统课程和应用案例扩展。

## 从零实现

[learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) 从一个模型调用循环和命令工具开始，逐步加入工具分发、Hooks、任务规划、子 Agent、Skills、上下文压缩、记忆、MCP 和工作流。每课配有原理说明与可运行的 Python 代码，并提供中文版本。当前正式目录为根目录下的 s01—s17；docs 和 agents 目录保留旧版 12 课，阅读时应区分版本。

初次阅读可以从 [Agent Loop](https://github.com/shareAI-lab/learn-claude-code/blob/main/s01_agent_loop/README.zh.md) 和 [Tool Use](https://github.com/shareAI-lab/learn-claude-code/blob/main/s02_tool_use/README.zh.md) 入手，观察模型请求、工具执行和结果回传怎样构成循环，再阅读 [Skill Loading](https://github.com/shareAI-lab/learn-claude-code/blob/main/s07_skill_loading/README.zh.md) 与 [Workflow Runtime](https://github.com/shareAI-lab/learn-claude-code/blob/main/s16_workflow_runtime/README.zh.md)，理解按需加载说明与固定流程编排的分工。

[How to Build a Coding Agent](https://github.com/ghuntley/how-to-build-a-coding-agent) 使用 Go，从基本聊天开始，依次增加文件读取、目录浏览、命令执行、文件编辑和代码搜索。适合对照不同版本，检查每增加一种能力，工具定义、执行函数和消息处理分别发生了什么变化。

## 系统课程与案例

[Hello-Agents：从零开始构建智能体](https://github.com/datawhalechina/hello-agents) 是 Datawhale 的中文教程，涵盖 ReAct、规划与反思、自建 Agent 框架、记忆与检索、上下文工程、通信协议和性能评估，并提供配套代码与综合案例。理解最小循环之后，可以重点阅读第四章“智能体经典范式构建”、第七章“构建你的 Agent 框架”，再扩展到记忆、上下文与评估。

[AI Agents for Beginners](https://github.com/microsoft/ai-agents-for-beginners) 由 Microsoft 维护，围绕工具使用、检索、规划、多 Agent、记忆和部署等主题组织课程，配有文字、视频和 Python 示例。课程偏向结合框架构建应用，适合在理解基本机制后比较不同设计模式。

[Hugging Face Agents Course](https://github.com/huggingface/agents-course) 从 Agent 与工具调用的基础讲起，继续介绍 smolagents、LangGraph 和 LlamaIndex 等框架，并安排应用练习与评测任务。适合将运行原理与框架中的实际接口对应起来。课程正文可在其[在线课程](https://huggingface.co/learn/agents-course)阅读。

[GenAI Agents](https://github.com/NirDiamant/GenAI_Agents) 收录多种 Agent 教程与实现案例，涉及工具调用、规划、反思、记忆、检索、评估和多 Agent 协作。适合围绕具体问题查找示例，结合每个案例的依赖和实现方式阅读。

*资料核验于 2026 年 11 月 8 日。*
