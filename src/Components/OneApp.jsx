import React from "react";

export default function OneApp() {
  return (
    <section className="bg-[#181A20] px-10 py-12 w-full rounded-lg  flex flex-col md:flex-row items-center md:items-start">
      {/* Left Side: Text & Cards */}
      <div className="flex-1 mb-8 md:mb-0 md:mr-10">
        <p className="text-xs text-[#00A3FF] font-semibold mb-2">MOBILE APP</p>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
          One app for everything
        </h2>
        <p className="text-gray-300 text-base md:text-lg mb-6 max-w-md">
          Keep an eye on your spending and savings, always. Get digital currency. Instantly buy gold and silver with real-time pricing.
        </p>
        <div className="flex flex-col gap-4">
          <div className="bg-[#202E48] rounded-lg p-10">
            <h3 className="text-white font-bold mb-1 text-lg">Stay connected</h3>
            <p className="text-gray-300 text-2xl font-medium text-[#FFFFFF]">
              Manage your spending alongside your investments, whenever you want.
            </p>
          </div>
          <div className="bg-[#202E48] rounded-lg p-10">
            <h3 className="text-white font-bold mb-1 text-lg">Take an opportunity</h3>
            <p className="text-gray-300 text-2xl font-medium text-[#FFFFFF]">
              Buy gold, silver, and digital currency in seconds, 24/7, at your own price.
            </p>
          </div>
        </div>
      </div>
      {/* Right Side: Image */}
      <div className="flex-1 flex h-[550px] justify-end">
        <img
          src="./image.png"
          alt="Gold App"
          className="w-[320px] object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}