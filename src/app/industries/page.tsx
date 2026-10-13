import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Industry Solutions — Markslink Solutions",
  description:
    "Domain-specialized software engineering and IT infrastructure for Healthcare, FinTech, Logistics, Manufacturing, Retail, and Energy sectors.",
};

const industries = [
  {
    id: "healthcare",
    tag: "SECTOR 01 // HEALTHCARE & LIFE SCIENCES",
    title: "Healthcare, HealthTech & IoMT",
    subtitle: "HIPAA-compliant platforms architected for patient safety, interoperability, and high data density.",
    image: "/images/case-studies/mobile-suite.jpg",
    compliance: ["HIPAA Compliant", "FHIR / HL7 v2/v3", "HITECH", "FDA 21 CFR Part 11"],
    description:
      "Modern healthcare software requires uncompromising data security and seamless interoperability. We engineer custom electronic health records (EHR) interfaces, remote patient monitoring platforms (RPM), and telehealth video consult systems that integrate with legacy hospital systems via standard HL7/FHIR protocols while maintaining zero-leakage patient privacy.",
    solutions: [
      "Custom EHR/EMR patient portals with biometric authentication",
      "FHIR-standardized bi-directional health data interoperability APIs",
      "Telehealth virtual clinics with WebRTC end-to-end encryption",
      "IoMT continuous glucose, vital signs & cardiac telemetry ingest",
      "AI-assisted clinical note summarization and triage pipelines",
    ],
    metric: "Protected 4.2M+ patient health records with zero compliance infractions",
  },
  {
    id: "fintech",
    tag: "SECTOR 02 // BANKING & FINANCIAL SERVICES",
    title: "FinTech, Banking & Digital Payments",
    subtitle: "High-throughput, sub-millisecond transaction engines backed by PCI-DSS Level 1 security.",
    image: "/images/case-studies/booking-fintech.jpg",
    compliance: ["PCI-DSS Level 1", "SOC 2 Type II", "ISO 20022", "GLBA"],
    description:
      "In financial technology, latency and ledger accuracy determine survival. We engineer double-entry immutable financial ledgers, open banking API integrations, automated anti-money laundering (AML) detection, and high-volume merchant payment settlement rails capable of processing tens of thousands of transactions per second.",
    solutions: [
      "ACID-compliant double-entry general ledger microservices",
      "Real-time fraud prevention using streaming machine learning models",
      "Open Banking and PSD2 payment aggregation integrations",
      "Multi-currency fiat/crypto custody and settlement workflows",
      "Automated regulatory reporting and audit trails generation",
    ],
    metric: "$400M+ in annual transaction volume processed with 99.999% ledger uptime",
  },
  {
    id: "logistics",
    tag: "SECTOR 03 // TRANSPORTATION & SUPPLY CHAIN",
    title: "Logistics, Supply Chain & Fleet Telematics",
    subtitle: "End-to-end visibility, predictive route optimization, and autonomous warehouse execution.",
    image: "/images/case-studies/cloud-devops.jpg",
    compliance: ["ISO 28000", "ELD Mandate", "DOT / FMCSA", "GS1 Standards"],
    description:
      "Global supply chains cannot tolerate blind spots. We develop end-to-end freight management systems (TMS), real-time GPS fleet telematics dashboards, automated warehouse management software (WMS), and cold-chain temperature telemetry platforms that optimize delivery routes and cut fuel costs.",
    solutions: [
      "Sub-second GPS vehicle telematics and driver safety scorecards",
      "Automated load-matching and dynamic multi-stop route optimization",
      "Real-time warehouse inventory scanning and automated robotic dispatch",
      "Cold-chain IoT sensor monitoring with automated excursion alerts",
      "Carrier portal with automated invoicing and electronic bill of lading (eBOL)",
    ],
    metric: "Reduced deadhead mileage by 18% and saved 14,000+ monthly driver hours",
  },
  {
    id: "manufacturing",
    tag: "SECTOR 04 // INDUSTRIAL AUTOMATION & IOT",
    title: "Manufacturing & Smart Factories (Industry 4.0)",
    subtitle: "Connecting shop-floor industrial PLCs to executive cloud intelligence in real time.",
    image: "/images/case-studies/erp-system.jpg",
    compliance: ["IEC 62443", "ISO 9001", "OPC-UA", "ISA-95"],
    description:
      "We bridge legacy industrial machinery with modern cloud analytics. Our engineers integrate industrial SCADA systems, PLCs, and edge compute devices using MQTT and OPC-UA protocols, giving manufacturing leaders real-time visibility into overall equipment effectiveness (OEE) and automated predictive maintenance alerts.",
    solutions: [
      "Edge-to-cloud telemetry ingest for industrial IoT sensors",
      "Predictive vibration and thermal maintenance anomaly detection",
      "Real-time shop-floor Overall Equipment Effectiveness (OEE) telemetry",
      "Computer vision camera inspection for automated defect detection",
      "Automated bill of materials (BOM) synchronization with ERP systems",
    ],
    metric: "Prevented 240+ hours of unplanned assembly line downtime annually",
  },
  {
    id: "retail",
    tag: "SECTOR 05 // COMMERCE & OMNICHANNEL",
    title: "High-Volume Retail & Omnichannel eCommerce",
    subtitle: "Headless commerce architectures built to withstand extreme flash-sale traffic peaks.",
    image: "/images/case-studies/crm-platform.jpg",
    compliance: ["PCI DSS", "GDPR", "CCPA", "WCAG 2.1 AA"],
    description:
      "Slow page speeds and stock discrepancies erode retail margins. We architect decoupled headless commerce engines that synchronize multi-location physical stores, online warehouses, and point-of-sale (POS) terminals in real time, delivering sub-second checkout speeds during Black Friday peaks.",
    solutions: [
      "Headless microservices commerce built on Next.js and Shopify Plus/commercetools",
      "Multi-region inventory synchronization with sub-second lock validation",
      "Personalized recommendation engines driven by clickstream behavior",
      "Omnichannel POS terminal integration and unified loyalty ledger",
      "Automated returns processing and reverse logistics workflows",
    ],
    metric: "+38% increase in mobile conversion rates with 100% flash-sale uptime",
  },
  {
    id: "energy",
    tag: "SECTOR 06 // ENERGY, UTILITIES & CLEANTECH",
    title: "Energy, Utilities & CleanTech Platforms",
    subtitle: "Smart grid telemetry, automated carbon accounting, and decentralized asset management.",
    image: "/images/case-studies/real-estate-ai.jpg",
    compliance: ["NERC CIP", "GHG Protocol", "ISO 14064", "IEC 61850"],
    description:
      "The energy transition demands software that can ingest millions of meter readings per minute. We engineer utility-scale telemetry software, automated Scope 1, 2, and 3 greenhouse gas carbon accounting platforms, and field service management tools for renewable solar and wind installations.",
    solutions: [
      "High-scale smart meter (AMI) time-series data ingestion pipelines",
      "Automated corporate carbon footprint accounting and ESG compliance reporting",
      "Renewable solar/wind asset telemetry and predictive degradation analysis",
      "Mobile dispatch for field technicians with offline GIS mapping",
      "Demand response and virtual power plant (VPP) coordination algorithms",
    ],
    metric: "Ingesting 85M+ daily time-series telemetry data points across 12 grids",
  },
];

