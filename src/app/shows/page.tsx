import React from "react";
import ShowCard from "./components/ShowCard";
import { getAllShows } from "../lib/shows/getAllShows";
import type { Metadata } from "next";

const meta = {
  title: "Segun Aniyi | Shows",
  description:
    "Upcoming shows and tour dates for Segun Aniyi - Afrobeats RnB Afropop",
  image: "/assets/segun-love-is-overrated.png",
  url: "https://segunaniyi.com",
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
    canonical: "https://segunaniyi.com/shows",
  },
};

const page = async () => {
  const gigs = await getAllShows();

  return (
    <div className="flex max-w-full flex-col items-center mb-20 h-screen">
      <div className="flex items-center justify-center w-full mt-20 flex-col max-w-[40%]">
        <h1 className="uppercase font-serif text-2xl mt-20 text-white font-bold justify-start">
          Shows
        </h1>
        {gigs.map((show: any, index: any) => {
          return <ShowCard key={index} show={show} />;
        })}
      </div>
    </div>
  );
};

export default page;
