import React from "react";
import Image from "next/image";
import LIO from "../../../assets/segun-love-is-overrated.png";

const Highlight = () => {
  return (
    <div className=" flex mt-20 items-center justify-center flex-col">
      <div className="rounded-lg   overflow-hidden relative md:flex-shrink-0">
        <Image
          width={600}
          height={800}
          className="shadow-inner animate-fade backdrop-filter backdrop-blur-lg"
          alt="love is overrated"
          src={LIO}
        />
        <div className="absolute inset-0 overflow-hidden opacity-60">
          <h1 className="animate-fade text-white italic text-sm abolute uppercase ml-5 mt-5">
            Love is overrated
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
