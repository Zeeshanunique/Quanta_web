import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { atmospheric, heroTimeline, micro } from '../../lib/cinematicMotion';
import { goToSection } from '../../lib/goToSection';
import { CinematicArrow, CinematicArrowUpRight } from '../icons/CinematicIcons';
import TrustStrip from './TrustStrip';
import { homeCopy } from '../../config/seoContent';

const HUD_CARDS = homeCopy.hero.suiteCards;

const NETWORK_NODES = [
  { x: 14, y: 36, blur: false },
  { x: 24, y: 22, blur: true },
  { x: 76, y: 22, blur: true },
  { x: 86, y: 36, blur: false },
  { x: 20, y: 58, blur: true },
  { x: 80, y: 58, blur: false },
];

const LED_CELLS = Array.from({ length: 16 }, (_, i) => i);

const Chip = ({ litCells, pulsing }) => (
  <motion.div
    className="relative mx-auto h-[96px] w-[96px] sm:h-[112px] sm:w-[112px]"
    animate={
      pulsing
        ? { scale: [1, 1.045, 1], filter: ['brightness(1)', 'brightness(1.4)', 'brightness(1)'] }
        : { scale: [1, 1.02, 1] }
    }
    transition={
      pulsing
        ? { duration: 0.85 }
        : { duration: 6, repeat: Infinity, ease: 'easeInOut' }
    }
  >
    <div className="pointer-events-none absolute -top-24 left-1/2 h-28 w-16 -translate-x-1/2 bg-gradient-to-t from-emerald/25 to-transparent blur-xl" />
    <div
      className="absolute -inset-6 rounded-[28px] bg-emerald/25 blur-3xl"
      style={{ opacity: pulsing ? 0.95 : 0.55 }}
    />
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-emerald/50 bg-[#0a0f0d]/95 shadow-emerald-glow-lg backdrop-blur-md">
      <div className="absolute inset-[6px] grid grid-cols-4 gap-[3px] opacity-80">
        {LED_CELLS.map((i) => (
          <div
            key={i}
            className={`rounded-[2px] transition-all duration-300 ${
              litCells.includes(i)
                ? 'bg-emerald shadow-[0_0_8px_rgba(0,232,160,0.8)]'
                : 'bg-white/[0.06]'
            }`}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] to-transparent" />
    </div>
  </motion.div>
);

const HorizonArcs = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
    <motion.div
      className="absolute bottom-[8%] left-1/2 h-[55%] w-[160%] -translate-x-1/2"
      animate={atmospheric.curveDrift}
    >
      <svg viewBox="0 0 1400 420" className="h-full w-full" fill="none">
        <defs>
          <linearGradient id="arcStroke" x1="0" y1="0" x2="1400" y2="0">
            <stop stopColor="#00E8A0" stopOpacity="0" />
            <stop offset="0.35" stopColor="#00E8A0" stopOpacity="0.55" />
            <stop offset="0.5" stopColor="#4ADE80" stopOpacity="0.75" />
            <stop offset="0.65" stopColor="#00E8A0" stopOpacity="0.55" />
            <stop offset="1" stopColor="#00E8A0" stopOpacity="0" />
          </linearGradient>
          <filter id="arcBlur" x="-20%" y="-40%" width="140%" height="180%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <filter id="arcBlurSoft" x="-20%" y="-40%" width="140%" height="180%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>
        <path
          d="M40 340 C320 40 520 380 700 200 C880 40 1080 300 1360 160"
          stroke="url(#arcStroke)"
          strokeWidth="2"
          filter="url(#arcBlur)"
          opacity="0.7"
        />
        <path
          d="M0 380 C300 80 500 340 720 240 C940 140 1120 320 1400 220"
          stroke="url(#arcStroke)"
          strokeWidth="3"
          filter="url(#arcBlurSoft)"
          opacity="0.35"
        />
        <path
          d="M80 300 C360 20 560 320 720 160 C900 20 1100 260 1320 120"
          stroke="url(#arcStroke)"
          strokeWidth="1.2"
          opacity="0.45"
        />
      </svg>
    </motion.div>
    <motion.div
      className="absolute bottom-[18%] left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-emerald/20 blur-[60px]"
      animate={atmospheric.breathe}
    />
    <motion.div
      className="absolute top-[12%] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald/15 blur-[90px]"
      animate={atmospheric.breathe}
    />
  </div>
);

const SparseParticles = ({ show }) => {
  const dots = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        left: `${6 + ((i * 19) % 88)}%`,
        top: `${10 + ((i * 27) % 72)}%`,
        delay: (i % 5) * 0.45,
        size: i % 4 === 0 ? 2.5 : 1.5,
      })),
    []
  );

  if (!show) return null;

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {dots.map((d) => (
        <motion.span
          key={d.id}
          className="absolute rounded-full bg-emerald/60"
          style={{ left: d.left, top: d.top, width: d.size, height: d.size }}
          initial={{ opacity: 0 }}
          animate={atmospheric.particleFloat(d.delay)}
        />
      ))}
    </div>
  );
};

