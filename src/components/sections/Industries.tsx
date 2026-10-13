"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, registerGSAP, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

const sectors = [
  {
    name: "FinTech & Digital Banking",
    category: "Financial Technology",
    desc: "Mission-critical transaction engines, automated multi-currency ledgers, fraud detection algorithms, and PCI-DSS compliant checkout pipelines.",
    image: "/images/case-studies/booking-fintech.jpg",
    metric: "Sub-50ms Latency · Bank Grade",
    capabilities: [
      "Real-Time Clearing & Settlement",
      "Automated Ledger Reconciliations",
      "Biometric KYC & AML Verification",
      "PCI-DSS & Open Banking APIs",
    ],
  },
  {
    name: "Healthcare & MedTech",
    category: "Health & Life Sciences",
    desc: "HIPAA-certified telehealth suites, EHR/EMR data pipelines, encrypted clinical communications, and real-time medical scheduling engines.",
    image: "/images/case-studies/crm-platform.jpg",
    metric: "HIPAA Certified · 99.99% Uptime",
    capabilities: [
      "HL7 & FHIR Data Interoperability",
      "WebRTC Encrypted Teleconsults",
      "Clinic & Patient Portal Workflows",
      "Automated Insurance Verification",
    ],
  },
  {
    name: "Supply Chain & Logistics",
    category: "Fleet & Operations",
    desc: "Multi-facility inventory control, automated freight dispatching, real-time GPS telemetry, and dynamic AI-driven route optimization.",
    image: "/images/case-studies/erp-system.jpg",
    metric: "Real-time Telemetry · Global Scale",
    capabilities: [
      "Automated Multi-Warehouse Sync",
      "IoT Sensor & Telematics Ingestion",
      "Carrier Rate & Dispatch Engine",
      "Predictive Stock Replenishment",
    ],
  },
  {
    name: "Real Estate & PropTech",
    category: "Asset & Property Tech",
    desc: "Multi-asset portfolio management, commercial lease automation, investor distribution portals, and interactive virtual tour experiences.",
    image: "/images/case-studies/real-estate-ai.jpg",
    metric: "Interactive Portals · Lead Flow",
    capabilities: [
      "Digital Escrow & Lease Execution",
      "Automated Valuation Models (AVM)",
      "Institutional Investor Portals",
      "Property Maintenance Workflows",
    ],
  },
  {
    name: "Retail & High-Volume Commerce",
    category: "Commerce & Consumer",
    desc: "Scalable headless commerce backends, zero-latency inventory locking, flash-sale resilience, and omnichannel POS cloud integrations.",
    image: "/images/case-studies/mobile-suite.jpg",
    metric: "10,000+ RPS · 0ms Checkout Lock",
    capabilities: [
      "High-Concurrency Flash Checkout",
      "Unified Customer Loyalty Engines",
      "ERP & Multi-Channel Inventory",
      "Dynamic Pricing & Promotions",
    ],
  },
  {
    name: "Enterprise B2B SaaS",
    category: "Cloud Platforms",
    desc: "Multi-tenant cloud architectures, usage-metered subscription billing, enterprise SSO/SAML integrations, and high-performance API gateways.",
    image: "/images/case-studies/cloud-devops.jpg",
    metric: "Multi-Tenant · SOC2 Architecture",
    capabilities: [
      "Tenant Database Isolation",
      "Stripe & Custom Usage Billing",
      "Enterprise SAML / Okta SSO",
      "Developer Webhooks & SDKs",
    ],
  },
];

export default function Industries() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    registerGSAP();
    if (!sectionRef.current) return;

    if (prefersReduced) {
      gsap.set(".industry-card", { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".industry-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
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
      id="industries"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#07080D] py-24 sm:py-32 border-t border-white/10"
    >
      {/* Background Ambient Purple Glow */}
      <div
        className="pointer-events-none absolute right-1/3 top-1/2 h-[550px] w-[550px] -translate-y-1/2 rounded-full opacity-20 blur-[140px]"
        style={{
          background: "radial-gradient(circle, #8581BD 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Centered Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-[#48427A] bg-[#19172E] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A79DFA]">
            <span>Domain & Sector Expertise</span>
          </div>

          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Built for Industry-Specific Scale
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#9D9AB8] sm:text-lg">
            We understand the strict regulatory compliance mandates, architectural patterns, and user expectations unique to your industry vertical.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sec) => (
            <div
              key={sec.name}
              className="industry-card group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0E101D]/80 backdrop-blur-xl transition-all duration-300 hover:border-[#8B80F9]/80 hover:shadow-[0_0_35px_rgba(139,128,249,0.18)] hover:-translate-y-1"
            >
              <div>
                {/* Visual Image Header Banner */}
                <div className="relative h-44 w-full overflow-hidden border-b border-white/10 bg-black">
                  <Image
                    src={sec.image}
                    alt={sec.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 opacity-75 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E101D] via-[#0E101D]/50 to-transparent" />

                  {/* Category Pill Tag */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-md border border-[#3E3869] bg-[#1B1836]/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#A59CE8] backdrop-blur-md">
                      {sec.category}
                    </span>
                  </div>

                  {/* Metric Badge */}
                  <div className="absolute bottom-3 right-4">
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-950/70 px-3 py-0.5 text-[10px] font-semibold text-emerald-300 backdrop-blur-md">
                      {sec.metric}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-7">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-[#A79DFA]">
                    {sec.name}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#9D9AB8]">
                    {sec.desc}
                  </p>

                  {/* Capabilities List */}
                  <div className="mt-6 border-t border-white/10 pt-5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#A79DFA]">
                      Engineered Capabilities:
                    </p>
                    <ul className="mt-3 space-y-2">
                      {sec.capabilities.map((cap) => (
                        <li
                          key={cap}
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
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="border-t border-white/10 px-7 py-4 bg-white/[0.02] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#9D9AB8]">
                  Industry Ready Architecture
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#A79DFA] transition-transform group-hover:translate-x-1"
                >
                  Consult Leads &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