const complianceBadges = [
  { name: "HIPAA Compliant", desc: "Healthcare patient data encryption & safeguards" },
  { name: "SOC 2 Type II", desc: "Rigorous security, availability & confidentiality controls" },
  { name: "PCI-DSS Level 1", desc: "Highest financial payment transaction security" },
  { name: "ISO/IEC 27001", desc: "Global standard for information security management" },
  { name: "GDPR / CCPA", desc: "Strict user privacy & sovereign data rights" },
  { name: "Zero-Trust Architecture", desc: "Perimeterless identity authentication across all nodes" },
];

export default function IndustriesPage() {
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
            <span>Specialized Sector Solutions</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]">
            Domain-Specialized IT for High-Stakes Sectors
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-[var(--mist)] leading-relaxed">
            Every industry possesses unique regulatory hurdles, legacy protocols, and mission-critical SLAs. We build tailored software that delivers compliance, security, and measurable competitive advantage.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-[var(--primary)] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(133,129,189,0.5)]"
            >
              Consult an Industry Specialist &rarr;
            </Link>
            <a
              href="#healthcare"
              className="rounded-lg border border-white/15 bg-white/5 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[var(--foam)] hover:bg-white/10 transition-colors"
            >
              View Industry Breakdown
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-4xl mx-auto border-t border-white/10 pt-10">
            <div>
              <span className="font-display text-3xl sm:text-4xl font-bold text-white">6</span>
              <p className="mt-1 text-xs text-[var(--mist)] uppercase tracking-wider">Core Verticals</p>
            </div>
            <div>
              <span className="font-display text-3xl sm:text-4xl font-bold text-[var(--primary)]">$400M+</span>
              <p className="mt-1 text-xs text-[var(--mist)] uppercase tracking-wider">Transactions Secured</p>
            </div>
            <div>
              <span className="font-display text-3xl sm:text-4xl font-bold text-white">100%</span>
              <p className="mt-1 text-xs text-[var(--mist)] uppercase tracking-wider">Audit Pass Rate</p>
            </div>
            <div>
              <span className="font-display text-3xl sm:text-4xl font-bold text-[var(--primary)]">4.2M+</span>
              <p className="mt-1 text-xs text-[var(--mist)] uppercase tracking-wider">Protected Patient Records</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Breakdown */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 space-y-24">
          {industries.map((ind, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={ind.id}
                id={ind.id}
                className="scroll-mt-32 grid gap-12 lg:grid-cols-12 items-center rounded-3xl border border-white/10 bg-[#090A12] p-6 sm:p-10 shadow-xl transition-all hover:border-white/20"
              >
                {/* Visual Column */}
                <div
                  className={`relative h-80 sm:h-96 lg:h-full min-h-[340px] w-full overflow-hidden rounded-2xl border border-white/10 lg:col-span-5 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Sector Metric */}
                  <div className="absolute bottom-4 inset-x-4 rounded-xl border border-white/15 bg-black/80 p-3.5 backdrop-blur-md">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--primary)] block">
                      Sector Benchmark
                    </span>
                    <p className="mt-1 text-xs font-medium text-[var(--foam)]">
                      {ind.metric}
                    </p>
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`flex flex-col lg:col-span-7 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                    {ind.tag}
                  </span>
                  <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {ind.title}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-[var(--mist)] italic">
                    {ind.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--mist)]">
                    {ind.description}
                  </p>

                  {/* Compliance Badges */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {ind.compliance.map((c) => (
                      <span
                        key={c}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-3 py-1 text-[11px] font-semibold text-[var(--primary)]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                        {c}
                      </span>
                    ))}
                  </div>

                  {/* Specialized Solutions */}
                  <div className="mt-6 space-y-2.5">
                    {ind.solutions.map((sol) => (
                      <div key={sol} className="flex items-start gap-3 text-xs text-[var(--foam)]">
                        <svg
                          className="h-4 w-4 shrink-0 text-[var(--primary)] mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--primary)] hover:underline"
                    >
                      <span>Inquire for {ind.title.split(" ")[0]} Solutions</span>
                      &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Compliance & Regulatory Standards */}
      <section className="relative bg-[#05060A] py-24 sm:py-32 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
              Enterprise Governance
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Compliance & Security Mandates
            </h2>
            <p className="mt-4 text-sm text-[var(--mist)] leading-relaxed">
              We engineer architectures from day one to withstand stringent third-party penetration audits and regulatory scrutiny.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {complianceBadges.map((badge) => (
              <div
                key={badge.name}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-[var(--primary)] transition-all"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-[var(--primary)] mb-4">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-display text-base font-bold text-white">
                  {badge.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--mist)]">
                  {badge.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 border-t border-white/10 bg-gradient-to-b from-[#090A13] to-[var(--ink)]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
            Need an Industry-Compliant Platform?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--mist)]">
            Our principal solutions architects possess deep domain knowledge in healthcare, fintech, and supply chain protocols.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-lg bg-[var(--primary)] px-8 py-4 text-xs font-bold uppercase tracking-wider text-black transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(133,129,189,0.5)]"
            >
              Speak to Our Sector Architects &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
