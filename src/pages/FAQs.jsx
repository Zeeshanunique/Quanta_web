import React, { useState } from 'react';
import Section from '../components/ui/Section';
import Heading from '../components/ui/Heading';
import { motion } from 'framer-motion';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Ema and how does it work?",
      answer: "Ema is your Universal AI Employee powered by our proprietary EmaFusion™ model. Ema uses a Generative Workflow Engine™ to conversationally activate AI agents that can execute complex workflows across your enterprise. With 2T+ parameters and integration with 500+ apps, Ema adapts to your business context and automates processes while maintaining the highest levels of accuracy and security."
    },
    {
      question: "How long does it take to deploy an AI agent?",
      answer: "Most AI agents can be deployed in minutes. Our Generative Workflow Engine™ allows for conversational setup where you simply describe what you want the agent to do, and Ema configures itself to meet your requirements. Pre-built agents like Customer Support, Data Professional, and Employee Assistant are ready to use immediately with minimal configuration."
    },
    {
      question: "Is my data secure with Ema?",
      answer: "Yes, data security is our top priority. Ema features comprehensive data governance that redacts sensitive information before processing. We offer compliance with all leading standards, top-tier encryption, and customizable private models that keep your data completely isolated. Your sensitive information never leaves your secure environment."
    },
    {
      question: "What makes Ema different from other AI solutions?",
      answer: "Ema combines three key advantages: Simple deployment with our Generative Workflow Engine™, Trusted security with private models and data governance, and Accurate results through our 2T+ parameter EmaFusion™ model that intelligently blends public and private models. This makes Ema both more powerful and more secure than traditional AI solutions."
    },
    {
      question: "Which applications and systems does Ema integrate with?",
      answer: "Ema integrates with 500+ applications out of the box, including popular CRM systems, databases, communication platforms, and enterprise software. Our integration engine supports REST APIs, databases, cloud services, and custom applications through our flexible connector framework."
    },
    {
      question: "How accurate is Ema compared to human performance?",
      answer: "Ema achieves up to 99.7% accuracy across various tasks, often exceeding human performance while working 24/7 without fatigue. Our EmaFusion™ model continuously learns and adapts, improving accuracy over time while maintaining consistent performance standards."
    },
    {
      question: "Can Ema handle multiple languages?",
      answer: "Yes, Ema supports multiple languages and can communicate with customers and employees in their preferred language. This makes it ideal for global enterprises with diverse workforces and customer bases."
    },
    {
      question: "What kind of ROI can I expect from implementing Ema?",
      answer: "Organizations typically see 80% cost efficiency improvements and 10x faster deployment compared to traditional solutions. The exact ROI depends on your use case, but customers commonly report significant time savings, reduced errors, and improved customer satisfaction within the first few months."
    },
    {
      question: "Do I need technical expertise to use Ema?",
      answer: "No, Ema is designed for business users. The Generative Workflow Engine™ uses conversational deployment, meaning you can set up and configure agents by simply describing what you want them to do in natural language. No coding or technical expertise required."
    },
    {
      question: "How does pricing work for Ema?",
      answer: "Pricing is based on your specific needs and usage. We offer flexible plans that scale with your business, from individual agents to enterprise-wide deployments. Contact our team for a personalized quote based on your requirements."
    }
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
                Everything you need to know about Ema, your Universal AI Employee
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
                Our team is here to help. Get in touch and we'll answer any questions about Ema.
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