import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Link2, Linkedin, Twitter } from 'lucide-react';
import { CATEGORIES, POSTS, findPost, related, slugify } from '../lib/blog';
import { goToSection } from '../lib/goToSection';
import { Btn, Chip, CropMarks, MonoLabel, Section } from '../components/mono/ui';
import { fadeUp } from '../components/mono/motion';
import { PageHero, PageMeta } from '../components/mono/PageShell';
import { IsoCube, IsoDocs, IsoGlobe, IsoLayers, IsoPyramid } from '../components/mono/iso';
import QuantumReveal from '../components/mono/QuantumReveal';

const SITE = 'https://www.quanta.co.in';
const ART = { Product: IsoLayers, Company: IsoGlobe, Security: IsoCube, 'AI & Enterprise': IsoPyramid };
const artFor = (post) => ART[post.category] || IsoDocs;

/* ───────────────────────── Shared bits ───────────────────────── */

const Meta = ({ post, className = '' }) => (
  <span className={`font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-3 ${className}`}>
    {post.dateLabel} <span className="text-ink-5">·</span> {post.readTime}
  </span>
);

/** The post's cover image, or isometric art for its category when it has none. */
const Cover = ({ post, className = '' }) => {
  if (post.cover) return <img src={post.cover} alt="" className={`h-full w-full object-cover ${className}`} />;
  const Art = artFor(post);
  return (
    <div className={`relative flex items-center justify-center bg-paper-2 ${className}`}>
      <CropMarks size={14} />
      <QuantumReveal className="h-[70%] w-[70%]">
        <Art className="h-full w-full" />
      </QuantumReveal>
    </div>
  );
};

const PostCard = ({ post, i }) => (
  <motion.article {...fadeUp(0.04 * (i % 3))} className="h-full">
    <Link to={`/blogs/${post.slug}`} className="group flex h-full flex-col">
      <Cover post={post} className="aspect-[16/10] overflow-hidden rounded-[4px] transition-transform duration-500 group-hover:-translate-y-0.5" />
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Chip>{post.category}</Chip>
        <Meta post={post} />
      </div>
      <h3 className="mt-3 font-inter text-[17px] font-semibold leading-snug tracking-[-0.02em] text-ink group-hover:underline group-hover:decoration-ink/30 group-hover:underline-offset-4">
        {post.title}
      </h3>
      <p className="mt-2 line-clamp-3 font-inter text-[13.5px] leading-relaxed text-ink-3">{post.excerpt}</p>
      <span className="mt-auto inline-flex items-center gap-1 pt-4 font-inter text-[12.5px] font-medium text-ink">
        Read article <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  </motion.article>
);

/* ───────────────────────── List ───────────────────────── */

