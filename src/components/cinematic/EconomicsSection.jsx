import React from 'react';
import { motion } from 'framer-motion';
import { reveal } from '../../lib/cinematicMotion';
import { homeCopy } from '../../config/seoContent';

const COPY = homeCopy.economics;

const EconomicsSection = () => (
  <section
    id="economics"
    className="relative scroll-mt-16 overflow-hidden bg-emerald-deep py-24 sm:py-32"
  >
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_rgba(74,222,128,0.1),_transparent_60%)]" />

    <div className="container relative z-10 mx-auto px-5">
      <div className="mx-auto max-w-3xl text-center">
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

      <div className="mx-auto mt-14 grid max-w-5xl gap-px overflow-hidden rounded-[22px] border border-white/10 bg-white/10 sm:grid-cols-3">
        {COPY.columns.map((col, i) => (
          <motion.div
            key={col.title}
            className="bg-emerald-deep p-7 sm:p-8"
            initial={reveal.hidden}
            whileInView={reveal.visible(0.06 + i * 0.06)}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-[15px] font-semibold text-mint-glow sm:text-base">{col.title}</h3>
            <p className="mt-3 text-[13px] leading-relaxed text-white/55">{col.body}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="mt-12 text-center text-lg font-medium tracking-tight text-white sm:text-xl"
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
