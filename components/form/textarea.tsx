import { TextareaHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import InputFooterText from '../input-footer-text';
import Show from '../show';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  footerText?: string;
}

const Textarea = ({
  label,
  name,
  error,
  footerText,
  required = true,
  className,
  ...props
}: TextareaProps) => {
  return (
    <div>
      <div className="relative">
        <textarea
          {...props}
          id={name}
          name={name}
          placeholder=" "
          className={cn(
            'peer app-input min-h-40 resize-none pt-7',
            error && 'border-red-500',
            className
          )}
        />

        <label
          htmlFor={name}
          className={cn('floating-label-textarea', error && 'text-red-500')}
        >
          {label}

          <Show when={!!required}>
            <span className="text-a-10 text-red-500">*</span>
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

export default Textarea;
