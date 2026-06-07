import ProjectBrowser from './project-browser';
import Link from 'next/link';
import SvgIcon from './svg-icon';
import { Button } from './button';
import Show from './show';
import Motion from './motion';
import { Project } from '@/types/project.type';
const FeaturedProject = (project: Project) => {
  return (
    <article className="group relative overflow-hidden rounded-[40px] border border-primary/20 bg-primary/5">
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/20 blur-[150px] transition-all duration-700 group-hover:scale-125" />

      <div className="grid gap-10 p-6 md:p-10 xl:grid-cols-2 xl:p-14">
        <Motion>
          <span className="text-a-12 uppercase tracking-[0.3em] text-primary">
            Featured Project
          </span>

          <h3 className="mt-4 text-a-34 font-black md:text-6xl">
            {project.title}
          </h3>

          <p className="mt-6 max-w-xl text-foreground/70">
            {project.description}
          </p>

          <div className="mt-10">
            <p className="text-xs uppercase font-black tracking-[0.3em] text-foreground/70 mb-4">
              Core Features:
            </p>

            <div className="flex flex-wrap gap-3">
              {project.features?.map((feature, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm"
                >
                  <SvgIcon name="check-fill" className="h-5 w-5" />
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <p className="text-xs uppercase font-black tracking-[0.3em] text-foreground/70 mb-4">
              Built With:
            </p>

            <div className="flex flex-wrap gap-3">
              {project.technologies?.map((t, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className=" mt-10 flex flex-wrap gap-4">
            <Link href={project.website}>
              <Button withIcon tabIndex={-1}>
                View Project
              </Button>
            </Link>

            <Show when={!!project.github}>
              <Link href={project.github || '#'}>
                <Button
                  withIcon
                  icon="github"
                  variant="primary-outline"
                  tabIndex={-1}
                >
                  {' '}
                  Github
                </Button>
              </Link>
            </Show>
          </div>
        </Motion>

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
        >
          {' '}
          <ProjectBrowser image={project.image} />
        </Motion>
      </div>
    </article>
  );
};

export default FeaturedProject;
