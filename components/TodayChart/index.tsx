export default function TodayChart() {
  const today = new Date();
  return (
    <section className="flex flex-col mb-12">
      <h2 className="flex items-baseline">
        <span className="font-serif text-2xl dark:text-primary-300 text-primary-700">
          The Sky Today
        </span>
        <span className="mx-2 font-serif dark:text-base-300 text-base-700">
          |
        </span>
        <span className="font-serif dark:text-base-300 text-sm text-base-700">
          {today.toDateString()}
        </span>
      </h2>
      <span className="dark:text-accent-300 text-secondary-500 italic">
        API coming soon.
      </span>
    </section>
  );
}
