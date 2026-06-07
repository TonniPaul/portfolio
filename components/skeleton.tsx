import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

const Skeleton = ({ className }: Props) => {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-foreground/10', className)}
    />
  );
};

export default Skeleton;
