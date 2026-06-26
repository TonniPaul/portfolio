'use client';

import SvgIcon from './svg-icon';
import Motion from './motion';
import { socials } from '@/utils/constants';
import ContactForm from './contact-form';
import SectionBadge from './section-badge';

const ContactSection = () => {
  return (
    <section id="contact" className="app-padding app-padding-y app-break-bg">
      <div className="mx-auto justify-between grid lmd:grid-cols-2 gap-5 lmd:gap-10">
        <div className="max-w-6xl mb-16 flex flex-col gap-6">
          <SectionBadge text="Contact Me" icon="mail" />

          <Motion as="h2" className="section-head-text">
            Let&apos;s build <span className="block">your next</span>{' '}
            <span className="text-primary scale-110">big idea.</span>
          </Motion>

          <Motion as="p" delay={0.2} className="max-w-lg">
            Have a project, an exciting opportunity, or just want to connect?
            I&apos;m always happy to chat about web development, product ideas,
            and how we can create something people genuinely enjoy using.
          </Motion>

          <Motion
            transition={{
              delay: 0.5,
            }}
            className="flex items-center gap-4"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="rounded-full border border-primary/20 bg-background/30 p-3 backdrop-blur-xl transition-all hover:scale-110 hover:border-primary"
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SvgIcon name={s.icon} className="h-5 w-5" />
              </a>
            ))}
          </Motion>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
