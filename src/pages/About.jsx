import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MagicCard, BorderBeam, Meteors, ShimmerButton, AnimatedList, AnimatedListItem } from '../components/magicui';

const About = () => {
  const navigate = useNavigate();
  
  const timeline = [
    {
      year: "2022",
      title: "Company Founded",
      description: "AgentForge was founded by a team of AI experts with the vision to democratize automation technology."
    },
    {
      year: "2023",
      title: "Platform Launch",
      description: "First version of the AgentForge platform released with core features for workflow automation."
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded our team globally and launched advanced features for enterprise customers."
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Continuing to innovate with next-generation AI capabilities and deeper integrations."
    }
  ];

  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "Founder & CEO",
      description: "Former AI research lead at Google with 15+ years experience in machine learning",
      twitter: "alex_thompson"
    },
    {
      name: "Dr. Sophia Chen",
      role: "CTO",
      description: "PhD in Computer Science specializing in natural language processing and AI",
      twitter: "sophia_ai"
    },
    {
      name: "Marcus Williams",
      role: "VP of Product",
      description: "Product leader with experience building automation tools at Microsoft and Salesforce",
      twitter: "marcus_product"
    },
    {
      name: "Jessica Kumar",
      role: "VP of Customer Success",
      description: "Passionate about helping companies transform through AI-driven automation",
      twitter: "jess_customer"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About AgentForge | Our Mission and Team</title>
        <meta name="description" content="Learn about AgentForge's mission to democratize AI automation technology and our team of industry experts." />
        <meta name="keywords" content="AgentForge team, AI automation mission, no-code AI company, AI experts" />
      </Helmet>

      <Section className="pt-[12rem] -mt-[5.25rem]" crosses>
        <div className="container relative">
          <Meteors number={15} />
          
          <motion.div 
            className="max-w-[800px] mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="h1 mb-6">Our <span className="text-gradient-purple">Mission</span></h1>
            <p className="body-1 mb-8 text-n-2">
              Building a future where powerful AI works for everyone
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <MagicCard 
              className="p-8 rounded-2xl bg-n-7 border border-n-6"
              gradientColor="#3b82f6"
            >
              <BorderBeam size={250} duration={12} delay={0} />
              <h3 className="h4 mb-4 text-gradient-blue">Our Vision</h3>
              <p className="body-2 text-n-3">
                We envision a world where businesses of all sizes can harness the power of artificial intelligence without technical barriers. Our platform democratizes AI automation, making it accessible to everyone, not just tech companies with large engineering teams.
              </p>
            </MagicCard>

            <MagicCard 
              className="p-8 rounded-2xl bg-n-7 border border-n-6"
              gradientColor="#06b6d4"
            >
              <BorderBeam size={250} duration={12} delay={3} />
              <h3 className="h4 mb-4 text-gradient-teal">Our Mission</h3>
              <p className="body-2 text-n-3">
                Our mission is to deliver intuitive, no-code tools that enable any business to create custom AI agents that automate complex tasks. We're committed to making automation technology accessible, powerful, and transformative for organizations worldwide.
              </p>
            </MagicCard>
          </motion.div>

          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Heading 
              title="Our Core Values" 
              text="The principles that guide everything we do"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <MagicCard 
                className="p-8 rounded-2xl bg-n-7 border border-n-6"
                gradientColor="#f59e0b"
              >
                <BorderBeam size={200} duration={10} delay={0} />
                <motion.div 
                  className="text-3xl mb-4"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >🌟</motion.div>
                <h3 className="h4 mb-4">Accessibility</h3>
                <p className="body-2 text-n-3">
                  We believe powerful technology should be accessible to everyone, not just technical users. Our platform is designed so anyone can use it, regardless of coding experience.
                </p>
              </MagicCard>

              <MagicCard 
                className="p-8 rounded-2xl bg-n-7 border border-n-6"
                gradientColor="#10b981"
              >
                <BorderBeam size={200} duration={10} delay={2} />
                <motion.div 
                  className="text-3xl mb-4"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >🔒</motion.div>
                <h3 className="h4 mb-4">Trust & Security</h3>
                <p className="body-2 text-n-3">
                  We prioritize data security and ethical AI use in everything we build. Your data and trust are sacred to us, and we maintain the highest standards of security.
                </p>
              </MagicCard>

              <MagicCard 
                className="p-8 rounded-2xl bg-n-7 border border-n-6"
                gradientColor="#a855f7"
              >
                <BorderBeam size={200} duration={10} delay={4} />
                <motion.div 
                  className="text-3xl mb-4"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                >🚀</motion.div>
                <h3 className="h4 mb-4">Innovation</h3>
                <p className="body-2 text-n-3">
                  We're constantly pushing the boundaries of what's possible with AI automation. Our team is dedicated to bringing cutting-edge AI capabilities to our platform.
                </p>
              </MagicCard>
            </div>
          </motion.div>

          <div className="mb-20">
            <Heading 
              title="Our Journey" 
              text="The story of AgentForge"
            />
            
            <div className="relative mt-10">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-n-6"></div>
              
              {timeline.map((item, index) => (
                <motion.div 
                  key={index} 
                  className={`relative flex items-center gap-10 mb-16 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <motion.div 
                      className="text-color-1 font-bold mb-2"
                      animate={{ 
                        textShadow: [
                          "0 0 0px rgba(172, 106, 255, 0)",
                          "0 0 8px rgba(172, 106, 255, 0.6)",
                          "0 0 0px rgba(172, 106, 255, 0)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {item.year}
                    </motion.div>
                    <h3 className="h4 mb-3">{item.title}</h3>
                    <p className="body-2 text-n-3">{item.description}</p>
                  </div>
                  
                  <motion.div 
                    className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-color-1 z-10 border-4 border-n-8"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      boxShadow: [
                        "0 0 0px rgba(172, 106, 255, 0)",
                        "0 0 15px rgba(172, 106, 255, 0.8)",
                        "0 0 0px rgba(172, 106, 255, 0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  />
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Heading 
              title="Leadership Team" 
              text="Meet the people behind AgentForge"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
              {teamMembers.map((member, index) => (
                <MagicCard 
                  key={index} 
                  className="p-8 rounded-2xl bg-n-7 border border-n-6 text-center"
                  gradientColor={
                    index % 4 === 0 ? "#3b82f6" :
                    index % 4 === 1 ? "#f59e0b" :
                    index % 4 === 2 ? "#10b981" :
                    "#a855f7"
                  }
                >
                  <BorderBeam size={150} duration={8} delay={index * 1.5} />
                  <motion.div 
                    className="w-24 h-24 rounded-full bg-gradient-to-r from-color-1 to-color-2 mx-auto mb-4 overflow-hidden"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-full h-full bg-n-5 flex items-center justify-center text-2xl font-bold">
                      {member.name.charAt(0)}
                    </div>
                  </motion.div>
                  <h3 className="h5 mb-2">{member.name}</h3>
                  <div className="text-color-1 text-sm mb-4">{member.role}</div>
                  <p className="body-2 text-n-3 mb-6">{member.description}</p>
                  <motion.a 
                    href={`https://twitter.com/${member.twitter}`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-sm text-n-1 hover:text-color-1 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    @{member.twitter}
                  </motion.a>
                </MagicCard>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className="h3 mb-6">Ready to transform your business?</h2>
            <p className="body-2 text-n-3 max-w-xl mx-auto mb-8">
              Join thousands of companies already building powerful AI automations with AgentForge.
            </p>
            <ShimmerButton onClick={() => navigate('/contact')} className="border border-n-6 text-n-1 bg-transparent hover:bg-n-6">
              Get Started Free
            </ShimmerButton>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default About; 