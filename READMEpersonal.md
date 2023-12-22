# Portfolio2023
Jacob Riggs coding portfolio
react project

fonts:
style={{fontFamily: 'var(--font-family)'}} = Nunito
style={{fontFamily: 'var(--font-familyR)'}} = Rubik

index.css
:root {
  --primary-color: #2b7efc;
  --accent-color: #fd7a3d;
  --background-color: #2B3A42;
  --neutral-color: #EFEFEF;
  --font-family: 'Nunito', sans-serif;
  --font-familyR: 'Rubik', sans-serif;
}

import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHamburger,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import logo from "../Assets/JR-logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div
      className="fixed w-full h-[85px] flex justify-between items-center px-2 bg-primary text-neutral font-bold"
      style={{ fontFamily: "var(--font-family)" }}
    >
      <div>
        <img src={logo} alt="my logo" style={{ width: "150px" }} />
      </div>

      {/* menu for navbar */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger Dot Menu */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
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
        <li className="py-5 text-3xl">Home</li>
        <li className="py-5 text-3xl">About</li>
        <li className="py-5 text-3xl">Skills</li>
        <li className="py-5 text-3xl">Work</li>
        <li className="py-5 text-3xl">Contact</li>
      </ul>

      {/* social icons */}
      <div className={`flex fixed flex-row px-5 bottom-2 transition-all ${nav ? 'opacity-100' : 'opacity-0'}`}>
        <ul className="flex gap-2">
          <li
            className="w-[150px] h-[60px] flex justify-between items-center "
            style={{ backgroundColor: "var(--background-color)" }}
          >
            <a
              className="flex w-full flex-col justify-between items-center gap-1 hover:mb-[10px] duration-300 px-2 mb-[-75px]"
              href="/"
            >
              <FaLinkedin size={25} />
              LinkedIn
            </a>
          </li>
          <li
            className="w-[150px] h-[60px] flex justify-between items-center "
            style={{ backgroundColor: "var(--background-color)" }}
          >
            <a
              className="flex w-full flex-col justify-between items-center gap-1 hover:mb-[10px] duration-300 px-2 mb-[-75px]"
              href="/"
            >
              <FaGithub size={25} />
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
