import React, { useState } from 'react';
import type { ReelItem } from '../../data/portfolio';
import { Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import VideoModal from './VideoModal';

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

      {/* Reusable Video Lightbox Modal */}
      <VideoModal
        isOpen={isPlaying}
        onClose={() => setIsPlaying(false)}
        videoUrl={reel.videoUrl}
        title={reel.title}
      />
    </>
  );
};

export default ReelTile;
