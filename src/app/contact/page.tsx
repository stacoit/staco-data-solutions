'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useGSAPAnimation, useParallaxAnimation } from '../hooks/useGSAP';

const contactInfo = [
  {
    title: 'Email',
    value: 'contact@stacodata.com',
    icon: '✉️',
  },
  {
    title: 'Phone',
    value: '+1 (555) 123-4567',
    icon: '📞',
  },
  {
    title: 'Address',
    value: '2712 County Line Road, St Petersburg, Florida USA 33701',
    icon: '📍',
  },
];

const officeHours = [
  {
    day: 'Monday - Friday',
    hours: '9:00 AM - 6:00 PM PST',
  },
  {
    day: 'Saturday',
    hours: '10:00 AM - 2:00 PM PST',
  },
  {
    day: 'Sunday',
    hours: 'Closed',
  },
];

export default function ContactPage() {
  const pageRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  useGSAPAnimation();
  useParallaxAnimation('.parallax-bg', 0.3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-background pt-24 pb-16">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="parallax-bg absolute -top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="parallax-bg absolute top-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-6 text-reveal">
            Get in Touch
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto text-reveal">
            Have a question or ready to start your data journey? We&apos;re here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="scroll-animate bg-white/80 backdrop-blur-lg rounded-xl p-8 border border-primary/10">
            <h2 className="text-2xl font-bold mb-6 text-reveal">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="slide-right">
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white/50"
                  required
                />
              </div>

              <div className="slide-left">
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white/50"
                  required
                />
              </div>

              <div className="slide-right">
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white/50"
                />
              </div>

              <div className="slide-left">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white/50"
                  required
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="scale-animate"
              >
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-white rounded-lg font-semibold transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-primary/20"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="scroll-animate bg-white/80 backdrop-blur-lg rounded-xl p-8 border border-primary/10">
              <h2 className="text-2xl font-bold mb-6 text-reveal">Contact Information</h2>
              <div className="space-y-6 stagger-container">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-center space-x-4 scroll-animate">
                    <div className="text-2xl scale-animate">{info.icon}</div>
                    <div>
                      <div className="font-medium text-foreground slide-right">{info.title}</div>
                      <div className="text-foreground/70 slide-left">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="scroll-animate bg-white/80 backdrop-blur-lg rounded-xl p-8 border border-primary/10">
              <h2 className="text-2xl font-bold mb-6 text-reveal">Office Hours</h2>
              <div className="space-y-4 stagger-container">
                {officeHours.map((schedule) => (
                  <div key={schedule.day} className="scroll-animate">
                    <div className="font-medium text-foreground slide-right">{schedule.day}</div>
                    <div className="text-foreground/70 slide-left">{schedule.hours}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
