import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Our Team", to: "/team" },
  { label: "Contact Us", to: "/contact" },
];

const Navbar = () => {
  return (
    <header className="border-b border-(--acm-blue-border) bg-white shadow-[0_4px_16px_var(--acm-blue-shadow)]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-0"
        aria-label="Main navigation"
      >
        <NavLink to="/" className="flex items-center" aria-label="ACM home">
          <img
            src="/acm_logo.svg"
            alt="ACM"
            className="h-20 w-auto object-contain"
          />
        </NavLink>

        <div className="flex min-w-0 flex-1 items-center gap-8 pl-8">
          <form
            className="hidden min-w-0 flex-1 items-center rounded-full border-2 border-slate-300 bg-white px-5 py-3 sm:flex"
            role="search"
          >
            <input
              type="search"
              placeholder="Search for a topic"
              aria-label="Search for a topic"
              className="min-w-0 flex-1 bg-transparent text-base text-slate-700 outline-none placeholder:text-slate-400"
            />
            <button
              type="submit"
              aria-label="Search"
              className="text-slate-400 transition-colors hover:text-(--acm-blue)"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6" fill="none">
                <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="m16 16 4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </form>

          <ul className="flex items-center gap-7 text-base font-medium text-slate-600">
            {navItems.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `transition-colors hover:text-(--acm-blue) ${
                      isActive ? "text-(--acm-blue)" : ""
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
