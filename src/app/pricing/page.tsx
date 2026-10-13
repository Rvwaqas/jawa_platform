import MindtechHeader from "@/components/mindtech/MindtechHeader";
import MindtechFooter from "@/components/mindtech/MindtechFooter";
import PageBanner from "@/components/mindtech/PageBanner";
import ScrollToTop from "@/components/mindtech/ScrollToTop";
import Link from "next/link";
import { Check, Zap } from "lucide-react";

export const metadata = {
  title: "Pricing Plans – JAWA IT Solutions",
};

export default function PricingPage() {
  const plans = [
    {
      name: "Starter Plan",
      price: "$49",
      period: "/month",
      desc: "Essential support and cloud monitoring for growing tech startups.",
      popular: false,
      features: [
        "Up to 5 Cloud Instances",
        "24/7 Email & Chat Support",
        "Weekly Security Audits",
        "Automated Backup (Daily)",
        "Basic Telemetry Dashboard",
      ],
      cta: "Choose Starter",
    },
    {
      name: "Business Plan",
      price: "$99",
      period: "/month",
      desc: "Robust managed infrastructure for scaling mid-market enterprises.",
      popular: true,
      features: [
        "Up to 25 Cloud Instances",
        "Priority 24/7 Phone Support",
        "Real-Time Penetration Defense",
        "Automated Disaster Failover",
        "Advanced BI & KPI Analytics",
        "Dedicated DevOps Squad",
      ],
      cta: "Choose Business",
    },
    {
      name: "Enterprise Plan",
      price: "$199",
      period: "/month",
      desc: "Full-scale custom engineering, governance, and multi-cloud operations.",
      popular: false,
      features: [
        "Unlimited Cloud Scaling",
        "Dedicated Enterprise Architect",
        "Zero-Trust Custom Perimeter",
        "Multi-Cloud Cross-Replication",
        "Custom AI Workflow Integration",
        "99.999% SLA Uptime Guarantee",
      ],
      cta: "Choose Enterprise",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <MindtechHeader />
      <main className="flex-1">
        <PageBanner
          title="Pricing Plans"
          breadcrumbs={[{ label: "Pricing" }]}
        />

        <section className="py-24 bg-[#F4F6F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
              <span className="text-sm font-bold uppercase tracking-widest text-[#FF4255]">
                Transparent Pricing
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#272B36]">
                Flexible Plans Tailored To Your Growth
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`bg-white rounded-2xl p-8 sm:p-10 border flex flex-col justify-between relative transition-all duration-300 e-animation-float ${
                    plan.popular
                      ? "border-[#FF4255] shadow-2xl scale-105 z-10"
                      : "border-[#E6E6E6] shadow-sm"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF4255] text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full flex items-center gap-1 shadow-md">
                      <Zap className="w-3 h-3 fill-current" />
                      <span>Most Popular</span>
                    </div>
                  )}

                  <div>
                    <h3 className="text-2xl font-bold text-[#272B36] mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-[#7A7A7A] font-light mb-6">
                      {plan.desc}
                    </p>

                    <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-[#E6E6E6]">
                      <span className="text-5xl font-black text-[#272B36]">
                        {plan.price}
                      </span>
                      <span className="text-[#7A7A7A] text-sm font-medium">
                        {plan.period}
                      </span>
                    </div>

                    <ul className="space-y-3.5 mb-8">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-3 text-sm text-[#272B36]">
                          <div className="w-4 h-4 rounded-full bg-[#FF4255]/10 text-[#FF4255] flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className={`w-full py-4 text-center rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                      plan.popular
                        ? "bg-[#FF4255] hover:bg-[#272B36] text-white shadow-lg hover:shadow-xl"
                        : "bg-[#272B36] hover:bg-[#FF4255] text-white"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <MindtechFooter />
    </div>
  );
}
