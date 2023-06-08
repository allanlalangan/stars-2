import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center p-4">
      <h1 className="text-4xl uppercase">Stars</h1>
      <p className="mb-2">
        The Astrology social network. Create personalized natal charts and view
        upcoming astrological events. Tap in to your guides with Stars.
      </p>
      <Link className="bg-primary-500 w-fit py-2 px-4" href="/sign-in">
        Sign In
      </Link>
    </main>
  );
}