const NetworkLayer = ({ showLines, showNodes, pulseTick }) => (
  <div
    className="pointer-events-none absolute left-1/2 top-[6%] h-[48%] w-full max-w-4xl -translate-x-1/2"
    aria-hidden
  >
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" fill="none">
      {showLines &&
        NETWORK_NODES.map((n, i) => (
          <motion.path
            key={`p-${i}`}
            d={`M50 34 Q ${(50 + n.x) / 2} ${(34 + n.y) / 2 - 8} ${n.x} ${n.y}`}
            stroke="#00E8A0"
            strokeWidth="0.2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: pulseTick % NETWORK_NODES.length === i ? 0.85 : 0.28,
            }}
            transition={{ duration: 1.2, delay: i * 0.1, ease: 'easeOut' }}
          />
        ))}
    </svg>
    {showNodes &&
      NETWORK_NODES.map((n, i) => {
        const active = pulseTick % NETWORK_NODES.length === i;
        return (
          <motion.div
            key={`n-${i}`}
            className={`absolute h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-[4px] border border-emerald/40 bg-void-elevated/80 ${
              n.blur ? 'blur-[1px] opacity-50' : ''
            }`}
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: active ? 1.15 : 1,
              opacity: n.blur ? 0.45 : 0.85,
              boxShadow: active
                ? '0 0 12px rgba(0,232,160,0.7)'
                : '0 0 0 rgba(0,232,160,0)',
            }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <span className="absolute inset-[3px] rounded-[2px] bg-emerald/50" />
          </motion.div>
        );
      })}
  </div>
);

