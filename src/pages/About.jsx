import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { goToSection } from '../lib/goToSection';
import { footerCopy } from '../config/seoContent';
import { Btn, CropMarks, MonoLabel, Section, SectionHeading } from '../components/mono/ui';
import { fadeUp } from '../components/mono/motion';
import { IsoCube, IsoGlobe, IsoLayers, IsoPyramid } from '../components/mono/iso';
import QuantumReveal from '../components/mono/QuantumReveal';
import { PageHero, PageMeta } from '../components/mono/PageShell';
import { MonoCTA } from '../components/mono/HomeSections';

const STATS = [
  { label: 'Founded', value: '2023', sub: 'Bangalore, India' },
  { label: 'Live today', value: 'Factum', sub: '4 ready-made agents' },
  { label: 'On the way', value: '6', sub: 'Products in development' },
];

const VALUES = [
  {
    Art: IsoLayers,
    title: 'Simple',
    body: 'Putting an agent to work should be as easy as briefing a new colleague: connect your systems, share your policy, approve its first changes.',
  },
  {
    Art: IsoCube,
    title: 'Trusted',
    body: 'Control is built into the core: it asks before it acts, every run is on record, and your data never trains a shared model.',
  },
  {
    Art: IsoPyramid,
    title: 'Proven',
    body: 'Every agent ships with a test suite of real cases and only goes live if it passes. When it is unsure, it hands off with the reason.',
  },
];

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageMeta
        title="About Quanta | AI agents that do real work"
        description="Quanta builds AI agents that take real work off your teams, inside the systems you already run, with a person approving every change."
      />

      <PageHero
        label="About Quanta"
        title={'AI agents that\ndo real work.'}
        sub={footerCopy.blurb}
        art={
          <div className="relative aspect-square p-8">
            <CropMarks size={26} />
            <IsoGlobe className="h-full w-full" />
          </div>
        }
      >
        <Btn onClick={() => goToSection(navigate, 'contact')}>Book a demo</Btn>
        <Btn variant="light" onClick={() => goToSection(navigate, 'solutions')}>
          See our products
        </Btn>
      </PageHero>

      <Section tone="light" className="py-20">
        <div className="grid gap-8 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <motion.div key={s.label} {...fadeUp(0.05 * i)} className="border-t border-ink pt-4">
              <MonoLabel bare>{s.label}</MonoLabel>
              <p className="mt-3 font-inter text-[2.4rem] font-semibold tracking-[-0.04em] text-ink">{s.value}</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-4">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="py-24 sm:py-32">
        <SectionHeading label="Our values" title="The principles behind every decision." />
        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {VALUES.map(({ Art, title, body }, i) => (
            <motion.div key={title} {...fadeUp(0.06 * i)} className="border-t border-paper-line pt-3">
              <span className="font-mono text-[10.5px] text-ink-4">[0{i + 1}]</span>
              <h3 className="mt-2 font-inter text-[15px] font-medium text-ink">{title}</h3>
              <div className="my-6 h-[130px]">
                <QuantumReveal className="h-full">
                  <Art className="h-[130px] w-full" />
                </QuantumReveal>
              </div>
              <p className="font-inter text-[13px] leading-relaxed text-ink-3">{body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section tone="light" className="py-20">
        <motion.div {...fadeUp(0)} className="grid gap-6 border-t border-paper-line pt-8 md:grid-cols-[1fr_2fr]">
          <MonoLabel>Headquarters</MonoLabel>
          <p className="whitespace-pre-line font-inter text-[1.5rem] font-medium leading-snug tracking-[-0.02em] text-ink">
            {footerCopy.headquarters}
          </p>
        </motion.div>
      </Section>

      <MonoCTA />
    </>
  );
};

export default About;
