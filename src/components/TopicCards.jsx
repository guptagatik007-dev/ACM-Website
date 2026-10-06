const topics = [
  {
    title: "Guide to GitHub",
    description: "Learn repositories, branches, pull requests, and collaboration.",
  },
  {
    title: "Web Development",
    description: "Explore the foundations of modern websites and web apps.",
  },
  {
    title: "Open Source",
    description: "Find your first project and start contributing with confidence.",
  },
  {
    title: "UI/UX Design",
    description: "Turn ideas into clear, accessible, and engaging experiences.",
  },
  {
    title: "Problem Solving",
    description: "Build stronger programming habits through thoughtful practice.",
  },
  {
    title: "AI and Machine Learning",
    description: "Get familiar with the concepts shaping the future of technology.",
  },
];

const TopicCards = () => {
  return (
    <section
      id="topics"
      className="mx-[6vw] pb-24 sm:mx-[20vh] sm:pb-32"
      aria-labelledby="topics-title"
    >
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-(--acm-blue)">
          Learn and build
        </p>
        <h2
          id="topics-title"
          className="mt-3 text-3xl font-semibold tracking-tight text-black sm:text-4xl"
        >
          Explore topics
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map(({ title, description }) => (
          <article
            key={title}
            className="group rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-(--acm-blue) hover:shadow-[0_8px_20px_var(--acm-blue-shadow)]"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="flex size-9 items-center justify-center rounded-full bg-(--acm-blue)/10 text-sm font-semibold text-(--acm-blue)">
                +
              </span>
              <span className="text-slate-300 transition-colors group-hover:text-(--acm-blue)">
                ↗
              </span>
            </div>
            <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TopicCards;
