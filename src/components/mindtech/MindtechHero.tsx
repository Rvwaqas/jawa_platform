"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Play } from "lucide-react";
import VideoModal from "./VideoModal";

const slides = [
  "https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/team-working-together-.jpg",
  "https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/team-of-software-engineers-in-office.jpg",
  "https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/teamwork-.jpg",
];

export default function MindtechHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Full 100vh screen hero section so no cards cut into the initial viewport */}
      <section className="relative h-screen min-h-[680px] lg:min-h-[760px] flex items-center overflow-hidden bg-[#1E222B]">
        {/* Background Slideshow with Ken Burns Effect */}
        {slides.map((slide, index) => (
          <div
            key={slide}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div
              className={`w-full h-full bg-cover bg-center ${
                index === currentSlide ? "animate-kenburns" : ""
              }`}
              style={{ backgroundImage: `url(${slide})` }}
            />
          </div>
        ))}

        {/* Soft, Transparent Overlay matching ThemeForest Original (warm clear view of desk & team) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/20" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <h1
                style={{ color: "#ffffff" }}
                className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold tracking-tight leading-[1.12] !text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]"
              >
                Modern IT &amp; Tech <br className="hidden sm:inline" />
                Service Solutions
              </h1>
              <p
                style={{ color: "#ffffff" }}
                className="text-base sm:text-lg !text-white font-normal max-w-xl leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-[14px] font-bold uppercase tracking-wider text-white bg-[#FF4255] hover:bg-[#272B36] rounded-[4px] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Video Play Button: White Circle with Red Triangle & Radar Rings */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative flex items-center justify-center w-36 h-36">
                {/* Concentric Pulsing Radar Rings */}
                <div className="absolute w-24 h-24 rounded-full border-2 border-[#FF4255]/70 glow-ripple-ring-1 pointer-events-none" />
                <div className="absolute w-24 h-24 rounded-full border-2 border-white/60 glow-ripple-ring-2 pointer-events-none" />
                <div className="absolute w-24 h-24 rounded-full border-2 border-[#FF4255]/50 glow-ripple-ring-3 pointer-events-none" />

                {/* Core Play Button (Pure White circle, Red icon, exactly like original) */}
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="relative z-10 w-20 h-20 rounded-full bg-white hover:bg-[#FF4255] text-[#FF4255] hover:text-white shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none group cursor-pointer"
                  aria-label="Play Video"
                >
                  <Play className="w-8 h-8 fill-current ml-1 transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Lightbox Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://www.youtube.com/embed/1MTkZPys7mU?autoplay=1"
      />
    </>
  );
}
