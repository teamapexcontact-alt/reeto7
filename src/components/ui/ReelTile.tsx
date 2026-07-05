import React, { useState, useEffect, useRef } from 'react';
import type { ReelItem } from '../../data/portfolio';
import { X, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ReelTileProps {
  reel: ReelItem;
}

export const ReelTile: React.FC<ReelTileProps> = ({ reel }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock scroll when modal is open
  useEffect(() => {
    if (isPlaying) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isPlaying]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsPlaying(false);
      }
    };
    if (isPlaying) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPlaying]);

  // Focus trap inside modal
  useEffect(() => {
    if (isPlaying) {
      // Focus close button initially
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      const handleTabKey = (e: KeyboardEvent) => {
        if (!modalRef.current) return;
        
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), video'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      window.addEventListener('keydown', handleTabKey);
      return () => {
        window.removeEventListener('keydown', handleTabKey);
      };
    }
  }, [isPlaying]);

  return (
    <>
      {/* Portfolio Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="group relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 cursor-pointer shadow-lg"
        onClick={() => setIsPlaying(true)}
      >
        {/* Thumbnail Background Image */}
        <img
          src={reel.thumbnailUrl}
          alt={`${reel.title} - ${reel.description}`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Ambient Dark/Red overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div className="absolute inset-0 bg-red-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

        {/* Client Tag (Top Left) */}
        <div className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-[11px] font-bold tracking-wide text-white border border-white/10 backdrop-blur-md">
          {reel.categoryLabel}
        </div>

        {/* Footer info (Bottom) */}
        <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 text-red-primary text-xs font-semibold">
            <Eye className="h-3.5 w-3.5" />
            <span>{reel.viewsPlaceholder}</span>
          </div>
          <h4 className="text-sm font-bold leading-snug text-white tracking-wide group-hover:text-red-light transition-colors">
            {reel.title}
          </h4>
          {reel.description && (
            <p className="text-xs text-text-muted mt-0.5 leading-normal">
              {reel.description}
            </p>
          )}
        </div>
      </motion.div>

      {/* Video Lightbox Modal */}
      <AnimatePresence>
        {isPlaying && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`${reel.title} Reel Player`}
            ref={modalRef}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPlaying(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            ></motion.div>

            {/* Content Container (Vertical mobile phone layout) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative z-10 w-full max-w-[360px] aspect-[9/16] overflow-hidden rounded-[2.5rem] border-4 border-neutral-800 bg-black shadow-2xl shadow-red-primary/5"
            >
              {/* Phone Speaker Notch bar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-800 rounded-b-xl z-20 flex items-center justify-center">
                <div className="w-12 h-1 bg-neutral-900 rounded-full"></div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsPlaying(false)}
                ref={closeButtonRef}
                className="absolute top-4 right-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 hover:text-red-primary border border-white/10 backdrop-blur-sm cursor-pointer"
                title="Close"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Video Player */}
              <div className="w-full h-full relative">
                <video
                  autoPlay
                  muted
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  <source src={reel.videoUrl} type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ReelTile;
