import type { Metadata } from 'next';
import { Onest } from 'next/font/google';

import SplashCursor from '@/components/animations/splash-cursor';
import Header from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';

import './globals.css';

const font = Onest({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Paul Oluwatoni Ariyo-Adeoye (TonniPaul) || Frontend Developer',
  description:
    'Paul Ariyo-Adeoye crafts blazing-fast, SEO-optimized web apps using React, Next.js, Svelte & Astro. Explore his portfolio of high-converting, modern UIs.',
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
          <Header />

          <main className="min-h-screen grid place-items-center">
            {children}
          </main>

          <SplashCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
