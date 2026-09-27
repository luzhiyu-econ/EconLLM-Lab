---
title: 经济增长目标案例
description: 上海市 2019—2023 年政府工作报告的小型可复现示例
---

案例提取的是**报告当年提出的全市 GDP 增长目标**。每年一行，保留原句、原始候选回复和人工核对标准。输入仅使用目标附近的短节选；这是一份教学数据，不代表对完整报告的自动化处理效果。

## 数据来源与历史语料问题

五个节选逐一对照上海市人民政府发布的 [2019](https://www.shanghai.gov.cn/nw12336/20200813/0001-12336_1362001.html)、[2020](https://www.shanghai.gov.cn/nw12336/20200813/0001-12336_1423630.html)、[2021](https://www.shanghai.gov.cn/nw12336/20210201/ca9e963912cc4c30be7b63799374cd86.html)、[2022](https://www.shanghai.gov.cn/nw12336/20220125/c1905a92364e418f96bb785c5ce97f5e.html) 和 [2023](https://www.shanghai.gov.cn/nw12336/20230117/b511b08dd4e54a13bc592fed41ce2510.html) 年报告。2019 年目标是区间，不能取中点。

历史课程目录中标为 2020 年的文本重复了旧报告内容，标为“上海市 2022 年”的文件实际是区级报告；它们留作历史材料，不进入本案例的标准样本。详细记录见仓库 `archive/README.md`。

## 运行

```bash
export UV_PROJECT_ENVIRONMENT="$HOME/.venvs/EconLLM-Lab"
uv sync
uv run python -m examples.growth_target.run --offline
```

离线模式读取**模拟候选回复**，不调用模型，因此其准确率只是练习数据的结果。输出集中在 `outputs/growth_target/`：`raw_responses.jsonl` 保存候选，`results.csv` 保存解析结果，`comparison.csv` 对照人工标准，`summary.json` 记录分母与正确数。

在线模式需配置 API 的三个环境变量，命令见[调用 API](../../guide/api/)。在线回复会被校验并和同一人工标准比较；失败行保留错误状态，不会静默删除。发布正式研究结果前，还要用完整文本和独立抽样复核重新评估。

## 应该看到什么

人工标准为：2019 年 `6%–6.5%`，2020 年 `6%左右`，2021 年 `6%以上`，2022 年 `5.5%左右`，2023 年 `5.5%以上`。离线模拟候选特意把 2021 年数值写错；比较表应标出这一行。这个错误说明仅保留原句并不能替代数值核对。
