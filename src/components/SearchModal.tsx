"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface SearchItem {
  id: string;
  title: string;
  category: "Services" | "Industries" | "Tech Stack" | "Pages";
  description: string;
  href: string;
  tags: string[];
}

const SEARCH_DATABASE: SearchItem[] = [
  // Services
  {
    id: "service-erp",
    title: "Enterprise ERP & CRM Architecture",
    category: "Services",
    description: "Custom ERP systems, supply chain automation, modular microservices, and CRM workflows.",
    href: "/services#erp",
    tags: ["ERP", "CRM", "Enterprise", "Supply Chain", "PostgreSQL", "Next.js"],
  },
  {
    id: "service-cloud",
    title: "Cloud Infrastructure & DevOps CI/CD",
    category: "Services",
    description: "Multi-cloud migration (AWS, GCP, Azure), Kubernetes orchestration, Terraform IaC, and 99.99% uptime.",
    href: "/services#cloud",
    tags: ["Cloud", "DevOps", "AWS", "Kubernetes", "Docker", "Terraform", "CI/CD"],
  },
  {
    id: "service-ai",
    title: "AI-Driven Automation & Intelligent Agents",
    category: "Services",
    description: "Enterprise LLM fine-tuning, automated decision engines, predictive data analytics, and workflow bots.",
    href: "/services#ai",
    tags: ["AI", "Machine Learning", "LLM", "Python", "Automation", "Agents"],
  },
  {
    id: "service-mobile",
    title: "High-Scale Web & Mobile Engineering",
    category: "Services",
    description: "Cross-platform mobile apps (React Native, Flutter) and blazing-fast Next.js web applications.",
    href: "/services#mobile",
    tags: ["Mobile", "React Native", "Flutter", "iOS", "Android", "Web", "Next.js"],
  },
  {
    id: "service-security",
    title: "Cybersecurity, DevSecOps & Enterprise Audits",
    category: "Services",
    description: "Zero-trust architecture, SOC2 Type II, HIPAA, PCI DSS compliance, and automated vulnerability scanning.",
    href: "/services#security",
    tags: ["Security", "Cybersecurity", "HIPAA", "SOC2", "Compliance", "Zero Trust"],
  },
  {
    id: "service-modernization",
    title: "Legacy Modernization & Database Re-architecting",
    category: "Services",
    description: "Migrating monolithic legacy applications to decoupled, event-driven microservices with zero downtime.",
    href: "/services#modernization",
    tags: ["Modernization", "Legacy", "Refactoring", "Microservices", "Database"],
  },

  // Industries
  {
    id: "ind-healthcare",
    title: "Healthcare & MedTech Solutions",
    category: "Industries",
    description: "HIPAA-compliant EHR/EMR platforms, telehealth systems, and secure IoMT patient data integrations.",
    href: "/industries#healthcare",
    tags: ["Healthcare", "HealthTech", "HIPAA", "EHR", "EMR", "Telehealth"],
  },
  {
    id: "ind-fintech",
    title: "Banking, FinTech & Digital Payments",
    category: "Industries",
    description: "PCI-DSS compliant payment gateways, core banking APIs, sub-millisecond transaction engines, and fraud protection.",
    href: "/industries#fintech",
    tags: ["FinTech", "Banking", "Payments", "PCI-DSS", "Crypto", "Transactions"],
  },
  {
    id: "ind-logistics",
    title: "Logistics, Supply Chain & Fleet Telematics",
    category: "Industries",
    description: "Real-time fleet tracking, automated warehouse dispatch, IoT sensor telemetry, and route optimization.",
    href: "/industries#logistics",
    tags: ["Logistics", "Supply Chain", "Fleet", "IoT", "Tracking", "Warehouse"],
  },
  {
    id: "ind-manufacturing",
    title: "Manufacturing & Smart IoT (Industry 4.0)",
    category: "Industries",
    description: "Industrial IoT dashboards, predictive maintenance algorithms, SCADA integration, and quality assurance.",
    href: "/industries#manufacturing",
    tags: ["Manufacturing", "Industry 4.0", "IoT", "Smart Factory", "SCADA"],
  },
  {
    id: "ind-retail",
    title: "Retail & Omnichannel High-Volume eCommerce",
    category: "Industries",
    description: "Headless commerce architecture, sub-second inventory sync, multi-region checkout, and POS integration.",
    href: "/industries#retail",
    tags: ["Retail", "eCommerce", "Headless", "Inventory", "Omnichannel"],
  },
  {
    id: "ind-energy",
    title: "Energy, Utilities & CleanTech Platforms",
    category: "Industries",
    description: "Smart meter telemetry, grid balancing analytics, carbon accounting software, and predictive consumption models.",
    href: "/industries#energy",
    tags: ["Energy", "CleanTech", "Utilities", "Telemetry", "Smart Grid"],
  },

  // Tech Stack
  {
    id: "tech-nextjs",
    title: "Next.js & React 19 Frontend",
    category: "Tech Stack",
    description: "Server-side rendering, React Server Components, high performance Core Web Vitals, and sleek UX.",
    href: "/services",
    tags: ["Next.js", "React", "TypeScript", "TailwindCSS"],
  },
  {
    id: "tech-python",
    title: "Python, FastAPI & AI Pipelines",
    category: "Tech Stack",
    description: "High-throughput asynchronous APIs, PyTorch, LangChain, and machine learning pipelines.",
    href: "/services",
    tags: ["Python", "FastAPI", "AI", "LangChain", "PyTorch"],
  },
  {
    id: "tech-cloud-infra",
    title: "AWS, Azure & Google Cloud Platform",
    category: "Tech Stack",
    description: "Multi-region distributed infrastructure, serverless functions, auto-scaling clusters, and CDN edge.",
    href: "/services",
    tags: ["AWS", "Azure", "GCP", "Cloud", "Terraform"],
  },
  {
    id: "tech-k8s",
    title: "Docker & Kubernetes Orchestration",
    category: "Tech Stack",
    description: "Enterprise containerization, GitOps deployment workflows, service mesh, and zero-downtime rollouts.",
    href: "/services",
    tags: ["Kubernetes", "Docker", "K8s", "DevOps", "Helm"],
  },
  {
    id: "tech-db",
    title: "PostgreSQL, MongoDB & Redis Caching",
    category: "Tech Stack",
    description: "Relational ACID compliance, distributed document stores, vector databases, and sub-millisecond Redis caching.",
    href: "/services",
    tags: ["PostgreSQL", "MongoDB", "Redis", "Databases", "SQL"],
  },

  // Pages
  {
    id: "page-home",
    title: "Home — Markslink Solutions",
    category: "Pages",
    description: "Main portal, technology stack showcase, enterprise solutions overview, and client validation.",
    href: "/",
    tags: ["Home", "Main", "Markslink", "Overview"],
  },
  {
    id: "page-services",
    title: "Services — Software Engineering & Cloud",
    category: "Pages",
    description: "Detailed capabilities across custom ERPs, cloud architecture, AI workflows, and mobile platforms.",
    href: "/services",
    tags: ["Services", "Software", "Cloud", "ERP", "Engineering"],
  },
  {
    id: "page-industries",
    title: "Industries — Specialized IT Solutions",
    category: "Pages",
    description: "Custom digital solutions built specifically for healthcare, finance, logistics, retail, and manufacturing.",
    href: "/industries",
    tags: ["Industries", "Healthcare", "FinTech", "Sectors"],
  },
  {
    id: "page-about",
    title: "About Us — Engineering Culture & Vision",
    category: "Pages",
    description: "Our mission, leadership, core engineering values, delivery track record, and technical standards.",
    href: "/about",
    tags: ["About", "Company", "Leadership", "Team", "Vision"],
  },
  {
    id: "page-testimonials",
    title: "Testimonials — Client Reviews & Outcomes",
    category: "Pages",
    description: "Verified testimonials from CTOs, VPs of Engineering, and measurable case study results.",
    href: "/testimonials",
    tags: ["Testimonials", "Reviews", "Clients", "Outcomes", "Ratings"],
  },
  {
    id: "page-contact",
    title: "Contact & Proposal — Direct Technical Consultation",
    category: "Pages",
    description: "Submit project brief, calculate estimated budget, and speak with a principal solutions architect.",
    href: "/contact",
    tags: ["Contact", "Proposal", "Quote", "Hire", "Schedule"],
  },
];

