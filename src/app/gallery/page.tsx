import React from "react";
import Head from "next/head";
import Image from "next/image";
import { getAllPhotos } from "../lib/gallery/getAllPhotos";
import type { Metadata } from "next";

const meta = {
  title: "Segun Aniyi | Gallery",
  description: "Gallery of images of Segun Aniyi - Afrobeats RnB Afropop Music",
  url: "https://www.segunaniyi.com/gallery",
};

export const metadata: Metadata = {
  title: meta.title,
  description:
    "Images of Segun Aniyi - Afrobeats RnB Afropop music, Artist from Lagos, Nigeria. Based in Glasgow, UK. Touring all over the UK. Keep up to date",
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
    canonical: "https://www.segunaniyi.com/gallery",
  },
};

const page = async () => {
  const images = await getAllPhotos();
  return (
    <div className=" flex h-screen w-screen flex-col justify-between">
      <Head>
        <title>Segun Aniyi | Gallery</title>
        <meta />
      </Head>
      <div className="uppercase font-serif w-full flex mt-20 text-2xl text-white font-bold justify-center items-center">
        <h1 className="mt-20">Gallery</h1>
      </div>
      <div className="snap-mandatory sticky mt-10 h-full snap-y items-center flex-col gap-5 flex overflow-scroll">
        {images.map((image: any, index: number) => (
          <div
            key={index}
            className="snap-start md:flex-shrink-0 m-3 opacity-50 relative overflow-visible rounded-md transition ease-in-out delay-150 hover:opacity-100 hover:-translate-y-1 hover:scale-110"
          >
            <Image
              width={1000}
              height={1000}
              className="rounded-md w-full h-full object-cover sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
              alt={image.name}
              src={image.url}
            />

            <div className="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
              <h2 className="uppercase">{image.caption}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
