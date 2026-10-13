import MindtechHeader from "@/components/mindtech/MindtechHeader";
import MindtechFooter from "@/components/mindtech/MindtechFooter";
import PageBanner from "@/components/mindtech/PageBanner";
import ScrollToTop from "@/components/mindtech/ScrollToTop";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Calendar, User, Briefcase, Award } from "lucide-react";

export default async function CaseDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <MindtechHeader />
      <main className="flex-1">
        <PageBanner
          title="Case Details"
          breadcrumbs={[
            { label: "Case Studies", href: "/cases" },
            { label: "Case Details" },
          ]}
        />

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Main Content */}
              <div className="lg:col-span-8 space-y-10">
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-video relative">
                  <img
                    src="https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/selective-focus-of-information-security-analysts-using-charts-on-computer-monitors-while-working-in-1024x684.jpg"
                    alt="Case study main demonstration"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#272B36]">
                    Project Overview &amp; Business Mandate
                  </h2>
                  <p className="text-base text-[#7A7A7A] font-light leading-relaxed">
                    Our client approached JAWA to modernize their mission-critical transaction platform which suffered from frequent concurrency bottlenecks and legacy technical debt. The project demanded continuous zero-downtime execution while serving over 4 million active consumers.
                  </p>
                </div>

                <div className="space-y-4 bg-[#F4F6F9] p-8 rounded-2xl border border-[#E6E6E6]">
                  <h3 className="text-2xl font-bold text-[#272B36]">
                    The Core Engineering Challenge
                  </h3>
                  <p className="text-sm text-[#7A7A7A] font-light leading-relaxed">
                    Synchronizing distributed databases across three continents with millisecond latency, satisfying strict PCI-DSS Grade 1 security audits, and establishing automated rollback capabilities without interrupting live customer checkouts.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#272B36]">
                    Our Architectural Solution
                  </h3>
                  <p className="text-sm text-[#7A7A7A] font-light leading-relaxed">
                    JAWA architected a distributed event-driven topology using Golang microservices and Apache Kafka. Kubernetes clusters were provisioned across multiple cloud regions with automated DNS failover and TLS 1.3 mutual handshake authentication.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {[
                      "Decoupled microservice architecture",
                      "Sub-50ms international latency routing",
                      "Automated SOC2 compliance logging",
                      "Zero-downtime blue/green deployment",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-sm font-semibold text-[#272B36]">
                        <CheckCircle2 className="w-5 h-5 text-[#FF4255] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href="/cases"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#FF4255] hover:text-[#272B36] transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to all cases</span>
                  </Link>
                </div>
              </div>

              {/* Sidebar Meta Box */}
              <div className="lg:col-span-4 bg-[#F4F6F9] rounded-2xl p-8 border border-[#E6E6E6] space-y-6 sticky top-28">
                <h4 className="text-xl font-bold text-[#272B36] border-b border-[#E6E6E6] pb-4">
                  Project Metadata
                </h4>

                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <User className="w-4 h-4 text-[#FF4255]" />
                    <div>
                      <span className="text-xs text-[#7A7A7A] block">Client:</span>
                      <strong className="text-[#272B36]">FinTech Global Inc.</strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Briefcase className="w-4 h-4 text-[#FF4255]" />
                    <div>
                      <span className="text-xs text-[#7A7A7A] block">Category:</span>
                      <strong className="text-[#272B36]">Cloud &amp; IT Security</strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-[#FF4255]" />
                    <div>
                      <span className="text-xs text-[#7A7A7A] block">Duration:</span>
                      <strong className="text-[#272B36]">6 Months Sprint</strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-[#FF4255]" />
                    <div>
                      <span className="text-xs text-[#7A7A7A] block">Key Result:</span>
                      <strong className="text-emerald-600">62% Performance Gain</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E6E6E6]">
                  <Link
                    href="/contact"
                    className="w-full text-center block py-3.5 px-6 rounded-full bg-[#FF4255] hover:bg-[#272B36] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md"
                  >
                    Start Similar Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MindtechFooter />
    </div>
  );
}
