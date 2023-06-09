import Hero from "@/components/Hero";
import TodayChart from "@/components/TodayChart";
import { getNow } from "@/lib/astro";
import Link from "next/link";

export default async function Home() {
  const now = await getNow();
  return (
    <main className="flex min-h-screen flex-col justify-center p-4">
      <Hero />
      {/* <TodayChart data={now} /> */}
    </main>
  );
}
