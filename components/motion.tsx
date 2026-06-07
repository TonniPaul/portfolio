'use client';

import { motion } from 'framer-motion';
import { ElementType } from 'react';

type MotionProps<T extends keyof HTMLElementTagNameMap> = {
  as?: T;
  delay?: number;
} & React.ComponentPropsWithoutRef<T> &
  React.ComponentProps<typeof motion.div>;

function Motion<T extends keyof HTMLElementTagNameMap = 'div'>({
  as,
  children,
  delay = 0,
  initial = { opacity: 0, y: 40 },
  whileInView = { opacity: 1, y: 0 },
  viewport = { once: true, amount: 0.4 },
  transition,
  ...props
}: MotionProps<T>) {
  const Component = motion.create((as || 'div') as ElementType);

  return (
    <Component
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={{
        duration: 1,
        ease: 'easeOut',
        delay,
        ...transition,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Motion;
