import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  size?: 'sm' | 'md' | 'lg';
  background?: 'white' | 'gray' | 'primary';
  animated?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  containerClassName,
  id,
  size = 'lg',
  background = 'white',
  animated = true,
}) => {
  const sizes = {
    sm: 'py-12 lg:py-16',
    md: 'py-16 lg:py-20',
    lg: 'py-16 lg:py-24',
  };

  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-50',
  };

  const content = (
    <section
      id={id}
      className={cn(
        sizes[size],
        backgrounds[background],
        className
      )}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

export default Section;