"use client";

import Image from "next/image";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Custom easing
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.8 + i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative mx-auto max-w-7xl px-4 md:px-6 h-[calc(100vh-3.5rem)] md:h-screen md:min-h-screen flex flex-col justify-center">
      <div className="grid items-center gap-8 md:gap-12 md:grid-cols-2">
        {/* Left: copy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-2xl md:text-5xl font-medium tracking-tight text-white"
          >
            Hello, I&apos;m
            <br />
            <span className="block mt-1">Sajith R. Sampath</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 md:mt-6 text-sm md:text-base text-zinc-300 leading-relaxed"
          >
            Senior Software Engineer crafting digital experiences with{" "}
            <span className="font-semibold text-white">5+ years</span> of
            expertise.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-2 md:mt-3 text-xs md:text-sm text-zinc-400 leading-relaxed"
          >
            Specializing in full-stack development, DevOps practices, and
            scalable solutions that drive business growth.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-4 md:mt-8 flex flex-wrap items-center gap-3 md:gap-4"
          >
            <motion.a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 md:px-5 md:py-3 text-xs md:text-sm font-medium bg-zinc-100 text-zinc-900 hover:bg-white transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={14} className="md:w-4 md:h-4" />
              Download Resume
            </motion.a>
            <motion.a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 md:px-5 md:py-3 text-xs md:text-sm font-medium bg-zinc-900/40 text-zinc-100 hover:bg-zinc-900/60 border border-zinc-700/60 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>

          {/* Socials */}
          <div className="mt-4 md:mt-8 flex items-center gap-3 md:gap-4">
            <motion.a
              href="https://github.com/sajithcode"
              target="_blank"
              className="grid h-9 w-9 md:h-11 md:w-11 place-items-center rounded-xl border border-zinc-700/60 hover:bg-zinc-900/60 transition"
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              custom={0}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={16} className="md:w-[18px] md:h-[18px]" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sajith-r-sampath/"
              target="_blank"
              className="grid h-9 w-9 md:h-11 md:w-11 place-items-center rounded-xl border border-zinc-700/60 hover:bg-zinc-900/60 transition"
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              custom={1}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={16} className="md:w-[18px] md:h-[18px]" />
            </motion.a>
            <motion.a
              href="mailto:sajithsampath721@gmail.com"
              className="grid h-9 w-9 md:h-11 md:w-11 place-items-center rounded-xl border border-zinc-700/60 hover:bg-zinc-900/60 transition"
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              custom={2}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={16} className="md:w-[18px] md:h-[18px]" />
            </motion.a>
          </div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="hidden md:grid mt-6 md:mt-10 grid-cols-3 gap-4 md:gap-6"
          >
            <Stat number="5+" label="Years Experience" />
            <Stat number="50+" label="Projects Completed" />
            <Stat number="100%" label="Client Satisfaction" />
          </motion.div>
        </motion.div>

        {/* Right: portrait */}
        <motion.div
          className="relative mx-auto flex w-full max-w-[200px] md:max-w-md items-center justify-center md:order-last order-first"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          {/* soft glow */}
          <motion.div
            className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-2xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* circular frame */}
          <motion.div
            className="relative aspect-square w-full md:w-[85%] rounded-full border border-zinc-700/50 bg-zinc-900/40 p-2 md:p-3 shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
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
          </motion.div>

          {/* Availability badge */}
          <motion.div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:bottom-2 md:right-6 md:left-auto md:translate-x-0"
            variants={badgeVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
          >
            <span className="inline-flex items-center gap-1.5 md:gap-2 rounded-xl bg-zinc-900/70 px-2.5 py-1.5 md:px-4 md:py-2 text-xs md:text-sm border border-zinc-700/60 shadow">
              <motion.span
                className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-emerald-400"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.span>
              Available for hire
            </span>
          </motion.div>
        </motion.div>
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
