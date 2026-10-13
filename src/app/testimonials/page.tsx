"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const allTestimonials = [
  {
    id: 1,
    name: "Alexander Wright",
    role: "Chief Technology Officer",
    company: "Apex Global Systems",
    avatar: "/images/testimonials/avatar2.jpg",
    content:
      "Markslink completely modernized our legacy cloud infrastructure. Their dedicated delivery team worked as an extension of our own, cutting our deployment cycles by over 60%. The architectural rigor and automated testing they introduced gave our board complete confidence.",
    rating: 5,
    tag: "CLOUD ARCHITECTURE",
    category: "Cloud",
    metric: "60% Faster Deployments",
    linkedin: true,
  },
  {
    name: "Sophia Martinez",
    role: "VP of Product Engineering",
    company: "FinScale Technologies",
    avatar: "/images/testimonials/avatar1.jpg",
    content:
      "The engineering precision Markslink brought to our enterprise platform was world-class. They delivered our core transactional payment engine three weeks ahead of schedule with zero post-launch bugs. Their team is simply top tier.",
    rating: 5,
    tag: "FINTECH & ERP",
    category: "FinTech",
    metric: "3 Weeks Ahead of Schedule",
    linkedin: true,
  },
  {
    id: 3,
    name: "Marcus Vance",
    role: "Director of Enterprise Architecture",
    company: "OmniSupply Logistics",
    avatar: "/images/testimonials/avatar3.jpg",
    content:
      "Markslink re-architected our entire supply chain telemetry stack. Handling over 10 million daily events without breaking a sweat, their cloud-native solution gave us real-time inventory visibility across 40 countries.",
    rating: 5,
    tag: "SUPPLY CHAIN IOT",
    category: "Logistics",
    metric: "10M+ Daily Events",
    linkedin: true,
  },
  {
    id: 4,
    name: "Elena Rostova",
    role: "Chief Digital Officer",
    company: "MediPulse Health Systems",
    avatar: "/images/testimonials/avatar1.jpg",
    content:
      "Achieving HIPAA and SOC 2 Type II compliance while deploying a patient portal to 2 million active users seemed impossible on our timeline. Markslink architected an airtight solution that passed our third-party audit with zero exceptions.",
    rating: 5,
    tag: "HEALTHCARE HIPAA",
    category: "Healthcare",
    metric: "100% Audit Pass Rate",
    linkedin: true,
  },
  {
    id: 5,
    name: "David Sterling",
    role: "Founder & CEO",
    company: "CognitiveFlow AI",
    avatar: "/images/testimonials/avatar2.jpg",
    content:
      "When building private vector search and LLM automation pipelines, you cannot afford hallucinations or memory leaks. Markslink delivered an enterprise-grade agent framework that handles sensitive customer data with mathematical predictability.",
    rating: 5,
    tag: "AI AUTOMATION",
    category: "AI",
    metric: "99.4% Extraction Accuracy",
    linkedin: true,
  },
  {
    id: 6,
    name: "Rachel Kim",
    role: "Head of Digital Platforms",
    company: "Nordic Retail Collective",
    avatar: "/images/testimonials/avatar3.jpg",
    content:
      "Our Black Friday flash sales used to crash our old monolith. Markslink replaced the backend with an event-driven headless commerce system that sailed through 45,000 concurrent checkouts without a single second of downtime.",
    rating: 5,
    tag: "HIGH-SCALE ECOMMERCE",
    category: "Retail",
    metric: "Zero Flash Sale Downtime",
    linkedin: true,
  },
];

const categories = ["All", "Cloud", "FinTech", "AI", "Healthcare", "Logistics", "Retail"];

