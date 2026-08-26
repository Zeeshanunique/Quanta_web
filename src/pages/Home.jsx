import React from 'react';
import CinematicHero from '../components/cinematic/CinematicHero';
import ProblemSection from '../components/cinematic/ProblemSection';
import SolutionsSection from '../components/cinematic/SolutionsSection';
import VerifiablePanelSection from '../components/cinematic/VerifiablePanelSection';
import CinematicCTA from '../components/cinematic/CinematicCTA';
import ContactForm from '../components/ContactForm';

/**
 * Cinematic landing spine — discrete page sections
 * Hero → Problem → Solutions → Verifiable → CTA → Contact
 */
const Home = () => {
  return (
    <>
      <CinematicHero />
      <ProblemSection />
      <SolutionsSection />
      <VerifiablePanelSection />
      <CinematicCTA />
      <ContactForm />
    </>
  );
};

export default Home;
