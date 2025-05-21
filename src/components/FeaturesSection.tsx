import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Star, Zap, Gift } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Gift className="w-12 h-12" />,
      title: "Handpicked Selection",
      description: "Our curators scour the globe for unique, premium items that create an unboxing experience like no other."
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Premium Quality",
      description: "Every item meets our strict quality standards, ensuring you receive only the best of the best."
    },
    {
      icon: <RotateCcw className="w-12 h-12" />,
      title: "New Theme Monthly",
      description: "Each box follows a unique theme, keeping the surprise fresh and exciting month after month."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Early Access",
      description: "Subscribers get first dibs on limited edition items and special collaborations before anyone else."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="features" className="section">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading uppercase mb-4">
            Exceptional <span className="text-blood-red">Features</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            What makes our mystery boxes stand out from the rest? 
            Here's why our subscribers keep coming back for more.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-charcoal/50 rounded-lg p-8 flex flex-col items-center md:items-start text-center md:text-left border-l-2 border-blood-red/70 glow-on-hover"
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="text-blood-red mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-heading mb-4">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#register"
            className="btn btn-primary"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(220, 20, 60, 0.7)' }}
            whileTap={{ scale: 0.95 }}
          >
            UNLOCK YOUR MYSTERY
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;