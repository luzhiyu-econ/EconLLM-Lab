# Repository guide

- This repository publishes `https://zhiyulu.org/EconLLM-Lab/` with Astro, Starlight, and GitHub Pages.
- The root URL redirects to `/EconLLM-Lab/preface/`, whose page title is `作者说`.
- Published content lives in `src/content/docs/`; navigation is configured in `astro.config.mjs`.
- Sidebar groups represent sections, and their pages represent chapters. The `前言` section contains `作者说`, `术语与约定` (`glossary`), and `在词语与世界之间`, in that order.
- In this book, `AI` specifically refers to generative large language models (LLMs); `glossary` defines recurring terms and distinguishes simulated economic agents from research assistants.
- Four numbered modules follow the preface: AI-era text processing (`text-processing/`), LLM annotation (`llm-annotation/`), AI economic agents (`economic-agents/`), and research agents (`research-agents/`). Each currently contains four placeholder chapters; preserve their order and URLs when adding content.
- `Best Learning Resources` groups `教程与文献` (`best-learning-resources`), `如何写 prompt` (`resources/how-to-prompt`), and `Skills Resources` (`resources/skills-resources`). Add chapters as the author requests them, and update the navigation accordingly.
- Add or rewrite published content as requested or approved by the author. Preserve existing text and URLs unless the task calls for changes.
- Follow the existing concise prose, paragraph layout, and inline references.
- Use concise Chinese chapter titles centered on the research question, following `在词语与世界之间` and its subsection headings; retain useful technical terms in page descriptions.
- Use Node.js 24+. Install locked dependencies with `npm ci` when needed; for site changes, run `npm run check`, `npm run build`, and `git diff --check` before publishing.
- `archive/lectures/` contains historical course files and is excluded from the site. Build output in `dist/` is not tracked.
- Keep `CLAUDE.md` and `AGENTS.md` synchronized when changing this repository guide.
