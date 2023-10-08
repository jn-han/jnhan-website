import React from "react";
import { faGripLinesVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PROJECTS from "../config/projects-config";
import ProjectCard from "./ProjectCard";

const ProjectPage = () => {
  return (
    <section
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-between"
    >
      <div className="mt-24 flex flex-col justify-center items-center text-green md:w-2/3 lg:w-2/3 xl:w-1/2 2xl:w-1/2">
        <h2 className="text-green text-3xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl">
          My Projects
        </h2>
        <FontAwesomeIcon className="w-4 pt-10 " icon={faGripLinesVertical} />

        {PROJECTS.map((item) => (
          <ProjectCard info={item} key={item.name} />
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;
