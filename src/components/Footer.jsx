const footerGroups = [
  {
    title: "About",
    links: ["About ACM", "Our Chapter", "Leadership", "Contact Us"],
  },
  {
    title: "Connect",
    links: ["Events", "Communities", "Get Involved", "Newsletter"],
  },
  {
    title: "Learn",
    links: ["Digital Library", "Learning Center", "Publications", "Resources"],
  },
  {
    title: "Policies",
    links: ["Privacy", "Accessibility", "Terms of Use", "Code of Conduct"],
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
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 transition-colors hover:text-(--acm-blue)"
                    >
                      {link}
                    </a>
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
