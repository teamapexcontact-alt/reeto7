import React, { useState } from 'react';
import type { ReelItem } from '../../data/portfolio';
import { Play, X, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ReelTileProps {
  reel: ReelItem;
}


export const ReelTile: React.FC<ReelTileProps> = ({ reel }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      {/* Portfolio Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="group relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 cursor-pointer shadow-lg"
        onClick={() => setIsPlaying(true)}
      >
        {/* Thumbnail Background (Gradient or image placeholder) */}
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          style={{ background: reel.thumbnailUrl }}
        >
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        {/* Ambient Dark/Red overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div className="absolute inset-0 bg-red-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

        {/* Client Tag (Top Left) */}
        <div className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-[11px] font-bold tracking-wide text-white border border-white/10 backdrop-blur-md">
          {reel.clientName}
        </div>

        {/* Play Icon (Center Overlay) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-gradient text-white shadow-lg shadow-red-primary/20 scale-90 opacity-80 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
            <Play className="h-6 w-6 fill-white stroke-white ml-0.5" />
          </div>
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
        </div>
      </motion.div>

      {/* Video Lightbox Modal */}
      <AnimatePresence>
        {isPlaying && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
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
                className="absolute top-4 right-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 hover:text-red-primary border border-white/10 backdrop-blur-sm cursor-pointer"
                title="Close"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Video Player */}
              <div className="w-full h-full relative">
                {reel.videoUrl ? (
                  <video
                    src={reel.videoUrl}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    controls
                    playsInline
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-950 p-6 text-center">
                    <div className="h-16 w-16 rounded-full bg-red-primary/10 border border-red-primary/30 flex items-center justify-center text-red-primary mb-4 animate-bounce">
                      <Play className="h-8 w-8 fill-red-primary stroke-red-primary" />
                    </div>
                    <h4 className="text-white font-bold mb-2">Simulated Reel Player</h4>
                    <p className="text-xs text-text-muted">
                      [REEL VIDEO FILE — swap {reel.id} url inside portfolio.ts once clips are provided]
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
export default ReelTile;
