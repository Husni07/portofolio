import React from "react";
import HeroAnimation from "./HeroAnimation";
import Link from "next/link";
import { ArrowRight, MoveDown } from "lucide-react";
import Socials from "./Socials";
const Hero = () => {
  return (
    <div
      className="relative via-transparent/90 bg-gradient-to-tr from-transparent to-pinkMe/10 flex h-screen items-center"
      id="home"
    >
      <HeroAnimation />
      <div className="absolute inset-x-0 -z-[1] bottom-0 h-full bg-gradient-to-t via-transparent from-black to-transparent"></div>
      <div className="absolute inset-x-0 -z-[1] bottom-0 h-full bg-gradient-to-t via-transparent from-black to-transparent"></div>
      <div className="z-10 absolute flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-purple-400 after:via-pink-600 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-purple-400 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-pink-600 after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>
      <div className="mx-auto max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
        <div className="flex cursor-default flex-col space-y-2">
          <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pinkMe font-semibold sm:text-7xl md:text-8xl xl:text-9xl">
            Husni Mubarrok
          </h1>
          <h2 className="text-3xl font-medium opacity-50 sm:text-6xl md:text-6xl xl:text-7xl">
            I build things for the web.
          </h2>
          <Link
            href="#about"
            className="group w-fit hover:border-b-2 m-0 p-0 hover:border-b-pinkMe mt-8 flex items-center justify-start space-x-2 text-xl font-medium"
          >
            <span>Read more about Me</span>
            <ArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
          </Link>
          <Socials />
          <Link
            href="#about"
            className="group w-fit absolute left-0 right-0 bottom-14 animate-bounce mx-auto flex"
          >
            <MoveDown className="h-6 w-6 m-2 transition duration-200 group-hover:translate-y-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
