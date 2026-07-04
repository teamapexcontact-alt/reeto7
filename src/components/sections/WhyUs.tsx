import React from 'react';
import { motion } from 'framer-motion';
import { featuresData } from '../../data/features';
import FeatureCard from '../ui/FeatureCard';

export const WhyUs: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };


  return (
    <section id="why-us" className="py-24 px-6 bg-[#0E0E0E]/40 border-y border-white/5 relative">
      {/* Background soft glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-red-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-full bg-red-primary/10 border border-red-primary/30 px-4 py-1 text-xs font-semibold tracking-wider text-red-primary uppercase mb-4">
            Why ReelTo7
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
            Not Just Editing, But a <span className="text-red-gradient">Growth Partner</span>
          </h2>
          <p className="text-text-muted text-sm md:text-base leading-relaxed">
            Most agencies just cut video clips. We design high-retention content calendars that stop scroll, trigger algorithms, and convert cold viewers into warm customers.
          </p>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuresData.map((feature) => (
            <motion.div key={feature.id} variants={itemVariants}>
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default WhyUs;
