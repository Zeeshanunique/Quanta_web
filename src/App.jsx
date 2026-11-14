import React from 'react';
import Routerr from './routerr';
import Seo from './components/SEO';
import ScrollToTop from './components/ScrollToTop';
import PreloadAssets from './components/PreloadAssets';
import ErrorBoundary from './components/ui/ErrorBoundary';
import SkipLink from './components/ui/SkipLink';

function App() {
  return (
    <ErrorBoundary>
      <Seo />
      <SkipLink />
      <div className="overflow-x-clip bg-paper pt-16 font-inter text-ink">
        <ScrollToTop />
        <main id="main-content">
          <Routerr />
        </main>
      </div>
      <PreloadAssets />
    </ErrorBoundary>
  );
}

export default App;
