import React, { useState } from 'react';
import { portfolioCategories, portfolioReels } from '../../data/portfolio';
import ReelTile from '../ui/ReelTile';
import { motion, AnimatePresence } from 'framer-motion';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredReels = activeCategory === 'all'
    ? portfolioReels
    : portfolioReels.filter(reel => reel.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-6 bg-[#0E0E0E]/20 relative">
      <div className="absolute top-10 left-10 w-80 h-80 bg-red-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block rounded-full bg-red-primary/10 border border-red-primary/30 px-4 py-1 text-xs font-semibold tracking-wider text-red-primary uppercase mb-4">
            Our Work
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
            Reels We've <span className="text-red-gradient">Made</span>
          </h2>
          <p className="text-text-muted text-sm md:text-base leading-relaxed">
            Take a look at some scroll-stopping reel campaigns we have strategized, shot, and edited for businesses and celebrations. Click on any tile to play the reel.
          </p>
        </div>

        {/* Categories Tabs Filter */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {portfolioCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer border ${
                activeCategory === category.id
                  ? 'bg-red-gradient text-white border-red-primary shadow-md shadow-red-primary/10'
                  : 'bg-white/5 text-text-muted border-white/5 hover:border-white/10 hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Reels Grid (9:16 layout) */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredReels.map((reel) => (
              <motion.div
                layout
                key={reel.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <ReelTile reel={reel} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
export default Portfolio;
