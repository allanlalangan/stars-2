import Hero from "@/components/Hero";
import TodayChart from "@/components/TodayChart";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center p-4">
      <Hero />
      <TodayChart />
    </main>
  );
}
