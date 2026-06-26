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
        Thanks for getting in touch! Your message has been successfully received
        and is now in my inbox.
      </Text>

      <Text className="mb-4">
        I&apos;ll personally review it and get back to you within 24 hours.
      </Text>

      <CalloutCard title="What happens next?">
        Whether you’re looking to hire a frontend developer, discuss a project,
        explore a collaboration, or simply say hello, I’ll review your message
        and follow up with the next steps.
      </CalloutCard>

      <Text className="mb-4">
        In the meantime, feel free to explore more of my{' '}
        <Link
          href="https://tonnipaul.com"
          className="font-semibold text-primary underline"
        >
          work
        </Link>
        . You can also connect with me on any of my social platforms using the
        links in the footer below.
      </Text>

      <Text className="mt-9 mb-0 text-[15px]  text-gray-600">
        Best regards,
        <strong className="text-primary-900 block">{NAME}</strong>
        {ROLE}
      </Text>
    </EmailLayout>
  );
}
