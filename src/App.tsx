import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import RegisterSection from './components/RegisterSection';
import Footer from './components/Footer';
import UnifiedBackground from './components/UnifiedBackground';

function App() {
  // Helper function to create particles globally once for performance
  useEffect(() => {
    // Set the document title
    document.title = "PREMIUM MYSTERY BOX | Unlock The Unknown";
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const target = document.querySelector(href);
        if (!target) return;
        
        window.scrollTo({
          top: (target as HTMLElement).offsetTop,
          behavior: 'smooth'
        });
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="App relative min-h-screen">
      <UnifiedBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <IntroSection />
          <FeaturesSection />
          <PricingSection />
          <RegisterSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;