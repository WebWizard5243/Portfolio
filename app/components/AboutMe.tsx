import React from "react";
import BlurText from "./BlurText";

export default function AboutMe() {
  return (
    <div
      id="about"
      className="min-h-screen  text-white bg-black px-30 flex items-center justify-center"
    >
      <div className="grid grid-cols-3 gap-24">
        <div className="col-span-2">
          <BlurText text="/ About Me" className="text-4xl font-bold mb-6" />
          <p className="leading-loosed text-lg text-gray-400 tracking-widest">
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
        <div>
          <img src="/me.png" className="rounded-full" alt="" />
        </div>
      </div>
    </div>
  );
}
