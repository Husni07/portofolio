import Image from "next/image";
import Link from "next/link";
import React from "react";
const Projects = () => {
  return (
    <div className="bg-black w-full p-4 pt-10" id="projects">
      <div className="mx-auto bg-black max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-7">
        <h1 className="mb-8 text-2xl font-bold">Projects</h1>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <article className="flex max-w-lg flex-col-reverse rounded-xl border-[1px] border-tertiary bg-abu py-4 px-6 transition duration-200 hover:border-accent md:hover:scale-[1.01]">
            {/* Konten Deskripsi */}
            <div className="mt-8 flex flex-col space-y-4">
              <Link href="#">
                <h2 className="text-lg font-semibold text-gray-100 transition duration-200 hover:opacity-60">
                  anu ini judulya
                </h2>
              </Link>
              <p className="text-sm text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
                fuga!
              </p>
              <p className="text-gray-300 transition duration-200 hover:opacity-60">
                February 15th, 2025
              </p>
            </div>

            {/* Gambar */}
            <Link
              href="#"
              className="aspect-[16/9] overflow-hidden rounded-2xl drop-shadow-md"
            >
              <Image
                src="/Assets/Image/image1.jpeg"
                width={640}
                height={75}
                alt="Contoh Proyek"
                className="rounded-lg transition duration-200 hover:opacity-60"
              />
            </Link>
          </article>
          <article className="flex max-w-lg flex-col-reverse rounded-xl border-[1px] border-tertiary bg-abu py-4 px-6 transition duration-200 hover:border-accent md:hover:scale-[1.01]">
            {/* Konten Deskripsi */}
            <div className="mt-8 flex flex-col space-y-4">
              <Link href="#">
                <h2 className="text-lg font-semibold text-gray-100 transition duration-200 hover:opacity-60">
                  anu ini judul
                </h2>
              </Link>
              <p className="text-sm text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
                fuga!
              </p>
              <p className="text-gray-300 transition duration-200 hover:opacity-60">
                February 15th, 2025
              </p>
            </div>

            {/* Gambar */}
            <Link
              href="#"
              className="aspect-[16/9] overflow-hidden rounded-2xl drop-shadow-md"
            >
              <Image
                src="/Assets/Image/image1.jpeg"
                width={640}
                height={75}
                alt="Contoh Proyek"
                className="rounded-lg transition duration-200 hover:opacity-60"
              />
            </Link>
          </article>
          <article className="flex max-w-lg flex-col-reverse rounded-xl border-[1px] border-tertiary bg-abu py-4 px-6 transition duration-200 hover:border-accent md:hover:scale-[1.01]">
            {/* Konten Deskripsi */}
            <div className="mt-8 flex flex-col space-y-4">
              <Link href="#">
                <h2 className="text-lg font-semibold text-gray-100 transition duration-200 hover:opacity-60">
                  anu ini judul
                </h2>
              </Link>
              <p className="text-sm text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
                fuga!
              </p>
              <p className="text-gray-300 transition duration-200 hover:opacity-60">
                February 15th, 2025
              </p>
            </div>

            {/* Gambar */}
            <Link
              href="#"
              className="aspect-[16/9] overflow-hidden rounded-2xl drop-shadow-md"
            >
              <Image
                src="/Assets/Image/image1.jpeg"
                width={640}
                height={75}
                alt="Contoh Proyek"
                className="rounded-lg transition duration-200 hover:opacity-60"
              />
            </Link>
          </article>
          <article className="flex max-w-lg flex-col-reverse rounded-xl border-[1px] border-tertiary bg-abu py-4 px-6 transition duration-200 hover:border-accent md:hover:scale-[1.01]">
            {/* Konten Deskripsi */}
            <div className="mt-8 flex flex-col space-y-4">
              <Link href="#">
                <h2 className="text-lg font-semibold text-gray-100 transition duration-200 hover:opacity-60">
                  anu ini judul
                </h2>
              </Link>
              <p className="text-sm text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
                fuga!
              </p>
              <p className="text-gray-300 transition duration-200 hover:opacity-60">
                February 15th, 2025
              </p>
            </div>

            {/* Gambar */}
            <Link
              href="#"
              className="aspect-[16/9] overflow-hidden rounded-2xl drop-shadow-md"
            >
              <Image
                src="/Assets/Image/image1.jpeg"
                width={640}
                height={75}
                alt="Contoh Proyek"
                className="rounded-lg transition duration-200 hover:opacity-60"
              />
            </Link>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Projects;
