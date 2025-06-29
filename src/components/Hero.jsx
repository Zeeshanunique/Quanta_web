import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import Section from './ui/Section';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <Section id="hero" className="pt-[8rem] -mt-[2rem]" crosses>
        <div className="container">
          {/* Main Hero Section - Left Right Layout */}
          <div className="relative z-10 mb-[4rem]">
            <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[500px]">
              {/* Left Side - Text Content */}
              <motion.div
                className="lg:pr-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                  <span className="block text-white">Meet Your Next</span>
                  <span className="block bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                    Digital Employee. Instantly.
                  </span>
            </h1>
                
                <p className="text-xl text-n-3 mb-10 leading-relaxed max-w-xl">
                  Quanta replaces repetitive roles with AI-powered digital workers—seamlessly integrated, 
                  always on, and ready to deliver 70% cost savings from day one.
            </p>
            
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => navigate('/contact')} 
                    className="px-10 py-4 text-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all"
                  >
                    Try Quanta Free
              </Button>
                  <Button 
                    onClick={() => navigate('/contact')} 
                    white 
                    className="px-10 py-4 text-lg font-semibold flex items-center gap-3 border-2 hover:bg-white/10 transition-all"
                  >
                    Book a Demo
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                      <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
                    </svg>
              </Button>
                </div>
              </motion.div>

              {/* Right Side - Visual Dashboard */}
              <motion.div
                className="relative lg:pl-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative w-full bg-gradient-to-br from-white/5 to-white/10 rounded-3xl border border-white/20 backdrop-blur-sm overflow-hidden">
                  {/* Dashboard Interface Mockup */}
                                      <svg
                      width="100%"
                      height="auto"
                      viewBox="0 0 560 410"
                      className="block"
                    >
                    {/* Background */}
                                          <rect width="560" height="410" fill="url(#dashboardGradient)" />
                    
                    {/* Gradient Definitions */}
                    <defs>
                      <linearGradient id="dashboardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f8fafc" />
                        <stop offset="100%" stopColor="#e2e8f0" />
                      </linearGradient>
                      <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#059669" />
                      </linearGradient>
                      <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#00000020"/>
                      </filter>
                    </defs>

                                          {/* Main Card - Recruitment Portal */}
                      <rect x="35" y="50" width="280" height="200" rx="16" fill="white" filter="url(#cardShadow)" />
                    
                                          {/* Green Icon */}
                      <rect x="55" y="70" width="40" height="40" rx="8" fill="url(#greenGradient)" />
                      <text x="75" y="95" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">✓</text>
                      
                      {/* Shortlisting text */}
                      <text x="110" y="85" fill="#64748b" fontSize="12" fontWeight="500">Shortlisting the best</text>
                      <text x="110" y="100" fill="#64748b" fontSize="12" fontWeight="500">candidates for your company...</text>
                    
                                          {/* 1.5K Shortlisted */}
                      <text x="55" y="140" fill="#059669" fontSize="24" fontWeight="bold">1.5K</text>
                      <text x="120" y="145" fill="#64748b" fontSize="14">Shortlisted</text>
                      
                      {/* Progress Bar */}
                      <rect x="55" y="155" width="200" height="6" rx="3" fill="#e2e8f0" />
                      <rect x="55" y="155" width="120" height="6" rx="3" fill="url(#greenGradient)" />
                    
                                          {/* Profile Cards */}
                      {/* Profile 1 */}
                      <rect x="55" y="180" width="240" height="50" rx="12" fill="#f8fafc" stroke="#e2e8f0" />
                      <circle cx="75" cy="205" r="15" fill="url(#greenGradient)" />
                      <text x="75" y="210" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">J</text>
                      <rect x="100" y="195" width="80" height="8" rx="4" fill="#cbd5e1" />
                      <rect x="100" y="207" width="60" height="6" rx="3" fill="#e2e8f0" />
                      <text x="265" y="210" fill="#059669" fontSize="16" fontWeight="bold">4.8</text>
                    
                                          {/* Profile 2 */}
                      <rect x="55" y="240" width="240" height="50" rx="12" fill="#f8fafc" stroke="#e2e8f0" />
                      <circle cx="75" cy="265" r="15" fill="#64748b" />
                      <text x="75" y="270" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">S</text>
                      <rect x="100" y="255" width="90" height="8" rx="4" fill="#cbd5e1" />
                      <rect x="100" y="267" width="70" height="6" rx="3" fill="#e2e8f0" />
                      <text x="265" y="270" fill="#059669" fontSize="16" fontWeight="bold">4.7</text>

                                          {/* LinkedIn Icon Area */}
                      <rect x="350" y="90" width="150" height="120" rx="16" fill="white" filter="url(#cardShadow)" />
                      <rect x="370" y="110" width="30" height="30" rx="4" fill="#0077b5" />
                      <text x="385" y="130" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">in</text>
                    
                    {/* Connection Lines */}
                                          <path d="M295 150 Q320 130 350 110" stroke="#10b981" strokeWidth="2" fill="none" strokeDasharray="5,5">
                      <animate attributeName="stroke-dashoffset" values="0;-10" dur="2s" repeatCount="indefinite"/>
                    </path>
                    
                                          {/* Floating Elements */}
                      <motion.g>
                        <circle cx="420" cy="270" r="20" fill="white" filter="url(#cardShadow)">
                          <animateTransform attributeName="transform" type="translate" values="0,0; 0,-10; 0,0" dur="3s" repeatCount="indefinite"/>
                        </circle>
                        <text x="420" y="276" textAnchor="middle" fill="#059669" fontSize="16">📊</text>
                      </motion.g>
                      
                      <motion.g>
                        <rect x="440" y="310" width="60" height="40" rx="8" fill="white" filter="url(#cardShadow)">
                          <animateTransform attributeName="transform" type="translate" values="0,0; 5,0; 0,0" dur="4s" repeatCount="indefinite"/>
                        </rect>
                        <text x="470" y="335" textAnchor="middle" fill="#059669" fontSize="20">✓</text>
                      </motion.g>

                                          {/* Recruitment Portal Label */}
                      <rect x="35" y="25" width="120" height="25" rx="12" fill="white" filter="url(#cardShadow)" />
                      <circle cx="50" cy="37" r="6" fill="url(#greenGradient)" />
                      <text x="63" y="42" fill="#059669" fontSize="12" fontWeight="500">Recruitment portal</text>
                      
                      {/* Arrow pointing down */}
                      <path d="M95 50 L105 60 L95 70" stroke="#10b981" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Three Main Experience Cards */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Customer Service Digital Worker */}
            <motion.div
              className="relative p-10 border border-white/20 rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm cursor-pointer group"
              whileHover={{ y: -12, scale: 1.02 }}
              onClick={() => navigate('/solutions/customer-support')}
            >
              <div className="relative z-1">
                <div className="text-6xl mb-8 group-hover:scale-110 transition-transform">🎧</div>
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Customer Service
                </h3>
                <p className="text-n-3 text-lg leading-relaxed">
                  24/7 digital workers handling tickets, emails, and customer inquiries with human-level accuracy
                </p>
              </div>
            </motion.div>

            {/* Admin Assistant Digital Worker */}
            <motion.div
              className="relative p-10 border border-white/20 rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm cursor-pointer group"
              whileHover={{ y: -12, scale: 1.02 }}
              onClick={() => navigate('/solutions/employee-assistant')}
            >
              <div className="relative z-1">
                <div className="text-6xl mb-8 group-hover:scale-110 transition-transform">📋</div>
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Admin Assistant
                </h3>
                <p className="text-n-3 text-lg leading-relaxed">
                  Automate scheduling, data entry, document processing, and administrative workflows
                </p>
              </div>
            </motion.div>

            {/* Data Entry Digital Worker */}
            <motion.div
              className="relative p-10 border border-white/20 rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm cursor-pointer group"
              whileHover={{ y: -12, scale: 1.02 }}
              onClick={() => navigate('/solutions/data-professional')}
            >
              <div className="relative z-1">
                <div className="text-6xl mb-8 group-hover:scale-110 transition-transform">⚡</div>
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Data Entry
                </h3>
                <p className="text-n-3 text-lg leading-relaxed">
                  High-speed digital workers processing forms, databases, and spreadsheets with zero errors
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Customer Logos Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="overflow-hidden">
              <motion.div 
                className="flex space-x-8 py-8"
                animate={{ x: [-1000, 0] }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                {Array.from({ length: 20 }, (_, i) => (
                  <div 
                    key={i}
                    className="flex-shrink-0 w-24 h-12 bg-n-7 rounded-lg flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
                  >
                    <span className="text-xs text-n-3">Logo {i + 1}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
                  
          {/* Why Choose Quanta Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="text-center mb-16">
              <h4 className="text-sm uppercase tracking-wide text-n-3 mb-4">Why Quanta?</h4>
              <h2 className="h2">Deploy digital workers in minutes, not months</h2>
                    </div>

            {/* Plug-and-Play Section */}
            <div className="grid lg:grid-cols-2 gap-16 mb-16">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🔌</span>
                  </div>
                  <h3 className="h4">Plug-and-Play</h3>
                </div>
                <p className="text-n-3 mb-6">
                  Go live in minutes—no IT or coding required. Choose from pre-built digital employee templates 
                  and instantly integrate with your favorite SaaS apps: Zendesk, Slack, Gmail, Salesforce, 
                  Shopify, and 100+ others.
                </p>
                <button 
                  className="text-color-1 hover:text-color-2 transition-colors font-medium"
                  onClick={() => navigate('/solutions')}
                >
                  Explore Digital Workers →
                </button>
              </div>
              
              {/* Agent Visualization */}
              <div className="relative overflow-hidden rounded-2xl bg-n-8/50 border border-n-1/10 p-6">
                <div className="grid grid-cols-3 gap-4 h-64 overflow-hidden">
                  {/* First Column */}
                  <motion.div
                    className="space-y-4"
                    animate={{ y: [-200, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  >
                    {['Clinician Assistant', 'Recruiting Specialist', 'Sales Intelligence', 'AI Support Agent', 'Sales Development Representative', 'Sales data analyst'].map((agent, i) => (
                      <div key={i} className="p-3 bg-n-7/50 rounded-lg text-center border border-n-1/10">
                        <div className="w-8 h-8 bg-color-1/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                          <span className="text-xs text-color-1">🤖</span>
                        </div>
                        <div className="text-xs font-medium text-n-1">{agent}</div>
                      </div>
                    ))}
                  </motion.div>
                    
                  {/* Second Column */}
                      <motion.div
                    className="space-y-4"
                    animate={{ y: [0, -200] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  >
                    {['Legal assistant', 'Onboarding assistant', 'AI Agents Chatbot', 'Contracts Analyzer', 'Claims Assessment', 'Proposal Writer'].map((agent, i) => (
                      <div key={i} className="p-3 bg-n-7/50 rounded-lg text-center border border-n-1/10">
                        <div className="w-8 h-8 bg-color-1/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                          <span className="text-xs text-color-1">🤖</span>
                        </div>
                        <div className="text-xs font-medium text-n-1">{agent}</div>
                      </div>
                    ))}
                  </motion.div>

                  {/* Third Column */}
                                <motion.div 
                    className="space-y-4"
                    animate={{ y: [-100, 100] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  >
                    {['Data Professional', 'Customer Support', 'Employee Assistant', 'Pharmacist Assistant', 'Proposal Manager', 'Compliance Analyst'].map((agent, i) => (
                      <div key={i} className="p-3 bg-n-7/50 rounded-lg text-center border border-n-1/10">
                        <div className="w-8 h-8 bg-color-1/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                          <span className="text-xs text-color-1">🤖</span>
                        </div>
                        <div className="text-xs font-medium text-n-1">{agent}</div>
                                  </div>
                    ))}
                                </motion.div>
                </div>
                            </div>
                          </div>
                          
            {/* Human-in-the-Loop Section */}
            <div className="grid lg:grid-cols-2 gap-16 mb-16">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                            </div>
                  <h3 className="h4">Human-in-the-Loop</h3>
                                    </div>
                <p className="text-n-3 mb-6">
                  AI handles the routine work; you approve the exceptions. Your digital workers learn from your 
                  feedback and get smarter over time, while you maintain full control over critical decisions 
                  and can intervene whenever needed.
                </p>
                <button 
                  className="text-color-1 hover:text-color-2 transition-colors font-medium"
                  onClick={() => navigate('/about')}
                >
                  See How It Works →
                </button>
                                    </div>
              
              {/* Security Visual */}
              <div className="relative rounded-2xl bg-n-8/50 border border-n-1/10 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🛡️</div>
                  <div className="space-y-2">
                    {['SOC 2 Compliant', 'Enterprise Encryption', 'Private Models', 'Data Governance'].map((feature, i) => (
                      <div key={i} className="flex items-center justify-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-n-2">{feature}</span>
                                  </div>
                                ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise-Grade Security Section */}
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h3 className="h4">Enterprise-Grade Security</h3>
                </div>
                <p className="text-n-3 mb-6">
                  SOC2, GDPR, and HIPAA-ready from day one. Your data stays secure with enterprise-grade encryption, 
                  private cloud deployment options, and comprehensive audit trails. Transparent ROI dashboard shows 
                  you every dollar and hour saved.
                </p>
                <button 
                  className="text-color-1 hover:text-color-2 transition-colors font-medium"
                  onClick={() => navigate('/about')}
                >
                  View Security Details →
                </button>
                              </div>
                              
              {/* Accuracy Visual */}
              <div className="relative rounded-2xl bg-n-8/50 border border-n-1/10 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-6">🧠</div>
                  <div className="text-4xl font-bold text-color-1 mb-2">99.7%</div>
                  <div className="text-sm text-n-3 mb-4">Accuracy Rate</div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['2T+ Parameters', 'Future-proof', 'Multi-model'].map((tag, i) => (
                      <div key={i} className="px-3 py-1 bg-n-7/60 rounded-full text-xs text-n-2">
                                      {tag}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
            </div>
          </motion.div>

          {/* How Quanta Works Section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="mb-16">
              <h4 className="text-sm uppercase tracking-wide text-n-3 mb-4">How It Works</h4>
              <h2 className="h2">Deploy your digital crew in 3 simple steps</h2>
            </div>

            {/* Three Steps */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="relative p-8 border border-n-1/10 rounded-3xl bg-n-8/50">
                <div className="text-6xl mb-6">👥</div>
                <h3 className="h3 mb-4 text-gradient-blue">1. Choose Your Digital Crew</h3>
                <p className="text-n-3">
                  Pick from pre-built employee templates—Customer Service, Admin Assistant, Data Entry, and more.
                </p>
              </div>
              
              <div className="relative p-8 border border-n-1/10 rounded-3xl bg-n-8/50">
                <div className="text-6xl mb-6">🔗</div>
                <h3 className="h3 mb-4 text-gradient-blue">2. Connect Your Tools</h3>
                <p className="text-n-3">
                  Instantly integrate with your favorite SaaS apps: Zendesk, Slack, Gmail, Salesforce, Shopify, and 100+ others.
                </p>
              </div>
              
              <div className="relative p-8 border border-n-1/10 rounded-3xl bg-n-8/50">
                <div className="text-6xl mb-6">💰</div>
                <h3 className="h3 mb-4 text-gradient-blue">3. Automate & Save</h3>
                <p className="text-n-3">
                  Let Quanta handle tickets, emails, scheduling, and data entry—while you focus on growing your business.
                </p>
                          </div>
                        </div>
                      </motion.div>

          {/* Final CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <div className="relative max-w-2xl mx-auto">
              <div className="relative z-1 p-0.5 rounded-3xl bg-conic-gradient">
                <div className="relative rounded-[1.5rem] overflow-hidden bg-n-8/90 backdrop-blur-sm">
                  <div className="p-12 text-center">
                    <div className="text-6xl mb-6">👥</div>
                    <h3 className="h3 mb-4 text-gradient-blue">Ready to meet your new digital crew?</h3>
                    <p className="text-xl mb-8 text-n-1 font-medium">Start saving 70% on operational costs from day one</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button onClick={() => navigate('/contact')} className="px-12 py-4 text-lg">
                        Try Quanta Free
                      </Button>
                      <Button onClick={() => navigate('/contact')} white className="px-12 py-4 text-lg">
                        Contact Sales
                      </Button>
                    </div>

                    <div className="mt-8 text-n-3">
                      <p>Deploy digital workers in minutes, not months</p>
                    </div>
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