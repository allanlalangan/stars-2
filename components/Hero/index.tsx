import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col mb-8 justify-center min-h-[50vh]">
      <h1 className="text-6xl uppercase tracking-wide font-display dark:text-tertiary-300 text-primary-600">
        Stars
      </h1>
      <p className="mb-2 text-2xl font-serif dark:text-primary-300">
        the astrology network
      </p>
      <p className="mb-2">
        Create natal charts, view upcoming astrological events and personalized
        horoscopes. <br />
        Tap in to your guides and connect with others through{" "}
        <em className="dark:text-tertiary-300 tracking-wide text-primary-700">
          Stars
        </em>
      </p>
      <Link
        className="dark:bg-transparent dark:border dark:border-tertiary-200 shadow-md shadow-tertiary-200/10 hover:shadow-tertiary-200/20 bg-secondary-300 w-fit px-4 pt-2 pb-2.5 mt-2 transition hover:bg-secondary-400 active:bg-secondary-500 text-base-50"
        href="/sign-in"
      >
        Sign In
      </Link>
    </section>
  );
}
