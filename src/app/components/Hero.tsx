import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-cover  py-32 px-8 text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">
          You feel the pulse, you know the sway,
        </h1>
        <p className="text-lg md:text-xl mb-8 font-serif">
          Welcome to my vibe, let's light up the way. Segun Aniyi.
        </p>
        <div className="flex space-x-4">
          <Link
            href="https://fanlink.tv/loveisoverrated1"
            className="text-red-600 hover:text-red-700 font-serif animate-pulse  py-3 text-lg font-semibold transition duration-300"
          >
            Listen Now
          </Link>
          <Link
            href="/shows"
            className="font-serif text-gray-600 hover:animate-pulse  hover:text-gray-700 px-6 py-3  text-lg font-semibold transition duration-300"
          >
            Upcoming Tour Dates
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
