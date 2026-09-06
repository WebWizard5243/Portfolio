"use client";
import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div
      className={`flex justify-between  px-6 py-4 fixed rounded-2xl top-4 left-8 right-8  z-50 border border-white/50  
    backdrop-blur-xl text-white ${isMenuOpen ? "items-start" : "items-center"}`}
    >
      <div className="flex items-center gap-5">
        <p className="text-2xl font-bold tracking-widest">KNK</p>
        <div className=" gap-5 hidden md:flex">
          <a
            href="#home"
            className="hover:text-[#2DD4BF] font-bold duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-[#2DD4BF] font-bold duration-300"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-[#2DD4BF] font-bold duration-300"
          >
            Skills
          </a>
          <a
            href="#project"
            className="hover:text-[#2DD4BF] font-bold duration-300"
          >
            Projects
          </a>
        </div>
      </div>
      <div className="hidden md:flex gap-5">
        <a
          href="https://github.com/WebWizard5243"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-[#2DD4BF] duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/md-kaif-nawaz-khurram/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-[#2DD4BF] duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/kaif_khurram?igsi=aXZnNGx1eWpmeDJu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-[#2DD4BF] duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:kaifnawaz92@gmail.com"
          aria-label="Email"
          className="hover:text-[#2DD4BF] duration-300"
        >
          <HiOutlineMail />
        </a>
      </div>
      <div className="md:hidden flex flex-col items-end ">
        <RxHamburgerMenu
          className={` ${isMenuOpen ? "text-[#2DD4BF]  text-right mb-5" : ""} text-xl`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <div
          className={` transition-[max-height,opacity] duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          {isMenuOpen && (
            <div
              className={`md:hidden overflow-hidden  text-right    text-white`}
            >
              <div className="flex flex-col gap-5 mb-5">
                <a
                  href="#home"
                  className="hover:text-[#2DD4BF] font-bold duration-300"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="hover:text-[#2DD4BF] font-bold duration-300"
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="hover:text-[#2DD4BF] font-bold duration-300"
                >
                  Skills
                </a>
                <a
                  href="#project"
                  className="hover:text-[#2DD4BF] font-bold duration-300"
                >
                  Projects
                </a>
              </div>
              <div className="flex flex-col items-end gap-5">
                <a
                  href="https://github.com/WebWizard5243"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:text-[#2DD4BF] duration-300"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/md-kaif-nawaz-khurram/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-[#2DD4BF] duration-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/kaif_khurram?igsi=aXZnNGx1eWpmeDJu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-[#2DD4BF] duration-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href="mailto:kaifnawaz92@gmail.com"
                  aria-label="Email"
                  className="hover:text-[#2DD4BF] duration-300"
                >
                  <HiOutlineMail />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
