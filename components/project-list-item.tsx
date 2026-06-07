import Link from 'next/link';
import SvgIcon from './svg-icon';

type Props = {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  website: string;
  metrics?: undefined;
  image?: undefined;
};

const ProjectListItem = (project: Props) => {
  return (
    <article className="group grid gap-6 border-b border-primary/10 py-8 transition-all duration-300 hover:border-primary/40 lg:grid-cols-[80px_1fr_auto]">
      <span className="text-a-24 font-bold text-primary">0{project.id}</span>

      <div>
        <h3 className=" text-a-22 font-semibold">{project.title}</h3>

        <p className="text-primary">{project.category}</p>

        <p className="mt-2 text-foreground/60">{project.description}</p>

        <div className=" mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className=" rounded-full border border-primary/20 px-3 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <Link href={project.website} target="_blank" rel="no ">
        <SvgIcon
          name="arrow-right-up"
          className="text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1 w-10 h-10"
        />
      </Link>
    </article>
  );
};

export default ProjectListItem;
