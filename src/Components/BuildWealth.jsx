import React from "react";

const features = [
  {
    icon: "./stock 1.png",
    title: "Gold",
    desc: "Earn on every gram of gold you hold.",
    link: "Get yours →",
  },
  {
    icon: "./stock 2.png",
    title: "Silver",
    desc: "Earn on every gram of silver you hold.",
    link: "Get yours →",
  },
  {
    icon: "./stock 3.png",
    title: "NSG",
    desc: "Receive a proportionate 20% share of every fee taken by NSG.",
    link: "Get yours →",
  },
];

export default function BuildWealth() {
  return (
    <section className="bg-[#181A20] w-full   flex flex-col md:flex-row items-center md:items-start px-4 py-12 gap-8">
      {/* Left Side: Placeholder for image or card */}
      <div className="flex-1 flex items-center px-4 mb-8 md:mb-0">
        <div className="w-[400px] hidden sm:block  h-[430px] bg-[#202E48] rounded-lg opacity-40"></div>
      </div>
      {/* Right Side: Content */}
      <div className="flex-1 flex flex-col justify-end items-start">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
          Build your wealth
        </h2>
        <div className="flex flex-col gap-4 w-full justify-end">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-[#202E48] rounded-lg px-5 py-4 w-full"
            >
              <img src={item.icon} alt={item.title} className="h-10 w-10" />
              <div>
                <span className="text-white font-semibold block">{item.title}</span>
                <span className="text-gray-300 text-sm block mb-1">{item.desc}</span>
                <a href="#" className="text-[#00A3FF] text-sm font-semibold hover:underline">
                  {item.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}