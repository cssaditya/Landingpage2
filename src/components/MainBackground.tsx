import React, { useEffect } from 'react';

const MainBackground: React.FC = () => {
  useEffect(() => {
    // Dynamically load the script if not already loaded
    if (!(window as any).FinisherHeader) {
      const script = document.createElement('script');
      script.src = '/finisher-header.es5.min.js';
      script.async = true;
      script.onload = () => {
        if ((window as any).FinisherHeader) {
          new (window as any).FinisherHeader({
            count: 10,
            size: { min: 1920, max: 1080, pulse: 0 },
            speed: { x: { min: 0.1, max: 0.8 }, y: { min: 0.1, max: 0.6 } },
            colors: {
              background: '#700018',
              particles: [
                '#ff4848', '#000000', '#000000',
                '#ffffff', '#ffffff', '#000000', '#000000'
              ]
            },
            blending: 'overlay',
            opacity: { center: 1, edge: 0 },
            skew: 0,
            shapes: ['c']
          });
        }
      };
      document.body.appendChild(script);
    } else {
      new (window as any).FinisherHeader({
        count: 10,
        size: { min: 1920, max: 1080, pulse: 0 },
        speed: { x: { min: 0.1, max: 0.8 }, y: { min: 0.1, max: 0.6 } },
        colors: {
          background: '#700018',
          particles: [
            '#ff4848', '#000000', '#000000',
            '#ffffff', '#ffffff', '#000000', '#000000'
          ]
        },
        blending: 'overlay',
        opacity: { center: 1, edge: 0 },
        skew: 0,
        shapes: ['c']
      });
    }
  }, []);

  return (
    <div 
      className="finisher-header"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
};

export default MainBackground; 