# Repository guide

EconLLM-Lab is a Chinese tutorial for LLM use in empirical economics.

- Published site: `src/content/docs/`, built with Astro and Starlight.
- Site configuration: `astro.config.mjs`; styles: `src/styles/custom.css`.
- Runnable case: `examples/growth_target/`; output is ignored under `outputs/`.
- Historical drafts and course files: `archive/`; do not publish them as current lessons.
- Keep the original preface in `src/content/docs/preface.md`.
- Use Node.js 24+ for `npm ci`, `npm run check`, `npm run build`, and `npm run check:links`.
- Use Python 3.11+ with `UV_PROJECT_ENVIRONMENT="$HOME/.venvs/EconLLM-Lab"` and `uv run` for case code.
- Keep all credentials out of source and notebooks. Online example requires three `LLM_*` environment variables.
- Follow `README.md` for publishing and `archive/README.md` for historical data caveats.
