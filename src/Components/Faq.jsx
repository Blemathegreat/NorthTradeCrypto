import React, { useState } from "react";

const faqs = [
  {
    question: "How fast are transactions and is it safe?",
    answer: "Transactions are processed instantly and are secured with industry-standard encryption.",
  },
  {
    question: "How do I access my gold and silver?",
    answer: "You can access your gold and silver anytime via your dashboard or mobile app.",
  },
  {
    question: "Why should I trust NSG?",
    answer: "NSG is regulated and uses advanced security protocols to protect your assets.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[#181A20] w-full rounded-lg  px-4 py-20 flex flex-col gap-12">
      {/* Top: Digital Currency Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col px-5 items-start">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Digital currency made easy
          </h2>
          <p className="text-gray-300 text-base mb-6 max-w-md">
            Accessing digital currency is easy. Store your gold and silver – starting at just $1.
          </p>
          <button className="bg-[#00A3FF] text-white px-6 py-2 rounded font-semibold hover:bg-[#0086cc] transition">
            Join now
          </button>
        </div>
        {/* Right: Placeholder for image or card */}
        <div className="flex-1 flex items-center justify-end">
          <div className="w-[220px] h-[140px] bg-[#202E48] rounded-lg opacity-40"></div>
        </div>
      </div>
      {/* Bottom: FAQ Section */}
      <div >
        <h3 className="text-2xl font-bold px-5 text-white mb-6">FAQ</h3>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: FAQ Categories (static for now) */}
          <div className="flex flex-col gap-4 px-10 min-w-[180px]">
            <span className="text-[#00A3FF] font-semibold cursor-pointer">Trust and security</span>
            <span className="text-[#6C6C6C] cursor-pointer">Buying gold and silver</span>
            <span className="text-[#6C6C6C] cursor-pointer">storage</span>
          </div>
          {/* Right: FAQ List */}
          <div className="flex-1 flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-lg px-5 py-4 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <div className="flex justify-between bg-[#181A20] items-center">
                  <span className="text-white font-semibold">{faq.question}</span>
                  <span className="text-[#FFFFFF] text-2xl">
                    {openIndex === idx ? "−" : "+"}
                  </span>
                </div>
                {openIndex === idx && (
                  <p className="text-gray-300 text-sm mt-2">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}