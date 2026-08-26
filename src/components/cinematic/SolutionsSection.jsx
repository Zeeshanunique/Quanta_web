import React, { useMemo, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from 'framer-motion';
import { reveal } from '../../lib/cinematicMotion';
import { homeCopy } from '../../config/seoContent';

function buildParticleField() {
  const particles = [];
  let id = 0;

  const clusters = [
    { cx: 18, cy: 22 },
    { cx: 82, cy: 22 },
    { cx: 16, cy: 78 },
    { cx: 84, cy: 78 },
    { cx: 50, cy: 12 },
    { cx: 50, cy: 88 },
    { cx: 8, cy: 50 },
    { cx: 92, cy: 50 },
  ];

  clusters.forEach((c, ci) => {
    particles.push({
      id: id++,
      x: c.cx,
      y: c.cy,
      z: 40 + (ci % 3) * 20,
      size: 10 + (ci % 2) * 4,
      color: 'emerald',
      glow: true,
    });
    for (let s = 0; s < 5; s++) {
      const angle = (s / 5) * Math.PI * 2 + ci;
      const dist = 4 + s * 2.2;
      particles.push({
        id: id++,
        x: c.cx + Math.cos(angle) * dist,
        y: c.cy + Math.sin(angle) * dist * 0.85,
        z: -60 + s * 25 + (ci % 2) * 15,
        size: s === 0 ? 5 : 2 + (s % 3),
        color: s % 3 === 0 ? 'mint' : 'gray',
        glow: false,
      });
    }
  });

  for (let i = 0; i < 18; i++) {
    particles.push({
      id: id++,
      x: 12 + ((i * 17) % 76),
      y: 15 + ((i * 23) % 70),
      z: -120 + (i % 5) * 40,
      size: 1.5 + (i % 3),
      color: i % 4 === 0 ? 'mint' : 'gray',
      glow: false,
    });
  }

  return particles;
}

const Particle3D = ({ p, mouseX, mouseY }) => {
  const depthFactor = (p.z + 140) / 280;
  const parallax = 18 + depthFactor * 42;
  const px = useTransform(mouseX, [-0.5, 0.5], [-parallax, parallax]);
  const py = useTransform(mouseY, [-0.5, 0.5], [-parallax * 0.7, parallax * 0.7]);
  const blur =
    p.z < -40 ? Math.min(8, 2 + Math.abs(p.z) / 30) : p.z > 50 ? 0.5 : 0;
  const opacity = p.z < -80 ? 0.25 : p.color === 'emerald' ? 0.95 : 0.55;
  const colorClass =
    p.color === 'emerald'
      ? 'bg-mint-glow'
      : p.color === 'mint'
        ? 'bg-mint-glow/70'
        : 'bg-emerald-deep/20';
  const floatDuration = 5 + (p.id % 7) * 0.55;
  const floatDelay = (p.id % 9) * 0.35;
  const floatAmp = 6 + depthFactor * 10;

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${p.x}%`,
        top: `${p.y}%`,
        x: px,
        y: py,
        translateZ: p.z,
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.span
        className={`block -translate-x-1/2 -translate-y-1/2 rounded-full ${colorClass} ${
          p.glow ? 'shadow-[0_0_18px_rgba(74,222,128,0.55)]' : ''
        }`}
        style={{
          width: p.size,
          height: p.size,
          opacity,
          filter: blur > 0 ? `blur(${blur}px)` : undefined,
        }}
        animate={{ y: [0, -floatAmp, 0], scale: [1, 1 + depthFactor * 0.08, 1] }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: floatDelay,
        }}
      />
    </motion.div>
  );
};

const SolutionsIntroScene = ({ mouseX, mouseY, transform }) => {
  const particles = useMemo(() => buildParticleField(), []);

  return (
    <motion.div
      className="pointer-events-none absolute inset-0"
      style={{ transformStyle: 'preserve-3d', transform }}
      aria-hidden
    >
      <div className="absolute inset-[-8%] origin-center" style={{ transformStyle: 'preserve-3d' }}>
        {particles.map((p) => (
          <Particle3D key={p.id} p={p} mouseX={mouseX} mouseY={mouseY} />
        ))}
      </div>
    </motion.div>
  );
};

const SolutionsSection = () => {
  const sectionRef = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mouseX = useSpring(rawX, { stiffness: 60, damping: 20, mass: 0.4 });
  const mouseY = useSpring(rawY, { stiffness: 60, damping: 20, mass: 0.4 });
  const rotateXMv = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rotateYMv = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);
  const rotateX = useSpring(rotateXMv, { stiffness: 50, damping: 18 });
  const rotateY = useSpring(rotateYMv, { stiffness: 50, damping: 18 });
  const fieldTransform = useMotionTemplate`perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  const onMove = (e) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="relative overflow-hidden bg-white py-28 sm:min-h-screen sm:py-32"
      onMouseMove={onMove}
      onMouseLeave={() => {
        rawX.set(0);
        rawY.set(0);
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <SolutionsIntroScene mouseX={mouseX} mouseY={mouseY} transform={fieldTransform} />
      </div>

      <div className="container relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
        <motion.span
          className="inline-flex rounded-full border border-emerald-deep/20 bg-white/60 px-4 py-1.5 text-[11px] tracking-[0.16em] text-emerald-deep backdrop-blur-sm"
          initial={reveal.hidden}
          whileInView={reveal.visible(0)}
          viewport={{ once: true, amount: 0.6 }}
        >
          {homeCopy.solutions.badge}
        </motion.span>

        <motion.h2
          className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-emerald-deep sm:text-5xl lg:text-6xl"
          initial={reveal.hidden}
          whileInView={reveal.visible(0.08)}
          viewport={{ once: true, amount: 0.5 }}
        >
          {homeCopy.solutions.headline}
          <br />
          <span className="text-mint-glow">{homeCopy.solutions.headlineAccent}</span>
        </motion.h2>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-emerald-deep/55 sm:text-base"
          initial={reveal.hidden}
          whileInView={reveal.visible(0.14)}
          viewport={{ once: true, amount: 0.5 }}
        >
          {homeCopy.solutions.subhead}
        </motion.p>
      </div>
    </section>
  );
};

export default SolutionsSection;
