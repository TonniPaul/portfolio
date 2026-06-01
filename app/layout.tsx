import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';

import SplashCursor from '@/components/animations/splash-cursor';

import { ThemeProvider } from '@/components/theme-provider';

import './globals.css';

const font = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default:
      'Paul Oluwatoni Ariyo-Adeoye (TonniPaul)  | Frontend Engineer — Next.js, React & Web Performance',
    template: `%s | TonniPaul`,
  },
  description:
    'Frontend engineer with a focus on web performance, accessibility, and scalable UI architecture. Built with React, Next.js, Svelte, and Astro. Open to freelance and full-time roles.',
  icons: {
    icon: '/assets/favicon.ico',
  },
  openGraph: {
    title: 'Paul Oluwatoni Ariyo-Adeoye (TonniPaul)  | Frontend Engineer',
    description:
      'Frontend engineer specializing in Next.js, React, and web performance. Open to freelance and full-time roles.',
    url: 'https://tonnipaul.com',
    siteName: 'TonniPaul',
    locale: 'en_UK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TonniPaul | Frontend Engineer',
    description:
      'Frontend engineer specializing in Next.js, React, and web performance. Open to freelance and full-time roles.',
    creator: '@tonnipaul',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className}  antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SplashCursor />
          {children}
        </ThemeProvider>

        <GoogleTagManager gtmId="G-NJQP8WLF5F" />
      </body>
    </html>
  );
}
