"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Abbi Finnegan",
    role: "CEO, A Startup",
    avatar: "https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/3SUMAU.jpg",
    content:
      "JAWA transformed our legacy infrastructure into a cloud-native powerhouse. Their engineers are proactive, dedicated, and consistently deliver beyond expectations.",
  },
  {
    name: "Marianna Dudley",
    role: "Co-Founder HCM",
    avatar: "https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/CASCKD8.jpg",
    content:
      "The cyber security audit and mitigation protocols designed by JAWA protected our client financial records during a high-stakes migration. Invaluable partners.",
  },
  {
    name: "Henley Burch",
    role: "Entrepreneur",
    avatar: "https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/MKLVKTE.jpg",
    content:
      "Working with JAWA gave us the architectural velocity to scale 4x in less than nine months without a single second of unexpected downtime.",
  },
];

export default function MindtechTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="bg-[#272B36] text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Since 2005 Experience Banner */}
          <div className="lg:col-span-5 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 relative overflow-hidden e-animation-float">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 rounded-full bg-[#FF4255]/20 blur-2xl" />

            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FF4255] mb-2">
              Established Reliability
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Since 2005
            </h3>
            <p className="text-white/80 text-[15px] font-light leading-relaxed mb-8">
              Over nearly two decades of engineering excellence, we have maintained a 99.4% client retention rate across 500+ deployed enterprise projects worldwide.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#FF4255] rounded-full hover:bg-white hover:text-[#272B36] transition-all duration-300 shadow-lg"
            >
              <span>Find Your Solution</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Testimonials Slider */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-bold uppercase tracking-widest text-[#FF4255]">
                  Testimonials
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                  What Clients Say About Us
                </h2>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-white/20 hover:border-[#FF4255] hover:bg-[#FF4255] flex items-center justify-center transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-white/20 hover:border-[#FF4255] hover:bg-[#FF4255] flex items-center justify-center transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Testimonial Active Slide */}
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 transition-all duration-500">
              <Quote className="w-12 h-12 text-[#FF4255]/40 mb-6" />

              <p className="text-lg sm:text-xl text-white/90 italic font-light leading-relaxed mb-8">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#FF4255]"
                />
                <div>
                  <h4 className="text-base font-bold text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-[#FF4255] font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="flex items-center gap-2 mt-6">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? "w-8 bg-[#FF4255]" : "w-2 bg-white/30"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
