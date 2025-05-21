import React, { useEffect, useRef, useState } from 'react';
import '../styles/particles.css';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  depth: number;
  rotation: number;
  type: string;
  opacity: number;
  baseY: number;
}

const ParticleBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const particles = useRef<Particle[]>([]);
  const lastScrollY = useRef(0);
  const mousePosition = useRef({ x: 0, y: 0 });

  const createParticle = (canvas: HTMLCanvasElement): Particle => {
    const types = ['square', 'circle', 'triangle', 'cross'];
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      baseY: Math.random() * canvas.height,
      size: Math.random() * 15 + 5,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      depth: Math.random() * 3 + 1,
      rotation: Math.random() * 360,
      type: types[Math.floor(Math.random() * types.length)],
      opacity: Math.random() * 0.2 + 0.2
    };
  };

  const drawParticle = (ctx: CanvasRenderingContext2D, particle: Particle) => {
    ctx.save();
    ctx.globalAlpha = particle.opacity;
    ctx.translate(particle.x, particle.y);
    ctx.rotate((particle.rotation * Math.PI) / 180);
    
    // Enhanced glow effect with white
    ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
    ctx.shadowBlur = 20;
    
    // Gradient with white glow
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size);
    gradient.addColorStop(0, `rgba(255, 255, 255, ${particle.opacity})`);
    gradient.addColorStop(0.4, `rgba(220, 20, 60, ${particle.opacity})`);
    gradient.addColorStop(1, `rgba(0, 0, 0, ${particle.opacity * 0.8})`);
    
    ctx.fillStyle = gradient;

    switch (particle.type) {
      case 'square':
        ctx.fillRect(-particle.size/2, -particle.size/2, particle.size, particle.size);
        break;
      case 'circle':
        ctx.beginPath();
        ctx.arc(0, 0, particle.size/2, 0, Math.PI * 2);
        ctx.fill();
        break;
      case 'triangle':
        ctx.beginPath();
        ctx.moveTo(-particle.size/2, particle.size/2);
        ctx.lineTo(particle.size/2, particle.size/2);
        ctx.lineTo(0, -particle.size/2);
        ctx.closePath();
        ctx.fill();
        break;
      case 'cross':
        ctx.fillRect(-particle.size/4, -particle.size/2, particle.size/2, particle.size);
        ctx.fillRect(-particle.size/2, -particle.size/4, particle.size, particle.size/2);
        break;
    }
    
    ctx.restore();
  };

  const updateParticles = (canvas: HTMLCanvasElement, scrollDelta: number) => {
    const scrollSpeed = scrollDelta * 0.2;
    
    particles.current.forEach(particle => {
      // Horizontal movement affected by mouse
      particle.x += particle.speedX * particle.depth + (mousePosition.current.x - canvas.width/2) * 0.0001 * particle.depth;
      
      // Vertical movement affected by scroll
      particle.y = particle.baseY - (window.scrollY * particle.depth * 0.5);
      particle.rotation += scrollSpeed * particle.depth * 0.1;
      
      // Adjust opacity based on scroll speed
      const speedFactor = Math.abs(scrollSpeed) * 0.01;
      particle.opacity = Math.min(0.6, Math.max(0.2, 0.3 + speedFactor));
      
      // Wrap around screen edges
      if (particle.x < -particle.size) particle.x = canvas.width + particle.size;
      if (particle.x > canvas.width + particle.size) particle.x = -particle.size;
      
      // Reset baseY when particles go off screen
      if (particle.y < -particle.size * 2) {
        particle.baseY = canvas.height + particle.size;
        particle.y = particle.baseY - (window.scrollY * particle.depth * 0.5);
      }
      if (particle.y > canvas.height + particle.size * 2) {
        particle.baseY = -particle.size;
        particle.y = particle.baseY - (window.scrollY * particle.depth * 0.5);
      }
    });
  };

  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    
    if (!canvas || !ctx) return;
    
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - lastScrollY.current;
    lastScrollY.current = currentScrollY;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateParticles(canvas, scrollDelta);
    particles.current.forEach(particle => drawParticle(ctx, particle));
    
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateDimensions = () => {
      const { innerWidth, innerHeight } = window;
      setDimensions({ width: innerWidth, height: innerHeight });
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    updateDimensions();
    particles.current = Array(50).fill(null).map(() => createParticle(canvas));
    
    window.addEventListener('resize', updateDimensions);
    window.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="particle-container">
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="particle-canvas"
      />
      <div className="particle-content">
        {children}
      </div>
    </div>
  );
};

export default ParticleBackground;