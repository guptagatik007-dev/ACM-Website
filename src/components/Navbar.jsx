import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Our Team", to: "/team" },
  { label: "Contact Us", to: "/contact" },
];

const Navbar = () => {
  return (
    <header className="border-b border-blue-50 bg-white shadow-[0_4px_16px_rgba(37,99,235,0.08)]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <NavLink
          to="/"
          className="text-lg font-semibold tracking-tight text-blue-700"
        >
          ACM
        </NavLink>

        <ul className="flex items-center gap-6 text-sm font-medium text-slate-600">
          {navItems.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `transition-colors hover:text-blue-600 ${
                    isActive ? "text-blue-600" : ""
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
