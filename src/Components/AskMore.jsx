import React from "react";
import { NavLink } from "react-router-dom";

const features = [
  {
    icon: "./shape 1.png",
    title: "Gold and silver",
    desc: "Spend and save in physical gold and silver.",
    link: "Learn more →",
  },
  {
    icon: "./shape 2.png",
    title: "Earn",
    desc: "Earn profit, rewards. Can be staked into account.",
    link: "Learn more →",
  },
  {
    icon: "./shape 3.png",
    title: "NSG Card",
    desc: "Use your card for spending and rewards.",
    link: "Learn more →",
  },
  {
    icon: "./shape 4.png",
    title: "Trust and security",
    desc: "Your assets are safe and protected.",
    link: "Learn more →",
  },
];

export default function AskMore() {
  return (
    <section className="bg-[#181A20] px-20 py-10 w-full  ">
      <h2 className="text-2xl md:text-4xl text-center font-semibold text-white mb-10">
        Ask a little more from your money
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-center">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#202E48] rounded-xl p-6 flex flex-col gap-2 items-start relative shadow-lg"
          >
            <img src={item.icon} alt={item.title} className="h-10 w-10 mb-4 absolute -top-4 -right-2" />
            <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-gray-300 mb-6 text-sm">{item.desc}</p>
            <NavLink
              to='/roadmap'
              className="text-[#00A3FF] font-semibold text-sm flex items-center hover:underline"
            >
              {item.link}
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  );
}