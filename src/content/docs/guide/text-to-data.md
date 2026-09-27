---
title: 从文本到数据
description: 保存输入、原始回复与可复核的结构化结果
---

完整流程要保留三层材料：输入文本、模型原始回复、经过解析与复核的结果。只留下最终百分数，会让错误年份、误读限定词等问题无法追踪。

## 数据流

```text
报告文本 → 报告年份核对 → 模型候选 JSON → 字段校验 → 人工复核 → 分析表
```

案例的离线模式从固定回复读取候选结果；在线模式向已配置的服务请求候选。两种模式进入同一个校验器。程序把结果集中写入 `outputs/growth_target/`，原始回复与结构化结果分开存放。生成表不加入 SHA 列；如需文件校验信息，单独写清单。

## 如何处理一条回复

候选 JSON 应包含 `target_quote`、`target_expression`、`target_value`、`target_min`、`target_max`、`target_qualifier`、`status`。解析器先检查类型和允许值，再确认目标原句确实出现在输入文本里。原句匹配只是最低限度检查，不能证明模型选对了“当年目标”；仍需人工复核。

不要用正则表达式直接抓报告里第一个百分数。年度报告常包含上一年增速、财政收入和居民消费价格等多个百分数。也不要把解析失败或没有回复自动填成 0。

## 运行方式

```bash
export UV_PROJECT_ENVIRONMENT="$HOME/.venvs/EconLLM-Lab"
uv run python -m examples.growth_target.run --offline
```

检查输出中每一行的 `report_year`、原句和限定词，再阅读[评估提取质量](../evaluation/)。完整案例与文件说明见[经济增长目标案例](../../cases/growth-target/)。
