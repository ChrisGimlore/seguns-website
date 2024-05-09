import Head from "next/head";
import Hero from "./components/Hero";
import Highlight from "./components/Highlight";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-20">
      <Head>
        <title>Segun Aniyi | Official</title>
        <meta
          name="description"
          content="Official website for Segun Aniyi - Afrobeats RnB Afropop - Love is overrated"
        />
      </Head>
      <div className="flex flex-col lg:flex-row mt-20">
        <Highlight />
        <Hero />
      </div>
    </main>
  );
}
