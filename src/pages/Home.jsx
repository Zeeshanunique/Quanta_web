import React from 'react';
import {
  MonoCTA,
  MonoContact,
  MonoEconomics,
  MonoHero,
  MonoPrinciples,
  MonoProblem,
  MonoRoster,
  MonoSecurity,
} from '../components/mono/HomeSections';

/**
 * Mono redesign — light grey technical canvas, isometric line art.
 * Hero · Problem · How it learns · Solutions · Pricing · Security · Contact · CTA
 */
const Home = () => (
  <>
    <MonoHero />
    <MonoProblem />
    <MonoPrinciples />
    <MonoRoster />
    <MonoEconomics />
    <MonoSecurity />
    <MonoContact />
    <MonoCTA />
  </>
);

export default Home;
