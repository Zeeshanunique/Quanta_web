import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Clock, ArrowUpRight, ChevronRight } from 'lucide-react';
import { reveal, atmospheric, micro } from '../lib/cinematicMotion';
import { goToSection } from '../lib/goToSection';

/* ── Ambient glow — same pattern as About / Hero ── */
const AmbientGlow = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
    <motion.div
      className="absolute top-[-8%] left-1/2 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-emerald/8 blur-[130px]"
      animate={atmospheric.breathe}
    />
    <motion.div
      className="absolute top-[35%] right-[-5%] h-[260px] w-[260px] rounded-full bg-emerald/6 blur-[90px]"
      animate={atmospheric.breathe}
    />
    <motion.div
      className="absolute bottom-[15%] left-[-5%] h-[220px] w-[220px] rounded-full bg-emerald/5 blur-[80px]"
      animate={atmospheric.breathe}
    />
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald/20 to-transparent" />
  </div>
);

/* ── Sparse particles ── */
const SparseParticles = () => {
  const dots = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        left: `${6 + ((i * 19) % 88)}%`,
        top: `${8 + ((i * 27) % 80)}%`,
        delay: (i % 5) * 0.45,
        size: i % 4 === 0 ? 2.5 : 1.5,
      })),
    []
  );
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {dots.map((d) => (
        <motion.span
          key={d.id}
          className="absolute rounded-full bg-emerald/40"
          style={{ left: d.left, top: d.top, width: d.size, height: d.size }}
          initial={{ opacity: 0 }}
          animate={atmospheric.particleFloat(d.delay)}
        />
      ))}
    </div>
  );
};

/* ── Badge pill ── */
const Badge = ({ children }) => (
  <motion.span
    className="inline-flex rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-1.5 text-[11px] tracking-[0.16em] text-white/50 uppercase backdrop-blur-sm"
    initial={reveal.hidden}
    whileInView={reveal.visible(0)}
    viewport={{ once: true, amount: 0.6 }}
  >
    {children}
  </motion.span>
);

/* ── Blog data ── */
const CATEGORIES = ['All', 'Product', 'AI & Enterprise', 'Security', 'How it works'];

const BLOGS = [
  {
    id: 1,
    category: 'Product',
    readTime: '6 min read',
    date: 'June 2025',
    title: 'Introducing Factum: The AI Employee for HR and IT',
    excerpt:
      'Most HR and IT teams spend the majority of their day answering the same questions — leave balances, password resets, onboarding checklists. Factum takes that off their plate entirely.',
    featured: true,
    body: `Every HR and IT team we have spoken to describes the same problem. A significant portion of their day is spent answering questions that have already been answered — in a policy document, a handbook, a previous ticket. The same questions, from different people, every single day.

The standard fix has been a chatbot. Point it at your documentation, let it answer FAQs. The problem is that most workplace requests are not FAQs. They are actions. Someone does not just want to know the leave policy — they want to book the leave. Someone does not just want to know how to request access — they want the access granted.

A chatbot that answers and stops is half a solution. The other half is doing the work.

**What Factum actually does**

Factum is an AI employee built specifically for HR and IT. It lives in Slack or Microsoft Teams — wherever your team already works — and handles requests from the moment someone asks to the moment the thing is done.

That means it books the leave in BambooHR. It raises the Jira ticket. It grants the Okta access. It does not hand the request back to a human unless it genuinely needs one.

When it does need a human — because the request is unusual, or because it involves something sensitive — it surfaces the decision clearly, with context, and waits for a yes before proceeding. Nothing happens quietly.

**How it learns your company**

The part that makes Factum different from a configured chatbot is that it gets better over time. Not through retraining or model updates — through experience.

Every request it handles, every correction a manager makes, every exception it is told about — these become plain-English notes that Factum carries forward. Notes like: "The engineering team has a two-week notice period for access changes, not the standard one." Or: "Contractors on the Bangalore team are treated as full-time for leave purposes."

These notes are visible. You can read them, edit them, and remove them. Nothing is a black box.

**The economics**

Factum is priced as a hire, not a subscription. A flat monthly rate per AI employee, with no per-seat or per-message charges. The work it handles grows over time. The bill does not.

We offer a trial period with agreed targets. If Factum does not hit them, you walk away. That is the only way we think this should work.

**What is live today**

The EX Front Desk agent — the one that handles day-to-day HR and IT questions and requests — is live now. Onboarding, offboarding, and access management agents are in active pilots.

If you want to see it handle a real request from your team, book a demo. Bring something your team deals with every week. We will show it done end to end in fifteen minutes.`,
  },
  {
    id: 2,
    category: 'AI & Enterprise',
    readTime: '5 min read',
    date: 'May 2025',
    title: 'Why one AI assistant for the whole company is the wrong model',
    excerpt:
      'A general-purpose assistant stretched across every team sounds efficient. In practice it knows nothing deeply, and the people who need it most trust it least.',
    featured: false,
    body: '',
  },
  {
    id: 3,
    category: 'Security',
    readTime: '4 min read',
    date: 'May 2025',
    title: 'How we think about data: nothing leaves your environment',
    excerpt:
      'HR and IT hold the most sensitive data in any company. Here is exactly how Factum handles it — and what we will never do with it.',
    featured: false,
    body: '',
  },
  {
    id: 4,
    category: 'How it works',
    readTime: '7 min read',
    date: 'April 2025',
    title: 'From question to done: what a real Factum request looks like',
    excerpt:
      'A walkthrough of a leave request, an access grant, and an onboarding checklist — handled start to finish without a human in the loop.',
    featured: false,
    body: '',
  },
  {
    id: 5,
    category: 'AI & Enterprise',
    readTime: '5 min read',
    date: 'April 2025',
    title: 'The difference between a copilot and an AI employee',
    excerpt:
      'A copilot helps your team work faster. An AI employee does the work. The distinction matters more than it sounds.',
    featured: false,
    body: '',
  },
];

