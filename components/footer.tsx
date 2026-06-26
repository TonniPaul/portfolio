'use client';
import Link from 'next/link';

import { NAME, NICKNAME } from '@/utils/constants';
import { navItems } from '@/data/nav-items';

const Footer = () => {
  return (
    <footer className="app-padding relative overflow-hidden bg-linear-to-br from-primary/10 via-primary-900/5 to-primary/10 border-t border-primary/10 py-16">
      <div className="relative">
        <div className="section-card">
          <div className="flex flex-col items-center justify-between gap-8 text-center lmd:flex-row lmd:text-left">
            <div>
              <h3 className="font-black">{NAME}</h3>

              <p className="mt-2 max-w-md text-sm text-foreground/70">
                Building modern, performant and delightful web experiences with
                React, Next.js and TypeScript.
              </p>
            </div>

            <div className="flex gap-6 text-sm font-medium">
              {navItems.map((el) => (
                <Link
                  key={el.label}
                  href={el.href}
                  className="transition hover:text-primary"
                >
                  {el.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="my-8 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />

          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-foreground/60 lmd:flex-row">
            <p>
              &copy; {new Date().getFullYear()} {NICKNAME} inc. All rights
              reserved.
            </p>

            <p>
              Designed &amp; Built by{' '}
              <span className="font-semibold text-primary">
                {NICKNAME}&trade;
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
