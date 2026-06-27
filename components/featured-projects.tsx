import Browser from './browser';
import Link from 'next/link';
import SvgIcon from './svg-icon';
import { Button } from './button';
import Show from './show';
import Motion from './motion';
import { Project } from '@/types/project.type';
import Skeleton from './skeleton';
import Image from 'next/image';

export const FeaturedProjectSkeleton = () => {
  return (
    <article className="relative overflow-hidden rounded-[40px] border border-primary/20 bg-primary/5">
      <div className="grid gap-10 p-6 md:p-10 xl:grid-cols-2 xl:p-14">
        <div>
          <Skeleton className="h-3 w-32" />

          <Skeleton className="mt-4 h-14 w-3/4" />

          <div className="mt-6 flex flex-col gap-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
          </div>

          <div className="mt-10">
            <Skeleton className="mb-4 h-3 w-28" />
            <div className="flex flex-wrap gap-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-9 w-28 rounded-full" />
              ))}
            </div>
          </div>

          <div className="mt-10">
            <Skeleton className="mb-4 h-3 w-20" />
            <div className="flex flex-wrap gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-9 w-24 rounded-full" />
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Skeleton className="h-11 w-36 rounded-full" />
            <Skeleton className="h-11 w-32 rounded-full" />
          </div>
        </div>

        <Skeleton className="h-80 w-full rounded-2xl xl:h-full" />
      </div>
    </article>
  );
};

const FeaturedProject = (project: Project) => {
  return (
    <article className="group relative overflow-hidden rounded-[40px] border border-primary/20 bg-primary/5">
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/20 blur-[150px] transition-all duration-700 group-hover:scale-125" />

      <div className="grid gap-10 p-6 md:p-10 xl:grid-cols-2 xl:p-14">
        <div>
          <span className="text-a-12 uppercase tracking-[0.3em] text-primary">
            Featured Project
          </span>

          <h3 className="mt-4 text-a-34 font-black md:text-4xl">
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
                <span key={idx} className="pill flex gap-1 items-center">
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
              {project.technologies?.map((p, idx) => (
                <span key={idx} className="pill">
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className=" mt-10 flex flex-wrap gap-4 max-xl:hidden">
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
        </div>

        <div>
          <Browser>
            <div className="relative aspect-16/10 rounded-b-4xl border">
              <Image
                fill
                alt=""
                src={project.image}
                className="object-contain2q`"
              />
            </div>
          </Browser>

          <div className=" mt-10 flex flex-wrap gap-4 xl:hidden">
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
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
