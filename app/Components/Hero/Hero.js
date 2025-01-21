import React from "react";
import HeroAnimation from "./HeroAnimation";
import Link from "next/link";
import { ArrowRight, MoveDown } from "lucide-react";
import Socials from "./Socials";
const Hero = () => {
  return (
    <div className="relative flex h-screen items-center" id="home">
      <HeroAnimation />
      <div className="mx-auto max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
        <div className="">
          <div className="flex cursor-default flex-col space-y-2">
            <h1 className="text-5xl font-semibold sm:text-7xl md:text-8xl xl:text-9xl">
              Husni Mubarrok
            </h1>
            <h2 className="text-3xl font-medium opacity-80 sm:text-6xl md:text-6xl xl:text-7xl">
              I build things for the web.
            </h2>
            <Link
              href="#about"
              className="group w-fit mt-8 flex items-center justify-start space-x-2 text-xl font-medium"
            >
              <span>Read more about Me</span>
              <ArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
            </Link>
            <Socials />
            <Link
              href="#about"
              className="group w-fit absolute left-0 right-0 bottom-10 animate-bounce mx-auto flex"
            >
              <MoveDown className="h-6 w-6 m-2 transition duration-200 group-hover:translate-y-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
