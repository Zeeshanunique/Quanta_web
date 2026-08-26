import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion';

const STAGES = [
  {
    title: 'AI Training & Inference',
    proof: 'Proof AI deployments are untampered.',
  },
  {
    title: 'AI Privacy',
    proof: 'Proof AI models and data are confidential.',
  },
  {
    title: 'AI Safeguards',
    proof: 'Proof AI guardrails are implemented.',
  },
];

const StageRow = ({ stage, index, active, setActive }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '-42% 0px -42% 0px' });

  useEffect(() => {
    if (inView) setActive(index);
  }, [inView, index, setActive]);

  const isActive = active === index;

  return (
    <li ref={ref} className="min-h-[72px] py-2">
      <p
        className={`text-lg font-medium sm:text-xl ${
          isActive ? 'text-white' : 'text-white/30'
        }`}
      >
        {stage.title}
      </p>
      <p className={`mt-1.5 text-sm ${isActive ? 'text-white/60' : 'text-white/20'}`}>
        {stage.proof}
      </p>
    </li>
  );
};

const VerifiablePanelSection = () => {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });

  const panelX = useTransform(scrollYProgress, [0, 0.55, 1], ['42%', '0%', '0%']);
  const panelOpacity = useTransform(scrollYProgress, [0, 0.35, 0.6], [0.4, 0.9, 1]);

  return (
    <section
      ref={sectionRef}
      id="verifiable"
      className="relative overflow-hidden bg-emerald-deep py-28 sm:min-h-screen sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,_rgba(74,222,128,0.12),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#0A2F28]/80" />

      <motion.div
        style={{ x: panelX, opacity: panelOpacity }}
        className="container relative z-10 mx-auto px-5 lg:px-10"
      >
        <div className="grid items-start gap-10 sm:grid-cols-[minmax(0,11rem)_3rem_minmax(0,1fr)] sm:gap-8 lg:grid-cols-[13rem_3.5rem_minmax(0,1fr)] lg:gap-12">
          <h3 className="text-left text-[2.75rem] font-semibold leading-[0.95] tracking-tight text-mint-glow sm:text-5xl lg:text-[3.25rem]">
            Verifiable
          </h3>

          <div className="relative mx-auto flex h-[220px] w-full max-w-[3rem] justify-center sm:mx-0">
            <div className="absolute top-3 bottom-3 w-px bg-emerald/20" />
            <motion.div
              className="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-mint-glow shadow-emerald-glow"
              animate={{ top: 10 + active * 76 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            />
            {STAGES.map((_, i) => (
              <div
                key={i}
                className={`absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full transition-opacity duration-300 ${
                  active === i ? 'opacity-0' : 'bg-emerald/30 opacity-100'
                }`}
                style={{ top: 10 + i * 76 }}
              />
            ))}
          </div>

          <ul className="min-w-0 space-y-6">
            {STAGES.map((stage, i) => (
              <StageRow
                key={stage.title}
                stage={stage}
                index={i}
                active={active}
                setActive={setActive}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default VerifiablePanelSection;
