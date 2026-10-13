"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, registerGSAP, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

const reviews = [
  {
    name: "Alexander Wright",
    role: "Chief Technology Officer",
    company: "Apex Global Systems",
    avatar: "/images/testimonials/avatar2.jpg",
    content:
      "Markslink completely modernized our legacy cloud infrastructure. Their dedicated delivery team worked as an extension of our own, cutting our deployment cycles by over 60%.",
    rating: 5,
    tag: "CLOUD ARCHITECTURE",
    linkedin: true,
  },
  {
    name: "Sophia Martinez",
    role: "VP of Product Engineering",
    company: "FinScale Technologies",
    avatar: "/images/testimonials/avatar1.jpg",
    content:
      "The engineering precision Markslink brought to our enterprise platform was world-class. They delivered our AI-driven analytics module two weeks ahead of schedule.",
    rating: 5,
    tag: "ENTERPRISE SOFTWARE",
    linkedin: false,
  },
  {
    name: "David Chen",
    role: "Head of Infrastructure",
    company: "OmniData Inc.",
    avatar: "/images/testimonials/avatar3.jpg",
    content:
      "Partnering with Markslink transformed our operations completely. Their software architecture allowed us to scale seamlessly during peak enterprise loads.",
    rating: 5,
    tag: "SCALABLE SYSTEMS",
    linkedin: false,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    registerGSAP();
    if (!sectionRef.current) return;

    if (prefersReduced) {
      gsap.set(".testimonial-card", { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonial-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
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

    // Refresh ScrollTrigger to recalculate after DOM load
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
      id="testimonials"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#07080D] py-24 sm:py-32"
    >
      {/* Background Purple Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[140px]"
        style={{
          background:
            "radial-gradient(ellipse at center, #8B80F9 0%, #454270 50%, transparent 75%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Centered Section Header (Matching Screenshot) */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center rounded-full border border-[#48427A] bg-[#19172E] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A79DFA]">
            <span>Verified Client Endorsements</span>
          </div>

          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Trusted by Leaders in Industry
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#9D9AB8] sm:text-lg">
            Hear how our enterprise software engineering and dedicated delivery teams transformed operations for market leaders.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((rev, i) => (
            <div
              key={rev.name}
              className={`testimonial-card group relative flex flex-col justify-between rounded-2xl border p-8 backdrop-blur-2xl transition-all duration-300 ${
                i === 1
                  ? "border-[#8B80F9] bg-[#0E101D]/90 shadow-[0_0_40px_rgba(139,128,249,0.22)]"
                  : "border-white/10 bg-[#0E101D]/75 hover:border-[#8B80F9]/80 hover:shadow-[0_0_35px_rgba(139,128,249,0.18)] hover:-translate-y-1"
              }`}
            >
              <div>
                {/* 5-Star Rating */}
                <div className="mb-6 flex gap-1.5 text-[#E0A98B]">
                  {[...Array(rev.rating)].map((_, idx) => (
                    <svg
                      key={idx}
                      className="h-4 w-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote Content */}
                <p className="text-[15px] leading-relaxed text-[#F4F3F8]">
                  &ldquo;{rev.content}&rdquo;
                </p>

                {/* Tag Pill */}
                <div className="mt-8">
                  <span className="inline-block rounded-md border border-[#3E3869] bg-[#1B1836] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#A59CE8]">
                    {rev.tag}
                  </span>
                </div>
              </div>

              {/* Author Details */}
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                <div className="flex items-center gap-3.5">
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/20">
                    <Image
                      src={rev.avatar}
                      alt={rev.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-white transition-colors group-hover:text-[#A79DFA]">
                      {rev.name}
                    </h4>
                    <p className="text-xs text-[#9D9AB8]">{rev.role}</p>
                    <p className="text-xs font-medium text-[#7C77A3]">
                      {rev.company}
                    </p>
                  </div>
                </div>

                {/* Optional LinkedIn Icon */}
                {rev.linkedin && (
                  <div className="flex h-7 w-7 items-center justify-center rounded border border-white/15 bg-white/5 text-[#9D9AB8] transition-colors hover:border-[#8B80F9] hover:text-white">
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}