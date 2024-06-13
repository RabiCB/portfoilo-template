import React from "react";
import { projects } from "../../../utils/ProjectsData";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { IoIosLink } from "react-icons/io";
import { RxExternalLink } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="projects" className="relative py-8 lg:py-12 xl:py-20 px-4 sm:px-8 lg:px-12  bg-white bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-cyan-500/10">
        <div className="mx-auto max-w-screen-2xl">
      <h1 className="lg:text-3xl text-xl font-semibold text-[#2A1863] ">Projects</h1>
      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1 mt-4 lg:grid-cols-3 xl:grid-cols-4">
        {projects?.map((project) => (
          <div
            key={project?.name}
            className="flex flex-col relative items-center border-[1px] p-2 rounded-lg cursor-pointer"
          >
            <img
              src={project.imageUrl}
              alt={project.name}
              loading="lazy"
              className="rounded-md hover:opacity-85 transition duration-300 ease-in-out "
            />
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-sm mb-6">{project.description}</p>
            <div className="flex gap-2.5 absolute bottom-2 right-2.5 items-center">
              <Link target="_blank" href={`${project.github}`}>
                <FaGithub className="lg:text-[20px]   text-[20px] " />
              </Link>

              <Link target="_blank" href={`${project?.link}`}>
                <RxExternalLink className="lg:text-[20px] text-[20px]" />
              </Link>
            </div>
            
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Projects;
