import Link from "next/link";
import React from "react";

const Contacts = () => {
  return (
    <div
      id="contacts"
      className="bg-black w-full flex h-[70vh] md:h-screen p-4 pt-10"
    >
      <div className="flex flex-col justify-evenly h-3/4 m-auto bg-black max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-7">
        <span className="text-2xl md:text-5xl xl:text-7xl">
          Let&apos;s make something great together
        </span>
        <span className="text-2xl md:text-4xl xl:text-6xl text-end">
          <Link href="mailto:hi@mubarrok.my.id">
            hi@<span className="underline">mubarrok.my.id</span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Contacts;
