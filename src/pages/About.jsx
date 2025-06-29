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
        <div className="container">
          <div className="max-w-[800px] mx-auto text-center mb-16">
            <h1 className="h1 mb-6">Our <span className="text-gradient-purple">Mission</span></h1>
            <p className="body-1 mb-8 text-n-2">
              Building a future where powerful AI works for everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            <div className="p-8 rounded-2xl bg-n-7 border border-n-6 glass-card glass-card-hover">
              <h3 className="h4 mb-4 text-gradient-blue">Our Vision</h3>
              <p className="body-2 text-n-3">
                We envision a world where businesses of all sizes can harness the power of artificial intelligence without technical barriers. Our platform democratizes AI automation, making it accessible to everyone, not just tech companies with large engineering teams.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-n-7 border border-n-6 glass-card glass-card-hover">
              <h3 className="h4 mb-4 text-gradient-teal">Our Mission</h3>
              <p className="body-2 text-n-3">
                Our mission is to deliver intuitive, no-code tools that enable any business to create custom AI agents that automate complex tasks. We're committed to making automation technology accessible, powerful, and transformative for organizations worldwide.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <Heading 
              title="Our Core Values" 
              text="The principles that guide everything we do"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="p-8 rounded-2xl bg-n-7 border border-n-6 hover:border-n-5 transition-colors glass-card glass-card-hover">
                <div className="text-3xl mb-4">🌟</div>
                <h3 className="h4 mb-4">Accessibility</h3>
                <p className="body-2 text-n-3">
                  We believe powerful technology should be accessible to everyone, not just technical users. Our platform is designed so anyone can use it, regardless of coding experience.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-n-7 border border-n-6 hover:border-n-5 transition-colors glass-card glass-card-hover">
                <div className="text-3xl mb-4">🔒</div>
                <h3 className="h4 mb-4">Trust & Security</h3>
                <p className="body-2 text-n-3">
                  We prioritize data security and ethical AI use in everything we build. Your data and trust are sacred to us, and we maintain the highest standards of security.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-n-7 border border-n-6 hover:border-n-5 transition-colors glass-card glass-card-hover">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="h4 mb-4">Innovation</h3>
                <p className="body-2 text-n-3">
                  We're constantly pushing the boundaries of what's possible with AI automation. Our team is dedicated to bringing cutting-edge AI capabilities to our platform.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <Heading 
              title="Our Journey" 
              text="The story of AgentForge"
            />
            
            <div className="relative mt-10">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-n-6"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center gap-10 mb-16 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="text-color-1 font-bold mb-2">{item.year}</div>
                    <h3 className="h4 mb-3">{item.title}</h3>
                    <p className="body-2 text-n-3">{item.description}</p>
                  </div>
                  
                  <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-color-1 z-10 border-4 border-n-8"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <Heading 
              title="Leadership Team" 
              text="Meet the people behind AgentForge"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
              {teamMembers.map((member, index) => (
                <div key={index} className="p-8 rounded-2xl bg-n-7 border border-n-6 hover:border-n-5 transition-colors text-center glass-card glass-card-hover">
                  <div className="w-24 h-24 rounded-full bg-n-6 mx-auto mb-4 overflow-hidden">
                    {/* Placeholder for team member photos */}
                    <div className="w-full h-full bg-n-5 flex items-center justify-center text-2xl font-bold">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="h5 mb-2">{member.name}</h3>
                  <div className="text-color-1 text-sm mb-4">{member.role}</div>
                  <p className="body-2 text-n-3 mb-6">{member.description}</p>
                  <a 
                    href={`https://twitter.com/${member.twitter}`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-sm text-n-1 hover:text-color-1 transition-colors"
                  >
                    @{member.twitter}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <h2 className="h3 mb-6">Ready to transform your business?</h2>
            <p className="body-2 text-n-3 max-w-xl mx-auto mb-8">
              Join thousands of companies already building powerful AI automations with AgentForge.
            </p>
            <Button onClick={() => navigate('/contact')} white>
              Get Started Free
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About; 