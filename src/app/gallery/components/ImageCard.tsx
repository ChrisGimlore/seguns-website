import React from "react";
import Head from "next/head";
import Image from "next/image";

interface ImageProps {
  name: string;
  url: string;
  caption: string;
}

const ImageCard = ({ image }: { image: ImageProps }) => {
  return (
    <div className="h-full snap-center flex flex-col flex-shrink">
      <Image
        alt={image.name}
        key={image.url}
        src={image.url}
        width={800}
        height={800}
        className="rounded-lg"
      />
      <h1>{image.caption}</h1>
    </div>
  );
};

export default ImageCard;
