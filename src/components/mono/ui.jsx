import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from './motion';

/** Shared primitives for the mono (light, technical) design language. */

/** `[FEATURES]` style eyebrow label */
export const MonoLabel = ({ children, className = '', bare = false }) => (
  <span
    className={`font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3 ${className}`}
  >
    {bare ? children : <>[{children}]</>}
  </span>
);

/** Word wrapped in top-left / bottom-right corner brackets */
export const Bracket = ({ children, className = '' }) => (
  <span className={`relative inline-block px-[0.12em] text-ink ${className}`}>
    <span
      aria-hidden
      className="absolute left-0 top-[0.08em] h-[0.42em] w-[0.22em] border-l-[0.075em] border-t-[0.075em] border-ink"
    />
    {children}
    <span
      aria-hidden
      className="absolute bottom-[0.02em] right-0 h-[0.42em] w-[0.22em] border-b-[0.075em] border-r-[0.075em] border-ink"
    />
  </span>
);

/** Black / white rectangular buttons */
export const Btn = ({ as: Tag = 'button', variant = 'dark', className = '', children, ...rest }) => {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-[6px] px-4 py-2.5 text-[13px] font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink';
  const styles = {
    dark: 'bg-ink text-white hover:bg-ink-2 shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_1px_2px_rgba(0,0,0,0.2)]',
    light:
      'bg-white text-ink hover:bg-paper-2 shadow-[0_0_0_1px_rgba(10,10,11,0.06),0_1px_2px_rgba(0,0,0,0.06)]',
    ghost: 'text-ink-2 hover:text-ink',
  };
  return (
    <Tag className={`${base} ${styles[variant]} ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

/** Four crop-mark corners framing a box */
export const CropMarks = ({ size = 22, className = 'border-ink-4' }) => {
  const s = { width: size, height: size };
  return (
    <span aria-hidden className="pointer-events-none absolute inset-0">
      <span style={s} className={`absolute left-0 top-0 border-l border-t ${className}`} />
      <span style={s} className={`absolute right-0 top-0 border-r border-t ${className}`} />
      <span style={s} className={`absolute bottom-0 left-0 border-b border-l ${className}`} />
      <span style={s} className={`absolute bottom-0 right-0 border-b border-r ${className}`} />
    </span>
  );
};

/** Tiny hex codes scattered along a section edge — pure decoration */
const HEX = ['2AE7', '8D', 'F3', 'A5F1', '5E', 'C9', '0A', '3F', 'E2', '9E6', 'B4', '7C', '1D', '6A'];
export const HexEdge = ({ position = 'bottom', className = '' }) => (
  <div
    aria-hidden
    className={`pointer-events-none absolute inset-x-0 hidden select-none justify-between px-3 font-mono text-[9px] leading-[1.15] text-ink-4/70 md:flex ${
      position === 'bottom' ? 'bottom-2' : 'top-2'
    } ${className}`}
  >
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <span key={i} className="flex flex-col">
        <span>{HEX[(i * 3) % HEX.length]}</span>
        <span className="pl-2">{HEX[(i * 5 + 1) % HEX.length]}</span>
      </span>
    ))}
  </div>
);

/** Section shell: grain canvas + container */
export const Section = ({ id, className = '', inner = '', children, tone = 'paper' }) => {
  const tones = {
    paper: 'bg-paper',
    light: 'bg-paper-2',
    deep: 'bg-paper-3',
  };
  return (
    <section id={id} className={`grain relative scroll-mt-16 overflow-hidden ${tones[tone]} ${className}`}>
      <div className={`mx-auto w-full max-w-[1200px] px-5 md:px-10 ${inner}`}>{children}</div>
    </section>
  );
};

export const SectionHeading = ({ label, title, sub, className = '' }) => (
  <div className={`mx-auto max-w-2xl text-center ${className}`}>
    {label && (
      <motion.div {...fadeUp(0)}>
        <MonoLabel>{label}</MonoLabel>
      </motion.div>
    )}
    <motion.h2
      {...fadeUp(0.06)}
      className="mt-5 whitespace-pre-line font-inter text-[2.25rem] font-semibold leading-[1.05] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.5rem]"
    >
      {title}
    </motion.h2>
    {sub && (
      <motion.p
        {...fadeUp(0.12)}
        className="mx-auto mt-6 max-w-md font-inter text-[14px] leading-relaxed text-ink-2"
      >
        {sub}
      </motion.p>
    )}
  </div>
);

/** Small bordered mono chip, e.g. `LIVE`, `EXPERIMENTAL` */
export const Chip = ({ children, tone = 'outline', className = '' }) => {
  const tones = {
    outline: 'border border-ink/70 text-ink',
    soft: 'bg-white text-ink-3 shadow-[0_0_0_1px_rgba(10,10,11,0.06)]',
    dark: 'bg-ink text-white',
  };
  return (
    <span
      className={`inline-flex items-center rounded-[4px] px-1.5 py-[3px] font-mono text-[9.5px] font-medium uppercase leading-none tracking-[0.1em] ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
};

/**
 * Quanta mark — negative-space Q.
 * A solid circle (the bowl) with a square counter punched out; the tail is a
 * single square "quantum" stepping out of the circle at 4–5 o'clock, carved
 * free by a thin gap of negative space. Works at 16px.
 */
export const QuantaGlyph = ({ className = 'h-6 w-6', title = 'Quanta' }) => {
  const id = React.useId().replace(/:/g, '');
  return (
    <svg viewBox="0 0 32 32" className={className} role="img" aria-label={title}>
      <defs>
        <mask id={`qm-${id}`} maskUnits="userSpaceOnUse">
          <rect width="32" height="32" fill="#fff" />
          {/* square counter */}
          <rect x="10.5" y="10.5" width="9" height="9" fill="#000" />
          {/* gap around the tail */}
          <rect x="17.5" y="17.5" width="14.5" height="14.5" fill="#000" />
        </mask>
      </defs>
      <circle cx="15" cy="15" r="13" fill="currentColor" mask={`url(#qm-${id})`} />
      {/* the tail: one discrete unit */}
      <rect x="20.5" y="20.5" width="9" height="9" fill="currentColor" />
    </svg>
  );
};

export const QuantaMark = ({ className = 'h-6 w-6 text-ink' }) => <QuantaGlyph className={className} />;

export const QuantaLogo = ({ className = '' }) => (
  <span className={`inline-flex items-center gap-2 text-ink ${className}`}>
    <QuantaGlyph className="h-[22px] w-[22px]" />
    <span className="font-inter text-[18px] font-semibold leading-none tracking-[-0.045em]">quanta</span>
  </span>
);
