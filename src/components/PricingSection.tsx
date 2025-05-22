import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const plans = [
    {
      name: "Standard",
      monthly: 49.99,
      annual: 479.90, // ~20% discount
      featured: false,
      description: "Perfect for those new to mystery boxes",
      features: [
        "Monthly themed box",
        "4-6 premium items",
        "Digital unboxing guide",
        "Community access",
        "Free standard shipping",
      ],
      limitations: [
        "No early access",
        "No exclusive items",
      ]
    },
    {
      name: "Premium",
      monthly: 79.99,
      annual: 767.90, // ~20% discount
      featured: true,
      description: "Our most popular mystery experience",
      features: [
        "Monthly themed box",
        "6-8 premium items",
        "Limited edition items",
        "Digital unboxing guide",
        "Early access window",
        "Community access",
        "Free express shipping",
        "Monthly surprise bonus",
      ],
      limitations: []
    },
    {
      name: "Collector",
      monthly: 129.99,
      annual: 1247.90, // ~20% discount
      featured: false,
      description: "For the serious collector and enthusiast",
      features: [
        "Monthly themed box",
        "8-10 premium items",
        "Exclusive collector items",
        "Signed limited editions",
        "Priority early access",
        "VIP community access",
        "Free priority shipping",
        "Quarterly special edition",
        "Personalization options",
      ],
      limitations: []
    },
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
    <section id="pricing" className="section">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading uppercase mb-4">
            Choose Your <span className="text-blood-red contrast-outline">Mystery</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Select the perfect mystery box subscription that fits your desires and budget.
          </p>
          
          {/* Toggle switch */}
          <div className="mt-8 flex items-center justify-center">
            <span className={`mr-3 ${!isAnnual ? 'text-white' : 'text-white/60'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-charcoal"
              aria-pressed={isAnnual}
            >
              <span className="sr-only">Toggle annual billing</span>
              <span
                className={`${
                  isAnnual ? 'translate-x-6 bg-blood-red' : 'translate-x-1 bg-white'
                } inline-block h-4 w-4 transform rounded-full transition-transform duration-300`}
              />
            </button>
            <span className={`ml-3 ${isAnnual ? 'text-white' : 'text-white/60'}`}>
              Annual <span className="text-blood-red ml-1 contrast-outline">(Save 20%)</span>
            </span>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`rounded-lg overflow-hidden h-full flex flex-col ${
                plan.featured 
                  ? 'border-2 border-blood-red relative transform md:-translate-y-4' 
                  : 'border border-charcoal/50'
              }`}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              {plan.featured && (
                <div className="bg-blood-red text-white text-center py-2 font-heading text-sm uppercase tracking-wider contrast-outline">
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 bg-${plan.featured ? 'charcoal' : 'void-black'} flex flex-col flex-grow`}>
                <h3 className="text-2xl font-heading mb-2">{plan.name}</h3>
                <p className="text-white/70 text-sm mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-heading">
                    ${isAnnual ? (plan.annual / 12).toFixed(2) : plan.monthly}
                  </span>
                  <span className="text-white/70 ml-2">/month</span>
                  {isAnnual && (
                    <div className="text-sm text-blood-red mt-2 contrast-outline">
                      Billed annually (${plan.annual})
                    </div>
                  )}
                </div>
                <div className="flex-grow" />
                <a
                  href="#register"
                  className={`block text-center py-3 px-6 rounded-md transition-all duration-300 font-heading text-sm uppercase tracking-wider mt-4 ${
                    plan.featured
                      ? 'bg-blood-red text-white hover:bg-ruby'
                      : 'bg-charcoal/50 text-white hover:bg-charcoal'
                  }`}
                >
                  Get Started
                </a>
              </div>
              
              <div className="p-8 bg-black/20">
                <p className="font-heading text-sm uppercase tracking-wider mb-4">What's included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-blood-red mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                  
                  {plan.limitations.map((limitation, idx) => (
                    <li key={`limit-${idx}`} className="flex items-start">
                      <X className="w-5 h-5 text-white/50 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-white/50 text-sm">{limitation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="mt-16 max-w-3xl mx-auto bg-charcoal/30 p-8 rounded-lg border border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-heading mb-4 text-center">100% Satisfaction Guarantee</h3>
          <p className="text-white/80 text-center">
            Not completely satisfied with your mystery box? We offer hassle-free returns 
            within 14 days of delivery. No questions asked.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;