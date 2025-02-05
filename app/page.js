import Image from "next/image";
import About from "./pages/About"
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import Contacts from "./pages/Contacts";
import MarqueeImage from "./Elements/MarqueeImage";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <MarqueeImage/>
      <Contacts />
      <Footer />
    </>
  );
}
