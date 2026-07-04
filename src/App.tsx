import Navbar from './components/ui/Navbar';
import MobileBottomNav from './components/ui/MobileBottomNav';
import Hero from './components/sections/Hero';
import WhyUs from './components/sections/WhyUs';
import Pricing from './components/sections/Pricing';
import Portfolio from './components/sections/Portfolio';
import SocialProof from './components/sections/SocialProof';
import ContactCTA from './components/sections/ContactCTA';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-bg-dark text-white flex flex-col antialiased">
      {/* 2. Desktop Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* 3. Hero Header Section */}
        <Hero />

        {/* 4. Why ReelTo7 Section */}
        <WhyUs />

        {/* 5. Pricing Section */}
        <Pricing />

        {/* 6. Portfolio Showcase Section */}
        <Portfolio />

        {/* 7. Social Proof / Metrics & Reviews */}
        <SocialProof />

        {/* 8. Contact CTA Section */}
        <ContactCTA />
      </main>

      {/* 9. Footer Section */}
      <Footer />

      {/* 10. Sticky Bottom Mobile Nav Bar (mobile only) */}
      <MobileBottomNav />
    </div>
  );
}

export default App;
