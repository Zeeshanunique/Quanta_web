import React, { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';

const HEX = '0123456789ABCDEF';
const hex2 = () => HEX[Math.floor(Math.random() * 16)] + HEX[Math.floor(Math.random() * 16)];

/**
 * Companion to QuantumWrite for images / illustrations.
 * Before: a faint dot-grid placeholder. On scroll-in a blue scan line carrying
 * the Quanta square sweeps left→right, uncovering the content, with hex codes
 * flickering along the edge. Works with any child (SVG, <img>, video).
 */
const QuantumReveal = ({ children, className = '', duration = 1.4, delay = 0.1 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const reduce =
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const p = useMotionValue(reduce ? 100 : 0);
  const clip = useTransform(p, (v) => `inset(0 ${100 - v}% 0 0)`);
  const gridClip = useTransform(p, (v) => `inset(0 0 0 ${v}%)`);
  const left = useTransform(p, (v) => `${v}%`);
  const [scanning, setScanning] = useState(false);
  const [codes, setCodes] = useState(() => Array.from({ length: 6 }, hex2));

  useEffect(() => {
    if (!inView || reduce) return undefined;
    setScanning(true);
    const ctrl = animate(p, 100, {
      duration,
      delay,
      ease: [0.65, 0, 0.35, 1],
      onComplete: () => setScanning(false),
    });
    const t = setInterval(() => setCodes((c) => c.map(hex2)), 90);
    return () => {
      ctrl.stop();
      clearInterval(t);
    };
  }, [inView, reduce, duration, delay, p]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* placeholder grid, visible only where content hasn't been revealed */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          clipPath: gridClip,
          WebkitClipPath: gridClip,
          backgroundImage: 'radial-gradient(rgba(10,10,11,0.18) 1px, transparent 1.3px)',
          backgroundSize: '10px 10px',
          maskImage: 'linear-gradient(to bottom, transparent, #000 15%, #000 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 15%, #000 85%, transparent)',
        }}
      />
      <motion.div style={{ clipPath: clip, WebkitClipPath: clip }} className="relative h-full w-full">
        {children}
      </motion.div>

      {scanning && (
        <motion.div aria-hidden className="pointer-events-none absolute inset-y-0" style={{ left }}>
          <div className="absolute inset-y-0 -left-px w-px bg-[#2f6bff] shadow-[0_0_12px_2px_rgba(47,107,255,0.6)]" />
          <div className="absolute inset-y-0 -left-10 w-10 bg-gradient-to-r from-transparent to-[#2f6bff]/10" />
          <div className="qw-cursor absolute left-[3px] top-1/2 h-2 w-2 -translate-y-1/2 bg-ink" />
          <div className="absolute left-2 top-0 flex h-full flex-col justify-around font-mono text-[9px] text-[#2f6bff]">
            {codes.map((c, i) => (
              <span key={i} style={{ opacity: 0.35 + ((i * 37) % 60) / 100 }}>
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default QuantumReveal;
