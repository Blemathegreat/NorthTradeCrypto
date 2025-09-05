import React from "react";

export default function AboutUs() {
  return (
    <section
      className="relative w-full rounded-lg  flex px-10 flex-col md:flex-row items-center md:items-start overflow-hidden"
      style={{
        backgroundImage: "url('./image 5.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0  bg-opacity-100"></div>
      {/* Content */}
      <div className="relative flex-1 px-4 py-12 md:pl-12 z-10 flex flex-col justify-center">
        <h2 className="text-[#00A3FF]  text-lg font-bold mb-2">About Us</h2>
        <p className="text-[#FFFFFF] text-sm mb-4 max-w-md">
          North Star Group provides a secure platform to buy and save in physical gold and silver. NSG offers digital currency, rewards, and a reliable system for managing your finances.
        </p>
        <button className="bg-[#00A3FF] text-white px-6 py-2 rounded font-semibold hover:bg-[#0086cc] transition w-fit">
          Read more
        </button>
      </div>
      {/* Stats */}
      <div className="relative flex-1 px-4 py-12 md:pr-12 z-10 flex flex-col gap-8 items-end">
        <div>
          <span className="text-3xl font-bold text-[#00A3FF]">500+</span>
          <p className="text-gray-300 text-sm">Over 500 accounts for NSG</p>
        </div>
        <div>
          <span className="text-2xl font-bold text-[#00A3FF]">40+</span>
          <p className="text-gray-300 text-sm">Over 40 locations for NSG</p>
        </div>
        <div>
          <span className="text-2xl font-bold text-[#00A3FF]">24/7</span>
          <p className="text-gray-300 text-sm">24/7 help service for all customers</p>
        </div>
      </div>
    </section>
  );
}