/* ── Featured card ── */
const FeaturedCard = ({ post, onOpen }) => (
  <motion.article
    className="relative cursor-pointer overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.025] p-8 backdrop-blur-xl sm:p-10"
    initial={reveal.hidden}
    whileInView={reveal.visible(0.06)}
    viewport={{ once: true, amount: 0.2 }}
    whileHover={micro.cardHover}
    onClick={() => onOpen(post)}
  >
    <span className="absolute top-4 right-4 h-1.5 w-1.5 rounded-full bg-emerald/60" />

    <div className="mb-5 flex flex-wrap items-center gap-3">
      <span className="rounded-full border border-emerald/25 bg-emerald/[0.08] px-3 py-1 text-[11px] tracking-wide text-emerald">
        {post.category}
      </span>
      <span className="flex items-center gap-1.5 text-[11px] text-white/30">
        <Clock size={11} />
        {post.readTime}
      </span>
      <span className="text-[11px] text-white/25">{post.date}</span>
    </div>

    <h2 className="mb-4 max-w-2xl text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl">
      {post.title}
    </h2>
    <p className="mb-6 max-w-2xl text-sm leading-relaxed text-white/45">{post.excerpt}</p>

    <span className="inline-flex items-center gap-2 text-[13px] font-medium text-emerald">
      Read article <ArrowUpRight size={14} />
    </span>
  </motion.article>
);

/* ── Regular card ── */
const BlogCard = ({ post, index, onOpen }) => (
  <motion.article
    className="relative cursor-pointer rounded-2xl border border-white/[0.09] bg-white/[0.025] p-6 backdrop-blur-xl"
    initial={reveal.hidden}
    whileInView={reveal.visible(0.06 + index * 0.08)}
    viewport={{ once: true, amount: 0.2 }}
    whileHover={micro.cardHover}
    onClick={() => onOpen(post)}
  >
    <span className="absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-emerald/40" />

    <div className="mb-4 flex flex-wrap items-center gap-2">
      <span className="rounded-full border border-white/[0.08] px-3 py-1 text-[11px] tracking-wide text-white/40">
        {post.category}
      </span>
      <span className="flex items-center gap-1 text-[11px] text-white/25">
        <Clock size={10} />
        {post.readTime}
      </span>
    </div>

    <h3 className="mb-3 text-[15px] font-semibold leading-snug tracking-tight text-white">
      {post.title}
    </h3>
    <p className="mb-5 text-[13px] leading-relaxed text-white/40 line-clamp-3">{post.excerpt}</p>

    <div className="flex items-center justify-between">
      <span className="text-[11px] text-white/25">{post.date}</span>
      <span className="flex items-center gap-1 text-[12px] text-emerald/70">
        Read <ChevronRight size={12} />
      </span>
    </div>
  </motion.article>
);

