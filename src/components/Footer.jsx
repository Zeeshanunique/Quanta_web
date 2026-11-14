import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { footerCopy } from '../config/seoContent';
import { QuantaLogo } from './mono/ui';

const COLUMNS = [
  {
    title: 'Solutions',
    links: [
      { title: 'Factum', url: 'https://factum.quanta.co.in' },
      { title: 'Quaero', url: 'https://quaero.quanta.co.in' },
      { title: 'All solutions', url: '/#solutions' },
      { title: 'Pricing', url: '/#economics' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { title: 'Blogs', url: '/blogs' },
      { title: 'FAQs', url: '/faqs' },
      { title: 'Security', url: '/#security' },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About Us', url: '/about' },
      { title: 'Contact Us', url: '/#contact' },
    ],
  },
  {
    title: 'Social',
    links: [
      { title: 'LinkedIn', url: 'https://www.linkedin.com/company/quantadb' },
      { title: 'Instagram', url: 'https://www.instagram.com/quanta_ai' },
      { title: 'X', url: 'https://x.com/quanta_ai' },
    ],
  },
];

const FLink = ({ to, children, className = '' }) => {
  const cls = `font-inter text-[13px] text-ink transition-colors hover:text-ink-3 ${className}`;
  if (to.startsWith('http')) {
    return (
      <a href={to} target="_blank" rel="noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={cls}>
      {children}
    </Link>
  );
};

const Footer = () => {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  return (
    <footer className="grain relative overflow-hidden bg-paper-3">
      <div className="mx-auto max-w-[1200px] px-5 pb-10 pt-20 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Link to="/" aria-label="Quanta home">
              <QuantaLogo />
            </Link>
            <p className="mt-6 max-w-xs font-inter text-[13px] leading-relaxed text-ink-3">
              Join our newsletter to stay up to date on new AI employees and releases.
            </p>
            <form
              className="mt-4 flex max-w-xs items-center rounded-[6px] bg-white p-1 shadow-[0_0_0_1px_rgba(10,10,11,0.06)]"
              onSubmit={(e) => {
                e.preventDefault();
                setJoined(true);
                setEmail('');
              }}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email
              </label>
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={joined ? 'Thanks — you’re on the list' : 'you@company.com'}
                className="min-w-0 flex-1 bg-transparent px-2.5 font-inter text-[13px] text-ink outline-none placeholder:text-ink-4"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-8 w-8 items-center justify-center rounded-[4px] bg-ink text-white hover:bg-ink-2"
              >
                <ArrowRight size={14} />
              </button>
            </form>
            <p className="mt-8 whitespace-pre-line font-mono text-[10.5px] uppercase leading-relaxed tracking-[0.08em] text-ink-4">
              {footerCopy.headquarters}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h6 className="font-inter text-[13px] text-ink-3">{col.title}</h6>
                <ul className="mt-5 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.title}>
                      <FLink to={l.url}>{l.title}</FLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-4 lg:grid-cols-[1fr_1.4fr]">
          <p className="font-inter text-[12.5px] text-ink-3">
            © {new Date().getFullYear()} Quanta. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-2">
            <span className="font-inter text-[13px] text-ink-3">{footerCopy.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
