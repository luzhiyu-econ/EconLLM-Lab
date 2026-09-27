# Repository guide

- This repository publishes `https://zhiyulu.org/EconLLM-Lab/` with Astro, Starlight, and GitHub Pages.
- The root URL redirects to `/EconLLM-Lab/preface/`.
- Published documents are `src/content/docs/preface.md` and the `src/content/docs/main-thesis.md` outline; preserve the original preface text.
- Add new chapters only after the author has rewritten them.
- Run `npm ci`, `npm run check`, and `npm run build` with Node.js 24+.
- `archive/lectures/` contains historical course files and is excluded from the site.
