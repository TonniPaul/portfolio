import ProjectBrowser from './browser';
import SectionBadge from './section-badge';
import Motion from './motion';
import SvgIcon from './svg-icon';
import { IconName } from '@/types/icon.type';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden app-padding app-padding-y app-break-bg"
    >
      <div className="absolute top-20 left-1/2 h-a-500 w-a-500 -translate-x-1/2 rounded-full bg-primary/10 blur-[150px]" />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="select-none text-[18vw] font-black tracking-tighter text-foreground/5">
          FRONTEND
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-20 max-w-4xl flex flex-col gap-6">
          <SectionBadge text="About Me" icon="laptop-project" />

          <Motion as="h2" className="section-head-text">
            I don&rsquo;t just build
            <span className="text-primary block">web sites/apps,</span>I
            engineer experiences.
          </Motion>

          <Motion as="p" delay={0.2} className="max-w-3xl mt-4 md:text-lg">
            Frontend development isn&apos;t about pushing pixels. It&apos;s
            about turning ideas into experiences people genuinely enjoy using.
          </Motion>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <div className="section-card backdrop-blur-sm md:p-10">
              <SvgIcon name="sparkles" className="mb-6  w-8 h-8 text-primary" />

              <Motion as="p" className="mt-4 md:text-lg">
                I specialize in building fast, scalable, visually striking web
                applications using modern technologies like React, Next.js,
                TypeScript, and Tailwind CSS.
              </Motion>

              <Motion as="p" className="mt-4 md:text-lg">
                Whether it&apos;s a startup MVP, enterprise dashboard,
                healthcare platform, or high-converting landing page, my mission
                remains the same:
              </Motion>

              <Motion
                delay={0.3}
                className="mt-8 border-l-4 border-primary pl-6"
              >
                <p className="text-xl font-bold md:text-2xl">
                  Create interfaces that feel effortless.
                </p>
              </Motion>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((item, idx) => (
                <Motion
                  key={item.label}
                  delay={idx * 0.2}
                  className="group section-card rounded-3xl"
                >
                  <h3 className="mb-2 text-4xl font-black text-primary">
                    {item.value}
                  </h3>

                  <p className="md:text-lg">{item.label}</p>
                </Motion>
              ))}
            </div>

            <div className="section-card">
              <SvgIcon name="zap" className="mb-6 text-primary w-7.5 h-7.5" />

              <Motion as="h3" className="mb-4 card-head-text">
                My Philosophy
              </Motion>

              <Motion as="p" className="mt-4 md:text-lg">
                Users should never have to think about the interface.
              </Motion>

              <Motion as="p" className="mt-4 md:text-lg">
                When a product is built correctly, navigation feels obvious,
                performance feels instant, and every interaction feels natural.
              </Motion>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-5">
            <ProjectBrowser>
              <div className="space-y-3 p-8 text-primary-200">
                <p className="text-primary-700">$ whoami</p>
                <p>Paul Ariyo-Adeoye</p>
                <p>Frontend Engineer</p>
                <p>UI Craftsman </p>
                <p>Performance Enthusiast </p>
                <p>Problem Solver</p>

                <span className="pill text-primary-700 mt-4">
                  Available for projects
                </span>
              </div>
            </ProjectBrowser>

            <div className="section-card p-8">
              <Motion as="h3" className="mb-8 card-head-text">
                What I Do
              </Motion>

              <div className="space-y-6">
                {WHATIDO.map(({ icon, title, desc }, idx) => (
                  <Motion
                    as="div"
                    key={title}
                    className="flex gap-4"
                    initial={{
                      opacity: 0,
                      x: -24,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: 'easeOut',
                    }}
                    delay={idx * 0.12}
                  >
                    <SvgIcon name={icon} className="text-primary h-5 w-5" />
                    <div>
                      <h4 className="font-semibold">{title}</h4>
                      <p className="text-foreground/60">{desc}</p>
                    </div>
                  </Motion>
                ))}
              </div>
            </div>

            <div className="section-card p-8">
              <h3 className="mb-6 card-head-text">Tech Stack</h3>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <Motion
                    as="span"
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
                    delay={idx * 0.1}
                    key={skill}
                    className="pill"
                  >
                    {skill}
                  </Motion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

const WHATIDO: {
  icon: IconName;
  title: string;
  desc: string;
}[] = [
  {
    icon: 'rocket',
    title: 'Build',
    desc: 'Modern web applications',
  },
  {
    icon: 'code-xml',
    title: 'Optimize',
    desc: 'SEO, performance & accessibility',
  },
  {
    icon: 'layers',
    title: 'Scale',
    desc: 'Maintainable architecture',
  },
  {
    icon: 'terminal',
    title: 'Engineer',
    desc: 'Reliable frontend systems',
  },
];

const stats = [
  {
    value: '4+',
    label: 'Years of Experience',
  },
  {
    value: '30+',
    label: 'Projects Delivered',
  },
  {
    value: '15+',
    label: 'Technologies Used',
  },
  {
    value: '20+',
    label: 'Happy Clients',
  },
];

const skills = [
  'Next.js',
  'React',
  'javascript',
  'TypeScript',
  'Tailwind CSS',
  'Styled Components',
  'HTML',
  'Framer Motion',
  'Node.js',
  'Svelte',
  'GitLab CI/CD',
  'Sanity CMS',
  'REST APIs',
  'Wordpress',
  'Zustand',
  'Css Modules',
];
