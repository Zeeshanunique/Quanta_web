import React from 'react';
import { motion } from 'framer-motion';
import { homeCopy } from '../../config/seoContent';
import { brandLogos } from '../../assets/brands';

const TrustStrip = () => (
  <motion.div
    className="mx-auto mt-12 max-w-4xl"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, delay: 1.1 }}
  >
    <p className="mb-5 text-[10px] tracking-[0.2em] text-white/30 uppercase">
      {homeCopy.hero.trustLabel}
    </p>
    <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 sm:gap-x-9">
      {brandLogos.map((logo) => (
        <img
          key={logo.name}
          src={logo.src}
          alt={logo.name}
          loading="lazy"
          className={`w-auto shrink-0 object-contain opacity-60 brightness-0 invert transition-opacity duration-300 hover:opacity-100 ${
            logo.wide ? 'h-[18px] sm:h-5' : 'h-6 sm:h-[26px]'
          }`}
        />
      ))}
    </div>
  </motion.div>
);

export default TrustStrip;
