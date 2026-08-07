import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  stagger?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  id,
  children,
  className,
  fullWidth = false,
  stagger = true,
  direction = 'up',
  delay = 0,
  ...props
}) => {
  return (
    <section
      id={id}
      className={cn('py-16 md:py-24 relative overflow-hidden', className)}
      {...props}
    >
      <motion.div
        variants={stagger ? staggerContainer(0.12, delay) : fadeIn(direction, delay)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className={cn(
          'mx-auto px-4 sm:px-6 lg:px-8',
          fullWidth ? 'w-full' : 'max-w-7xl'
        )}
      >
        {children}
      </motion.div>
    </section>
  );
};
