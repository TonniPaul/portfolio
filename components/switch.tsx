'use client';

import { ComponentProps } from 'react';
import { Root, Thumb } from '@radix-ui/react-switch';

import { cn } from '@/lib/utils';
import SvgIcon from './svg-icon';

function Switch({ className, ...props }: ComponentProps<typeof Root>) {
  return (
    <div className="rounded-full grid place-items-center w-max border border-app-border p-1 h-max">
      <Root
        data-slot="switch"
        className={cn(
          'peer  focus-visible:border-ring focus-visible:ring-ring/50  inline-flex h-4 w-10 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer',
          className
        )}
        {...props}
      >
        <Thumb
          data-slot="switch-thumb"
          className={cn(
            'bg-white dark:data-[state=checked]:bg-primary pointer-events-none size-5 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-0px)] data-[state=unchecked]:translate-x-0 grid place-items-center group border border-app-border'
          )}
        >
          <SvgIcon
            name="sun"
            className="h-3 w-3 group-data-[state=checked]:hidden text-primary"
          />
          <SvgIcon
            name="moon"
            className="h-3 w-3 group-data-[state=unchecked]:hidden text"
          />{' '}
        </Thumb>
      </Root>
    </div>
  );
}

export { Switch };
