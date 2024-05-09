import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-cover  py-32 px-8 text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">
          Welcome to the world of Segun Aniyi
        </h1>
        <p className="text-lg md:text-xl mb-8 font-serif">
          Discover the soulful melodies and captivating rhythms of a rising star
        </p>
        <div className="flex space-x-4">
          <Link
            href="https://fanlink.tv/loveisoverrated1"
            className="text-red-800 hover:text-red-900 font-serif animate-pulse  px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition duration-300"
          >
            Listen Now
          </Link>
          <Link
            href="/shows"
            className="font-serif text-gray-700 hover:animate-pulse  hover:text-gray-800 px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition duration-300"
          >
            Upcoming Tour Dates
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
