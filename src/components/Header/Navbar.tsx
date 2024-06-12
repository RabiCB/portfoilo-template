"use client";
import React, { useEffect, useRef, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import Sidebar from "../Sidebar/Sidebar";
import { Navlinks } from "../../../utils/Navlink";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event?.target)) {
        setIsSidebarOpen(false);
      }
    }
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <nav>
      <div
        ref={ref}
        className=" relative z-[500]  flex items-center justify-between h-24 text-white  font-medium text-sm"
      >
        <a href="#" className="lg:text-3xl text-2xl">
          JM
        </a>
        <ul className="mt-2 gap-6 items-center font-semibold lg:flex hidden">
         {
            Navlinks?.map((navlink)=>{
               return <li key={navlink?.link}>
                <a href={navlink?.link}>{navlink?.name}</a>
              </li>
            })
         } 
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