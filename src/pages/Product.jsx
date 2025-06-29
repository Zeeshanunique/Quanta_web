import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import check from '../assets/check.svg';
import { useTheme } from '../hooks/useTheme';
import { Meteors, MagicCard, BorderBeam, ShimmerButton, AnimatedList, Marquee } from '../components/magicui';

const Product = () => {
  const navigate = useNavigate();
  const [activeIndustry, setActiveIndustry] = useState('marketing');
  
  const industries = [
    {
      id: 'marketing',
      name: 'Marketing & Sales',
      tagline: 'Drive conversions with AI-powered audience intelligence',
      icon: '🚀',
      metrics: [
        '32% increase in lead conversion rates',
        '47% reduction in customer acquisition costs',
        '189% ROI on marketing campaigns'
      ],
      capabilities: [
        'Customer segmentation & targeting',
        'Content personalization at scale',
        'Predictive lead scoring',
        'Dynamic pricing optimization',
        'Sales conversation intelligence',
        'Multi-channel attribution'
      ]
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      tagline: 'Enhance patient outcomes with clinical intelligence agents',
      icon: '🏥',
      metrics: [
        '93% automation accuracy for clinical documentation',
        '41% reduction in administrative workload',
        '27% improvement in diagnosis speed'
      ],
      capabilities: [
        'Clinical decision support',
        'Patient risk stratification',
        'Treatment recommendation',
        'Medical documentation automation',
        'Real-time health monitoring',
        'Research data analysis'
      ]
    },
    {
      id: 'finance',
      name: 'Finance',
      tagline: 'Accelerate financial operations with compliance-first AI',
      icon: '💹',
      metrics: [
        '$4.2M average annual cost savings',
        '78% reduction in fraud incidents',
        '92% accuracy in regulatory compliance'
      ],
      capabilities: [
        'Risk assessment & modeling',
        'Fraud detection & prevention',
        'Regulatory compliance monitoring',
        'Transaction processing automation',
        'Portfolio optimization',
        'Financial forecasting'
      ]
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      tagline: 'Optimize production with predictive intelligence',
      icon: '🏭',
      metrics: [
        '23% increase in production efficiency',
        '35% reduction in unplanned downtime',
        '17% decrease in maintenance costs'
      ],
      capabilities: [
        'Predictive maintenance',
        'Quality control automation',
        'Supply chain optimization',
        'Production scheduling',
        'Inventory management',
        'Energy consumption optimization'
      ]
    },
    {
      id: 'customer',
      name: 'Customer Service',
      tagline: 'Deliver exceptional support with human-like AI agents',
      icon: '🤝',
      metrics: [
        '67% faster customer resolution time',
        '83% positive customer satisfaction rating',
        '24/7 support coverage with 94% automation rate'
      ],
      capabilities: [
        'Intelligent ticket routing',
        'Sentiment analysis & escalation',
        'Multi-channel customer support',
        'Knowledge base automation',
        'Voice & text support agents',
        'Customer journey analytics'
      ]
    },
    {
      id: 'logistics',
      name: 'Supply Chain & Logistics',
      tagline: 'Streamline operations with end-to-end visibility',
      icon: '🔄',
      metrics: [
        '28% reduction in logistics costs',
        '31% decrease in delivery time',
        '42% improvement in inventory accuracy'
      ],
      capabilities: [
        'Demand forecasting',
        'Route optimization',
        'Inventory prediction',
        'Supplier performance analysis',
        'Logistics automation',
        'Risk management'
      ]
    }
  ];
  
  const platformFeatures = [
    {
      title: "Visual Agent Builder",
      description: "Drag-and-drop interface for creating complex AI workflows",
      icon: "🧩"
    },
    {
      title: "Industry Optimized Models",
      description: "Pre-trained models fine-tuned for your specific vertical",
      icon: "🎯"
    },
    {
      title: "Multi-Modal Processing",
      description: "Unified handling of text, images, voice and structured data",
      icon: "📊"
    },
    {
      title: "Enterprise Integration",
      description: "Seamless connections to your existing business systems",
      icon: "🔌"
    },
    {
      title: "Regulatory Compliance",
      description: "Built-in frameworks for industry-specific compliance",
      icon: "🔒"
    },
    {
      title: "Performance Analytics",
      description: "Comprehensive metrics dashboard for AI optimization",
      icon: "📈"
    }
  ];
  
  const currentIndustry = industries.find(ind => ind.id === activeIndustry);

  return (
    <>
      <Helmet>
        <title>Quanta AI | Industry-Grade AI Agent Platform</title>
        <meta name="description" content="Quanta AI is an industry-grade AI agent platform for Marketing, Healthcare, Finance, Manufacturing, Customer Service, and Supply Chain. Build powerful AI automation tailored to your industry." />
        <meta name="keywords" content="AI platform, industry AI, AI agents, healthcare AI, finance AI, marketing AI, manufacturing AI, customer service AI, supply chain AI" />
      </Helmet>

      <Section className="pt-[12rem] -mt-[5.25rem]" crosses>
        <div className="container">
          {/* Hero Section */}
          <div className="relative z-10 max-w-[62rem] mx-auto text-center mb-16">
            <motion.h1 
              className="h1 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gradient-purple">Industry-Grade AI Agent Platform</span>
            </motion.h1>
            <motion.p 
              className="body-1 mb-8 text-n-2 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Powerful AI automation tailored for each sector with industry-specific agents, workflows, and compliance frameworks
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button onClick={() => navigate('/contact')} white>
                Schedule Demo
              </Button>
              <Button onClick={() => navigate('/contact')}>
                Start Free Trial
              </Button>
            </motion.div>
          </div>
          
          {/* Industry Selection Tabs */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="h3 mb-2">Select Your Industry</h2>
              <p className="body-2 text-n-3">Explore AI agents optimized for your specific sector</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {industries.map((industry) => (
                <motion.button
                  key={industry.id}
                  className={`px-5 py-3 rounded-xl transition-all ${activeIndustry === industry.id ? 'bg-n-6 border border-color-1 text-n-1' : 'bg-n-7 border border-n-6 text-n-3 hover:text-n-1'}`}
                  onClick={() => setActiveIndustry(industry.id)}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{industry.icon}</span>
                    <span>{industry.name}</span>
                  </div>
                </motion.button>
              ))}
            </div>
            
            {/* Industry Detail Card */}
            <motion.div 
              key={activeIndustry}
              className="bg-n-7 border border-n-6 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-n-6 px-8 py-5 border-b border-n-5 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{currentIndustry.icon}</div>
                  <div>
                    <h3 className="h3 mb-1">{currentIndustry.name}</h3>
                    <p className="text-n-3">{currentIndustry.tagline}</p>
                  </div>
                </div>
                <Button onClick={() => navigate('/contact')} className="whitespace-nowrap">
                  Get Started
                </Button>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column - Capabilities */}
                  <div>
                    <h4 className="h4 mb-6 text-gradient-blue">AI Agent Capabilities</h4>
                    <ul className="space-y-3">
                      {currentIndustry.capabilities.map((capability, index) => (
                        <li key={index} className="flex items-start py-2 border-t border-n-6">
                          <img width={24} height={24} src={check} alt="check" />
                          <p className="ml-4">{capability}</p>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-8">
                      <h4 className="h5 mb-4">Technical Specifications</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-n-8/50 p-4 rounded-lg border border-n-6">
                          <p className="text-xs text-n-3 mb-1">Response Time</p>
                          <p className="text-lg font-semibold text-color-1">&lt;200ms</p>
                        </div>
                        <div className="bg-n-8/50 p-4 rounded-lg border border-n-6">
                          <p className="text-xs text-n-3 mb-1">Accuracy</p>
                          <p className="text-lg font-semibold text-color-2">97.8%</p>
                        </div>
                        <div className="bg-n-8/50 p-4 rounded-lg border border-n-6">
                          <p className="text-xs text-n-3 mb-1">API Calls</p>
                          <p className="text-lg font-semibold text-color-3">Unlimited</p>
                        </div>
                        <div className="bg-n-8/50 p-4 rounded-lg border border-n-6">
                          <p className="text-xs text-n-3 mb-1">Deployment</p>
                          <p className="text-lg font-semibold text-color-4">1-Click</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Column - Results & Implementation */}
                  <div>
                    <h4 className="h4 mb-6 text-gradient-purple">Key Results</h4>
                    {/* Metrics Cards */}
                    <div className="space-y-4 mb-8">
                      {currentIndustry.metrics.map((metric, index) => (
                        <motion.div 
                          key={index}
                          className="bg-n-8/60 border border-n-6 rounded-xl p-4 flex items-center"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ y: -3, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
                        >
                          <div className="w-10 h-10 rounded-full bg-n-6 flex items-center justify-center mr-4">
                            <span className="text-color-1 font-bold">{index + 1}</span>
                          </div>
                          <p className="text-n-2 font-medium">{metric}</p>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Implementation Timeline */}
                    <div className="bg-n-8/60 border border-n-6 rounded-xl p-6">
                      <h5 className="h5 mb-4">Implementation Timeline</h5>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-color-1/20 flex items-center justify-center mr-3">
                            <span className="text-color-1 font-bold">1</span>
                          </div>
                          <div>
                            <p className="font-medium text-n-1">Setup & Integration</p>
                            <p className="text-sm text-n-3">1-2 days</p>
                          </div>
                        </div>
                        <div className="ml-4 w-[1px] h-6 bg-n-6"></div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-color-1/20 flex items-center justify-center mr-3">
                            <span className="text-color-1 font-bold">2</span>
                          </div>
                          <div>
                            <p className="font-medium text-n-1">Agent Configuration</p>
                            <p className="text-sm text-n-3">1-3 days</p>
                          </div>
                        </div>
                        <div className="ml-4 w-[1px] h-6 bg-n-6"></div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-color-1/20 flex items-center justify-center mr-3">
                            <span className="text-color-1 font-bold">3</span>
                          </div>
                          <div>
                            <p className="font-medium text-n-1">Testing & Deployment</p>
                            <p className="text-sm text-n-3">1 day</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Platform Features */}
          <div className="mt-20 mb-16">
            <div className="mb-4">
              <p className="text-xs uppercase tracking-wider text-color-1 mb-3">PLATFORM CAPABILITIES</p>
              <Heading 
                title="Enterprise-Grade Platform" 
                text="Build, deploy and manage AI agents with our powerful platform features"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {platformFeatures.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="p-8 rounded-2xl bg-n-7 border border-n-6 transition-colors h-full flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="h4 mb-3">{feature.title}</h3>
                  <p className="body-2 text-n-3 mb-4">{feature.description}</p>
                  <div className="mt-auto pt-4 border-t border-n-6">
                    <button className="text-sm text-color-1 hover:underline flex items-center gap-1">
                      Learn more
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 3L10 7L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-conic-gradient p-0.5 rounded-2xl">
            <div className="bg-n-8 rounded-[0.9rem] p-8 md:p-16 text-center">
              <h2 className="h2 mb-4">Ready to transform your <span className="text-gradient-purple">{currentIndustry.name}</span> operations?</h2>
              <p className="body-1 text-n-3 mb-8 max-w-3xl mx-auto">
                Deploy industry-specific AI agents in days, not months. Start with a personalized demo.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button onClick={() => navigate('/contact')} white className="min-w-[160px]">
                  Schedule Demo
                </Button>
                <Button onClick={() => navigate('/contact')} className="min-w-[160px]">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Product; 