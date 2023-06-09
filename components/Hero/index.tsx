import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col mb-8 justify-center min-h-[50vh]">
      <h1 className="text-6xl uppercase tracking-wide font-display text-accent-300">
        Stars
      </h1>
      <p className="mb-2 text-2xl font-serif text-primary-300">
        the astrology network
      </p>
      <p className="mb-2">
        Create natal charts, view upcoming astrological events and personalized
        horoscopes. <br />
        Tap in to your guides and connect with others through{" "}
        <em className="text-accent-300 tracking-wide">Stars</em>
      </p>
      <Link
        className="bg-secondary-500 w-fit px-4 py-2 mt-2 transition hover:bg-secondary-600 active:bg-secondary-700"
        href="/sign-in"
      >
        Sign In
      </Link>
    </section>
  );
}
