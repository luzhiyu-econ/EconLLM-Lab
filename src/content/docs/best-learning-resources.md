---
title: Best Learning Resources
description: 与经济学研究相关的大语言模型教程、官方文档和提示工程研究
---

这里收录与本书相关的教程、官方文档和研究文献。初学时可以从完整课程入手，遇到具体问题再查阅文档；研究论文则有助于理解方法的依据和适用范围。

## 综合资源

[OpenAI Cookbook](https://developers.openai.com/cookbook) 收录了模型调用、信息抽取、检索、工具使用和评估等实践案例。多数案例附有代码，适合结合自己的任务阅读，也可以作为编写程序时的参考。

[Claude Cookbooks](https://github.com/anthropics/claude-cookbooks) 提供了分类、摘要、检索和工具调用等示例。使用时可以先选择与研究任务接近的案例，再参照当前文档调整模型与接口。

模型更新后，指令遵循、推理设置和接口行为也可能改变。OpenAI 的[当前模型指南](https://developers.openai.com/api/docs/guides/latest-model) 持续更新这些说明，适合在开始使用或更换模型时查阅。需要将结果写入数据表时，可以进一步阅读其[结构化输出文档](https://developers.openai.com/api/docs/guides/structured-outputs)，了解如何约束输出字段与类型。格式符合要求之后，仍需另行核对内容是否正确。

评价模型表现，需要先说明什么样的结果算作正确。OpenAI 的[评估指南](https://developers.openai.com/api/docs/guides/evaluation-best-practices) 和 Anthropic 的[成功标准与评估设计](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests) 介绍了测试样本、评价标准与迭代方法。对于文本分类和信息抽取，可以据此建立一组有人工判断依据的样本，分别检查标签、字段和原文证据，比较提示修改前后的结果。

当任务涉及多次模型调用，如何组织信息便成为一个独立的问题。Anthropic 的 [Effective Context Engineering for AI Agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) 讨论了指令、工具、检索结果和历史信息的安排，适合在构建复杂工作流时阅读。其 [Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents) 则介绍提示链、任务路由和评价改进等常见组织方式，可以帮助判断一个任务应当如何拆分。

## Prompt Engineering

[OpenAI 的提示工程指南](https://developers.openai.com/api/docs/guides/prompt-engineering) 从指令、示例和上下文出发，介绍提示的基本组织方式，也说明了模型版本和评估在提示迭代中的作用。使用推理模型时，还应参照其[推理模型指南](https://developers.openai.com/api/docs/guides/reasoning-best-practices)：早期教程中的一些做法，例如要求模型逐步思考，并不适用于所有模型。

Anthropic 的[提示工程文档](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview) 提供了学习入口，其[当前最佳实践](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices) 集中讨论清楚的指令、示例、内容分隔、长文本和复杂任务。文档会随模型更新，实际使用时应以所用模型对应的说明为准。

[Anthropic 的交互课程](https://github.com/anthropics/prompt-eng-interactive-tutorial) 适合按顺序学习。九章内容从基本结构讲起，逐渐进入角色、示例、输出格式、幻觉控制和复杂任务，每章配有练习，也提供[表格练习版](https://docs.google.com/spreadsheets/d/19jzLgRruG9kjUQNKtCg1ZjdD6l6weA6qRXG5zLIAhC8/edit)。课程基于 Claude 3，涉及具体模型行为的部分，应结合当前最佳实践阅读。

[ChatGPT Prompt Engineering for Developers](https://www.deeplearning.ai/courses/chatgpt-prompt-eng) 由 OpenAI 的 Isa Fulford 与 DeepLearning.AI 的 Andrew Ng 授课，通过代码示例讲解提示迭代、摘要、分类、文本转换和聊天机器人。课程于 2023 年推出，适合有基本 Python 经验的读者入门；运行示例时，需要核对当前模型与接口。

[DAIR 的提示工程指南](https://www.promptingguide.ai/zh) 提供了较完整的方法索引，覆盖少样本提示、思维链、自一致性、提示链、检索和自动提示优化，也提供[英文版本](https://www.promptingguide.ai/)。适合在掌握基础之后按问题查阅，再沿页面引用阅读相关论文。

Google 的 [Prompt Engineering](https://www.kaggle.com/whitepaper-prompt-engineering) 白皮书由 Lee Boonstra 撰写，讨论模型配置、提示技术和实践中的常见问题，主要面向通过接口使用模型的读者。[Learn Prompting](https://learnprompting.org/docs/introduction) 则从基础概念讲起，逐渐扩展到应用、可靠性、工具和提示攻击，适合希望循序学习的读者。

进一步了解学术研究，可以先读两篇综述。Liu 等人的研究从预训练模型如何通过提示适应任务出发，整理模板、预测映射与调优策略；Schulhoff 等人的 The Prompt Report 则建立了提示技术的分类，覆盖文本及其他模态，并讨论相关实验与实践建议。前者有助于理解提示学习的早期框架，后者适合用作研究文献的入口。[Liu 等，2021 预印本：Pre-train, Prompt, and Predict: A Systematic Survey of Prompting Methods in Natural Language Processing](https://arxiv.org/abs/2107.13586)；[Schulhoff 等，2024 预印本，2025 修订：The Prompt Report: A Systematic Survey of Prompt Engineering Techniques](https://arxiv.org/abs/2406.06608)。

上下文示例为何能够帮助模型执行任务，是这类研究的一个起点。Brown 等人的 GPT-3 研究展示了在不更新模型参数的情况下，通过少量示例完成多种任务的能力。Min 等人进一步考察示例中哪些信息起作用，发现在所测试的一些分类和选择题任务中，标签空间、输入分布和整体格式具有重要影响。这一发现来自特定实验，并不意味着实际标注可以忽略示例的正确性。[Brown 等，NeurIPS 2020：Language Models are Few-Shot Learners](https://papers.nips.cc/paper/2020/hash/1457c0d6bfcb4967418bfb8ac142f64a-Abstract.html)；[Min 等，EMNLP 2022：Rethinking the Role of Demonstrations: What Makes In-Context Learning Work?](https://aclanthology.org/2022.emnlp-main.759/)。

关于推理，Wei 等人研究了在示例中加入中间步骤的思维链提示；Kojima 等人则考察没有示例时，简单的逐步思考指令能否改善结果。两项研究都在当时的模型与任务上取得了收益。Wang 等人的自一致性方法进一步采样多条推理路径，再聚合答案，以更多推理开销换取部分任务上的准确率提升。阅读这些论文时，需要区分早期提示实验与今天已经接受推理训练的模型。[Wei 等，NeurIPS 2022：Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://proceedings.neurips.cc/paper/2022/hash/9d5609613524ecf4f15af0f7b31abca4-Abstract-Conference.html)；[Kojima 等，NeurIPS 2022：Large Language Models are Zero-Shot Reasoners](https://proceedings.neurips.cc/paper/2022/hash/8bb0d291acd4acf06ef112099c16f326-Abstract-Conference.html)；[Wang 等，ICLR 2023：Self-Consistency Improves Chain of Thought Reasoning in Language Models](https://arxiv.org/abs/2203.11171)。

推理也可以与外部行动结合。Yao 等人的 ReAct 交替组织推理、工具调用和环境反馈，让模型在执行任务的过程中获取新信息。这项研究有助于理解搜索、检索和工具使用为何需要成为工作流的一部分，以及后续步骤如何依据返回结果调整。[Yao 等，ICLR 2023：ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629)。

提示的设计还可以交给模型协助完成。Zhou 等人的 APE 生成候选指令，并按任务得分选择；Pryzant 等人的 ProTeGi 根据错误样本形成自然语言反馈，再修改提示并搜索更好的版本。两者都把提示优化建立在可比较的任务表现上，适合在已有标注样本时研究。优化所用样本与最终评价样本应分开，才能检验改进是否适用于新材料。[Zhou 等，ICLR 2023：Large Language Models Are Human-Level Prompt Engineers](https://arxiv.org/abs/2211.01910)；[Pryzant 等，EMNLP 2023：Automatic Prompt Optimization with “Gradient Descent” and Beam Search](https://aclanthology.org/2023.emnlp-main.494/)。

当一个任务由多个模型调用组成时，优化对象也会扩展到整个流程。Khattab 等人的 DSPy 将任务写成模块，并依据样本与评价指标优化指令、示例和调用流程。Agrawal 等人的 GEPA 则分析运行轨迹，通过反思、修改和比较候选提示积累有效经验。论文中的性能比较限于各自的实验条件，具体使用时仍需在目标任务上验证。[Khattab 等，ICLR 2024：DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines](https://arxiv.org/abs/2310.03714)；[Agrawal 等，ICLR 2026：GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning](https://arxiv.org/abs/2507.19457)。

如何保存和更新任务经验，是另一条相关方向。ACE 将上下文视作可以逐步积累与整理的任务记录，研究反复改写时的信息丢失，以及如何依据执行反馈更新指令和经验。它与前面的上下文工程文章可以结合阅读：前者提供实验方法，后者讨论应用中的信息组织。[ICLR 2026：Agentic Context Engineering: Evolving Contexts for Self-Improving Language Models](https://arxiv.org/abs/2510.04618)。

提示的效果也取决于表达形式和材料的位置。Sclar 等人考察了保持语义不变的格式调整，发现它仍可能明显改变部分模型的表现；Liu 等人则发现，在其长文本问答和检索实验中，相关信息位于上下文中间时常较难利用。这些研究提示我们，评价一种提示时，需要检查结果是否依赖某一种格式或材料排列。[Sclar 等，ICLR 2024：Quantifying Language Models’ Sensitivity to Spurious Features in Prompt Design or: How I learned to start worrying about prompt formatting](https://arxiv.org/abs/2310.11324)；[Liu 等，TACL 2024：Lost in the Middle: How Language Models Use Long Contexts](https://aclanthology.org/2024.tacl-1.9/)。

模型给出的解释也需要核验。Turpin 等人发现，输入中的偏置线索可以影响答案，但思维链解释未必说明这些影响。Anthropic 后续对推理模型的研究也发现了类似问题。因此，在研究标注中，解释可以帮助检查判断，但不能单独证明标签正确或完整反映模型的判断过程，仍需回到原文与人工标准。[Turpin 等，NeurIPS 2023：Language Models Don’t Always Say What They Think: Unfaithful Explanations in Chain-of-Thought Prompting](https://proceedings.neurips.cc/paper_files/paper/2023/file/ed3fea9033a80fea1376299fa7863f4a-Paper-Conference.pdf)；[Anthropic，2025：Reasoning Models Don’t Always Say What They Think](https://www.anthropic.com/research/reasoning-models-dont-say-think)。

文献中的 prompt tuning 还涉及另一类方法：通过训练连续向量来控制冻结的语言模型。Li 与 Liang 的 Prefix-Tuning 研究任务专属的连续前缀，Lester 等人则考察软提示的效果如何随模型规模变化。这些方法需要参数优化，与手工编写自然语言提示有明确区别，适合希望进一步了解提示学习的读者。[Li 与 Liang，ACL 2021：Prefix-Tuning: Optimizing Continuous Prompts for Generation](https://aclanthology.org/2021.acl-long.353/)；[Lester 等，EMNLP 2021：The Power of Scale for Parameter-Efficient Prompt Tuning](https://aclanthology.org/2021.emnlp-main.243/)。

*资料核验于 2026 年 10 月 2 日。*
