import { InputHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import InputFooterText from '../input-footer-text';
import Show from '../show';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  footerText?: string;
  optional?: boolean;
}

const Input = ({
  label,
  name,
  error,
  footerText,
  required = true,
  className,
  ...props
}: InputProps) => {
  return (
    <div>
      <div className="relative">
        <input
          {...props}
          id={name}
          name={name}
          placeholder=" "
          className={cn('peer app-input', error && 'border-red-500', className)}
        />

        <label
          htmlFor={name}
          className={cn('floating-label', error && 'text-red-500')}
        >
          {label}
          <Show when={!!required}>
            <span className="text-red-500 text-a-10">*</span>
          </Show>
        </label>
      </div>

      <Show when={!!error || !!footerText}>
        <InputFooterText
          text={(error || footerText) as string}
          isError={!!error}
        />
      </Show>
    </div>
  );
};

export default Input;
