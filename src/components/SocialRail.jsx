const socialLinks = [
  {
    name: "Instagram",
    handle: "@your_instagram_handle",
    href: "https://www.instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <rect width="18" height="18" x="3" y="3" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "Your LinkedIn handle",
    href: "https://www.linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M5.2 8.4H2.1V21h3.1V8.4ZM3.7 3A1.8 1.8 0 1 0 3.7 6.6 1.8 1.8 0 0 0 3.7 3ZM21.9 13.8c0-3.8-2-5.6-4.7-5.6-2.2 0-3.2 1.2-3.8 2v-1.8h-3.1V21h3.1v-6.2c0-1.6.3-3.2 2.3-3.2 2 0 2 1.9 2 3.3V21h3.1l.1-7.2Z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    handle: "Your GitHub handle",
    href: "https://github.com/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.3-1.1.6-1.4-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.7-2.3 4.5-4.5 4.8.4.3.7 1 .7 1.9v2.7c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z" />
      </svg>
    ),
  },
];

const SocialRail = () => {
  return (
    <aside
      className="fixed right-0 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-end gap-2 md:flex"
      aria-label="Social media links"
    >
      {socialLinks.map(({ name, handle, href, icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${name}: ${handle}`}
          className="group flex h-16 w-14 items-center justify-center overflow-hidden rounded-l-lg border border-r-0 border-(--acm-blue-border) bg-white text-(--acm-blue) shadow-[0_4px_14px_var(--acm-blue-shadow)] transition-[width] duration-300 hover:w-64 hover:justify-start"
        >
          <span className="flex size-14 shrink-0 items-center justify-center">
            <span className="size-6">{icon}</span>
          </span>
          <span className="min-w-0 pr-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <span className="block truncate text-xs font-semibold">{handle}</span>
            <span className="block text-[11px] text-slate-400">{name}</span>
          </span>
        </a>
      ))}
    </aside>
  );
};

export default SocialRail;
