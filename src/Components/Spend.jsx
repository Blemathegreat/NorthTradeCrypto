import React from "react";

const features = [
  {
    icon: "./wallet 1.png",
    text: "Go borderless",
  },
  {
    icon: "./wallet 2.png",
    text: "Sky-high daily limits",
  },
  {
    icon: "./wallet 3.png",
    text: "Get paid gold and silver",
  },
];

export default function Spend() {
  return (
    <section className="bg-[#181A20] w-full  justify-between  flex flex-col md:flex-row items-center md:items-start  py-12 gap-8">
      {/* Left Side: Placeholder for image or card */}
      <div className="flex-1 flex items-center px-4  mb-8 md:mb-0">
        <div className="w-[260px] h-[350px] bg-[#202E48] rounded-lg opacity-40"></div>
      </div>
      {/* Right Side: Content */}
      <div className="flex-1 flex flex-col justify-end items-start">
        <p className="text-xs text-[#00A3FF] font-semibold mb-2 uppercase">Enter Virtual Card</p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
          Spend your gold and silver instantly
        </h2>
        <p className="text-gray-300 text-base mb-6 max-w-md">
          Protect your wealth in gold and silver – or hold digital currency – only converting your assets at the exact moment of purchase.
        </p>
        <div className="flex flex-col gap-4 w-full px-4 justify-end">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-[#202E48] rounded-lg  py-3 w-full"
            >
              <img src={item.icon} alt="" className="h-8 w-8" />
              <span className="text-white font-semibold">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}