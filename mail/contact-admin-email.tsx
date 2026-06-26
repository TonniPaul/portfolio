import { Section, Text } from '@react-email/components';

import { CalloutCard } from './components/callout-card';
import { InfoCard } from './components/info-card';
import { EmailLayout } from './layout';
import { EmailBadge } from './components/email-badge';
import Show from '@/components/show';

type Props = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export default function ContactAdminEmail({
  name,
  email,
  phone,
  message,
}: Props) {
  return (
    <EmailLayout preview={`New contact form submission from ${name} 🚀`}>
      <EmailBadge>New Lead</EmailBadge>

      <Text className="mb-7">
        Someone just submitted the contact form on your portfolio website. Here
        are the details:
      </Text>

      <InfoCard label="Full Name" value={name} />

      <InfoCard label="Email Address" value={email} />

      <Show when={!!phone}>
        <InfoCard label="Phone Number" value={phone || 'Not Provided'} />
      </Show>

      <CalloutCard title="Message">{message}</CalloutCard>

      <Section className="mt-6 rounded-md border border-primary/10 bg-[#faf7fd] p-4.5">
        <Text className="m-0 text-[13px] leading-6 text-gray-500">
          💡 You can reply directly to{' '}
          <strong className="text-primary">{email}</strong> to continue the
          conversation.
        </Text>
      </Section>
    </EmailLayout>
  );
}
