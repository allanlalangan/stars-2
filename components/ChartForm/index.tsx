export default function ChartForm() {
  return (
    <>
      <h2 className="font-serif text-2xl dark:text-primary-300 text-primary-700 mb-2">
        Generate Natal Chart
      </h2>
      <form className="dark:bg-base-700 w-full xl:w-1/3 p-8">
        <div className="flex flex-col mb-8">
          <label
            className="text-sm uppercase tracking-wide pb-1.5 dark:text-tertiary-200"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            className="w-full p-2 border-b autofill:bg-transparent dark:bg-base-800/50 dark:border-primary-400/50 dark:focus:border-primary-400 outline-none transition"
            type="text"
          />
        </div>
        <fieldset className="flex gap-2 mb-8">
          <div className="flex w-1/2 flex-col">
            <label
              className="text-sm uppercase tracking-wide pb-1.5 dark:text-tertiary-200"
              htmlFor="birthDate"
            >
              Birth Date
            </label>
            <input
              id="birthDate"
              className="w-full p-2 border-b autofill:border-accent-400 dark:bg-base-800/50 dark:border-primary-400/50 dark:focus:border-primary-400 outline-none transition da"
              type="date"
            />
          </div>
          <div className="flex w-1/2 flex-col">
            <label
              className="text-sm uppercase tracking-wide pb-1.5 dark:text-tertiary-200"
              htmlFor="birthTime"
            >
              Birth Time
            </label>
            <input
              id="birthTime"
              name="birthTime"
              className="w-full p-2 border-b autofill:border-accent-400 dark:bg-base-800/50 dark:border-primary-400/50 dark:focus:border-primary-400 outline-none transition"
              type="time"
            />
          </div>
        </fieldset>
        <div className="flex flex-col mb-8">
          <label
            className="text-sm uppercase tracking-wide pb-1.5 dark:text-tertiary-200"
            htmlFor="birthPlace"
          >
            Place of Birth
          </label>
          <input
            id="birthPlace"
            name="birthPlace"
            className="w-full p-2 border-b autofill:border-accent-400 dark:bg-base-800/50 dark:border-primary-400/50 dark:focus:border-primary-400 outline-none transition"
            type="text"
          />
        </div>
        <button className="dark:bg-primary-600 w-full p-2 mt-2 transition dark:hover:bg-primary-700 dark:active:bg-primary-800 dark:text-base-50">
          Create Chart
        </button>
      </form>
    </>
  );
}
