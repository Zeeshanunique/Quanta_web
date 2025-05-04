import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './ui/Button';
import Section from './ui/Section';
import ValoraFloating from './animations/ValoraFloating';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Fullscreen background animation */}
      <ValoraFloating />
      
      <Section id="hero" className="pt-[12rem] -mt-[5.25rem]" crosses>
        <div className="container">
          <div className="relative z-10 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <h1 className="h1 mb-6 relative">
              <span className="text-gradient-purple">Agentic AI Automation</span> That Works Like Magic
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-8 text-n-2 relative">
              AgentForge is the no-code platform that lets anyone build powerful AI agents for their business. 
              Automate complex tasks, increase productivity, and unlock new insights - all without technical expertise.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center relative">
              <Button onClick={() => navigate('/product')} white>
                Explore Platform
              </Button>
              <Button onClick={() => navigate('/contact')}>
                Get Started Free
              </Button>
            </div>
          </div>

          <div className="relative max-w-[90%] mx-auto z-10">
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
              <div className="relative rounded-[1rem] overflow-hidden bg-n-8">
                {/* Dashboard/Platform Visualization Image would go here */}
                <div className="aspect-[16/9] flex items-center justify-center bg-n-7 text-n-1/50 glass-card">
                  <div className="text-center px-4">
                    <div className="text-sm text-color-1 mb-2">No-Code AI Automation</div>
                    <h3 className="h3 mb-4">Build. Deploy. Optimize.</h3>
                    <p className="body-2 text-n-3 max-w-[80%] mx-auto">
                      Create custom AI agents in minutes with our intuitive visual builder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Hero; 