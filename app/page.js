import Image from "next/image";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import ComingSoon from "./Elements/ComingSoon";
import Contacts from "./Components/About/Contacts";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contacts />
      <ComingSoon />
    </>
  );
}
