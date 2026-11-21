// Writes public/sitemap.xml before every build: the site's pages plus one entry per blog post
// (src/content/blog/<slug>.md, dated by its front-matter `date`). Adding a post adds it here.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = 'https://www.quanta.co.in';
const root = fileURLToPath(new URL('..', import.meta.url));
const blogDir = join(root, 'src/content/blog');

const pages = [
  { loc: '/', priority: '1.0' },
  { loc: '/blogs', priority: '0.8' },
  { loc: '/about', priority: '0.6' },
  { loc: '/faqs', priority: '0.5' },
];

const posts = readdirSync(blogDir)
  .filter((f) => f.endsWith('.md'))
  .map((f) => {
    const raw = readFileSync(join(blogDir, f), 'utf8');
    const date = /^date:\s*["']?(\d{4}-\d{2}-\d{2})/m.exec(raw)?.[1];
    return { loc: `/blogs/${f.replace(/\.md$/, '')}`, lastmod: date, priority: '0.7' };
  });

const urls = [...pages, ...posts]
  .map(
    (u) =>
      `  <url>\n    <loc>${SITE}${u.loc}</loc>\n${u.lastmod ? `    <lastmod>${u.lastmod}</lastmod>\n` : ''}    <priority>${u.priority}</priority>\n  </url>`
  )
  .join('\n');

writeFileSync(
  join(root, 'public/sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);
console.log(`sitemap: ${pages.length + posts.length} URLs`);
