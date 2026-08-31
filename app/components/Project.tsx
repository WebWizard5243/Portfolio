import React from "react";
import CircularGallery from "./circularGallery";

export default function Project() {
  return (
    <div
      id="project"
      className="min-h-screen text-white items-center    flex flex-col bg-black"
    >
      <div>
        <h1 className="text-5xl text-center  mt-5 mb-10 justify-center font bolder tracking-wide">
          Projects
        </h1>
        <p className="text-xl text-center tracking-widest">
          A glimpse into what I build when curiosity strikes
        </p>
      </div>
      <div style={{ height: "600px", width: "80vw" }}>
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
