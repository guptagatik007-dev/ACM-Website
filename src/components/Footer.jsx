import { NavLink } from "react-router-dom";

const footerGroups = [
  {
    title: "About",
    links: [
      ["About ACM", "/about-acm"],
      ["Our Chapter", "/chapter"],
      ["Leadership", "/team"],
      ["Contact Us", "/contact"],
    ],
  },
  {
    title: "Connect",
    links: [
      ["Events", "/events"],
      ["Communities", "/communities"],
      ["Get Involved", "/get-involved"],
      ["Newsletter", "/newsletter"],
    ],
  },
  {
    title: "Learn",
    links: [
      ["Digital Library", "/digital-library"],
      ["Learning Center", "/learning-center"],
      ["Publications", "/publications"],
      ["Resources", "/resources"],
    ],
  },
  {
    title: "Policies",
    links: [
      ["Privacy", "/privacy"],
      ["Accessibility", "/accessibility"],
      ["Terms of Use", "/terms"],
      ["Code of Conduct", "/code-of-conduct"],
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white/80">
      <div className="mx-[6vw] py-16 sm:mx-[20vh]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {footerGroups.map(({ title, links }) => (
            <div key={title}>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">
                {title}
              </h2>
              <ul className="mt-5 space-y-3">
                {links.map(([label, to]) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className="text-sm text-slate-500 transition-colors hover:text-(--acm-blue)"
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>ACM Student Chapter · IIT Mandi</span>
          <span>© 2026 ACM IIT Mandi. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
