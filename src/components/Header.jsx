import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import Button from './ui/Button';
import ThemeToggle from './ui/ThemeToggle';
import MenuSvg from '../assets/svg/MenuSvg';
import { useTheme } from '../hooks/useTheme';
import { goToSection } from '../lib/goToSection';
import { navCopy } from '../config/seoContent';

const navigationDropdowns = {
  solutions: [
    { title: 'Factum — Employee Experience', url: 'https://factum.quanta.co.in', external: true },
    { title: 'Quaero — Sales & Marketing', url: 'https://quaero.quanta.co.in', external: true },
    { title: 'Resolvo — Customer Experience', url: '/#solutions' },
    { title: 'Solvo — Finance Operations', url: '/#solutions' },
    { title: 'Munera — Professional Services', url: '/#solutions' },
    { title: 'Medeor — Healthcare', url: '/#solutions' },
    { title: 'Fides — Insurance', url: '/#solutions' },
    { title: 'FAQs', url: '/faqs' },
  ],
  resources: [
    { title: 'Blogs', url: '/blogs' },
    { title: 'Customers', url: '/customers' },
    { title: 'Videos', url: '/videos' },
  ],
  company: [
    { title: 'About', url: '/about' },
    { title: 'Join the team', url: '/careers' },
    { title: 'News', url: '/news' },
    { title: 'Our Advisors', url: '/advisors' },
  ],
};

const navigation = [
  {
    id: '0',
    title: 'AI Employees',
    hasDropdown: true,
    dropdownItems: navigationDropdowns.solutions,
  },
  {
    id: '1',
    title: 'Resources',
    hasDropdown: true,
    dropdownItems: navigationDropdowns.resources,
  },
  {
    id: '2',
    title: 'Company',
    hasDropdown: true,
    dropdownItems: navigationDropdowns.company,
  },
];