const BlogList = () => {
  const [cat, setCat] = useState('All');
  const featured = POSTS.find((p) => p.featured) || POSTS[0];
  const list = POSTS.filter((p) => (cat === 'All' ? p !== featured : p.category === cat));

  return (
    <>
      <PageMeta title="Blog | Quanta" description="Notes on AI agents at work, security, and how Quanta builds." />
      <PageHero label="Blog" title="Our blog." sub="Notes on AI agents at work, security, and how Quanta builds." />

      {featured && cat === 'All' && (
        <Section tone="light" className="pt-16">
          <motion.div {...fadeUp(0)}>
            <Link to={`/blogs/${featured.slug}`} className="group grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-center">
              <Cover post={featured} className="aspect-[16/10] overflow-hidden rounded-[4px]" />
              <div>
                <div className="flex items-center gap-2">
                  <Chip tone="dark">Featured</Chip>
                  <Chip>{featured.category}</Chip>
                </div>
                <h2 className="mt-5 font-inter text-[1.9rem] font-semibold leading-[1.12] tracking-[-0.035em] text-ink sm:text-[2.2rem]">
                  {featured.title}
                </h2>
                <p className="mt-4 font-inter text-[14.5px] leading-relaxed text-ink-3">{featured.excerpt}</p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Btn as="span" className="group-hover:bg-ink-2">
                    Read article <ArrowRight size={14} />
                  </Btn>
                  <Meta post={featured} />
                </div>
              </div>
            </Link>
          </motion.div>
        </Section>
      )}

      <Section tone="light" className="py-16 sm:py-20">
        <div role="tablist" aria-label="Categories" className="flex flex-wrap gap-1.5 border-t border-paper-line pt-8">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={cat === c}
              onClick={() => setCat(c)}
              className={`rounded-[5px] px-3 py-1.5 font-inter text-[12.5px] transition-colors ${
                cat === c ? 'bg-ink text-white' : 'bg-white text-ink shadow-[0_0_0_1px_rgba(10,10,11,0.06)] hover:bg-paper'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <PostCard key={p.slug} post={p} i={i} />
          ))}
        </div>
        {list.length === 0 && <p className="mt-10 font-inter text-[14px] text-ink-3">No more posts in this category yet.</p>}
      </Section>
    </>
  );
};

/* ───────────────────────── Article ───────────────────────── */

const textOf = (node) =>
  typeof node === 'string' || typeof node === 'number'
    ? String(node)
    : Array.isArray(node)
    ? node.map(textOf).join('')
    : node?.props?.children
    ? textOf(node.props.children)
    : '';

const linkCls = 'font-medium text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink';
const bullet =
  "[&>li]:relative [&>li]:pl-6 [&>li]:before:absolute [&>li]:before:left-1 [&>li]:before:top-[0.72em] [&>li]:before:h-[6px] [&>li]:before:w-[6px] [&>li]:before:bg-ink [&>li]:before:content-['']";
const numbered =
  '[counter-reset:item] [&>li]:relative [&>li]:pl-9 [&>li]:[counter-increment:item] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[0.2em] [&>li]:before:font-mono [&>li]:before:text-[12px] [&>li]:before:text-ink-4 [&>li]:before:content-[counter(item,decimal-leading-zero)]';

/** Markdown elements in the site's type and spacing. */
const MD = {
  h2: ({ children }) => (
    <h2 id={slugify(textOf(children))} className="scroll-mt-28 !mt-12 font-inter text-[1.45rem] font-semibold leading-snug tracking-[-0.025em] text-ink sm:text-[1.6rem]">
      {children}
    </h2>
  ),
  h3: ({ children }) => <h3 className="!mt-8 font-inter text-[1.15rem] font-semibold tracking-[-0.02em] text-ink">{children}</h3>,
  p: ({ children }) => <p className="font-inter text-[16.5px] leading-[1.8] text-ink-2">{children}</p>,
  strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  a: ({ href = '', children }) => {
    const external = /^https?:\/\//.test(href) && !href.startsWith(SITE);
    return external ? (
      <a href={href} target="_blank" rel="noreferrer" className={linkCls}>
        {children}
      </a>
    ) : (
      <Link to={href.replace(SITE, '') || '/'} className={linkCls}>
        {children}
      </Link>
    );
  },
  ul: ({ children }) => <ul className={`space-y-2.5 ${bullet}`}>{children}</ul>,
  ol: ({ children }) => <ol className={`space-y-3 ${numbered}`}>{children}</ol>,
  li: ({ children }) => <li className="font-inter text-[16.5px] leading-[1.75] text-ink-2">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="!my-10 border-l-2 border-ink py-1 pl-6 [&_p]:font-inter [&_p]:text-[1.4rem] [&_p]:font-medium [&_p]:leading-snug [&_p]:tracking-[-0.02em] [&_p]:text-ink">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="!my-10 border-paper-line" />,
  code: ({ children }) => <code className="rounded-[4px] bg-paper-2 px-1.5 py-0.5 font-mono text-[13.5px] text-ink">{children}</code>,
  table: ({ children }) => (
    <div className="!my-8 overflow-x-auto rounded-[6px] shadow-[0_0_0_1px_rgba(10,10,11,0.08)]">
      <table className="w-full border-collapse text-left font-inter text-[14.5px]">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-paper-2">{children}</thead>,
  th: ({ children }) => <th className="px-4 py-3 font-mono text-[10.5px] font-medium uppercase tracking-[0.1em] text-ink-3">{children}</th>,
  td: ({ children }) => <td className="border-t border-paper-line px-4 py-3 align-top leading-relaxed text-ink-2">{children}</td>,
  img: ({ src, alt }) => (
    <img src={src} alt={alt || ''} loading="lazy" className="!my-8 w-full rounded-[6px] shadow-[0_0_0_1px_rgba(10,10,11,0.06)]" />
  ),
};

/** Thin bar under the header that fills as the article is read. */
const ReadingProgress = ({ target }) => {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = target.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const total = height - window.innerHeight * 0.6;
      setP(Math.min(1, Math.max(0, -top / Math.max(total, 1))));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [target]);
  return (
    <div aria-hidden className="fixed inset-x-0 top-16 z-40 h-[2px]">
      <div className="h-full origin-left bg-ink transition-transform duration-150" style={{ transform: `scaleX(${p})` }} />
    </div>
  );
};

/** The sections of the article; the one being read is marked. */
const Contents = ({ headings }) => {
  const [active, setActive] = useState(headings[0]?.id);
  useEffect(() => {
    const els = headings.map((h) => document.getElementById(h.id)).filter(Boolean);
    if (!els.length || typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        const seen = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (seen[0]) setActive(seen[0].target.id);
      },
      { rootMargin: '-80px 0px -65% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [headings]);
  if (!headings.length) return null;
  return (
    <nav aria-label="Contents" className="sticky top-28">
      <MonoLabel className="text-[10px]">Contents</MonoLabel>
      <ol className="mt-4 space-y-1 border-l border-paper-line">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                window.history.replaceState(null, '', `#${h.id}`);
              }}
              className={`-ml-px block border-l py-1.5 pl-4 font-inter text-[13px] leading-snug transition-colors ${
                active === h.id ? 'border-ink font-medium text-ink' : 'border-transparent text-ink-4 hover:text-ink-2'
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

const Share = ({ post, url }) => {
  const [copied, setCopied] = useState(false);
  const text = encodeURIComponent(post.title);
  const link = encodeURIComponent(url);
  const btn =
    'inline-flex h-8 w-8 items-center justify-center rounded-[5px] bg-white text-ink shadow-[0_0_0_1px_rgba(10,10,11,0.08)] transition-colors hover:bg-ink hover:text-white';
  return (
    <div className="flex items-center gap-1.5">
      <a className={btn} href={`https://www.linkedin.com/sharing/share-offsite/?url=${link}`} target="_blank" rel="noreferrer" aria-label="Share on LinkedIn">
        <Linkedin size={14} />
      </a>
      <a className={btn} href={`https://twitter.com/intent/tweet?url=${link}&text=${text}`} target="_blank" rel="noreferrer" aria-label="Share on X">
        <Twitter size={14} />
      </a>
      <button
        type="button"
        className={btn}
        aria-label={copied ? 'Link copied' : 'Copy link'}
        onClick={() => {
          try {
            navigator.clipboard?.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
          } catch {
            /* clipboard unavailable */
          }
        }}
      >
        {copied ? <Check size={14} /> : <Link2 size={14} />}
      </button>
    </div>
  );
};

