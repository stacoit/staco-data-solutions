'use client';

import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const Container = ({
  children,
  className,
  as: Component = 'div',
}: ContainerProps) => {
  return (
    <Component
      className={twMerge(
        'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </Component>
  );
};
