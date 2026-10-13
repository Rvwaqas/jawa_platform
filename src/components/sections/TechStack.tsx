"use client";

const techList = [
  { name: "Next.js 15", category: "Full-Stack" },
  { name: "React 19", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Python / AI", category: "Intelligence" },
  { name: "PyTorch", category: "Deep Learning" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "AWS Cloud", category: "Infrastructure" },
  { name: "Docker", category: "Containers" },
  { name: "Kubernetes", category: "Orchestration" },
  { name: "Three.js / WebGL", category: "3D Visuals" },
  { name: "Flutter / iOS", category: "Mobile" },
  { name: "GraphQL", category: "APIs" },
  { name: "Redis", category: "Caching" },
  { name: "TailwindCSS", category: "Design System" },
];

export default function TechStack() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#06060c] py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
            Battle-Tested Architecture
          </span>
          <h3 className="font-display text-xl sm:text-2xl text-[var(--foam)] mt-1">
            Engineered with Modern Enterprise Tech Stacks
          </h3>
        </div>
        <span className="text-xs text-[var(--mist)] flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
          Production-Ready & Scalable
        </span>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Left and Right gradient fades */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#06060c] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#06060c] to-transparent" />

        <div className="animate-marquee flex items-center gap-4 py-2">
          {techList.concat(techList).map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur-md transition-colors hover:border-[var(--primary)]"
            >
              <div className="flex h-2 w-2 rounded-full bg-[var(--primary)]" />
              <span className="font-display text-sm font-semibold text-[var(--foam)] whitespace-nowrap">
                {tech.name}
              </span>
              <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-[var(--mist)] whitespace-nowrap">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
