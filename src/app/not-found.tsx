import MindtechHeader from "@/components/mindtech/MindtechHeader";
import MindtechFooter from "@/components/mindtech/MindtechFooter";
import PageBanner from "@/components/mindtech/PageBanner";
import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <MindtechHeader />
      <main className="flex-1">
        <PageBanner
          title="404 Page"
          breadcrumbs={[{ label: "404 Page" }]}
        />

        <section className="py-24 text-center">
          <div className="max-w-2xl mx-auto px-4 space-y-6">
            <div className="text-8xl sm:text-9xl font-black text-[#FF4255] tracking-tight">
              404
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#272B36]">
              Oops! That Page Can’t Be Found.
            </h2>

            <p className="text-base text-[#7A7A7A] font-light max-w-md mx-auto">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            {/* Search Box */}
            <div className="max-w-md mx-auto relative pt-4">
              <input
                type="text"
                placeholder="Search our website..."
                className="w-full px-5 py-3.5 pr-12 rounded-full bg-[#F4F6F9] border border-[#E6E6E6] text-sm text-[#272B36] focus:outline-none focus:border-[#FF4255]"
              />
              <button
                type="button"
                className="absolute right-2 top-6 w-9 h-9 rounded-full bg-[#FF4255] text-white flex items-center justify-center hover:bg-[#272B36] transition-colors"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FF4255] hover:bg-[#272B36] text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Homepage</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <MindtechFooter />
    </div>
  );
}
