import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageBannerProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  backgroundImage?: string;
}

export default function PageBanner({
  title,
  breadcrumbs,
  backgroundImage = "/images/services/service-banner.jpg",
}: PageBannerProps) {
  return (
    <section className="relative pt-40 pb-24 text-white overflow-hidden bg-[#272B36]">
      {/* Background Image Layer - Bright and Clear */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />

      {/* Light Overlay to preserve image brightness */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1F222B]/60 via-transparent to-[#1F222B]/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h1
          style={{ color: "#ffffff" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
        >
          {title}
        </h1>

        {/* Breadcrumb links */}
        <nav className="flex items-center justify-center gap-2 text-sm font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          <Link href="/" className="text-white hover:text-[#FF4255] transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb) => (
            <div key={crumb.label} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-[#FF4255]" />
              {crumb.href ? (
                <Link href={crumb.href} className="text-white hover:text-[#FF4255] transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#FF4255] font-bold">{crumb.label}</span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
}
