import React from 'react';
import { motion } from 'framer-motion';
import { reveal } from '../../lib/cinematicMotion';
import { homeCopy } from '../../config/seoContent';

const COPY = homeCopy.economics;

/**
 * Two curves, one point: conventional software bends up with volume, a
 * learning agent bends down. Deliberately unlabelled on the Y axis — the
 * shape is the claim, and we don't have pilot numbers to put on it yet.
 */
const CostCurve = () => (
  <div className="relative w-full">
    <svg viewBox="0 0 420 200" className="h-auto w-full" role="img" aria-label="Cost per resolved request falls over time, while conventional software rises">
      <defs>
        <linearGradient id="econFall" x1="0" y1="0" x2="420" y2="0">
          <stop stopColor="#00E8A0" />
          <stop offset="1" stopColor="#4ADE80" />
        </linearGradient>
        <linearGradient id="econFill" x1="0" y1="0" x2="0" y2="200">
          <stop stopColor="#00E8A0" stopOpacity="0.18" />
          <stop offset="1" stopColor="#00E8A0" stopOpacity="0" />
        </linearGradient>
      </defs>

      {[40, 80, 120, 160].map((y) => (
        <line key={y} x1="0" y1={y} x2="420" y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      ))}

      {/* conventional software: climbs */}
      <motion.path
        d="M8 150 C 120 138, 240 110, 412 42"
        fill="none"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="2"
        strokeDasharray="6 6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
      />

      {/* quanta: falls */}
      <motion.path
        d="M8 52 C 110 60, 200 120, 412 158"
        fill="none"
        stroke="url(#econFall)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      />
      <motion.path
        d="M8 52 C 110 60, 200 120, 412 158 L 412 192 L 8 192 Z"
        fill="url(#econFill)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      />

      <motion.circle
        cx="412" cy="158" r="5" fill="#00E8A0"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, delay: 1.35, type: 'spring', stiffness: 300 }}
      />
    </svg>

    <div className="mt-2 flex items-center justify-between text-[11px] text-white/40">
      <span>{COPY.curveStart}</span>
      <span>{COPY.curveEnd}</span>
    </div>
    <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-white/50">
      <span className="flex items-center gap-2">
        <span className="h-[3px] w-5 rounded-full bg-emerald" />
        Quanta
      </span>
      <span className="flex items-center gap-2">
        <svg width="20" height="3" aria-hidden>
          <line x1="0" y1="1.5" x2="20" y2="1.5" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
        Conventional software
      </span>
    </div>
  </div>
);

const EconomicsSection = () => (
  <section
    id="economics"
    className="relative scroll-mt-16 overflow-hidden bg-emerald-deep py-24 sm:py-32"
  >
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_rgba(74,222,128,0.12),_transparent_60%)]" />

    <div className="container relative z-10 mx-auto px-5">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <motion.span
          className="inline-flex rounded-full border border-emerald/25 px-4 py-1.5 text-[11px] tracking-[0.16em] text-emerald"
          initial={reveal.hidden}
          whileInView={reveal.visible(0)}
          viewport={{ once: true, amount: 0.6 }}
        >
          {COPY.badge}
        </motion.span>

        <motion.h2
          className="mt-6 whitespace-pre-line text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]"
          initial={reveal.hidden}
          whileInView={reveal.visible(0.08)}
          viewport={{ once: true }}
        >
          {COPY.headline.replace(COPY.headlineAccent, '')}
          <span className="text-mint-glow">{COPY.headlineAccent}</span>
        </motion.h2>

        <motion.p
          className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base"
          initial={reveal.hidden}
          whileInView={reveal.visible(0.16)}
          viewport={{ once: true }}
        >
          {COPY.subhead}
        </motion.p>
      </div>

      <motion.div
        className="mx-auto max-w-5xl rounded-[22px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8"
        initial={reveal.hidden}
        whileInView={reveal.visible(0.1)}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="mb-5 text-[11px] font-semibold tracking-[0.14em] text-white/45 uppercase">
          {COPY.curveLabel}
        </p>
        <CostCurve />
        <p className="mt-5 border-t border-white/10 pt-4 text-[12px] leading-relaxed text-white/40">
          {COPY.curveNote}
        </p>
      </motion.div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-3 sm:gap-10">
        {COPY.columns.map((col, i) => (
          <motion.div
            key={col.title}
            initial={reveal.hidden}
            whileInView={reveal.visible(0.08 + i * 0.06)}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-[15px] font-semibold text-mint-glow sm:text-base">{col.title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-white/55">{col.body}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="mt-14 text-center text-lg font-medium tracking-tight text-white sm:text-xl"
        initial={reveal.hidden}
        whileInView={reveal.visible(0.1)}
        viewport={{ once: true, amount: 0.5 }}
      >
        {COPY.kicker}
      </motion.p>
    </div>
  </section>
);

export default EconomicsSection;
