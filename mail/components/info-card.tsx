import { Section, Text } from '@react-email/components';

type Props = {
  label: string;
  value: string;
};

export const InfoCard = ({ label, value }: Props) => {
  return (
    <Section
      className="mb-3.5 rounded-2xl border border-primary/15 p-4.5"
      style={{
        background: 'linear-gradient(180deg, #faf7fd 0%, #ffffff 100%)',
      }}
    >
      <Text className="m-0 text-[11px] font-bold uppercase tracking-[1px] text-primary">
        {label}
      </Text>

      <Text className="mt-2 mb-0 text-[13px] font-medium text-[#171717]">
        {value}
      </Text>
    </Section>
  );
};
