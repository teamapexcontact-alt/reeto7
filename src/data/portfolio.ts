export interface ReelItem {
  id: string;
  category: 'business' | 'wedding' | 'events';
  thumbnailUrl: string; // Placeholder colors
  videoUrl: string; // TODO: swap in actual video files/embeds when provided
  clientName: string;
  title: string;
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
    thumbnailUrl: 'linear-gradient(to bottom, #110506, #3b0d11)',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-girl-filming-with-a-smartphone-on-a-stabilizer-34281-large.mp4', // standard placeholder video
    clientName: 'Party Chicha',
    title: 'Gourmet Food Launch Reel',
    viewsPlaceholder: '45K+ Views'
  },
  {
    id: 'reel-2',
    category: 'events',
    thumbnailUrl: 'linear-gradient(to bottom, #090909, #541116)',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-dj-playing-music-on-a-controller-42861-large.mp4',
    clientName: 'KR Funverse',
    title: 'Adventure Park Night Promo',
    viewsPlaceholder: '108K+ Views'
  },
  {
    id: 'reel-3',
    category: 'wedding',
    thumbnailUrl: 'linear-gradient(to bottom, #2d070a, #110506)',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-holding-hands-during-wedding-walk-48590-large.mp4',
    clientName: 'Luxury Hyderabad Wedding',
    title: 'Cinematic Teaser Highlights',
    viewsPlaceholder: '82K+ Views'
  },
  {
    id: 'reel-4',
    category: 'business',
    thumbnailUrl: 'linear-gradient(to bottom, #180507, #090909)',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-working-on-a-laptop-in-a-coffee-shop-40156-large.mp4',
    clientName: 'Local Gym & Fitness Brand',
    title: 'High-Intensity Workout Hook',
    viewsPlaceholder: '24K+ Views'
  },
  {
    id: 'reel-5',
    category: 'events',
    thumbnailUrl: 'linear-gradient(to bottom, #3b0d11, #180507)',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-crowd-raising-hands-at-a-concert-34327-large.mp4',
    clientName: 'Hyderabadi Food Fest',
    title: 'Street Food Festival Wrap',
    viewsPlaceholder: '150K+ Views'
  },
  {
    id: 'reel-6',
    category: 'wedding',
    thumbnailUrl: 'linear-gradient(to bottom, #541116, #2d070a)',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-groom-putting-on-his-wedding-jacket-48585-large.mp4',
    clientName: 'Royale Heritage Mandap',
    title: 'Traditional Reception Opening',
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
