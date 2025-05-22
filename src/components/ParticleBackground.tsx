import React, { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  particleCount?: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ particleCount = 50 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Remove any existing particles
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    // Create new particles (red and white)
    for (let i = 0; i < particleCount; i++) {
      // Red particle
      const redParticle = document.createElement('div');
      redParticle.classList.add('particle');
      const size = Math.random() * 4 + 2;
      redParticle.style.width = `${size}px`;
      redParticle.style.height = `${size}px`;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      redParticle.style.left = `${x}%`;
      redParticle.style.top = `${y}%`;
      const delay = Math.random() * 5;
      redParticle.style.animationDelay = `${delay}s`;
      const duration = Math.random() * 10 + 10;
      redParticle.style.animationDuration = `${duration}s`;
      const opacity = Math.random() * 0.1 + 0.05;
      redParticle.style.backgroundColor = `rgba(255, 0, 0, ${opacity})`;
      container.appendChild(redParticle);

      // White particle
      const whiteParticle = document.createElement('div');
      whiteParticle.classList.add('particle');
      const sizeW = Math.random() * 3 + 1.5;
      whiteParticle.style.width = `${sizeW}px`;
      whiteParticle.style.height = `${sizeW}px`;
      const xW = Math.random() * 100;
      const yW = Math.random() * 100;
      whiteParticle.style.left = `${xW}%`;
      whiteParticle.style.top = `${yW}%`;
      const delayW = Math.random() * 5;
      whiteParticle.style.animationDelay = `${delayW}s`;
      const durationW = Math.random() * 10 + 10;
      whiteParticle.style.animationDuration = `${durationW}s`;
      const opacityW = Math.random() * 0.12 + 0.08;
      whiteParticle.style.backgroundColor = `rgba(255, 255, 255, ${opacityW})`;
      container.appendChild(whiteParticle);
    }

    return () => {
      // Cleanup particles on component unmount
      if (container) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      }
    };
  }, [particleCount]);

  return (
    <div ref={containerRef} className="particles-container" aria-hidden="true" />
  );
};

export default ParticleBackground;