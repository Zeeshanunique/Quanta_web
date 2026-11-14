import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { faqCopy } from '../config/seoContent';
import { goToSection } from '../lib/goToSection';
import { Btn, Section } from '../components/mono/ui';
import { ease } from '../components/mono/motion';
import { PageHero, PageMeta } from '../components/mono/PageShell';
import { MonoCTA } from '../components/mono/HomeSections';

const EXTRA = [
  {
    q: 'Which systems does Quanta integrate with?',
    a: 'Workday, SAP, BambooHR, ServiceNow, Okta, Jira, Confluence, Slack, Microsoft Teams, and more — Quanta sits above your system of record.',
  },
  {
    q: 'Is employee data secure?',
    a: 'Yes. Role-based access, approval chains, a full audit trail, and policy-bound actions are built in from day one. Your data never trains a shared model.',
  },
];

const FAQS = [...faqCopy, ...EXTRA];

const FAQs = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(0);

  return (
    <>
      <PageMeta
        title="FAQs | Quanta"
        description="Answers to common questions about Quanta's AI employees — integrations, security, and how they learn."
      />
      <PageHero
        label="FAQs"
        title="Frequently asked questions."
        sub="Everything you need to know about hiring an AI employee from Quanta."
      />

      <Section tone="light" className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <ul className="border-t border-ink">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="border-b border-paper-line">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-start gap-5 py-5 text-left"
                  >
                    <span className="mt-1 font-mono text-[10.5px] text-ink-4">[{String(i + 1).padStart(2, '0')}]</span>
                    <span className="flex-1 font-inter text-[16px] font-medium tracking-[-0.01em] text-ink">{f.q}</span>
                    <Plus
                      size={16}
                      className={`mt-1 shrink-0 text-ink transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 pl-11 font-inter text-[14px] leading-relaxed text-ink-3">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          <div className="mt-14 flex flex-col items-center gap-4 text-center">
            <p className="font-inter text-[14px] text-ink-3">Still have questions? Our team is happy to help.</p>
            <Btn onClick={() => goToSection(navigate, 'contact')}>Contact us</Btn>
          </div>
        </div>
      </Section>
      <MonoCTA />
    </>
  );
};

export default FAQs;
