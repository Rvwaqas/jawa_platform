"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, registerGSAP, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

const services = [
  {
    title: "Enterprise ERP Systems",
    desc: "Unified mission-critical operations connecting finance, multi-warehouse supply chain, automated workflows, and HR into one real-time source of truth.",
    tag: "01",
    badge: "Operations & Scale",
    image: "/images/case-studies/erp-system.jpg",
    metric: "52% Faster Cycles",
    tech: ["Next.js", "PostgreSQL", "Docker", "AWS"],
    features: [
      "Custom Modular Architecture",
      "Multi-Entity GL & Accounting",
      "Automated Inventory & POS",
      "Real-Time Executive BI Dashboards",
    ],
  },
  {
    title: "Custom CRM & SaaS Platforms",
    desc: "High-conversion customer journey platforms, pipeline automation, subscription engines, and client portals built to dominate your market vertical.",
    tag: "02",
    badge: "Revenue Growth",
    image: "/images/case-studies/crm-platform.jpg",
    metric: "3.4× Conversion Lift",
    tech: ["React 19", "Python AI", "GraphQL", "Redis"],
    features: [
      "Omnichannel Sales Pipelines",
      "Automated Lead Scoring",
      "Subscription & Billing Gateways",
      "Self-Service Client Portals",
    ],
  },
  {
    title: "Mobile App Development",
    desc: "Native-grade iOS & Android applications with offline-first synchronization, high-frequency interactions, and biometric security.",
    tag: "03",
    badge: "iOS & Android",
    image: "/images/case-studies/mobile-suite.jpg",
    metric: "Offline-First 0ms Sync",
    tech: ["Flutter", "React Native", "SQLite", "Biometrics"],
    features: [
      "Cross-Platform & Native Engines",
      "Offline Data Synchronization",
      "Biometric Auth & Tokenization",
      "Real-Time Push Architecture",
    ],
  },
  {
    title: "Cloud Infrastructure & DevOps",
    desc: "Resilient zero-downtime cloud architectures on AWS/GCP, automated CI/CD pipelines, container orchestration, and Kubernetes scaling.",
    tag: "04",
    badge: "Cloud & Reliability",
    image: "/images/case-studies/cloud-devops.jpg",
    metric: "99.99% Uptime SLA",
    tech: ["Kubernetes", "Terraform", "AWS", "Prometheus"],
    features: [
      "Kubernetes & Docker Clusters",
      "Terraform Infrastructure as Code",
      "Zero-Downtime Automated CI/CD",
      "24/7 SRE Monitoring & Alerts",
    ],
  },
  {
    title: "AI, ML & Workflow Automation",
    desc: "Transform operational throughput with tailored LLM pipelines, intelligent document processing, predictive forecasting, and automated agent workflows.",
    tag: "05",
    badge: "Intelligence",
    image: "/images/case-studies/real-estate-ai.jpg",
    metric: "80% Manual Task Reduction",
    tech: ["Python", "PyTorch", "OpenAI / LLMs", "LangChain"],
    features: [
      "Custom LLM & Agent Pipelines",
      "Predictive Demand Forecasting",
      "Automated OCR & Data Extraction",
      "Autonomous Workflow Automation",
    ],
  },
  {
    title: "FinTech & Transaction Engines",
    desc: "High-volume transactional systems, payment gateway integrations, encrypted ledgers, and regulatory compliance-ready financial infrastructure.",
    tag: "06",
    badge: "Security & FinTech",
    image: "/images/case-studies/booking-fintech.jpg",
    metric: "Sub-50ms Settlement",
    tech: ["TypeScript", "Node.js", "Kafka", "PostgreSQL"],
    features: [
      "Multi-Currency Payment Gateways",
      "Double-Entry Ledger Architecture",
      "PCI-DSS & SOC2 Security Standards",
      "Automated Bank Reconciliations",
    ],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    registerGSAP();
    if (!sectionRef.current) return;

    if (prefersReduced) {
      gsap.set(".service-card", { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 35 },
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
      id="services"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#07080E] py-24 sm:py-32 border-t border-white/10"
    >
      {/* Background Ambient Glow */}
      <div
        className="pointer-events-none absolute left-1/3 top-1/4 h-[600px] w-[600px] rounded-full opacity-20 blur-[150px]"
        style={{
          background: "radial-gradient(circle, #8581BD 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Centered Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-[#48427A] bg-[#19172E] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A79DFA]">
            <span>Core Capabilities & Software Solutions</span>
          </div>

          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Enterprise-Grade IT & Software Engineering
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#9D9AB8] sm:text-lg">
            We architect and deploy mission-critical systems designed for high availability, bank-grade security, and massive throughput.
          </p>
        </div>

        {/* Services Cards Grid with High-Resolution Visuals */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="service-card group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0E101D]/80 backdrop-blur-xl transition-all duration-300 hover:border-[#8B80F9]/80 hover:shadow-[0_0_35px_rgba(139,128,249,0.18)] hover:-translate-y-1"
            >
              <div>
                {/* Image Banner Container */}
                <div className="relative h-48 w-full overflow-hidden border-b border-white/10 bg-black">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 opacity-75 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E101D] via-[#0E101D]/40 to-transparent" />

                  {/* Top Badge Overlay */}
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="rounded-md border border-white/20 bg-black/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                      {service.tag}
                    </span>
                    <span className="rounded-md border border-[#3E3869] bg-[#1B1836]/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#A59CE8] backdrop-blur-md">
                      {service.badge}
                    </span>
                  </div>

                  {/* Bottom Metric Pill */}
                  <div className="absolute bottom-3 right-4">
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-950/70 px-3 py-1 text-[10px] font-semibold tracking-wider text-emerald-300 backdrop-blur-md">
                      {service.metric}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-7">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-[#A79DFA]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#9D9AB8]">
                    {service.desc}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="mt-6 border-t border-white/10 pt-5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#A79DFA]">
                      Key Deliverables:
                    </p>
                    <ul className="mt-3 space-y-2">
                      {service.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-center gap-2.5 text-xs text-[#C2C0D4]"
                        >
                          <svg
                            className="h-3.5 w-3.5 shrink-0 text-[#8B80F9]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/10 pt-4">
                    {service.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[#9D9AB8]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="border-t border-white/10 px-7 py-4 bg-white/[0.02] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#9D9AB8]">
                  Production Ready
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#A79DFA] transition-transform group-hover:translate-x-1"
                >
                  Request Architecture &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
