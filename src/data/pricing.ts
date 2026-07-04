export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  isPopular: boolean;
  features: string[];
  whatsAppMessage: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'plus',
    name: 'PLUS',
    price: '₹11,999',
    period: 'month',
    description: 'Perfect for small businesses starting their video presence.',
    isPopular: false,
    features: [
      '8 High-Quality Reels per Month',
      'Professional Editing with Refined Transitions',
      'Structured & Brand-Aligned Caption Formatting',
      '1 Revision per Reel',
      'Instant Reel Delivery'
    ],
    whatsAppMessage: "Hi ReelTo7, I'm interested in the PLUS package (₹11,999/month)."
  },
  {
    id: 'pro',
    name: 'PRO',
    price: '₹19,999',
    period: 'month',
    description: 'Designed for brands seeking consistent, optimized content growth.',
    isPopular: true, // ⭐ Most Preferred
    features: [
      '12 Reels per Month',
      'Advanced Cinematic Editing',
      'Caption & Engagement Optimization',
      '2 Revisions per Reel',
      '1-Hour Delivery Timeline',
      '1 Monthly Strategy Consultation (30 Minutes)'
    ],
    whatsAppMessage: "Hi ReelTo7, I'm interested in the PRO package (₹19,999/month)."
  },
  {
    id: 'diamond',
    name: 'DIAMOND',
    price: '₹24,999',
    period: 'month',
    description: 'The ultimate production package for high-impact content creators.',
    isPopular: false,
    features: [
      '15 Reels per Month',
      'Premium Cinematic Editing with High-End Effects',
      'Hook & Call-to-Action Structuring',
      '3 Revisions per Reel',
      '2-Hour Priority Delivery',
      '2 Monthly Strategy Consultations'
    ],
    whatsAppMessage: "Hi ReelTo7, I'm interested in the DIAMOND package (₹24,999/month)."
  }
];

// Helper array containing all unique features for the comparison table
export const comparisonFeatures = [
  { category: 'Content Delivery', feature: 'Reels per Month', plus: '8 Reels', pro: '12 Reels', diamond: '15 Reels' },
  { category: 'Editing Quality', feature: 'Editing Style', plus: 'Professional', pro: 'Advanced Cinematic', diamond: 'Premium Custom + FX' },
  { category: 'Hook & Structure', feature: 'Hook & CTA Structuring', plus: '✖', pro: '✖', diamond: '✔' },
  { category: 'Engagement', feature: 'Caption Optimization', plus: 'Standard formatting', pro: 'Engagement optimized', diamond: 'High-converting hooks' },
  { category: 'Revisions', feature: 'Revisions per Reel', plus: '1 revision', pro: '2 revisions', diamond: '3 revisions' },
  { category: 'Turnaround', feature: 'Delivery Timeline', plus: 'Standard', pro: '1-Hour Priority', diamond: '2-Hour Priority' },
  { category: 'Consultation', feature: 'Strategy consultations', plus: '✖', pro: '1 session (30m)', diamond: '2 sessions (60m total)' },
];
