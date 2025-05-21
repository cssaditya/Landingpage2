import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Package } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <Package className="w-8 h-8 text-blood-red mr-2" />
          <span className="font-heading text-xl tracking-wider">MYSTERY BOX</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Features', 'Pricing', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-heading text-sm tracking-wider uppercase text-white/80 hover:text-blood-red transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <a
            href="#register"
            className="btn btn-primary py-2 px-5 text-sm"
          >
            CLAIM NOW
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-void-black z-50 flex flex-col"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="container-custom py-6 flex justify-between items-center">
              <div className="flex items-center">
                <Package className="w-8 h-8 text-blood-red mr-2" />
                <span className="font-heading text-xl tracking-wider">MYSTERY BOX</span>
              </div>
              <button
                type="button"
                className="text-white focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center space-y-8">
              {['Home', 'Features', 'Pricing', 'FAQ'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-heading text-2xl tracking-wider uppercase text-white/90 hover:text-blood-red transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#register"
                className="btn btn-primary mt-8"
                onClick={() => setIsMenuOpen(false)}
              >
                CLAIM NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;