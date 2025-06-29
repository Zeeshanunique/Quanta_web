import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

// Solution pages
import CustomerSupport from './pages/solutions/CustomerSupport';
import DataProfessional from './pages/solutions/DataProfessional';
import EmployeeAssistant from './pages/solutions/EmployeeAssistant';
import PharmacistAssistant from './pages/solutions/PharmacistAssistant';
import ProposalManager from './pages/solutions/ProposalManager';
import ComplianceAnalyst from './pages/solutions/ComplianceAnalyst';

// Other pages
import FAQs from './pages/FAQs';
import Blogs from './pages/Blogs';

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

      {/* Solutions pages */}
      <Route path="/solutions/customer-support" element={
        <>
          <Header />
          <CustomerSupport />
          <Footer />
        </>
      } />

      <Route path="/solutions/data-professional" element={
        <>
          <Header />
          <DataProfessional />
          <Footer />
        </>
      } />

      <Route path="/solutions/employee-assistant" element={
        <>
          <Header />
          <EmployeeAssistant />
          <Footer />
        </>
      } />

      <Route path="/solutions/pharmacist-assistant" element={
        <>
          <Header />
          <PharmacistAssistant />
          <Footer />
        </>
      } />

      <Route path="/solutions/proposal-manager" element={
        <>
          <Header />
          <ProposalManager />
          <Footer />
        </>
      } />

      <Route path="/solutions/compliance-analyst" element={
        <>
          <Header />
          <ComplianceAnalyst />
          <Footer />
        </>
      } />

      {/* FAQ and other solution links */}
      <Route path="/faqs" element={
        <>
          <Header />
          <FAQs />
          <Footer />
        </>
      } />

      <Route path="/partners" element={
        <>
          <Header />
          <div className="pt-[12rem] -mt-[5.25rem] min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="h1 mb-6">Partners</h1>
              <p className="text-xl text-n-3">Coming Soon - Our ecosystem of integration partners</p>
            </div>
          </div>
          <Footer />
        </>
      } />

      <Route path="/integrations" element={
        <>
          <Header />
          <div className="pt-[12rem] -mt-[5.25rem] min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="h1 mb-6">Integrations</h1>
              <p className="text-xl text-n-3">Coming Soon - 500+ app integrations with Quanta</p>
            </div>
          </div>
          <Footer />
        </>
      } />

      {/* Resources pages */}
      <Route path="/blogs" element={
        <>
          <Header />
          <Blogs />
          <Footer />
        </>
      } />

      <Route path="/customers" element={
        <>
          <Header />
          <div className="pt-[12rem] -mt-[5.25rem] min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="h1 mb-6">Customer Stories</h1>
              <p className="text-xl text-n-3">Coming Soon - Success stories from our enterprise customers</p>
            </div>
          </div>
          <Footer />
        </>
      } />

      <Route path="/videos" element={
        <>
          <Header />
          <div className="pt-[12rem] -mt-[5.25rem] min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="h1 mb-6">Videos</h1>
              <p className="text-xl text-n-3">Coming Soon - Product demos and educational content</p>
            </div>
          </div>
          <Footer />
        </>
      } />

      {/* Company pages */}
      <Route path="/careers" element={
        <>
          <Header />
          <div className="pt-[12rem] -mt-[5.25rem] min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="h1 mb-6">Join the Team</h1>
              <p className="text-xl text-n-3">Coming Soon - Exciting opportunities at Quanta</p>
            </div>
          </div>
          <Footer />
        </>
      } />

      <Route path="/news" element={
        <>
          <Header />
          <div className="pt-[12rem] -mt-[5.25rem] min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="h1 mb-6">News</h1>
              <p className="text-xl text-n-3">Coming Soon - Latest announcements and press releases</p>
            </div>
          </div>
          <Footer />
        </>
      } />

      <Route path="/advisors" element={
        <>
          <Header />
          <div className="pt-[12rem] -mt-[5.25rem] min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="h1 mb-6">Our Advisors</h1>
              <p className="text-xl text-n-3">Coming Soon - Meet our world-class advisory board</p>
            </div>
          </div>
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
