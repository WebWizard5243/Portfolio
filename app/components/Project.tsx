import React from "react";
import CircularGallery from "./circularGallery";
import BlurText from "./BlurText";

export default function Project() {
  return (
    <div
      id="project"
      className="w-full text-white items-center flex flex-col bg-black py-12 md:py-16"
    >
      <div>
        <BlurText
          text="Projects"
          className="text-3xl md:text-5xl text-center mt-5 mb-10 justify-center font-bold tracking-wide"
        />

        <p className="text-lg md:text-xl text-center text-gray-400 tracking-widest">
          A glimpse into what I build when curiosity strikes
        </p>
      </div>
      <div className="w-[90vw] md:w-[80vw] flex flex-col items-center mt-6">
        <CircularGallery
          bend={1}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.05}
          fontUrl=""
          font="bold 30px Geist"
          scrollSpeed={2}
        />
      </div>
    </div>
  );
}
