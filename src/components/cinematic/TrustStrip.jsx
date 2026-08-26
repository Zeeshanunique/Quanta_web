import React from 'react';
import { motion } from 'framer-motion';
import { homeCopy } from '../../config/seoContent';

const TrustStrip = () => (
  <motion.div
    className="mx-auto mt-12 max-w-4xl"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, delay: 1.1 }}
  >
    <p className="mb-4 text-[10px] tracking-[0.2em] text-white/30 uppercase">
      {homeCopy.hero.trustLabel}
    </p>
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6">
      {homeCopy.hero.trustLogos.map((name) => (
        <span
          key={name}
          className="text-[11px] font-medium tracking-wide text-white/40 sm:text-xs"
        >
          {name}
        </span>
      ))}
    </div>
  </motion.div>
);

export default TrustStrip;
