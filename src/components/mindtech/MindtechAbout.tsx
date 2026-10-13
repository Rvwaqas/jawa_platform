"use client";

import Link from "next/link";
import { Check, Quote } from "lucide-react";

export default function MindtechAbout() {
  const checklist = [
    "We are committed to providing quality IT Services",
    "Provided by experts to help challenge critical activities",
    "Really know the true needs and expectations of customers",
  ];

  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Floating CEO Quote */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/creative-young-people-in-business-meeting-e1617452574465.jpg"
                alt="Creative young team in business meeting"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Quote Box */}
            <div className="relative sm:absolute sm:-bottom-10 sm:-right-8 mt-6 sm:mt-0 bg-[#272B36] text-white p-7 sm:p-8 rounded-xl shadow-2xl max-w-md border-l-4 border-[#FF4255] z-10 e-animation-float">
              <Quote className="w-10 h-10 text-[#FF4255] mb-3 opacity-90" />
              <p className="text-[15px] font-light italic leading-relaxed text-white/90 mb-4">
                &ldquo;As one of the world’s largest IT Service Providers, our deep pool of over 130 certified engineers and IT support staff ready to accelerate your growth.&rdquo;
              </p>
              <div className="font-bold text-sm tracking-wider uppercase text-[#FF4255]">
                Roxie Hodgson – CEO JAWA
              </div>
            </div>
          </div>

          {/* Right Column: Text Information & Checklist */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block">
              <span className="text-sm font-bold uppercase tracking-widest text-[#FF4255]">
                About Us
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#272B36] leading-[1.2]">
              Let Us Be Your Preferred IT Partner
            </h2>

            <p className="text-base text-[#7A7A7A] leading-relaxed font-light">
              We empower industry leaders with resilient technological frameworks. From custom platform engineering to robust cyber protection, our holistic approach guarantees unmatched business agility.
            </p>

            <div className="p-6 bg-[#F4F6F9] rounded-xl border border-[#E6E6E6]/60">
              <p className="text-[15px] font-medium text-[#272B36] leading-relaxed">
                As one of the world’s most versatile IT Service Providers, our dedicated specialists integrate seamlessly with your internal teams to deliver measurable innovation.
              </p>
            </div>

            <ul className="space-y-3.5 pt-2">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#272B36] font-medium text-[15px]">
                  <div className="w-5 h-5 rounded-full bg-[#FF4255]/10 text-[#FF4255] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#FF4255] rounded-full hover:bg-[#272B36] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
