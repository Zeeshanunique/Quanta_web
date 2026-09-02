import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { reveal } from '../../lib/cinematicMotion';
import { goToSection } from '../../lib/goToSection';
import { homeCopy } from '../../config/seoContent';
import { CinematicArrow, CinematicChevron } from '../icons/CinematicIcons';

const COPY = homeCopy.learning;

/**
 * The playbook visual: entries accumulate as you scroll the loop, each with a
 * helpful/harmful counter. Step 04 prunes the harmful one — showing the
 * refine half of grow-and-refine rather than just endless growth.
 */
const ENTRIES = [
  { id: '01', text: 'Always quote the policy word for word — never paraphrase it', helpful: 34, harmful: 0 },
  { id: '02', text: 'Friday time-off — check who else on the team is already out', helpful: 21, harmful: 1 },
  { id: '03', text: 'Laptop requests go to IT Hardware, not the general IT queue', helpful: 17, harmful: 0 },
  // written at step 03, then dropped at step 04
  { id: '04', text: 'Half-days do not need a manager sign-off', helpful: 2, harmful: 9, addedAt: 2, pruned: true },
];

const Counter = ({ n, tone }) => (
  <span
    className={`inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-medium whitespace-nowrap ${
      tone === 'good'
        ? 'bg-emerald/15 text-emerald-deep'
        : 'bg-rose-500/10 text-rose-600'
    }`}
    title={tone === 'good' ? 'Times this helped' : 'Times this was wrong'}
  >
    <span className="font-semibold tabular-nums">{n}</span>
    {tone === 'good' ? 'helped' : 'wrong'}
  </span>
);

