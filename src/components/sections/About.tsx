"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGSAP } from "@/lib/gsap";
import { useIsMobile, usePrefersReducedMotion } from "@/hooks/useMediaQuery";

import Image from "next/image";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  useEffect(() => {
    registerGSAP();
    if (!sectionRef.current || !imageRef.current) return;
    if (prefersReduced || isMobile) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { yPercent: -10, scale: 1.08 },
        {
          yPercent: 10,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".about-copy > *",
        { opacity: 0, y: 32, willChange: "transform, opacity" },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-copy",
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReduced, isMobile]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--ink)] py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div
          ref={imageWrapRef}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl sm:aspect-[5/6]"
        >
          <div
            ref={imageRef}
            className="absolute inset-[-10%] will-change-transform"
          >
            <Image
              src="/images/about/engineering-team.jpg"
              alt="Markslink Solutions Software Engineering Lab"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/30 to-transparent" />
          </div>

          {/* Floating Experience Badge */}
          <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/15 bg-black/75 p-5 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--primary)] text-black font-bold font-display text-lg">
                ML
              </div>
              <div>
                <p className="font-display text-sm font-bold text-white">
                  Markslink Engineering Labs
                </p>
                <p className="text-xs text-[var(--mist)]">
                  Architecting resilient digital systems since 2014
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-copy">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)] mb-4">
            <span>About Markslink Solutions</span>
          </div>

          <h2 className="font-display text-4xl font-bold tracking-tight text-[var(--foam)] sm:text-5xl">
            We Engineer the Software Powering High-Growth Enterprises
          </h2>

          <p className="mt-6 text-base leading-relaxed text-[var(--mist)] sm:text-lg">
            Markslink Solutions is a premier technology consulting firm specializing in mission-critical software engineering, custom enterprise ERP platforms, AI workflow automation, and scalable cloud infrastructure.
          </p>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--mist)]">
            We bridge the gap between complex business challenges and elegant, high-throughput software architecture. Our engineering teams eliminate handoff delays, deliver transparent sprints, and ensure zero bloat in every line of code we ship.
          </p>

          <div className="mt-8 space-y-3">
            {[
              "End-to-End Enterprise Architecture from DB Design to Multi-Region Cloud",
              "Direct Collaboration with Principal Software Architects — No Middlemen",
              "Production-Grade Security, High-Availability SLAs, & SOC2 Compliance",
            ].map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-[var(--foam)]">
                <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/20 text-[var(--primary)]">
                  <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>{point}</span>
              </div>
            ))}
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {[
              { value: "120+", label: "IT Deployments" },
              { value: "99.9%", label: "Uptime SLA" },
              { value: "10+", label: "Years Exp." },
              { value: "98%", label: "Client Retention" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-2xl font-bold text-[var(--primary)] sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-[11px] uppercase tracking-wider text-[var(--mist)]">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
