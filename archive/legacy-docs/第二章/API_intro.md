# API概述

本章将带你系统了解API的基本概念、主流大语言模型（LLM）平台API Key的获取与管理方法、以及Token计费的基本原理和实际开发中的注意事项。

> **【插图建议】**
> - 可在章节开头插入一张“API连接用户与LLM模型的桥梁”示意图。
> - 图片样式建议：简洁线条风格，左侧为“用户/应用”，右侧为“LLM模型”，中间为“API”桥梁。

## 1. 什么是API？为什么需要通过API与LLM交互？

API（Application Programming Interface，应用程序编程接口）是一组预先定义好的接口，允许不同的软件系统之间进行通信。API的本质是“桥梁”，它让开发者无需了解底层实现细节，就能调用强大的服务。

![](../figures/api_bridge.png)
<div style="text-align:center;font-size:0.95em;color:#888;">图1：API作为用户与LLM模型之间的桥梁</div>

对于大语言模型（LLM），API是我们与模型进行交互的主要方式。通过API，开发者可以：

- 远程调用LLM，发送文本、获取模型生成的回复，实现自动问答、文本生成、摘要、翻译等多种功能；
- 将LLM能力集成到自己的应用、网站、数据分析流程或自动化脚本中，提升产品智能化水平；
- 灵活选择不同的模型、参数和功能，快速试错和创新。


直接通过API与LLM交互，能够极大提升开发效率，避免重复造轮子，是现代AI应用开发的主流方式。

## 2. 主流LLM平台API Key获取方法 & openrouter中转平台介绍


> **【插图建议】**
> - 插入一张“主流平台API Key获取流程”流程图。
> - 图片样式建议：竖向流程图，依次为“注册账号→API管理→生成Key→安全保存→代码配置”。

大多数LLM平台（如OpenAI、百度文心一言、智谱AI、阿里通义千问等）都采用API Key（访问密钥）作为身份认证和计费依据。API Key相当于你的“通行证”，每个Key都与个人账户绑定，具有唯一性和保密性。

**API Key获取与管理流程（以OpenAI为例）：**

1. 注册并登录平台账号（如 https://platform.openai.com/ ）。
2. 进入“API管理”或“密钥管理”页面，点击“Create new secret key”生成新的API Key。
3. 妥善保存API Key（通常只显示一次），切勿泄露给他人。
4. 在代码、命令行工具或第三方应用中配置API Key，建议使用环境变量或配置文件管理，避免硬编码。
5. 定期检查和更新API Key，若发现泄露风险应立即作废并重新生成。

**其他平台（如百度、智谱、阿里）流程类似，具体界面略有差异，均可在官方文档中找到详细指引。**

> **安全提示：** API Key一旦泄露，可能导致账户被盗刷，务必妥善保管，不要在公开仓库、论坛等场合暴露。

### openrouter中转平台简介与优势

**openrouter** 是一个聚合中转平台，支持多家主流LLM厂商的API。它的主要优势包括：

- **一站式接入**：用一个API Key即可访问OpenAI、Anthropic、Google、百度等多家模型，无需分别注册和管理多个Key；
- **统一计费与管理**：所有调用统一计费，便于成本核算和用量统计；
- **灵活切换模型**：开发者可在同一接口下快速切换不同厂商和模型，便于横向对比和A/B测试；
- **开发体验友好**：支持多种编程语言SDK，文档完善，适合教学和原型开发。

**openrouter API Key获取方法**：
1. 访问 https://openrouter.ai/ 注册账号；
2. 登录后在“API Keys”页面生成新的Key；
3. 按照官方文档配置Key，即可调用多家模型。

![](../figures/openrouter_overview.png)
<div style="text-align:center;font-size:0.95em;color:#888;">图2：openrouter平台聚合多家主流LLM模型</div>

> **应用场景举例：**
> - 教学演示时，快速切换不同模型对比效果；
> - 企业或团队统一管理API调用和费用；
> - 个人开发者无需多平台注册，降低试错成本。

## 3. Token计费原理


> **【插图建议】**
> - 插入一张“Token计费原理”示意图。
> - 图片样式建议：左侧为“输入文本”，中间为“Token分解”，右侧为“输出文本”，下方标注“Token总数=输入+输出”。

大多数LLM平台采用“Token计费”模式。Token可以理解为模型处理的最小文本单元（通常是一个词或部分词，英文中约4个字符为1个Token，中文约1-2字为1个Token）。

**计费流程如下：**

1. 你发送的内容（Prompt）会被分解为若干Token，称为“输入Token”；
2. 模型生成的回复同样会被分解为“输出Token”；
3. 平台统计本次请求的总Token数：

   总Token数 = 输入Token数 + 输出Token数

4. 按照不同模型的Token单价（如每1000 Token 0.01美元）进行计费。

**举例说明：**


![](../figures/token_example.png)
<div style="text-align:center;font-size:0.95em;color:#888;">图3：Token计费流程举例</div>

**注意事项与建议：**

- 不同平台、不同模型的Token计价标准不同，建议查阅官方文档及时了解价格变动；
- 可以使用官方或第三方工具（如OpenAI Tokenizer、tiktoken库等）预估Token数量，便于成本控制；
- 精简输入内容、合理设置回复长度，有助于节省Token和费用；
- 对于大批量调用或企业应用，建议设置用量上限和监控，防止意外消耗。

> **延伸阅读：**

> - [OpenAI官方Token计费说明](https://platform.openai.com/tokenizer)

> - [tiktoken库使用方法](https://github.com/openai/tiktoken)

