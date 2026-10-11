import ResourceCards from "./ResourceCards";

const TopicCards = () => {
  return (
    <section
      id="topics"
      className="mx-[6vw] pb-24 sm:mx-[20vh] sm:pb-32"
      aria-labelledby="topics-title"
    >
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-(--acm-blue)">
          Learn and build
        </p>
        <h2
          id="topics-title"
          className="mt-3 text-3xl font-semibold tracking-tight text-black sm:text-4xl"
        >
          Explore topics
        </h2>
      </div>

      <ResourceCards compact />
    </section>
  );
};

export default TopicCards;
