import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import Section from './ui/Section';
import ValoraFloating from './animations/ValoraFloating';

const Hero = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('customer');

  const tabContent = {
    customer: {
      title: "Customer Experience",
      description: "Conversational AI Employees That Power Every Stage of the Customer Lifecycle",
      subtitle: "Transform customer interactions with AI that understands context and delivers personalized experiences across all touchpoints."
    },
    employee: {
      title: "Employee Experience", 
      description: "Automate every step of your employee lifecycle from recruiting and onboarding to benefits",
      subtitle: "Streamline HR processes and create exceptional employee experiences from day one to career growth."
    },
    sales: {
      title: "Sales and Marketing",
      description: "Unlock revenue potential and sales efficiency - go-to-market 10x faster",
      subtitle: "Accelerate your sales cycle and maximize revenue with AI-powered lead generation and customer insights."
    }
  };

  return (
    <>
      {/* Fullscreen background animation */}
      <ValoraFloating />
      
      <Section id="hero" className="pt-[12rem] -mt-[5.25rem]" crosses>
        <div className="container">
          {/* Hero Text */}
          <div className="relative z-10 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <motion.h1 
              className="h1 mb-6 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gradient-purple">One employee</span><br />
              <span className="text-gradient-blue">Infinite roles</span>
            </motion.h1>
            
            <motion.p 
              className="body-1 max-w-4xl mx-auto mb-8 text-n-2 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Meet Ema, your Universal AI Employee. Powered by the most sophisticated AI Agents. 
              Ema goes beyond automation—she learns, adapts, and evolves to boost productivity across every role in your enterprise.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button onClick={() => navigate('/contact')} className="px-8 py-3">
                Hire Ema
              </Button>
              <Button onClick={() => navigate('/about')} white className="px-8 py-3">
                Learn More
              </Button>
            </motion.div>
          </div>

          {/* Interactive Tabs Section */}
          <motion.div 
            className="relative max-w-[90%] mx-auto z-10 mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-n-7/50 backdrop-blur-sm border border-n-1/10 rounded-2xl p-2 inline-flex">
                {Object.keys(tabContent).map((tab) => (
                  <motion.button
                    key={tab}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab 
                        ? 'bg-color-1 text-n-8 shadow-lg' 
                        : 'text-n-3 hover:text-n-1 hover:bg-n-6/50'
                    }`}
                    onClick={() => setActiveTab(tab)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {tabContent[tab].title}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative z-1 p-0.5 rounded-3xl bg-conic-gradient">
                <div className="relative rounded-[1.5rem] overflow-hidden bg-n-8/90 backdrop-blur-sm">
                  <div className="p-12 text-center">
                    <h3 className="h3 mb-6 text-gradient-blue">
                      {tabContent[activeTab].title}
                    </h3>
                    <p className="text-xl mb-4 text-n-1 font-medium">
                      {tabContent[activeTab].description}
                    </p>
                    <p className="text-lg text-n-3 max-w-3xl mx-auto">
                      {tabContent[activeTab].subtitle}
                    </p>
                    
                    {/* Visual indicators */}
                    <div className="flex justify-center items-center gap-8 mt-8">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-sm text-n-2">AI Active</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                        <span className="text-sm text-n-2">Real-time Processing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>
                        <span className="text-sm text-n-2">Enterprise Ready</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Why Hire Ema Section */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="h2 mb-4">Why Hire Ema</h2>
              <p className="h4 text-gradient-purple">Multiply your workforce in minutes</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Simple */}
              <motion.div
                className="relative p-8 border border-n-1/10 rounded-3xl overflow-hidden glass-card"
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-n-8/90 backdrop-blur-sm" />
                <div className="relative z-1">
                  <div className="text-5xl mb-6">⚡</div>
                  <h3 className="h4 mb-4 text-gradient-blue">Simple</h3>
                  <p className="text-n-3 mb-6">
                    With its Generative Workflow Engine™ and Pre-built AI Agents, Ema conversationally activates new AI employees to execute any complex workflow in the enterprise. Pre-integrated with hundreds of apps, Ema is easy to configure and deploy.
                  </p>
                  <button className="text-color-1 hover:text-color-2 transition-colors font-medium">
                    Explore Pre-built AI Agents →
                  </button>
                </div>
              </motion.div>

              {/* Trusted */}
              <motion.div
                className="relative p-8 border border-n-1/10 rounded-3xl overflow-hidden glass-card"
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-n-8/90 backdrop-blur-sm" />
                <div className="relative z-1">
                  <div className="text-5xl mb-6">🔒</div>
                  <h3 className="h4 mb-4 text-gradient-blue">Trusted</h3>
                  <p className="text-n-3 mb-6">
                    Ema's data governance redacts sensitive information before passing it to public LLMs. Enjoy compliance with all leading standards and get unbeatable security with top-tier encryption and customizable, private models.
                  </p>
                  <button className="text-color-1 hover:text-color-2 transition-colors font-medium">
                    Explore Trust and Security →
                  </button>
                </div>
              </motion.div>

              {/* Accurate */}
              <motion.div
                className="relative p-8 border border-n-1/10 rounded-3xl overflow-hidden glass-card"
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-n-8/90 backdrop-blur-sm" />
                <div className="relative z-1">
                  <div className="text-5xl mb-6">🎯</div>
                  <h3 className="h4 mb-4 text-gradient-blue">Accurate</h3>
                  <p className="text-n-3 mb-6">
                    Ema maximizes accuracy at the lowest possible cost, thanks to 2T+ parameter proprietary EmaFusion™ model that intelligently blends the best public and private models. Plus, Ema is future proof - she's constantly adding new models to avoid over reliance on one technology stack.
                  </p>
                  <button className="text-color-1 hover:text-color-2 transition-colors font-medium">
                    Explore EmaFusion™ →
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* How Ema Works Section */}
          <motion.div
            className="relative z-10 mt-32 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <div className="mb-16">
              <h2 className="h2 mb-4">How Ema Works</h2>
              <p className="h4 text-gradient-purple">Automate any business process with AI Agents</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="relative z-1 p-0.5 rounded-3xl bg-conic-gradient">
                <div className="relative rounded-[1.5rem] overflow-hidden bg-n-8/90 backdrop-blur-sm">
                  <div className="p-16 text-center">
                    <div className="text-8xl mb-8">🤖</div>
                    <h3 className="h3 mb-6 text-gradient-blue">Ema</h3>
                    <p className="text-xl mb-8 text-n-1 font-medium">Your Universal AI Employee</p>
                    
                    <Button onClick={() => navigate('/contact')} className="px-12 py-4 text-lg">
                      Hire Ema today
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Hero;
