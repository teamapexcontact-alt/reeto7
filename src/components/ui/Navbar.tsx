import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import { PhoneCall } from 'lucide-react';
import Logo from './Logo';


export const Navbar: React.FC = () => {
  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Why ReelTo7', href: '#why-us' },
    { label: 'Packages', href: '#pricing' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleBookCall = () => {
    window.open(siteConfig.getWhatsAppLink("Hi ReelTo7, I'm visiting your website and would like to book a free strategy call!"), '_blank');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-bg-dark/80 backdrop-blur-md hidden lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center group">
          <Logo variant="desktop" />
        </a>

        {/* Navigation Links */}
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <button
          onClick={handleBookCall}
          className="flex items-center gap-2 rounded-full bg-red-gradient px-6 py-2.5 text-sm font-bold text-white hover:scale-105 active:scale-95 shadow-lg shadow-red-primary/18 transition-all duration-200 cursor-pointer"
        >
          <PhoneCall className="h-4 w-4" />
          <span>Book a Call</span>
        </button>
      </div>
    </header>
  );
};
export default Navbar;
