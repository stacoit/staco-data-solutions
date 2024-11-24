'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useGSAPAnimation, useParallaxAnimation } from '../hooks/useGSAP';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'Data Analytics',
    description: 'Transform raw data into meaningful insights with our advanced analytics solutions.',
    icon: '📊',
    features: ['Real-time Analytics', 'Custom Dashboards', 'Predictive Analysis'],
  },
  {
    id: 2,
    title: 'Machine Learning',
    description: 'Leverage AI and ML to automate processes and make data-driven decisions.',
    icon: '🤖',
    features: ['Deep Learning', 'Neural Networks', 'AutoML Solutions'],
  },
  {
    id: 3,
    title: 'Cloud Solutions',
    description: 'Secure and scalable cloud infrastructure for your data needs.',
    icon: '☁️',
    features: ['Cloud Migration', 'Serverless Architecture', 'Multi-cloud Strategy'],
  },
  {
    id: 4,
    title: 'Data Security',
    description: 'Enterprise-grade security measures to protect your valuable data assets.',
    icon: '🔒',
    features: ['Encryption', 'Access Control', 'Compliance Management'],
  },
];

export default function ServicesPage() {
  const pageRef = useRef(null);
  useGSAPAnimation();
  useParallaxAnimation('.parallax-bg', 0.3);

  return (
    <div ref={pageRef} className="min-h-screen bg-background pt-24 pb-16">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="parallax-bg absolute -top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-75" />
        <div className="parallax-bg absolute top-1/4 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl opacity-75" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-6 text-reveal">
            Our Services
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto text-reveal">
            Comprehensive data solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="scroll-animate bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
            >
              {/* Service Icon */}
              <div className="text-4xl mb-4 scale-animate">{service.icon}</div>
              
              {/* Service Title */}
              <h3 className="text-2xl font-bold text-foreground mb-4 slide-right">
                {service.title}
              </h3>
              
              {/* Service Description */}
              <p className="text-foreground/70 mb-6 slide-left">
                {service.description}
              </p>
              
              {/* Features List */}
              <div className="stagger-container">
                {service.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex} 
                    className="flex items-center text-foreground/80 mb-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-primary/20 scale-animate"
            >
              Get Started with Our Services
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
