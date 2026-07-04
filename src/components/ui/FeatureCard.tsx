import React from 'react';
import * as Icons from 'lucide-react';
import type { FeatureItem } from '../../data/features';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  feature: FeatureItem;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  // Dynamically lookup the Lucide icon by string name
  const IconComponent = (Icons as any)[feature.iconName] || Icons.HelpCircle;

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.2, ease: 'easeOut' as const }}
      className="relative overflow-hidden rounded-2xl bg-bg-card p-6 border border-red-primary/18 hover:border-red-primary/40 transition-colors duration-300"
    >
      {/* Subtle background card glow */}
      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-red-primary/5 blur-2xl pointer-events-none"></div>

      <div className="flex flex-col gap-4">
        {/* Icon wrapper */}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-primary/10 text-red-primary border border-red-primary/30">
          <IconComponent className="h-6 w-6 stroke-[1.75]" />
        </div>

        {/* Text Details */}
        <div>
          <h3 className="text-lg font-bold text-white tracking-wide mb-2">
            {feature.title}
          </h3>
          <p className="text-sm leading-relaxed text-text-muted">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
export default FeatureCard;
