import { routes } from '@/lib/routes';

export const navItems = [
  {
    label: 'About Me',
    href: routes.about(),
  },
  {
    label: 'Projects',
    href: routes.projects(),
  },
  {
    label: 'Contact',
    href: routes.contact(),
  },
];
