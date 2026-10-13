"use client";

import Link from "next/link";
import { ArrowRight, Layers, CloudRain, Cpu } from "lucide-react";

const caseStudies = [
  {
    id: "workflow-management",
    title: "Workflow Management",
    category: "IT Management",
    icon: Layers,
    image:
      "https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/selective-focus-of-information-security-analysts-using-charts-on-computer-monitors-while-working-in-1024x684.jpg",
    description:
      "Architected automated workflow routing systems reducing operational ticket resolution time by 62%.",
  },
  {
    id: "it-practices-in-cloud",
    title: "IT Practices In Cloud",
    category: "Cloud Computing",
    icon: CloudRain,
    image:
      "https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/working-team-of-interior-designers-1024x682.jpg",
    description:
      "Engineered multi-region auto-scaling Kubernetes cluster for 10M+ active daily transactions.",
  },
  {
    id: "software-for-financial",
    title: "Software For Financial",
    category: "Software Developer",
    icon: Cpu,
    image:
      "https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/web-developer-busy-working-1024x684.jpg",
    description:
      "Built bank-grade encryption microservice platform compliant with stringent PCI-DSS and SOC2 standards.",
  },
];

export default function MindtechCases() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold uppercase tracking-widest text-[#FF4255]">
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#272B36] leading-[1.2]">
            IT Solutions &amp; Projects
          </h2>
          <p className="text-base text-[#7A7A7A] font-light">
            Real-world transformations delivered by our specialized cross-functional engineering teams.
          </p>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#E6E6E6]/60 flex flex-col group e-animation-float"
              >
                {/* Image */}
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-[#272B36]/85 backdrop-blur-sm text-white px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#FF4255]/10 text-[#FF4255] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#FF4255]">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#272B36] group-hover:text-[#FF4255] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-[#7A7A7A] text-sm font-light leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E6E6E6]/60">
                    <Link
                      href={`/cases/${item.id}`}
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#272B36] group-hover:text-[#FF4255] transition-colors"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#F4F6F9] rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#E6E6E6]">
          <h4 className="text-2xl sm:text-3xl font-bold text-[#272B36] text-center sm:text-left">
            Working hard to earn our customers’ trust.
          </h4>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#FF4255] rounded-full hover:bg-[#272B36] transition-all duration-300 shadow-md hover:shadow-xl shrink-0"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
