import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from './Section';
import { curve, heroBackground, robot } from '../assets';
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Button from './Button';
import Generating from './Generating';
import Notification from './Notification';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const parallaxRef = useRef(null);
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>AI Automation Agents | Building Tailored Business Solutions</title>
        <meta name="description" content="Empowering businesses with high-accuracy AI automation agents to build tailored solutions. Our user-friendly platforms drive efficiency and innovation across industries." />
        <meta name="keywords" content="AI automation, business solutions, high-accuracy AI, no-code platform, low-code platform, AI agents" />
        
        {/* Schema.org markup for rich snippets */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "AI Automation Agents",
            "description": "Empowering businesses with high-accuracy AI automation agents",
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "url": "https://www.quanta.co.in/robot.jpg",
              "width": "1024",
              "height": "490"
            },
            "mainEntity": {
              "@type": "Product",
              "name": "AI Automation Platform",
              "description": "No-code/low-code platform for building AI automation agents with high accuracy",
              "offers": {
                "@type": "Offer",
                "url": "https://www.quanta.co.in/#contact"
              }
            }
          })}
        </script>
      </Helmet>

      <Section
        className="pt-[12rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >
        <div className="container relative" ref={parallaxRef}>
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <h1 className="h1 mb-6" itemProp="headline">
              Empowering Businesses with High-Accuracy AI Automation
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8" itemProp="description">
              User-friendly platforms that drive efficiency and innovation across industries
            </p>
            
            <Button onClick={() => navigate('#contact')} white>
              Get a Demo
            </Button>
          </div>

          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
              <div className="relative bg-n-8 rounded-[1rem]">
                <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
                <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                  <img
                    src={robot}
                    className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                    width={1024}
                    height={490}
                    alt="AI Robot Assistant showcasing Quanta's smart solutions"
                    loading="eager"
                    itemProp="image"
                  />

                  <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                  <ScrollParallax isAbsolutelyPositioned>
                    <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                      {heroIcons.map((icon, index) => (
                        <li className="p-5" key={index}>
                          <img src={icon} width={24} height={25} alt={icon} />
                        </li>
                      ))}
                    </ul>
                  </ScrollParallax>

                  <ScrollParallax isAbsolutelyPositioned>
                    <Notification
                      className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                      title="Code generation"
                    />
                  </ScrollParallax>
                </div>
              </div>
              <Gradient/>
            </div>
            <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
              <img
                src={heroBackground}
                className="w-full"
                width={1440}
                height={1800}
                alt="hero"
              />
            </div>
            <BackgroundCircles />
          </div>
        </div>
        <BottomLine/>
      </Section>
    </>
  );
}

export default Hero;
