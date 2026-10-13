import MindtechHeader from "@/components/mindtech/MindtechHeader";
import MindtechFooter from "@/components/mindtech/MindtechFooter";
import PageBanner from "@/components/mindtech/PageBanner";
import ScrollToTop from "@/components/mindtech/ScrollToTop";
import Link from "next/link";
import { ArrowRight, Layers, CloudRain, Cpu, ShieldCheck, Database, Server } from "lucide-react";

export const metadata = {
  title: "Case Studies – JAWA IT Solutions",
};

export default function CasesPage() {
  const cases = [
    {
      id: "workflow-management",
      title: "Workflow Management System",
      category: "IT Management",
      icon: Layers,
      image:
        "https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/selective-focus-of-information-security-analysts-using-charts-on-computer-monitors-while-working-in-1024x684.jpg",
      description:
        "Engineered intelligent workflow orchestration platform reducing support backlog by 62% for enterprise logistics.",
      results: "62% Faster Resolution",
    },
    {
      id: "it-practices-in-cloud",
      title: "IT Practices In Cloud Scaling",
      category: "Cloud Computing",
      icon: CloudRain,
      image:
        "https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/working-team-of-interior-designers-1024x682.jpg",
      description:
        "Migrated legacy monolithic infrastructure to a self-healing Kubernetes cluster across 3 availability zones.",
      results: "99.999% SLA Uptime",
    },
    {
      id: "software-for-financial",
      title: "Software For Financial Compliance",
      category: "Software Developer",
      icon: Cpu,
      image:
        "https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/web-developer-busy-working-1024x684.jpg",
      description:
        "Developed bank-grade cryptographic transaction microservice handling 15,000 requests per second.",
      results: "Zero Security Vulnerabilities",
    },
    {
      id: "zero-trust-defense",
      title: "Zero-Trust Cyber Defense System",
      category: "Cyber Security",
      icon: ShieldCheck,
      image:
        "https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/it-professional-works-on-startup-project-updates-software-and-database-on-mobile-phone-drinks-hot-1024x682.jpg",
      description:
        "Instituted centralized identity governance, automated threat containment, and continuous biometric authentication.",
      results: "100% Threat Interception",
    },
    {
      id: "real-time-bi-telemetry",
      title: "Real-Time Enterprise BI Telemetry",
      category: "Data Analytics",
      icon: Database,
      image:
        "https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/top-view-of-asian-business-man-hand-working-with-teamwork-colleague-in-video-conference-1024x682.jpg",
      description:
        "Deployed distributed Kafka event stream ingesting over 500M data points daily with sub-second dashboard rendering.",
      results: "Sub-Second Ingestion",
    },
    {
      id: "hybrid-cloud-migration",
      title: "Hybrid Cloud Migration & SD-WAN",
      category: "Infrastructure",
      icon: Server,
      image:
        "https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/team-working-together-.jpg",
      description:
        "Re-engineered corporate WAN infrastructure across 45 distributed branches with redundant failovers.",
      results: "38% Network Latency Cut",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <MindtechHeader />
      <main className="flex-1">
        <PageBanner
          title="Case Studies"
          breadcrumbs={[{ label: "Case Studies" }]}
        />

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-sm font-bold uppercase tracking-widest text-[#FF4255]">
                Our Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#272B36]">
                Transformative Client Case Studies
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cases.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#E6E6E6]/70 flex flex-col group e-animation-float"
                  >
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

                    <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="w-4 h-4 text-[#FF4255]" />
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

                      <div className="pt-4 border-t border-[#E6E6E6]/60 flex items-center justify-between">
                        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                          {item.results}
                        </span>
                        <Link
                          href={`/cases/${item.id}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#272B36] group-hover:text-[#FF4255] transition-colors"
                        >
                          <span>Details</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <MindtechFooter />
    </div>
  );
}
