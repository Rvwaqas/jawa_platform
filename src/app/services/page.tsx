import MindtechHeader from "@/components/mindtech/MindtechHeader";
import MindtechFooter from "@/components/mindtech/MindtechFooter";
import PageBanner from "@/components/mindtech/PageBanner";
import MindtechQuoteForm from "@/components/mindtech/MindtechQuoteForm";
import ScrollToTop from "@/components/mindtech/ScrollToTop";
import Link from "next/link";
import {
  BarChart3,
  ShieldAlert,
  Cloud,
  Code2,
  Server,
  Database,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "Services – JAWA IT Solutions",
};

export default function ServicesPage() {
  const allServices = [
    {
      id: "it-management",
      icon: BarChart3,
      image: "/images/services/service-1.jpg",
      title: "IT Management & Strategy",
      desc: "End-to-end technology oversight, ITIL-compliant process automation, SLA tracking, and resource alignment.",
      features: ["24/7 Incident Governance", "Asset Lifecycle Auditing", "IT Cost Optimization"],
    },
    {
      id: "cyber-security",
      icon: ShieldAlert,
      image: "/images/services/service-3.jpg",
      title: "Enterprise Cyber Security",
      desc: "Fortified threat prevention, network penetration testing, identity access management, and automated SIEM monitoring.",
      features: ["Zero-Trust Security Perimeter", "Penetration Testing", "Compliance (SOC2 / GDPR)"],
    },
    {
      id: "cloud-computing",
      icon: Cloud,
      image: "/images/services/service-2.jpg",
      title: "Cloud Infrastructure & DevOps",
      desc: "Modern multi-cloud architecture (AWS, Azure, GCP), microservices orchestration, and zero-downtime CI/CD automation.",
      features: ["Kubernetes & Docker", "Serverless Migrations", "Automated Disaster Recovery"],
    },
    {
      id: "software-developer",
      icon: Code2,
      image: "/images/services/service-6.jpg",
      title: "Custom Software Development",
      desc: "High-performance enterprise web and mobile applications engineered with scalable, clean-code methodologies.",
      features: ["Full-Stack Architecture", "High-Throughput APIs", "Legacy System Modernization"],
    },
    {
      id: "infrastructure",
      icon: Server,
      image: "/images/services/service-4.jpg",
      title: "Network & Server Solutions",
      desc: "Resilient on-premise, hybrid, and datacenter hardware maintenance engineered for 99.999% uptime guarantees.",
      features: ["SD-WAN Networking", "High-Availability Clusters", "Hardware Virtualization"],
    },
    {
      id: "data-analytics",
      icon: Database,
      image: "/images/services/service-5.jpg",
      title: "Data Analytics & Intelligence",
      desc: "Data pipeline engineering, data warehousing, predictive machine learning models, and executive BI dashboards.",
      features: ["Real-Time Data Pipelines", "Predictive Analytics", "Executive BI Dashboards"],
    },
  ];

  const steps = [
    { step: "01", title: "Discovery & Analysis", desc: "Detailed technical audit of existing systems and organizational objectives." },
    { step: "02", title: "Architectural Blueprint", desc: "Designing scalable specifications, security protocols, and timelines." },
    { step: "03", title: "Agile Implementation", desc: "Iterative sprints, rigorous QA testing, and seamless deployment." },
    { step: "04", title: "24/7 Managed Support", desc: "Proactive telemetry monitoring, optimization, and constant updates." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <MindtechHeader />
      <main className="flex-1">
        <PageBanner
          title="Our Services"
          breadcrumbs={[{ label: "Services" }]}
          backgroundImage="/images/services/service-banner.jpg"
        />

        {/* Services Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-sm font-bold uppercase tracking-widest text-[#FF4255]">
                What We Offer
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#272B36]">
                Comprehensive IT &amp; Engineering Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className="hover_from_bottom e-animation-float bg-white rounded-2xl border border-[#E6E6E6]/70 shadow-[0_10px_30px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl"
                  >
                    {/* Card Top Image matching Screenshot 2 */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-md text-[#FF4255] shadow-md flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-[#272B36] group-hover:text-[#FF4255] mb-3 transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-sm text-[#7A7A7A] font-light leading-relaxed mb-6">
                          {service.desc}
                        </p>

                        <ul className="space-y-2 mb-8">
                          {service.features.map((feat) => (
                            <li
                              key={feat}
                              className="flex items-center gap-2 text-xs font-semibold text-[#272B36]"
                            >
                              <CheckCircle className="w-4 h-4 text-[#FF4255] shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#FF4255] hover:text-[#272B36] transition-colors mt-auto"
                      >
                        <span>Inquire Service</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Operational Workflow Steps */}
        <section className="py-24 bg-[#272B36] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-sm font-bold uppercase tracking-widest text-[#FF4255]">
                Our Process
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                How We Deliver Operational Excellence
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className="bg-white/5 border border-white/10 rounded-xl p-8 relative overflow-hidden e-animation-float"
                >
                  <div className="text-5xl font-black text-[#FF4255]/40 mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-white/70 font-light leading-relaxed">
                    {item.desc}
                  </p>
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
