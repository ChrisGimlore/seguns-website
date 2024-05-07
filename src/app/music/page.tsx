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
      <Head>
        <title>Segun Aniyi | Music</title>
        <meta />
      </Head>
      <div className="w-full mt-20 items-center justify-center flex">
        <h1 className="uppercase font-serif text-2xl  text-white font-bold ">
          Latest Music
        </h1>
      </div>

      <div className="flex h-full justify-evenly w-full flex-row overflow-scroll">
        <div>
          <Highlight />
          <Link href={"https://fanlink.tv/loveisoverrated1"}>
            <h1 className="uppercase place-content-center flex place-self-center font-serif text-sm cursor-pointer underline">
              Link
            </h1>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-10 items-center justify-center">
          {music.map((song: any) => {
            return (
              <Link href={song.link} key={song.title}>
                <div className="relative w-full transition ease-in-out delay-150 hover:opacity-100 duration-300 hover:-translate-y-1 hover:scale-110">
                  <Image
                    className="rounded-full border opacity-50 hover:opacity-100 "
                    width={300}
                    height={300}
                    alt={song.title}
                    src={song.img_url}
                  />
                  <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center uppercase text-sm">
                    {song.title}
                  </h1>
                  {song.other_artists &&
                    song.other_artists.map((artist: string, index: number) => {
                      return (
                        <h1
                          key={index} // Add a unique key
                          className="absolute top-3/4 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-center uppercase text-sm"
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
