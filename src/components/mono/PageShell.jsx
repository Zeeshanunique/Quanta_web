import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { HexEdge, MonoLabel } from './ui';
import { ease } from './motion';
import QuantumWrite from './QuantumWrite';
import QuantumReveal from './QuantumReveal';

/** Inner-page hero: mono label, big headline, optional sub + actions + art */
export const PageHero = ({ label, title, sub, children, art }) => (
  <section className="grain relative overflow-hidden bg-paper pb-20 pt-16 lg:pb-24 lg:pt-24">
    <div
      className={`mx-auto grid w-full max-w-[1200px] gap-12 px-5 md:px-10 ${
        art ? 'items-center lg:grid-cols-[1.3fr_1fr]' : ''
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
      >
        {label && <MonoLabel>{label}</MonoLabel>}
        <h1 className="mt-5 max-w-3xl whitespace-pre-line font-inter text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.045em] text-ink sm:text-[3.4rem]">
          <QuantumWrite text={title} delay={400} />
        </h1>
        {sub && <p className="mt-6 max-w-lg font-inter text-[15px] leading-relaxed text-ink-3">{sub}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-2.5">{children}</div>}
      </motion.div>
      {art && (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="relative mx-auto w-full max-w-[300px]"
        >
          <QuantumReveal delay={0.5}>{art}</QuantumReveal>
        </motion.div>
      )}
    </div>
    <HexEdge />
  </section>
);

export const PageMeta = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
  </Helmet>
);
