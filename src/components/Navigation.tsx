"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchModal from "@/components/SearchModal";

const links = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Global shortcut to open search modal (Ctrl+K or Cmd+K or '/')
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      } else if (
        e.key === "/" &&
        !searchOpen &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [searchOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[var(--ink)]/85 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <img
              src="/images/jawa.jpeg"
              alt="JAWA Logo"
              className="h-9 w-9 rounded-full object-cover border border-white/20 shadow-sm"
            />
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-tight text-[var(--foam)]">
                JAWA
              </span>
              <span className="text-[9px] uppercase tracking-[0.24em] text-[var(--mist)] -mt-1">
                Solutions
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <ul className="hidden items-center gap-7 md:flex">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative text-xs uppercase tracking-wider transition-colors font-medium py-1 ${
                      isActive
                        ? "text-[var(--primary)] font-bold"
                        : "text-[var(--mist)] hover:text-[var(--foam)]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[var(--primary)] rounded-full shadow-[0_0_8px_rgba(133,129,189,0.8)]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Action Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            {/* Search Trigger Button */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-[var(--mist)] hover:border-white/20 hover:bg-white/[0.07] hover:text-[var(--foam)] transition-all cursor-pointer"
              title="Search website (Ctrl + K)"
            >
              <svg
                className="h-3.5 w-3.5 text-[var(--primary)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="text-[11px]">Search...</span>
              <kbd className="rounded border border-white/15 bg-white/5 px-1.5 py-0.5 text-[9px] font-semibold text-[var(--mist)]">
                ⌘K
              </kbd>
            </button>

            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-[var(--primary)] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black transition-all hover:shadow-[0_0_20px_rgba(133,129,189,0.5)]"
            >
              <span>Get a Proposal</span>
              <svg
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile Right Bar: Search + Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[var(--foam)]"
              aria-label="Search"
            >
              <svg
                className="h-4 w-4 text-[var(--primary)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center text-[var(--foam)]"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <div className="flex w-5 flex-col gap-1.5">
                <span
                  className={`h-px w-full bg-current transition-transform ${
                    open ? "translate-y-[3.5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-px w-full bg-current transition-opacity ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-px w-full bg-current transition-transform ${
                    open ? "-translate-y-[3.5px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Drawer */}
        {open && (
          <div className="border-t border-white/10 bg-[var(--ink)] px-5 py-6 md:hidden">
            <ul className="flex flex-col gap-4">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`font-display text-2xl transition-colors ${
                        isActive
                          ? "text-[var(--primary)] font-bold"
                          : "text-[var(--foam)]"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setSearchOpen(true);
                }}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-[var(--foam)]"
              >
                <span className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-[var(--primary)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  Search Markslink...
                </span>
                <kbd className="rounded border border-white/20 bg-white/5 px-2 py-0.5 text-xs text-[var(--mist)]">
                  ⌘K
                </kbd>
              </button>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-[var(--primary)] px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-black"
              >
                Get a Proposal &rarr;
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
