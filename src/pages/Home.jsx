import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Solutions from '../components/Solutions';
import Advantages from '../components/Advantages';
import IndustrySolutions from '../components/IndustrySolutions';
import SuccessStories from '../components/SuccessStories';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>AgentForge | No-Code AI Automation Platform</title>
        <meta name="description" content="AgentForge - Build powerful AI automation agents in minutes without code. Increase productivity, reduce costs, and transform your business operations." />
        <meta name="keywords" content="AI automation, no-code platform, AI agents, workflow automation, business automation, task automation, AI assistant, enterprise AI" />
      </Helmet>
      <Hero />
      <Solutions />
      <Advantages />
      <IndustrySolutions />
      <SuccessStories />
      <ContactForm />
    </>
  );
};

export default Home; 