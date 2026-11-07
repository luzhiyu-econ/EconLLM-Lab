import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://zhiyulu.org',
  base: '/EconLLM-Lab/',
  output: 'static',
  integrations: [
    starlight({
      title: 'EconLLM-Lab',
      description: '面向经济学研究的 LLM 实操教程',
      locales: { root: { label: '简体中文', lang: 'zh-CN' } },
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/luzhiyu-econ/EconLLM-Lab' }],
      sidebar: [
        {
          label: '前言',
          collapsed: false,
          items: [
            { label: '作者说', slug: 'preface' },
            { label: '术语与约定', slug: 'glossary' },
            { label: '在词语与世界之间', slug: 'main-thesis' },
          ],
        },
        {
          label: '一、文本如何成为数据',
          collapsed: false,
          items: [
            { label: '从词语到上下文', slug: 'text-processing/from-nlp-to-transformers' },
            { label: '文本之间的远近', slug: 'text-processing/representations-and-semantics' },
            { label: '从文本中辨认信息', slug: 'text-processing/classification-extraction-and-clustering' },
            { label: '回到文本处理本身', slug: 'text-processing/back-to-text-processing' },
          ],
        },
        {
          label: '二、判断如何成为标签',
          collapsed: false,
          items: [
            { label: '从研究问题到标注规则', slug: 'llm-annotation/from-questions-to-labels' },
            { label: '把判断的依据说清楚', slug: 'llm-annotation/prompt-design' },
            { label: '从聚类到标注手册', slug: 'llm-annotation/clustering-and-codebooks' },
            { label: '标签何以成为证据', slug: 'llm-annotation/validation-and-batch-processing' },
          ],
        },
        {
          label: '三、模型如何模拟世界',
          collapsed: false,
          items: [
            { label: '从行为实验到宏观模拟', slug: 'economic-agents/from-experiments-to-macro' },
            { label: '模型的行为从何而来', slug: 'economic-agents/bias-and-reliability' },
            { label: '模拟中的个体差异', slug: 'economic-agents/real-world-tasks-and-heterogeneity' },
            { label: '在模拟中考察政策', slug: 'economic-agents/policy-and-structural-models' },
          ],
        },
        {
          label: '四、研究者如何与 AI 协作',
          collapsed: false,
          items: [
            { label: '研究者的工具箱', slug: 'research-agents/codex-and-claude-code' },
            { label: '把研究任务说清楚', slug: 'research-agents/task-planning-and-collaboration' },
            { label: '从材料整理到实证分析', slug: 'research-agents/from-data-to-analysis' },
            { label: '让研究过程可以复查', slug: 'research-agents/verification-and-reproducibility' },
          ],
        },
        {
          label: 'Best Learning Resources',
          collapsed: false,
          items: [
            { label: '教程与文献', slug: 'best-learning-resources' },
            { label: '如何写 prompt', slug: 'resources/how-to-prompt' },
            { label: 'Skills Resources', slug: 'resources/skills-resources' },
          ],
        },
      ],
    }),
  ],
});
