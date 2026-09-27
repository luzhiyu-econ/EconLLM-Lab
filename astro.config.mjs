import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://zhiyulu.org',
  base: '/EconLLM-Lab/',
  output: 'static',
  integrations: [
    starlight({
      title: 'EconLLM-Lab',
      locales: { root: { label: '简体中文', lang: 'zh-CN' } },
      sidebar: [{ label: '前言', slug: 'preface' }],
    }),
  ],
});
