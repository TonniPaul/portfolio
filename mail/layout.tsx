import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Font,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';
import { ReactNode } from 'react';

import { EmailFooter } from './components/footer';
import { EmailHeader } from './components/header';

type Props = {
  preview: string;
  children: ReactNode;
};

export const logoPurple =
  'https://res.cloudinary.com/duu4bkrhw/image/upload/v1782383581/logo-purple_ynzztg.png';

export const logoWhite =
  'https://res.cloudinary.com/duu4bkrhw/image/upload/v1782383582/logo-white_t6ghhh.png';

export const EmailLayout = ({ preview, children }: Props) => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="JetBrains Mono"
          fallbackFontFamily="monospace"
          webFont={{
            url: 'https://fonts.gstatic.com/s/jetbrainsmono/v23/...woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />

        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
      </Head>

      <Preview>{preview}</Preview>

      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                primary: '#7d44a8',
                'primary-700': '#c084f5',
                'primary-800': '#7d44a8',
                'primary-900': '#060010',
              },
            },
          },
        }}
      >
        <Body className="m-0 bg-[#f5f2f8] px-2 py-4 font-sans text-a-[10px]">
          <Container className="mx-auto max-w-162.5">
            <Section
              className=" overflow-hidden rounded-2xl border border-purple-200 bg-white"
              style={{
                boxShadow: '0 25px 60px rgba(125, 68, 168, 0.15)',
              }}
            >
              <EmailHeader />

              <Section className="bg-white px-4 py-10">{children}</Section>

              <EmailFooter />
            </Section>

            <Section className="pt-5 text-center">
              <div
                style={{
                  display: 'inline-block',
                  width: '120px',
                  height: '4px',
                  borderRadius: '999px',
                  background: 'linear-gradient(90deg,#7d44a8,#c084f5,#7d44a8)',
                }}
              />
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
