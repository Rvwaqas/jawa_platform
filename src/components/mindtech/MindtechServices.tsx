"use client";

import { useState } from "react";
import Link from "next/link";
import { BarChart3, ShieldAlert, Cloud, Code2, ArrowRight, Play } from "lucide-react";
import VideoModal from "./VideoModal";

const services = [
  {
    icon: BarChart3,
    title: "IT Management",
    description: "Holistic monitoring, governance, infrastructure lifecycle optimization, and strategic technology consulting.",
    slug: "it-management",
  },
  {
    icon: ShieldAlert,
    title: "Cyber Security",
    description: "Proactive threat intelligence, vulnerability mitigation, compliance architecture, and real-time network defense.",
    slug: "cyber-security",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "High-scale multi-cloud orchestration, serverless microservices, cloud migration, and automated DevOps.",
    slug: "cloud-computing",
  },
  {
    icon: Code2,
    title: "Software Developer",
    description: "Full-stack enterprise application engineering, scalable APIs, AI integration, and cross-platform solutions.",
    slug: "software-developer",
  },
];

export default function MindtechServices() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="py-24 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="text-sm font-bold uppercase tracking-widest text-[#FF4255]">
                Our Services
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#272B36] leading-[1.2]">
                Solutions &amp; Focus Areas
              </h2>
              <p className="text-base text-[#7A7A7A] font-light">
                Comprehensive digital engineering and IT management capabilities structured to solve enterprise-level challenges.
              </p>
            </div>
            <div>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#FF4255] rounded-full hover:bg-[#272B36] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                All Services
              </Link>
            </div>
          </div>

          {/* Services Grid (4 Cards + 1 Video Card) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="hover_from_bottom e-animation-float bg-white rounded-xl p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#E6E6E6]/60 flex flex-col justify-between group transition-all duration-300"
                >
                  <div>
                    <div className="w-16 h-16 rounded-xl bg-[#F4F6F9] group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-[#FF4255] group-hover:text-white transition-colors duration-300" />
                    </div>

                    <h3 className="text-2xl font-bold text-[#272B36] group-hover:text-white mb-3 transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-[15px] text-[#7A7A7A] group-hover:text-white/90 leading-relaxed font-light mb-8 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>

                  <Link
                    href={`/services#${item.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#FF4255] group-hover:text-white transition-colors duration-300"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}

            {/* 5th Card: Video Showcase Card with Play Radar */}
            <div className="relative rounded-xl overflow-hidden min-h-[300px] flex items-center justify-center shadow-xl group border border-white/10 lg:col-span-2">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('/images/services/service-banner.jpg')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#272B36]/90 via-[#272B36]/70 to-[#FF4255]/70 backdrop-blur-[1px]" />

              <div className="relative z-10 text-center p-8 space-y-4 max-w-lg">
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="w-18 h-18 rounded-full bg-[#FF4255] hover:bg-white text-white hover:text-[#FF4255] shadow-2xl flex items-center justify-center mx-auto transition-all duration-300 transform hover:scale-110 group/btn"
                  aria-label="Play Video"
                >
                  <Play className="w-7 h-7 fill-current ml-1" />
                </button>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Watch Our Operational Process In Action
                </h3>
                <p className="text-white/80 text-sm font-light">
                  Discover how our certified engineers build resilient digital ecosystems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://www.youtube.com/embed/1MTkZPys7mU?autoplay=1"
      />
    </>
  );
}
