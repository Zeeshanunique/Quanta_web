import React from "react";
import ButtonGradient from './assets/svg/ButtonGradient';
import Routerr from './routerr';
import SEO from "./components/SEO";
import ScrollToTop from './components/ScrollToTop';
import { HelmetProvider } from 'react-helmet-async';
import PreloadAssets from './components/PreloadAssets';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './hooks/useTheme';

function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <SEO
          title="AgentForge | AI Automation Platform"
          description="Empower your business with the leading no-code AI automation platform. Build custom AI agents to automate complex tasks without technical expertise."
          keywords="AI automation, no-code platform, AI agents, workflow automation, business automation, task automation, AI assistant, enterprise AI"
        />
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <ScrollToTop />
          <AnimatePresence mode="wait">
            <Routerr />
          </AnimatePresence>
        </div>
        <ButtonGradient />
        <PreloadAssets />
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
