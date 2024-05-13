import React from "react";
import mypic from "../Assets/Jacob-RemBG.png";

function AboutMe(props) {
  return (
    <div
      name="about"
      className="w-full h-screen bg-black text-neutral"
      style={{ fontFamily: "var(--font-family)" }}
    >
      <div className="flex flex-col justify-center items-center w-full h-full px-8">
        <div>
          <img
            src={mypic}
            alt="my pic"
            className="rounded-full bg-accent"
            style={{ width: "250px" }}
          />
        </div>
        <div className=" text-left max-w-[1000px] w-full  mx-auto flex flex-col px-4 gap-4">
          <div className="text-center">
            <p className="text-4xl sm:text-5xl text-accent">About Me</p>
          </div>
          <div className="max-w-[1000px] w-full mx-au grid sm:grid-cols-2 gap-6">
            <div
              className="text-right font-bold text-3xl sm:text-4xl"
              style={{ color: "var(--secondary-color)" }}
            >
              <p>
                Hello and Welcome to my portfolio. Please take a look around and
                thank you for being here. Sincerely - Jacob
              </p>
            </div>
            <div className="text-lg">
              <p>
                I'm Jacob, a Kansas native. I've embraced various roles
                throughout my life. Fueled by a strong commitment to continuous
                learning and hard work, I've found joy in technology. My diverse
                background and education empower me to excel in the realm where
                creativity intersects with functionality, breathing life into
                projects. A natural creative problem-solver with an innate sense
                of design, I've now extended these skills to the field of
                software development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
