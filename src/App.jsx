import React from "react";
import ButtonGradient from './assets/svg/ButtonGradient';
import Routerr from './routerr';
import SEO from "./components/SEO";
import ScrollToTop from './components/ScrollToTop';
import PreloadAssets from './components/PreloadAssets';
import ErrorBoundary from './components/ui/ErrorBoundary';
import SkipLink from './components/ui/SkipLink';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './hooks/useTheme';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <SEO
          title="Quanta | Vertical AI Automation Platform"
          description="Empower your business with the leading specialized vertical AI agents. Deep domain expertise for your industry without technical expertise."
          keywords="vertical AI agents, domain-specific AI, industry AI, SaaS replacement, vertical automation, specialized AI, Quanta"
        />
        <SkipLink />
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <ScrollToTop />
          <AnimatePresence mode="wait">
            <main id="main-content">
              <Routerr />
            </main>
          </AnimatePresence>
        </div>
        <ButtonGradient />
        <PreloadAssets />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
