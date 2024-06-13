import React from "react";
import { data } from "../../../utils/Data";

const LandingPage = () => {
  return (
    <section className="relative grid lg:grid-cols-2 max-lg:mt-[10%] max-w-screen-2xl mx-auto  min-h-[100vh]  gap-10 sm:gap-16 lg:gap-20 items-center  text-white">
      <div>
        <h1 className="lg:text-3xl text-xl font-semibold  my-1">John Murphy</h1>
        <h2 className=" lg:text-xl text-base font-medium my-1">
          Frontend Web Developer | React Developer | JavaScript Expert
        </h2>
        <p className="lg:text-base text-sm my-1 ">{data?.homepage?.intro}</p>
        <a
          className="gap-4 bg-violet-500 p-2 text-sm lg:text-base rounded-md bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 inline-flex my-1 group/btn"
          href="/#projects"
        >
          View Portfolio & Projects
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
      </div>
      <div>
        <img src="/images/me.jpeg" loading="lazy" className="w-full h-[480px] rounded-lg opacity-80    object-cover"/>
      </div>
    </section>
  );
};

export default LandingPage;
