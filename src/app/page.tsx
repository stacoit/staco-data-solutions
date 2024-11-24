'use client';

import { useRef } from 'react';
import Hero from './components/Hero';
import { useGSAPAnimation, useParallaxAnimation } from './hooks/useGSAP';
import CountUp from './components/ui/CountUp';
import Link from 'next/link';

const features = [
  {
    title: 'Advanced Analytics',
    description: 'Turn complex data into clear, actionable insights with our advanced analytics platform.',
    icon: '📈',
  },
  {
    title: 'Machine Learning',
    description: 'Harness the power of AI to automate processes and make smarter decisions.',
    icon: '🤖',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable, secure cloud infrastructure tailored to your business needs.',
    icon: '☁️',
  },
  {
    title: 'Data Security',
    description: 'Enterprise-grade security to protect your valuable data assets.',
    icon: '🔒',
  },
];

const testimonials = [
  {
    quote: "Staco Data Solutions transformed our business analytics capabilities. We're now making faster, data-driven decisions.",
    author: "Sarah Johnson",
    position: "CTO, TechCorp",
  },
  {
    quote: "The machine learning solutions provided by Staco have automated our key processes, saving us countless hours.",
    author: "Michael Chen",
    position: "Director of Innovation, FutureTech",
  },
  {
    quote: "Their cloud solutions are robust, scalable, and exactly what we needed for our growing business.",
    author: "Emily Rodriguez",
    position: "CEO, CloudScale",
  },
];

const statistics = [
  {
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
  },
  {
    value: 500,
    suffix: '+',
    label: 'Projects Completed',
  },
  {
    value: 15,
    suffix: '+',
    label: 'Years Experience',
  },
  {
    value: 50,
    prefix: '$',
    suffix: 'M+',
    label: 'Data Processed',
  },
];

export default function Home() {
  const pageRef = useRef(null);
  useGSAPAnimation();
  useParallaxAnimation('.parallax-bg', 0.3);

  return (
    <main ref={pageRef} className="min-h-screen bg-background">
      <Hero />

      {/* Statistics Section */}
      <section className="py-20 relative overflow-hidden bg-primary/5">
        <div className="parallax-bg absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="parallax-bg absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto stagger-container">
            {statistics.map((stat) => (
              <div
                key={stat.label}
                className="scroll-animate text-center bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-primary/10"
              >
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
                  <CountUp
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                <div className="text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="parallax-bg absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="parallax-bg absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-6 text-reveal">
              Why Choose Staco Data
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto text-reveal">
              Empower your business with cutting-edge data solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-container">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="scroll-animate bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4 scale-animate">{feature.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3 slide-right">{feature.title}</h3>
                <p className="text-foreground/70 slide-left">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-primary/5 relative overflow-hidden">
        <div className="parallax-bg absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="parallax-bg absolute bottom-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-reveal">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto stagger-container">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="scroll-animate bg-white/80 backdrop-blur-lg rounded-xl p-8 border border-primary/10"
              >
                <div className="text-4xl mb-6 text-primary/20 scale-animate">&ldquo;</div>
                <blockquote className="text-lg text-foreground/80 mb-6 slide-right">
                  {testimonial.quote}
                </blockquote>
                <div className="slide-left">
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-foreground/60">{testimonial.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-reveal">
              Ready to Transform Your Data?
            </h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto text-reveal">
              Let&apos;s discuss how our solutions can help your business achieve its goals.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-primary/20 scale-animate"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}