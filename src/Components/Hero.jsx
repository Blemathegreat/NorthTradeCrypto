import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-[#181A20] px-4 py-12 ">
      {/* Left Side: Text */}
      <div className="flex-1 mb-8 md:mb-0">
        <p className="text-xs text-[#00A3FF] font-semibold mb-2">
          YOUR MONEY, YOUR CHOICE
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Manage your money with <br />
          <span className="text-[#FFD700]">Gold</span>
          <span className="text-white font-bold">&nbsp;&amp;&nbsp;</span>
          <span className="text-[#C0C0C0] font-bold">Sliver</span>
        </h1>
        <p className="text-gray-300 mb-6 max-w-md">
          Spend and save in physical gold and silver. Buy digital currency. Earn rewards for every transaction.
        </p>
        <div className="flex gap-4">
          <button className="bg-[#00A3FF] text-white px-6 py-2 rounded font-semibold hover:bg-[#0086cc] transition">
            Join Group
          </button>
          <button className="bg-[#202E48] text-white px-6 py-2 rounded font-semibold hover:bg-[#293a5a] transition">
            About Us
          </button>
        </div>
      </div>
      {/* Right Side: Image */}
      <div className="flex-1 flex justify-end">
        <img
          src="./Rectangle 2.png"
          alt="Gold and Silver"
          className="w-[320px] h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}