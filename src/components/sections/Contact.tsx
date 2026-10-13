"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { gsap, registerGSAP } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import Footer from "@/components/Footer";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    registerGSAP();
    if (!sectionRef.current || prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--ink)] py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(133,129,189,0.25), transparent), radial-gradient(ellipse 40% 40% at 10% 80%, rgba(69,66,112,0.2), transparent)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div className="contact-reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)] mb-4">
            <span>Start a Project</span>
          </div>

          <h2 className="font-display text-4xl font-bold tracking-tight text-[var(--foam)] sm:text-5xl">
            Let&apos;s Build Your Enterprise Solution
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--mist)]">
            Connect directly with our solutions architects. Whether you need a custom ERP platform, intelligent AI automation, or a dedicated software engineering team, we deliver within your timeline and budget.
          </p>

          <div className="mt-10 space-y-6 text-sm text-[var(--mist)]">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[var(--primary)]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span className="font-display font-semibold text-[var(--foam)] block">Official Correspondence</span>
                <a href="mailto:rvwaqas602@gmail.com" className="text-sm hover:text-[var(--primary)] transition-colors">
                  rvwaqas602@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[var(--primary)]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <span className="font-display font-semibold text-[var(--foam)] block">Direct Support Line</span>
                <a href="tel:+923480227414" className="text-sm hover:text-[var(--primary)] transition-colors">
                  +923480227414
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[var(--primary)]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span className="font-display font-semibold text-[var(--foam)] block">Engineering Hubs</span>
                <span className="text-sm">Global Remote-First Delivery · 24/7 Dedicated Ops</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[var(--primary)]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <span className="font-display font-semibold text-[var(--foam)] block">Enterprise Privacy</span>
                <span className="text-sm">Standard Mutual NDA available prior to technical discovery</span>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="contact-reveal space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md sm:p-9 shadow-2xl"
        >
          {submitted ? (
            <div className="flex min-h-[360px] flex-col items-start justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-4">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-display text-3xl font-bold text-[var(--foam)]">
                Inquiry Received.
              </p>
              <p className="mt-3 text-base text-[var(--mist)]">
                Thank you for reaching out to Markslink Solutions. A Senior Solutions Architect will analyze your requirements and follow up within 24 business hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 text-xs uppercase tracking-wider text-[var(--primary)] hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--mist)]">
                  Your Name *
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="e.g. Alexander Vance"
                    autoComplete="name"
                    className="mt-2 w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-[var(--foam)] outline-none transition-colors focus:border-[var(--primary)] placeholder:text-white/20"
                  />
                </label>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--mist)]">
                  Work Email *
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="alexander@company.com"
                    autoComplete="email"
                    className="mt-2 w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-[var(--foam)] outline-none transition-colors focus:border-[var(--primary)] placeholder:text-white/20"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--mist)]">
                  Solution Category
                  <select
                    name="type"
                    className="mt-2 w-full rounded-lg border border-white/15 bg-[#0e0e18] px-4 py-3 text-sm text-[var(--foam)] outline-none transition-colors focus:border-[var(--primary)]"
                    defaultValue="Enterprise ERP Systems"
                  >
                    <option>Enterprise ERP Systems</option>
                    <option>AI, ML & Workflow Automation</option>
                    <option>Custom CRM & SaaS Platforms</option>
                    <option>Mobile App Development (iOS/Android)</option>
                    <option>Cloud Infrastructure & DevOps</option>
                    <option>Cybersecurity & API Integration</option>
                    <option>Dedicated Engineering Team</option>
                  </select>
                </label>

                <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--mist)]">
                  Target Budget (USD)
                  <select
                    name="budget"
                    className="mt-2 w-full rounded-lg border border-white/15 bg-[#0e0e18] px-4 py-3 text-sm text-[var(--foam)] outline-none transition-colors focus:border-[var(--primary)]"
                    defaultValue="$10k - $25k"
                  >
                    <option>$5,000 - $10,000</option>
                    <option>$10,000 - $25,000</option>
                    <option>$25,000 - $50,000</option>
                    <option>$50,000 - $100,000+</option>
                    <option>Flexible / Enterprise Retainer</option>
                  </select>
                </label>
              </div>

              <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--mist)]">
                Project Scope & Requirements *
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Describe the system, target timeline, key integrations, and challenges..."
                  className="mt-2 w-full rounded-lg resize-y border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-[var(--foam)] outline-none transition-colors focus:border-[var(--primary)] placeholder:text-white/20"
                />
              </label>

              <button
                type="submit"
                className="w-full rounded-lg bg-[var(--primary)] px-8 py-4 text-xs font-bold uppercase tracking-wider text-black transition-all hover:scale-[1.01] hover:shadow-[0_0_25px_rgba(133,129,189,0.6)]"
              >
                Submit Project Brief &rarr;
              </button>
              <p className="text-center text-[11px] text-[var(--mist)]">
                🔒 Protected by Strict NDA · Response guaranteed within 24h
              </p>
            </>
          )}
        </form>
      </div>

      <Footer />
    </section>
  );
}
