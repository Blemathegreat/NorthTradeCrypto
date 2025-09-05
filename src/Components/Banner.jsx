import React from "react";

export default function Banner() {
  return (
    <section
      className="w-full h-[150px] md:h-[220px] rounded-lg px-15 relative overflow-hidden"
      style={{
        backgroundImage: "url('./image 15.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for opacity */}
      <div className="absolute inset-0 bg-[#181A20] px-10 opacity-70"></div>
    </section>
  );
}