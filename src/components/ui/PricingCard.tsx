import React from 'react';
import type { PricingPlan } from '../../data/pricing';
import { siteConfig } from '../../data/siteConfig';
import { Check, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingCardProps {
  plan: PricingPlan;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const handleSelectPlan = () => {
    window.open(siteConfig.getWhatsAppLink(plan.whatsAppMessage), '_blank');
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: 'easeOut' as const }}
      className={`relative flex flex-col justify-between rounded-2xl p-8 transition-all duration-300 ${
        plan.isPopular
          ? 'bg-gradient-to-b from-[#140709] to-bg-card border-2 border-red-primary shadow-[0_0_40px_rgba(255,59,77,0.18)] z-10'
          : 'bg-bg-card border border-red-primary/18 hover:border-red-primary/40 shadow-lg'
      }`}
    >
      {/* "Most Preferred" Banner */}
      {plan.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-red-gradient px-4 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-md shadow-red-primary/20">
          <Star className="h-3 w-3 fill-white stroke-white" />
          <span>Most Preferred</span>
        </div>
      )}

      {/* Header Info */}
      <div className="mb-6">
        <h3 className="font-serif text-2xl font-bold tracking-wide text-white uppercase mb-2">
          {plan.name}
        </h3>
        <p className="text-xs text-text-muted leading-relaxed min-h-[32px] mb-4">
          {plan.description}
        </p>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-extrabold tracking-tight text-white">
            {plan.price}
          </span>
          <span className="text-xs font-semibold text-text-muted">
            /{plan.period}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/5 my-4"></div>

      {/* Feature Checklist */}
      <ul className="flex-grow flex flex-col gap-3.5 mb-8">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-white/95">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-primary/10 text-red-primary border border-red-primary/30 mt-0.5">
              <Check className="h-3 w-3 stroke-[3]" />
            </span>
            <span className="leading-snug">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Action Button */}
      <button
        onClick={handleSelectPlan}
        className={`w-full py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 cursor-pointer ${
          plan.isPopular
            ? 'bg-red-gradient text-white hover:brightness-110 shadow-lg shadow-red-primary/18 active:scale-98'
            : 'bg-white/5 border border-red-primary/18 text-white hover:bg-red-primary/10 hover:border-red-primary hover:shadow-[0_0_15px_rgba(255,59,77,0.18)] active:scale-98'
        }`}
      >
        Select Plan
      </button>
    </motion.div>
  );
};
export default PricingCard;
