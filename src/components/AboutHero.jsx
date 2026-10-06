const AboutHero = () => {
  return (
    <section
      id="about"
      className="hero-section relative isolate mx-[6vw] my-14 flex min-h-[calc(100svh-238px)] max-w-none items-center overflow-hidden rounded-3xl border-(--acm-blue) bg-white/55 px-6 py-24 shadow-[0_12px_32px_var(--acm-blue-shadow)] backdrop-blur-xl sm:mx-[20vh] sm:py-32"
      aria-labelledby="about-title"
    >
      <div className="hero-content relative z-10  max-w-3xl">
        <h1
          id="about-title"
          className="text-5xl font-semibold tracking-tight text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7)] sm:text-7xl"
        >
          Welcome to ACM Chapter IIT Mandi
        </h1>
        <div className="mt-6 max-w-2xl rounded-2xl border border-white/30 bg-white/15 p-5 shadow-lg backdrop-blur-md">
          <p className="text-lg leading-8 text-white sm:text-xl">
            We are the ACM student chapter at IIT Mandi, bringing together
            students who are curious about technology, problem-solving, and
            building meaningful things. Through learning, collaboration, and
            community, we create opportunities for students to grow together.
          </p>
        </div>
        <button
          type="button"
          className="group mt-8 inline-flex items-center gap-2 rounded-lg border border-white bg-black/30 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black/45 hover:shadow-[0_6px_16px_var(--acm-blue-shadow)]"
        >
          <span>Explore topics</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="size-4"
              fill="none"
            >
              <path
                d="M5 12h13M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

export default AboutHero;
