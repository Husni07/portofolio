import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-black w-full flex sm:h-screen p-4 pt-10" id="about">
      <div className="m-auto bg-black max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-7">
        <h1 className="mb-8 text-2xl hidden md:block w-fit border-b-2 border-pinkMe font-bold">
          About me
        </h1>
        <div className="flex overflow-hidden flex-col-reverse items-center md:flex-row md:justify-between md:space-y-0">
          <div className="mt-8 flex flex-col justify-center space-y-4 md:mt-0 md:w-2/3">
            <h1 className="text-4xl sm:text-5xl font-bold will-change-transform">
              Hi I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-pinkMe">
                Husni{" "}
              </span>
              <span className="wave items-center">👋</span>
            </h1>
            <h2 className="text-lg font-medium text-gray-400 will-change-transform">
              Junior Web Developer • Web3 Enthusiast • Trader • Blogger • Tech
              Enthusiast
            </h2>
            <p className="text-md text-lg text-gray-300 will-change-transform">
              My full name is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pinkMe">
                {" "}
                Moh. Husni Mubarrok
              </span>
              , I&apos;m a web developer from Rembang, Indonesia. Work in Web
              Development and I also love Futures Trading. I started studying
              Web Development when I first entered the Umar Fatah Rembang
              Vocational School, and until now I am still learning about
              programming. and now I&apos;m learning new things (Rust, Go,
              Solidity, Web3 and backend technologies).
            </p>
          </div>
          <div className="relative h-52 w-52 xl:h-64 xl:w-64 overflow-hidden rounded-full">
            <Image
              src="/Assets/Image/nft.webp"
              alt="image"
              width={500}
              height={500}
              className="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
