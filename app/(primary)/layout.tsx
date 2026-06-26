import Footer from '@/components/footer';
import Header from '@/components/header';
import React, { ReactNode } from 'react';

const PrimaryLayout = ({ children }: Readonly<{ children?: ReactNode }>) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PrimaryLayout;
