import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const RegisterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
      setName('');
    }, 1500);
  };

  return (
    <section id="register" className="section relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-b from-blood-red/10 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-t from-blood-red/10 to-transparent opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading uppercase mb-4">
              Secure Your <span className="text-blood-red">Pre-Order</span>
            </h2>
            <p className="text-white/80 max-w-xl mx-auto">
              Be among the first to experience our premium mystery boxes. 
              Register now to get exclusive early access and special launch pricing.
            </p>
          </div>
          
          <div className="bg-void-black rounded-lg p-8 md:p-12 border border-white/10 shadow-lg shadow-blood-red/10">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-heading uppercase tracking-wider text-white/80 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-charcoal/50 border border-white/10 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blood-red"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div className="mb-8">
                  <label htmlFor="email" className="block text-sm font-heading uppercase tracking-wider text-white/80 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-charcoal/50 border border-white/10 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blood-red"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full btn btn-primary relative overflow-hidden group"
                  disabled={isLoading}
                >
                  <span className={`transition-all duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                    SECURE YOUR SPOT
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center">
                    {isLoading && (
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    )}
                  </span>
                  <span className="absolute right-4 transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>
                
                <p className="text-white/60 text-sm text-center mt-4">
                  By registering, you agree to our Terms & Conditions and Privacy Policy.
                </p>
              </form>
            ) : (
              <motion.div 
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-blood-red rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-heading mb-4">Registration Successful!</h3>
                <p className="text-white/80 mb-6">
                  Thank you for your interest in our premium mystery boxes. 
                  We'll notify you when pre-orders open.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn btn-primary"
                >
                  REGISTER ANOTHER
                </button>
              </motion.div>
            )}
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              {
                number: "300+",
                text: "Premium Items Curated"
              },
              {
                number: "10,000+",
                text: "Boxes Delivered"
              },
              {
                number: "98%",
                text: "Satisfaction Rate"
              }
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <p className="text-3xl md:text-4xl font-heading text-blood-red">{stat.number}</p>
                <p className="text-white/70">{stat.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterSection;