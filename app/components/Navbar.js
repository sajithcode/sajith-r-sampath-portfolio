"use client";

import Link from "next/link";
import { Moon } from "lucide-react"; // optional icon

const links = [
  { href: "/", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/50 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/40">
      <nav className="mx-auto flex h-14 md:h-16 w-full max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Brand */}
        <Link
          href="/"
          className="text-white text-sm md:text-base font-semibold tracking-tight"
        >
          Sajith R. Sampath
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                prefetch={false}
                className="hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme button (placeholder) */}
        <button
          aria-label="Toggle theme"
          className="ml-2 md:ml-4 grid h-8 w-8 md:h-9 md:w-9 place-items-center rounded-lg border border-zinc-700/60 hover:bg-zinc-900/60"
        >
          <Moon size={16} className="md:w-[18px] md:h-[18px]" />
        </button>
      </nav>
    </header>
  );
}
