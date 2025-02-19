"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import { DATA } from "../Data";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <div className="bg-black w-full p-4 py-20" id="projects">
      <div className="m-auto bg-black max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-7">
        <h1 className="text-2xl mb-2 w-fit border-b-2 border-pinkMe font-bold">
          Projects
        </h1>
        <h1 className="mb-8 text-base opacity-50 font-light">
          A list of projects I have been working on or built
        </h1>
        <div className="grid justify-center grid-cols-1 gap-4 lg:grid-cols-2">
          {DATA.projects.map((project, i) => (
            <div
              key={i}
              className="flex max-w-lg flex-col-reverse rounded-xl border-[1px] bg-abu py-4 px-6 transition transform duration-500 hover:border-pinkMe md:hover:scale-[1.01]"
            >
              <div className="mt-8 flex flex-col">
                <Link href={project.website} target="_blank">
                  <h2 className="text-lg font-semibold text-gray-100 transition duration-200 hover:opacity-60">
                    {project.title}
                  </h2>
                </Link>
                <p className="text-sm text-gray-300">{project.description}</p>
                <div className="flex flex-wrap mt-5 gap-1">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-zinc-900 text-[11px] p-1 px-2 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href={project.website}
                target="_blank"
                className="aspect-[16/9] overflow-hidden rounded-2xl drop-shadow-md"
              >
                <Image
                  src={project.image}
                  width={640}
                  height={75}
                  alt={project.title}
                  className="rounded-lg image transition transform duration-500 hover:scale-110 hover:opacity-60"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex ">
        <h1
          className={`bg-zinc-900 ${
            isLoading ? "cursor-progress" : "cursor-pointer"
          } hover:bg-abu mx-auto font-thin duration-200 hover:opacity-60 p-2 px-3 rounded-lg`}
          onClick={handleClick}
        >
          {isLoading ? "Loading..." : "Load more"}
        </h1>
      </div>
    </div>
  );
};

export default Projects;
