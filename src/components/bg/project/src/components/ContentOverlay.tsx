import React from 'react';

interface ContentOverlayProps {
  title: string;
  subtitle: string;
}

const ContentOverlay: React.FC<ContentOverlayProps> = ({ title, subtitle }) => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-16 sm:py-24 md:py-32 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
        {title}
      </h1>
      <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
        {subtitle}
      </p>
      <div className="mt-12">
        <button className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-8 rounded-full 
          backdrop-blur-sm transition-all duration-300 border border-white/20 mr-4">
          Explore
        </button>
        <button className="bg-white text-[#800020] hover:bg-white/90 font-medium py-3 px-8 rounded-full 
          transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ContentOverlay;