import React from "react";
import Moon from "./Moon";

export default function Hero() {
  return (
    <div
      id="home"
      className="min-h-screen grid grid-cols-2 items-center gap-1  text-white"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="bg-black flex flex-col items-start gap-1 justify-center w-full px-16 py-8">
        <p className="text-xl">Hi, I'm</p>
        <h1 className="text-7xl text-[#A1A1AA] mb-2 font-semibold tracking-tight">
          Md Kaif Nawaz Khurram.
        </h1>
        <h2 className="text-2xl">Full-Stack Developer & AI Developer </h2>
        <button className="mt-4 px-4 py-2 border border-[#2DD4BF] text-[#2DD4BF] rounded-3xl">
          Say Hi!
        </button>
      </div>
      <div className="relative h-screen w-full">
        <Moon />
      </div>
    </div>
  );
}
