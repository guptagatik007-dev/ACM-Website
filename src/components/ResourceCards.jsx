import useResources from "../hooks/useResources";

const ResourceCards = ({ compact = false }) => {
  const { resources, status, error } = useResources();

  if (status === "loading") {
    return (
      <p className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-500">
        Loading resources...
      </p>
    );
  }

  if (status === "error") {
    return (
      <p
        role="alert"
        className="rounded-xl border border-red-200 bg-red-50 p-6 text-sm text-red-700"
      >
        We could not load the resources. {error}
      </p>
    );
  }

  return (
    <div className={`grid gap-4 ${compact ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"}`}>
      {resources.map(({ id, title, description, category, url }) => (
        <article
          key={id}
          className="group rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-(--acm-blue) hover:shadow-[0_8px_20px_var(--acm-blue-shadow)]"
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="rounded-full bg-(--acm-blue)/10 px-3 py-1 text-xs font-semibold text-(--acm-blue)">
              {category}
            </span>
            <span className="text-slate-300 transition-colors group-hover:text-(--acm-blue)">
              ↗
            </span>
          </div>
          <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block text-sm font-semibold text-(--acm-blue) hover:underline"
          >
            Visit resource
          </a>
        </article>
      ))}
    </div>
  );
};

export default ResourceCards;
