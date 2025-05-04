import React from 'react';
import Hero from '../components/Hero';
import Solutions from '../components/Solutions';
import Advantages from '../components/Advantages';
import IndustrySolutions from '../components/IndustrySolutions';
import SuccessStories from '../components/SuccessStories';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <>
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