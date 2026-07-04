import React, { useState } from 'react';
import { pricingPlans, comparisonFeatures } from '../../data/pricing';
import PricingCard from '../ui/PricingCard';
import { ChevronDown, ChevronUp, Check, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Pricing: React.FC = () => {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      {/* Background radial warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-full bg-red-primary/10 border border-red-primary/30 px-4 py-1 text-xs font-semibold tracking-wider text-red-primary uppercase mb-4">
            Pricing Plans
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
            Choose the Plan That's <span className="text-red-gradient">Right for You</span>
          </h2>
          <p className="text-text-muted text-sm md:text-base leading-relaxed">
            Reclaim your time while we script, film, and optimize your videos. Select a package below to start booking your month.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Collapsible Comparison Table Button */}
        <div className="text-center">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-red-primary/45 px-6 py-3 text-sm font-semibold text-white hover:shadow-[0_0_15px_rgba(255,59,77,0.15)] transition-all cursor-pointer"
          >
            <span>Compare All Features</span>
            {showComparison ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>

        {/* Comparison Table Content */}
        <AnimatePresence>
          {showComparison && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden mt-8 hidden lg:block"
            >
              <div className="rounded-2xl border border-white/5 bg-bg-card/40 p-6 backdrop-blur-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-xs font-bold uppercase tracking-wider text-red-primary">
                      <th className="py-4 px-4 w-1/3">Feature</th>
                      <th className="py-4 px-4">PLUS</th>
                      <th className="py-4 px-4 text-white">PRO (Preferred)</th>
                      <th className="py-4 px-4">DIAMOND</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((row, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-white/5 hover:bg-white/5 transition-colors text-sm text-white/90"
                      >
                        <td className="py-4 px-4 font-medium flex items-center gap-2">
                          <span>{row.feature}</span>
                        </td>
                        <td className="py-4 px-4">
                          {row.plus === '✔' ? (
                            <Check className="h-4 w-4 text-red-primary" />
                          ) : row.plus === '✖' ? (
                            <span className="text-text-muted/40">—</span>
                          ) : (
                            row.plus
                          )}
                        </td>
                        <td className="py-4 px-4 font-semibold text-white bg-red-primary/5">
                          {row.pro === '✔' ? (
                            <Check className="h-4 w-4 text-red-primary" />
                          ) : row.pro === '✖' ? (
                            <span className="text-text-muted/40">—</span>
                          ) : (
                            row.pro
                          )}
                        </td>
                        <td className="py-4 px-4">
                          {row.diamond === '✔' ? (
                            <Check className="h-4 w-4 text-red-primary" />
                          ) : row.diamond === '✖' ? (
                            <span className="text-text-muted/40">—</span>
                          ) : (
                            row.diamond
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex items-center gap-2 mt-6 text-xs text-text-muted justify-center">
                  <Info className="h-4 w-4 text-red-primary" />
                  <span>Custom quotes and bundles are available. Message us directly on WhatsApp to inquire.</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
export default Pricing;
