import React from "react";
import { NavLink } from "react-router-dom";

const features = [
  {
    icon: "./workplace 1.png",
    title: "NSG Money platform",
    desc: "Keep track of everyday spending. Build your wealth in gold and silver.",
    link: "Learn More →",
  },
  {
    icon: "./phone 2.png",
    title: "NSG mobile app",
    desc: "Take care of your finances on the move. Buy gold, silver and digital currency.",
    link: "Learn More →",
  },
  {
    icon: "./credit 1.png",
    title: "NSG card",
    desc: "Spend gold, silver and digital currency globally with the NSG card.",
    link: "Learn More →",
  },
];

export default function BankAccount() {
  return (
    <section className="bg-[#181A20] px-10 py-12 w-full rounded-lg  flex flex-col md:flex-row items-center md:items-start">
      {/* Left Side: Text */}
      <div className="flex-1  md:py-[80px] md:mb-0 md:mr-10">
        <h2 className="text-2xl md:text-4xl w-[350px] py-[20px] font-bold text-white mb-4 leading-tight">
          More than just your <br /> average bank account
        </h2>
        <p className="text-gray-300 text-base md:text-lg max-w-md">
          Manage your spending and savings from a single account. Get digital currency. Instantly buy gold and silver at world-class industry prices.
        </p>
      </div>
      {/* Right Side: Features */}
      <div className="flex-1 flex flex-col gap-6 w-full max-w-md">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#202E48] rounded-xl p-6 flex items-center gap-6 shadow-lg"
          >
            <img src={item.icon} alt={item.title} className="h-12 w-12" />
            <div>
              <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
              <p className="text-gray-300 text-sm mb-2">{item.desc}</p>
              <NavLink
                to='/about'
                className="text-[#00A3FF] font-semibold text-sm hover:underline"
              >
                {item.link}
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}