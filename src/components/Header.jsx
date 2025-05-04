import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import logo from '../assets1/svg/qunataheader.svg'; // Should be replaced with AgentForge logo
import Button from "./ui/Button";
import ThemeToggle from "./ui/ThemeToggle";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useTheme } from '../hooks/useTheme';

const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "Vertical AI Platform",
    url: "/product",
  },
  {
    id: "2",
    title: "Industry Solutions",
    url: "/services",
  },
  {
    id: "3",
    title: "About",
    url: "/about",
  },
  {
    id: "4",
    title: "Contact",
    url: "/contact",
  },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openNavigation, setOpenNavigation] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleNavItemClick = (url) => {
    toggleNavigation();
    navigate(url);
  };

  // Close navigation when location changes
  useEffect(() => {
    setOpenNavigation(false);
    enablePageScroll();
  }, [location]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 ${
        isLight 
          ? 'border-b border-n-3 bg-n-1/90 backdrop-blur-sm' 
          : 'border-b border-n-6 bg-n-8/90 backdrop-blur-sm'
      } ${openNavigation && !isLight ? "bg-n-8" : ""}`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <div className="flex items-center ">
          <Link to="/" className="block w-[12rem] xl:mr-8">
            <img src={logo} width={190} height={40} alt="AgentForge" />
          </Link>

          <nav className="hidden lg:flex items-center ml-auto">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                className={`px-6 py-5 transition-colors ${
                  location.pathname === item.url 
                    ? "text-color-1" 
                    : isLight ? "text-n-8 hover:text-color-1" : "text-n-1 hover:text-color-1"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="ml-auto flex items-center">
          <div className="hidden lg:flex items-center">
            <ThemeToggle className="mr-6" />
            
            <Button onClick={() => navigate('/contact')}>
              Request Demo
            </Button>
          </div>

          <button
            className={`ml-6 lg:hidden hover:text-color-1 transition-colors ${
              isLight ? "text-n-8" : "text-n-1"
            }`}
            onClick={toggleNavigation}
          >
            <MenuSvg openNavigation={openNavigation} />
          </button>
        </div>
      </div>

      <HamburgerMenu
        openNavigation={openNavigation}
        className={isLight ? "light-menu" : ""}
      >
        <div className="flex flex-col h-full overflow-auto scroll-smooth scrollbar-none">
          <div className="h-[calc(100%-4.5rem)] overflow-auto">
            <nav className="flex flex-col h-full p-5">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavItemClick(item.url)}
                  className={`block text-left py-4 transition-colors ${
                    location.pathname === item.url 
                      ? "text-color-1" 
                      : isLight ? "text-n-8 hover:text-color-1" : "text-n-1 hover:text-color-1"
                  }`}
                >
                  {item.title}
                </button>
              ))}

              <div className="mt-auto pt-10">
                <div className="flex items-center justify-center mb-6">
                  <ThemeToggle />
                </div>
                
                <Button
                  onClick={() => handleNavItemClick('/contact')}
                  className="w-full mb-3"
                >
                  Request Demo
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </HamburgerMenu>
    </div>
  );
};

export default Header; 