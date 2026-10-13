import MindtechHeader from "@/components/mindtech/MindtechHeader";
import MindtechFooter from "@/components/mindtech/MindtechFooter";
import PageBanner from "@/components/mindtech/PageBanner";
import ScrollToTop from "@/components/mindtech/ScrollToTop";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Tag, Search, ChevronRight } from "lucide-react";

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <MindtechHeader />
      <main className="flex-1">
        <PageBanner
          title="Single Blog"
          breadcrumbs={[
            { label: "Blog", href: "/blog" },
            { label: "Single Blog" },
          ]}
        />

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Main Article Body */}
              <article className="lg:col-span-8 space-y-8">
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-video relative">
                  <img
                    src="https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/it-professional-works-on-startup-project-updates-software-and-database-on-mobile-phone-drinks-hot-1024x682.jpg"
                    alt="Article featured header"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center gap-6 text-sm text-[#7A7A7A] pb-4 border-b border-[#E6E6E6]">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#FF4255]" />
                    <span>April 4, 2021</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#FF4255]" />
                    <span>Roxie Hodgson</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-[#FF4255]" />
                    <span>Software &amp; IT</span>
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#272B36] leading-snug">
                  10 Efficient &amp; Measurable Benefits of Software Modernization
                </h1>

                <div className="prose prose-lg max-w-none text-[#7A7A7A] font-light leading-relaxed space-y-6">
                  <p>
                    In today’s hyper-competitive digital economy, relying on monolithic legacy infrastructure introduces escalating costs, security vulnerabilities, and agility roadblocks. Modernizing your software stack through containerized microservices and reactive pipelines unlocks measurable operational acceleration.
                  </p>

                  <h3 className="text-2xl font-bold text-[#272B36] mt-8">
                    1. Eliminating Single Points of Failure
                  </h3>
                  <p>
                    Distributed cloud topologies isolate failures to individual pods without degrading global user sessions. Self-healing Kubernetes operators detect anomalies in sub-second intervals and deploy replacements without manual intervention.
                  </p>

                  <blockquote className="p-6 bg-[#F4F6F9] border-l-4 border-[#FF4255] rounded-r-xl italic text-[#272B36] font-medium my-6">
                    &ldquo;Companies that invest proactively in modular enterprise architecture decrease technical remediation debt by over 70% within their first 18 months.&rdquo;
                  </blockquote>

                  <h3 className="text-2xl font-bold text-[#272B36] mt-8">
                    2. Enhanced Security Perimeter &amp; Compliance
                  </h3>
                  <p>
                    Modernization introduces continuous automated vulnerability scanning, immutable infrastructure definitions, and role-based zero-trust encryption across all ingress and egress boundaries.
                  </p>
                </div>

                <div className="pt-8 border-t border-[#E6E6E6]">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#FF4255] hover:text-[#272B36] transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to all articles</span>
                  </Link>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-4 space-y-10">
                {/* Search Box */}
                <div className="bg-[#F4F6F9] p-8 rounded-2xl border border-[#E6E6E6]">
                  <h4 className="text-lg font-bold text-[#272B36] mb-4">Search</h4>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="w-full px-4 py-3 pr-10 rounded-lg bg-white border border-[#E6E6E6] text-sm text-[#272B36] focus:outline-none focus:border-[#FF4255]"
                    />
                    <Search className="w-4 h-4 text-[#7A7A7A] absolute right-3.5 top-3.5" />
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-[#F4F6F9] p-8 rounded-2xl border border-[#E6E6E6]">
                  <h4 className="text-lg font-bold text-[#272B36] mb-4">Categories</h4>
                  <ul className="space-y-2.5 text-sm">
                    {[
                      { name: "IT Management", count: 12 },
                      { name: "Cyber Security", count: 8 },
                      { name: "Cloud Computing", count: 15 },
                      { name: "Software Development", count: 19 },
                      { name: "Artificial Intelligence", count: 6 },
                    ].map((cat) => (
                      <li key={cat.name} className="flex items-center justify-between text-[#7A7A7A] hover:text-[#FF4255] transition-colors cursor-pointer">
                        <span className="flex items-center gap-2">
                          <ChevronRight className="w-3.5 h-3.5 text-[#FF4255]" />
                          {cat.name}
                        </span>
                        <span className="text-xs bg-white px-2 py-0.5 rounded-full border border-[#E6E6E6]">
                          {cat.count}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct CTA Box */}
                <div className="bg-[#272B36] text-white p-8 rounded-2xl text-center space-y-4">
                  <h4 className="text-xl font-bold">Need IT Guidance?</h4>
                  <p className="text-xs text-white/70 leading-relaxed font-light">
                    Consult with our senior architects today for personalized recommendations.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block py-3 px-6 rounded-full bg-[#FF4255] hover:bg-white hover:text-[#272B36] font-bold text-xs uppercase tracking-wider transition-all duration-300"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <MindtechFooter />
    </div>
  );
}
