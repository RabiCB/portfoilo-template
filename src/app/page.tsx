import Aboutme from "@/components/About/Aboutme";
import Navbar from "@/components/Header/Navbar";
import LandingPage from "@/components/Mainpage/LandingPage";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import React from "react";



const page = () => {
  return (
    <>
      <div className="hero relative  mx-auto px-4 sm:px-8 lg:px-12  bg-gradient-to-br from-gray-900/50 via-navy-900/50 to-navy-950/50 -mt-24 ">
        <Navbar />
        <LandingPage />
     
      </div>
      <Aboutme />
      <Projects/>
      <Skills/>
    </>
  );
};

export default page;
