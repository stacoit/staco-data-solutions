'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
  hover?: boolean;
  delay?: number;
}

export const Card = ({
  children,
  className,
  animate = true,
  hover = true,
  delay = 0,
}: CardProps) => {
  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 20 } : undefined}
      whileInView={animate ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5 } : undefined}
      className={twMerge(
        'bg-white rounded-xl shadow-sm ring-1 ring-gray-900/5 p-6',
        'transition-shadow duration-200',
        hover && 'hover:shadow-lg',
        className
      )}
    >
      {children}
    </motion.div>
  );
};
