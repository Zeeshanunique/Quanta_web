import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from 'framer-motion';

import { footerCopy } from '../config/seoContent';

const footerLinks = [
  {
    title: 'Solutions',
    links: [
      { title: 'Factum — Employee Experience', url: 'https://factum.quanta.co.in' },
      { title: 'Quaero — Sales & Marketing', url: 'https://quaero.quanta.co.in' },
      { title: 'Resolvo — Customer Experience', url: '/#solutions' },
      { title: 'All solutions', url: '/#solutions' },
    ],
  },
    {
      title: 'Company',
      links: [
        { title: 'About Quanta', url: '/about' },
        { title: 'Careers', url: '/careers' },
        { title: 'News', url: '/news' },
        { title: 'Contact', url: '/#contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { title: 'Documentation', url: '/blogs' },
        { title: 'Security', url: '/about' },
        { title: 'Trust & Compliance', url: '/about' },
        { title: 'Support', url: '/#contact' },
      ],
    },
  ];

const socialLinks = [
  {
    label: 'X',
    url: 'https://x.com/quanta_ai',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M22 5.8c-.75.33-1.55.54-2.36.64.86-.51 1.5-1.32 1.81-2.27-.8.48-1.69.82-2.61 1A3.3 3.3 0 0012.84 8.9c.01-.2.01-.4 0-.6A9.35 9.35 0 0021.5 4.5c-.8.45-1.67.76-2.59.93A3.29 3.29 0 0016.1 4c-1.82 0-3.3 1.48-3.3 3.3 0 .26.03.51.08.75A9.36 9.36 0 013.15 4.9a3.29 3.29 0 001.02 4.4 3.27 3.27 0 01-1.5-.41v.04a3.3 3.3 0 002.65 3.23 3.3 3.3 0 01-1.49.06 3.3 3.3 0 003.08 2.29A6.62 6.62 0 012 17.54 9.34 9.34 0 007.08 19c6.16 0 9.53-5.1 9.53-9.53v-.43A6.8 6.8 0 0022 5.8z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/company/quanta-ai',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M6.94 5a2 2 0 11-4-.01 2 2 0 014 .01zM7 8.48H3V21h4V8.48zM13.32 8.48H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/quanta_ai',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2zM12 15.88A3.88 3.88 0 1112 8.12a3.88 3.88 0 010 7.76zm5.92-9A1.42 1.42 0 1117 5.5a1.42 1.42 0 01.92 1.38z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

const FooterLogo = () => (
  <div className="mb-6">
    <div className="font-grotesk text-lg font-semibold tracking-[0.12em] text-white uppercase">
      Quanta
    </div>
    <div className="text-[10px] tracking-[0.18em] text-white/35 uppercase">
      {footerCopy.tagline}
    </div>
  </div>
);

const SocialButton = ({ social }) => (
  <motion.a
    href={social.url}
    target="_blank"
    rel="noreferrer"
    aria-label={social.label}
    className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70"
    whileHover={{
      scale: 1.08,
      y: -3,
      color: '#00E8A0',
      borderColor: 'rgba(0,232,160,0.45)',
      boxShadow: '0 0 20px rgba(0,232,160,0.25)',
    }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: 'spring', stiffness: 400, damping: 18 }}
  >
    {social.icon}
  </motion.a>
);

const FooterLink = ({ to, children }) => {
  const isPlainAnchor = to.includes('#') || to.startsWith('http');
  const external = to.startsWith('http');
  return (
    <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
      {isPlainAnchor ? (
        <a
          href={to}
          {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
          className="group inline-flex items-center gap-1.5 text-sm text-white/45 transition-colors hover:text-emerald"
        >
          <span className="h-px w-0 bg-emerald transition-all duration-200 group-hover:w-3" />
          {children}
        </a>
      ) : (
        <Link
          to={to}
          className="group inline-flex items-center gap-1.5 text-sm text-white/45 transition-colors hover:text-emerald"
        >
          <span className="h-px w-0 bg-emerald transition-all duration-200 group-hover:w-3" />
          {children}
        </Link>
      )}
    </motion.div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });
  const glowX = useTransform(sx, [0, 1], ['0%', '100%']);
  const glowY = useTransform(sy, [0, 1], ['0%', '100%']);
  const glowBg = useMotionTemplate`radial-gradient(480px circle at ${glowX} ${glowY}, rgba(0,232,160,0.12), transparent 55%)`;

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#050505]"
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ background: glowBg }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald/30 to-transparent" />

      <div className="container relative z-10 mx-auto px-5">
        <div className="py-12 lg:py-16">
          <div className="flex flex-col gap-12 md:flex-row">
            <div className="md:w-1/3">
              <Link to="/">
                <FooterLogo />
              </Link>
              <p className="mb-6 max-w-md text-sm leading-relaxed text-white/40">
                {footerCopy.blurb}
              </p>
              <p className="mb-6 text-sm text-white/35 whitespace-pre-line">
                <span className="font-medium text-white/55">Headquarters:</span>
                <br />
                {footerCopy.headquarters}
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <SocialButton key={social.label} social={social} />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 md:w-2/3 md:grid-cols-3">
              {footerLinks.map((column) => (
                <div key={column.title}>
                  <h6 className="mb-4 text-sm font-semibold tracking-wide text-white">
                    {column.title}
                  </h6>
                  <ul className="flex flex-col gap-3">
                    {column.links.map((link) => (
                      <li key={link.title}>
                        <FooterLink to={link.url}>{link.title}</FooterLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="order-2 text-sm text-white/35 md:order-1">
              © {currentYear} {footerCopy.copyright}
            </div>
            <div className="order-1 flex gap-6 md:order-2">
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/terms">Terms of Service</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
