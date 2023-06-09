import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col mb-8 justify-center min-h-[50vh]">
      <h1 className="text-6xl uppercase tracking-wide font-display text-accent-400">
        Stars
      </h1>
      <p className="mb-2 text-2xl font-serif text-secondary-400">
        the astrology network
      </p>
      <p className="mb-2">
        Create natal charts, view upcoming astrological events and personalized
        horoscopes. <br />
        Tap in to your guides and connect with others through{" "}
        <em className="text-accent-400">Stars</em>.
      </p>
      <Link
        className="bg-primary-300 w-fit px-4 py-2 mt-2 hover:text-accent-300 transition hover:bg-primary-400 active:bg-primary-500"
        href="/sign-in"
      >
        Sign In
      </Link>
    </section>
  );
}
