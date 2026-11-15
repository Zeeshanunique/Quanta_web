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
  { label: 'Products live', value: '2', sub: 'Factum · Quaero' },
  { label: 'Focus', value: 'Enterprise', sub: 'Operations · Sales' },
];

const VALUES = [
  {
    Art: IsoLayers,
    title: 'Simple',
    body: 'Hiring an AI employee should be as easy as briefing a new colleague. No projects, no prompt engineering — connect it and give it work.',
  },
  {
    Art: IsoCube,
    title: 'Trusted',
    body: 'Security is built into the core: it asks before it acts, every action is logged, and your data never trains a shared model.',
  },
  {
    Art: IsoPyramid,
    title: 'Accurate',
    body: 'Each AI employee is a specialist for one team. It quotes its sources, learns your exceptions, and hands off what it is unsure about.',
  },
];

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageMeta
        title="About Quanta | AI Employees for Every Team"
        description="Quanta builds AI employees — one for each team. They handle everyday requests from question to done, and get better at your company every week."
      />

      <PageHero
        label="About Quanta"
        title={'AI employees that\nget the job done.'}
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
          See the AI employees
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
