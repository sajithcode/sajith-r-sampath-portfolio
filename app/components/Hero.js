import Image from "next/image";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24">
      <div className="grid items-start gap-12 md:grid-cols-2">
        {/* Left: copy */}
        <div>
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-white">
            Hello, I&apos;m
            <br />
            <span className="block mt-1">Sajith R. Sampath</span>
          </h1>

          <p className="mt-6 text-base text-zinc-300 leading-relaxed">
            Senior Software Engineer crafting digital experiences with{" "}
            <span className="font-semibold text-white">5+ years</span> of
            expertise.
          </p>

          <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
            Specializing in full-stack development, DevOps practices, and
            scalable solutions that drive business growth.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium bg-zinc-100 text-zinc-900 hover:bg-white transition"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium bg-zinc-900/40 text-zinc-100 hover:bg-zinc-900/60 border border-zinc-700/60 transition"
            >
              View My Work
            </a>
          </div>

          {/* Socials */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/sajithcode"
              target="_blank"
              className="grid h-11 w-11 place-items-center rounded-xl border border-zinc-700/60 hover:bg-zinc-900/60 transition"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/sajith-r-sampath/"
              target="_blank"
              className="grid h-11 w-11 place-items-center rounded-xl border border-zinc-700/60 hover:bg-zinc-900/60 transition"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:john@example.com"
              className="grid h-11 w-11 place-items-center rounded-xl border border-zinc-700/60 hover:bg-zinc-900/60 transition"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            <Stat number="50+" label="Projects" />
            <Stat number="5+" label="Years Exp" />
            <Stat number="100%" label="Client Satisfaction" />
          </div>
        </div>

        {/* Right: portrait */}
        <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
          {/* soft glow */}
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-2xl" />

          {/* circular frame */}
          <div className="relative aspect-square w-[85%] rounded-full border border-zinc-700/50 bg-zinc-900/40 p-3 shadow-2xl">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src="/avatar.jpg" // place your image at public/avatar.jpg
                alt="John Developer portrait"
                fill
                sizes="(min-width: 768px) 420px, 70vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Availability badge */}
          <div className="absolute bottom-2 right-0 md:right-6">
            <span className="inline-flex items-center gap-2 rounded-xl bg-zinc-900/70 px-4 py-2 text-sm border border-zinc-700/60 shadow">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
              Available for hire
            </span>
          </div>
        </div>
      </div>

      {/* Scroll hint - centered at bottom of hero section */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sm text-zinc-400">
        <span>Scroll to explore</span>
        <ArrowDown className="animate-bounce" size={16} />
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-semibold text-white">{number}</div>
      <div className="mt-1 text-[10px] uppercase tracking-wider text-zinc-400">
        {label}
      </div>
    </div>
  );
}
