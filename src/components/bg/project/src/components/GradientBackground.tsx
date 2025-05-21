import React, { ReactNode } from 'react';
import '../styles/gradient.css';

interface GradientBackgroundProps {
  children: ReactNode;
  className?: string;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`gradient-background ${className}`}>
      {children}
    </div>
  );
};

export default GradientBackground;