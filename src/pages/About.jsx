import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Zap, ShieldCheck, Target, MapPin } from 'lucide-react';
import { reveal, atmospheric, micro } from '../lib/cinematicMotion';
import { goToSection } from '../lib/goToSection';
import { footerCopy } from '../config/seoContent';

/* ── Ambient background — mirrors CinematicHero's HorizonArcs ── */
const AmbientGlow = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
    {/* top centre bloom */}
    <motion.div
      className="absolute top-[-10%] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald/10 blur-[120px]"
      animate={atmospheric.breathe}
    />
    {/* bottom-left accent */}
    <motion.div
      className="absolute bottom-[10%] left-[-8%] h-[280px] w-[280px] rounded-full bg-emerald/8 blur-[90px]"
      animate={atmospheric.breathe}
    />
    {/* top-right accent */}
    <motion.div
      className="absolute top-[20%] right-[-6%] h-[220px] w-[220px] rounded-full bg-emerald/6 blur-[80px]"
      animate={atmospheric.breathe}
    />
    {/* subtle horizon line */}
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald/20 to-transparent" />
  </div>
);

/* ── Sparse floating dots — same pattern as CinematicHero ── */
const SparseParticles = () => {
  const dots = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
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
          className="absolute rounded-full bg-emerald/50"
          style={{ left: d.left, top: d.top, width: d.size, height: d.size }}
          initial={{ opacity: 0 }}
          animate={atmospheric.particleFloat(d.delay)}
        />
      ))}
    </div>
  );
};

/* ── Section badge — same pill style as home sections ── */
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

/* ── Values data ── */
const VALUES = [
  {
    Icon: Zap,
    title: 'Simple',
    body: 'AI deployment should be as easy as having a conversation. Our Generative Workflow Engine™ makes complex enterprise automation accessible to everyone.',
  },
  {
    Icon: ShieldCheck,
    title: 'Trusted',
    body: 'Security and compliance are built into our core. With data governance, private models, and enterprise-grade encryption, your data stays safe.',
  },
  {
    Icon: Target,
    title: 'Accurate',
    body: 'Our advanced AI technology delivers high accuracy by intelligently optimising performance for enterprise-grade applications.',
  },
];

/* ── Value card — mirrors hero HUD cards ── */
const ValueCard = ({ Icon, title, body, index }) => (
  <motion.div
    className="relative rounded-2xl border border-white/[0.09] bg-white/[0.035] p-8 backdrop-blur-xl"
    initial={reveal.hidden}
    whileInView={reveal.visible(0.08 + index * 0.1)}
    viewport={{ once: true, amount: 0.3 }}
    whileHover={micro.cardHover}
  >
    {/* corner emerald dot */}
    <span className="absolute top-4 right-4 h-1.5 w-1.5 rounded-full bg-emerald/60" />
    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-emerald/20 bg-emerald/[0.08]">
      <Icon size={18} className="text-emerald" strokeWidth={1.5} />
    </div>
    <h3 className="mb-3 text-base font-semibold tracking-tight text-white">{title}</h3>
    <p className="text-sm leading-relaxed text-white/45">{body}</p>
  </motion.div>
);

/* ── Main component ── */
const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>About Quanta | AI Employees for Every Team</title>
        <meta
          name="description"
          content="Quanta builds AI employees — one for each team. They handle everyday requests from question to done, and get better at your company every week."
        />
      </Helmet>

      {/* Full-page void background matching home */}
      <div className="relative min-h-screen overflow-hidden bg-[#050505]">
        <AmbientGlow />
        <SparseParticles />

        <div className="relative z-10 container mx-auto px-5 pb-32 pt-36">

          {/* ── Hero block ── */}
          <div className="mx-auto mb-24 max-w-3xl text-center">
            <Badge>About Quanta</Badge>

            <motion.h1
              className="mx-auto mt-8 max-w-2xl text-[2rem] font-light leading-[1.2] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.25rem]"
              initial={reveal.hidden}
              animate={reveal.visible(0.08)}
            >
              AI employees that{' '}
              <span className="text-emerald">get the job done.</span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-white/45 sm:text-[15px]"
              initial={reveal.hidden}
              animate={reveal.visible(0.16)}
            >
              {footerCopy.blurb}
            </motion.p>

            <motion.div
              className="mt-9 flex flex-wrap items-center justify-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
            >
              <motion.button
                type="button"
                onClick={() => goToSection(navigate, 'contact')}
                className="rounded-md bg-white px-5 py-2.5 text-[13px] font-medium text-black transition-opacity hover:opacity-90"
                whileHover={micro.ctaHover}
              >
                Book a demo
              </motion.button>
            </motion.div>
          </div>

          {/* ── Divider line ── */}
          <div className="mx-auto mb-24 max-w-5xl">
            <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
          </div>

          {/* ── Mission strip ── */}
          <div className="mx-auto mb-24 max-w-5xl">
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                { label: 'Founded', value: '2023', sub: 'Bangalore, India' },
                { label: 'Products live', value: '2', sub: 'Factum · Quaero' },
                { label: 'Focus', value: 'Enterprise', sub: 'HR · IT · Sales' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.025] px-8 py-7 text-center backdrop-blur-sm"
                  initial={reveal.hidden}
                  whileInView={reveal.visible(i * 0.1)}
                  viewport={{ once: true, amount: 0.4 }}
                >
                  <p className="text-[10px] tracking-[0.18em] text-white/30 uppercase">{stat.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-[11px] text-emerald/70">{stat.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Core values ── */}
          <div className="mx-auto mb-24 max-w-5xl">
            <div className="mb-12 text-center">
              <Badge>Our values</Badge>
              <motion.h2
                className="mt-6 text-2xl font-light tracking-tight text-white sm:text-3xl lg:text-4xl"
                initial={reveal.hidden}
                whileInView={reveal.visible(0.08)}
                viewport={{ once: true }}
              >
                The principles behind{' '}
                <span className="text-emerald">every decision.</span>
              </motion.h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {VALUES.map((v, i) => (
                <ValueCard key={v.title} {...v} index={i} />
              ))}
            </div>
          </div>

          {/* ── Divider line ── */}
          <div className="mx-auto mb-24 max-w-5xl">
            <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
          </div>

          {/* ── Headquarters ── */}
          <div className="mx-auto mb-24 max-w-5xl">
            <motion.div
              className="flex flex-col items-start gap-6 rounded-2xl border border-white/[0.09] bg-white/[0.025] p-8 backdrop-blur-xl sm:flex-row sm:items-center sm:p-10"
              initial={reveal.hidden}
              whileInView={reveal.visible(0)}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald/20 bg-emerald/[0.08]">
                <MapPin size={20} className="text-emerald" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.18em] text-white/30 uppercase mb-1">Headquarters</p>
                <p className="text-sm font-medium text-white/80 whitespace-pre-line">{footerCopy.headquarters}</p>
              </div>
            </motion.div>
          </div>

          {/* ── CTA block — mirrors CinematicCTA style ── */}
          <motion.div
            className="mx-auto max-w-3xl rounded-2xl border border-white/[0.09] bg-white/[0.025] px-8 py-14 text-center backdrop-blur-xl"
            initial={reveal.hidden}
            whileInView={reveal.visible(0)}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="mb-4 text-[10px] tracking-[0.22em] text-white/30 uppercase">Get started</p>
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
    </>
  );
};

export default About;
