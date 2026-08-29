import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { reveal } from '../../lib/cinematicMotion';
import { homeCopy } from '../../config/seoContent';
import { CalendarDays, KeyRound, Ticket, UserPlus } from 'lucide-react';
import { CinematicArrowDown, CinematicChevron } from '../icons/CinematicIcons';

const THREATS_LEFT = homeCopy.problem.threatsLeft;
const THREATS_RIGHT = homeCopy.problem.threatsRight;

// Real requests an ops agent gets — PTO, a Jira ticket, onboarding, an access grant.
const DROP_CIRCLES = [
  { delay: 0, size: 34, color: 'rgba(210,255,230,0.95)', duration: 4.6, Icon: CalendarDays },
  { delay: 1.4, size: 30, color: 'rgba(0,232,160,0.92)', duration: 4.8, Icon: Ticket },
  { delay: 2.4, size: 24, color: 'rgba(8,70,48,0.32)', duration: 5.1, ghost: true },
  { delay: 2.9, size: 28, color: 'rgba(74,222,128,0.85)', duration: 4.7, Icon: UserPlus },
  { delay: 4.3, size: 22, color: 'rgba(74,222,128,0.8)', duration: 4.5, Icon: KeyRound },
];

const DroppingCircle = ({ delay, size, color, duration, ghost, Icon }) => (
  <motion.div
    className="absolute left-1/2 flex cursor-pointer items-center justify-center rounded-full border border-white/20"
    style={{
      width: size,
      height: size,
      marginLeft: -size / 2,
      background: color,
      boxShadow: ghost ? 'none' : '0 0 20px rgba(0,232,160,0.5)',
      filter: ghost ? 'blur(1.5px)' : undefined,
    }}
    initial={{ top: '-10%', opacity: 0 }}
    animate={{
      top: ['-10%', '112%'],
      opacity: [0, 1, 1, ghost ? 0.3 : 0.9, 0],
      scale: [0.7, 1, 1, 0.92],
      x: [0, 5, -4, 2, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'linear',
      times: [0, 0.1, 0.4, 0.82, 1],
    }}
    whileHover={{ scale: 1.2, x: 14, transition: { duration: 0.2 } }}
  >
    {!ghost && Icon && (
      <Icon size={Math.round(size * 0.45)} strokeWidth={2} color="rgba(5,20,12,0.85)" aria-hidden />
    )}
  </motion.div>
);

const ThreatVisual = () => (
  <div className="relative h-full min-h-[360px] overflow-hidden bg-[#040806] lg:min-h-[420px]">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_rgba(0,50,35,0.45),_transparent_70%)]" />

    {/* Left mass — bright neon rim on the inner edge */}
    <motion.div
      className="absolute top-[6%] -left-[30%] h-[88%] w-[80%] rounded-full"
      style={{
        background:
          'radial-gradient(circle at 75% 48%, rgba(0,90,60,0.4), rgba(4,8,6,0.98) 58%)',
        boxShadow:
          'inset -22px 0 48px rgba(0,232,160,0.28), 10px 0 60px rgba(0,232,160,0.14)',
        borderRight: '1.5px solid rgba(74,222,128,0.75)',
      }}
      animate={{ opacity: [0.88, 1, 0.88] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    />

    {/* Right mass */}
    <motion.div
      className="absolute top-[6%] -right-[30%] h-[88%] w-[80%] rounded-full"
      style={{
        background:
          'radial-gradient(circle at 25% 48%, rgba(0,90,60,0.4), rgba(4,8,6,0.98) 58%)',
        boxShadow:
          'inset 22px 0 48px rgba(0,232,160,0.28), -10px 0 60px rgba(0,232,160,0.14)',
        borderLeft: '1.5px solid rgba(74,222,128,0.75)',
      }}
      animate={{ opacity: [0.88, 1, 0.88] }}
      transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
    />

    {/* Soft corridor light */}
    <div className="pointer-events-none absolute inset-y-[10%] left-1/2 w-[26%] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(0,232,160,0.07),transparent)]" />

    {/* Dropping circles fall through the center channel */}
    <div className="absolute inset-y-0 left-1/2 z-[1] w-20 -translate-x-1/2">
      {DROP_CIRCLES.map((c, i) => (
        <DroppingCircle key={i} {...c} />
      ))}
    </div>

    <div className="pointer-events-none absolute inset-0 z-[2] flex flex-col items-center justify-center">
      <p className="text-xl font-medium tracking-tight text-white sm:text-2xl">
        <span className="relative inline-block">
          {homeCopy.problem.markStrong}
          <span className="absolute right-0 -bottom-1 left-0 h-px bg-white/75" />
        </span>{' '}
        {homeCopy.problem.markRest}
      </p>
    </div>
  </div>
);

const ProblemSection = () => {
  const ref = useRef(null);
  const listRef = useRef(null);
  const inView = useInView(listRef, { once: true, amount: 0.35 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const accentOpacity = useTransform(scrollYProgress, [0.12, 0.4], [0.4, 1]);

  return (
    <section ref={ref} id="problem" className="relative bg-white py-24 sm:py-32">
      <div className="container mx-auto px-5">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <motion.span
            className="inline-flex rounded-full border border-emerald-deep/20 px-4 py-1.5 text-[11px] tracking-[0.16em] text-emerald-deep"
            initial={reveal.hidden}
            whileInView={reveal.visible(0)}
            viewport={{ once: true, amount: 0.6 }}
          >
            {homeCopy.problem.badge}
          </motion.span>

          <motion.h2
            className="mt-6 text-3xl font-semibold tracking-tight text-emerald-deep sm:text-4xl lg:text-[2.75rem]"
            initial={reveal.hidden}
            whileInView={reveal.visible(0.08)}
            viewport={{ once: true }}
          >
            {homeCopy.problem.headline.replace(homeCopy.problem.headlineAccent, '')}
            <motion.span className="text-mint-glow" style={{ opacity: accentOpacity }}>
              {homeCopy.problem.headlineAccent}
            </motion.span>
          </motion.h2>

          <motion.p
            className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-emerald-deep/50 sm:text-base"
            initial={reveal.hidden}
            whileInView={reveal.visible(0.16)}
            viewport={{ once: true }}
          >
            {homeCopy.problem.body}
          </motion.p>
        </div>

        <motion.div
          className="mx-auto grid max-w-5xl overflow-hidden rounded-[28px] border border-emerald-deep/8 shadow-[0_20px_60px_rgba(11,61,52,0.06)] lg:grid-cols-2"
          initial={reveal.hidden}
          whileInView={reveal.visible(0.12)}
          viewport={{ once: true, amount: 0.2 }}
        >
          <ThreatVisual />

          <div className="flex flex-col bg-mint-soft p-8 sm:p-10 lg:p-12">
            <h3 className="mb-7 text-xl font-semibold text-emerald-deep">{homeCopy.problem.panelTitle}</h3>
            <div ref={listRef} className="grid flex-1 gap-x-8 gap-y-1 sm:grid-cols-2">
              <ul className="space-y-3.5">
                {THREATS_LEFT.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex gap-2.5 text-[13px] leading-snug text-emerald-deep/85 sm:text-sm"
                    initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
                    animate={
                      inView
                        ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                        : { opacity: 0, y: 12, filter: 'blur(6px)' }
                    }
                    transition={{ duration: 0.5, delay: i * 0.11, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <CinematicChevron className="mt-0.5 text-emerald-deep/35" size={13} />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <ul className="mt-3 space-y-3.5 sm:mt-0">
                {THREATS_RIGHT.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex gap-2.5 text-[13px] leading-snug text-emerald-deep/85 sm:text-sm"
                    initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
                    animate={
                      inView
                        ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                        : { opacity: 0, y: 12, filter: 'blur(6px)' }
                    }
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + i * 0.11,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <CinematicChevron className="mt-0.5 text-emerald-deep/35" size={13} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <a
              href="#solutions"
              className="mt-10 inline-flex w-fit items-center gap-2 rounded-xl bg-emerald-deep px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-muted"
            >
              {homeCopy.problem.cta}
              <CinematicArrowDown className="opacity-80" size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
