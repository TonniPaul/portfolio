import { cn } from '@/lib/utils';

interface InputFooterTextProps {
  text: string;
  isError?: boolean;
}

const InputFooterText = ({ text, isError }: InputFooterTextProps) => {
  return (
    <small
      className={cn(
        'text-a-10 first-letter:uppercase text-a-text/60',
        isError && 'text-red-500'
      )}
    >
      {text}
    </small>
  );
};

export default InputFooterText;
