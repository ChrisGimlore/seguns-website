import React from "react";
import ShowCard from "./components/ShowCard";
import { getAllShows } from "../lib/shows/getAllShows";
import type { Metadata } from "next";

const meta = {
  title: "Segun Aniyi | Shows",
  description:
    "Upcoming shows and tour dates for Segun Aniyi - Afrobeats RnB Afropop",
  image: "/assets/segun-love-is-overrated.png",
  url: "https://www.segunaniyi.com",
};

export const metadata: Metadata = {
  title: meta.title,
  description:
    "Upcoming shows and tour dates for Segun Aniyi - Afrobeats RnB Afropop, Artist from Lagos, Nigeria. Based in Glasgow, UK. Touring all over the UK.",
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
    type: "website",
    images: [
      {
        url: meta.image,
      },
    ],
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    images: meta.image,
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://www.segunaniyi.com/shows",
  },
};

const page = async () => {
  const gigs = await getAllShows();

  // Separate upcoming and past shows
  const now = Date.now();
  const upcomingShows = gigs.filter(
    (show) => show.date && new Date(show.date).getTime() > now
  );
  const pastShows = gigs.filter(
    (show) => show.date && new Date(show.date).getTime() <= now
  );

  const styles = {
    screen: `flex max-w-full flex-col items-center mb-20 h-screen overflow-scroll`,
    container: `flex w-full items-center justify-center mt-20 flex-col  max-w-[40%] overflow-visible`,
    title: `uppercase font-serif text-2xl mt-20 mb-10 text-white font-bold justify-start`,
  };

  return (
    <div className={styles.screen}>
      <div className={styles.container}>
        <h1 className={styles.title}>Shows</h1>
        <div className="gap-6 h-full flex-col">
          <h2>Upcoming Shows</h2>
          {upcomingShows.map((show: any, index: any) => (
            <ShowCard key={index} show={show} />
          ))}
          <h2>Past Shows</h2>
          {pastShows.map((show: any, index: any) => (
            <ShowCard key={index} show={show} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
