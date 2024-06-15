"use client";

import React, { useEffect, useRef, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { Navlinks } from "../../../utils/Navlink";
type props = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
};

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: props) => {
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
    <div className="fixed left-0 top-0 h-[100vh] w-full z-[999]">
      <div className="w-full h-full  flex flex-row ">
        <div
          ref={ref}
          className={`${
            isSidebarOpen
              ? "translate-x-0 transition-all duration-300 ease-in-out "
              : "-translate-x-full transition-all duration-300 ease-in-out"
          } bg-white  flex flex-col justify-between w-[360px] max-[400px]:w-[280px] h-screen`}
        >
          <ul className="flex gap-4 py-4 px-8 font-semibold flex-col">
            <a href="#" className="lg:text-3xl text-2xl">
              JM
            </a>
            {Navlinks?.map((navlink) => {
              return (
                <li key={navlink?.link}>
                  <a
                    className=" text-black text-sm font-medium"
                    href={navlink?.link}
                    onClick={toggleSidebar}
                  >
                    {navlink?.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex-grow w-full flex-1 relative  backdrop-blur-sm">
          <div className="absolute right-2 top-4 rounded-lg p-1 border-[1px]">
            <RiCloseFill size={24} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
