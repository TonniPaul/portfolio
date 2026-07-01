import AboutSection from '@/components/about';
import Carousel from '@/components/carousel';
import ContactSection from '@/components/contact';
import FeaturedProject, {
  FeaturedProjectSkeleton,
} from '@/components/featured-projects';
import HeroSection from '@/components/hero';
import Motion from '@/components/motion';
import { ProjectListItemSkeleton } from '@/components/project-list-item';
import ProjectsList from '@/components/projects-list';
import SectionBadge from '@/components/section-badge';
import TestimonialCard from '@/components/testimonial-card';
import { projects } from '@/data/project.data';
import { reviews } from '@/data/reviews.data';
import { Suspense } from 'react';

export default function Home() {
  const featuredProjects = projects.slice(0, 5);
  return (
    <>
      <HeroSection />

      <AboutSection />

      <section
        id="projects"
        className="app-padding app-padding-y relative isolate"
      >
        <div className="absolute left-1/2 top-40 aspect-square w-full max-w-150 -translate-x-1/2 rounded-full bg-primary/30 blur-[180px]" />

        <div className="relative">
          <div className="mb-16 flex flex-col gap-6">
            <SectionBadge text="Selected Work" icon="laptop-project" />

            <Motion as="h2" className="section-head-text">
              <span className="block">Products I&apos;ve</span>
              <span className="text-primary">shipped into reality</span>.
            </Motion>

            <Motion as="p" delay={0.05} className="max-w-2xl">
              A curated selection of products I&apos;ve poured time and craft
              into across healthcare, education, logistics, e-commerce,
              community, and marketing. Each one built to solve a real problem
              for real people.
            </Motion>
          </div>

          <Suspense fallback={<FeaturedProjectSkeleton />}>
            <Carousel showNavigation showPagination loop={true}>
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
          </Suspense>

          <Suspense fallback={<ProjectListItemSkeleton />}>
            <ProjectsList projects={projects} />
          </Suspense>
        </div>
      </section>

      <section className="app-padding app-padding-y">
        <div className="mb-16 flex flex-col gap-6">
          <SectionBadge text="Testimonials" icon="laptop-project" />

          <Motion as="h2" className="section-head-text">
            <span className="block">The work speaks.</span>
            <span className="text-primary">So do the people.</span>
          </Motion>

          <Motion as="p" delay={0.05} className="max-w-2xl">
            I&apos;m proud of the products I&apos;ve helped build, but I&apos;m
            even prouder of the relationships formed along the way. Here&apos;s
            what people had to say.
          </Motion>
        </div>

        <Suspense fallback={<FeaturedProjectSkeleton />}>
          <Carousel
            showNavigation
            showPagination
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              600: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
            }}
          >
            {reviews.map((el, idx) => (
              <TestimonialCard
                key={idx}
                firstName={el.firstName}
                lastName={el.lastName}
                role={el.role}
                company={el.company}
                comment={el.comment}
                img={el.img}
              />
            ))}
          </Carousel>
        </Suspense>
      </section>

      <ContactSection />
    </>
  );
}
