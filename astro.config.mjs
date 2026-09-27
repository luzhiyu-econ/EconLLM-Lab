import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import { legacyRoutes } from './src/legacy-routes.mjs';

const base = '/EconLLM-Lab/';
const redirects = Object.fromEntries(
  Object.entries(legacyRoutes).map(([source, target]) => [source, base + target.slice(1)]),
);

export default defineConfig({
  site: 'https://zhiyulu.org',
  base,
  output: 'static',
  redirects,
  integrations: [
    starlight({
      title: 'EconLLM-Lab',
      description: '面向经济学研究的 LLM 实操教程',
      favicon: '/favicon.svg',
      locales: { root: { label: '简体中文', lang: 'zh-CN' } },
      customCss: ['./src/styles/custom.css'],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/luzhiyu-econ/EconLLM-Lab' }],
      editLink: { baseUrl: 'https://github.com/luzhiyu-econ/EconLLM-Lab/edit/main/' },
      sidebar: [
        { label: '开始阅读', items: [
          { label: '前言', slug: 'preface' },
          { label: '从这里开始', slug: 'start' },
        ] },
        { label: '实操主线', items: [
          { label: '配置环境', slug: 'guide/environment' },
          { label: '调用 API', slug: 'guide/api' },
          { label: '定义提取任务', slug: 'guide/task-definition' },
          { label: '从文本到数据', slug: 'guide/text-to-data' },
          { label: '评估提取质量', slug: 'guide/evaluation' },
          { label: '用于经济学研究', slug: 'guide/research-use' },
        ] },
        { label: '案例与参考', items: [
          { label: '经济增长目标案例', slug: 'cases/growth-target' },
          { label: 'Git 速查', slug: 'reference/git' },
          { label: '学习资料', slug: 'reference/resources' },
          { label: '后续主题', slug: 'roadmap' },
        ] },
      ],
    }),
    mdx(),
  ],
});
