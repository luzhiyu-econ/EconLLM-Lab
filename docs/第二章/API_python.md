# 第一次调用API

本章将详细介绍如何使用Python进行LLM API调用，从最基础的单次调用到实际的经济学应用案例，帮助经济学研究者快速上手API编程。

## 1. 环境准备与依赖安装

### 1.1 Python环境要求
- Python 3.8+版本
- 推荐使用虚拟环境管理依赖

### 1.2 必要库安装
```bash
pip install openai requests pandas python-dotenv
```

### 1.3 API密钥管理
- 创建`.env`文件存储API密钥
- 使用环境变量保护敏感信息
- 密钥安全存储最佳实践

## 2. 第一个API调用示例

### 2.1 OpenAI API基础调用
```python
from openai import OpenAI
import os
from dotenv import load_dotenv

# 加载环境变量
load_dotenv()

# 初始化客户端
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# 基础对话
response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "你是一个经济学专家助手"},
        {"role": "user", "content": "解释什么是通胀"}
    ]
)

print(response.choices[0].message.content)
```

### 2.2 参数详解
- `model`: 模型选择策略
- `messages`: 对话历史结构
- `temperature`: 创造性控制
- `max_tokens`: 输出长度限制
- `top_p`: 核采样参数

### 2.3 错误处理
- 网络异常处理
- API限制错误
- 费用控制机制

## 3. 国内LLM平台接入

### 3.1 百度文心一言API
```python
import requests

def call_ernie_api(prompt):
    # API调用示例代码
    pass
```

### 3.2 智谱AI（ChatGLM）
```python
from zhipuai import ZhipuAI

def call_chatglm_api(prompt):
    # API调用示例代码
    pass
```

### 3.3 阿里通义千问
```python
def call_qwen_api(prompt):
    # API调用示例代码
    pass
```

### 3.4 DeepSeek API
基于现有notebook示例的详细解释

## 4. 经济学应用场景

### 4.1 文本摘要
- 经济政策文件摘要
- 研究论文摘要生成
- 新闻事件提取

### 4.2 情感分析
- 财经新闻情感判断
- 投资者评论分析
- 政策文本态度分析

### 4.3 分类任务
- 经济指标分类
- 行业类别识别
- 风险等级评估

### 4.4 信息提取
- 结构化数据提取
- 关键指标识别
- 实体关系抽取

## 5. 实际案例：政府工作报告分析

### 5.1 任务目标
从政府工作报告中提取经济增长目标

### 5.2 提示词设计
```python
prompt_template = """
从政府工作报告文本中识别该市当年经济增长目标，并将其以规范的JSON格式输出。

# 输出格式
{
  "economic_growth_goal": "[百分比]"
}

# 文本内容
{text}
"""
```

### 5.3 批量处理准备
- 数据预处理
- 结果验证机制
- 错误记录与重试

## 6. 响应处理与解析

### 6.1 JSON响应解析
```python
import json

def parse_llm_response(response_text):
    try:
        # 清理响应文本
        cleaned = response_text.replace('```json', '').replace('```', '').strip()
        result = json.loads(cleaned)
        return result
    except json.JSONDecodeError as e:
        print(f"JSON解析错误: {e}")
        return None
```

### 6.2 结果验证
- 输出格式检查
- 数据合理性验证
- 异常值处理

### 6.3 结果存储
- CSV格式保存
- 数据库存储
- 中间结果缓存

## 7. 成本控制与优化

### 7.1 Token使用优化
- 提示词长度控制
- 响应长度限制
- 模型选择策略

### 7.2 费用监控
- API调用计数
- 成本预算设置
- 使用量报告

### 7.3 缓存机制
- 重复请求避免
- 结果缓存策略
- 本地存储优化

## 8. 调试与测试

### 8.1 日志记录
```python
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def log_api_call(prompt, response):
    logger.info(f"API调用 - Prompt长度: {len(prompt)}, 响应长度: {len(response)}")
```

### 8.2 单元测试
- API调用测试
- 响应解析测试
- 边界条件测试

### 8.3 性能监控
- 响应时间统计
- 成功率监控
- 错误类型分析

## 9. 最佳实践总结

### 9.1 代码组织
- 模块化设计
- 配置文件管理
- 错误处理统一

### 9.2 安全考虑
- API密钥保护
- 输入验证
- 输出过滤

### 9.3 可维护性
- 代码注释
- 文档更新
- 版本管理

## 10. 练习作业

### 10.1 基础练习
1. 完成第一个API调用
2. 实现简单的文本分类
3. 设计经济学相关的提示词

### 10.2 进阶练习
1. 集成多个LLM平台
2. 实现结果对比分析
3. 构建简单的评估指标

## 本章小结

通过本章学习，你应该能够：
1. 独立完成各主流LLM平台的API调用
2. 设计适合经济学研究的提示词
3. 处理和解析API响应结果
4. 实施基本的成本控制和错误处理

> **下一步**: 学习多线程方法加速API调用，提高数据处理效率