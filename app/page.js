// import Image from "next/image";

import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Skills from './components/Skills';
import Preloader from './components/Preloader';

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <Skills />
      </main>
    </>
  );
}
