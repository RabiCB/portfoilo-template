import Aboutme from "@/components/About/Aboutme";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Navbar";
import LandingPage from "@/components/Mainpage/LandingPage";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Head from "next/head";
import React from "react";



const page = () => {
  return (
    <>
     <Head>
        <link rel="preload" href={"/ui.webp"} as="image" type="image/jpeg" />
      </Head>
      <div className="hero relative  mx-auto px-4 sm:px-8 lg:px-12  bg-gradient-to-br from-gray-900/50 via-navy-900/50 to-navy-950/50 -mt-24 ">
        <Navbar />
        <LandingPage />
     
      </div>
      <Aboutme />
      <Projects/>
      <Skills/>
      <Footer/>
    </>
  );
};

export default page;
