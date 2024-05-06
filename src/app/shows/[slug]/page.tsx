import React from "react";
import Image from "next/image";
import Link from "next/link";
import Segun from "../../../../assets/Segun.png";
import { getAllShows } from "@/app/lib/shows/getAllShows";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const gigs = await getAllShows();

  const show: any = gigs.find((gig) => gig.slug === slug);

  const genres = Array.isArray(show.genres) ? show.genres : [];

  const otherArtists = Array.isArray(show.other_artists)
    ? (show.other_artists as string[])
    : [];

  const meta = {
    title: `Segun Aniyi | ${show.title}`,
    description: `Segun Aniyi - ${show.title} - ${genres.join(", ")}, with ${
      otherArtists && otherArtists.join(", ")
    } at ${show.venue}, address ${show.address} on ${
      show.date
    }. Buy tickets here.`,
    image: "/assets/segun-love-is-overrated.png",
    url: `https://segunaniyi.com/shows/${slug}`,
  };

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.url,
      type: "article",
      images: previousImages,
    },
    twitter: {
      title: meta.title,
      description: meta.description,
    },
    alternates: {
      canonical: `https://segunaniyi.com/shows/${slug}`,
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const gigs = await getAllShows();
  const result = params.slug;

  // Find the gig matching the slug
  const show = gigs.find((gig) => gig.slug === result);

  if (!show) {
    return (
      <div className="h-screen w-screen flex">
        No upcoming shows at the moment
      </div>
    );
  }

  const genres = Array.isArray(show.genres) ? show.genres : [];
  // For other_artists
  const otherArtists = Array.isArray(show.other_artists)
    ? (show.other_artists as string[])
    : [];

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div key={result} className="flex flex-row gap-6">
        <Image
          alt="result"
          className="rounded-lg"
          width={400}
          height={400}
          src={show.url || Segun}
        />
        <div className="gap-2 flex flex-col">
          <div className="text-xs text-gray-500">Title:</div>
          <h1>{result}</h1>

          <div className="text-xs text-gray-500">Artist:</div>
          <p>{show.artist}</p>

          <div className="text-xs text-gray-500">Venue:</div>
          <p>{show.venue}</p>

          <div className="text-xs text-gray-500">Address:</div>
          <p>{show.address}</p>

          <div className="text-xs text-gray-500">Date:</div>
          <p>
            {show.date
              ? new Date(show.date).toLocaleDateString()
              : "Date not available"}
          </p>

          <div className="text-xs text-gray-500">Time:</div>
          <p>
            {show.time_start} - {show.time_finish}
          </p>

          <div className="text-xs text-gray-500">Genre:</div>
          <p>{genres.join(", ")}</p>

          <div className="text-xs text-gray-500">Buy Tickets:</div>
          <Link href={show.ticket_link || "/shows"}>
            <button className="rounded-lg h-[30px] w-[100px] bg-red-700 text-white hover:bg-gray-800 animate-pulse">
              Buy Tickets
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}