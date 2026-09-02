import React from 'react';
import { motion } from 'framer-motion';
import { reveal } from '../../lib/cinematicMotion';
import { homeCopy } from '../../config/seoContent';

const COPY = homeCopy.proofStrip;

/** Narrow band directly under the hero. Every number here is verifiable. */
const ProofStrip = () => (
  <section className="relative border-y border-emerald-deep/10 bg-mint-soft/40 py-10 sm:py-12">
    <div className="container mx-auto px-5">
      <p className="mb-7 text-center text-[10px] font-semibold tracking-[0.2em] text-emerald-deep/45 uppercase">
        {COPY.label}
      </p>
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
        {COPY.stats.map((s, i) => (
          <motion.div
            key={s.k}
            className="text-center"
            initial={reveal.hidden}
            whileInView={reveal.visible(i * 0.07)}
            viewport={{ once: true, amount: 0.5 }}
          >
            <p className="text-2xl font-semibold tracking-tight text-emerald-deep sm:text-3xl">
              {s.v}
            </p>
            <p className="mx-auto mt-1.5 max-w-[15ch] text-[12px] leading-snug text-emerald-deep/55">
              {s.k}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProofStrip;
