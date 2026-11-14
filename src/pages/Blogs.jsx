import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, Cpu } from 'lucide-react';
import { BLOGS, BLOG_CATEGORIES } from '../config/blogs';
import { Btn, Chip, Section } from '../components/mono/ui';
import { fadeUp } from '../components/mono/motion';
import { PageHero, PageMeta } from '../components/mono/PageShell';
import { MonoCTA } from '../components/mono/HomeSections';

const TagRow = ({ post }) => (
  <div className="flex items-center gap-1.5">
    <span className="flex h-[22px] w-[22px] items-center justify-center rounded-[4px] border border-ink/70">
      <Cpu size={12} strokeWidth={1.6} />
    </span>
    <Chip>{post.category}</Chip>
  </div>
);

const MetaRow = ({ post }) => (
  <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-2">
    {post.date} <span className="text-ink-5">|</span> {post.readTime}
  </span>
);

const BlogCard = ({ post, i }) => (
  <motion.article {...fadeUp(0.04 * (i % 4))} className="h-full">
    <Link
      to={`/blogs/${post.id}`}
      className="group flex h-full min-h-[240px] flex-col p-4 transition-colors hover:bg-white/60"
    >
      <TagRow post={post} />
      <h3 className="mt-5 font-inter text-[15px] font-medium leading-snug text-ink">{post.title}</h3>
      <p className="mt-2 line-clamp-3 font-inter text-[13px] leading-relaxed text-ink-3">{post.excerpt}</p>
      <div className="mt-auto flex items-center justify-between pt-6">
        <MetaRow post={post} />
        <span className="rounded-[5px] bg-white px-2.5 py-1.5 font-inter text-[12px] text-ink shadow-[0_0_0_1px_rgba(10,10,11,0.06)] transition-colors group-hover:bg-ink group-hover:text-white">
          Read more
        </span>
      </div>
    </Link>
  </motion.article>
);

const BlogList = () => {
  const [cat, setCat] = useState('All');
  const featured = BLOGS.find((b) => b.featured);
  const list = BLOGS.filter((b) => (cat === 'All' || b.category === cat) && b !== featured);

  return (
    <>
      <PageMeta title="Blog | Quanta" description="Notes on AI employees, enterprise AI, security and how Quanta works." />
      <PageHero label="Blog" title="Our blog." sub="Notes on AI employees, enterprise AI, security, and how Quanta works." />

      {featured && cat === 'All' && (
        <Section tone="light" className="pt-16">
          <motion.div {...fadeUp(0)}>
            <Link
              to={`/blogs/${featured.id}`}
              className="group grid gap-8 border-t border-ink pt-6 md:grid-cols-[1fr_1fr]"
            >
              <div>
                <TagRow post={featured} />
                <h2 className="mt-5 font-inter text-[1.9rem] font-medium leading-[1.12] tracking-[-0.03em] text-ink">
                  {featured.title}
                </h2>
                <Btn as="span" className="mt-7 group-hover:bg-ink-2">
                  Read article
                </Btn>
              </div>
              <div className="md:pt-12">
                <p className="font-inter text-[14px] leading-relaxed text-ink-3">{featured.excerpt}</p>
                <div className="mt-5">
                  <MetaRow post={featured} />
                </div>
              </div>
            </Link>
          </motion.div>
        </Section>
      )}

      <Section tone="light" className="py-16 sm:py-20">
        <div role="tablist" aria-label="Categories" className="flex flex-wrap gap-1.5">
          {BLOG_CATEGORIES.map((c) => (
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
        <div className="mt-10 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p, i) => (
            <BlogCard key={p.id} post={p} i={i} />
          ))}
        </div>
        {list.length === 0 && (
          <p className="mt-10 font-inter text-[14px] text-ink-3">No more posts in this category yet.</p>
        )}
      </Section>
      <MonoCTA />
    </>
  );
};

const BlogPost = ({ id }) => {
  const post = BLOGS.find((b) => String(b.id) === id);
  if (!post) return <Navigate to="/blogs" replace />;
  const more = BLOGS.filter((b) => b.id !== post.id).slice(0, 4);

  return (
    <>
      <PageMeta title={`${post.title} | Quanta`} description={post.excerpt} />
      <Section className="pb-20 pt-14 lg:pt-20">
        <article className="mx-auto max-w-2xl">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-1.5 font-inter text-[13px] text-ink-3 transition-colors hover:text-ink"
          >
            <ArrowLeft size={14} /> Back to blog
          </Link>
          <div className="mt-10">
            <TagRow post={post} />
          </div>
          <h1 className="mt-6 font-inter text-[2.2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-ink sm:text-[2.8rem]">
            {post.title}
          </h1>
          <div className="mt-5">
            <MetaRow post={post} />
          </div>
          <p className="mt-8 border-b border-paper-line pb-10 font-inter text-[16px] leading-relaxed text-ink-2">
            {post.excerpt}
          </p>
          {post.body ? (
            <div className="mt-10 space-y-5">
              {post.body.split('\n\n').map((para, i) =>
                para.startsWith('**') && para.endsWith('**') ? (
                  <h2 key={i} className="pt-6 font-inter text-[1.15rem] font-semibold tracking-[-0.02em] text-ink">
                    {para.replace(/\*\*/g, '')}
                  </h2>
                ) : (
                  <p key={i} className="font-inter text-[15px] leading-[1.8] text-ink-2">
                    {para}
                  </p>
                )
              )}
            </div>
          ) : (
            <p className="mt-10 font-mono text-[12px] uppercase tracking-[0.1em] text-ink-4">[Full article coming soon]</p>
          )}
        </article>
      </Section>

      <Section tone="light" className="py-16">
        <h2 className="font-inter text-[1.4rem] font-medium tracking-[-0.02em] text-ink">More articles</h2>
        <div className="mt-8 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {more.map((p, i) => (
            <BlogCard key={p.id} post={p} i={i} />
          ))}
        </div>
      </Section>
    </>
  );
};

const Blogs = () => {
  const { id } = useParams();
  return id ? <BlogPost id={id} /> : <BlogList />;
};

export default Blogs;
