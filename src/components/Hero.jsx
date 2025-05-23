import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import Section from './ui/Section';
import ValoraFloating from './animations/ValoraFloating';
import GlowingGrid from './animations/GlowingGrid';

const Hero = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('build');

  const tabContent = {
    build: {
      title: "Visual Agent Builder",
      description: "Intuitive drag-and-drop interface to create custom AI workflows without technical expertise",
      features: ["No coding required", "Pre-built templates", "Custom logic blocks", "Domain-specific components"]
    },
    deploy: {
      title: "One-Click Deployment",
      description: "Deploy your agents to production environments instantly with automated scaling",
      features: ["Cloud or on-premise", "Version control", "Resource allocation", "Automated testing"]
    },
    optimize: {
      title: "Continuous Optimization",
      description: "Monitor and improve your AI agents' performance with advanced analytics",
      features: ["Real-time analytics", "A/B testing", "Performance insights", "Predictive maintenance"]
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
              <span className="text-gradient-purple">Agentic AI Automation</span> That Works Like Magic
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-8 text-n-2 relative">
              AgentForge is the no-code platform that lets anyone build powerful AI agents for their business. 
              Automate complex tasks, increase productivity, and unlock new insights - all without technical expertise.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center relative">
              <Button onClick={() => navigate('/product')} white>
                Explore Platform
              </Button>
              <Button onClick={() => navigate('/contact')}>
                Get Started Free
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
                  
                  {/* AI Agent Builder Interface */}
                  <div className="bg-n-8/80 border-b border-n-6 relative z-10 px-4 py-2 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 rounded-full bg-color-1 animate-pulse"></div>
                      <span className="text-sm font-mono text-color-1">Agent Builder v3.5</span>
                    </div>
                    <div className="flex space-x-3">
                      <div className="px-2 py-1 rounded-md bg-n-7/50 border border-n-1/20 text-xs text-n-1">
                        {'{ mode: agentBuilder }'}
                      </div>
                      <div className="px-2 py-1 rounded-md bg-green-500/20 border border-green-500/30 text-xs text-green-400">
                        ONLINE
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 relative z-10 flex">
                    {/* Agent Builder Sidebar */}
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
                          {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </motion.button>
                      ))}

                      <div className="mt-6 pt-4 border-t border-n-6">
                        <div className="text-[10px] uppercase text-n-3 mb-2 px-3">Quick Access</div>
                        {['Templates', 'Marketplace', 'Docs'].map((item, i) => (
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
                              <div className="text-sm font-medium text-n-1">Agent Workflow Builder</div>
                              <div className="flex space-x-2">
                                <div className="w-2 h-2 rounded-full bg-color-1"></div>
                                <div className="w-2 h-2 rounded-full bg-n-4"></div>
                                <div className="w-2 h-2 rounded-full bg-n-4"></div>
                              </div>
                            </div>
                            <div className="p-4 grid grid-cols-3 gap-3 text-center">
                              {["Input Handler", "Data Processor", "Decision Engine", "Response Generator", "Memory Manager", "Output Controller"].map((node, i) => (
                                <motion.div 
                                  key={i}
                                  className="flex flex-col items-center py-2 px-1 bg-n-7/50 border border-n-1/10 rounded-lg"
                                  whileHover={{ y: -3, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                >
                                  <div className="w-8 h-8 rounded-lg bg-color-1/20 flex items-center justify-center mb-2">
                                    <span className="text-xs text-color-1 font-mono">{i+1}</span>
                                  </div>
                                  <div className="text-xs font-medium text-n-1">{node}</div>
                                  <div className="text-[10px] text-n-3 mt-1">connected</div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="bg-n-8/80 border border-n-1/10 rounded-xl overflow-hidden">
                            <div className="bg-n-7 px-4 py-2 border-b border-n-6">
                              <div className="text-sm font-medium text-n-1">Agent Performance</div>
                            </div>
                            <div className="p-4">
                              <div className="space-y-3 mb-4">
                                {['Accuracy', 'Processing Speed', 'Learning Capacity'].map((metric, i) => (
                                  <div key={i}>
                                    <div className="flex justify-between text-xs mb-1">
                                      <span className="text-n-3">{metric}</span>
                                      <span className="text-color-1 font-mono">{90 + i * 3}%</span>
                                    </div>
                                    <div className="h-1.5 bg-n-6 rounded-full overflow-hidden">
                                      <motion.div 
                                        className={`h-full ${i === 0 ? 'bg-green-500' : i === 1 ? 'bg-blue-500' : 'bg-purple-500'}`} 
                                        initial={{ width: 0 }}
                                        animate={{ width: `${90 + i * 3}%` }} 
                                        transition={{ duration: 1.5, delay: i * 0.2 }}
                                      />
                                    </div>
                                  </div>
                                ))}
                              </div>
                              
                              <div className="mt-4 pt-4 border-t border-n-6">
                                <div className="text-xs font-medium text-n-1 mb-2">Agent Capabilities</div>
                                <div className="flex flex-wrap gap-1">
                                  {['NLP', 'ML', 'Text Analysis', 'API Access', 'Memory', 'Learning'].map((tag, i) => (
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
                  
                  {/* Animated dots in corners */}
                  <motion.div 
                    className="absolute top-20 left-4 w-2 h-2 bg-color-1 rounded-full"
                    animate={{ 
                      opacity: [0.2, 1, 0.2],
                      scale: [1, 1.5, 1]
                    }}
                    transition={{ repeat: Infinity, duration: 4 }}
                  />
                  <motion.div 
                    className="absolute bottom-12 right-12 w-3 h-3 bg-color-2 rounded-full"
                    animate={{ 
                      opacity: [0.2, 1, 0.2],
                      scale: [1, 1.5, 1]
                    }}
                    transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                  />
                  <motion.div 
                    className="absolute top-1/3 right-8 w-2 h-2 bg-color-5 rounded-full"
                    animate={{ 
                      opacity: [0.2, 1, 0.2],
                      scale: [1, 1.5, 1]
                    }}
                    transition={{ repeat: Infinity, duration: 3, delay: 2 }}
                  />
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
