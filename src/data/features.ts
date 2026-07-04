export interface FeatureItem {
  id: string;
  iconName: string; // matches Lucide icon component name
  title: string;
  description: string;
}

export const featuresData: FeatureItem[] = [
  {
    id: 'pipeline',
    iconName: 'Clapperboard',
    title: 'Plan → Shoot → Edit',
    description: 'We handle the entire content production pipeline, from initial script concepts to filming and final exports.'
  },
  {
    id: 'structure',
    iconName: 'Sparkles',
    title: 'Hook & CTA Structuring',
    description: 'Every reel is written and designed to grab attention in the first 3 seconds and drive viewers to take action.'
  },
  {
    id: 'turnaround',
    iconName: 'Zap',
    title: 'Fast Turnaround',
    description: 'Speed is key. Enjoy standard instant exports, with up to 1-hour priority editing for time-sensitive clips.'
  },
  {
    id: 'engagement',
    iconName: 'TrendingUp',
    title: 'Caption & Engagement Optimization',
    description: "We craft copy designed to spark replies, trigger Instagram's algorithm, and increase shareability."
  },
  {
    id: 'strategy',
    iconName: 'Calendar',
    title: 'Monthly Strategy Consultation',
    description: "We don't just edit what you give us — we analyze performance and plan your monthly calendar for maximum reach."
  },
  {
    id: 'local',
    iconName: 'Users',
    title: 'Built for Local Brands',
    description: 'Trusted by Hyderabad businesses like Party Chicha, KR Funverse, and more to establish an active online brand.'
  }
];