const PlaybookEntry = ({ entry, active }) => {
  // Entries that exist all along stay put; e4 is written at 03 and pruned at 04.
  const pending = entry.addedAt !== undefined && active < entry.addedAt;
  const justAdded = entry.addedAt !== undefined && active === entry.addedAt;
  const isPruned = entry.pruned && active >= 3;

  return (
    <motion.li
      initial={false}
      animate={{
        opacity: pending ? 0.25 : isPruned ? 0.4 : 1,
        borderColor: justAdded
          ? 'rgba(0,232,160,0.85)'
          : isPruned
            ? 'rgba(253,164,175,0.7)'
            : 'rgba(11,61,52,0.10)',
        backgroundColor: justAdded ? 'rgba(0,232,160,0.07)' : 'rgba(255,255,255,1)',
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-start gap-3 rounded-xl border px-3.5 py-3 ${
        isPruned ? 'border-dashed' : ''
      }`}
    >
      <span className="mt-0.5 font-code text-[10px] tracking-wider text-emerald-deep/30">
        {entry.id}
      </span>
      <span
        className={`flex-1 text-[13px] leading-snug text-emerald-deep/85 ${
          isPruned ? 'line-through decoration-rose-400/60' : ''
        }`}
      >
        {entry.text}
      </span>
      <span className="flex shrink-0 gap-1">
        <Counter n={entry.helpful} tone="good" />
        {entry.harmful > 0 && <Counter n={entry.harmful} tone="bad" />}
      </span>
    </motion.li>
  );
};

const StepRow = ({ item, index, active, setActive }) => {
  const isActive = active === index;
  return (
    <li>
      <button
        type="button"
        onMouseEnter={() => setActive(index)}
        onFocus={() => setActive(index)}
        onClick={() => setActive(index)}
        aria-current={isActive}
        className="w-full cursor-pointer border-l-2 py-3.5 pl-5 text-left transition-colors hover:border-emerald/40"
        style={{ borderColor: isActive ? '#00E8A0' : 'rgba(11,61,52,0.10)' }}
      >
        <span className="flex items-baseline gap-3">
          <span
            className={`font-code text-[11px] tabular-nums transition-colors ${
              isActive ? 'text-emerald' : 'text-emerald-deep/30'
            }`}
          >
            {item.step}
          </span>
          <span
            className={`text-[15px] font-semibold transition-colors sm:text-base ${
              isActive ? 'text-emerald-deep' : 'text-emerald-deep/45'
            }`}
          >
            {item.title}
          </span>
        </span>
        <motion.span
          initial={false}
          animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="block overflow-hidden"
        >
          <span className="mt-2 block max-w-md pr-2 text-[13px] leading-relaxed text-emerald-deep/60">
            {item.body}
          </span>
        </motion.span>
      </button>
    </li>
  );
};

const LearningSection = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const [active, setActive] = useState(0);

  return (
    <section ref={ref} id="learning" className="relative scroll-mt-16 overflow-hidden bg-white py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,_rgba(0,232,160,0.07),_transparent_60%)]" />

      <div className="container relative z-10 mx-auto px-5">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <motion.span
            className="inline-flex rounded-full border border-emerald-deep/20 px-4 py-1.5 text-[11px] tracking-[0.16em] text-emerald-deep"
            initial={reveal.hidden}
            whileInView={reveal.visible(0)}
            viewport={{ once: true, amount: 0.6 }}
          >
            {COPY.badge}
          </motion.span>

          <motion.h2
            className="mt-6 whitespace-pre-line text-3xl font-semibold tracking-tight text-emerald-deep sm:text-4xl lg:text-[2.75rem]"
            initial={reveal.hidden}
            whileInView={reveal.visible(0.08)}
            viewport={{ once: true }}
          >
            {COPY.headline.replace(COPY.headlineAccent, '')}
            <span className="text-mint-glow">{COPY.headlineAccent}</span>
          </motion.h2>

          <motion.p
            className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-emerald-deep/55 sm:text-base"
            initial={reveal.hidden}
            whileInView={reveal.visible(0.16)}
            viewport={{ once: true }}
          >
            {COPY.subhead}
          </motion.p>
        </div>

        <motion.div
          className="mx-auto grid max-w-5xl items-start gap-10 lg:grid-cols-2 lg:gap-14"
          initial={reveal.hidden}
          whileInView={reveal.visible(0.12)}
          viewport={{ once: true, amount: 0.2 }}
        >
          <ul className="min-w-0">
            {COPY.steps.map((item, i) => (
              <StepRow key={item.step} item={item} index={i} active={active} setActive={setActive} />
            ))}
          </ul>

          <div className="min-w-0 self-start rounded-[22px] border border-emerald-deep/10 bg-mint-soft/60 p-5 shadow-[0_20px_60px_rgba(11,61,52,0.07)] sm:p-6">
            <div className="mb-4 flex items-baseline justify-between">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-emerald-deep/70 uppercase">
                What it has learned
              </p>
              <p className="font-code text-[10px] text-emerald-deep/40">
                {ENTRIES.filter((e) => !(e.pruned && active >= 3) && !(e.addedAt !== undefined && active < e.addedAt)).length} notes in use
              </p>
            </div>

            <ul className="flex flex-col gap-2">
              {ENTRIES.map((entry) => (
                <PlaybookEntry key={entry.id} entry={entry} active={active} />
              ))}
            </ul>

            <motion.p
              initial={false}
              animate={{ opacity: active >= 3 ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3 flex items-center gap-1.5 text-[11px] text-rose-600/80"
            >
              <CinematicChevron size={11} className="text-rose-500/70" />
              Dropped — this one was wrong 9 times
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto mt-14 max-w-5xl rounded-[22px] border border-emerald-deep/10 bg-emerald-deep p-8 sm:p-10"
          initial={reveal.hidden}
          whileInView={reveal.visible(0.1)}
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
            <div>
              <h3 className="text-xl font-semibold text-mint-glow sm:text-2xl">{COPY.proofTitle}</h3>
              <p className="mt-3 max-w-md text-[13px] leading-relaxed text-white/60 sm:text-sm">
                {COPY.proofBody}
              </p>
              <button
                type="button"
                onClick={() => goToSection(navigate, 'contact')}
                className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-2.5 text-[13px] font-medium text-emerald-deep transition-opacity hover:opacity-90"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald">
                  <CinematicArrow className="text-void" size={13} />
                </span>
                {COPY.cta}
              </button>
            </div>

            <ul className="flex flex-col justify-center gap-3">
              {COPY.proofPoints.map((p) => (
                <li
                  key={p.k}
                  className="flex flex-wrap items-baseline gap-x-2 border-b border-white/10 pb-3 last:border-0"
                >
                  <span className="text-[13px] font-semibold text-white sm:text-sm">{p.k}</span>
                  <span className="text-[13px] text-white/50 sm:text-sm">{p.v}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningSection;