export default function TestimonialsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered = allTestimonials.filter(
    (t) => selectedCategory === "All" || t.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--foam)]">
      <Navigation />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden border-b border-white/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(133,129,189,0.3), transparent)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)] mb-6">
            <span>Verified Client Endorsements</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]">
            Trusted by CTOs, VPs & Engineering Leaders
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-[var(--mist)] leading-relaxed">
            Read firsthand accounts of how Markslink Solutions architects mission-critical platforms, eliminates technical debt, and accelerates delivery velocity.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3.5 backdrop-blur-md">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 fill-[#FFB800] text-[#FFB800]"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-display text-base font-bold text-white">4.9 / 5.0</span>
            <span className="text-xs text-[var(--mist)]">· Across 40+ Enterprise Implementations</span>
          </div>

          {/* Filter Pills */}
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[var(--primary)] text-black font-bold shadow-[0_0_15px_rgba(133,129,189,0.5)]"
                    : "border border-white/10 bg-white/5 text-[var(--mist)] hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat === "All" ? "All Reviews" : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((review, idx) => (
              <div
                key={idx}
                className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0C0D18] p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_10px_35px_rgba(133,129,189,0.15)]"
              >
                {/* Header Tag & Rating */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                      {review.tag}
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-4 w-4 fill-[#FFB800] text-[#FFB800]"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Review Content */}
                  <p className="text-sm leading-relaxed text-[var(--mist)] italic">
                    &ldquo;{review.content}&rdquo;
                  </p>

                  {/* Key Metric Ribbon */}
                  <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-[11px] font-medium text-[var(--foam)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                    <span>Benchmark: {review.metric}</span>
                  </div>
                </div>

                {/* Author Info */}
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                  <div className="flex items-center gap-3">
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/15">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-white">
                        {review.name}
                      </h3>
                      <p className="text-[11px] text-[var(--mist)] leading-snug">
                        {review.role}
                      </p>
                      <p className="text-[10px] text-[var(--primary)] font-medium">
                        {review.company}
                      </p>
                    </div>
                  </div>

                  {/* LinkedIn Icon */}
                  {review.linkedin && (
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#0A66C2] transition-colors hover:border-[#0A66C2]"
                      title="Verified LinkedIn Client Review"
                    >
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Measurable Outcomes Banner */}
      <section className="relative bg-[#05060A] py-24 sm:py-32 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
              Proven Performance
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Measurable Business Impact
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
              <span className="font-display text-4xl sm:text-5xl font-extrabold text-[var(--primary)]">
                -60%
              </span>
              <h3 className="font-display text-sm font-bold text-white mt-3">
                Deployment Cycles
              </h3>
              <p className="mt-2 text-xs text-[var(--mist)]">
                Automated CI/CD pipelines enabling daily release cadences.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
              <span className="font-display text-4xl sm:text-5xl font-extrabold text-white">
                $4.2M
              </span>
              <h3 className="font-display text-sm font-bold text-white mt-3">
                Legacy Debt Eliminated
              </h3>
              <p className="mt-2 text-xs text-[var(--mist)]">
                Reduced annual cloud infrastructure and software licensing waste.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
              <span className="font-display text-4xl sm:text-5xl font-extrabold text-[var(--primary)]">
                99.999%
              </span>
              <h3 className="font-display text-sm font-bold text-white mt-3">
                Core System Uptime
              </h3>
              <p className="mt-2 text-xs text-[var(--mist)]">
                Fault-tolerant multi-region Kubernetes clusters.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
              <span className="font-display text-4xl sm:text-5xl font-extrabold text-white">
                3x
              </span>
              <h3 className="font-display text-sm font-bold text-white mt-3">
                Transaction Throughput
              </h3>
              <p className="mt-2 text-xs text-[var(--mist)]">
                Sub-millisecond query optimization and Redis caching layers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 border-t border-white/10 bg-gradient-to-b from-[#090A13] to-[var(--ink)]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
            Experience Engineering Excellence
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--mist)]">
            Join the CTOs and tech founders who trust Markslink Solutions with their core systems.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-lg bg-[var(--primary)] px-8 py-4 text-xs font-bold uppercase tracking-wider text-black transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(133,129,189,0.5)]"
            >
              Start Your Project &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
