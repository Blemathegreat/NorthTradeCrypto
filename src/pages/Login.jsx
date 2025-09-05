import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#181A20] px-4">
      <div className="bg-[#202E48] rounded-xl relative shadow-lg w-full max-w-md py-10 px-8 flex flex-col items-center">
        {/* Logo */}
        <img
          src="./logo.png"
          alt="North Star Logo"
          className="w-16 mb-10 absolute -top-5 opacity-100"
        />
        {/* Title */}
        <h2 className="text-white  text-2xl font-bold mb-2 py-5 text-center">
          Wellcome Back
        </h2>
        <p className="text-gray-300 text-center mb-6 text-sm">
          Login to your Account.
        </p>
        {/* Email Input */}
        <input
          type="email"
          placeholder="email@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded bg-[#181A20] text-white mb-4 border border-[#23263a] outline-none"
        />
        {/* Continue with Email Button */}
        <button
          className="w-full bg-[#00A3FF] hover:bg-[#0086cc] text-white font-semibold py-3 rounded mb-4 transition"
        >
          Continue with email
        </button>
        {/* Divider */}
        <div className="flex items-center w-full my-2">
          <div className="flex-1 h-px bg-[#23263a]" />
          <span className="mx-3 text-gray-400 text-xs">OR</span>
          <div className="flex-1 h-px bg-[#23263a]" />
        </div>
        {/* Continue with Google Button */}
        <button className="w-full bg-white text-[#181A20] font-semibold py-3 rounded flex items-center justify-center gap-2 mb-4">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>
        {/* Terms */}
        <p className="text-gray-400 text-xs text-center mt-2">
          By signing in or creating an account, you agree with our{" "}
          <a href="#" className="text-[#00A3FF] underline">
            Terms & Conditions
          </a>{" "}
          and{" "}
          <a href="#" className="text-[#00A3FF] underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}