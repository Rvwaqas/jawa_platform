import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mx-auto max-w-7xl border-t border-white/10 px-5 pt-16 pb-12 sm:px-8">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Company Info */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/images/jawa.jpeg"
              alt="JAWA Logo"
              className="h-9 w-9 rounded-full object-cover border border-white/20 shadow-sm"
            />
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold text-white">JAWA</span>
              <span className="text-[9px] uppercase tracking-[0.24em] text-[var(--mist)] -mt-1">Solutions</span>
            </div>
          </Link>
          <p className="text-xs text-[var(--mist)] leading-relaxed">
            Global enterprise software engineering and IT solutions consultancy. Architecting mission-critical platforms with uncompromising reliability, security, and velocity.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              SRE Systems Operational 24/7
            </span>
          </div>
        </div>

        {/* Core Solutions */}
        <div>
          <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[var(--foam)]">
            Core Solutions
          </h4>
          <ul className="mt-4 space-y-2.5 text-xs text-[var(--mist)]">
            <li>
              <Link href="/services#erp" className="hover:text-white transition-colors">
                Custom ERP & CRM Platforms
              </Link>
            </li>
            <li>
              <Link href="/services#cloud" className="hover:text-white transition-colors">
                Cloud Native Architecture & DevOps
              </Link>
            </li>
            <li>
              <Link href="/services#ai" className="hover:text-white transition-colors">
                AI & Workflow Automation Pipelines
              </Link>
            </li>
            <li>
              <Link href="/services#mobile" className="hover:text-white transition-colors">
                High-Scale Web & Mobile Engineering
              </Link>
            </li>
            <li>
              <Link href="/services#security" className="hover:text-white transition-colors">
                Cybersecurity & Compliance Audits
              </Link>
            </li>
            <li>
              <Link href="/services#modernization" className="hover:text-white transition-colors">
                Legacy Modernization & Database Ops
              </Link>
            </li>
          </ul>
        </div>

        {/* Navigation & Sectors */}
        <div>
          <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[var(--foam)]">
            Navigation & Industries
          </h4>
          <ul className="mt-4 space-y-2.5 text-xs text-[var(--mist)]">
            <li>
              <Link href="/services" className="hover:text-white transition-colors">
                Services Overview
              </Link>
            </li>
            <li>
              <Link href="/industries" className="hover:text-white transition-colors">
                Industry Solutions
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About Markslink
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:text-white transition-colors">
                Client Testimonials
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Request a Proposal
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Offices */}
        <div>
          <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[var(--foam)]">
            Direct Contacts
          </h4>
          <div className="mt-4 space-y-3 text-xs text-[var(--mist)]">
            <p className="leading-relaxed">
              <strong className="text-[var(--foam)] block">Inquiries:</strong>
              <a href="mailto:rvwaqas602@gmail.com" className="hover:text-white transition-colors">
                rvwaqas602@gmail.com
              </a>
            </p>
            <p className="leading-relaxed">
              <strong className="text-[var(--foam)] block">Phone / WhatsApp:</strong>
              <a href="tel:+923480227414" className="hover:text-white transition-colors">
                +923480227414
              </a>
            </p>
            <p className="leading-relaxed">
              <strong className="text-[var(--foam)] block">Enterprise SLA:</strong>
              Guaranteed response within 24h under mutual NDA
            </p>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between text-xs text-[var(--mist)]">
        <p>© {new Date().getFullYear()} JAWA Solutions. All rights reserved.</p>
        <div className="flex flex-wrap gap-6">
          <Link href="/about" className="hover:text-white transition-colors">Company Overview</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Privacy & NDA</Link>
          <Link href="/services" className="hover:text-white transition-colors">SLA & Terms</Link>
        </div>
      </div>
    </footer>
  );
}
