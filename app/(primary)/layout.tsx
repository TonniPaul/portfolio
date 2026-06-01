import Header from '@/components/header';
import React, { ReactNode } from 'react';

const PrimaryLayout = ({ children }: Readonly<{ children?: ReactNode }>) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default PrimaryLayout;
