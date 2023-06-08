import TodayChart from "@/components/TodayChart";
import Link from "next/link";

import { getNow } from "@/lib/astro";
import Hero from "@/components/Hero";

export default async function Home() {
  const now = await getNow();
  return (
    <main className="flex min-h-screen flex-col justify-center p-4">
      <Hero />
      <TodayChart now={now.data} />
    </main>
  );
}
