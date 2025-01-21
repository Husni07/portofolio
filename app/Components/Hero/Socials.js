import React from "react";
import { Twitter, Instagram, Youtube, Github } from "lucide-react";
import Link from "next/link";
const Socials = () => {
  return (
    <div className="flex space-x-4 !mt-12">
      <button>
        <Link
          href="https://twitter.com/"
          target="_blank"
          className="mr-1 rounded-xl group shadow-md border-[1px] border-tertiary bg-secondary/30 h-8 w-8 px-1.5 py-1 inline-flex items-center space-x-1 hover:bg-white hover:text-black transition duration-200"
        >
          <Twitter className="h-6 w-6 group transition duration-100 hover:scale-110" />
        </Link>
      </button>

      {/* Instagram */}
      <button>
        <Link
          href="https://instagram.com/"
          target="_blank"
          className="mr-1 rounded-xl group shadow-md border-[1px] border-tertiary bg-secondary/30 h-8 w-8 px-1.5 py-1 inline-flex items-center space-x-1 hover:bg-white hover:text-black transition duration-200"
        >
          <Instagram className="h-6 w-6 group transition duration-100 hover:scale-110" />
        </Link>
      </button>

      {/* YouTube */}
      <button>
        <Link
          href="https://youtube.com/"
          target="_blank"
          className="mr-1 rounded-xl group shadow-md border-[1px] border-tertiary bg-secondary/30 h-8 w-8 px-1.5 py-1 inline-flex items-center space-x-1 hover:bg-white hover:text-black transition duration-200"
        >
          <Youtube className="h-6 w-6 group transition duration-100 hover:scale-110" />
        </Link>
      </button>

      {/* Github */}
      <button>
        <Link
          href="https://github.com/"
          target="_blank"
          className="mr-1 rounded-xl group shadow-md border-[1px] border-tertiary bg-secondary/30 h-8 w-8 px-1.5 py-1 inline-flex items-center space-x-1 hover:bg-white hover:text-black transition duration-200"
        >
          <Github className="h-6 w-6 group transition duration-100 hover:scale-110" />
        </Link>
      </button>
    </div>
  );
};

export default Socials;
