import React from 'react';
import { motion } from 'framer-motion';

const IntroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { 
      y: 40, 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.6
      }
    }
  };

  const hoverCardVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const glowVariants = {
    initial: {
      opacity: 0.3,
      scale: 0.95
    },
    hover: {
      opacity: 0.6,
      scale: 1.05,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="section relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-blood-red blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 rounded-full bg-blood-red blur-3xl"></div>
      </motion.div>
      
      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-heading mb-6"
            variants={itemVariants}
          >
            The <motion.span 
              className="text-blood-red inline-block"
              initial={{ scale: 1 }}
              whileHover={{
                scale: 1.1,
                transition: { 
                  type: "spring", 
                  stiffness: 300 
                }
              }}
            >Ultimate</motion.span> Mystery Experience
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-white/90"
            variants={itemVariants}
          >
            we curate a collection of premium items that remain a mystery until you open the box. Register now to get your first box! why you should Pre-register now? these are the reasons:
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.4
                }
              }
            }}
          >
            {[
              {
                number: '01',
                title: 'Exclusive Items',
                description: 'Each box contains products you won\'t find anywhere else, specially created for our Pre registered subscribers.'
              },
              {
                number: '02',
                title: 'Premium Quality',
                description: 'Only the finest materials and craftsmanship make it into our mystery boxes.'
              },
              {
                number: '03',
                title: 'Guaranteed Surprise',
                description: 'Every box contains items that you will love.'
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-black/30 p-8 rounded-lg relative overflow-hidden border border-gray-800 hover:border-blood-red/50 transition-colors"
                variants={itemVariants}
                whileHover="hover"
                initial="initial"
                variants={{
                  ...itemVariants,
                  ...hoverCardVariants
                }}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-blood-red rounded-lg opacity-0"
                  variants={glowVariants}
                />
                
                <span className="absolute -top-2 -left-2 text-6xl font-heading text-blood-red/20">
                  {item.number}
                </span>
                <h3 className="text-xl font-heading mb-4 relative z-10">{item.title}</h3>
                <p className="text-white/80 relative z-10">{item.description}</p>
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blood-red to-transparent"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;