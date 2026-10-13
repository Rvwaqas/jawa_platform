"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function MindtechHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    {
      label: "Case Studies",
      href: "/cases",
      dropdown: [
        { label: "Case Studies", href: "/cases" },
        { label: "Case Details", href: "/cases/workflow-management" },
      ],
    },
    {
      label: "Pages",
      href: "#",
      dropdown: [
        { label: "About Us", href: "/about" },
        { label: "Pricing", href: "/pricing" },
        { label: "Our Team", href: "/our-team" },
        { label: "FAQ", href: "/faq" },
        { label: "404 Page", href: "/not-found" },
      ],
    },
    {
      label: "Blog",
      href: "/blog",
      dropdown: [
        { label: "Blog", href: "/blog" },
        { label: "Single Blog", href: "/blog/benefits-of-software" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#272B36]/95 backdrop-blur-md py-4 shadow-xl border-b border-white/10"
          : "bg-transparent py-6 border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/images/jawa.jpeg"
            alt="JAWA Logo"
            className="h-10 w-10 rounded-full object-cover border border-white/20 shadow-md transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-xl font-extrabold tracking-wider text-white group-hover:text-[#FF4255] transition-colors">
            JAWA
          </span>
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((item) => (
            <div
              key={item.label}
              className="relative group py-2"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1 text-[13px] font-bold uppercase tracking-wider transition-colors ${
                  pathname === item.href || (item.dropdown && item.dropdown.some((d) => d.href === pathname))
                    ? "text-[#FF4255]"
                    : "text-white hover:text-[#FF4255]"
                }`}
              >
                {item.label}
                {item.dropdown && (
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 opacity-80" />
                )}
              </Link>

              {/* Submenu Dropdown */}
              {item.dropdown && (
                <div
                  className={`absolute top-full left-0 min-w-[210px] bg-[#272B36] rounded-md shadow-2xl py-3 border border-white/10 transition-all duration-200 ${
                    activeDropdown === item.label
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-2 pointer-events-none"
                  }`}
                >
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      className={`block px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:bg-white/5 ${
                        pathname === subItem.href
                          ? "text-[#FF4255] pl-6"
                          : "text-white/80 hover:text-white hover:pl-6"
                      }`}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button: Slightly rounded rectangle (rounded-[4px]) */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center px-7 py-3 text-[13px] font-bold uppercase tracking-wider text-white bg-[#FF4255] rounded-[4px] hover:bg-white hover:text-[#272B36] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
          >
            Get Started
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#FF4255] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#272B36] border-b border-white/10 px-6 py-6 shadow-2xl space-y-4">
          {navLinks.map((item) => (
            <div key={item.label} className="border-b border-white/5 pb-2">
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                  className={`text-sm font-bold uppercase tracking-wider ${
                    pathname === item.href ? "text-[#FF4255]" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <button
                    onClick={() =>
                      setActiveDropdown(activeDropdown === item.label ? null : item.label)
                    }
                    className="p-1 text-white/70"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>
              {item.dropdown && activeDropdown === item.label && (
                <div className="pl-4 mt-2 space-y-2 border-l border-white/10">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-[#FF4255] py-1"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#FF4255] rounded-[4px]"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
