import React from "react";

export default function Finances() {
  return (
    <section className="bg-[#181A20] px-4 py-10 w-full rounded-lg ">
      <h2 className="text-2xl md:text-5xl text-center font-semibold leading-normal text-white mb-10">
        Make your money work for you
      </h2>
      <div className="flex flex-col items-center">
        {/* Video Section */}
        <img
          src="./image 3.png"
          controls
          className="w-full h-auto md:w-[800px] rounded-lg shadow-lg mb-4"
          poster="/assets/crypto-assets/money-work-poster.png"
        />
        {/* Stats Section */}
      
      </div>
    </section>
  );
}