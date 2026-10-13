"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const blogPosts = [
  {
    slug: "benefits-of-software",
    title: "10 Efficient & Measurable Benefits of Software",
    date: "April 4, 2021",
    image:
      "https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/it-professional-works-on-startup-project-updates-software-and-database-on-mobile-phone-drinks-hot-1024x682.jpg",
    excerpt:
      "Modern enterprise software architectures enhance throughput, eliminate data fragmentation, and deliver real-time operational insights.",
  },
  {
    slug: "digital-conference-it-tech",
    title: "Digital Conference Of IT Tech Events in 2020",
    date: "April 4, 2021",
    image:
      "https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/top-view-of-asian-business-man-hand-working-with-teamwork-colleague-in-video-conference-1024x682.jpg",
    excerpt:
      "Global technology leaders convene to establish future standards in container orchestration, edge computing, and reactive systems.",
  },
  {
    slug: "data-security-business-values",
    title: "Data Security With Multiple Business Values",
    date: "April 4, 2021",
    image:
      "https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/selective-focus-of-information-security-analysts-using-charts-on-computer-monitors-while-working-in-1024x684.jpg",
    excerpt:
      "Implementing zero-trust architecture not only prevents malicious data breaches but builds vital enterprise valuation and client trust.",
  },
];

export default function MindtechBlog() {
  return (
    <section className="py-24 bg-[#F4F6F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold uppercase tracking-widest text-[#FF4255]">
            Our Blog
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#272B36] leading-[1.2]">
            Latest News &amp; Articles
          </h2>
          <p className="text-base text-[#7A7A7A] font-light">
            Stay updated with current industry breakthroughs, architectural best practices, and expert tech insights.
          </p>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#E6E6E6]/60 flex flex-col group e-animation-float"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#FF4255] uppercase tracking-wider mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#272B36] group-hover:text-[#FF4255] transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-[#7A7A7A] text-sm font-light leading-relaxed mt-2">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E6E6E6]/60">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#FF4255] hover:text-[#272B36] transition-colors"
                  >
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
