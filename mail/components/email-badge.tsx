import { Section } from '@react-email/components';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const EmailBadge = ({ children }: Props) => {
  return (
    <Section className="mb-3 inline-block rounded-full w-fit h-fit bg-purple-100 px-3.5 py-2">
      <div className="m-0 text-[13px] font-bold uppercase tracking-[1px] text-primary">
        {children}
      </div>
    </Section>
  );
};
