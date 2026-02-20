
import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import BookingForm from './components/BookingForm';
import AIChat from './components/AIChat';

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          target?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <Hero />
        
        {/* Value Prop Section */}
        <section className="py-24 bg-white text-black">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <div className="text-4xl font-display font-bold">01.</div>
              <h3 className="text-2xl font-bold">Artisan Handwash</h3>
              <p className="opacity-60 leading-relaxed">Every vehicle undergoes a multi-stage hand wash using pH-neutral chemicals to prevent marring and preserve your paint's integrity.</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-display font-bold">02.</div>
              <h3 className="text-2xl font-bold">Paint Correction</h3>
              <p className="opacity-60 leading-relaxed">Our specialists utilize high-precision machinery and compounds to eliminate swirl marks, light scratches, and oxidation.</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-display font-bold">03.</div>
              <h3 className="text-2xl font-bold">Ceramic Protection</h3>
              <p className="opacity-60 leading-relaxed">We use the most advanced ceramic coatings on the market to ensure your car stays cleaner for longer with a deep, liquid-like gloss.</p>
            </div>
          </div>
        </section>

        <OurStory />
        <Pricing />
        <Reviews />
        <BookingForm />
      </main>

      <footer className="py-12 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
                  <path d="M50 5 L95 25 L95 75 L50 95 L5 75 L5 25 Z" fill="none" stroke="currentColor" strokeWidth="6" />
                  <path d="M20 40 L50 30 L80 40 L80 60 L50 70 L20 60 Z" />
                </svg>
            </div>
            <span className="font-display font-bold text-lg tracking-tight uppercase">Auto <span className="text-blue-500">Glossy</span></span>
          </div>
          
          <div className="flex gap-8 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">TikTok</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
          </div>
          
          <div className="text-sm text-white/20">
            &copy; {new Date().getFullYear()} Auto Glossy Detailing Co. All rights reserved.
          </div>
        </div>
      </footer>

      <AIChat />
    </div>
  );
}

export default App;
