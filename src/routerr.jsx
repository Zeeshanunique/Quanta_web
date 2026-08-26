import React, { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/ui/Loading';

// Lazy load all pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const Product = React.lazy(() => import('./pages/Product'));
const Services = React.lazy(() => import('./pages/Services'));
const About = React.lazy(() => import('./pages/About'));

// Solution pages
const CustomerSupport = React.lazy(() => import('./pages/solutions/CustomerSupport'));
const DataProfessional = React.lazy(() => import('./pages/solutions/DataProfessional'));
const EmployeeAssistant = React.lazy(() => import('./pages/solutions/EmployeeAssistant'));
const PharmacistAssistant = React.lazy(() => import('./pages/solutions/PharmacistAssistant'));
const ProposalManager = React.lazy(() => import('./pages/solutions/ProposalManager'));
const ComplianceAnalyst = React.lazy(() => import('./pages/solutions/ComplianceAnalyst'));

// Other pages
const FAQs = React.lazy(() => import('./pages/FAQs'));
const Blogs = React.lazy(() => import('./pages/Blogs'));

/** Scroll to hash target or location.state.scrollTo after navigation */
const HashScroll = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== '/') return;
    const id =
      (location.hash && location.hash.replace('#', '')) ||
      location.state?.scrollTo;
    if (!id) return;
    const t = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (!location.hash) {
        window.history.replaceState(null, '', `#${id}`);
      }
    }, 100);
    return () => clearTimeout(t);
  }, [location.pathname, location.hash, location.state]);
  return null;
};

const Routerr = () => {
  const location = useLocation();
  
  const PageWrapper = ({ children }) => (
    <Suspense 
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Loading size="large" text="Loading page..." />
        </div>
      }
    >
      <Header />
      <HashScroll />
      {children}
      <Footer />
    </Suspense>
  );
  
  return (
    <Routes location={location} key={location.pathname}>
      {/* Main pages */}
      <Route path="/" element={
        <PageWrapper>
          <Home />
        </PageWrapper>
      } />
      
      <Route path="/product" element={
        <PageWrapper>
          <Product />
        </PageWrapper>
      } />
      
      <Route path="/services" element={
        <PageWrapper>
          <Services />
        </PageWrapper>
      } />
      
      <Route path="/about" element={
        <PageWrapper>
          <About />
        </PageWrapper>
      } />
      
      {/* SPA: contact lives on home #contact — no separate page */}
      <Route
        path="/contact"
        element={<Navigate to="/" replace state={{ scrollTo: 'contact' }} />}
      />

      {/* Solutions pages */}
      <Route path="/solutions/customer-support" element={
        <PageWrapper>
          <CustomerSupport />
        </PageWrapper>
      } />

      <Route path="/solutions/data-professional" element={
        <PageWrapper>
          <DataProfessional />
        </PageWrapper>
      } />

      <Route path="/solutions/employee-assistant" element={
        <PageWrapper>
          <EmployeeAssistant />
        </PageWrapper>
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
