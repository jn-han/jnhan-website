import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Particle from "./Particle";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = () => {
  return (
    <section id="home" className="z-2">
      <div className="absolute w-full h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center text-green">
          <h2 className=" text-lg md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl text-center">
            Hello! My name is
          </h2>
          <h1 className="text-4xl text-center md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl">
            Joshua Nguyen
          </h1>
          <h2 className="text-lg md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl m-4 text-center">
            Software Engineer and Student at the University of British Columbia
          </h2>
          <div className="text-xl flex justify-evenly w-4/5  p-2 text-green">
            <a
              href="https://github.com/jn-han"
              className="flex flex-wrap items-center p-3 justify-between bg-accent rounded-full hover:bg-green hover:text-accent transition duration-500 ease-in-out"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className=" scale-110 md:scale-150 lg:scale-150 xl:scale-150 2xl:scale-150 w-8 mx-1"
              />
              <p className="mx-1 text-sm md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">
                GitHub
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/jn-han/"
              className="flex flex-wrap items-center justify-between bg-accent rounded-full p-3 hover:bg-green hover:text-accent transition duration-500 ease-in-out"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="scale-110 md:scale-150 lg:scale-150 xl:scale-150 2xl:scale-150 w-8 mx-2"
              />
              <p className="mx-1 text-sm md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">
                LinkedIn
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 animate-bounce flex flex-col items-center w-full mb-2 text-xs md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-green">
        <p className="my-3">learn more</p>
        <FontAwesomeIcon className="w-8 scale-150" icon={faArrowDown} />
      </div>
      <Particle className="absolute" />
    </section>
  );
};

export default HomePage;
