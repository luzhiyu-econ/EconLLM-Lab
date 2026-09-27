---
title: 调用 API
description: 理解请求、密钥和一次在线调用的完整路径
---

API 让本地程序把输入文本发送给远端模型，并取回回复。与网页聊天不同，研究脚本需要自己记录输入、模型、时间和原始输出，否则很难解释后续数据从何而来。

## 一次请求包含什么

在本书示例中，请求包含模型名、系统说明和一段政府工作报告文本；回复是 JSON，其中可能包含文本、用量信息或错误。不同服务的字段与费用会变化，运行前应查阅所选服务的官方文档。

```text
本地文本 → 请求体 → API 服务 → 原始回复 → 解析与复核
```

`examples/growth_target/run.py` 使用常见的 `/chat/completions` 形式。只有所选服务明确支持该格式时才能直接运行在线模式；否则应按该服务文档改写请求适配层，并保留后续解析和复核步骤。

## 配置在线调用

```bash
export LLM_BASE_URL="https://YOUR_PROVIDER_API_BASE/v1"
export LLM_MODEL="YOUR_MODEL_ID"
export LLM_API_KEY="YOUR_PRIVATE_KEY"
uv run python -m examples.growth_target.run --online
```

三个变量缺一不可。`LLM_BASE_URL` 应指向你信任的服务地址，程序会在末尾追加 `/chat/completions`。不要把密钥写入脚本、笔记本、截图或 Git 提交；不要把完整报告发往未经许可的服务。

## 费用与失败

API 通常按照输入和输出用量计费，价格与模型能力会调整。先运行离线模式核对输入，再用少量样本测试在线模式。超时、限流、余额不足或服务格式改变都会导致调用失败；程序会留下失败记录，不会把失败当作“报告没有目标”。

下一步先[定义提取任务](../task-definition/)，再决定如何让模型返回可核验的字段。
