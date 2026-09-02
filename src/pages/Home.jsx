import React from 'react';
import CinematicHero from '../components/cinematic/CinematicHero';
import ProblemSection from '../components/cinematic/ProblemSection';
import SolutionsSection from '../components/cinematic/SolutionsSection';
import VerifiablePanelSection from '../components/cinematic/VerifiablePanelSection';
import LearningSection from '../components/cinematic/LearningSection';
import EconomicsSection from '../components/cinematic/EconomicsSection';
import CinematicCTA from '../components/cinematic/CinematicCTA';
import ContactForm from '../components/ContactForm';

/**
 * Cinematic landing spine — discrete page sections
 * Hero → Problem → Solutions → Verifiable → Learning → Economics → CTA → Contact
 */
/**
 * Quanta EX landing spine
 * Hero → Challenge → Platform → AI Employees → Self-improving → Economics → CTA → Contact
 */
const Home = () => {
  return (
    <>
      <CinematicHero />
      <ProblemSection />
      <SolutionsSection />
      <VerifiablePanelSection />
      <LearningSection />
      <EconomicsSection />
      <CinematicCTA />
      <ContactForm />
    </>
  );
};

export default Home;
