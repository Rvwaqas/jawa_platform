"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { gsap, registerGSAP } from "@/lib/gsap";
import { useIsMobile, usePrefersReducedMotion } from "@/hooks/useMediaQuery";

const ParticleField = dynamic(
  () => import("@/components/three/ParticleField"),
  { ssr: false }
);

function splitWords(el: HTMLElement) {
  const text = el.textContent ?? "";
  el.setAttribute("aria-label", text);
  el.innerHTML = "";
  const words = text.split(/\s+/).filter(Boolean);

  words.forEach((word, i) => {
    const wrap = document.createElement("span");
    wrap.className = "inline-block overflow-hidden align-bottom";
    wrap.style.marginRight = i < words.length - 1 ? "0.28em" : "0";

    const inner = document.createElement("span");
    inner.className = "split-word inline-block will-change-transform";
    inner.textContent = word;
    wrap.appendChild(inner);
    el.appendChild(wrap);
  });

  return el.querySelectorAll<HTMLElement>(".split-word");
}

type HeroProps = {
  ready?: boolean;
};

export default function Hero({ ready = false }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  useEffect(() => {
    registerGSAP();
    if (!ready || !headlineRef.current) return;

    if (prefersReduced || isMobile) {
      gsap.set([headlineRef.current, subRef.current, ctaRef.current], {
        opacity: 1,
        y: 0,
      });
      return;
    }

    const words = splitWords(headlineRef.current);
    gsap.set(words, { yPercent: 110, opacity: 0 });
    gsap.set([subRef.current, ctaRef.current], { y: 24, opacity: 0 });

    const tl = gsap.timeline({ delay: 0.12 });
    tl.to(words, {
      yPercent: 0,
      opacity: 1,
      duration: 0.85,
      stagger: 0.06,
      ease: "power3.out",
    })
      .to(
        subRef.current,
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      )
      .to(
        ctaRef.current,
        { y: 0, opacity: 1, duration: 0.55, ease: "power2.out" },
        "-=0.35"
      );

    return () => {
      tl.kill();
    };
  }, [ready, prefersReduced, isMobile]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-[var(--ink)] pb-16 pt-28 sm:items-center sm:pb-24 sm:pt-24"
    >
      <ParticleField />

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(133,129,189,0.15), transparent 60%), linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-md mb-6">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-sans text-xs uppercase tracking-[0.24em] text-[var(--foam)]">
            Enterprise IT Solutions & Software Engineering
          </span>
        </div>

        <h1
          ref={headlineRef}
          className="font-display max-w-5xl text-[clamp(2.5rem,7.5vw,5.5rem)] font-bold leading-[1] tracking-tight text-[var(--foam)]"
        >
          Engineering Next-Generation Software & Scalable Cloud Solutions
        </h1>

        <p
          ref={subRef}
          className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--mist)] sm:text-lg"
        >
          Markslink Solutions architects custom enterprise ERPs, intelligent CRM platforms,
          AI automation, and high-performance mobile applications built for global scalability.
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 rounded-md bg-[var(--primary)] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-black transition-all hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(133,129,189,0.6)]"
          >
            <span>Consult Our Engineers</span>
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-[var(--foam)] backdrop-blur-sm transition-all hover:border-[var(--primary)] hover:bg-white/10"
          >
            <span>Explore Services</span>
          </a>
        </div>

        {/* Floating Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-4">
          <div>
            <p className="font-display text-2xl font-bold text-[var(--foam)] sm:text-3xl">99.99%</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-[var(--mist)]">Uptime Architecture</p>
          </div>
          <div>
            <p className="font-display text-2xl font-bold text-[var(--foam)] sm:text-3xl">100+</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-[var(--mist)]">Enterprise Deployments</p>
          </div>
          <div>
            <p className="font-display text-2xl font-bold text-[var(--foam)] sm:text-3xl">ISO & SOC2</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-[var(--mist)]">Security Ready</p>
          </div>
          <div>
            <p className="font-display text-2xl font-bold text-[var(--foam)] sm:text-3xl">24/7</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-[var(--mist)]">Cloud DevOps Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
