"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How long does it take to architect and deploy an enterprise solution?",
    a: "Core production systems and MVPs are typically delivered within 6 to 12 weeks using our agile bi-weekly sprint cadence. Full-scale ERP migrations and multi-module platforms are deployed through phased releases so your team gains operational value immediately without downtime.",
  },
  {
    q: "What engagement and pricing models do you offer?",
    a: "We provide two transparent engagement structures: Dedicated Monthly Engineering Squads (for high-velocity continuous feature delivery) and Fixed-Scope Milestone Contracts (for well-defined systems and turnkey migrations). All quotes include clear deliverables with zero hidden fees.",
  },
  {
    q: "Do we retain full ownership of the source code and IP?",
    a: "Yes, 100%. From the very first sprint commit, all Git repositories, Figma design systems, infrastructure-as-code scripts, and database models belong entirely to your organization under standard mutual IP agreements.",
  },
  {
    q: "How do you ensure data security and regulatory compliance?",
    a: "We adhere to enterprise security standards including SOC2 readiness, HIPAA compliance for healthcare data, and GDPR principles. All architectures feature automated role-based access control (RBAC), end-to-end data encryption, and vulnerability testing.",
  },
  {
    q: "Can Markslink integrate with our existing legacy systems or in-house developers?",
    a: "Yes. Our senior architects specialize in bridging modern cloud architectures with legacy mainframes, SQL databases, and third-party APIs. We work seamlessly alongside your internal developers or handle full turnkey execution.",
  },
  {
    q: "What does post-launch support and infrastructure SLA look like?",
    a: "We provide dedicated 24/7 SRE monitoring, automated uptime alerts, database backup snapshots, security patch releases, and continuous feature evolution under contractually guaranteed uptime SLAs (up to 99.99%).",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#06070B] py-24 sm:py-32 border-t border-white/10"
    >
      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-[#48427A] bg-[#19172E] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A79DFA]">
            <span>Clear Answers</span>
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-[#9D9AB8] sm:text-lg">
            Everything you need to know about our engineering methodology, intellectual property rights, and delivery standards.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#8B80F9]/80 bg-[#0E101D]/90 shadow-[0_0_30px_rgba(139,128,249,0.15)]"
                    : "border-white/10 bg-[#0E101D]/60 hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-6 sm:p-7 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-white pr-4">
                    {item.q}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-transform duration-300 ${
                      isOpen ? "rotate-180 border-[#8B80F9] text-[#A79DFA]" : "text-white/60"
                    }`}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-white/10 px-6 pb-6 pt-4 sm:px-7 sm:pb-7">
                    <p className="text-sm sm:text-base leading-relaxed text-[#9D9AB8]">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
