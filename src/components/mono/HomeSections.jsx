import React, { useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Eye, FileCheck2, Lock, ShieldCheck } from 'lucide-react';
import { goToSection } from '../../lib/goToSection';
import { homeCopy, solutions } from '../../config/seoContent';
import { brandLogos } from '../../assets/brands';
import {
  Bracket,
  Btn,
  Chip,
  CropMarks,
  HexEdge,
  MonoLabel,
  Section,
  SectionHeading,
} from './ui';
import { ease, fadeUp } from './motion';
import QuantumWrite from './QuantumWrite';
import QuantumReveal from './QuantumReveal';
import {
  HeroScene,
  IsoChip,
  IsoCube,
  IsoDocs,
  IsoGlobe,
  IsoLayers,
  IsoPlus,
  IsoPyramid,
  IsoServer,
  Tunnel,
} from './iso';

/* ───────────────────────── Hero ───────────────────────── */

export const MonoHero = () => {
  const navigate = useNavigate();
  const { hero } = homeCopy;
  return (
    <section id="hero" className="grain relative overflow-hidden bg-paper pb-14 pt-14 lg:pt-20">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 md:px-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="font-inter text-[2.4rem] font-semibold leading-[1.06] tracking-[-0.045em] text-ink-3 sm:text-[3.2rem] lg:text-[3.45rem]"
        >
          Hire <Bracket className="whitespace-nowrap">an AI employee</Bracket>
          <br className="hidden sm:block" /> that learns <Bracket className="whitespace-nowrap">
            <QuantumWrite text="your company" delay={700} stopOffset="0.26em" />
          </Bracket>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease }}
          className="lg:pt-3"
        >
          <p className="max-w-md font-inter text-[15px] leading-relaxed text-ink-2">{hero.subhead}</p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            <Btn onClick={() => goToSection(navigate, 'solutions')}>{hero.ctaPrimary}</Btn>
            <Btn variant="light" onClick={() => goToSection(navigate, 'contact')}>
              {hero.ctaSecondary}
            </Btn>
          </div>
          <div className="mt-9 max-w-md">
            <MonoLabel className="text-[10px]">{hero.cardsLabel}</MonoLabel>
            <div className="mt-3 grid grid-cols-3 overflow-hidden rounded-[6px] bg-white shadow-[0_0_0_1px_rgba(10,10,11,0.07)]">
              {hero.suiteCards.map((c, i) => {
                const live = !/soon/i.test(c.sub);
                return (
                  <button
                    key={c.label}
                    type="button"
                    onClick={() => goToSection(navigate, 'solutions')}
                    className={`group flex flex-col items-start gap-1 px-3.5 py-3 text-left transition-colors hover:bg-paper-2 ${
                      i > 0 ? 'border-l border-paper-line' : ''
                    }`}
                  >
                    <span className="flex items-center gap-2 font-inter text-[13px] font-medium text-ink">
                      <span
                        aria-hidden
                        className={`h-[7px] w-[7px] shrink-0 ${live ? 'bg-ink' : 'border border-ink-4'}`}
                      />
                      {c.label}
                    </span>
                    <span
                      className={`pl-[15px] font-mono text-[9.5px] uppercase tracking-[0.08em] ${
                        live ? 'text-ink-3' : 'text-ink-4'
                      }`}
                    >
                      {c.sub}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.25, ease }}
        className="mx-auto mt-12 w-full max-w-[920px] px-5 lg:mt-14"
      >
        <QuantumReveal duration={1.8} delay={0.9}>
          <HeroScene className="h-auto w-full" />
        </QuantumReveal>
      </motion.div>
      <HexEdge />
    </section>
  );
};

/* ───────────────────────── Problem: tabbed dark panel ───────────────────────── */

const REQUESTS = [
  'Where do I find the leave policy?',
  'Can someone reset my password?',
  'Is my expense approved yet?',
  'When does my laptop arrive?',
  'Who approves contractor access?',
  'How many days off do I have left?',
  'Can I get added to the Jira project?',
  'What is the parental leave policy?',
];

