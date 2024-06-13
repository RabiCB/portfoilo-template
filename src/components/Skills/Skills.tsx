import React from "react";
import { skills } from "../../../utils/Skills";
import Link from "next/link";

const Skills = () => {
  return (
    <section className="relative py-8 lg:py-12 xl:py-20 px-4 sm:px-8 lg:px-12  bg-navy-800 text-white bg-violet-500 bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 overflow-hidden">
      <div className="mx-auto max-w-screen-2xl">
        <div className="max-lg:grid-cols-1  lg:grid gap-8 xl:gap-16 items-center grid-cols-2">
          <div className="">
            <header className="drop-shadow ">
              <p className="font-bold  text-yellow-400 lg:text-3xl text-xl uppercase tracking-wider mb-5">
                My Technical Expertise
              </p>

              <p className="block mt-4 mb-7  lg:text-xl text-base text-white/70">
                Here are some of the skills I possess: React.js, Next.js, Html
                and Css
              </p>
              <a
                className="gap-4 bg-transparent border-[1px]  p-2 text-sm lg:text-base rounded-md  inline-flex my-1 group/btn"
                href="/projects"
              >
                Download Resume
                <div className="flex items-center opacity-50 group-hover/btn:opacity-100 transition-opacity ">
                  <svg
                    role="img"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-0 group-hover/btn:w-2.5 h-2.5 -mr-2.5 ease-out duration-200 transition-all transform-gpu"
                  >
                    <path d="M1 9h14a1 1 0 000-2H1a1 1 0 000 2z"></path>
                  </svg>
                  <svg
                    role="img"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-2.5"
                  >
                    <path d="M7.293 1.707L13.586 8l-6.293 6.293a1 1 0 001.414 1.414l7-7a.999.999 0 000-1.414l-7-7a1 1 0 00-1.414 1.414z"></path>
                  </svg>
                </div>
              </a>
            </header>
          </div>

          <div>
            <ul className="grid grid-cols-2 max-lg:mt-4 sm:grid-cols-3 gap-3 lg:gap-5  xl:col-span-3">
              {skills?.map((skill) => (
                <li key={skill?.title}>
                  <Link
                    target="_blank"
                    href={`${skill?.link}`}
                    className="h-full flex items-center gap-1.5 hover:scale-105 transition duration-100 ease-in-out bg-neutral-400 bg-opacity-20 p-2 rounded-lg justify-center"
                  >
                   
                    

                    <img  loading="lazy" src={skill?.image} className="w-[40px] h-[40px] object-contain"/>
                    <span className=" text-white ">{skill?.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