/* ── Article modal / expanded view ── */
const ArticleModal = ({ post, onClose }) => (
  <motion.div
    className="fixed inset-0 z-50 overflow-y-auto bg-[#050505]/95 backdrop-blur-md"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.25 }}
  >
    <div className="container mx-auto px-5 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          type="button"
          onClick={onClose}
          className="mb-10 flex items-center gap-2 text-[13px] text-white/40 transition-colors hover:text-white"
        >
          ← Back to Blogs
        </button>

        <div className="mx-auto max-w-2xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-emerald/25 bg-emerald/[0.08] px-3 py-1 text-[11px] tracking-wide text-emerald">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-[11px] text-white/30">
              <Clock size={11} /> {post.readTime}
            </span>
            <span className="text-[11px] text-white/25">{post.date}</span>
          </div>

          <h1 className="mb-6 text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl">
            {post.title}
          </h1>

          <p className="mb-10 text-base leading-relaxed text-white/50">{post.excerpt}</p>

          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-10" />

          {post.body ? (
            <div className="space-y-5">
              {post.body.split('\n\n').map((para, i) => {
                if (para.startsWith('**') && para.endsWith('**')) {
                  return (
                    <h3 key={i} className="mt-8 text-base font-semibold text-white">
                      {para.replace(/\*\*/g, '')}
                    </h3>
                  );
                }
                return (
                  <p key={i} className="text-[15px] leading-[1.8] text-white/55">
                    {para}
                  </p>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-white/30 italic">Full article coming soon.</p>
          )}
        </div>
      </motion.div>
    </div>
  </motion.div>
);

/* ── Main component ── */
const Blogs = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [openPost, setOpenPost] = useState(null);

  const filtered = activeCategory === 'All'
    ? BLOGS
    : BLOGS.filter((b) => b.category === activeCategory);

  const featured = filtered.find((b) => b.featured);
  const rest = filtered.filter((b) => !b.featured);

  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-[#050505]">
        <AmbientGlow />
        <SparseParticles />

        <div className="relative z-10 container mx-auto px-5 pb-32 pt-36">

          {/* ── Hero ── */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Badge>Quanta Blog</Badge>
            <motion.h1
              className="mx-auto mt-8 max-w-2xl text-[2rem] font-light leading-[1.2] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.25rem]"
              initial={reveal.hidden}
              animate={reveal.visible(0.08)}
            >
              Thinking out loud on{' '}
              <span className="text-emerald">AI at work.</span>
            </motion.h1>
            <motion.p
              className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-white/45 sm:text-[15px]"
              initial={reveal.hidden}
              animate={reveal.visible(0.16)}
            >
              Product updates, ideas on enterprise AI, and honest writing about what we are building and why.
            </motion.p>
          </div>

          {/* ── Category filter ── */}
          <motion.div
            className="mb-12 flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full border px-4 py-1.5 text-[12px] tracking-wide transition-all duration-200 ${
                  activeCategory === cat
                    ? 'border-emerald/40 bg-emerald/[0.1] text-emerald'
                    : 'border-white/[0.08] bg-white/[0.02] text-white/40 hover:border-white/20 hover:text-white/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* ── Featured post ── */}
          {featured && (
            <div className="mx-auto mb-8 max-w-5xl">
              <FeaturedCard post={featured} onOpen={setOpenPost} />
            </div>
          )}

          {/* ── Grid ── */}
          {rest.length > 0 && (
            <div className="mx-auto mb-20 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-2">
              {rest.map((post, i) => (
                <BlogCard key={post.id} post={post} index={i} onOpen={setOpenPost} />
              ))}
            </div>
          )}

          {/* ── Divider ── */}
          <div className="mx-auto mb-20 max-w-5xl">
            <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
          </div>

          {/* ── CTA ── */}
          <motion.div
            className="mx-auto max-w-3xl rounded-2xl border border-white/[0.09] bg-white/[0.025] px-8 py-14 text-center backdrop-blur-xl"
            initial={reveal.hidden}
            whileInView={reveal.visible(0)}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="mb-4 text-[10px] tracking-[0.22em] text-white/30 uppercase">See it live</p>
            <h2 className="mx-auto max-w-xl text-2xl font-light leading-snug tracking-tight text-white sm:text-3xl">
              Bring a request your team handles every week.{' '}
              <span className="text-emerald">We'll show it done in fifteen minutes.</span>
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <motion.button
                type="button"
                onClick={() => goToSection(navigate, 'contact')}
                className="rounded-md bg-white px-6 py-2.5 text-[13px] font-medium text-black transition-opacity hover:opacity-90"
                whileHover={micro.ctaHover}
              >
                Book a demo
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Article overlay ── */}
      <AnimatePresence>
        {openPost && (
          <ArticleModal post={openPost} onClose={() => setOpenPost(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Blogs;
