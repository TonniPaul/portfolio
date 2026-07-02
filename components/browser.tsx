import { ReactNode } from 'react';
import Motion from './motion';

type Props = {
  children: ReactNode;
};

const Browser = ({ children }: Props) => {
  return (
    <Motion
      initial={{
        opacity: 0,
        scale: 0.8,
        rotate: -10,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 0,
      }}
      transition={{
        duration: 1,
        ease: 'easeOut',
      }}
      className="overflow-hidden rounded-2xl border border-primary/20 bg-primary-900 shadow-a-base h-fit"
    >
      <div className="flex items-center gap-2 border-b border-primary/20 p-4">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      {children}
    </Motion>
  );
};

export default Browser;
