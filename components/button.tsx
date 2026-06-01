import Show from './show';
import SvgIcon from './svg-icon';

import { cn } from '@/lib/utils';
import { IconName } from '@/types/icon.type';

export type Variant = 'primary' | 'primary-db' | 'black';

export type Size = 'default' | 'sm' | 'md' | 'lg' | 'icon';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  withIcon?: boolean;
  icon?: IconName;
};

export const variantStyles: Record<Variant, string> = {
  primary: 'bg-primary text-white border-white/50 hover:bg-primary/60',
  'primary-db':
    'bg-primary text-white border-black text-black hover:bg-primary/60',
  black: 'bg-black text-white border-white hover:bg-black/80',
};

export const sizeStyles: Record<Size, string> = {
  default: 'py-3 px-5 h-12 min-w-30',
  sm: 'h-8 px-3 text-sm',
  md: ' px-4 text-sm',
  lg: 'h-12 px-6 text-base',
  icon: 'h-10 w-10 p-0',
};

export const commonStyles = cn(
  'flex items-center justify-center rounded-full border-2 transition-colors text-nowrap'
);

export const Button = ({
  variant = 'primary',
  size = 'default',
  className,
  loading = false,
  disabled,
  withIcon = false,
  icon = 'arrow-right-up',
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        commonStyles,
        variantStyles[variant],
        sizeStyles[size],
        withIcon && 'flex items-center gap-3 p-1 pl-5 ',
        className
      )}
      disabled={loading || disabled}
    >
      <Show when={loading}>
        <SvgIcon name="loading" className=" animate-spin w-6 h-6" />
      </Show>

      <Show when={!loading && !withIcon}>{children}</Show>
      <Show when={withIcon && !loading}>
        <div className="flex-1">{children}</div>
        <div className="rounded-full bg-white text-primary h-full aspect-square grid place-content-center self-end">
          <SvgIcon name={icon} className="w-5 h-5" />
        </div>
      </Show>
    </button>
  );
};
