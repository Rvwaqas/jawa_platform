"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function MindtechQuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "IT Management",
    phone: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const checklist = [
    "We are committed to providing quality IT Services",
    "Provided by experts to help challenge critical activities",
    "Really know the true needs and expectations of customers",
    "Processes of achieving excellence improvements",
  ];

  return (
    <section className="py-24 bg-[#272B36] text-white overflow-hidden relative">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF4255]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.2]">
            Don’t Hesitate To Contact Us For Better Information And Services
          </h2>
          <p className="text-white/70 text-base font-light">
            Reach out to our strategic engineering consultants today for a custom scope assessment and rapid project roadmap.
          </p>
        </div>

        {/* 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Information & Bullets */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Perfect Solutions For Your Business
            </h3>
            <p className="text-white/80 text-base font-light leading-relaxed">
              We leverage modern technology stacks, containerized architectures, and automated infrastructure deployments to minimize time-to-market and maximize ROI for global brands.
            </p>

            <ul className="space-y-4 pt-2">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/90 text-[15px] font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#FF4255] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 flex flex-wrap items-center gap-4">
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#FF4255] rounded-full hover:bg-white hover:text-[#272B36] transition-all duration-300 shadow-lg hover:-translate-y-0.5"
              >
                Get A Quote
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white hover:text-[#FF4255] transition-colors py-3.5 px-4"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: MetForm Replication */}
          <div
            id="quote-form"
            className="lg:col-span-6 bg-white text-[#272B36] rounded-2xl p-8 sm:p-10 shadow-2xl border border-white/10"
          >
            <h4 className="text-2xl font-bold text-[#272B36] mb-6">
              Request A Free Consultation
            </h4>

            {submitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h5 className="text-xl font-bold text-emerald-900">Request Received!</h5>
                <p className="text-sm text-emerald-700">
                  Thank you, <strong>{formData.name}</strong>. Our senior solutions architect will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-bold uppercase text-[#FF4255] hover:underline"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#272B36]">
                      Name <span className="text-[#FF4255]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#F4F6F9] border border-[#E6E6E6] text-sm text-[#272B36] focus:outline-none focus:border-[#FF4255] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#272B36]">
                      Email <span className="text-[#FF4255]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#F4F6F9] border border-[#E6E6E6] text-sm text-[#272B36] focus:outline-none focus:border-[#FF4255] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Inquiry Select */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#272B36]">
                      Inquiry Select
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#F4F6F9] border border-[#E6E6E6] text-sm text-[#272B36] focus:outline-none focus:border-[#FF4255] transition-colors cursor-pointer"
                    >
                      <option value="IT Management">IT Management</option>
                      <option value="Cyber Security">Cyber Security</option>
                      <option value="Cloud Computing">Cloud Computing</option>
                      <option value="Software Developer">Software Developer</option>
                    </select>
                  </div>

                  {/* Telephone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#272B36]">
                      Telephone <span className="text-[#FF4255]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#F4F6F9] border border-[#E6E6E6] text-sm text-[#272B36] focus:outline-none focus:border-[#FF4255] transition-colors"
                    />
                  </div>
                </div>

                {/* Additional Details */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#272B36]">
                    Additional Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project requirements..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#F4F6F9] border border-[#E6E6E6] text-sm text-[#272B36] focus:outline-none focus:border-[#FF4255] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-full bg-[#FF4255] hover:bg-[#272B36] text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
