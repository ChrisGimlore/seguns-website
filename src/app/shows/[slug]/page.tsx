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
    url: `https://www.segunaniyi.com/shows/${slug}`,
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
      canonical: `https://www.segunaniyi.com/shows/${slug}`,
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

  const styles = {
    screen: `flex max-w-full flex-col items-center mb-20 max-h-full`,
    container: `flex items-center justify-center w-full mt-20 flex-col max-w-[40%]`,
  };

  const genres = Array.isArray(show.genres) ? show.genres : [];

  const isUpcoming =
    show.date !== null ? new Date(show.date) > new Date() : false;

  const otherArtists = Array.isArray(show.other_artists)
    ? (show.other_artists as string[])
    : [];
  return (
    <div className={styles.screen}>
      <div className={styles.container}>
        <div key={result} className="flex max-w-md mx-auto mt-20 md:max-w-2xl">
          <div className="md:flex gap-5">
            <div className="md:shrink-0 mb-5">
              <Image
                alt={result}
                className="rounded-lg h-full w-full md:h-full md:w-48 lg:w-full lg:h-full"
                width={200}
                height={200}
                src={show.url || Segun}
              />
            </div>
            <div className="gap-2 flex flex-col md:h-full lg:h-full">
              <div className="text-xs text-gray-500">Title:</div>
              <h1 style={{ whiteSpace: "nowrap" }}>{show.caption}</h1>

              <div className="text-xs text-gray-500">Artist:</div>
              <p style={{ whiteSpace: "nowrap" }}>{show.artist}</p>

              {otherArtists && (
                <>
                  <div className="text-xs text-gray-500">Other Artists:</div>
                  <p style={{ whiteSpace: "nowrap" }}>{otherArtists}</p>
                </>
              )}

              <div className="text-xs text-gray-500">Venue:</div>
              <p style={{ whiteSpace: "nowrap" }}>{show.venue}</p>

              <div className="text-xs text-gray-500">Address:</div>
              <p style={{ whiteSpace: "nowrap" }}>{show.address}</p>

              <div className="text-xs text-gray-500">Date:</div>
              <p style={{ whiteSpace: "nowrap" }}>
                {show.date
                  ? new Date(show.date).toLocaleDateString()
                  : "Date not available"}
              </p>

              <div className="text-xs text-gray-500">Time:</div>
              <p style={{ whiteSpace: "nowrap" }}>
                {show.time_start} - {show.time_finish}
              </p>

              <div className="text-xs text-gray-500">Genre:</div>
              <p style={{ whiteSpace: "nowrap" }}>{genres.join(", ")}</p>

              {/* Render Buy Tickets button only if show is upcoming */}
              {isUpcoming && (
                <Link href={show.ticket_link || "/shows"}>
                  <button className="rounded-lg h-[30px] w-[100px] bg-red-700 text-white hover:bg-gray-800 animate-pulse">
                    Buy Tickets
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
