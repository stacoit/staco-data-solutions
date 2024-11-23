'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useGSAPAnimation, useParallaxAnimation } from '../hooks/useGSAP';
import CountUp from '../components/ui/CountUp';

const stats = [
  { 
    value: 10,
    suffix: '+',
    label: 'Years Experience'
  },
  { 
    value: 200,
    suffix: '+',
    label: 'Projects Completed'
  },
  { 
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction'
  },
  { 
    value: 24,
    suffix: '/7',
    label: 'Support Available'
  },
];

const values = [
  {
    title: 'Innovation',
    description: 'Constantly pushing boundaries to deliver cutting-edge data solutions.',
    icon: '💡',
  },
  {
    title: 'Excellence',
    description: 'Committed to delivering the highest quality in every project.',
    icon: '⭐',
  },
  {
    title: 'Integrity',
    description: 'Building trust through transparency and ethical practices.',
    icon: '🤝',
  },
  {
    title: 'Collaboration',
    description: 'Working closely with clients to achieve their goals.',
    icon: '🤲',
  },
];

export default function AboutPage() {
  const pageRef = useRef(null);
  useGSAPAnimation();
  useParallaxAnimation('.parallax-bg', 0.3);

  return (
    <div ref={pageRef} className="min-h-screen bg-background pt-24 pb-16">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="parallax-bg absolute -top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="parallax-bg absolute top-1/4 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-6 text-reveal">
            About Staco Data
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto text-reveal">
            Pioneering the future of data analytics and machine learning solutions
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 stagger-container">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center scroll-animate bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-primary/10"
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2.5}
                />
              </div>
              <div className="text-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto mb-20 scroll-animate">
          <h2 className="text-3xl font-bold text-center mb-6 text-reveal">Our Mission</h2>
          <p className="text-lg text-foreground/80 text-center slide-right">
            To empower businesses with innovative data solutions that drive growth,
            efficiency, and competitive advantage in the digital age.
          </p>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-reveal">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-container">
            {values.map((value) => (
              <div
                key={value.title}
                className="scroll-animate bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4 scale-animate">{value.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3 slide-right">
                  {value.title}
                </h3>
                <p className="text-foreground/70 slide-left">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center scroll-animate">
          <h2 className="text-3xl font-bold mb-6 text-reveal">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-foreground/80 mb-8 text-reveal">
            Let&apos;s discuss how we can help transform your business with data-driven solutions.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-primary/20 scale-animate"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
