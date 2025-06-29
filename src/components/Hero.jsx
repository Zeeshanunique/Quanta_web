import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import Section from './ui/Section';
import ValoraFloating from './animations/ValoraFloating';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Background animation */}
      <ValoraFloating />
      
      <Section id="hero" className="pt-[12rem] -mt-[5.25rem]" crosses>
        <div className="container">
          {/* Main Hero Section */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Content */}
            <div>
              <motion.h1 
                className="h1 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-gradient-purple">One employee</span><br />
                <span className="text-gradient-blue">Infinite roles</span>
              </motion.h1>
              
              <motion.p 
                className="body-1 mb-8 text-n-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Meet Ema, your Universal AI Employee. Powered by the most sophisticated AI Agents. 
                Ema goes beyond automation—she learns, adapts, and evolves to boost productivity across every role in your enterprise.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
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

            {/* Right Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                <div className="relative rounded-[1rem] overflow-hidden bg-n-8/90 backdrop-blur-sm aspect-video">
                  <div className="p-8 flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🤖</div>
                      <div className="text-xl font-medium text-n-1">Ema AI Interface</div>
                      <div className="text-sm text-n-3 mt-2">Universal AI Employee</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Three Experience Cards */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6 mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Customer Experience */}
            <motion.div
              className="relative p-6 border border-n-1/10 rounded-2xl overflow-hidden glass-card cursor-pointer"
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => navigate('/solutions/customer-support')}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-n-8/90 backdrop-blur-sm" />
              <div className="relative z-1">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="h5 mb-3 text-n-1">Customer Experience</h3>
                <p className="text-n-3 text-sm">
                  Conversational AI Employees That Power Every Stage of the Customer Lifecycle
                </p>
              </div>
            </motion.div>

            {/* Employee Experience */}
            <motion.div
              className="relative p-6 border border-n-1/10 rounded-2xl overflow-hidden glass-card cursor-pointer"
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => navigate('/solutions/employee-assistant')}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-n-8/90 backdrop-blur-sm" />
              <div className="relative z-1">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">👤</span>
                </div>
                <h3 className="h5 mb-3 text-n-1">Employee Experience</h3>
                <p className="text-n-3 text-sm">
                  Automate every step of your employee lifecycle from recruiting and onboarding to benefits
                </p>
              </div>
            </motion.div>

            {/* Sales and Marketing */}
            <motion.div
              className="relative p-6 border border-n-1/10 rounded-2xl overflow-hidden glass-card cursor-pointer"
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => navigate('/solutions/proposal-manager')}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-n-8/90 backdrop-blur-sm" />
              <div className="relative z-1">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="h5 mb-3 text-n-1">Sales and Marketing</h3>
                <p className="text-n-3 text-sm">
                  Unlock revenue potential and sales efficiency - go-to-market 10x faster
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Customer Logos Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="text-center mb-8">
              <p className="text-n-3 text-sm">Trusted by leading enterprises worldwide</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-20 h-12 bg-n-6/30 rounded-lg flex items-center justify-center">
                  <div className="w-12 h-6 bg-n-4/50 rounded"></div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Why Hire Ema Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="text-center mb-16">
              <h4 className="text-sm font-medium text-color-1 mb-2">Why Hire Ema</h4>
              <h2 className="h2">Multiply your workforce in minutes</h2>
            </div>

            <div className="space-y-20">
              {/* Simple */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400">⚡</span>
                    </div>
                    <h3 className="h4">Simple</h3>
                  </div>
                  <p className="text-n-3 mb-6">
                    With its Generative Workflow Engine™ and Pre-built AI Agents, Ema conversationally activates new AI employees to execute any complex workflow in the enterprise. Pre-integrated with hundreds of apps, Ema is easy to configure and deploy.
                  </p>
                  <button 
                    className="text-color-1 hover:text-color-2 transition-colors font-medium"
                    onClick={() => navigate('/solutions')}
                  >
                    Explore Pre-built AI Agents →
                  </button>
                </div>
                <div className="relative">
                  <div className="grid grid-cols-3 gap-3">
                    {['Customer Support', 'Data Professional', 'Employee Assistant', 'Pharmacist Assistant', 'Proposal Manager', 'Compliance Analyst'].map((agent, i) => (
                      <motion.div
                        key={agent}
                        className="p-3 bg-n-7/50 border border-n-1/10 rounded-lg text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="w-8 h-8 rounded-lg bg-color-1/20 mx-auto mb-2 flex items-center justify-center">
                          <span className="text-xs text-color-1">🤖</span>
                        </div>
                        <div className="text-xs font-medium text-n-1">{agent}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Trusted */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400">🔒</span>
                    </div>
                    <h3 className="h4">Trusted</h3>
                  </div>
                  <p className="text-n-3 mb-6">
                    Ema's data governance redacts sensitive information before passing it to public LLMs. Enjoy compliance with all leading standards and get unbeatable security with top-tier encryption and customizable, private models.
                  </p>
                  <button 
                    className="text-color-1 hover:text-color-2 transition-colors font-medium"
                    onClick={() => navigate('/about')}
                  >
                    Explore Trust and Security →
                  </button>
                </div>
                <div className="lg:order-1">
                  <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                    <div className="relative rounded-[1rem] overflow-hidden bg-n-8/90 backdrop-blur-sm aspect-video">
                      <div className="p-8 flex items-center justify-center h-full">
                        <div className="text-center">
                          <div className="text-4xl mb-4">🛡️</div>
                          <div className="text-lg font-medium text-n-1">Enterprise Security</div>
                          <div className="text-sm text-n-3 mt-2">SOC 2, GDPR, HIPAA Compliant</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accurate */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <span className="text-purple-400">🎯</span>
                    </div>
                    <h3 className="h4">Accurate</h3>
                  </div>
                  <p className="text-n-3 mb-6">
                    Ema maximizes accuracy at the lowest possible cost, thanks to 2T+ parameter proprietary EmaFusion™ model that intelligently blends the best public and private models. Plus, Ema is future proof - she's constantly adding new models to avoid over reliance on one technology stack.
                  </p>
                  <button 
                    className="text-color-1 hover:text-color-2 transition-colors font-medium"
                    onClick={() => navigate('/about')}
                  >
                    Explore EmaFusion™ →
                  </button>
                </div>
                <div className="relative">
                  <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                    <div className="relative rounded-[1rem] overflow-hidden bg-n-8/90 backdrop-blur-sm aspect-video">
                      <div className="p-8 flex items-center justify-center h-full">
                        <div className="text-center">
                          <div className="text-4xl mb-4">🧠</div>
                          <div className="text-lg font-medium text-n-1">EmaFusion™</div>
                          <div className="text-sm text-n-3 mt-2">2T+ Parameters</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* How Ema Works */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="text-center mb-16">
              <h4 className="text-sm font-medium text-color-1 mb-2">HOW EMA WORKS</h4>
              <h2 className="h2">Automate any business process with Agentic AI</h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: '🔍', title: 'Analyze', desc: 'Understand your workflow' },
                { icon: '⚙️', title: 'Configure', desc: 'Set up AI agents' },
                { icon: '🚀', title: 'Deploy', desc: 'Launch in minutes' },
                { icon: '📊', title: 'Monitor', desc: 'Track performance' }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 + i * 0.1 }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-color-1/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <h3 className="h6 mb-2">{step.title}</h3>
                  <p className="text-n-3 text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <div className="relative z-1 p-0.5 rounded-3xl bg-conic-gradient max-w-2xl mx-auto">
              <div className="relative rounded-[1.5rem] overflow-hidden bg-n-8/90 backdrop-blur-sm">
                <div className="p-12 text-center">
                  <h3 className="h3 mb-2 text-gradient-blue">Ema</h3>
                  <p className="text-xl mb-8 text-n-1 font-medium">Your Universal AI Employee</p>
                  <Button onClick={() => navigate('/contact')} className="px-12 py-4 text-lg mb-6">
                    Hire Ema today
                  </Button>
                  <p className="text-n-3">
                    Reimagine the future of work with us
                  </p>
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