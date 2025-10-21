// import Image from "next/image";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Preloader from "./components/Preloader";
import TechnicalSkills from "./components/TechnicalSkills";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <TechnicalSkills />
        <Experience />
      </main>
    </>
  );
}
