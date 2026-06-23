'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import SvgIcon from './svg-icon';

const FloatingNotice = () => {
  const [visible, setVisible] = useState(true);

  const dismiss = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className={cn('fixed bottom-6 right-6 z-50 animate-slide-in-from-bottom')}
    >
      <div
        className={cn(
          'relative flex items-start gap-3 max-w-md rounded-2xl border border-primary/30 bg-background/80 backdrop-blur-md shadow-a-base p-4 animate-[content-bounce_500ms_ease-out]'
        )}
      >
        <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/30 animate-pulse pointer-events-none" />

        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-linear-to-r from-transparent via-primary/10 to-transparent pointer-events-none" />

        <div className="relative mt-1 h-8 w-8 aspect-square grid place-items-center rounded-full bg-primary/15 text-primary animate-pulse">
          <SvgIcon name="info" className="h-4 w-4" />
        </div>

        <div className="relative flex-1">
          <div className="flex items-center gap-2 mb-2">
            <p className="text-sm font-semibold text-foreground">
              Portfolio Status
            </p>

            <span className="text-a-10 font-bold px-2 py-0.5 rounded-full bg-primary text-white animate-pulse">
              WIP / BETA
            </span>
          </div>

          <p className="text-xs text-foreground/70 leading-snug mt-1">
            This frontend portfolio is actively under development. New features,
            UI improvements, and sections are being shipped continuously.
          </p>
        </div>

        <button
          onClick={dismiss}
          className="ml-2 rounded-full p-1 hover:bg-primary/10 transition group absolute -top-3 right-1"
          aria-label="Dismiss notice"
        >
          <SvgIcon
            name="close"
            className="h-6 w-6 text-primary dark:text-white group-hover:rotate-90 transition"
          />
        </button>
      </div>
    </div>
  );
};

export default FloatingNotice;