const QUICK_SUGGESTIONS = [
  "Custom ERP",
  "Cloud Architecture",
  "Healthcare HIPAA",
  "AI Automation",
  "FinTech & Banking",
  "Get a Proposal",
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Filter items based on query and category
  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    return SEARCH_DATABASE.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!q) return true;

      const inTitle = item.title.toLowerCase().includes(q);
      const inDesc = item.description.toLowerCase().includes(q);
      const inCategory = item.category.toLowerCase().includes(q);
      const inTags = item.tags.some((t) => t.toLowerCase().includes(q));

      return inTitle || inDesc || inCategory || inTags;
    });
  }, [query, selectedCategory]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
      } else if (e.key === "Enter" && results.length > 0) {
        e.preventDefault();
        const selected = results[selectedIndex] || results[0];
        if (selected) {
          router.push(selected.href);
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, selectedIndex, router, onClose]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const categories = ["All", "Services", "Industries", "Tech Stack", "Pages"];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-16 sm:pt-24 backdrop-blur-md bg-black/75 transition-opacity animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-[#0C0D16] shadow-[0_20px_70px_rgba(0,0,0,0.8),0_0_30px_rgba(133,129,189,0.15)] transition-all animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-label="Site Search"
      >
        {/* Glow Header Accent */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent" />

        {/* Input Bar */}
        <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
          <svg
            className="h-5 w-5 text-[var(--primary)] shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search services, industries, technology, or pages..."
            className="w-full bg-transparent text-base text-[var(--foam)] placeholder:text-[var(--mist)]/60 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              className="rounded p-1 text-[var(--mist)] hover:text-white transition-colors text-xs"
              title="Clear input"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="flex h-7 items-center rounded border border-white/15 bg-white/5 px-2 text-[11px] font-medium text-[var(--mist)] hover:bg-white/10 hover:text-white transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto px-5 py-3 border-b border-white/5 bg-black/20 text-xs no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedIndex(0);
              }}
              className={`rounded-full px-3 py-1 font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-[var(--primary)] text-black font-bold shadow-[0_0_12px_rgba(133,129,189,0.4)]"
                  : "bg-white/5 text-[var(--mist)] hover:bg-white/10 hover:text-[var(--foam)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Quick Suggestions (if no query) */}
        {!query && (
          <div className="px-5 pt-3 pb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--mist)]/70">
              Popular Searches:
            </span>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {QUICK_SUGGESTIONS.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setQuery(item);
                    inputRef.current?.focus();
                  }}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-[var(--foam)] hover:border-[var(--primary)] hover:bg-[var(--primary)]/10 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-white/5">
          {results.length > 0 ? (
            results.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={onClose}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`group flex items-start gap-3.5 rounded-xl p-3.5 transition-colors ${
                    isSelected
                      ? "bg-white/10 border border-white/15"
                      : "hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[var(--primary)] group-hover:border-[var(--primary)] transition-colors mt-0.5">
                    {item.category === "Services" && (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    )}
                    {item.category === "Industries" && (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    )}
                    {item.category === "Tech Stack" && (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    )}
                    {item.category === "Pages" && (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-sm font-semibold text-[var(--foam)] group-hover:text-white transition-colors truncate">
                        {item.title}
                      </span>
                      <span className="shrink-0 rounded bg-white/5 border border-white/10 px-1.5 py-0.5 text-[10px] font-medium text-[var(--mist)] uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[var(--mist)] line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {item.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-white/[0.04] px-1.5 py-0.5 text-[10px] text-[var(--mist)]/80"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="shrink-0 self-center text-[var(--mist)] group-hover:text-[var(--primary)] group-hover:translate-x-0.5 transition-all">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="py-12 text-center">
              <p className="text-sm font-medium text-[var(--foam)]">
                No matching results for &ldquo;{query}&rdquo;
              </p>
              <p className="mt-1 text-xs text-[var(--mist)]">
                Try searching for &quot;ERP&quot;, &quot;Cloud&quot;, &quot;Healthcare&quot;, &quot;AI&quot;, or &quot;About&quot;.
              </p>
            </div>
          )}
        </div>

        {/* Footer info & keyboard shortcuts */}
        <div className="flex items-center justify-between border-t border-white/10 bg-black/40 px-5 py-3 text-[11px] text-[var(--mist)]">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1">
              <kbd className="rounded border border-white/20 bg-white/5 px-1.5 py-0.5 text-[10px]">↑</kbd>
              <kbd className="rounded border border-white/20 bg-white/5 px-1.5 py-0.5 text-[10px]">↓</kbd>
              to navigate
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="rounded border border-white/20 bg-white/5 px-1.5 py-0.5 text-[10px]">↵</kbd>
              to select
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="rounded border border-white/20 bg-white/5 px-1.5 py-0.5 text-[10px]">ESC</kbd>
              to close
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-wider text-[var(--primary)] font-semibold">
            Markslink Quick Search
          </span>
        </div>
      </div>
    </div>
  );
}
