import React, { useState } from "react";
import { FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { GiCryoChamber } from "react-icons/gi";
import { CiMenuKebab } from "react-icons/ci";
import logo from "../Assets/JR-logo-C.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div
      className=" fixed w-full h-[85px] flex justify-between items-center px-2 bg-primary text-neutral font-bold border-b border-solid border-accent"
      style={{ fontFamily: "var(--font-family)" }}
    >
      <div>
        <img src={logo} alt="my logo" style={{ width: "75px" }} />
      </div>

      {/* menu for navbar */}
      <ul className="hidden md:flex">
        <li className="hover:text-accent">Home</li>
        <li className="hover:text-accent">About</li>
        <li className="hover:text-accent">Skills</li>
        <li className="hover:text-accent">Work</li>
        <li className="hover:text-accent">Contact</li>
      </ul>

      {/* Hamburger Dot Menu */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer ">
        {!nav ? (
          <CiMenuKebab
            style={{ color: "var(--accent-color)", fontSize: "4em" }}
          />
        ) : (
          <FaTimes
            style={{
              color: "var(--accent-color)",
              fontSize: "2em",
              cursor: "pointer",
            }}
          />
        )}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center"
        }
        style={{ backgroundColor: "var(--primary-color)" }}
      >
        <li className="py-5 text-3xl hover:text-accent">Home</li>
        <li className="py-5 text-3xl hover:text-accent">About</li>
        <li className="py-5 text-3xl hover:text-accent">Skills</li>
        <li className="py-5 text-3xl hover:text-accent">Work</li>
        <li className="py-5 text-3xl hover:text-accent">Contact</li>
      </ul>
      {/* social icons */}
      <div className="hidden md:flex fixed flex-row bottom-2 ">
        <ul className="flex gap-1 mb-[-45px]">
          <li
            className="social-icon"
            style={{ backgroundColor: "var(--background-color)" }}
          >
            <a
              className="flex w-full flex-col justify-between items-center gap-1 text-neutral"
              href="/"
            >
              <FaLinkedin size={30} style={{ color: "var(--neutral-color)" }} />
              LinkedIn
            </a>
          </li>
          <li
            className="social-icon"
            style={{ backgroundColor: "var(--accent-color)" }}
          >
            <a
              className="flex w-full flex-col justify-between items-center gap-1 text-primary"
              href="/"
            >
              <FaGithub size={30} style={{ color: "var(--primary-color)" }} />
              GitHub
            </a>
          </li>
          <li
            className="social-icon"
            style={{ backgroundColor: "var(--neutral-color)" }}
          >
            <a
              className="flex w-full flex-col justify-between items-center gap-1  text-primary"
              href="/"
            >
              <HiMail size={30} style={{ color: "var(--primary-color)" }} />
              Email
            </a>
          </li>
          <li
            className="social-icon"
            style={{ backgroundColor: "var(--background-color)" }}
          >
            <a
              className="flex w-full flex-col justify-between items-center gap-1 "
              href="/"
            >
              <GiCryoChamber size={30} />
              Resumé
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
