import React from 'react';
import { motion } from 'framer-motion';

const Loading = ({ fullScreen = false }) => {
  if (!fullScreen) {
    return (
      <div
        className="h-full w-full min-h-[120px] rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl"
        role="status"
        aria-live="polite"
        aria-label="Loading"
      />
    );
  }

  return (
    <motion.div
      className="fixed inset-0 z-[200] overflow-hidden bg-[#050505]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="absolute inset-0 bg-white/[0.04] backdrop-blur-[48px] backdrop-saturate-150" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-emerald/[0.05]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-[32%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald/[0.07] blur-[120px]" />
    </motion.div>
  );
};

export default Loading;
