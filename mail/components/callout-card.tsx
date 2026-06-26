import { Section, Text } from '@react-email/components';
import { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

export const CalloutCard = ({ title, children }: Props) => {
  return (
    <Section className="my-5 rounded-lg border border-primary/15 border-l-[5px] border-l-primary p-5">
      <Text className="m-0 text-[13px] font-bold uppercase tracking-[1px] text-primary">
        {title}
      </Text>

      <Text className="mt-3.5 mb-0 text-[13px] leading-7">{children}</Text>
    </Section>
  );
};
