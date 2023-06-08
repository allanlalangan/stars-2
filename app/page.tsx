import TodayChart from "@/components/TodayChart";
import Link from "next/link";

import { getNow } from "@/lib/astro";

export default async function Home() {
  const now = await getNow();
  return (
    <main className="flex min-h-screen flex-col justify-center p-4">
      <h1 className="text-6xl uppercase tracking-wide font-display text-accent-400">
        Stars
      </h1>
      <p className="mb-2 text-2xl font-serif text-secondary-500">
        The Astrology social network
      </p>
      <p className="mb-2">
        Create personalized natal charts and view upcoming astrological events.
        Tap in to your guides with <em>Stars</em>.
      </p>
      <Link
        className="bg-primary-300 w-fit px-4 py-2 mt-2 hover:text-accent-300 transition hover:bg-primary-400 active:bg-primary-500"
        href="/sign-in"
      >
        Sign In
      </Link>
      <TodayChart now={now.data} />
    </main>
  );
}
