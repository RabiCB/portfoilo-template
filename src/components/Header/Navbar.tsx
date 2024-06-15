"use client";
import React, { useEffect, useRef, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import Sidebar from "../Sidebar/Sidebar";
import { Navlinks } from "../../../utils/Navlink";
import Link from "next/link";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  

  return (
    <nav >
      <div
       
        className=" relative z-[500] pt-32 mx-auto max-w-screen-2xl flex items-center justify-between h-24 text-white/80 font-medium text-sm"
      >
        <Link href="/" className="lg:text-3xl text-2xl">
          JM
        </Link>
        <ul  className="mt-2 gap-6 items-center font-semibold lg:flex hidden">
          {Navlinks?.map((navlink) => {
            return (
              <li key={navlink?.link}>
                <a href={navlink?.link}>{navlink?.name}</a>
              </li>
            );
          })}
        </ul>
        <div
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden flex items-center"
        >
          <RiMenu3Fill size={24} />
        </div>
      </div>
   
      {isSidebarOpen && (
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      )}
      
    </nav>
  );
};

export default Navbar;