const CinematicHero = () => {
  const navigate = useNavigate();

  const [phase, setPhase] = useState({
    atmosphere: true,
    particles: false,
    chip: false,
    circuits: false,
    nodes: false,
    text: false,
    cta: false,
    cards: false,
  });
  const [litCells, setLitCells] = useState([0, 3, 5, 10, 15]);
  const [pulseTick, setPulseTick] = useState(0);
  const [pulsing, setPulsing] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase((p) => ({ ...p, particles: true })), heroTimeline.particles * 1000),
      setTimeout(() => setPhase((p) => ({ ...p, chip: true })), heroTimeline.chip * 1000),
      setTimeout(() => setPhase((p) => ({ ...p, circuits: true })), heroTimeline.circuits * 1000),
      setTimeout(() => setPhase((p) => ({ ...p, nodes: true })), heroTimeline.nodes * 1000),
      setTimeout(() => setPhase((p) => ({ ...p, text: true })), heroTimeline.text * 1000),
      setTimeout(() => setPhase((p) => ({ ...p, cta: true })), heroTimeline.cta * 1000),
      setTimeout(() => setPhase((p) => ({ ...p, cards: true })), heroTimeline.cards * 1000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (!phase.chip) return undefined;
    const led = setInterval(() => {
      setLitCells(
        Array.from({ length: 6 }, () => Math.floor(Math.random() * 16)).filter(
          (v, i, a) => a.indexOf(v) === i
        )
      );
    }, 850);
    return () => clearInterval(led);
  }, [phase.chip]);

  useEffect(() => {
    if (!phase.nodes) return undefined;
    const pulse = setInterval(() => {
      setPulsing(true);
      setPulseTick((t) => t + 1);
      setTimeout(() => setPulsing(false), 800);
    }, 4000);
    return () => clearInterval(pulse);
  }, [phase.nodes]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#050505] pb-20 pt-24"
    >
      <div className="relative z-10">
        <div className="pointer-events-none absolute inset-0">
          <HorizonArcs />
        </div>

        <SparseParticles show={phase.particles} />
        <NetworkLayer
          showLines={phase.circuits}
          showNodes={phase.nodes}
          pulseTick={pulseTick}
        />

        <div className="container relative z-10 mx-auto px-5 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, filter: 'blur(10px)' }}
              animate={
                phase.chip
                  ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
                  : { opacity: 0.35, scale: 0.96, filter: 'blur(6px)' }
              }
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-20 sm:mb-28"
            >
              <Chip litCells={litCells} pulsing={pulsing} />
            </motion.div>

            <motion.h1
              className="mx-auto mt-6 max-w-4xl whitespace-pre-line text-[2rem] font-light tracking-[-0.02em] text-white sm:mt-10 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
              initial={{ opacity: 0, y: 16 }}
              animate={
                phase.text
                  ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                  : { opacity: 0, y: 16 }
              }
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {homeCopy.hero.headline}
            </motion.h1>

            <motion.p
              className="mx-auto mt-5 max-w-2xl text-sm font-light leading-relaxed text-white/45 sm:text-[15px]"
              initial={{ opacity: 0, y: 12 }}
              animate={phase.text ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {homeCopy.hero.subhead}
            </motion.p>

            <motion.div
              className="mt-9 flex flex-wrap items-center justify-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={phase.cta ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.55 }}
            >
              <motion.button
                type="button"
                onClick={() => goToSection(navigate, 'contact')}
                className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#121212]/70 py-1.5 pr-5 pl-1.5 text-[13px] font-medium text-white backdrop-blur-md"
                style={{ boxShadow: '0 0 32px rgba(0,232,160,0.15)' }}
                whileHover={micro.ctaHover}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald text-void shadow-[0_0_16px_rgba(0,232,160,0.55)]">
                  <motion.span whileHover={micro.arrowNudge}>
                    <CinematicArrow className="text-void" size={15} />
                  </motion.span>
                </span>
                {homeCopy.hero.ctaPrimary}
              </motion.button>
              <motion.button
                type="button"
                onClick={() => goToSection(navigate, 'ai-employees')}
                className="rounded-full border border-white/15 px-5 py-2.5 text-[13px] font-medium text-white/70 transition-colors hover:border-emerald/40 hover:text-white"
                whileHover={micro.ctaHover}
              >
                {homeCopy.hero.ctaSecondary}
              </motion.button>
            </motion.div>

            <motion.div
              className="mx-auto mt-14 max-w-2xl"
              initial={{ opacity: 0, y: 12 }}
              animate={phase.cards ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.55 }}
            >
              <p className="mb-5 text-[11px] tracking-[0.22em] text-white/30 uppercase">
                {homeCopy.hero.cardsLabel}
              </p>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {HUD_CARDS.map((card) => (
                  <motion.button
                    key={card.label}
                    type="button"
                    onClick={() => {
                      if (card.href.startsWith('#')) {
                        goToSection(navigate, card.href.slice(1));
                      } else {
                        navigate(card.href);
                      }
                    }}
                    className="relative min-h-[88px] rounded-2xl border border-white/[0.09] bg-white/[0.035] px-2 py-6 text-center backdrop-blur-xl transition-colors"
                    whileHover={micro.cardHover}
                  >
                    <span className="absolute top-2.5 right-2.5 text-white/35">
                      <CinematicArrowUpRight size={12} />
                    </span>
                    <span className="block text-[11px] font-medium tracking-wide text-white/75 sm:text-xs">
                      {card.label}
                    </span>
                    {card.sub && (
                      <span className="mt-1 block text-[10px] tracking-wide text-emerald/70">
                        {card.sub}
                      </span>
                    )}
                  </motion.button>
                ))}
              </div>
              {phase.cards && <TrustStrip />}
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CinematicHero;
