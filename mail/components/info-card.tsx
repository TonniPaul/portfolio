import { Section, Text } from '@react-email/components';

type Props = {
  label: string;
  value: string;
};

export const InfoCard = ({ label, value }: Props) => {
  return (
    <Section
      style={{
        background: 'linear-gradient(180deg, #faf7fd 0%, #ffffff 100%)',
        border: '1px solid rgba(125, 68, 168, 0.15)',
        borderRadius: '16px',
        padding: '18px',
        marginBottom: '14px',
      }}
    >
      <Text
        style={{
          margin: 0,
          color: '#7d44a8',
          fontSize: '11px',
          fontWeight: '700',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}
      >
        {label}
      </Text>

      <Text
        style={{
          margin: '8px 0 0',
          color: '#171717',
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: '500',
        }}
      >
        {value}
      </Text>
    </Section>
  );
};
