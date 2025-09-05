import React from "react";
import { NavLink } from "react-router-dom";

const offerings = [
  {
    label: "INVESTOR",
    title: "Our offering for gold and silver investors.",
    link: "Learn more",
  },
  {
    label: "TRADER",
    title: "Our offering for professional traders.",
    link: "Learn more",
  },
];

export default function OfferingCards() {
  return (
    <section className="bg-[#181A20] w-full rounded-lg  px-4 py-20">
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {offerings.map((item, idx) => (
          <div
            key={idx}
            className="flex-1 bg-transparent flex flex-col justify-center items-start"
          >
            <span className="text-xs text-[#00A3FF] font-semibold mb-2 uppercase tracking-wide">
              {item.label}
            </span>
            <h2 className="text-2xl w-[300px] md:text-3xl font-bold text-white mb-2 leading-tight">
              {item.title}
            </h2>
            <NavLink
              to='/roadmap'
              className="text-gray-400 text-sm font-medium hover:underline"
            >
              {item.link}
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  );
}