import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#181A20] w-full pt-10 pb-4 px-4  border-t border-[#23263a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-0 justify-around">
        {/* Left: Logo and Updates */}
        <div className="flex flex-col gap-6 md:w-1/4">
          <span className="text-white font-bold text-lg mb-2">North Star Group</span>
          <img src="./logo.png" alt="North Star Logo" className="w-28 mb-4 mt-0" />
          <div>
            <span className="text-white font-semibold text-base">Get The Latest Updates</span>
            <form className="flex mt-2">
              <input
                type="text"
                placeholder="Your username"
                className="bg-[#202E48] text-white px-3 py-2 rounded-l outline-none"
              />
              <button
                type="submit"
                className="bg-[#22314c] text-white px-4 py-2 rounded-r font-semibold hover:bg-[#00A3FF] transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        {/* Center: Links */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h4 className="text-white font-bold mb-3">PRODUCTS</h4>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li>NSG Money</li>
              <li>Mobile App</li>
              <li>NSG Card</li>
              <li>Hardware Device</li>
              <li>NSG Mint</li>
              <li>NSG Exchange</li>
              <li>EPD</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">RESOURCES</h4>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li>Fees</li>
              <li>Projects</li>
              <li>Roadmap</li>
              <li>Transaction Explorer</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">COMPANY</h4>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li>About Us</li>
              <li>Team</li>
              <li>Media Centre</li>
              <li>Testimonials</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">DOWNLOADS</h4>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li>Brand Resources</li>
              <li>Documents</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">SUPPORT</h4>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li>Knowledge Base</li>
              <li>Video Lessons</li>
              <li>User Guides</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom: Copyright and Links */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center border-t border-[#23263a] pt-4 text-gray-400 text-xs gap-2">
        <div className="flex items-center gap-2">
          <span>© 2022 North Star Group</span>
          <span className="mx-2">|</span>
          <span>Terms of use</span>
          <span className="mx-2">|</span>
          <span>Privacy Policy</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Offering memorandum PDF</span>
          <span className="mx-2">|</span>
          <span>Cashback Terms</span>
        </div>
      </div>
      {/* Scroll to top button */}
      <button
        className="fixed bottom-8 right-8 bg-[#00A3FF] p-2 rounded-full shadow-lg hover:bg-[#0086cc] transition"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg width="24" height="24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </footer>
  );
}