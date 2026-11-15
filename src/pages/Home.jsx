import React from 'react';
import {
  MonoCTA,
  MonoCompany,
  MonoContact,
  MonoHero,
  MonoPrinciples,
  MonoProblem,
  MonoRoster,
  MonoSecurity,
} from '../components/mono/HomeSections';

/**
 * Quanta — the company. Two products held to one standard; neither leads.
 * Hero · Why now · Products · One standard · Trust · Company · Contact · CTA
 */
const Home = () => (
  <>
    <MonoHero />
    <MonoProblem />
    <MonoRoster />
    <MonoPrinciples />
    <MonoSecurity />
    <MonoCompany />
    <MonoContact />
    <MonoCTA />
  </>
);

export default Home;
