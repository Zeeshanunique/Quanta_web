import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import Section from './ui/Section';
import ValoraFloating from './animations/ValoraFloating';
import GlowingGrid from './animations/GlowingGrid';

const Hero = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('customer');

  const tabContent = {
    customer: {
      title: "Customer Experience",
      description: "Conversational AI Employees that power every stage of the customer lifecycle",
      features: ["24/7 Customer Support", "Automated Onboarding", "Personalized Interactions", "Issue Resolution"]
    },
    employee: {
      title: "Employee Experience", 
      description: "Automate every step of your employee lifecycle from recruiting and onboarding to benefits",
      features: ["Smart Recruiting", "Automated Onboarding", "Benefits Management", "Performance Tracking"]
    },
    sales: {
      title: "Sales and Marketing",
      description: "Unlock revenue potential and sales efficiency - go-to-market 10x faster",
      features: ["Lead Generation", "Sales Automation", "Market Analysis", "Revenue Optimization"]
    }
  };

  return (
    <>
      {/* Fullscreen background animation */}
      <ValoraFloating />
      
      <Section id="hero" className="pt-[12rem] -mt-[5.25rem]" crosses>
        <div className="container">
          <div className="relative z-10 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <h1 className="h1 mb-6 relative">
              <span className="text-gradient-purple">One employee</span><br />
              <span className="text-gradient-blue">Infinite roles</span>
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-8 text-n-2 relative">
              Meet Ema, your Universal AI Employee. Powered by the most sophisticated AI Agents. 
              Ema goes beyond automation—she learns, adapts, and evolves to boost productivity across every role in your enterprise.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center relative">
              <Button onClick={() => navigate('/contact')} white>
                Hire Ema
              </Button>
              <Button onClick={() => navigate('/product')}>
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative max-w-[90%] mx-auto z-10">
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
              <div className="relative rounded-[1rem] overflow-hidden bg-n-8">
                <div className="aspect-[16/9] flex flex-col bg-n-7 text-n-1 glass-card overflow-hidden relative">
                  {/* GlowingGrid as background */}
                  <div className="absolute inset-0 z-0 opacity-40">
                    <GlowingGrid color="#AC6AFF" />
                  </div>
                  
                  {/* Ema AI Employee Interface */}
                  <div className="bg-n-8/80 border-b border-n-6 relative z-10 px-4 py-2 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 rounded-full bg-color-1 animate-pulse"></div>
                      <span className="text-sm font-mono text-color-1">Ema Universal AI Employee</span>
                    </div>
                    <div className="flex space-x-3">
                      <div className="px-2 py-1 rounded-md bg-n-7/50 border border-n-1/20 text-xs text-n-1">
                        {'{ EmaFusion™ Active }'}
                      </div>
                      <div className="px-2 py-1 rounded-md bg-green-500/20 border border-green-500/30 text-xs text-green-400">
                        DEPLOYED
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 relative z-10 flex">
                    {/* Solutions Sidebar */}
                    <div className="w-36 border-r border-n-6 bg-n-8/50 p-2">
                      {Object.keys(tabContent).map((tab) => (
                        <motion.button
                          key={tab}
                          className={`w-full px-3 py-2 mb-1 text-xs font-medium rounded-lg transition-colors flex items-center ${
                            activeTab === tab 
                            ? 'bg-n-7 border border-n-1/10 text-n-1' 
                            : 'text-n-3 hover:text-n-1'
                          }`}
                          onClick={() => setActiveTab(tab)}
                          whileHover={{ x: 2 }}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full mr-2 ${activeTab === tab ? 'bg-color-1' : 'bg-n-4'}`}></div>
                          {tab === 'customer' ? 'Customer' : tab === 'employee' ? 'Employee' : 'Sales'}
                        </motion.button>
                      ))}

                      <div className="mt-6 pt-4 border-t border-n-6">
                        <div className="text-[10px] uppercase text-n-3 mb-2 px-3">Quick Deploy</div>
                        {['Pre-built Agents', 'Integrations', 'Security'].map((item, i) => (
                          <motion.button
                            key={i}
                            className="w-full px-3 py-2 mb-1 text-xs text-n-3 hover:text-n-1 flex items-center"
                            whileHover={{ x: 2 }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full mr-2 bg-n-4"></div>
                            {item}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Main Content Area */}
                    <div className="flex-1 p-4">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="h-full"
                      >
                        <div className="mb-4">
                          <h3 className="text-lg font-medium text-n-1">{tabContent[activeTab].title}</h3>
                          <p className="text-sm text-n-3">{tabContent[activeTab].description}</p>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4">
                          <div className="col-span-2 bg-n-8/80 border border-n-1/10 rounded-xl overflow-hidden">
                            <div className="bg-n-7 px-4 py-2 border-b border-n-6 flex justify-between items-center">
                              <div className="text-sm font-medium text-n-1">Generative Workflow Engine™</div>
                              <div className="flex space-x-2">
                                <div className="w-2 h-2 rounded-full bg-color-1"></div>
                                <div className="w-2 h-2 rounded-full bg-n-4"></div>
                                <div className="w-2 h-2 rounded-full bg-n-4"></div>
                              </div>
                            </div>
                            <div className="p-4 grid grid-cols-2 gap-3 text-center">
                              {tabContent[activeTab].features.map((feature, i) => (
                                <motion.div 
                                  key={i}
                                  className="flex flex-col items-center py-3 px-2 bg-n-7/50 border border-n-1/10 rounded-lg"
                                  whileHover={{ y: -3, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                >
                                  <div className="w-8 h-8 rounded-lg bg-color-1/20 flex items-center justify-center mb-2">
                                    <span className="text-xs text-color-1 font-mono">✓</span>
                                  </div>
                                  <div className="text-xs font-medium text-n-1">{feature}</div>
                                  <div className="text-[10px] text-n-3 mt-1">active</div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="bg-n-8/80 border border-n-1/10 rounded-xl overflow-hidden">
                            <div className="bg-n-7 px-4 py-2 border-b border-n-6">
                              <div className="text-sm font-medium text-n-1">Ema Performance</div>
                            </div>
                            <div className="p-4">
                              <div className="space-y-3 mb-4">
                                {['Accuracy', 'Cost Efficiency', 'Deployment Speed'].map((metric, i) => (
                                  <div key={i}>
                                    <div className="flex justify-between text-xs mb-1">
                                      <span className="text-n-3">{metric}</span>
                                      <span className="text-color-1 font-mono">{metric === 'Accuracy' ? '99.7%' : metric === 'Cost Efficiency' ? '80%' : '10x'}</span>
                                    </div>
                                    <div className="h-1.5 bg-n-6 rounded-full overflow-hidden">
                                      <motion.div 
                                        className={`h-full ${i === 0 ? 'bg-green-500' : i === 1 ? 'bg-blue-500' : 'bg-purple-500'}`} 
                                        initial={{ width: 0 }}
                                        animate={{ width: `${95 + i * 2}%` }} 
                                        transition={{ duration: 1.5, delay: i * 0.2 }}
                                      />
                                    </div>
                                  </div>
                                ))}
                              </div>
                              
                              <div className="mt-4 pt-4 border-t border-n-6">
                                <div className="text-xs font-medium text-n-1 mb-2">EmaFusion™ Model</div>
                                <div className="flex flex-wrap gap-1">
                                  {['2T+ Parameters', 'Private Models', 'Public LLMs', 'Secure', 'Compliant', 'Future-proof'].map((tag, i) => (
                                    <div key={i} className="px-2 py-1 bg-n-7/60 border border-n-1/10 rounded-full text-[10px] text-n-2">
                                      {tag}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Bottom Workflow Visualization */}
                  <div className="bg-n-8/80 border-t border-n-6 relative z-10 px-4 py-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                          <span className="text-xs text-n-2">Enterprise Ready</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                          <span className="text-xs text-n-2">Integrated with 500+ Apps</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>
                          <span className="text-xs text-n-2">Conversational Deployment</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-n-3">Powered by</span>
                        <span className="text-xs font-bold text-color-1">EmaFusion™</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Hero;
