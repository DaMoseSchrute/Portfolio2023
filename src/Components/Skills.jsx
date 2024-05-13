import React from "react";
import HTML from "../Assets/logo-icons/html.png";
import CSS from "../Assets/logo-icons/css.png";
import Adobe from "../Assets/logo-icons/Adobe_Creative_icon.png";
import Github from "../Assets/logo-icons/github.png";
import JavaScript from "../Assets/logo-icons/javascript.png";
import Mongo from "../Assets/logo-icons/mongo.png";
import ReactIcon from "../Assets/logo-icons/react.png";
import Node from "../Assets/logo-icons/node.png";
import Postman from "../Assets/logo-icons/postman-icon.png";
import Tailwind from "../Assets/logo-icons/tailwind.png";

function Skills(props) {
  return (
    <div
      name="skills"
      className=" text-neutral w-full h-auto bg-black"
      style={{ fontFamily: "var(--font-family)" }}
    >
      {/* Skills Container */}
      <div className="max-w-[1000px] mx-auto p-4 px-8 flex flex-col justify-center w-full h-full">
        <p className="text-accent text-5xl pt-8">Skills</p>
        <p className="text-neutral text-2xl py-4">
          - These are the technologies I have worked with.
        </p>
      </div>
      {/* icons container */}
      <div className="w-full px-8 grid grid-cols-2 md:grid-cols-5 gap-5 text-center pb-24">
        <div
          className="shadow-md shadow-accent hover:scale-110 duration-300 rounded-lg "
          style={{ color: "var(--secondary-color)" }}
        >
          <img className="mx-auto w-20" src={HTML} alt="html icon" />
          <p className="my-3">HTML</p>
        </div>
        <div
          className="shadow-md shadow-accent hover:scale-110 duration-300 rounded-lg"
          style={{ color: "var(--secondary-color)" }}
        >
          <img className="mx-auto w-20" src={CSS} alt="CSS icon" />
          <p className="my-2">CSS</p>
        </div>
        <div
          className="shadow-md shadow-accent hover:scale-110 duration-300 rounded-lg"
          style={{ color: "var(--secondary-color)" }}
        >
          <img className="mx-auto w-20" src={Adobe} alt="Adobe icon" />
          <p className="my-2">Adobe</p>
        </div>
        <div
          className="shadow-md shadow-accent hover:scale-110 duration-300 rounded-lg"
          style={{ color: "var(--secondary-color)" }}
        >
          <img className="mx-auto w-20" src={Github} alt="Github icon" />
          <p className="my-2">Github</p>
        </div>
        <div
          className="shadow-md shadow-accent hover:scale-110 duration-300 rounded-lg"
          style={{ color: "var(--secondary-color)" }}
        >
          <img
            className="mx-auto w-20"
            src={JavaScript}
            alt="JavaScript icon"
          />
          <p className="my-2">JavaScript</p>
        </div>
        <div
          className="shadow-md shadow-accent hover:scale-110 duration-300 rounded-lg"
          style={{ color: "var(--secondary-color)" }}
        >
          <img className="mx-auto w-20" src={Mongo} alt="mongoDB icon" />
          <p className="my-2">MongoDB</p>
        </div>
        <div
          className="shadow-md shadow-accent hover:scale-110 duration-300 rounded-lg"
          style={{ color: "var(--secondary-color)" }}
        >
          <img className="mx-auto w-20" src={ReactIcon} alt="ReactIcon" />
          <p className="my-2">React</p>
        </div>
        <div
          className="shadow-md shadow-accent hover:scale-110 duration-300 rounded-lg"
          style={{ color: "var(--secondary-color)" }}
        >
          <img className="mx-auto w-20" src={Node} alt="Node icon" />
          <p className="my-2">Node</p>
        </div>
        <div
          className="shadow-md shadow-accent hover:scale-110 duration-300 rounded-lg"
          style={{ color: "var(--secondary-color)" }}
        >
          <img className="mx-auto w-20" src={Postman} alt="Postman icon" />
          <p className="my-2">Postman</p>
        </div>
        <div
          className="shadow-md shadow-accent hover:scale-110 duration-300 rounded-lg"
          style={{ color: "var(--secondary-color)" }}
        >
          <img className="mx-auto w-20" src={Tailwind} alt="Tailwind icon" />
          <p className="my-2 ">Tailwind</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
