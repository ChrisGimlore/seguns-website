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
      <div className="snap-mandatory sticky mt-10 h-full snap-y items-center flex-col gap-5 flex overflow-scroll ">
        {images.map((image: any, index: number) => (
          <div
            key={index}
            className="snap-start m-3 opacity-50  transition ease-in-out delay-150 hover:opacity-100 duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <Image
              width={500}
              height={550}
              className="rounded-md "
              alt={image.name}
              key={image.url}
              src={image.url}
            />
            <h2 className="uppercase">{image.caption}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