/** What a reader can do next: the post's product, or a demo. */
const EndCta = ({ post }) => {
  const navigate = useNavigate();
  const factum = post.cta === 'factum';
  return (
    <div className="relative !mt-14 bg-ink p-8 text-white sm:p-10">
      <CropMarks size={12} className="border-white/40" />
      <MonoLabel className="text-white/50">{factum ? 'Early access' : 'Talk to us'}</MonoLabel>
      <h3 className="mt-4 font-inter text-[1.6rem] font-semibold leading-tight tracking-[-0.03em]">
        {factum ? 'Put your first agent to work.' : 'Hand off your first piece of real work.'}
      </h3>
      <p className="mt-3 max-w-md font-inter text-[14px] leading-relaxed text-white/70">
        {factum
          ? "We're onboarding a small number of teams one by one. We'll set up your workspace and your first pack with you."
          : 'Tell us what your team does every week, in operations or engineering. We will show you what it looks like done.'}
      </p>
      <div className="mt-7">
        {factum ? (
          <Btn as="a" variant="light" href="https://factum.quanta.co.in/#request-access" target="_blank" rel="noreferrer">
            Request early access <ArrowUpRight size={14} />
          </Btn>
        ) : (
          <Btn variant="light" onClick={() => goToSection(navigate, 'contact')}>
            Book a demo
          </Btn>
        )}
      </div>
    </div>
  );
};

