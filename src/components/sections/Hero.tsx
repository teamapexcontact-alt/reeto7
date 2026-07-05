import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';
import { MessageSquare, ChevronRight, Play } from 'lucide-react';
import VideoModal from '../ui/VideoModal';

export const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleChatWhatsApp = () => {
    window.open(siteConfig.getWhatsAppLink("Hi ReelTo7, I'm visiting your website and have a question about your reel production services!"), '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const, // easeOutExpo
      },
    },
  };


  // Added pt-32 on mobile to ensure the hero section starts below the top-fixed mobile navbar
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 lg:py-20 px-6 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Copywriting content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col text-left justify-center"
        >
          {/* Eyebrow Tag */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-red-primary uppercase">
              Reel Production House • Hyderabad
            </span>
            <div className="h-1.5 w-1.5 rounded-full bg-red-primary"></div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
          >
            We Plan • Shoot • Edit — <br />
            <span className="text-red-gradient">We Grow Your Brand with Reels</span> 🚀
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-text-muted max-w-2xl leading-relaxed mb-8"
          >
            From concept scripting to a scroll-stopping reel — we handle the entire pipeline so you don't have to lift a finger.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="#pricing"
              className="flex items-center justify-center gap-2 rounded-xl bg-red-gradient px-8 py-4 text-sm font-bold text-white hover:scale-[1.02] active:scale-98 shadow-lg shadow-red-primary/18 transition-all cursor-pointer"
            >
              <span>Choose Your Plan</span>
              <ChevronRight className="h-4 w-4 stroke-[2.5]" />
            </a>
            <button
              onClick={handleChatWhatsApp}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 active:scale-98 transition-all cursor-pointer"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Chat on WhatsApp</span>
            </button>
          </motion.div>

          {/* Mini Stats Row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 border-t border-white/5 pt-8 max-w-lg"
          >
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-white">100+</div>
              <div className="text-[10px] md:text-xs font-semibold tracking-wider text-text-muted uppercase mt-1">Reels Delivered</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-white">1,404+</div>
              <div className="text-[10px] md:text-xs font-semibold tracking-wider text-text-muted uppercase mt-1">IG Community</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-white">100%</div>
              <div className="text-[10px] md:text-xs font-semibold tracking-wider text-text-muted uppercase mt-1">Local Trusted</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: 9:16 Mock Phone Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div 
            onClick={() => setIsPlaying(true)}
            className="relative w-full max-w-[280px] md:max-w-[320px] aspect-[9/16] rounded-[2.5rem] border-8 border-neutral-800 bg-neutral-950 overflow-hidden shadow-2xl shadow-red-primary/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-red-primary/20 hover:border-neutral-700 cursor-pointer group"
          >
            {/* Phone Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-neutral-800 rounded-b-xl z-20 flex items-center justify-center">
              <div className="w-8 h-1 bg-neutral-900 rounded-full"></div>
            </div>

            {/* Video or Preview */}
            <div className="w-full h-full relative">
              {/* Thumbnail Background Image */}
              <img
                src="/videos/demo-reel.jpg"
                alt="Cinematic Showcase Reel Preview"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Ambient Dark/Red overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute inset-0 bg-red-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              {/* Small "Featured Reel" badge */}
              <div className="absolute left-4 top-8 rounded-full bg-black/40 px-3 py-1 text-[11px] font-bold tracking-wide text-white border border-white/10 backdrop-blur-md z-10">
                Featured Reel
              </div>

              {/* Play Button (Center Overlay) */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="relative">
                  {/* Subtle pulsing background glow ring on hover */}
                  <div className="absolute inset-0 rounded-full bg-red-primary/10 scale-150 group-hover:animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-red-gradient text-white shadow-lg shadow-red-primary/20 scale-95 group-hover:scale-105 transition-transform duration-300">
                    <Play className="h-6 w-6 fill-white stroke-white ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Bottom tag when playing */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 p-3 z-10 flex items-center justify-between pointer-events-none">
                <div>
                  <div className="text-[9px] font-bold text-red-primary uppercase tracking-wider">Featured</div>
                  <div className="text-[11px] font-bold text-white truncate max-w-[150px]">Cinematic Showcase Reel</div>
                </div>
                <div className="text-[10px] font-bold text-white bg-white/10 px-2 py-0.5 rounded-full">9:16</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Shared Video Lightbox Modal */}
      <VideoModal
        isOpen={isPlaying}
        onClose={() => setIsPlaying(false)}
        videoUrl="/videos/demo-reel.mp4"
        title="Cinematic Showcase Reel"
      />
    </section>
  );
};
export default Hero;
