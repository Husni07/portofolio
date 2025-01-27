"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Bar from "../Elements/Bar";
import ProgressBar from "./ProgressBar";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const divRef = useRef(null);

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex w-full justify-center items-center h-[4.5rem] fixed shadow-sm px-5 xl:px-0 z-[999]">
      <ProgressBar />
      <div className="flex w-[75rem] justify-between items-center text-gray-200">
        <div className="text-xl font-semibold">
          <Link href="/" className="text-w">
            ~//////////~
          </Link>
        </div>
        <div className="flex gap-10 items-center">
          <ul
            className={`hidden md:flex gap-8 text-lg font-medium w-full transition-all duration-300 ease-in`}
          >
            <li className="ease-linear duration-200 hover:text-white rounded-lg py-1 px-2 text-gray-900 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-abu sm:py-2 sm:px-3">
              <a href="#home">Home</a>
            </li>
            <li className="ease-linear duration-200 hover:text-white rounded-lg py-1 px-2 text-gray-900 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-abu sm:py-2 sm:px-3">
              <a href="#about">About</a>
            </li>
            <li className="ease-linear duration-200 hover:text-white rounded-lg py-1 px-2 text-gray-900 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-abu sm:py-2 sm:px-3">
              <a href="#projects">Projects</a>
            </li>
            <li className="ease-linear duration-200 hover:text-white rounded-lg py-1 px-2 text-gray-900 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-abu sm:py-2 sm:px-3">
              <a href="#experience">Experience</a>
            </li>
            <li className="ease-linear duration-200 hover:text-white rounded-lg py-1 px-2 text-gray-900 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-abu sm:py-2 sm:px-3">
              <a href="https://chat.mubarrok.my.id">Contact</a>
            </li>
          </ul>
          <div className="relative flex flex-col" ref={divRef}>
            <Bar onclick={() => setOpen(!open)} />
            <div
              className={`${
                open ? "opacity-100 translate-y-7" : "invisible"
              } shadow-sm rounded-md p-2 w-44 opacity-0 bg-white absolute top-8 right-0 transition-all flex flex-col gap-2 z-99`}
            >
              <a
                href="#home"
                className="flex md:hidden justify-between text-black p-2 bg-slate-50 rounded-md items-center shadow-inner cursor-pointer transition-all hover:bg-slate-100"
              >
                <h1 className="font-semibold text-sm">Home</h1>
              </a>
              <a
                href="#about"
                className="flex md:hidden justify-between text-black p-2 bg-slate-50 rounded-md items-center shadow-inner cursor-pointer transition-all hover:bg-slate-100"
              >
                <h1 className="font-semibold text-sm">About</h1>
              </a>
              <a
                href="#projects"
                className="flex md:hidden justify-between text-black p-2 bg-slate-50 rounded-md items-center shadow-inner cursor-pointer transition-all hover:bg-slate-100"
              >
                <h1 className="font-semibold text-sm">Projects</h1>
              </a>
              <a
                href="#experience"
                className="flex md:hidden justify-between text-black p-2 bg-slate-50 rounded-md items-center shadow-inner cursor-pointer transition-all hover:bg-slate-100"
              >
                <h1 className="font-semibold text-sm">Experience</h1>
              </a>
              <a
                href="https://chat.mubarrok.my.id"
                className="flex md:hidden justify-between text-black p-2 bg-slate-50 rounded-md items-center shadow-inner cursor-pointer transition-all hover:bg-slate-100"
              >
                <h1 className="font-semibold text-sm">Contact</h1>
              </a>
              <a
                href="https://wee-ai.web.app/chat"
                target="_blank"
                className="flex justify-between text-black px-2 py-2 bg-slate-50 rounded-md items-center shadow-inner cursor-pointer transition-all hover:bg-slate-100"
              >
                <h1 className="font-semibold text-sm">try my AI</h1>
                <span>✨</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
