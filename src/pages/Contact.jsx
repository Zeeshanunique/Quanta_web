import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Heading from '../components/ui/Heading';
import { useTheme } from '../hooks/useTheme';

const Contact = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    interest: 'platform',
    requestType: 'information'
  });

  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [activeTab, setActiveTab] = useState('information');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThanks, setShowThanks] = useState(false);

  const [globeRotation, setGlobeRotation] = useState(0);
  const [pulsatingDots, setPulsatingDots] = useState([
    { x: 30, y: 30, size: 4, delay: 0 },
    { x: 70, y: 20, size: 3, delay: 1 },
    { x: 75, y: 60, size: 5, delay: 2 },
    { x: 25, y: 70, size: 4, delay: 0.5 },
    { x: 50, y: 40, size: 6, delay: 1.5 },
  ]);

  // Animate globe rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setGlobeRotation(prev => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFormData(prev => ({
      ...prev,
      requestType: tab
    }));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed:', subscribeEmail);
    alert('Thanks for subscribing to our newsletter!');
    setSubscribeEmail('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowThanks(true);
      console.log('Form submitted:', formData);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setShowThanks(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          interest: 'platform',
          requestType: 'information'
        });
      }, 3000);
    }, 1000);
  };

  const faqs = [
    {
      question: "How quickly can I set up my first AI agent?",
      answer: "With AgentForge's no-code platform, you can set up your first AI agent in as little as 30 minutes. Our intuitive interface guides you through the process step-by-step, and our templates provide ready-to-use starting points for common business tasks."
    },
    {
      question: "Do I need technical knowledge to use AgentForge?",
      answer: "No technical expertise is required. AgentForge is specifically designed for business users without programming skills. Our visual interface lets you create powerful AI agents by simply dragging and dropping components and defining your business logic."
    },
    {
      question: "Can AgentForge integrate with our existing systems?",
      answer: "Yes! AgentForge offers ready-to-use integrations with popular business tools and platforms. Our platform supports connections to CRMs, communication tools, databases, and custom APIs through our secure connector framework."
    },
    {
      question: "What kind of support does AgentForge provide?",
      answer: "We offer multiple support tiers depending on your needs. All plans include access to our documentation and community forums. Business and Enterprise plans include dedicated support managers, training sessions, and 24/7 priority support."
    },
    {
      question: "Is AgentForge secure for enterprise use?",
      answer: "Absolutely. We maintain the highest security standards with SOC 2 compliance, end-to-end encryption, and regular security audits. Enterprise plans include additional security features like SSO, dedicated hosting, and custom data residency options."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact AgentForge | Get in Touch</title>
        <meta name="description" content="Contact us to learn more about AgentForge, request a demo, or discuss how our team can help with your AI automation needs." />
        <meta name="keywords" content="contact, AI automation, demo request, AI platform, AgentForge" />
      </Helmet>

      <Section className="pt-[12rem] -mt-[5.25rem]" crosses>
        <div className="container">
          <div className="max-w-[800px] mx-auto text-center mb-16">
            <h1 className="h1 mb-6">Get in <span className="text-gradient-purple">Touch</span></h1>
            <p className={`body-1 mb-6 ${isLight ? 'text-n-8' : 'text-n-2'}`}>
              We're here to help you transform your business with AI automation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={() => handleTabChange('information')} className={activeTab === 'information' ? 'bg-color-1' : (isLight ? 'bg-n-3' : 'bg-n-6')}>
                Request Information
              </Button>
              <Button onClick={() => handleTabChange('demo')} className={activeTab === 'demo' ? 'bg-color-1' : (isLight ? 'bg-n-3' : 'bg-n-6')}>
                Schedule a Demo
              </Button>
              <Button onClick={() => handleTabChange('support')} className={activeTab === 'support' ? 'bg-color-1' : (isLight ? 'bg-n-3' : 'bg-n-6')}>
                Get Support
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
            <div>
              <div className={`relative p-8 rounded-2xl border mb-10 glass-card glass-card-hover overflow-hidden ${
                isLight ? 'bg-n-1 border-n-3' : 'bg-n-7 border-n-6'
              }`}>
                <div className="relative z-10">
                  <h3 className="h4 mb-4 text-gradient-blue">Global AI Solutions</h3>
                  <p className={`body-2 mb-6 ${isLight ? 'text-n-6' : 'text-n-3'}`}>
                    Connecting businesses worldwide with cutting-edge AI automation to transform operations and drive innovation.
                  </p>
                </div>
                
                {/* Interactive Globe Visualization */}
                <div className="absolute inset-0 overflow-hidden opacity-60 z-0">
                  <div 
                    className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] bg-gradient-to-br from-color-1/30 via-transparent to-color-2/30"
                    style={{ transform: `rotate(${globeRotation}deg)` }}
                  ></div>
                  <div className="absolute inset-0 bg-n-8/50"></div>
                  
                  {/* Grid lines */}
                  <div className="absolute w-full h-full">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div 
                        key={`h-line-${i}`} 
                        className="absolute w-full h-px bg-n-6/30" 
                        style={{ top: `${i * 14.28}%` }}
                      ></div>
                    ))}
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div 
                        key={`v-line-${i}`} 
                        className="absolute w-px h-full bg-n-6/30" 
                        style={{ left: `${i * 14.28}%` }}
                      ></div>
                    ))}
                  </div>
                  
                  {/* Pulsating location dots */}
                  {pulsatingDots.map((dot, index) => (
                    <div 
                      key={index}
                      className="absolute rounded-full bg-color-1"
                      style={{
                        left: `${dot.x}%`,
                        top: `${dot.y}%`,
                        width: `${dot.size}px`,
                        height: `${dot.size}px`,
                        animation: `pulse 2s infinite ${dot.delay}s`
                      }}
                    >
                      <div 
                        className="absolute rounded-full -inset-2 bg-color-1/50"
                        style={{
                          animation: `pulse 2s infinite ${dot.delay}s`
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
                
                {/* Contact details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10 mt-4">
                  <div className="flex items-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-color-1 mr-3">
                      <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
                    </svg>
                    <a href="mailto:contact@agentforge.ai" className="text-n-1 hover:text-color-1 transition-colors">
                      contact@agentforge.ai
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-color-1 mr-3">
                      <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"/>
                    </svg>
                    <a href="tel:+11234567890" className="text-n-1 hover:text-color-1 transition-colors">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Floating particles animation card */}
              <div className={`relative p-8 rounded-2xl border mb-10 glass-card glass-card-hover overflow-hidden ${
                isLight ? 'bg-n-1 border-n-3' : 'bg-n-7 border-n-6'
              }`}>
                <div className="particles-container absolute inset-0 overflow-hidden">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div 
                      key={i}
                      className="particle absolute rounded-full bg-color-1/30"
                      style={{
                        width: `${Math.random() * 6 + 2}px`,
                        height: `${Math.random() * 6 + 2}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `float ${Math.random() * 10 + 10}s linear infinite, 
                                    fadeInOut ${Math.random() * 5 + 5}s ease-in-out infinite`
                      }}
                    ></div>
                  ))}
                </div>
                
                <div className="relative z-10">
                  <h3 className="h4 mb-6 text-gradient-purple">Meet Our Team</h3>
                  <p className={`body-2 mb-6 ${isLight ? 'text-n-6' : 'text-n-3'}`}>
                    We're a passionate team of AI experts, engineers, and business strategists 
                    working together to democratize AI automation technology.
                  </p>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-n-6 flex items-center justify-center text-sm font-bold mr-4">AT</div>
                    <div>
                      <div className="text-sm font-semibold">Alex Thompson</div>
                      <div className="text-xs text-n-3">Founder & CEO</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-n-6 flex items-center justify-center text-sm font-bold mr-4">SC</div>
                    <div>
                      <div className="text-sm font-semibold">Dr. Sophia Chen</div>
                      <div className="text-xs text-n-3">CTO</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`p-6 rounded-2xl border mb-10 glass-card glass-card-hover ${
                isLight ? 'bg-n-1 border-n-3' : 'bg-n-7 border-n-6'
              }`}>
                <h3 className={`h4 mb-4 ${isLight ? 'text-n-8' : 'text-n-1'}`}>Stay Updated</h3>
                <p className={`body-2 mb-6 ${isLight ? 'text-n-6' : 'text-n-3'}`}>
                  Subscribe to our newsletter for the latest updates on AI automation and platform features.
                </p>
                <form onSubmit={handleSubscribe} className="flex">
                  <input 
                    type="email"
                    value={subscribeEmail}
                    onChange={(e) => setSubscribeEmail(e.target.value)}
                    placeholder="Your email address"
                    className={`flex-1 p-4 rounded-l-lg border text-n-1 focus:outline-none focus:border-color-1 ${
                      isLight ? 'bg-n-2 border-n-3 text-n-8' : 'bg-n-6 border-n-5 text-n-1'
                    }`}
                    required
                  />
                  <Button type="submit" className="rounded-l-none">
                    Subscribe
                  </Button>
                </form>
              </div>
              
              <div className="mb-10">
                <h3 className="h4 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://twitter.com/AgentForge" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-n-7 hover:bg-color-1 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 5.79997C21.2483 6.12606 20.4534 6.34164 19.64 6.43997C20.4982 5.92729 21.1413 5.12075 21.45 4.16997C20.6436 4.65003 19.7608 4.98961 18.84 5.16997C18.2245 4.50254 17.405 4.05826 16.5098 3.90682C15.6147 3.75537 14.6945 3.90539 13.8938 4.33291C13.093 4.76044 12.4569 5.4425 12.0852 6.2708C11.7135 7.09911 11.6273 8.02736 11.84 8.90997C10.2094 8.82749 8.61444 8.40292 7.15865 7.66383C5.70287 6.92474 4.41885 5.88766 3.39 4.61997C3.02914 5.25013 2.83952 5.96379 2.84 6.68997C2.83872 7.36435 3.00422 8.02858 3.32176 8.62353C3.63929 9.21848 4.09851 9.72568 4.66 10.1C4.00798 10.082 3.36989 9.9103 2.8 9.58997V9.63997C2.80489 10.5849 3.13599 11.4991 3.73731 12.2279C4.33864 12.9568 5.17326 13.4556 6.1 13.64C5.74326 13.7485 5.37288 13.8058 5 13.81C4.74189 13.807 4.48442 13.7835 4.23 13.74C4.49391 14.5528 5.00462 15.2631 5.69107 15.7721C6.37753 16.2811 7.20558 16.5635 8.06 16.58C6.6172 17.7152 4.83588 18.3348 3 18.34C2.66574 18.3411 2.33174 18.321 2 18.28C3.87443 19.4902 6.05881 20.1327 8.29 20.13C9.82969 20.1462 11.3571 19.8553 12.7831 19.2737C14.2091 18.6921 15.505 17.8311 16.5952 16.7424C17.6854 15.6537 18.548 14.359 19.1314 12.9338C19.7147 11.5086 20.0074 9.98161 19.993 8.44197C19.993 8.27197 19.993 8.09997 19.993 7.92997C20.7853 7.33535 21.4641 6.61731 22 5.79997Z" fill="currentColor" />
                    </svg>
                  </a>
                  <a href="https://linkedin.com/company/agentforge" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-n-7 hover:bg-color-1 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z" fill="currentColor" />
                    </svg>
                  </a>
                  <a href="https://instagram.com/agentforge.ai" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-n-7 hover:bg-color-1 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z" fill="currentColor" />
                    </svg>
                  </a>
                  <a href="https://github.com/agentforge" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-n-7 hover:bg-color-1 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C19.1375 20.1625 22 16.4125 22 12C22 6.475 17.525 2 12 2Z" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              {showThanks ? (
                <div className={`p-8 rounded-2xl border text-center h-full flex flex-col items-center justify-center ${
                  isLight ? 'bg-n-1 border-color-1' : 'bg-n-7 border-color-1'
                }`}>
                  <div className="bg-color-1 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h2 className="h3 mb-4">Thank You!</h2>
                  <p className="body-2 text-n-3 mb-8">
                    Your request has been received. Our team will be in touch with you shortly.
                  </p>
                </div>
              ) : (
                <div className={`p-8 rounded-2xl border glass-card ${
                  isLight ? 'bg-n-1 border-n-3' : 'bg-n-7 border-n-6'
                }`}>
                  <h2 className={`h3 mb-6 ${isLight ? 'text-n-8' : 'text-n-1'}`}>
                    {activeTab === 'information' && 'Request Information'}
                    {activeTab === 'demo' && 'Schedule a Demo'}
                    {activeTab === 'support' && 'Get Support'}
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className={`block mb-2 font-medium ${isLight ? 'text-n-8' : 'text-n-1'}`}>Your Name*</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full p-4 rounded-lg border focus:outline-none focus:border-color-1 ${
                            isLight ? 'bg-n-2 border-n-3 text-n-8' : 'bg-n-6 border-n-5 text-n-1'
                          }`}
                          required
                        />
                      </div>
                      <div>
                        <label className={`block mb-2 font-medium ${isLight ? 'text-n-8' : 'text-n-1'}`}>Email Address*</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full p-4 rounded-lg border focus:outline-none focus:border-color-1 ${
                            isLight ? 'bg-n-2 border-n-3 text-n-8' : 'bg-n-6 border-n-5 text-n-1'
                          }`}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className={`block mb-2 font-medium ${isLight ? 'text-n-8' : 'text-n-1'}`}>Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className={`w-full p-4 rounded-lg border focus:outline-none focus:border-color-1 ${
                            isLight ? 'bg-n-2 border-n-3 text-n-8' : 'bg-n-6 border-n-5 text-n-1'
                          }`}
                        />
                      </div>
                      <div>
                        <label className={`block mb-2 font-medium ${isLight ? 'text-n-8' : 'text-n-1'}`}>Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full p-4 rounded-lg border focus:outline-none focus:border-color-1 ${
                            isLight ? 'bg-n-2 border-n-3 text-n-8' : 'bg-n-6 border-n-5 text-n-1'
                          }`}
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className={`block mb-2 font-medium ${isLight ? 'text-n-8' : 'text-n-1'}`}>Interest*</label>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className={`w-full p-4 rounded-lg border focus:outline-none focus:border-color-1 ${
                          isLight ? 'bg-n-2 border-n-3 text-n-8' : 'bg-n-6 border-n-5 text-n-1'
                        }`}
                        required
                      >
                        <option value="platform">AgentForge Platform</option>
                        <option value="enterprise">Enterprise Solutions</option>
                        <option value="consulting">Consulting Services</option>
                        <option value="training">Training & Support</option>
                        <option value="custom">Custom Development</option>
                        <option value="partnership">Partnership Opportunities</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label className={`block mb-2 font-medium ${isLight ? 'text-n-8' : 'text-n-1'}`}>Message*</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        placeholder={
                          activeTab === 'demo' 
                            ? 'Tell us about your business and what you hope to achieve with AI automation' 
                            : activeTab === 'support' 
                              ? 'Please describe the issue you\'re experiencing in detail' 
                              : 'How can we help you? Let us know what you\'re looking for'
                        }
                        className={`w-full p-4 rounded-lg border focus:outline-none focus:border-color-1 ${
                          isLight ? 'bg-n-2 border-n-3 text-n-8' : 'bg-n-6 border-n-5 text-n-1'
                        }`}
                        required
                      ></textarea>
                    </div>
                    
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="mr-2 h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                          Submitting...
                        </div>
                      ) : (
                        activeTab === 'demo' ? 'Request Demo' :
                        activeTab === 'support' ? 'Submit Support Request' :
                        'Submit Request'
                      )}
                    </Button>
                  </form>
                </div>
              )}
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mb-20">
            <Heading 
              title="Frequently Asked Questions" 
              text="Get quick answers to common questions about AgentForge"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {faqs.map((faq, index) => (
                <div key={index} className={`p-6 rounded-2xl border glass-card ${
                  isLight ? 'bg-n-1 border-n-3' : 'bg-n-7 border-n-6'
                }`}>
                  <h3 className={`h5 mb-4 ${isLight ? 'text-n-8' : 'text-n-1'}`}>{faq.question}</h3>
                  <p className={`body-2 ${isLight ? 'text-n-6' : 'text-n-3'}`}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      
      {/* Add global CSS animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.2;
          }
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(25px);
          }
          75% {
            transform: translateY(20px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        
        @keyframes fadeInOut {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
      ` }} />
    </>
  );
};

export default Contact;