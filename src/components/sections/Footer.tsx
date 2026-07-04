import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import Logo from '../ui/Logo';


export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Home', href: '#hero' },
    { label: 'Why ReelTo7', href: '#why-us' },
    { label: 'Packages', href: '#pricing' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-white/5 bg-bg-dark py-12 px-6 pb-24 lg:pb-12 text-left relative z-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8">
          
          {/* Brand/Tagline */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <a href="#hero" className="flex items-center self-start group">
              <Logo variant="footer" />
            </a>
            <p className="text-xs text-text-muted max-w-xs leading-relaxed">
              Premium reel production house in Hyderabad. Scripting, filming, high-retention editing, and content optimization, all in one package.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-red-primary">Navigation</h4>
            <ul className="flex flex-wrap md:flex-col gap-x-4 gap-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-text-muted hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-red-primary">Follow Us</h4>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs text-text-muted hover:text-white transition-colors self-start"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span>@{siteConfig.instagram}</span>
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 my-6"></div>

        {/* Bottom copyright details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-text-muted uppercase tracking-wider font-semibold">
          <span>&copy; {currentYear} {siteConfig.name}. All rights reserved.</span>
          <span>Crafted for conversion</span>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
