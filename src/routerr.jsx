import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

const Routerr = () => {
  const location = useLocation();
  
  return (
    <Routes location={location} key={location.pathname}>
      {/* Main pages */}
      <Route path="/" element={
        <>
          <Header />
          <Home />
          <Footer />
        </>
      } />
      
      <Route path="/product" element={
        <>
          <Header />
          <Product />
          <Footer />
        </>
      } />
      
      <Route path="/services" element={
        <>
          <Header />
          <Services />
          <Footer />
        </>
      } />
      
      <Route path="/about" element={
        <>
          <Header />
          <About />
          <Footer />
        </>
      } />
      
      <Route path="/contact" element={
        <>
          <Header />
          <Contact />
          <Footer />
        </>
      } />
      
      {/* Fallback redirect to home */}
      <Route path="*" element={
        <>
          <Header />
          <Home />
          <Footer />
        </>
      } />
    </Routes>
  );
};

export default Routerr;
