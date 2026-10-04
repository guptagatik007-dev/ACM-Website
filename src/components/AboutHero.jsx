const AboutHero = () => {
  return (
    <section
      id="about"
      className="mx-[6vw] m-14 max-w-none rounded-3xl border-(--acm-blue) bg-white/55 px-6 py-24 shadow-[0_12px_32px_var(--acm-blue-shadow)] backdrop-blur-xl sm:mx-[20vh] sm:py-32"
      aria-labelledby="about-title"
    >
      <div className="max-w-3xl m-5">
        <h1
          id="about-title"
          className="text-5xl font-semibold tracking-tight text-black sm:text-7xl"
        >
          About Us
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500 sm:text-xl">
          We are the ACM student chapter at IIT Mandi, bringing together
          students who are curious about technology, problem-solving, and
          building meaningful things. Through learning, collaboration, and
          community, we create opportunities for students to grow together.
        </p>
        <button
          type="button"
          className="group mt-8 inline-flex items-center gap-2 rounded-lg border border-(--acm-blue) bg-(--acm-blue)/10 px-4 py-2 text-sm font-medium text-(--acm-blue) transition-all duration-300 hover:-translate-y-1 hover:bg-(--acm-blue)/15 hover:shadow-[0_6px_16px_var(--acm-blue-shadow)]"
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
