import React from 'react';
import { motion } from 'framer-motion';
import { reveal } from '../../lib/cinematicMotion';
import { homeCopy } from '../../config/seoContent';

const COPY = homeCopy.security;

const SecuritySection = () => (
  <section id="security" className="relative scroll-mt-16 bg-white py-24 sm:py-32">
    <div className="container mx-auto px-5">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <motion.span
            className="inline-flex rounded-full border border-emerald-deep/20 px-4 py-1.5 text-[11px] tracking-[0.16em] text-emerald-deep"
            initial={reveal.hidden}
            whileInView={reveal.visible(0)}
            viewport={{ once: true, amount: 0.6 }}
          >
            {COPY.badge}
          </motion.span>

          <motion.h2
            className="mt-6 whitespace-pre-line text-3xl font-semibold tracking-tight text-emerald-deep sm:text-4xl"
            initial={reveal.hidden}
            whileInView={reveal.visible(0.08)}
            viewport={{ once: true }}
          >
            {COPY.headline.replace(COPY.headlineAccent, '')}
            <span className="text-mint-glow">{COPY.headlineAccent}</span>
          </motion.h2>

          <motion.p
            className="mt-5 max-w-md text-sm leading-relaxed text-emerald-deep/55 sm:text-base"
            initial={reveal.hidden}
            whileInView={reveal.visible(0.16)}
            viewport={{ once: true }}
          >
            {COPY.subhead}
          </motion.p>
        </div>

        <div>
          <ul className="flex flex-col">
            {COPY.points.map((pt, i) => (
              <motion.li
                key={pt.title}
                className="border-b border-emerald-deep/10 py-6 first:pt-0 last:border-0"
                initial={reveal.hidden}
                whileInView={reveal.visible(0.05 + i * 0.06)}
                viewport={{ once: true, amount: 0.4 }}
              >
                <h3 className="text-[15px] font-semibold text-emerald-deep sm:text-base">
                  {pt.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-emerald-deep/60 sm:text-sm">
                  {pt.body}
                </p>
              </motion.li>
            ))}
          </ul>
          <motion.p
            className="mt-8 rounded-xl bg-mint-soft/60 px-5 py-4 text-[13px] leading-relaxed text-emerald-deep/70"
            initial={reveal.hidden}
            whileInView={reveal.visible(0.1)}
            viewport={{ once: true, amount: 0.4 }}
          >
            {COPY.footnote}
          </motion.p>
        </div>
      </div>
    </div>
  </section>
);

export default SecuritySection;
