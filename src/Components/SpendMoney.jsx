import React from "react";

const features = [
  {
    icon: "./briefcase 1.png",
    title: "No hidden fees",
    desc: "A first for Asia. Any amount, sent any time to anywhere in the world.",
  },
  {
    icon: "./briefcase 2.png",
    title: "Arrives in seconds",
    desc: "Watch payments in gold or silver, cleared within seconds, 24/7.",
  },
  {
    icon: "./briefcase 3.png",
    title: "No mark-ups – ever",
    desc: "The same for client, whether weekday or weekend, day or night.",
  },
];

export default function SpendMoney() {
  return (
    <section className="bg-[#181A20] w-full rounded-lg  flex flex-col md:flex-row items-center md:items-start px-4 py-12 gap-8">
      {/* Left Side: Content */}
      <div className="flex-1 flex flex-col items-start">
        <p className="text-xs text-[#00A3FF] font-semibold mb-2 uppercase">Remittance</p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
          Send money globally in seconds
        </h2>
        <p className="text-gray-300 text-base mb-6 max-w-md">
          Send our gold and silver-based digital currencies to friends and family around the globe, with a low, flat fee. They’ll get it in 2–3 seconds – every time.
        </p>
        <div className="flex flex-col gap-4 w-full max-w-md">
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
      {/* Right Side: Placeholder for image or card */}
      <div className="flex-1 flex items-center justify-end mt-8 md:mt-0">
        <div className="w-[400px] h-[500px] bg-[#202E48] rounded-lg opacity-40"></div>
      </div>
    </section>
  );
}