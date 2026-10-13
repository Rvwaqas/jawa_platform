"use client";

import GlowCard from "@/components/interactive/GlowCard";
import AgentTerminal from "@/components/interactive/AgentTerminal";
import TelemetryBar from "@/components/interactive/TelemetryBar";

export default function AntigravitySection() {
  return (
    <section className="relative overflow-hidden bg-[var(--ink)] py-20 sm:py-28 border-y border-white/10">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(133,129,189,0.2), transparent 70%)",
        }}
      />

      {/* Top Live Telemetry HUD */}
      <div className="mb-16">
        <TelemetryBar />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)] mb-4">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Agentic Orchestration</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Autonomous Execution & Zero-Gravity Architecture
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[var(--mist)] leading-relaxed">
            Experience liftoff with next-gen autonomous engineering agents. Watch multi-agent swarms plan, benchmark, and deploy mission-critical systems with sub-second latency.
          </p>
        </div>

        {/* Live Interactive Agent Terminal */}
        <div className="mb-16">
          <AgentTerminal />
        </div>

        {/* 3 Antigravity Glow Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <GlowCard className="p-8 flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-[var(--primary)] text-2xl mb-6">
                🌌
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Multi-Agent Swarm Logic
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[var(--mist)] leading-relaxed">
                Autonomous agent clusters decompose complex enterprise software into parallel executable spikes, running continuous verification loops without human bottlenecks.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[var(--primary)]">
              <span>Status: Synchronized</span>
              <span>128 Agents Active</span>
            </div>
          </GlowCard>

          <GlowCard className="p-8 flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-[var(--primary)] text-2xl mb-6">
                ⚡
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Sub-10ms Edge Routing
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[var(--mist)] leading-relaxed">
                Distributed multi-cloud mesh network directing requests across nearest low-latency nodes, dynamically balancing loads with zero packet loss.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-emerald-400">
              <span>Latency: 8.4ms</span>
              <span>99.999% SLA</span>
            </div>
          </GlowCard>

          <GlowCard className="p-8 flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-[var(--primary)] text-2xl mb-6">
                🛡️
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Self-Healing Infrastructure
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[var(--mist)] leading-relaxed">
                Automated SRE tripwires detect memory pressure and traffic anomalies, instantly initiating container auto-scaling and blue/green zero-downtime rollouts.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[var(--primary)]">
              <span>Auto-Recovery: Active</span>
              <span>Zero Tech-Debt</span>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}
