import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-[#181A20] flex flex-col items-center px-2 py-8">
      {/* Header */}
      <div className="w-full max-w-2xl mx-auto text-center py-10 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          About <span className="text-[#00A3FF]">NSG</span>
        </h1>
        <p className="text-gray-400 text-sm md:text-base">
          On a mission to revolutionize the growth of precious metals in investable markets.
        </p>
      </div>

      {/* Vision & Mission Section */}
      <div className="w-full max-w-3xl bg-[#202E48] rounded-lg px-6 py-8 mb-10 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="md:w-1/4 flex flex-col gap-4">
          <span className="text-[#00A3FF] font-semibold text-sm">Our Vision</span>
          <span className="text-gray-400 text-sm">Our Mission</span>
          <span className="text-gray-400 text-sm">Board & Leadership</span>
        </div>
        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="">
            <h3 className="text-white font-bold text-lg  pb-5 ">Our Mission</h3>
            
              <p className="text-gray-300 text-xl leading-[1.7]">North Star Group shares a vision of a world where money is honest, fair 
                and backed by a true store of value, within a system designed to reward everyone who participates.
</p>
                <p className="text-gray-300 text-xl leading-[1.7] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, lorem leo facilisis
              turpis, nec dictum erat urna a augue. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Etiam euismod
              augue nec massa dictum, nec cursus odio dictum. Etiam euismod augue nec massa dictum,
              nec cursus odio dictum.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg  pb-5 ">Lorem Ipsum</h3>
            <p className="text-gray-300 text-xl leading-[1.75]">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but also the
                 leap into electronic typesetting, remaining essentially unchanged.
               It was popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop publishing
                 software like Aldus PageMaker including versions of Lorem Ipsum.
                  Lorem Ipsum has been the industry's standard dummy text ever since 
                  the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic

               typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>

      {/* Industry Leaders Section */}
      <div className="w-full max-w-2xl mx-auto text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Industry Leaders in Fully Allocated Precious Metals
        </h2>
        <p className="text-gray-300 text-sm md:text-xl leading-[1.7]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ante facilisis, efficitur nulla vitae, dictum erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Etiam euismod augue nec massa dictum, nec cursus odio dictum.
        </p>
      </div>

      {/* Info Cards */}
      <div className="w-full max-w-3xl flex flex-col md:flex-row gap-6 justify-center mb-4">
        {/* Card 1 */}
        <div className="flex-1 bg-[#202E48] rounded-lg px-6 py-6 flex flex-col items-center text-center">
          <div className="bg-[#22314c] rounded-full p-3 mb-3">
            <svg width="28" height="28" fill="none" stroke="#00A3FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 17v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2" />
              <polyline points="7 11 12 6 17 11" />
              <line x1="12" y1="6" x2="12" y2="18" />
            </svg>
          </div>
          <h4 className="text-white font-bold mb-1">Name and address</h4>
          <p className="text-gray-400 text-xs">NSG Group, 123 Main Street, City, Country</p>
        </div>
        {/* Card 2 */}
        <div className="flex-1 bg-[#202E48] rounded-lg px-6 py-6 flex flex-col items-center text-center">
          <div className="bg-[#22314c] rounded-full p-3 mb-3">
            <svg width="28" height="28" fill="none" stroke="#00A3FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="14" cy="8" r="4" />
              <path d="M4 22v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
            </svg>
          </div>
          <h4 className="text-white font-bold mb-1">CEO</h4>
          <p className="text-gray-400 text-xs">Chris Banjoko</p>
        </div>
        {/* Card 3 */}
        <div className="flex-1 bg-[#202E48] rounded-lg px-6 py-6 flex flex-col items-center text-center">
          <div className="bg-[#22314c] rounded-full p-3 mb-3">
            <svg width="28" height="28" fill="none" stroke="#00A3FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10a9 9 0 1 1-6-8.71" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h4 className="text-white font-bold mb-1">Contact Information</h4>
          <p className="text-gray-400 text-xs">info@nsg.com<br />+123 456 7890</p>
        </div>
      </div>
    </div>
  );
}