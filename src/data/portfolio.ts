export interface ReelItem {
  id: string;
  category: 'business' | 'wedding' | 'events';
  categoryLabel: string;
  thumbnailUrl: string;
  videoUrl: string;
  title: string;
  description: string;
  viewsPlaceholder: string;
}

export const portfolioCategories = [
  { id: 'all', label: 'All Work' },
  { id: 'business', label: 'Business & Brands' },
  { id: 'wedding', label: 'Weddings & Luxury' },
  { id: 'events', label: 'Events & Promos' }
];

export const portfolioReels: ReelItem[] = [
  {
    id: 'reel-1',
    category: 'business',
    categoryLabel: 'Farmhouse Resort',
    thumbnailUrl: '/videos/party-chicha.jpg',
    videoUrl: '/videos/party-chicha.mp4',
    title: 'Moinabad Farmhouse',
    description: 'Resort Ambience & Nature Promo',
    viewsPlaceholder: '45K+ Views'
  },
  {
    id: 'reel-2',
    category: 'wedding',
    categoryLabel: 'Luxury Wedding',
    thumbnailUrl: '/videos/kr-funverse.jpg',
    videoUrl: '/videos/kr-funverse.mp4',
    title: 'Together Forever',
    description: 'Cinematic Wedding Storytelling',
    viewsPlaceholder: '108K+ Views'
  },
  {
    id: 'reel-3',
    category: 'business',
    categoryLabel: 'Fitness Brand',
    thumbnailUrl: '/videos/wedding.jpg',
    videoUrl: '/videos/wedding.mp4',
    title: 'Discipline Gym Ambience',
    description: 'Workout Motivation & Energy',
    viewsPlaceholder: '82K+ Views'
  },
  {
    id: 'reel-4',
    category: 'business',
    categoryLabel: 'Dessert Brand',
    thumbnailUrl: '/videos/gym.jpg',
    videoUrl: '/videos/gym.mp4',
    title: 'SkyLaban Dubai Chocolates',
    description: 'Premium Handcrafted Dessert Promo',
    viewsPlaceholder: '24K+ Views'
  },
  {
    id: 'reel-5',
    category: 'events',
    categoryLabel: 'Automotive',
    thumbnailUrl: '/videos/food-fest.jpg',
    videoUrl: '/videos/food-fest.mp4',
    title: 'MG Motor Travel Lifestyle',
    description: 'Car Brand Travel Cinematic',
    viewsPlaceholder: '150K+ Views'
  },
  {
    id: 'reel-6',
    category: 'events',
    categoryLabel: 'Fashion & Lifestyle',
    thumbnailUrl: '/videos/heritage.jpg',
    videoUrl: '/videos/heritage.mp4',
    title: 'Srujana Reddy Streetwalk',
    description: 'Main Character Energy Promo',
    viewsPlaceholder: '68K+ Views'
  }
];

export const socialProofStats = {
  followers: '1,404+',
  reelsDelivered: '100+',
  countries: '2+',
  clientSatisfaction: '98%',
  testimonials: [
    {
      quote: "The engagement optimization ReelTo7 did for our restaurant launch was insane. Our reach shot up by 300% in a week, and we actually had people showing up mentioning the reels.",
      author: "Co-founder, Party Chicha",
      rating: 5
    },
    {
      quote: "Absolute professionals. From shooting script prep to the final priority edits, they took the stress of reels entirely off my plate. Standard is excellent, delivery is fast.",
      author: "Marketing Lead, KR Funverse",
      rating: 5
    },
    {
      quote: "Their cinematic editing makes even the simplest moments look majestic. Exceeded our wedding video team's expectations. Truly luxury grade.",
      author: "Event Planner, Hyderabad Weddings",
      rating: 5
    }
  ]
};
