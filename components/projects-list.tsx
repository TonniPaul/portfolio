'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import Motion from './motion';
import ProjectListItem from './project-list-item';
import { Project } from '@/types/project.type';
import { Button } from './button';
import Show from './show';

const PAGE_SIZE = 5;

type Props = {
  projects: Project[];
};

const ProjectsList = ({ projects }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get('page') ?? 1);
  const visibleCount = page * PAGE_SIZE;
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  const loadMore = () => {
    const nextPage = page + 1;
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(nextPage));
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="mt-12">
      {visibleProjects.map((project, idx) => (
        <Motion key={idx} delay={idx * 0.1}>
          <ProjectListItem
            id={idx + 1}
            title={project.title}
            category={project.category}
            description={project.description}
            technologies={project.technologies}
            website={project.website}
          />
        </Motion>
      ))}

      <Show when={hasMore}>
        <div className="mt-10 flex justify-center">
          <Button onClick={loadMore} variant="primary-outline">
            Load more
          </Button>
        </div>
      </Show>
    </div>
  );
};

export default ProjectsList;
