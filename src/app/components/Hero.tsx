'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useGSAPAnimation } from '../hooks/useGSAP';
import CountUp from './ui/CountUp';

const heroStats = [
  { 
    value: 98,
    suffix: '%',
    label: 'Accuracy Rate'
  },
  { 
    value: 24,
    suffix: '/7',
    label: 'Support'
  },
  { 
    value: 150,
    suffix: '+',
    label: 'Clients'
  },
  { 
    value: 10,
    suffix: 'x',
    label: 'ROI Boost'
  },
];

const Hero = () => {
  const heroRef = useRef(null);
  useGSAPAnimation();

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="hero-gradient absolute inset-0 bg-gradient-to-r from-background via-primary/5 to-background bg-[length:400%_400%]" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="floating-element absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="overflow-hidden">
            <h1 className="hero-title-line text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-2">
              Transform Your Data
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="hero-title-line text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-6">
              Into Insights
            </h1>
          </div>
          <div className="overflow-hidden">
            <p className="hero-title-line text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Unlock the power of your data with cutting-edge analytics and machine learning solutions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-primary/20"
              >
                Get Started
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/services"
                className="inline-block px-8 py-4 border-2 border-primary/20 text-foreground rounded-lg font-semibold transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10"
              >
                Learn More
              </Link>
            </motion.div>
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {heroStats.map((stat) => (
              <div 
                key={stat.label} 
                className="stagger-item bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-primary/10"
              >
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                <div className="text-sm text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
