import ThemeToggle from '@/components/theme-toggle';

export default function Home() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12 text-center">
      <ThemeToggle className="mx-auto w-max mb-8" />
      <h1 className="text-4xl font-bold text-app-black mb-4">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg text-app-text mb-6">
        Hi, I'm <strong>Paul Ariyo-Adeoye</strong>, a frontend developer
        passionate about building fast, accessible, and SEO-optimized websites
        using modern frameworks like <strong>React</strong>,{' '}
        <strong>Next.js</strong>, <strong>Svelte</strong>, and{' '}
        <strong>Astro</strong>.
      </p>
      <p className="text-md text-app-text mb-6">
        I’m currently rebuilding my portfolio to better reflect the depth of my
        skills and the value I bring to projects. 🚧 Expect a sleeker, more
        powerful experience soon!
      </p>
      <a
        href="https://legacy.tonnipaul.com"
        target="_blank"
        className="inline-block mt-4 px-6 py-3 text-white bg-primary rounded-xl hover:bg-primary/90 transition"
      >
        View My Previous Portfolio
      </a>
    </section>
  );
}
