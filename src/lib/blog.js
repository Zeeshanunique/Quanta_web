/**
 * The blog: one Markdown file per post in src/content/blog/<slug>.md, with a front-matter header:
 *
 *   ---
 *   title: "…"            excerpt: "…"           category: Product
 *   date: 2026-11-21       author: Quanta team     featured: true
 *   cta: factum            legacyIds: [10]          (old numeric URLs that redirect here)
 *   cover: /blog/x.png     (optional image)
 *   ---
 *
 * Adding a post is adding a file. Reading time, the table of contents and the category filter are derived.
 */

const files = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default', eager: true });

const WORDS_PER_MINUTE = 230;

/** A small front-matter reader: `key: value` lines, quoted strings, booleans and `[a, b]` lists. */
function parseFrontMatter(raw) {
  const match = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(raw);
  if (!match) return { data: {}, body: raw };
  const data = {};
  for (const line of match[1].split('\n')) {
    const kv = /^([A-Za-z][\w-]*):\s*(.*)$/.exec(line.trim());
    if (!kv) continue;
    let value = kv[2].trim();
    if (/^\[.*\]$/.test(value)) {
      value = value
        .slice(1, -1)
        .split(',')
        .map((v) => v.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean);
    } else if (value === 'true' || value === 'false') {
      value = value === 'true';
    } else {
      value = value.replace(/^["']|["']$/g, '');
    }
    data[kv[1]] = value;
  }
  return { data, body: match[2] };
}

/** The id a heading gets, so the table of contents can link to it. */
export function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[*_`[\]()]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function formatDate(iso) {
  const d = new Date(`${iso}T00:00:00Z`);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

export const POSTS = Object.entries(files)
  .map(([path, raw]) => {
    const slug = path.split('/').pop().replace(/\.md$/, '');
    const { data, body } = parseFrontMatter(raw);
    const words = body.replace(/[#>*_`|[\]()-]/g, ' ').split(/\s+/).filter(Boolean).length;
    const headings = [...body.matchAll(/^##\s+(.+)$/gm)].map((m) => ({ text: m[1].trim(), id: slugify(m[1]) }));
    return {
      slug,
      body,
      headings,
      title: data.title || slug,
      excerpt: data.excerpt || '',
      category: data.category || 'Notes',
      date: data.date || '',
      dateLabel: formatDate(data.date || ''),
      author: data.author || 'Quanta team',
      featured: Boolean(data.featured),
      cta: data.cta || '',
      cover: data.cover || '',
      legacyIds: (Array.isArray(data.legacyIds) ? data.legacyIds : []).map(String),
      readTime: `${Math.max(1, Math.round(words / WORDS_PER_MINUTE))} min read`,
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.title.localeCompare(b.title)));

/** Categories that have at least one post, so the filter never shows an empty one. */
export const CATEGORIES = ['All', ...new Set(POSTS.map((p) => p.category))];

/** The post at a URL segment: its slug, or an old numeric id (the caller redirects those to the slug). */
export function findPost(segment) {
  const key = String(segment);
  return POSTS.find((p) => p.slug === key) || POSTS.find((p) => p.legacyIds.includes(key)) || null;
}

/** Up to `n` other posts, same category first, then newest. */
export function related(post, n = 3) {
  const others = POSTS.filter((p) => p.slug !== post.slug);
  return [...others.filter((p) => p.category === post.category), ...others.filter((p) => p.category !== post.category)].slice(0, n);
}
