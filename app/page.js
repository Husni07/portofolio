import Image from "next/image";
import About from "./Pages/About"
import Hero from "./Pages/Hero";
import Projects from "./Pages/Projects";
import Footer from "./Pages/Footer";
import Contacts from "./Pages/Contacts";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}
