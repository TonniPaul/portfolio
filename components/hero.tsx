'use client';

import Lanyard from './lanyard';
import SvgIcon from './svg-icon';
import Motion from './motion';
import { socials } from '@/utils/constants';
import Modal from './modal';
import { Button } from './button';
import RebuildNotice from './rebuild-notice';

const HeroSection = () => {
  return (
    <section className="relative app-padding overflow-hidden w-full text-foreground min-h-screen">
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

      <div className="relative z-10 flex w-full from-background flex-col items-center justify-between gap-20 py-32 lg:flex-row">
        <div className="">
          <Motion
            as="div"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 backdrop-blur-md"
          >
            <SvgIcon name="sparkles" className="h-4 w-4 text-primary" />

            <span className="text-a-10 md:text-sm font-medium text-primary">
              CUSTOM SOFTWARE SOLUTIONS_
            </span>
          </Motion>

          <Motion
            as={'h1'}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
            }}
            className="text-3xl font-bold leading-normal md:leading-tight xs:text-4xl md:text-7xl xl:text-[110px]"
          >
            Coding_
            <br />
            <span className="relative inline-block text-primary">
              A Better_
              <span className="absolute -bottom-3 left-0 h-3 w-full bg-primary/30 blur-xl" />
            </span>
            <br />
            World_
          </Motion>
          <Motion
            as={'p'}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
            }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/70 md:text-xl"
          >
            Through thoughtful design and clean code, I create digital products
            that make everyday experiences simpler, faster, and more meaningful
            for the people who use them.
          </Motion>

          <Motion
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
            }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Modal
              trigger={<Button withIcon>VIEW PROJECTS</Button>}
              className="app-padding"
            >
              <RebuildNotice />
            </Modal>
          </Motion>

          <Motion
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.5,
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
              imageSrc="/assets/head-shot.jpeg"
              qrCodeSrc="/assets/qr-code.png"
              name="Paul Oluwatoni Ariyo-Adeoye"
              skills={skills}
              role="Software Engineer"
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
