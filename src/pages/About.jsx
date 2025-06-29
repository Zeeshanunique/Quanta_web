import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  const navigate = useNavigate();
  
  const values = [
    {
      title: "Simple",
      description: "AI deployment should be as easy as having a conversation. Our Generative Workflow Engine™ makes complex enterprise automation accessible to everyone.",
      icon: "⚡"
    },
    {
      title: "Trusted",
      description: "Security and compliance are built into our core. With data governance, private models, and enterprise-grade encryption, your data stays safe.",
      icon: "🔒"
    },
    {
      title: "Accurate",
      description: "Our EmaFusion™ model with 2T+ parameters delivers 99.7% accuracy by intelligently blending the best of public and private AI models.",
      icon: "🎯"
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former VP of AI at Google, Stanford PhD in Computer Science. Passionate about democratizing AI for enterprise.",
      image: "👩‍💼"
    },
    {
      name: "Dr. Michael Chen",
      role: "CTO & Co-Founder",
      bio: "Ex-Meta AI Research Director, pioneered transformer architecture innovations. Leads our EmaFusion™ development.",
      image: "👨‍💻"
    },
    {
      name: "Alex Rodriguez",
      role: "VP of Product",
      bio: "Previously at Salesforce and Microsoft, 15+ years building enterprise software. Drives our user-centric approach.",
      image: "👨‍🔬"
    },
    {
      name: "Jennifer Walsh",
      role: "VP of Security",
      bio: "Former CISO at major financial institutions. Ensures Ema meets the highest security and compliance standards.",
      image: "👩‍🔒"
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Founded",
      description: "Ema was founded with the vision of creating the world's first Universal AI Employee"
    },
    {
      year: "2023",
      title: "Seed Funding",
      description: "Raised $15M in seed funding from leading AI and enterprise VCs"
    },
    {
      year: "2024",
      title: "EmaFusion™ Launch",
      description: "Released our proprietary 2T+ parameter model achieving 99.7% accuracy"
    },
    {
      year: "2024",
      title: "Enterprise Scale",
      description: "Deployed across Fortune 500 companies, processing millions of workflows daily"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Ema | Our Mission and Team</title>
        <meta name="description" content="Learn about Ema's mission to democratize AI automation technology and our team of industry experts." />
        <meta name="keywords" content="Ema team, AI automation mission, no-code AI company, AI experts" />
      </Helmet>

      <div className="pt-[12rem] -mt-[5.25rem]">
        <Section>
          <div className="container">
            {/* Hero Section */}
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-6">🏢</div>
              <h1 className="h1 mb-6">About Ema</h1>
              <p className="text-xl text-n-3 max-w-4xl mx-auto mb-8">
                We're building the future of work with Universal AI Employees that adapt, learn, and evolve 
                to boost productivity across every role in your enterprise. Our mission is to make AI as 
                easy to deploy as having a conversation.
              </p>
              <p className="text-lg text-n-4 max-w-3xl mx-auto">
                Located at 321 Castro St, Mountain View, CA 94041 - in the heart of Silicon Valley, 
                we're at the forefront of the AI revolution.
              </p>
            </motion.div>

            {/* Mission & Values */}
            <div className="mb-20">
              <Heading title="Our Core Values" text="The principles that guide everything we do" />
              
              <div className="grid gap-8 mt-16 md:grid-cols-3">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="relative p-8 border border-n-1/10 rounded-3xl overflow-hidden glass-card text-center"
                    whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-n-8/90" />
                    <div className="relative z-1">
                      <div className="text-5xl mb-6">{value.icon}</div>
                      <h3 className="h4 mb-4 text-gradient-blue">{value.title}</h3>
                      <p className="text-n-3">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-20">
              <Heading title="Our Journey" text="Key milestones in Ema's evolution" />
              
              <div className="mt-16 space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-6 p-6 border border-n-1/10 rounded-xl bg-n-7/30"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-color-1 rounded-full flex items-center justify-center text-n-8 font-bold">
                      {milestone.year}
                    </div>
                    <div>
                      <h4 className="h5 mb-2 text-gradient-purple">{milestone.title}</h4>
                      <p className="text-n-3">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Team */}
            <div className="mb-20">
              <Heading title="Leadership Team" text="The visionaries behind Ema's AI revolution" />
              
              <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-4">
                {team.map((member, index) => (
                  <motion.div
                    key={index}
                    className="relative p-6 border border-n-1/10 rounded-3xl overflow-hidden glass-card text-center"
                    whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-n-8/90" />
                    <div className="relative z-1">
                      <div className="text-6xl mb-4">{member.image}</div>
                      <h4 className="h5 mb-2 text-gradient-blue">{member.name}</h4>
                      <p className="text-color-1 mb-3 font-medium">{member.role}</p>
                      <p className="text-n-3 text-sm">{member.bio}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <motion.div
              className="text-center p-12 border border-n-1/10 rounded-3xl bg-n-7/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="h3 mb-6 text-gradient-purple">Ready to Join the AI Revolution?</h3>
              <p className="text-lg text-n-3 mb-8 max-w-2xl mx-auto">
                Experience the future of work with Ema. Deploy your first AI employee in minutes 
                and transform your business operations forever.
              </p>
              <div className="flex justify-center gap-4">
                <Button>Hire Ema Today</Button>
                <Button white>Join Our Team</Button>
              </div>
            </motion.div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default About; 