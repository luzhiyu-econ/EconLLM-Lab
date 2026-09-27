import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { legacyRoutes } from '../src/legacy-routes.mjs';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const dist = join(root, 'dist');
const base = '/EconLLM-Lab/';
const origin = 'https://zhiyulu.org';
const errors = [];
const pages = [];

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path);
    else if (path.endsWith('.html')) pages.push(path);
  }
}

walk(dist);
for (const page of pages) {
  const document = readFileSync(page, 'utf8');
  const url = new URL(base + relative(dist, page).split('\\').join('/'), origin);
  for (const match of document.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const value = match[1].replaceAll('&amp;', '&');
    if (/^(mailto:|tel:|javascript:|data:)/.test(value)) continue;
    if (page === join(dist, '404.html') && value === `${origin}${base}404/`) continue;
    const target = new URL(value, url);
    if (target.origin !== origin) continue;
    if (!target.pathname.startsWith(base)) {
      errors.push(`${relative(dist, page)} → outside base: ${value}`);
      continue;
    }
    const path = join(dist, decodeURIComponent(target.pathname.slice(base.length)));
    if (!existsSync(path) && !existsSync(join(path, 'index.html')) && !existsSync(path + '.html')) {
      errors.push(`${relative(dist, page)} → missing: ${value}`);
    }
  }
}

for (const [oldPath, newPath] of Object.entries(legacyRoutes)) {
  const file = join(dist, oldPath, 'index.html');
  const target = base + newPath.slice(1);
  if (!existsSync(file) || !readFileSync(file, 'utf8').includes(`url=${target}`)) {
    errors.push(`legacy redirect: ${oldPath} → ${target}`);
  }
}
if (errors.length) {
  console.error(errors.slice(0, 40).join('\n'));
  console.error(`${errors.length} broken internal URLs`);
  process.exitCode = 1;
} else {
  console.log(`${pages.length} HTML pages and ${Object.keys(legacyRoutes).length} legacy redirects checked`);
}
