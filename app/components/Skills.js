import { Code2, Boxes, Globe, ServerCog, Beaker, Wrench } from "lucide-react";

const SECTIONS = [
  {
    icon: <Code2 size={18} />,
    title: "Programming Languages",
    items: ["JavaScript", "TypeScript", "SQL", "PHP", "HCL"],
  },
  {
    icon: <Wrench size={18} />,
    title: "DevOps & Tools",
    items: [
      "Docker",
      "Git",
      "VIM",
      "NeoVim",
      "Kubernetes",
      "Agile",
      "CI/CD with Jenkins",
      "Terraform",
    ],
  },
  {
    icon: <Boxes size={18} />,
    title: "JavaScript Libraries & Frameworks",
    items: ["Node.js", "React.js", "Bun.js", "Deno", "Vanilla JS", "Next.js"],
  },
  {
    icon: <Globe size={18} />,
    title: "Web Frameworks",
    items: ["Express.js", "Fastify"],
  },
  {
    icon: <ServerCog size={18} />,
    title: "Backend as a Service",
    items: ["Firebase", "Appwrite"],
  },
  {
    icon: <Beaker size={18} />,
    title: "Testing",
    items: ["Jest"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      {/* Section header */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Technical Skills
        </h2>
        <p className="mt-3 text-zinc-400">
          Comprehensive expertise across modern development stack with focus on
          scalable web applications and DevOps practices.
        </p>
      </div>

      {/* Cards grid */}
      <div className="mt-10 grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SECTIONS.map((sec) => (
          <SkillCard key={sec.title} {...sec} />
        ))}
      </div>
    </section>
  );
}

function SkillCard({ icon, title, items }) {
  return (
    <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6 shadow-sm">
      <div className="flex items-center gap-3 text-zinc-200">
        <span className="grid h-9 w-9 place-items-center rounded-xl border border-zinc-700/60 bg-zinc-900/60">
          {icon}
        </span>
        <h3 className="font-semibold">{title}</h3>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {items.map((t) => (
          <span
            key={t}
            className="rounded-md border border-zinc-700/60 bg-zinc-900/60 px-3 py-1 text-sm text-zinc-200"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
