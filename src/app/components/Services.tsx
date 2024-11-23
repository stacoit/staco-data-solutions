'use client';

import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  CloudArrowUpIcon,
  CogIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Data Analytics',
    description:
      'Transform raw data into meaningful insights with our advanced analytics solutions.',
    icon: ChartBarIcon,
  },
  {
    name: 'Cloud Solutions',
    description:
      'Secure and scalable cloud infrastructure for your data needs.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Machine Learning',
    description:
      'Leverage AI and ML to automate processes and make data-driven decisions.',
    icon: CogIcon,
  },
  {
    name: 'Data Security',
    description:
      'Enterprise-grade security measures to protect your valuable data assets.',
    icon: ShieldCheckIcon,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg leading-8 text-gray-600"
          >
            Comprehensive data solutions tailored to your business needs
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/10 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white">
                  <service.icon className="h-8 w-8" aria-hidden="true" />
                </div>
              </div>
              <div className="pt-4">
                <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {service.name}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
