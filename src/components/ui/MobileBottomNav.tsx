import React from 'react';
import { Home, Sparkles, Film, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const MobileBottomNav: React.FC = () => {
  const handleBookCall = () => {
    window.open(siteConfig.getWhatsAppLink("Hi ReelTo7, I want to book a free strategy call to discuss my content growth!"), '_blank');
  };

  // Repositioned from bottom-fixed to top-fixed, with top-to-bottom gradient bg fade
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 pb-2 lg:hidden bg-gradient-to-b from-bg-dark via-bg-dark/95 to-transparent">
      <div className="mx-auto flex h-16 max-w-md items-center justify-between rounded-2xl border border-white/10 bg-bg-card/90 px-4 shadow-2xl backdrop-blur-lg">
        
        {/* Logo Mark */}
        <a href="#hero" className="flex flex-col items-center justify-center w-12 h-12">
          <span className="text-xl font-black text-red-primary select-none leading-none">7</span>
          <span className="text-[8px] font-bold text-white uppercase tracking-widest mt-0.5">Reel</span>
        </a>

        {/* Home */}
        <a
          href="#hero"
          className="flex flex-col items-center justify-center text-text-muted hover:text-white transition-colors"
          title="Home"
        >
          <Home className="h-5 w-5" />
          <span className="text-[10px] mt-0.5 font-medium">Home</span>
        </a>

        {/* Packages */}
        <a
          href="#pricing"
          className="flex flex-col items-center justify-center text-text-muted hover:text-white transition-colors"
          title="Packages"
        >
          <Sparkles className="h-5 w-5" />
          <span className="text-[10px] mt-0.5 font-medium">Plans</span>
        </a>

        {/* Portfolio */}
        <a
          href="#portfolio"
          className="flex flex-col items-center justify-center text-text-muted hover:text-white transition-colors"
          title="Portfolio"
        >
          <Film className="h-5 w-5" />
          <span className="text-[10px] mt-0.5 font-medium">Work</span>
        </a>

        {/* Book Call Pill */}
        <button
          onClick={handleBookCall}
          className="flex items-center gap-1 rounded-xl bg-red-gradient px-3 py-2 text-xs font-bold text-white shadow-md shadow-red-primary/20 active:scale-95 transition-transform cursor-pointer"
        >
          <MessageCircle className="h-4.5 w-4.5" />
          <span>Book</span>
        </button>

      </div>
    </div>
  );
};
export default MobileBottomNav;
