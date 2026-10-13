"use client";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-[#07080D] py-20 border-t border-white/10">
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #8581BD 0%, #454270 50%, transparent 75%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#131326] to-[#0A0A16] p-10 sm:p-16 text-center shadow-2xl backdrop-blur-2xl">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#48427A] bg-[#19172E] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A79DFA] mb-6">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Accepting New Enterprise Engagements</span>
          </div>

          <h2 className="font-display mx-auto max-w-4xl text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Ready to Architect Software That Drives Real Enterprise ROI?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-[#9D9AB8] leading-relaxed">
            Eliminate project delays and bloated agency handoffs. Partner with dedicated technical leads and principal engineers who ship on time.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-8 py-4 text-xs font-bold uppercase tracking-wider text-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(133,129,189,0.6)]"
            >
              <span>Consult Our Engineering Leads</span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a
              href="#faq"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:border-[var(--primary)] hover:bg-white/10"
            >
              <span>Review FAQs</span>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8 text-xs text-[#9D9AB8]">
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-[#A79DFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Mutual NDA Guaranteed
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-[#A79DFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              24-Hour Architect Response
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-[#A79DFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              100% Code & IP Ownership
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
