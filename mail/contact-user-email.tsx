import { Heading, Link, Text } from '@react-email/components';

import { CalloutCard } from './components/callout-card';
import { EmailLayout } from './layout';
import { NAME, ROLE } from '@/utils/constants';
import { EmailBadge } from './components/email-badge';

type Props = {
  name: string;
};

export default function ContactUserEmail({ name }: Props) {
  return (
    <EmailLayout preview="Your Next Software Developer Has Entered The Chat">
      <EmailBadge>Message Received</EmailBadge>

      <Heading className="mt-0 mb-5 text-[15px] font-extrabold text-primary-900">
        Hey {name} 👋
      </Heading>

      <Text className="mb-4">
        Thank you for reaching out through my portfolio. Your message has
        successfully landed in my inbox and I appreciate you taking the time to
        connect.
      </Text>

      <Text className="mb-4">
        I&apos;ll personally review your message and get back to you as soon as
        possible.
      </Text>

      <CalloutCard title="What happens next?">
        Whether you&apos;re looking to hire a frontend developer, discuss a
        project, explore a collaboration, or simply connect, I&apos;ll review
        your message and respond with the next steps.
      </CalloutCard>

      <Text className="mb-4">
        In the meantime, feel free to browse more of my{' '}
        <Link
          href="https://tonnipaul.com"
          className="font-semibold text-primary underline"
        >
          work
        </Link>{' '}
        and connect with me through any of my social platforms.
      </Text>

      <Text className="mt-9 mb-0 text-[15px]  text-gray-600">
        Best regards,
        <strong className="text-primary-900 block">{NAME}</strong>
        {ROLE}
      </Text>
    </EmailLayout>
  );
}
