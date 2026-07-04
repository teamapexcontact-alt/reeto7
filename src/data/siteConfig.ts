/**
 * Site configuration details for ReelTo7.
 * All global links and placeholder values are managed here.
 */
export const siteConfig = {
  name: 'REELTO7',
  
  // TODO: Replace with Ruthiraj's actual WhatsApp number once confirmed.
  // Format: Country code + phone number without '+' or spaces. e.g., '919876543210' for India.
  whatsappNumber: '91XXXXXXXXXX',
  
  email: 'reelto07@gmail.com',
  location: 'Hyderabad, Telangana',
  instagram: 'reelto7_',
  instagramUrl: 'https://instagram.com/reelto7_',
  
  announcement: '🎬 Now Booking — Limited Slots This Month | Reel Production House, Hyderabad',
  
  // Helper to generate WhatsApp wa.me links with custom pre-filled message
  getWhatsAppLink: (text: string) => {
    // Falls back to a dummy number for testing if whatsappNumber is placeholder
    const phone = siteConfig.whatsappNumber.includes('X') ? '919999999999' : siteConfig.whatsappNumber;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  },
  
  // Helper for mailto link
  getMailtoLink: (subject: string = 'Inquiry from ReelTo7 Website') => {
    return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}`;
  }
};
