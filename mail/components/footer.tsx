import { Hr, Img, Link, Section, Text } from '@react-email/components';

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/tonnipaul',
    icon: 'https://res.cloudinary.com/duu4bkrhw/image/upload/v1782387036/mdi--linkedin_unsdtc.svg',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/tonnipaul',
    icon: 'https://res.cloudinary.com/duu4bkrhw/image/upload/v1782387032/prime--twitter_im6efk.svg',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/tonnipaul',
    icon: 'https://res.cloudinary.com/duu4bkrhw/image/upload/v1782387160/mdi--instagram_yqt9sb.svg',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/tonnipaul',
    icon: 'https://res.cloudinary.com/duu4bkrhw/image/upload/v1782387191/mdi--github_rnua5d.svg',
  },
];

export const EmailFooter = () => {
  return (
    <Section className="bg-[#faf7fd] px-8 py-8">
      <Hr
        style={{
          borderColor: 'rgba(125, 68, 168, 0.15)',
        }}
      />

      <Section className="mb-6 mt-4 text-center">
        {socials.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            className="mx-2 inline-block"
          >
            <Img
              src={social.icon}
              alt={social.label}
              width="20"
              height="20"
              className="inline-block"
            />
          </Link>
        ))}
      </Section>

      <Text className="m-0 text-center text-[11px] text-gray-400">
        &copy; {new Date().getFullYear()}{' '}
        <a href="https://tonnipaul.com" className="text-primary underline">
          TonniPaul Inc
        </a>
        .
      </Text>
    </Section>
  );
};
