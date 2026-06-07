import Carousel from '@/components/carousel';
import FeaturedProject from '@/components/featured-projects';
import HeroSection from '@/components/hero';
import Motion from '@/components/motion';
import ProjectsList from '@/components/projects-list';
import SectionBadge from '@/components/section-badge';
import { projects } from '@/data/project.data';

export default function Home() {
  const featuredProjects = projects.slice(0, 5);
  return (
    <>
      <HeroSection />

      <section
        id="projects"
        className="app-padding app-padding-y relative app-break-bg isolate"
      >
        <div className="absolute left-1/2 top-40 aspect-square w-full max-w-150 -translate-x-1/2 rounded-full bg-primary/30 blur-[180px]" />

        <div className="relative z-10">
          <div className="mb-16 flex flex-col gap-6">
            <SectionBadge text="Selected Work" icon="laptop-project" />

            <Motion
              as="h2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-5xl font-black leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-6xl"
            >
              Products I've
              <br />
              <span className="text-primary">shipped into reality</span>.
            </Motion>

            <Motion
              as="p"
              delay={0.15}
              className="max-w-2xl text-base md:text-lg leading-relaxed text-foreground/65"
            >
              A curated selection of products I've poured time and craft into
              across healthcare, education, logistics, e-commerce, community,
              and marketing. Each one built to solve a real problem for real
              people.
            </Motion>
          </div>

          <Carousel showNavigation showPagination loop>
            {featuredProjects.map((featured) => (
              <FeaturedProject
                key={featured.id}
                title={featured.title}
                category={featured.category}
                description={featured.description}
                features={featured.features}
                technologies={featured.technologies}
                image={featured.image ?? ''}
                website={featured.website}
              />
            ))}
          </Carousel>

          <ProjectsList projects={projects} />
        </div>
      </section>
    </>
  );
}