const ArticleMeta = ({ post, url }) => (
  <Helmet>
    <title>{`${post.title} | Quanta`}</title>
    <meta name="description" content={post.excerpt} />
    <link rel="canonical" href={url} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={post.title} />
    <meta property="og:description" content={post.excerpt} />
    {post.cover && <meta property="og:image" content={`${SITE}${post.cover}`} />}
    <meta property="article:published_time" content={post.date} />
    <meta property="article:section" content={post.category} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={post.title} />
    <meta name="twitter:description" content={post.excerpt} />
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        author: { '@type': 'Organization', name: post.author },
        publisher: { '@type': 'Organization', name: 'Quanta', url: SITE },
        mainEntityOfPage: url,
      })}
    </script>
  </Helmet>
);

const BlogPost = ({ segment }) => {
  const post = findPost(segment);
  const bodyRef = useRef(null);
  const more = useMemo(() => (post ? related(post) : []), [post]);
  if (!post) return <Navigate to="/blogs" replace />;
  if (post.slug !== segment) return <Navigate to={`/blogs/${post.slug}`} replace />;
  const url = `${SITE}/blogs/${post.slug}`;
  const initials = post.author
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <>
      <ArticleMeta post={post} url={url} />
      <ReadingProgress target={bodyRef} />

      <section className="grain relative bg-paper pb-10 pt-14 lg:pt-20">
        <div className="mx-auto w-full max-w-[1200px] px-5 md:px-10">
          <Link to="/blogs" className="inline-flex items-center gap-1.5 font-inter text-[12.5px] text-ink-3 hover:text-ink">
            <ArrowLeft size={13} /> All articles
          </Link>
          <motion.div {...fadeUp(0)} className="mt-8 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <Chip>{post.category}</Chip>
              <Meta post={post} />
            </div>
            <h1 className="mt-5 font-inter text-[2.3rem] font-semibold leading-[1.06] tracking-[-0.045em] text-ink sm:text-[3.1rem]">
              {post.title}
            </h1>
            <p className="mt-6 max-w-2xl font-inter text-[17px] leading-relaxed text-ink-3">{post.excerpt}</p>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-paper-line pt-5">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink font-mono text-[11px] text-white">{initials}</span>
                <div>
                  <p className="font-inter text-[13.5px] font-medium text-ink">{post.author}</p>
                  <p className="font-inter text-[12px] text-ink-4">{post.dateLabel}</p>
                </div>
              </div>
              <Share post={post} url={url} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Not <Section>: its overflow clipping would stop the contents list from sticking. */}
      <section className="relative bg-paper pb-20 pt-6">
        <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-5 md:px-10 lg:grid-cols-[200px_minmax(0,680px)] lg:justify-between xl:grid-cols-[220px_minmax(0,700px)_120px]">
          <aside className="hidden lg:block">
            <Contents headings={post.headings} />
          </aside>
          <article ref={bodyRef} className="min-w-0 space-y-5">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={MD}>
              {post.body}
            </ReactMarkdown>
            <div className="!mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-paper-line pt-6">
              <span className="font-inter text-[13px] text-ink-3">Found this useful? Share it.</span>
              <Share post={post} url={url} />
            </div>
            <EndCta post={post} />
          </article>
        </div>
      </section>

      {more.length > 0 && (
        <Section tone="light" className="py-16 sm:py-20">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-inter text-[1.5rem] font-semibold tracking-[-0.03em] text-ink">Keep reading</h2>
            <Link to="/blogs" className="inline-flex items-center gap-1 font-inter text-[12.5px] font-medium text-ink">
              All articles <ArrowRight size={13} />
            </Link>
          </div>
          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p, i) => (
              <PostCard key={p.slug} post={p} i={i} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
};

const Blogs = () => {
  const { id } = useParams();
  return id ? <BlogPost key={id} segment={id} /> : <BlogList />;
};

export default Blogs;
