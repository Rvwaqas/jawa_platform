"use client";

import { useEffect, useState } from "react";

export default function TelemetryBar() {
  const [latency, setLatency] = useState(8.6);
  const [activeNodes, setActiveNodes] = useState(148);

  useEffect(() => {
    const interval = setInterval(() => {
      // Subtle fluctuations to simulate live real-time telemetry
      setLatency(+(8.2 + Math.random() * 0.9).toFixed(1));
      setActiveNodes(145 + Math.floor(Math.random() * 6));
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative border-y border-white/10 bg-[#05060A]/80 backdrop-blur-md py-3 text-xs overflow-hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Left Side: System Status */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-400">
              Antigravity Engine Active
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-[11px] text-[var(--mist)] font-mono">
            <span>·</span>
            <span>CLUSTERS: <strong className="text-white">{activeNodes} NODES</strong></span>
            <span>·</span>
            <span>LATENCY: <strong className="text-emerald-400">{latency}ms</strong></span>
            <span>·</span>
            <span>UPTIME: <strong className="text-white">99.999% SLA</strong></span>
          </div>
        </div>

        {/* Right Side: Animated Frequency Visualizer */}
        <div className="flex items-center gap-3">
          <div className="flex items-end gap-1 h-3.5">
            {[40, 75, 55, 90, 60, 100, 70, 85].map((h, i) => (
              <span
                key={i}
                className="w-0.5 rounded-full bg-[var(--primary)] animate-pulse"
                style={{
                  height: `${h}%`,
                  animationDuration: `${0.6 + (i % 4) * 0.2}s`,
                }}
              />
            ))}
          </div>
          <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-wider text-[var(--mist)]">
            Continuous SRE Telemetry
          </span>
        </div>
      </div>
    </div>
  );
}
