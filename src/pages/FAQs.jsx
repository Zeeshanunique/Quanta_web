import React, { useState } from 'react';
import Section from '../components/ui/Section';
import Heading from '../components/ui/Heading';
import { motion } from 'framer-motion';
import { faqCopy } from '../config/seoContent';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    ...faqCopy.map(({ q, a }) => ({ question: q, answer: a })),
    {
      question: 'What makes Quanta different from other AI tools?',
      answer:
        'Quanta is a full EX suite — not IT-only or HR-only. It is channel-native, governed, and built for mid-market speed with enterprise rigor.',
    },
    {
      question: 'Which systems does Quanta integrate with?',
      answer:
        'Workday, SAP, BambooHR, ServiceNow, Okta, Jira, Confluence, Slack, Microsoft Teams, and more — Quanta sits above your system of record.',
    },
    {
      question: 'Is employee data secure?',
      answer:
        'Yes. Role-based access, approval chains, immutable audit trails, and policy-bound actions are built in from day one.',
    },
  ];

  return (
    <div className="pt-[12rem] -mt-[5.25rem]">
      <Section>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-6">❓</div>
              <h1 className="h1 mb-6">Frequently Asked Questions</h1>
              <p className="text-xl text-n-3">
                Everything you need to know about Quanta — the employee experience platform
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="border border-n-1/10 rounded-xl overflow-hidden bg-n-7/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-n-7/50 transition-colors"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-semibold text-n-1 pr-8">{faq.question}</h3>
                    <div className={`transform transition-transform duration-200 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}>
                      <svg 
                        className="w-5 h-5 text-color-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M19 9l-7 7-7-7" 
                        />
                      </svg>
                    </div>
                  </button>
                  
                  {openIndex === index && (
                    <motion.div
                      className="px-6 pb-6"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-n-3 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-16 p-12 border border-n-1/10 rounded-3xl bg-n-7/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="h3 mb-6 text-gradient-purple">Still have questions?</h3>
              <p className="text-lg text-n-3 mb-8 max-w-2xl mx-auto">
                Our team is here to help. Get in touch and we'll answer any questions about Quanta.
              </p>
              <div className="flex justify-center gap-4">
                <button className="btn btn-primary">Contact Support</button>
                <button className="btn btn-outline">Schedule Demo</button>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FAQs; 