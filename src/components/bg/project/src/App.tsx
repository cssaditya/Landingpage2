import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import ContentOverlay from './components/ContentOverlay';
import { GithubIcon } from 'lucide-react';

function App() {
  return (
    <ParticleBackground>
      <header className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 py-8">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <GithubIcon className="text-white h-6 w-6" />
          </div>
          <span className="ml-3 text-white font-semibold text-xl">Gradient</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-white/80 hover:text-white transition-colors">Home</a></li>
            <li><a href="#" className="text-white/80 hover:text-white transition-colors">Features</a></li>
            <li><a href="#" className="text-white/80 hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <main className="flex items-center justify-center min-h-screen">
        <ContentOverlay 
          title="Elegant Gradient Design"
          subtitle="A sleek, gradient background blending deep black and rich red tones, creating a sophisticated atmosphere while maintaining perfect readability."
        />
      </main>
      
      <footer className="absolute bottom-0 left-0 right-0 text-center py-6 text-white/60 text-sm">
        <p>© 2025 Gradient Design. All rights reserved.</p>
      </footer>
    </ParticleBackground>
  );
}

export default App;