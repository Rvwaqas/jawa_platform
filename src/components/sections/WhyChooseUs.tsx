"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, registerGSAP, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

const differentiators = [
  {
    title: "100% Intellectual Property & Source Code Ownership",
    desc: "From the very first sprint commit to final deployment, you own all Git repositories, design systems, infrastructure scripts, and database models. No proprietary locks, no license fees, no vendor trap.",
    tag: "Complete Ownership",
    highlight: "Full Git Access Day 1",
    colSpan: "lg:col-span-2",
    hasImage: true,
    image: "/images/about/office-architecture.jpg",
    features: ["Full Commercial Rights", "Clean Unobfuscated Code", "Complete CI/CD Pipelines"],
  },
  {
    title: "Direct Principal Architect Access",
    desc: "Work directly with principal engineers and technical leads who write production code. No non-technical account managers, no junior handoffs, and zero communication delay.",
    tag: "Zero Middlemen",
    highlight: "Senior Engineers Only",
    colSpan: "lg:col-span-1",
    icon: (
      <svg className="h-6 w-6 text-[#454270]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    stat: "10+ Years",
    statLabel: "Average Lead Experience",
  },
  {
    title: "Zero Technical Debt Standard",
    desc: "We build with strict TypeScript, modular micro-components, automated unit and integration tests, and comprehensive architecture documentation to ensure zero rework.",
    tag: "Engineering Rigor",
    highlight: "Modular & Clean",
    colSpan: "lg:col-span-1",
    icon: (
      <svg className="h-6 w-6 text-[#454270]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    stat: "95%+",
    statLabel: "Automated Test Coverage",
  },
  {
    title: "Rapid Sprints & Predictable Staged Delivery",
    desc: "Bi-weekly sprint demos on live staging servers. You test real working software every 14 days with transparent burndown charts, Jira tracking, and predictable milestone releases.",
    tag: "Velocity & Agility",
    highlight: "Bi-Weekly Production Demos",
    colSpan: "lg:col-span-2",
    icon: (
      <svg className="h-6 w-6 text-[#454270]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    milestones: ["Sprint Planning", "Feature Build", "Automated QA", "Live Staging Demo"],
  },
  {
    title: "Bank-Grade Security Architecture & 99.99% Cloud SLA",
    desc: "Enterprise data isolation, role-based access control (RBAC), SOC2 and HIPAA compliance readiness, automated database snapshots, and continuous 24/7 cloud infrastructure monitoring.",
    tag: "Reliability & Trust",
    highlight: "Contractual SLA Guarantee",
    colSpan: "lg:col-span-3",
    badges: ["SOC2 Ready", "HIPAA Architecture", "24/7 SRE Incident Response", "TLS 1.3 & AES-256"],
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    registerGSAP();
    if (!sectionRef.current) return;

    if (prefersReduced) {
      gsap.set(".bento-card-light", { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".bento-card-light",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 95%",
            once: true,
          },
        }
      );
    }, sectionRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [prefersReduced]);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#F4F3F8] via-[#FFFFFF] to-[#EDEBF5] py-24 sm:py-32 border-y border-[#DDDCE8]"
    >
      {/* Subtle Background Radial Pattern */}
      <div
        className="pointer-events-none absolute right-10 top-20 h-[500px] w-[500px] rounded-full opacity-40 blur-[130px]"
        style={{ background: "radial-gradient(circle, rgba(133,129,189,0.25) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header (Light Theme) */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-[#8581BD]/30 bg-[#8581BD]/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#454270]">
            <span>The Markslink Advantage</span>
          </div>

          <h2 className="font-display text-4xl font-bold tracking-tight text-[#0E0D17] sm:text-5xl lg:text-[3.25rem]">
            Engineered for Operators Who Value Precision
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5C5878] sm:text-lg">
            We operate with the speed of an agile product squad and the technical rigor of an enterprise systems consultancy.
          </p>
        </div>

        {/* Bento Grid Layout (Light / White Theme Cards) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className={`bento-card-light group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#DDDCE8] bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#8581BD] hover:shadow-xl hover:shadow-[#8581BD]/10 hover:-translate-y-1 ${item.colSpan}`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-[#8581BD]/30 bg-[#8581BD]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#454270]">
                    {item.tag}
                  </span>
                  <span className="text-xs font-semibold text-[#8581BD]">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="font-display mt-5 text-xl sm:text-2xl font-bold text-[#0E0D17] transition-colors group-hover:text-[#454270]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#5C5878]">
                  {item.desc}
                </p>

                {/* Optional Image Banner for Key IP Card */}
                {item.hasImage && item.image && (
                  <div className="relative mt-6 h-48 w-full overflow-hidden rounded-xl border border-[#DDDCE8] bg-[#F4F3F8]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-4 flex flex-wrap gap-2">
                      {item.features?.map((f) => (
                        <span key={f} className="rounded bg-white/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0E0D17] backdrop-blur-sm shadow-sm">
                          ✓ {f}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Stat Display for Technical Lead / Code Quality Card */}
                {item.stat && (
                  <div className="mt-6 rounded-xl border border-[#DDDCE8] bg-[#F8F7FC] p-4 flex items-center justify-between">
                    <div>
                      <p className="font-display text-2xl font-bold text-[#454270]">{item.stat}</p>
                      <p className="text-xs text-[#5C5878]">{item.statLabel}</p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#8581BD]/20">
                      {item.icon}
                    </div>
                  </div>
                )}

                {/* Milestones Flow for Sprints Card */}
                {item.milestones && (
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {item.milestones.map((m, idx) => (
                      <div key={m} className="rounded-lg border border-[#DDDCE8] bg-[#F8F7FC] p-2.5 text-center">
                        <span className="text-[10px] font-bold text-[#8581BD] block">0{idx + 1}</span>
                        <span className="text-xs font-semibold text-[#0E0D17] block mt-0.5">{m}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Security Badges for SLA Card */}
                {item.badges && (
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {item.badges.map((b) => (
                      <span key={b} className="flex items-center gap-1.5 rounded-lg border border-[#DDDCE8] bg-[#F8F7FC] px-3.5 py-1.5 text-xs font-semibold text-[#454270]">
                        <svg className="h-3.5 w-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                        {b}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-[#DDDCE8] pt-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#5C5878]">
                  Markslink Quality SLA
                </span>
                <span className="text-xs font-semibold text-[#454270] transition-transform group-hover:translate-x-1">
                  Guaranteed Standard &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
