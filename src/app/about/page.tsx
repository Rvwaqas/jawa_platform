import MindtechHeader from "@/components/mindtech/MindtechHeader";
import MindtechFooter from "@/components/mindtech/MindtechFooter";
import PageBanner from "@/components/mindtech/PageBanner";
import MindtechAbout from "@/components/mindtech/MindtechAbout";
import MindtechClients from "@/components/mindtech/MindtechClients";
import MindtechQuoteForm from "@/components/mindtech/MindtechQuoteForm";
import ScrollToTop from "@/components/mindtech/ScrollToTop";
import { Award, Users, Shield, Rocket } from "lucide-react";

export const metadata = {
  title: "About Us – JAWA IT Solutions",
};

export default function AboutPage() {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "130+", label: "Certified Engineers" },
    { value: "500+", label: "Completed Projects" },
    { value: "99.4%", label: "Client Satisfaction" },
  ];

  const values = [
    {
      icon: Award,
      title: "Quality First",
      desc: "Zero-compromise engineering protocols that adhere to international ISO & SOC standards.",
    },
    {
      icon: Users,
      title: "Client Centric",
      desc: "Dedicated project squads embedded directly into your workflow for total alignment.",
    },
    {
      icon: Shield,
      title: "Data Integrity",
      desc: "Enterprise data governance, zero-trust security perimeter, and full GDPR compliance.",
    },
    {
      icon: Rocket,
      title: "Rapid Delivery",
      desc: "Agile sprints, CI/CD automated deployment pipelines, and continuous value realization.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <MindtechHeader />
      <main className="flex-1">
        <PageBanner
          title="About Us"
          breadcrumbs={[{ label: "About Us" }]}
        />

        <MindtechAbout />

        {/* Counter Stats Bar */}
        <section className="py-16 bg-[#272B36] text-white border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <div className="text-4xl sm:text-5xl font-black text-[#FF4255]">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-white/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-[#F4F6F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-sm font-bold uppercase tracking-widest text-[#FF4255]">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#272B36]">
                Our Fundamental Core Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="bg-white p-8 rounded-xl border border-[#E6E6E6]/60 shadow-[0_10px_30px_rgba(0,0,0,0.04)] e-animation-float"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[#FF4255]/10 text-[#FF4255] flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-[#272B36] mb-3">
                      {val.title}
                    </h3>
                    <p className="text-sm text-[#7A7A7A] font-light leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <MindtechClients />
        <MindtechQuoteForm />
      </main>
      <MindtechFooter />
    </div>
  );
}
