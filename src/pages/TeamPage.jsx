const teamMembers = [
  {
    name: "Aarav Sharma",
    role: "Chapter Chair",
    position: "Executive Committee",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Ishita Verma",
    role: "Vice Chair",
    position: "Executive Committee",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Rohan Kapoor",
    role: "Secretary",
    position: "Executive Committee",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Meera Nair",
    role: "Treasurer",
    position: "Executive Committee",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Kabir Singh",
    role: "Technical Lead",
    position: "Core Team",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Ananya Rao",
    role: "Design Lead",
    position: "Core Team",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Vikram Joshi",
    role: "Events Lead",
    position: "Core Team",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Diya Menon",
    role: "Outreach Lead",
    position: "Core Team",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=85",
  },
];

const TeamPage = () => {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <header className="mb-12 text-center sm:mb-16">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--acm-blue)">
          ACM Student Chapter · IIT Mandi
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
          Meet our team
        </h1>
      </header>

      <section
        className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
        aria-label="ACM IIT Mandi team members"
      >
        {teamMembers.map(({ name, role, position, image }) => (
          <article key={name} className="group">
            <div className="aspect-4/5 overflow-hidden rounded-2xl bg-slate-100 shadow-[0_12px_28px_var(--acm-blue-shadow)]">
              <img
                src={image}
                alt={name}
                className="size-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-5 border-l-2 border-(--acm-blue) pl-4">
              <h2 className="text-xl font-semibold text-slate-900">{name}</h2>
              <p className="mt-1 text-sm font-medium text-(--acm-blue)">{role}</p>
              <p className="mt-1 text-sm text-slate-500">{position}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default TeamPage;
