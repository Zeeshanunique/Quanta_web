import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import logo from '../assets1/svg/qunataheader.svg'; // Should be replaced with Ema logo
import Button from "./ui/Button";
import ThemeToggle from "./ui/ThemeToggle";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useTheme } from '../hooks/useTheme';

const navigationDropdowns = {
  solutions: [
    { title: "Customer Support", url: "/solutions/customer-support" },
    { title: "Data Professional", url: "/solutions/data-professional" },
    { title: "Employee Assistant", url: "/solutions/employee-assistant" },
    { title: "Pharmacist Assistant", url: "/solutions/pharmacist-assistant" },
    { title: "Proposal Manager", url: "/solutions/proposal-manager" },
    { title: "Compliance Analyst", url: "/solutions/compliance-analyst" },
    { title: "FAQs", url: "/faqs" },
    { title: "Partners", url: "/partners" },
    { title: "Integrations", url: "/integrations" }
  ],
  resources: [
    { title: "Blogs", url: "/blogs" },
    { title: "Customers", url: "/customers" },
    { title: "Videos", url: "/videos" }
  ],
  company: [
    { title: "About", url: "/about" },
    { title: "Join the team", url: "/careers" },
    { title: "News", url: "/news" },
    { title: "Our Advisors", url: "/advisors" }
  ]
};

const navigation = [
  {
    id: "0",
    title: "Solutions",
    hasDropdown: true,
    dropdownItems: navigationDropdowns.solutions
  },
  {
    id: "1",
    title: "Resources",
    hasDropdown: true,
    dropdownItems: navigationDropdowns.resources
  },
  {
    id: "2",
    title: "Company",
    hasDropdown: true,
    dropdownItems: navigationDropdowns.company
  }
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
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
    setActiveDropdown(null);
    toggleNavigation();
    navigate(url);
  };

  const handleDropdownToggle = (dropdownId) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  // Close navigation when location changes
  useEffect(() => {
    setOpenNavigation(false);
    setActiveDropdown(null);
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
        <div className="flex items-center w-full">
          <Link to="/" className="block w-[12rem] xl:mr-8">
            <img src={logo} width={190} height={40} alt="Ema" />
          </Link>

          <nav className="hidden lg:flex items-center ml-auto relative">
            {navigation.map((item) => (
              <div key={item.id} className="relative group">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`px-6 py-5 transition-colors flex items-center ${
                        isLight ? "text-n-8 hover:text-color-1" : "text-n-1 hover:text-color-1"
                      }`}
                    >
                      {item.title}
                      <svg 
                        className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === item.id ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {activeDropdown === item.id && (
                      <div className={`absolute top-full left-0 w-64 py-2 ${
                        isLight ? 'bg-n-1 border border-n-3' : 'bg-n-8 border border-n-6'
                      } rounded-lg shadow-xl z-50`}>
                        {item.dropdownItems.map((dropdownItem, index) => (
                          <Link
                            key={index}
                            to={dropdownItem.url}
                            className={`block px-4 py-3 transition-colors ${
                              isLight 
                                ? "text-n-8 hover:text-color-1 hover:bg-n-2" 
                                : "text-n-1 hover:text-color-1 hover:bg-n-7"
                            }`}
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropdownItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.url}
                    className={`px-6 py-5 transition-colors ${
                      location.pathname === item.url 
                        ? "text-color-1" 
                        : isLight ? "text-n-8 hover:text-color-1" : "text-n-1 hover:text-color-1"
                    }`}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="ml-auto flex items-center">
          <div className="hidden lg:flex items-center">
            <ThemeToggle className="mr-6" />
            
            <Button onClick={() => navigate('/contact')}>
              Hire Ema
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
                <div key={item.id}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.id)}
                        className={`w-full text-left py-4 transition-colors flex items-center justify-between ${
                          isLight ? "text-n-8 hover:text-color-1" : "text-n-1 hover:text-color-1"
                        }`}
                      >
                        {item.title}
                        <svg 
                          className={`w-4 h-4 transition-transform ${activeDropdown === item.id ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {activeDropdown === item.id && (
                        <div className="pl-4 pb-2">
                          {item.dropdownItems.map((dropdownItem, index) => (
                            <button
                              key={index}
                              onClick={() => handleNavItemClick(dropdownItem.url)}
                              className={`block w-full text-left py-2 transition-colors ${
                                isLight ? "text-n-6 hover:text-color-1" : "text-n-3 hover:text-color-1"
                              }`}
                            >
                              {dropdownItem.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavItemClick(item.url)}
                      className={`block text-left py-4 transition-colors ${
                        location.pathname === item.url 
                          ? "text-color-1" 
                          : isLight ? "text-n-8 hover:text-color-1" : "text-n-1 hover:text-color-1"
                      }`}
                    >
                      {item.title}
                    </button>
                  )}
                </div>
              ))}

              <div className="mt-auto pt-10">
                <div className="flex items-center justify-center mb-6">
                  <ThemeToggle />
                </div>
                
                <Button
                  onClick={() => handleNavItemClick('/contact')}
                  className="w-full mb-3"
                >
                  Hire Ema
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