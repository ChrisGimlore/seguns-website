import Head from "next/head";
import React from "react";
import Highlight from "../components/Highlight";
import Link from "next/link";
import Image from "next/image";
import { getAllMusic } from "../lib/music/getAllMusic";
import type { Metadata } from "next";

const meta = {
  title: "Segun Aniyi | Music",
  description:
    "Music collection and discography of Segun Aniyi - Afrobeats RnB Afropop Music - links to his spotify, apple music, deezer, youtube and more",
  url: "https://www.segunaniyi.com/music",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
    type: "website",
  },
  twitter: {
    title: meta.title,
    description: meta.description,
  },
  alternates: {
    canonical: meta.url,
  },
};
const page = async () => {
  const music = await getAllMusic();

  return (
    <div className="flex h-screen w-screen items-center justify-center flex-col mt-10">
      <div className="w-full mt-20 items-center justify-center flex">
        <h1 className="uppercase font-serif text-2xl  text-white font-bold ">
          Latest Music
        </h1>
      </div>

      <div className="flex h-full flex-col lg:justify-evenly w-full lg:flex-col overflow-scroll">
        <div>
          <Highlight />
          <Link href={"https://fanlink.tv/loveisoverrated1"}>
            <h1 className="uppercase place-content-center flex place-self-center font-serif text-sm cursor-pointer underline">
              Link
            </h1>
          </Link>
        </div>
        <div className="lg:grid lg:grid-cols-2 flex-col gap-10 h-full snap-mandatory w-full overflow-scroll items-center justify-center">
          {music.map((song: any) => {
            return (
              <Link
                href={song.link}
                key={song.title}
                className="items-center justify-center flex m-10 snap-start snap-y"
              >
                <div className="relative w-full transition ease-in-out delay-150 hover:opacity-100 duration-300 hover:-translate-y-1 hover:scale-110">
                  <div className="flex items-center justify-center w-full">
                    <div className="md:shrink-0">
                      <Image
                        className="rounded-full border opacity-50 hover:opacity-100 h-full w-full place-self-center md:h-full md:w-48 lg:w-full lg:h-200"
                        width={300}
                        height={300}
                        alt={song.title}
                        src={song.img_url}
                      />
                      <h1 className="absolute inset-0 flex items-center justify-center uppercase text-sm text-white pointer-events-none">
                        {song.title}
                      </h1>
                    </div>
                  </div>

                  {song.other_artists &&
                    song.other_artists.map((artist: string, index: number) => {
                      return (
                        <h1
                          key={index}
                          className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center uppercase text-sm md:hidden"
                        >
                          With {artist}
                        </h1>
                      );
                    })}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
