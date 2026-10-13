"use client";

import Link from "next/link";
import { Headphones, Headphones as ClockSupport, ChevronRight } from "lucide-react";

export default function MindtechFeatures() {
  return (
    <section className="relative -mt-24 sm:-mt-28 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: IT Expertise (White Card with Red Icon) */}
        <div className="bg-white rounded-xl p-8 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-[#E6E6E6]/80 text-center flex flex-col items-center justify-between e-animation-float transition-all duration-300 min-h-[320px]">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-5">
            <svg
              className="w-12 h-12 text-[#FF4255]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              <circle cx="12" cy="11" r="3" />
              <path d="M7 21h10" />
            </svg>
          </div>

          <h3 className="text-2xl font-bold text-[#272B36] mb-3">
            IT Expertise
          </h3>

          <p className="text-[14px] text-[#7A7A7A] leading-relaxed font-light mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </p>
          <div className="h-4" />
        </div>

        {/* Card 2: 24/7 IT Support (White Card with Red 24/7 Icon) */}
        <div className="bg-white rounded-xl p-8 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-[#E6E6E6]/80 text-center flex flex-col items-center justify-between e-animation-float transition-all duration-300 min-h-[320px]">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-5">
            <svg
              className="w-12 h-12 text-[#FF4255]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              <circle cx="12" cy="12" r="4" />
              <polyline points="12 10 12 12 14 12" />
            </svg>
          </div>

          <h3 className="text-2xl font-bold text-[#272B36] mb-3">
            24/7 IT Support
          </h3>

          <p className="text-[14px] text-[#7A7A7A] leading-relaxed font-light mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </p>
          <div className="h-4" />
        </div>

        {/* Card 3: Custom Request (SOLID RED Card with White Button, exactly like Image 4) */}
        <div className="bg-[#FF4255] rounded-xl p-8 sm:p-10 shadow-[0_15px_40px_rgba(255,66,85,0.3)] text-center flex flex-col items-center justify-between text-white e-animation-float transition-all duration-300 min-h-[320px]">
          <div className="w-full flex-1 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Custom Request
            </h3>

            <p className="text-[14px] text-white/95 leading-relaxed font-light mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>

          <Link
            href="/contact"
            className="w-full sm:w-auto bg-white hover:bg-[#272B36] text-[#FF4255] hover:text-white font-bold text-xs uppercase tracking-wider py-3.5 px-8 rounded-[4px] inline-flex items-center justify-center gap-1.5 shadow-md transition-all duration-300"
          >
            <span>FIND SOLUTION</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
