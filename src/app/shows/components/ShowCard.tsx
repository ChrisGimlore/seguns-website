"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Json } from "../../data/database.types";

interface Show {
  title: string;
  artist: string;
  other_artists: Json[];
  date: string;
  genres: Json[];
  ticket_link: string;
  time_start: any;
  time_finish: any;
  venue: string;
  caption: string;
  address: string;
  url: string;
  slug: string;
}

const ShowCard: React.FC<{ show: Show }> = ({ show }) => {
  const {
    title,
    artist,
    other_artists,
    date,
    genres,
    ticket_link,
    time_start,
    time_finish,
    venue,
    slug,
    url,
  } = show;

  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/shows/${slug}`)}
      className="rounded-lg justify-evenly flex m-10 flex-row w-full h-[200px] items-center cursor-pointer hover:animate-pulse"
    >
      <Image
        width={200}
        className="rounded-lg flex"
        height={200}
        src={url}
        alt={title}
      />
      <div className="p-4">
        <h3 className="font-semibold text-xl mb-2 uppercase">{title}</h3>
        <p className="text-gray-700 mb-2">Artist: {artist}</p>
        <p className="text-gray-700 mb-2">Venue: {venue}</p>
        {other_artists && (
          <p className="text-gray-700 mb-2">
            Other Artists: {other_artists.join(", ")}
          </p>
        )}
        <p className="text-gray-700 mb-2">
          Date: {new Date(date).toLocaleDateString()}
        </p>
        <p className="text-gray-700 mb-2">
          {time_start} - {time_finish}
        </p>
        <p className="text-gray-700 mb-2">
          Genres: {genres ? genres.map((tag: any) => tag).join(", ") : ""}
        </p>
        <a href={ticket_link} className="text-blue-500 hover:underline">
          Buy Tickets
        </a>
      </div>
    </div>
  );
};

export default ShowCard;
