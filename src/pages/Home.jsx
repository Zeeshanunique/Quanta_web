import React from 'react';
import CinematicHero from '../components/cinematic/CinematicHero';
import ProofStrip from '../components/cinematic/ProofStrip';
import ProblemSection from '../components/cinematic/ProblemSection';
import SolutionsSection from '../components/cinematic/SolutionsSection';
import VerifiablePanelSection from '../components/cinematic/VerifiablePanelSection';
import LearningSection from '../components/cinematic/LearningSection';
import EconomicsSection from '../components/cinematic/EconomicsSection';
import SecuritySection from '../components/cinematic/SecuritySection';
import CinematicCTA from '../components/cinematic/CinematicCTA';
import ContactForm from '../components/ContactForm';

/**
 * Enterprise spine: claim → proof → problem → product → differentiator
 * → price → trust → close.
 * Hero · Proof · Problem · Solutions · Roster · Learning · Economics
 * · Security · CTA · Contact
 */
const Home = () => {
  return (
    <>
      <CinematicHero />
      <ProofStrip />
      <ProblemSection />
      <SolutionsSection />
      <VerifiablePanelSection />
      <LearningSection />
      <EconomicsSection />
      <SecuritySection />
      <CinematicCTA />
      <ContactForm />
    </>
  );
};

export default Home;
