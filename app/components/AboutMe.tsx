import React from "react";
import BlurText from "./BlurText";

export default function AboutMe() {
  return (
    <div
      id="about"
      className="text-white bg-black px-7 md:px-10 lg:px-30 py-16 md:py-24 flex flex-col items-center justify-center"
    >
      <div className="  grid grid-cols-1 md:grid-cols-3 gap-24">
        <div className="order-2 w-full md:order-1 md:col-span-2">
          <BlurText
            text="/ About Me"
            className="text-2xl md:text-3xl  font-bold mb-6"
          />
          <p className="tracking-widest text-sm  md:text-lg text-gray-400 leading-loose ">
            I’m a Computer Science student specializing in Artificial
            Intelligence and Machine Learning, with a strong interest in
            building things for the web. I mostly work with React, Next.js,
            Node.js and databases, and I enjoy turning ideas into applications
            that people can actually use. <br /> I like learning by building —
            picking up new technologies, figuring things out as I go, and
            occasionally spending way too long polishing details nobody else
            will notice.
          </p>
        </div>
        <div className="order-1 md:order-2 flex  items-center justify-center ">
          <img src="/me.png" className="rounded-full w-[50vw] " alt="" />
        </div>
      </div>
    </div>
  );
}
