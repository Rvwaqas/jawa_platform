"use client";

import { useState } from "react";
import MindtechHeader from "@/components/mindtech/MindtechHeader";
import MindtechFooter from "@/components/mindtech/MindtechFooter";
import PageBanner from "@/components/mindtech/PageBanner";
import MindtechQuoteForm from "@/components/mindtech/MindtechQuoteForm";
import ScrollToTop from "@/components/mindtech/ScrollToTop";
import { ChevronDown } from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What types of IT services does JAWA specialize in?",
      a: "JAWA specializes in enterprise software development, multi-cloud infrastructure orchestration (AWS, GCP, Azure), cybersecurity penetration testing, 24/7 IT management, and distributed data analytics.",
    },
    {
      q: "How does JAWA guarantee infrastructure uptime and security?",
      a: "We implement zero-trust network boundaries, automated disaster recovery failover clusters, and 24/7 SIEM monitoring backed by rigid 99.999% Service Level Agreements (SLAs).",
    },
    {
      q: "What is your onboarding timeline for new enterprise engagements?",
      a: "Typically, our technical discovery sprint takes 1 to 2 weeks, during which we audit architecture, define milestones, and embed a dedicated team squad.",
    },
    {
      q: "Do you support hybrid and on-premise cloud migrations?",
      a: "Yes. Our engineers have migrated dozens of complex legacy datacenters into hybrid and private clouds with zero interruption to live business transactions.",
    },
    {
      q: "How does pricing and contract engagement work?",
      a: "We offer both flexible monthly subscription plans and dedicated milestone-driven project contracts with transparent deliverables and zero hidden fees.",
    },
    {
      q: "Will we retain complete ownership of all source code and intellectual property?",
      a: "Absolutely. 100% of all code, configuration files, architectural diagrams, and intellectual assets belong exclusively to you upon project milestone delivery.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <MindtechHeader />
      <main className="flex-1">
        <PageBanner
          title="Frequently Asked Questions"
          breadcrumbs={[{ label: "FAQ" }]}
        />

        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-3">
              <span className="text-sm font-bold uppercase tracking-widest text-[#FF4255]">
                Got Questions?
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#272B36]">
                Answers To Common Queries
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-[#E6E6E6] rounded-2xl overflow-hidden transition-all duration-200 bg-[#F4F6F9]"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 font-bold text-lg text-[#272B36] hover:text-[#FF4255] transition-colors focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#FF4255] shrink-0 transition-transform duration-300 ${
                        openIndex === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openIndex === idx && (
                    <div className="px-6 sm:px-7 pb-6 text-[#7A7A7A] text-[15px] font-light leading-relaxed border-t border-[#E6E6E6]/60 pt-4 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <MindtechQuoteForm />
      </main>
      <MindtechFooter />
    </div>
  );
}