const CINEMATIC_LINKS = navCopy.cinematic;

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const isHome = location.pathname === '/';
  // Always use cinematic chrome on home — never the old solid/blur bar
  const cinematicNav = isHome;

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

  useEffect(() => {
    setOpenNavigation(false);
    setActiveDropdown(null);
    enablePageScroll();
  }, [location]);

  // Home: match page underlay to void so transparent nav never shows purple/charcoal bar
  useEffect(() => {
    if (!isHome) return undefined;
    const prevHtml = document.documentElement.style.backgroundColor;
    const prevBody = document.body.style.backgroundColor;
    document.documentElement.style.backgroundColor = '#050505';
    document.body.style.backgroundColor = '#050505';
    document.body.classList.add('cinematic-home');
    return () => {
      document.documentElement.style.backgroundColor = prevHtml;
      document.body.style.backgroundColor = prevBody;
      document.body.classList.remove('cinematic-home');
    };
  }, [isHome]);

  if (cinematicNav) {
    return (
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 bg-transparent mix-blend-normal">
        <div
          className={`pointer-events-auto relative flex h-16 items-center justify-between px-5 transition-colors duration-300 lg:px-10 ${
            scrolled
              ? 'border-b border-white/10 bg-[#050505]/85 backdrop-blur-md'
              : 'bg-transparent'
          }`}
        >
          <Link to="/" className="relative z-10 shrink-0">
            <span className="font-grotesk text-[15px] font-semibold tracking-[0.22em] text-white uppercase">
              Quanta
            </span>
          </Link>

          <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
            <div className="flex items-center gap-0.5 rounded-full border border-white/[0.1] bg-white/[0.03] px-1.5 py-1 backdrop-blur-sm">
              {CINEMATIC_LINKS.map((link) =>
                link.href.startsWith('#') ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-full px-4 py-1.5 text-[13px] font-normal text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="rounded-full px-4 py-1.5 text-[13px] font-normal text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </nav>

          <div className="relative z-10 hidden items-center gap-4 lg:flex">
            <button
              type="button"
              onClick={() => goToSection(navigate, 'contact')}
              className="rounded-md bg-white px-3.5 py-2 text-[13px] font-medium text-black transition-opacity hover:opacity-90"
            >
              {navCopy.getStarted}
            </button>
          </div>

          <button
            type="button"
            className="relative z-10 ml-auto flex h-10 w-10 items-center justify-center text-white lg:hidden"
            onClick={toggleNavigation}
            aria-label="Toggle menu"
          >
            <MenuSvg openNavigation={openNavigation} />
          </button>
        </div>

        {openNavigation && (
          <div className="pointer-events-auto fixed inset-x-0 top-16 z-40 h-[calc(100vh-4rem)] bg-[#050505] lg:hidden">
            <nav className="flex flex-col gap-1 p-6">
              {CINEMATIC_LINKS.map((link) =>
                link.href.startsWith('#') ? (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => toggleNavigation()}
                    className="py-3 text-lg text-white/80"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => toggleNavigation()}
                    className="py-3 text-lg text-white/80"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <button
                type="button"
                onClick={() => {
                  toggleNavigation();
                  goToSection(navigate, 'contact');
                }}
                className="mt-6 rounded-md bg-white py-3 text-center text-[14px] font-medium text-black"
              >
                {navCopy.getStarted}
              </button>
            </nav>
          </div>
        )}
      </header>
    );
  }

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full ${
        isLight
          ? 'border-b border-n-3 bg-n-1/90 backdrop-blur-sm'
          : 'border-b border-n-6 bg-n-8/90 backdrop-blur-sm'
      } ${openNavigation && !isLight ? 'bg-n-8' : ''}`}
    >
      <div className="flex items-center px-5 max-lg:py-4 lg:px-7.5 xl:px-10">
        <div className="flex w-full items-center">
          <Link to="/" className="block xl:mr-8">
            <span
              className={`font-grotesk text-[15px] font-semibold tracking-[0.22em] uppercase transition-opacity hover:opacity-80 ${
                isLight ? 'text-n-8' : 'text-white'
              }`}
            >
              Quanta
            </span>
          </Link>

          <nav className="relative ml-auto hidden items-center lg:flex">
            {navigation.map((item) => (
              <div key={item.id} className="group relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      className={`flex items-center px-6 py-5 transition-colors ${
                        isLight ? 'text-n-8 hover:text-color-1' : 'text-n-1 hover:text-color-1'
                      }`}
                    >
                      {item.title}
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform ${
                          activeDropdown === item.id ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {activeDropdown === item.id && (
                      <div
                        className={`absolute top-full left-0 z-50 w-64 rounded-lg py-2 shadow-xl ${
                          isLight ? 'border border-n-3 bg-n-1' : 'border border-n-6 bg-n-8'
                        }`}
                      >
                        {item.dropdownItems.map((dropdownItem, index) => {
                          const cls = `block px-4 py-3 transition-colors ${
                            isLight
                              ? 'text-n-8 hover:bg-n-2 hover:text-color-1'
                              : 'text-n-1 hover:bg-n-7 hover:text-color-1'
                          }`;
                          return dropdownItem.external ? (
                            <a key={index} href={dropdownItem.url} target="_blank" rel="noreferrer" className={cls} onClick={() => setActiveDropdown(null)}>
                              {dropdownItem.title}
                            </a>
                          ) : (
                            <Link key={index} to={dropdownItem.url} className={cls} onClick={() => setActiveDropdown(null)}>
                              {dropdownItem.title}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.url}
                    className={`px-6 py-5 transition-colors ${
                      location.pathname === item.url
                        ? 'text-color-1'
                        : isLight
                          ? 'text-n-8 hover:text-color-1'
                          : 'text-n-1 hover:text-color-1'
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
          <div className="hidden items-center lg:flex">
            <ThemeToggle className="mr-6" />
            <Button onClick={() => goToSection(navigate, 'contact')}>{navCopy.tryFree}</Button>
          </div>

          <button
            type="button"
            className={`ml-6 transition-colors hover:text-color-1 lg:hidden ${
              isLight ? 'text-n-8' : 'text-n-1'
            }`}
            onClick={toggleNavigation}
          >
            <MenuSvg openNavigation={openNavigation} />
          </button>
        </div>
      </div>

      {openNavigation && (
        <div
          className={`fixed top-[5rem] left-0 z-40 h-[calc(100vh-5rem)] w-full lg:hidden ${
            isLight ? 'bg-n-1' : 'bg-n-8'
          }`}
        >
          <div className="scrollbar-none flex h-full flex-col overflow-auto scroll-smooth">
            <div className="h-[calc(100%-4.5rem)] overflow-auto">
              <nav className="flex h-full flex-col p-5">
                {navigation.map((item) => (
                  <div key={item.id}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          type="button"
                          onClick={() => handleDropdownToggle(item.id)}
                          className={`flex w-full items-center justify-between py-4 text-left transition-colors ${
                            isLight ? 'text-n-8 hover:text-color-1' : 'text-n-1 hover:text-color-1'
                          }`}
                        >
                          {item.title}
                          <svg
                            className={`h-4 w-4 transition-transform ${
                              activeDropdown === item.id ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        {activeDropdown === item.id && (
                          <div className="pb-2 pl-4">
                            {item.dropdownItems.map((dropdownItem, index) => (
                              <button
                                key={index}
                                type="button"
                                onClick={() =>
                                  dropdownItem.external
                                    ? window.open(dropdownItem.url, '_blank', 'noreferrer')
                                    : handleNavItemClick(dropdownItem.url)
                                }
                                className={`block w-full py-2 text-left transition-colors ${
                                  isLight
                                    ? 'text-n-6 hover:text-color-1'
                                    : 'text-n-3 hover:text-color-1'
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
                        type="button"
                        onClick={() => handleNavItemClick(item.url)}
                        className={`block py-4 text-left transition-colors ${
                          location.pathname === item.url
                            ? 'text-color-1'
                            : isLight
                              ? 'text-n-8 hover:text-color-1'
                              : 'text-n-1 hover:text-color-1'
                        }`}
                      >
                        {item.title}
                      </button>
                    )}
                  </div>
                ))}

                <div className="mt-auto pt-10">
                  <div className="mb-6 flex items-center justify-center">
                    <ThemeToggle />
                  </div>
                  <Button
                    onClick={() => {
                      setOpenNavigation(false);
                      enablePageScroll();
                      goToSection(navigate, 'contact');
                    }}
                    className="mb-3 w-full"
                  >
                    {navCopy.tryFree}
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
