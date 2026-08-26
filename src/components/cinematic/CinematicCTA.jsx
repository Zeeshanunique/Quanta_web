import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { micro } from '../../lib/cinematicMotion';
import { goToSection } from '../../lib/goToSection';
import { CinematicArrow } from '../icons/CinematicIcons';

const CinematicCTA = () => {
  const navigate = useNavigate();

  return (
    <section
      id="cinematic-cta"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#070707] py-32 sm:py-40"
    >
      {/* Base vertical wash — long soft stops for seamless section flow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #0B3D34 0%, #0A2F28 8%, #091F1A 22%, #071916 38%, #0A0F0D 58%, #080808 78%, #070707 100%)',
        }}
      />

      {/* Center glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,_rgba(0,232,160,0.16)_0%,_rgba(11,61,52,0.45)_32%,_transparent_68%)]" />

      {/* Top border feather — blends into Verifiable */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#0B3D34] via-[#0B3D34]/60 to-transparent" />

      {/* Bottom border feather — blends into Contact */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#070707] via-[#070707]/70 to-transparent" />

      <div className="container relative z-10 mx-auto px-5 text-center">
        <motion.h2
          className="mx-auto max-w-2xl text-3xl font-light tracking-tight text-white sm:text-4xl lg:text-5xl"
          initial={{ opacity: 0.35, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          Deploy AI your team can verify
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-md text-sm text-white/45 sm:text-base"
          initial={{ opacity: 0.3, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.06 }}
        >
          Quanta digital employees with verifiable workflows — from inference to safeguards.
        </motion.p>
        <motion.button
          type="button"
          onClick={() => goToSection(navigate, 'contact')}
          className="group mt-10 inline-flex items-center gap-3 rounded-full border border-emerald/40 bg-white px-6 py-3 text-sm font-medium text-void"
          initial={{ opacity: 0.4, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={micro.ctaHover}
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald text-void">
            <CinematicArrow className="text-void" size={14} />
          </span>
          Schedule Demo
        </motion.button>
      </div>
    </section>
  );
};

export default CinematicCTA;
