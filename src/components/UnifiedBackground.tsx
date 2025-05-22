import React from 'react';
import ParticleBackground from './ParticleBackground';
import '../styles/gradient.css';
import '../styles/particles.css';

const UnifiedBackground: React.FC = () => {
  return (
    <div className="gradient-background" style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <ParticleBackground particleCount={80} />
    </div>
  );
};

export default UnifiedBackground; 