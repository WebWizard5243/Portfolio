import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 py-4 fixed rounded-2xl top-4 left-8 right-8  z-50 border border-zinc-200 bg-white/80 backdrop-blur-md">
      <div className="flex items-center gap-5">
        <p className="text-xl font-semibold tracking-wide">KNK</p>
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="flex gap-5">
        <FaGithub href="" />
        <FaLinkedin />
        <FaXTwitter />
        <HiOutlineMail />
      </div>
    </div>
  );
}
