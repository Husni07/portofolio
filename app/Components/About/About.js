import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-black w-full flex h-screen p-4 pt-10" id="about">
      <div className="m-auto bg-black max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-7">
        <h1 className="mb-8 text-2xl hidden md:block w-fit border-b-2 border-pinkMe font-bold">
          About me
        </h1>
        <div className="flex flex-col-reverse items-center md:flex-row md:justify-between md:space-y-0">
          <div className="mt-8 flex flex-col justify-center space-y-4 md:mt-0 md:w-2/3">
            <h1 className="will-change-opacity text-4xl sm:text-5xl font-bold will-change-transform">
              Hi I&apos;m <span className="text-transparent bg-clip-text bg-pinkMe">Husni </span><span className="wave items-center">👋</span>
            </h1>
            <h2 className="will-change-opacity text-lg font-medium text-gray-400 will-change-transform">
              Junior Web Developer • Web3 Enthusiast • Trader • Blogger • Tech
              Enthusiast 
            </h2>
            <p className="text-md will-change-opacity text-lg text-gray-300 will-change-transform">
              I&apos;m a web developer from Rembang, Indonesia. Work in Web
              Development and I also love Futures Trading. I started studying
              Web Development when I first entered the Umar Fatah Rembang
              Vocational School, and until now I am still learning about
              programming. and now I&apos;m learning new things (Rust, Go, Web3
              and backend technologies).
            </p>
          </div>
          <div className="will-change-opacity relative h-52 w-52 xl:h-64 xl:w-64 overflow-hidden rounded-full will-change-transform">
            <Image
              src="/Assets/Image/nft.jpg"
              alt="image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
