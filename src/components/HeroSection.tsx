import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Box3DScene from './3d/Box3DScene';

const clickSound = new Audio('/button-click-289742.mp3');

const HeroSection: React.FC = () => {
  const handleButtonClick = () => {
    clickSound.currentTime = 0;
    clickSound.play();
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="container-custom relative z-20 flex flex-col items-center mt-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col gap-2 items-center">
            <h1 className="font-heading text-white text-5xl md:text-7xl uppercase tracking-tight leading-none mb-4 contrast-outline">
              Unbox the unknown
            </h1>
          </div>
          <h2 className="font-body text-blood-red text-xl md:text-3xl uppercase tracking-wider mb-8 contrast-outline">
            Premium Mystery Delivered
          </h2>
        </motion.div>
        <div className="relative h-72 w-full flex items-center justify-center">
          <Box3DScene />
        </div>
        <motion.a
          href="#register"
          className="btn btn-primary text-lg mt-4 floating contrast-outline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(220, 20, 60, 0.7)' }}
          whileTap={{ scale: 0.95 }}
          onClick={handleButtonClick}
        >
          CLAIM YOUR BOX
        </motion.a>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <ChevronDown className="w-8 h-8 text-blood-red" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;