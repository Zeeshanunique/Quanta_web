import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { goToSection } from '../lib/goToSection';
import { navCopy, solutions } from '../config/seoContent';
import { Btn, QuantaLogo } from './mono/ui';

const NAV = [
  {
    label: 'Products',
    items: solutions.map((s) => ({
      title: s.name,
      sub: s.vertical,
      url: s.url || '/#solutions',
      external: Boolean(s.url),
      soon: s.status !== 'live',
    })),
  },
  { label: 'Our standard', url: '/#learning' },
  { label: 'Trust', url: '/#security' },
  { label: 'Company', url: '/#company' },
  { label: 'Blog', url: '/blogs' },
];

const ItemLink = ({ item, className, onClick, children }) =>
  item.external ? (
    <a href={item.url} target="_blank" rel="noreferrer" className={className} onClick={onClick}>
      {children}
    </a>
  ) : (
    <Link to={item.url} className={className} onClick={onClick}>
      {children}
    </Link>
  );

const Dropdown = ({ entry, open, setOpen }) => {
  const wide = entry.items.length > 4;
  return (
    <div className="relative" onMouseEnter={() => setOpen(entry.label)} onMouseLeave={() => setOpen(null)}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(open ? null : entry.label)}
        className="flex items-center gap-1 rounded-[5px] px-3 py-2 font-inter text-[13px] text-ink-2 transition-colors hover:text-ink"
      >
        {entry.label}
        <ChevronDown size={13} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.18 }}
            className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 ${wide ? 'w-[460px]' : 'w-[220px]'}`}
          >
            <div
              className={`grid gap-0.5 rounded-[8px] bg-white p-1.5 shadow-[0_0_0_1px_rgba(10,10,11,0.06),0_12px_32px_-8px_rgba(10,10,11,0.18)] ${
                wide ? 'grid-cols-2' : ''
              }`}
            >
              {entry.items.map((item) => (
                <ItemLink
                  key={item.title}
                  item={item}
                  onClick={() => setOpen(null)}
                  className="group flex flex-col rounded-[5px] px-3 py-2 transition-colors hover:bg-paper"
                >
                  <span className="flex items-center gap-2 font-inter text-[13px] font-medium text-ink">
                    {item.title}
                    {item.soon && (
                      <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-ink-4">soon</span>
                    )}
                  </span>
                  {item.sub && <span className="font-inter text-[11.5px] text-ink-3">{item.sub}</span>}
                </ItemLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState(null);
  const [mobileSection, setMobileSection] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDrop(null);
    enablePageScroll();
  }, [location]);

  const toggleMobile = () => {
    if (mobileOpen) enablePageScroll();
    else disablePageScroll();
    setMobileOpen(!mobileOpen);
  };

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.replaceState(null, '', '/');
    }
  };

  const book = () => {
    if (mobileOpen) toggleMobile();
    goToSection(navigate, 'contact');
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || mobileOpen
          ? 'border-b border-paper-line bg-paper/90 backdrop-blur-md'
          : 'border-b border-transparent bg-paper'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:px-10">
        <Link to="/" onClick={handleLogoClick} aria-label="Quanta home">
          <QuantaLogo />
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex" aria-label="Main">
          {NAV.map((entry) =>
            entry.items ? (
              <Dropdown
                key={entry.label}
                entry={entry}
                open={openDrop === entry.label}
                setOpen={setOpenDrop}
              />
            ) : (
              <Link
                key={entry.label}
                to={entry.url}
                className="rounded-[5px] px-3 py-2 font-inter text-[13px] text-ink-2 transition-colors hover:text-ink"
              >
                {entry.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Btn variant="light" className="!py-1.5" onClick={() => goToSection(navigate, 'contact')}>
            Contact
          </Btn>
          <Btn className="!py-1.5" onClick={book}>
            {navCopy.getStarted}
          </Btn>
        </div>

        <button
          type="button"
          onClick={toggleMobile}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          className="flex h-9 w-9 items-center justify-center rounded-[6px] text-ink hover:bg-paper-3 lg:hidden"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-paper lg:hidden"
          >
            <nav className="flex flex-col px-5 py-4" aria-label="Mobile">
              {NAV.map((entry) =>
                entry.items ? (
                  <div key={entry.label} className="border-b border-paper-line">
                    <button
                      type="button"
                      onClick={() => setMobileSection(mobileSection === entry.label ? null : entry.label)}
                      className="flex w-full items-center justify-between py-4 font-inter text-[17px] text-ink"
                    >
                      {entry.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${mobileSection === entry.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {mobileSection === entry.label && (
                      <div className="grid grid-cols-2 gap-1 pb-4">
                        {entry.items.map((item) => (
                          <ItemLink
                            key={item.title}
                            item={item}
                            onClick={toggleMobile}
                            className="rounded-[5px] px-2 py-2 font-inter text-[14px] text-ink-2 hover:bg-paper-3"
                          >
                            {item.title}
                          </ItemLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={entry.label}
                    to={entry.url}
                    onClick={toggleMobile}
                    className="border-b border-paper-line py-4 font-inter text-[17px] text-ink"
                  >
                    {entry.label}
                  </Link>
                )
              )}
              <Btn className="mt-6 w-full !py-3" onClick={book}>
                {navCopy.getStarted}
              </Btn>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
