"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons";



export default function MindtechFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  const otherPages = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "Project", href: "/cases" },
  ];

  const quickLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Term Of Service", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Credits", href: "/credits" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <footer className="bg-[#1F222B] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16">
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <img
                src="/images/jawa.jpeg"
                alt="JAWA Logo"
                className="h-10 w-10 rounded-full object-cover border border-white/20 shadow-md transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-xl font-extrabold tracking-wider text-white group-hover:text-[#FF4255] transition-colors">
                JAWA
              </span>
            </Link>

            <p className="text-white/70 text-sm font-light leading-relaxed max-w-sm">
              Empowering global organizations with enterprise IT architecture, automated intelligence, and resilient cybersecurity infrastructure.
            </p>

            <ul className="space-y-3.5 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FF4255] shrink-0 mt-1" />
                <span>Jl. Raya Kuta No.70, Kuta - Bali 80361</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FF4255] shrink-0" />
                <a href="mailto:rvwaqas602@gmail.com" className="hover:text-[#FF4255] transition-colors">
                  rvwaqas602@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FF4255] shrink-0" />
                <a href="tel:+923480227414" className="hover:text-[#FF4255] transition-colors">
                  +923480227414
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Other Pages */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-lg font-bold text-white tracking-wide border-b border-white/10 pb-3">
              Other Pages
            </h4>
            <ul className="space-y-2.5 text-sm">
              {otherPages.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-white/70 hover:text-[#FF4255] hover:translate-x-1 transition-all duration-200"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#FF4255]" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-lg font-bold text-white tracking-wide border-b border-white/10 pb-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-white/70 hover:text-[#FF4255] hover:translate-x-1 transition-all duration-200"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#FF4255]" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Social */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-lg font-bold text-white tracking-wide border-b border-white/10 pb-3">
              Newsletter
            </h4>

            {subscribed ? (
              <div className="p-4 rounded-lg bg-white/10 border border-white/20 text-sm text-white flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF4255]" />
                <span>Successfully subscribed! Check your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="flex items-center rounded-full bg-white/10 border border-white/15 p-1.5 focus-within:border-[#FF4255] transition-colors">
                  <input
                    type="email"
                    required
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 bg-transparent text-sm text-white placeholder-white/50 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full bg-[#FF4255] hover:bg-white hover:text-[#272B36] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shrink-0"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            )}

            <p className="text-xs text-white/60 font-light">
              Get the latest news &amp; engineering updates directly in your mailbox.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
                { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter" },
                { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
                { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF4255] flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

          </div>
        </div>

        {/* Divider & Copyright Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>JAWA – Technology &amp; IT Solutions</p>
          <p>Copyright © {new Date().getFullYear()} JAWA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
