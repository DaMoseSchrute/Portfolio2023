import React from "react";
import { HiArrowRightCircle } from "react-icons/hi2";

const Home = () => {
  return (
    <div
      name="home"
      className="bg-black w-full h-screen"
      style={{ fontFamily: "var(--font-family)" }}
    >
      {/* Home Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-accent text-xl py-2">Greetings, my name is</p>
        <h1 className="text-4xl sm:text-6xl text-neutral">Jacob Riggs</h1>
        <h2 className="text-2xl sm:text-4xl text-accent py-2">
          I'm a Full Stack Developer.
        </h2>
        <p
          className="text-2xl font-bold sm:text-2xl max-w-[750px] py-1"
          style={{ color: "var(--secondary-color)" }}
        >
          Think of me as a Swiss Army Knife of the Technology & Communications Field. Let me
          be your go-to Multi-Tool, equipped with a heart for my family and
          lifelong learning, an eye for art/design, and a creative mind for
          problem-solving.
        </p>
        <div>
          <button className="text-xl flex group items-center text-neutral my-2 gap-1 hover:text-accent">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowRightCircle style={{ fontSize: "2em" }} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
