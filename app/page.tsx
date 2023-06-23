import ChartForm from "@/components/ChartForm";
import Hero from "@/components/Hero";
import TodayChart from "@/components/TodayChart";
import { getNow } from "@/lib/astro";

export default async function Home() {
  const resp = await getNow();
  return (
    <main className="flex min-h-screen flex-col justify-center p-4">
      <Hero />
      <TodayChart data={resp.data} />
      {/* <ChartForm /> */}
    </main>
  );
}
