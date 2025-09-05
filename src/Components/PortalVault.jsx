import React from "react";

const features = [
  {
    icon: "./lock 1.png",
    title: "Shielded security",
    desc: "All data is encrypted and only accessible by you, anytime, safely.",
  },
  {
    icon: "./lock 2.png",
    title: "One-tap!",
    desc: "Deposit or withdraw, you control your vault whenever you want.",
  },
];

export default function PortableVault() {
  return (
    <section className="bg-[#181A20] w-full rounded-lg  flex flex-col md:flex-row justify-between items-center md:items-start px-4 py-12 gap-8">
      {/* Left Side: Placeholder for image or card */}
      <div className="flex-1 flex items-center px-4 mb-8 md:mb-0">
        <div className="w-[400px] h-[400px] bg-[#202E48] rounded-lg opacity-40"></div>
      </div>
      {/* Right Side: Content */}
      <div className="flex-1 flex flex-col items-start">
        <p className="text-xs text-[#00A3FF] font-semibold mb-2 uppercase">Vault & Security</p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
          Your portable vault
        </h2>
        <p className="text-gray-300 text-base mb-6 max-w-md">
          Keep all of your digital assets offline, easy to reach & only in your pocket with maximum confidence.
        </p>
        <div className="flex flex-col gap-4 w-full justify-end">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-[#202E48] rounded-lg px-5 py-3 w-full"
            >
              <img src={item.icon} alt="" className="h-8 w-8" />
              <div>
                <span className="text-white font-semibold block">{item.title}</span>
                <span className="text-gray-300 text-sm">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}