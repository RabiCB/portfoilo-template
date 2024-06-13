import React from "react";
import { data } from "../../../utils/Data";
const Aboutme = () => {
  return (
    <section
      id="about"
      className="relative py-8 lg:py-12 xl:py-20 px-4 sm:px-8 lg:px-12  bg-navy-800 text-white/80 overflow-hidden bg-violet-500 bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600"
    >
      <div className="mx-auto max-w-screen-2xl">
        <h1 className="lg:text-3xl text-xl font-semibold ">About Me</h1>
        <p className="lg:text-base text-sm mt-2">{data?.about}</p>
        <p className="lg:text-base text-sm mt-2">{data?.speciality}</p>
        <p className="lg:text-base text-sm mt-2">{data?.conclusion}</p>
      </div>
    </section>
  );
};

export default Aboutme;
