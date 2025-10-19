import Image from "next/image";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 md:px-6 h-[calc(100vh-3.5rem)] md:h-auto md:pt-24 md:pb-20 flex flex-col justify-center">
      <div className="grid items-center gap-8 md:gap-12 md:grid-cols-2">
        {/* Left: copy */}
        <div>
          <h1 className="text-2xl md:text-5xl font-medium tracking-tight text-white">
            Hello, I&apos;m
            <br />
            <span className="block mt-1">Sajith R. Sampath</span>
          </h1>

          <p className="mt-4 md:mt-6 text-sm md:text-base text-zinc-300 leading-relaxed">
            Senior Software Engineer crafting digital experiences with{" "}
            <span className="font-semibold text-white">5+ years</span> of
            expertise.
          </p>

          <p className="mt-2 md:mt-3 text-xs md:text-sm text-zinc-400 leading-relaxed">
            Specializing in full-stack development, DevOps practices, and
            scalable solutions that drive business growth.
          </p>

          {/* CTAs */}
          <div className="mt-4 md:mt-8 flex flex-wrap items-center gap-3 md:gap-4">
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 md:px-5 md:py-3 text-xs md:text-sm font-medium bg-zinc-100 text-zinc-900 hover:bg-white transition"
            >
              <Download size={14} className="md:w-4 md:h-4" />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 md:px-5 md:py-3 text-xs md:text-sm font-medium bg-zinc-900/40 text-zinc-100 hover:bg-zinc-900/60 border border-zinc-700/60 transition"
            >
              View My Work
            </a>
          </div>

          {/* Socials */}
          <div className="mt-4 md:mt-8 flex items-center gap-3 md:gap-4">
            <a
              href="https://github.com/sajithcode"
              target="_blank"
              className="grid h-9 w-9 md:h-11 md:w-11 place-items-center rounded-xl border border-zinc-700/60 hover:bg-zinc-900/60 transition"
            >
              <Github size={16} className="md:w-[18px] md:h-[18px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/sajith-r-sampath/"
              target="_blank"
              className="grid h-9 w-9 md:h-11 md:w-11 place-items-center rounded-xl border border-zinc-700/60 hover:bg-zinc-900/60 transition"
            >
              <Linkedin size={16} className="md:w-[18px] md:h-[18px]" />
            </a>
            <a
              href="mailto:sajithsampath721@gmail.com"
              className="grid h-9 w-9 md:h-11 md:w-11 place-items-center rounded-xl border border-zinc-700/60 hover:bg-zinc-900/60 transition"
            >
              <Mail size={16} className="md:w-[18px] md:h-[18px]" />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-6 md:mt-12 grid grid-cols-3 gap-4 md:gap-6 max-w-md">
            <Stat number="50+" label="Projects" />
            <Stat number="5+" label="Years Exp" />
            <Stat number="100%" label="Client Satisfaction" />
          </div>
        </div>

        {/* Right: portrait */}
        <div className="relative mx-auto flex w-full max-w-[200px] md:max-w-md items-center justify-center md:order-last order-first">
          {/* soft glow */}
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-2xl" />

          {/* circular frame */}
          <div className="relative aspect-square w-full md:w-[85%] rounded-full border border-zinc-700/50 bg-zinc-900/40 p-2 md:p-3 shadow-2xl">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src="/avatar.jpg" // place your image at public/avatar.jpg
                alt="John Developer portrait"
                fill
                sizes="(min-width: 768px) 420px, 200px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Availability badge */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:bottom-2 md:right-6 md:left-auto md:translate-x-0">
            <span className="inline-flex items-center gap-1.5 md:gap-2 rounded-xl bg-zinc-900/70 px-2.5 py-1.5 md:px-4 md:py-2 text-xs md:text-sm border border-zinc-700/60 shadow">
              <span className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-emerald-400"></span>
              Available for hire
            </span>
          </div>
        </div>
      </div>

      {/* Scroll hint - centered at bottom of hero section */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 md:gap-2 text-xs md:text-sm text-zinc-400">
        <span>Scroll to explore</span>
        <ArrowDown className="animate-bounce" size={14} />
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div className="text-center">
      <div className="text-xl md:text-2xl font-semibold text-white">
        {number}
      </div>
      <div className="mt-0.5 md:mt-1 text-[9px] md:text-[10px] uppercase tracking-wider text-zinc-400">
        {label}
      </div>
    </div>
  );
}
