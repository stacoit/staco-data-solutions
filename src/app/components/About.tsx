'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  UserGroupIcon,
  RocketLaunchIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Expert Team',
    description:
      'Our team of data scientists and engineers brings years of experience in handling complex data challenges.',
    icon: UserGroupIcon,
  },
  {
    name: 'Innovation First',
    description:
      'We stay at the forefront of technology, implementing cutting-edge solutions for our clients.',
    icon: LightBulbIcon,
  },
  {
    name: 'Rapid Deployment',
    description:
      'Quick implementation and deployment of solutions to help you stay ahead of the competition.',
    icon: RocketLaunchIcon,
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Staco Data Solutions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We are passionate about helping businesses harness the power of their
              data. Our mission is to transform complex data challenges into
              strategic advantages for our clients.
            </p>

            <dl className="mt-10 space-y-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-semibold leading-8 text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-[3/2] overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src="/about-image.jpg"
                alt="Team working on data solutions"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="text-3xl font-semibold text-gray-900">95%</p>
                  <p className="mt-2 text-base text-gray-600">
                    Client satisfaction rate
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="text-3xl font-semibold text-gray-900">500+</p>
                  <p className="mt-2 text-base text-gray-600">
                    Projects delivered
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
