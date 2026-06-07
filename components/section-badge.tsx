import { IconName } from '@/types/icon.type';
import Motion from './motion';
import SvgIcon from './svg-icon';
import { cn } from '@/lib/utils';

type SectionBadgeProps = {
  text: string;
  icon?: IconName;
  className?: string;
};

const SectionBadge = ({
  text,
  icon = 'sparkles',
  className,
}: SectionBadgeProps) => {
  return (
    <Motion
      as="div"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 backdrop-blur-md uppercase w-fit tracking-[0.1em]',
        className
      )}
    >
      <SvgIcon name={icon} className="h-4 w-4 text-primary" />

      <span className="text-a-10 md:text-sm font-medium text-primary">
        {text}
      </span>
    </Motion>
  );
};

export default SectionBadge;
