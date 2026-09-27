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
        { label: '前言', slug: 'preface' },
        { label: '在词语与世界之间', slug: 'main-thesis' },
      ],
    }),
  ],
});
