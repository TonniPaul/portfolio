import { Img, Section, Text } from '@react-email/components';

import { logoWhite } from '../layout';
import { NAME, ROLE } from '@/utils/constants';

export const EmailHeader = () => {
  return (
    <>
      <Section
        className="px-4 py-8 text-center bg-primary-800 text-white"
        // Removing this because it doesn't look nice on gmail app will find a fix later
        // style={{
        //    // background:
        //    //    'linear-gradient(135deg, #060010 0%, #1b0d2d 35%, #7d44a8 100%)',
        // }}
      >
        <Img
          src={logoWhite}
          alt="TonniPaul"
          width="80"
          className="mx-auto mb-3 block h-auto max-w-full"
        />

        <Text className="text-[13px] font-bold">{NAME}</Text>

        <Text className="m-0 text-[11px] font-bold">{ROLE}</Text>
      </Section>

      <Section
        className="h-1"
        style={{
          background:
            'linear-gradient(90deg, #7d44a8 0%, #c084f5 50%, #7d44a8 100%)',
        }}
      />
    </>
  );
};