export const MonoProblem = () => {
  const navigate = useNavigate();
  const { problem } = homeCopy;
  const tabs = [
    { key: 'people', label: 'What it costs your people', items: problem.threatsLeft },
    { key: 'process', label: 'What it costs the process', items: problem.threatsRight },
  ];
  const [tab, setTab] = useState(0);

  return (
    <Section id="problem" tone="light" className="py-24 sm:py-28">
      <SectionHeading label={problem.badge} title={problem.headline + '.'} sub={problem.body} />

      <motion.div {...fadeUp(0.1)} className="mt-14">
        <div
          role="tablist"
          aria-label="Costs"
          className="inline-flex rounded-[6px] border border-ink/80 bg-white p-[2px]"
        >
          {tabs.map((t, i) => (
            <button
              key={t.key}
              role="tab"
              aria-selected={tab === i}
              type="button"
              onClick={() => setTab(i)}
              className={`rounded-[4px] px-3 py-1.5 font-inter text-[12.5px] transition-colors ${
                tab === i ? 'bg-ink text-white' : 'text-ink hover:bg-paper-2'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="relative mt-3 overflow-hidden bg-[#0C0C0D] p-3 text-white">
          <CropMarks size={10} className="border-white/40" />
          <div className="grid min-h-[420px] gap-px md:grid-cols-[1.15fr_1fr]">
            {/* list */}
            <div className="relative flex flex-col justify-between p-6 sm:p-10">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
                <span>{problem.panelTitle}</span>
                <span>
                  0{tab + 1} / 0{tabs.length}
                </span>
              </div>
              <AnimatePresence mode="wait">
                <motion.ol
                  key={tab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease }}
                  className="my-8 space-y-4"
                >
                  {tabs[tab].items.map((item, i) => (
                    <li key={item} className="flex gap-4 border-b border-white/10 pb-4 last:border-0">
                      <span className="font-mono text-[11px] text-white/35">[{String(i + 1).padStart(2, '0')}]</span>
                      <span className="font-inter text-[15px] leading-snug text-white/85">{item}</span>
                    </li>
                  ))}
                </motion.ol>
              </AnimatePresence>
              <div>
                <Btn variant="light" onClick={() => goToSection(navigate, 'learning')}>
                  {problem.cta}
                </Btn>
              </div>
            </div>

            {/* inbox ticker */}
            <div className="relative overflow-hidden border-t border-white/10 md:border-l md:border-t-0">
              <div className="dot-field absolute inset-0 opacity-[0.18]" />
              <div className="absolute inset-x-0 top-0 z-[1] h-24 bg-gradient-to-b from-[#0C0C0D] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 z-[1] h-24 bg-gradient-to-t from-[#0C0C0D] to-transparent" />
              <div className="absolute left-5 top-5 z-[2] font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
                #help-desk · live
              </div>
              <div className="relative h-[340px] md:absolute md:inset-0 md:h-auto">
                <div className="mono-ticker space-y-3 px-5 pt-14 sm:px-8">
                  {[...REQUESTS, ...REQUESTS].map((r, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-[6px] border border-white/10 bg-white/[0.04] px-3.5 py-3 backdrop-blur-sm"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] bg-white/10 font-mono text-[9px] text-white/60">
                        {String.fromCharCode(65 + (i % 8))}
                      </span>
                      <span className="font-inter text-[13px] text-white/75">{r}</span>
                      <span className="ml-auto font-mono text-[10px] text-white/30">
                        9:{String(10 + ((i * 7) % 49)).padStart(2, '0')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-5 left-1/2 z-[2] -translate-x-1/2 whitespace-nowrap font-inter text-lg font-medium tracking-tight text-white">
                <span className="underline decoration-white/70 underline-offset-4">{problem.markStrong}</span>{' '}
                {problem.markRest}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

/* ───────────────────────── Principles: sticky stepper ───────────────────────── */

const STEP_ART = [IsoDocs, IsoPyramid, IsoCube, IsoLayers];
const STEP_CHIP = ['Day 1', 'Day 30', 'Day 90', 'Always'];

/* What the AI employee has written down: grows each step, prunes a wrong note at the end */
const NOTES = [
  { id: '01', text: 'Quote the policy word for word, never paraphrase it', helped: 34, wrong: 0, at: 0 },
  { id: '02', text: 'Friday time-off: check who else on the team is already out', helped: 21, wrong: 1, at: 1 },
  { id: '03', text: 'Laptop requests go to IT Hardware, not the general queue', helped: 17, wrong: 0, at: 1 },
  { id: '04', text: 'Half-days do not need a manager sign-off', helped: 2, wrong: 9, at: 2, pruneAt: 3 },
];

const NOTE_STATUS = ['Learning from your handbook', 'New notes highlighted', 'New note highlighted', 'Dropped 04: wrong 9 times'];

const Notebook = ({ active }) => {
  const visible = NOTES.filter((n) => n.at <= active);
  const inUse = visible.filter((n) => !(n.pruneAt !== undefined && active >= n.pruneAt)).length;
  return (
    <div className="mt-7 hidden bg-white/70 p-4 shadow-[0_0_0_1px_rgba(10,10,11,0.06)] md:block">
      <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.12em]">
        <span className="text-ink-2">What it has learned</span>
        <span className="text-ink-4">{inUse} notes in use</span>
      </div>
      <ul className="space-y-1.5">
        <AnimatePresence initial={false}>
          {visible.map((n) => {
            const fresh = n.at === active;
            const pruned = n.pruneAt !== undefined && active >= n.pruneAt;
            return (
              <motion.li
                key={n.id}
                layout
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: pruned ? 0.55 : 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease }}
                className={`flex items-start gap-3 px-2.5 py-2 ${
                  fresh && !pruned ? 'bg-[#2f6bff]/[0.06] shadow-[inset_2px_0_0_#2f6bff]' : ''
                } ${pruned ? 'shadow-[inset_2px_0_0_#C4C4CA]' : ''}`}
              >
                <span className="mt-[2px] font-mono text-[10px] text-ink-4">{n.id}</span>
                <span
                  className={`flex-1 font-inter text-[12.5px] leading-snug text-ink-2 ${
                    pruned ? 'line-through decoration-ink-4' : ''
                  }`}
                >
                  {n.text}
                </span>
                <span className="shrink-0 font-mono text-[10px] tabular-nums text-ink-3">
                  +{n.helped}
                  {n.wrong > 0 && <span className="ml-1.5 text-ink-4">-{n.wrong}</span>}
                </span>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
      <p className="mt-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-4">
        <span className="h-[6px] w-[6px] bg-ink" />
        {NOTE_STATUS[active]}
      </p>
    </div>
  );
};

export const MonoPrinciples = () => {
  const { learning } = homeCopy;
  const steps = learning.steps;
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const i = Math.min(steps.length - 1, Math.max(0, Math.floor(v * steps.length)));
    setActive((prev) => (prev === i ? prev : i));
  });
  const step = steps[active];
  const Art = STEP_ART[active];
  const goToStep = (i) => {
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const travel = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + travel * ((i + 0.5) / steps.length), behavior: 'smooth' });
  };

  return (
    <section id="learning" className="grain relative scroll-mt-16 bg-paper">
      {/* intro */}
      <div className="relative mx-auto flex min-h-[70vh] max-w-[1200px] items-center justify-center px-5 py-24 md:px-10">
        <SectionHeading label={learning.badge} title={learning.headline} sub={learning.subhead} />
        <HexEdge />
      </div>

      {/* sticky track */}
      <div ref={ref} className="relative" style={{ height: `${steps.length * 80}vh` }}>
        <div className="sticky top-16 flex h-[calc(100vh-4rem)] items-center overflow-hidden">
          <HexEdge position="top" />
          <div className="mx-auto grid w-full max-w-[1200px] items-center gap-8 px-5 md:grid-cols-[220px_1fr] md:gap-12 md:px-10 lg:grid-cols-[190px_260px_1fr] lg:gap-14">
            {/* step index */}
            <ol className="hidden lg:block">
              {steps.map((s, i) => (
                <li key={s.step}>
                  <button
                    type="button"
                    onClick={() => goToStep(i)}
                    className={`group flex w-full items-baseline gap-3 border-l py-3 pl-4 text-left transition-colors ${
                      i === active ? 'border-ink' : 'border-paper-line hover:border-ink-4'
                    }`}
                  >
                    <span className={`font-mono text-[10.5px] ${i === active ? 'text-ink' : 'text-ink-4'}`}>
                      [{s.step}]
                    </span>
                    <span
                      className={`font-inter text-[14px] transition-colors ${
                        i === active ? 'font-medium text-ink' : 'text-ink-4 group-hover:text-ink-3'
                      }`}
                    >
                      {s.title}
                    </span>
                  </button>
                </li>
              ))}
            </ol>

            {/* illustration */}
            <QuantumReveal className="relative mx-auto aspect-square w-[160px] md:w-[220px] lg:w-[260px]">
              <CropMarks size={22} />
              <span className="absolute -top-5 left-0 font-mono text-[9.5px] uppercase tracking-[0.12em] text-ink-4">
                fig. 0{active + 1}
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.94, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 1.04, filter: 'blur(4px)' }}
                  transition={{ duration: 0.45, ease }}
                  className="absolute inset-6"
                >
                  <Art className="h-full w-full" />
                </motion.div>
              </AnimatePresence>
            </QuantumReveal>

            {/* copy + notebook */}
            <div className="min-w-0">
              <div className="flex items-center justify-between border-b border-paper-line pb-2.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-3">
                <span>How it learns</span>
                <span>
                  <span className="text-ink">0{active + 1}</span> / 0{steps.length}
                </span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease }}
                >
                  <h3 className="mt-6 flex items-center gap-3 font-inter text-[1.6rem] font-medium tracking-[-0.03em] text-ink">
                    {step.title}
                    <Chip tone="soft">{STEP_CHIP[active]}</Chip>
                  </h3>
                  <p className="mt-3 max-w-md font-inter text-[14px] leading-relaxed text-ink-3">{step.body}</p>
                </motion.div>
              </AnimatePresence>

              <Notebook active={active} />

              <div className="mt-6 flex gap-1.5">
                {steps.map((s, i) => (
                  <button
                    key={s.step}
                    type="button"
                    aria-label={`Go to ${s.title}`}
                    onClick={() => goToStep(i)}
                    className="flex-1 py-1.5"
                  >
                    <span
                      className={`block h-[3px] rounded-full transition-colors duration-500 ${
                        i <= active ? 'bg-ink' : 'bg-paper-line'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* proof row */}
      <div className="relative mx-auto max-w-[1200px] px-5 pb-24 md:px-10">
        <motion.div {...fadeUp(0)} className="mx-auto max-w-[880px] border-t border-paper-line pt-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_2fr]">
            <div>
              <MonoLabel>Transparency</MonoLabel>
              <h3 className="mt-3 font-inter text-xl font-medium tracking-[-0.02em] text-ink">
                {learning.proofTitle}
              </h3>
              <p className="mt-2 font-inter text-[13px] leading-relaxed text-ink-3">{learning.proofBody}</p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-3">
              {learning.proofPoints.map((p, i) => (
                <li key={p.k} className="border-t border-ink pt-3">
                  <span className="font-mono text-[10px] text-ink-4">[0{i + 1}]</span>
                  <p className="mt-2 font-inter text-[13.5px] font-medium text-ink">{p.k}</p>
                  <p className="mt-1 font-inter text-[12.5px] leading-snug text-ink-3">{p.v}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ───────────────────────── Solutions roster + logos ───────────────────────── */

const SOLUTION_ART = {
  factum: IsoLayers,
  quaero: IsoGlobe,
  resolvo: IsoChip,
  solvo: IsoServer,
  munera: IsoCube,
  medeor: IsoDocs,
  fides: IsoPyramid,
};

const RosterCard = ({ s, i }) => {
  const Art = SOLUTION_ART[s.key] || IsoCube;
  const live = s.status === 'live';
  const inner = (
    <>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10.5px] text-ink-4">[{String(i + 1).padStart(2, '0')}]</span>
        {live ? <Chip tone="dark">Live</Chip> : <Chip tone="soft">Soon</Chip>}
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <h3 className="font-inter text-[15px] font-medium text-ink">{s.name}</h3>
        <span className="font-inter text-[12px] text-ink-3">{s.vertical}</span>
      </div>
      <div className="relative my-5 h-[120px] transition-transform duration-500 group-hover:-translate-y-1">
        <QuantumReveal className="h-full">
          <Art className={`h-[120px] w-full ${live ? '' : 'opacity-60 grayscale'}`} />
        </QuantumReveal>
      </div>
      <p className="font-inter text-[12.5px] leading-snug text-ink-3">{s.tagline}</p>
      {live && (
        <span className="mt-4 inline-flex items-center gap-1 font-inter text-[12px] font-medium text-ink">
          Visit {s.name} <ArrowUpRight size={13} />
        </span>
      )}
    </>
  );
  const cls =
    'group relative flex h-full flex-col border-t border-paper-line pb-6 pt-3 transition-colors hover:border-ink';
  return live ? (
    <a href={s.url} target="_blank" rel="noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
};

export const MonoRoster = () => {
  const navigate = useNavigate();
  const { solutions: copy, hero } = homeCopy;
  return (
    <Section id="solutions" tone="light" className="py-24 sm:py-32">
      <span id="ai-employees" className="absolute -top-16" aria-hidden />
      <SectionHeading label={copy.badge} title={`${copy.headline} ${copy.headlineAccent}`} sub={copy.subhead} />
      <motion.div {...fadeUp(0.1)} className="mt-8 flex justify-center">
        <Btn as={Link} to="/faqs">
          Read the FAQs
        </Btn>
      </motion.div>

      <div className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {solutions.map((s, i) => (
          <motion.div key={s.key} {...fadeUp(0.04 * (i % 4))}>
            <RosterCard s={s} i={i} />
          </motion.div>
        ))}
        <motion.div {...fadeUp(0.12)}>
          <button
            type="button"
            onClick={() => goToSection(navigate, 'contact')}
            className="group flex h-full w-full flex-col border-t border-dashed border-ink-4 pb-6 pt-3 text-left"
          >
            <span className="font-mono text-[10.5px] text-ink-4">[08]</span>
            <h3 className="mt-2 font-inter text-[15px] font-medium text-ink">Your team next</h3>
            <div className="my-5 h-[120px] transition-transform duration-500 group-hover:-translate-y-1">
              <QuantumReveal className="h-full">
                <IsoPlus className="h-[120px] w-full" />
              </QuantumReveal>
            </div>
            <p className="font-inter text-[12.5px] leading-snug text-ink-3">
              Don’t see your team? Tell us what it handles every week.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 font-inter text-[12px] font-medium text-ink">
              Talk to us <ArrowUpRight size={13} />
            </span>
          </button>
        </motion.div>
      </div>

      <motion.div {...fadeUp(0)} className="mt-24 text-center">
        <MonoLabel>{hero.trustLabel}</MonoLabel>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {brandLogos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              loading="lazy"
              className={`w-auto object-contain opacity-80 brightness-0 transition-opacity hover:opacity-100 ${
                logo.wide ? 'h-[18px]' : 'h-6'
              }`}
            />
          ))}
        </div>
      </motion.div>
      <HexEdge />
    </Section>
  );
};

/* ───────────────────────── Economics: announcement layout ───────────────────────── */

export const MonoEconomics = () => {
  const navigate = useNavigate();
  const { economics } = homeCopy;
  return (
    <Section id="economics" className="py-24 sm:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-16">
        <motion.div {...fadeUp(0)}>
          <MonoLabel>{economics.badge}</MonoLabel>
          <h2 className="mt-5 whitespace-pre-line font-inter text-[1.9rem] font-medium leading-[1.12] tracking-[-0.035em] text-ink sm:text-[2.2rem]">
            <QuantumWrite text={economics.headline} />
          </h2>
          <Btn className="mt-8" onClick={() => goToSection(navigate, 'contact')}>
            Get a quote
          </Btn>
        </motion.div>

        <motion.div {...fadeUp(0.08)} className="relative mx-auto w-[200px] p-4 sm:w-[230px]">
          <CropMarks size={26} />
          <QuantumReveal>
            <Tunnel className="h-auto w-full" />
          </QuantumReveal>
        </motion.div>

        <motion.div {...fadeUp(0.16)} className="max-w-xs lg:justify-self-end">
          <p className="font-inter text-[14px] leading-relaxed text-ink-3">{economics.subhead}</p>
          <p className="mt-4 font-inter text-[14px] font-medium leading-relaxed text-ink">{economics.kicker}</p>
        </motion.div>
      </div>

      <div className="mt-20 grid gap-8 sm:grid-cols-3">
        {economics.columns.map((c, i) => (
          <motion.div key={c.title} {...fadeUp(0.05 * i)} className="border-t border-paper-line pt-3">
            <span className="font-mono text-[10.5px] text-ink-4">[0{i + 1}]</span>
            <h3 className="mt-2 font-inter text-[15px] font-medium text-ink">{c.title}</h3>
            <p className="mt-2 font-inter text-[13px] leading-relaxed text-ink-3">{c.body}</p>
          </motion.div>
        ))}
      </div>
      <HexEdge />
    </Section>
  );
};

/* ───────────────────────── Security: blog-card grid ───────────────────────── */

const SEC_META = [
  { Icon: ShieldCheck, tag: 'Approval' },
  { Icon: FileCheck2, tag: 'Audit' },
  { Icon: Lock, tag: 'Privacy' },
  { Icon: Eye, tag: 'Access' },
];

export const MonoSecurity = () => {
  const navigate = useNavigate();
  const { security } = homeCopy;
  return (
    <Section id="security" tone="light" className="py-24 sm:py-32">
      <SectionHeading label={security.badge} title={security.headline} sub={security.subhead} />
      <div className="mt-16 grid gap-px overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
        {security.points.map((p, i) => {
          const { Icon, tag } = SEC_META[i % SEC_META.length];
          return (
            <motion.article
              key={p.title}
              {...fadeUp(0.05 * i)}
              className="flex min-h-[230px] flex-col p-4 transition-colors hover:bg-white/60"
            >
              <div className="flex items-center gap-1.5">
                <span className="flex h-[22px] w-[22px] items-center justify-center rounded-[4px] border border-ink/70">
                  <Icon size={12} strokeWidth={1.6} />
                </span>
                <Chip>{tag}</Chip>
              </div>
              <h3 className="mt-5 font-inter text-[15px] font-medium leading-snug text-ink">{p.title}</h3>
              <p className="mt-2 font-inter text-[13px] leading-relaxed text-ink-3">{p.body}</p>
              <div className="mt-auto flex items-center justify-between pt-6">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-2">
                  Control 0{i + 1} <span className="text-ink-5">|</span> 0{security.points.length}
                </span>
              </div>
            </motion.article>
          );
        })}
      </div>
      <motion.div {...fadeUp(0)} className="mt-14 flex flex-col items-center gap-5 text-center">
        <p className="max-w-md font-inter text-[13px] leading-relaxed text-ink-3">{security.footnote}</p>
        <Btn variant="light" onClick={() => goToSection(navigate, 'contact')}>
          Request an architecture review
        </Btn>
      </motion.div>
    </Section>
  );
};

/* ───────────────────────── Contact ───────────────────────── */

const field =
  'w-full rounded-[6px] border border-paper-line bg-white px-3.5 py-2.5 font-inter text-[13.5px] text-ink placeholder:text-ink-4 outline-none transition-colors focus:border-ink';
const label = 'mb-1.5 block font-mono text-[10px] uppercase tracking-[0.12em] text-ink-3';

const EMPTY = {
  name: '',
  email: '',
  company: '',
  phone: '',
  message: '',
  industry: 'healthcare',
  interest: 'platform',
};

export const MonoContact = () => {
  const { contact } = homeCopy;
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    setSent(true);
    setForm(EMPTY);
  };

  return (
    <Section id="contact" className="py-24 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
        <motion.div {...fadeUp(0)}>
          <MonoLabel>Contact</MonoLabel>
          <h2 className="mt-5 font-inter text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.04em] text-ink sm:text-5xl">
            <QuantumWrite text={contact.headline} />
          </h2>
          <p className="mt-5 max-w-sm font-inter text-[14px] leading-relaxed text-ink-3">{contact.subhead}</p>
          <ul className="mt-10 space-y-3 border-t border-paper-line pt-6">
            {['15-minute walkthrough', 'Bring a real request', 'Trial with your own targets'].map((t, i) => (
              <li key={t} className="flex gap-3 font-inter text-[13px] text-ink-2">
                <span className="font-mono text-[10.5px] text-ink-4">[0{i + 1}]</span>
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.form
          {...fadeUp(0.08)}
          onSubmit={onSubmit}
          className="relative bg-paper-2 p-6 shadow-[0_0_0_1px_rgba(10,10,11,0.05)] sm:p-8"
        >
          <CropMarks size={12} className="border-ink-4" />
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="c-name">Full name</label>
              <input id="c-name" name="name" required value={form.name} onChange={onChange} className={field} placeholder="Jane Doe" />
            </div>
            <div>
              <label className={label} htmlFor="c-email">Work email</label>
              <input id="c-email" name="email" type="email" required value={form.email} onChange={onChange} className={field} placeholder="jane@company.com" />
            </div>
            <div>
              <label className={label} htmlFor="c-company">Company</label>
              <input id="c-company" name="company" value={form.company} onChange={onChange} className={field} placeholder="Acme Inc." />
            </div>
            <div>
              <label className={label} htmlFor="c-phone">Phone</label>
              <input id="c-phone" name="phone" value={form.phone} onChange={onChange} className={field} placeholder="+91 …" />
            </div>
            <div>
              <label className={label} htmlFor="c-industry">Industry</label>
              <select id="c-industry" name="industry" value={form.industry} onChange={onChange} className={`${field} appearance-none`}>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="retail">Retail</option>
                <option value="logistics">Logistics</option>
                <option value="education">Education</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className={label} htmlFor="c-interest">Interested in</label>
              <select id="c-interest" name="interest" value={form.interest} onChange={onChange} className={`${field} appearance-none`}>
                <option value="platform">The full platform</option>
                <option value="employee-assistant">Employee assistant</option>
                <option value="it-support">IT support</option>
                <option value="onboarding">Onboarding</option>
                <option value="recruiter">Recruiter</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className={label} htmlFor="c-message">Which team is drowning first?</label>
              <textarea id="c-message" name="message" rows={4} value={form.message} onChange={onChange} className={`${field} resize-none`} placeholder="Tell us about the requests they handle every week…" />
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Btn type="submit">{contact.submit}</Btn>
            <AnimatePresence>
              {sent && (
                <motion.span
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="font-inter text-[13px] text-ink-2"
                  role="status"
                >
                  {contact.success}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.form>
      </div>
    </Section>
  );
};

/* ───────────────────────── Closing CTA ───────────────────────── */

export const MonoCTA = () => {
  const navigate = useNavigate();
  const { cta } = homeCopy;
  return (
    <Section tone="light" className="py-28 sm:py-36" inner="text-center">
      <motion.h2
        {...fadeUp(0)}
        className="mx-auto max-w-xl font-inter text-[2.2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-ink sm:text-5xl"
      >
        <QuantumWrite text={cta.headline} />
      </motion.h2>
      <motion.p {...fadeUp(0.06)} className="mx-auto mt-5 max-w-md font-inter text-[14px] leading-relaxed text-ink-3">
        {cta.body}
      </motion.p>
      <motion.div {...fadeUp(0.12)} className="mt-8 flex justify-center gap-2.5">
        <Btn onClick={() => goToSection(navigate, 'contact')}>{cta.button}</Btn>
        <Btn variant="light" onClick={() => goToSection(navigate, 'solutions')}>
          {homeCopy.hero.ctaPrimary}
        </Btn>
      </motion.div>
      <HexEdge />
    </Section>
  );
};
