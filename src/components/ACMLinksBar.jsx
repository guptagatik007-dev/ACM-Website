const acmLinks = [
  { label: "About ACM", href: "https://www.acm.org/about-acm" },
  { label: "Chapters", href: "https://www.acm.org/chapters" },
  { label: "Events", href: "https://www.acm.org/events" },
  { label: "Education", href: "https://www.acm.org/education" },
  { label: "Publications", href: "https://www.acm.org/publications" },
  { label: "Resources", href: "https://www.acm.org/resources" },
];

const ACMLinksBar = () => {
  return (
    <nav
      className="border-b border-slate-200 bg-slate-50"
      aria-label="ACM links"
    >
      <div className="mx-auto flex max-w-7xl overflow-x-auto px-6">
        <ul className="flex min-w-max items-center gap-8 py-3 text-sm font-medium text-slate-500">
          {acmLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-(--acm-blue)"
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
