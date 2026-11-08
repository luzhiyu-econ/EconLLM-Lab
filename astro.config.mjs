import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import { legacyChapterPaths } from './src/legacy-chapter-paths.mjs';

const base = '/EconLLM-Lab/';

export default defineConfig({
  site: 'https://zhiyulu.org',
  base,
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !Object.hasOwn(
        legacyChapterPaths,
        new URL(page).pathname.slice(base.length).replace(/\/$/, ''),
      ),
    }),
    {
      name: 'legacy-chapter-redirects',
      hooks: {
        'astro:config:setup': ({ injectRoute }) => {
          for (const oldPath of Object.keys(legacyChapterPaths)) {
            injectRoute({
              pattern: `/${oldPath}/`,
              entrypoint: './src/legacy-chapter-redirect.astro',
              prerender: true,
            });
          }
        },
      },
    },
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
            { label: '作者说', slug: 'preface/authors-note' },
            { label: '术语与约定', slug: 'preface/terms-and-conventions' },
            { label: '在词语与世界之间', slug: 'preface/language-meaning-and-research' },
          ],
        },
        {
          label: 'Best Learning Resources',
          collapsed: false,
          items: [
            { label: '教程与文献', slug: 'resources/tutorials-and-literature' },
            { label: '如何写 prompt', slug: 'resources/prompt-writing' },
            { label: 'Agent框架与原理', slug: 'resources/agent-frameworks-and-principles' },
            { label: 'Skills Resources', slug: 'resources/research-skills' },
          ],
        },
        {
          label: '文本如何成为数据',
          collapsed: false,
          items: [
            { label: '从词语到上下文', slug: 'text-processing/from-words-to-context' },
            { label: '文本之间的远近', slug: 'text-processing/text-similarity-and-distance' },
            { label: '从文本中辨认信息', slug: 'text-processing/from-text-to-information' },
            { label: '回到文本处理本身', slug: 'text-processing/text-processing-in-practice' },
          ],
        },
        {
          label: '判断如何成为标签',
          collapsed: false,
          items: [
            { label: '从研究问题到标注规则', slug: 'llm-annotation/from-questions-to-annotation-rules' },
            { label: '把判断的依据说清楚', slug: 'llm-annotation/annotation-criteria-and-prompts' },
            { label: '从聚类到标注手册', slug: 'llm-annotation/from-clustering-to-codebooks' },
            { label: '标签何以成为证据', slug: 'llm-annotation/annotation-validation' },
          ],
        },
        {
          label: '模型如何模拟世界',
          collapsed: false,
          items: [
            { label: '从行为实验到宏观模拟', slug: 'economic-agents/experiments-to-macro-simulation' },
            { label: '模型的行为从何而来', slug: 'economic-agents/sources-of-model-behavior' },
            { label: '模拟中的个体差异', slug: 'economic-agents/individual-heterogeneity' },
            { label: '在模拟中考察政策', slug: 'economic-agents/policy-simulation' },
          ],
        },
        {
          label: 'AI Agent 的原理与科研应用',
          collapsed: false,
          items: [
            { label: '从瓶中脑到智能体', slug: 'research-agents/from-prompts-to-agents' },
            { label: 'AI Agent 的工作原理', slug: 'research-agents/how-agents-work' },
            { label: 'AI Agent 的配置与使用', slug: 'research-agents/setup-and-use' },
            { label: '科研 Skills 的设计与实践', slug: 'research-agents/research-skills-design-and-practice' },
          ],
        },
      ],
    }),
  ],
});
