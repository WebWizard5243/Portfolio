import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaXTwitter,
} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export default function Navbar() {
  return (
    <div
      className="flex justify-between items-center px-6 py-4 fixed rounded-2xl top-4 left-8 right-8  z-50 border border-white/50  bg-white/0
    backdrop-blur-xl text-white"
    >
      <div className="flex items-center gap-5">
        <p className="text-xl font-bold tracking-wide">KNK</p>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="flex gap-5">
        <FaGithub href="" />
        <FaLinkedin />
        <FaInstagram />
        <HiOutlineMail />
      </div>
    </div>
  );
}
