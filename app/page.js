// import Image from "next/image";

import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Skills from './components/Skills';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
      </main>
    </>
  );
}
