'use client';

import { motion } from 'framer-motion';
import { ElementType } from 'react';

type MotionProps<T extends keyof HTMLElementTagNameMap> = {
  as?: T;
} & React.ComponentPropsWithoutRef<T> &
  React.ComponentProps<typeof motion.div>;

function Motion<T extends keyof HTMLElementTagNameMap = 'div'>({
  as,
  children,
  ...props
}: MotionProps<T>) {
  const Component = motion.create((as || 'div') as ElementType);

  return <Component {...props}>{children}</Component>;
}

export default Motion;
