import ResourceCards from "../components/ResourceCards";

const ResourcesPage = () => {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--acm-blue)">
          Resources
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
          Tools for the computing community
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          ACM provides resources for learning, research, professional
          development, communication, and participation in the computing
          community.
        </p>
      </header>

      <section className="mt-14" aria-labelledby="resource-list-title">
        <h2
          id="resource-list-title"
          className="mb-8 text-3xl font-semibold tracking-tight text-slate-900"
        >
          Explore resources
        </h2>
        <ResourceCards />
      </section>

      <a
        href="https://www.acm.org/resources"
        target="_blank"
        rel="noreferrer"
        className="mt-10 inline-flex items-center gap-2 rounded-lg bg-(--acm-blue) px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
      >
        Read the official ACM resource guide
        <span aria-hidden="true">↗</span>
      </a>
    </main>
  );
};

export default ResourcesPage;
