'use client';

import Lanyard from './lanyard';
import SvgIcon from './svg-icon';
import Motion from './motion';
import { NAME, ROLE, socials } from '@/utils/constants';
import { Button } from './button';
import SectionBadge from './section-badge';

const HeroSection = () => {
  return (
    <section className="relative app-padding overflow-hidden w-full text-foreground app-padding-b">
      <Motion
        as="div"
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-32 right-20 hidden md:block"
      >
        <div className="h-32 w-32 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-xl" />
      </Motion>

      <Motion
        as="div"
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-32 left-10 hidden md:block"
      >
        <div className="h-24 w-24 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-xl" />
      </Motion>

      <div className="relative flex w-full from-background flex-col items-center justify-between gap-20 pt-32 lg:flex-row">
        <div className="">
          <SectionBadge
            text="CUSTOM SOFTWARE SOLUTIONS_"
            className="md:text-lg mb-5"
          />

          <Motion
            as={'h1'}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
            }}
            className="text-3xl font-bold leading-normal md:leading-tight xs:text-4xl md:text-7xl"
          >
            Coding_
            <span className="relative block text-primary w-fit">
              A Better_
              <span className="absolute -bottom-3 left-0 h-3 w-full bg-primary/50 blur-xl" />
            </span>
            World_
          </Motion>

          <Motion as={'p'} className="mt-8 max-w-2xl md:text-lg">
            Through thoughtful design and clean code, I create digital products
            that make everyday experiences simpler, faster, and more meaningful
            for the people who use them.
          </Motion>

          <Motion
            transition={{
              duration: 1.2,
            }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#projects">
              <Button withIcon>Browse PROJECTS</Button>
            </a>
          </Motion>

          <Motion
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.05,
            }}
            className="mt-12 flex items-center gap-4"
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

        <Motion
          initial={{
            opacity: 0,
            scale: 0.8,
            rotate: -10,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
          }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute h-a-500 w-a-500 rounded-full bg-primary/20 blur-3xl" />

          <Motion
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute h-105 w-105 rounded-full border border-dashed border-primary/40"
          />

          <div className="relative">
            <Lanyard
              imageSrc="/assets/tonnipaul.png"
              qrCodeSrc="/assets/qr-code.png"
              name={NAME}
              skills={skills}
              role={ROLE}
            />
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default HeroSection;

const skills = [
  'React',
  'Next.js',
  'Svelte',
  'JavaScript',
  'TypeScript',
  'Tailwind CSS',
  'HTML',
  'CSS',
  'Styled Components',
];
