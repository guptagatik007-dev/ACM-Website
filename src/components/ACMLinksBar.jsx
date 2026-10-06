const acmLinks = [
  { label: "About ACM", href: "/about-acm" },
  { label: "Chapters", href: "/chapters" },
  { label: "Events", href: "/events" },
  { label: "Education", href: "/education" },
  { label: "Publications", href: "/publications" },
  { label: "Resources", href: "/resources" },
];

const ACMLinksBar = () => {
  return (
    <nav
      className="border-b border-slate-700 bg-[#071f2c]"
      aria-label="ACM links"
    >
      <div className="mx-auto flex max-w-7xl overflow-x-auto px-6">
        <ul className="flex min-w-max items-center gap-8 py-3 text-sm font-medium text-slate-300">
          {acmLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="transition-colors hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default ACMLinksBar;
