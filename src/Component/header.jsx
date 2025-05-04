import React, { useEffect } from 'react';
import { useLocation, Link, useNavigate } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import qunataheader from '../assets1/svg/qunataheader.svg';
import { navigation } from "../constants/index";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = ({ opecity }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  // Handle logo click behavior
  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      // If on the home page, scroll to #hero
      e.preventDefault();
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on a different page, navigate to home and scroll to top
      e.preventDefault();
      navigate('/');
      window.scrollTo(0, 0);
    }
  };

  const handleQuoteClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add this function to handle quote link clicks in mobile navigation
  const handleMobileQuoteClick = () => {
    handleClick(); // Close mobile navigation
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (item) => {
    // Close mobile navigation if open
    handleClick();
  
    // Handle hash navigation to sections
    if (item.url.startsWith('#')) {
      const sectionId = item.url.substring(1);
      const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  // Add useEffect to handle navigation state
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      // After navigation to home, scroll to the desired section
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to ensure DOM is ready
      }
      // Clear the state
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-b  border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`} style={{ opacity: opecity }}>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        
        {/* Handle logo click */}
        <a href="/" onClick={handleLogoClick} className="block w-[12rem] xl:mr-8">
          <img src={qunataheader} width={190} height={40} alt="qunataheader" />
        </a>

        <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  location.pathname === item.url || item.url === location.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        {/* Navigation buttons container */}
        <div className='hidden lg:flex items-center space-x-4'>
          <Button onClick={handleQuoteClick}>
            Get Demo
          </Button>
        </div>

        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
