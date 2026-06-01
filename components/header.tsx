'use client';

// import { routes } from '@/lib/routes';
import SvgIcon from './svg-icon';
import ThemeToggle from './theme-toggle';
// import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Show from './show';
import Modal from './modal';
import RebuildNotice from './rebuild-notice';

// const navItems = [
//   {
//     label: 'Blog',
//     href: routes.blog(),
//   },
//   {
//     label: 'Services',
//     href: routes.blog(),
//   },
// ];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { resolvedTheme } = useTheme();

  const MobileNav = () => (
    <ul
      className={cn(
        'fixed top-0 right-0 h-screen w-[80%] max-w-[320px] bg-background border-l border-primary z-90 py-6 md:hidden',
        'transition-transform ease-in-out duration-300',
        isOpen ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      <li className="md:hidden pb-10 block px-6 border-b">
        <button
          className="rounded-full text-primary block w-max ml-auto"
          onClick={() => setIsOpen(false)}
        >
          <SvgIcon name="close" className="w-8 h-8" />
        </button>
      </li>
      <Modal trigger={<button>Projects</button>} className="app-padding">
        <RebuildNotice />
      </Modal>
      {/* {navItems.map((item) => (
        <li key={item.label} className="border-b">
          <Link
            href={item.href}
            className="text-app-text hover:text-app-black  py-3 px-6 block transition"
          >
            {item.label}
          </Link>
        </li>
      ))} */}
    </ul>
  );

  return (
    <header className="app-padding transition-transform fixed top-5 w-full left-0 z-50">
      <MobileNav />
      <div className={cn('blurred-bg hidden', isOpen && 'block md:hidden')} />

      <nav className="flex gap-4 items-center">
        <div className="flex bg-primary/5 backdrop-blur-md flex-1 justify-between items-center rounded-full p-6 py-3 border border-primary">
          <div className="relative w-20 h-7">
            <Show when={mounted}>
              <Image
                src={`/assets/${resolvedTheme === 'dark' ? 'logo-white' : 'logo-purple'}.png`}
                alt="Logo"
                fill
                sizes="100%"
                loading="eager"
                className="object-contain"
              />
            </Show>
          </div>

          <ThemeToggle className="w-max" />

          <ul className={'md:flex gap-4 items-center max-md:hidden'}>
            <li className="md:hidden mb-6 block w-max ml-auto">
              <button className="rounded-full ">
                <SvgIcon name="close" className="w-8 h-8" />
              </button>
            </li>

            <Modal trigger={<button>Projects</button>} className="app-padding">
              <RebuildNotice />
            </Modal>
            {/* {navItems.map((item) => (
              <li key={item.label} className="max-md:mb-4">
                <Link
                  href={item.href}
                  className="text-app-text hover:text-app-black transition"
                >
                  {item.label}
                </Link>
              </li>
            ))} */}
          </ul>
        </div>

        <button
          className="bg-primary/5 backdrop-blur-md md:hidden p-3 rounded-full border border-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          <SvgIcon name="menu" className="w-5 h-5" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
