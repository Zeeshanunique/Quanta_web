import React, { Suspense, useEffect } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/ui/Loading';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Blogs = React.lazy(() => import('./pages/Blogs'));
const FAQs = React.lazy(() => import('./pages/FAQs'));

/** Scroll to hash target or location.state.scrollTo after navigation */
const HashScroll = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== '/') return undefined;
    const id = (location.hash && location.hash.replace('#', '')) || location.state?.scrollTo;
    if (!id) return undefined;
    const t = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (!location.hash) window.history.replaceState(null, '', `#${id}`);
    }, 100);
    return () => clearTimeout(t);
  }, [location.pathname, location.hash, location.state]);
  return null;
};

const Layout = () => (
  <>
    <Header />
    <Suspense fallback={<Loading fullScreen />}>
      <HashScroll />
      <Outlet />
      <Footer />
    </Suspense>
  </>
);

const Routerr = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<Blogs />} />
      <Route path="/faqs" element={<FAQs />} />
    </Route>
    {/* contact lives on home #contact */}
    <Route path="/contact" element={<Navigate to="/" replace state={{ scrollTo: 'contact' }} />} />
    <Route path="/news" element={<Navigate to="/blogs" replace />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default Routerr;
