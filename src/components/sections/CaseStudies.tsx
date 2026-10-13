"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGSAP } from "@/lib/gsap";
import { useIsMobile, usePrefersReducedMotion } from "@/hooks/useMediaQuery";

import Image from "next/image";

const projects = [
  {
    title: "Apex Cloud ERP",
    sector: "Manufacturing & Supply Chain",
    result: "52% Order Processing Speedup",
    tech: ["Next.js", "PostgreSQL", "Docker", "AWS"],
    image: "/images/case-studies/erp-system.jpg",
    summary: "Multi-facility inventory sync, automated GL ledger, and real-time vendor supply chain pipeline.",
  },
  {
    title: "Pulse CRM & Analytics",
    sector: "Enterprise B2B SaaS",
    result: "3.4× Pipeline Conversion",
    tech: ["React", "Python AI", "GraphQL", "Redis"],
    image: "/images/case-studies/crm-platform.jpg",
    summary: "AI automated lead intelligence, sales funnel forecasting, and bi-directional email tracking.",
  },
  {
    title: "Medix Booking Engine",
    sector: "Healthcare & Telehealth",
    result: "99.99% Availability & SLA",
    tech: ["TypeScript", "Node.js", "WebRTC", "Kafka"],
    image: "/images/case-studies/booking-fintech.jpg",
    summary: "HIPAA-compliant doctor appointment scheduling, encrypted video consults, and auto-billing.",
  },
  {
    title: "EstateCore AI Portal",
    sector: "Real Estate & Asset Tech",
    result: "2.8× Qualified Investor Leads",
    tech: ["Next.js", "Tailwind", "Python", "GCP"],
    image: "/images/case-studies/real-estate-ai.jpg",
    summary: "Interactive 3D virtual tours, predictive property appraisal models, and automated contract workflows.",
  },
  {
    title: "FieldOps Mobile Suite",
    sector: "Field Logistics & IoT",
    result: "Offline-First 0ms Latency",
    tech: ["Flutter", "SQLite", "AWS IoT", "Biometrics"],
    image: "/images/case-studies/mobile-suite.jpg",
    summary: "Ruggedized field technician suite with offline asset inspection and automatic cloud synchronization.",
  },
  {
    title: "Nova Cloud Mesh",
    sector: "DevOps & Cloud SRE",
    result: "Zero-Downtime Multi-Region",
    tech: ["Kubernetes", "Terraform", "AWS", "Prometheus"],
    image: "/images/case-studies/cloud-devops.jpg",
    summary: "Automated container orchestration, canary deployment pipelines, and proactive threat detection.",
  },
];

export default function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const prefersReduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  useEffect(() => {
    registerGSAP();
    if (!sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      if (!prefersReduced && !isMobile) {
        const track = trackRef.current!;
        const distance = () =>
          Math.max(0, track.scrollWidth - window.innerWidth + 100);

        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${distance()}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }

      if (!prefersReduced) {
        cardsRef.current.forEach((card) => {
          if (!card) return;

          const onMove = (e: MouseEvent) => {
            if (window.matchMedia("(max-width: 768px)").matches) return;
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.willChange = "transform";
            gsap.to(card, {
              rotateY: x * 8,
              rotateX: -y * 8,
              transformPerspective: 1000,
              duration: 0.35,
              ease: "power2.out",
              overwrite: "auto",
            });
          };

          const onLeave = () => {
            gsap.to(card, {
              rotateY: 0,
              rotateX: 0,
              duration: 0.5,
              ease: "power2.out",
              onComplete: () => {
                card.style.willChange = "auto";
              },
            });
          };

          card.addEventListener("mousemove", onMove);
          card.addEventListener("mouseleave", onLeave);
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReduced, isMobile]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--foam)] py-24 sm:py-0"
    >
      <div className="mx-auto max-w-7xl px-5 pb-10 sm:px-8 sm:pt-28 sm:pb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)]/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--secondary)] mb-4">
              <span>Featured Engineering</span>
            </div>
            <h2 className="font-display max-w-2xl text-4xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl">
              Mission-Critical Solutions That Drove Measurable ROI
            </h2>
          </div>
          <p className="max-w-md text-sm text-[var(--slate)]">
            Explore how Markslink Solutions architects resilient, high-volume IT platforms for market leaders.
          </p>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex w-max gap-6 px-5 pb-16 will-change-transform sm:px-8 sm:pb-28"
        style={{ perspective: "1200px" }}
      >
        {projects.map((project, i) => (
          <article
            key={project.title}
            ref={(el) => {
              cardsRef.current[i] = el;
            }}
            className="group relative h-[480px] w-[320px] sm:h-[540px] sm:w-[400px] shrink-0 overflow-hidden rounded-2xl border border-black/10 bg-black shadow-2xl transition-all duration-300"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Background Image with Dark Gradient Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 320px, 400px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-55"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/35" />
            </div>

            {/* Content Body */}
            <div className="relative z-10 flex h-full flex-col justify-between p-7 text-[var(--foam)]">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[var(--primary)]/20 border border-[var(--primary)]/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--foam)]">
                    {project.sector}
                  </span>
                  <span className="text-xs text-[var(--mist)]">0{i + 1}</span>
                </div>

                <h3 className="font-display mt-5 text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[var(--primary)] transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[var(--mist)]">
                  {project.summary}
                </p>

                {/* Tech Chips */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--foam)] backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Result Metric */}
              <div className="border-t border-white/15 pt-4">
                <p className="text-[11px] uppercase tracking-wider text-[var(--mist)]">
                  Measurable Impact
                </p>
                <div className="mt-1 flex items-baseline justify-between">
                  <p className="font-display text-xl sm:text-2xl font-bold text-[var(--primary)]">
                    {project.result}
                  </p>
                  <span className="text-xs font-semibold text-[var(--foam)] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    View &rarr;
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
