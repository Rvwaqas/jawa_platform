"use client";

import { useState, useEffect, useRef } from "react";

interface Scenario {
  id: string;
  name: string;
  icon: string;
  command: string;
  steps: {
    agent: string;
    action: string;
    detail: string;
    status: "done" | "executing" | "pending";
    time: string;
  }[];
  metric: string;
  outputCode: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "cloud-scale",
    name: "Multi-Cloud Orchestration",
    icon: "☁️",
    command: "agent.deploy({ target: 'multi-region-k8s', traffic: '1.2M req/min', sla: '99.999%' })",
    steps: [
      {
        agent: "ArchitectAgent",
        action: "Spawning EKS & GKE cross-region clusters with Terraform IaC",
        detail: "16 Nodes initialized across us-east-1 and eu-west-1",
        status: "done",
        time: "12ms",
      },
      {
        agent: "SREWatcher",
        action: "Configuring ArgoCD GitOps & OpenTelemetry tracing mesh",
        detail: "Zero-loss canary routing verified with Envoy proxy",
        status: "done",
        time: "48ms",
      },
      {
        agent: "SecurityAudit",
        action: "Enforcing mTLS & automated secrets injection via Vault",
        detail: "100% Zero-Trust cryptographic compliance verified",
        status: "done",
        time: "84ms",
      },
    ],
    metric: "Latency: 8.4ms · 99.999% Availability · $0 Over-Provisioning",
    outputCode: `// Multi-Region Cluster Verified
export const clusterTopology = {
  activeNodes: 128,
  failoverTimeMs: 0,
  trafficDistribution: { usEast: "55%", euWest: "45%" },
  status: "OPTIMAL_ZERO_GRAVITY",
};`,
  },
  {
    id: "ai-agents",
    name: "Autonomous AI Pipeline",
    icon: "🧠",
    command: "agent.execute({ task: 'Private Document RAG', vectorStore: 'Qdrant', topK: 10 })",
    steps: [
      {
        agent: "RetrieverAgent",
        action: "Ingesting 85,000 PDF contracts into hybrid dense/sparse vector index",
        detail: "Hugging Face embeddings computed on private VPC nodes",
        status: "done",
        time: "18ms",
      },
      {
        agent: "ReasoningEngine",
        action: "Running self-correcting agent loop with multi-step verification",
        detail: "Zero hallucinations detected across 12 test assertions",
        status: "done",
        time: "62ms",
      },
      {
        agent: "PrivacyGuard",
        action: "Redacting all PII/HIPAA identifiers before context injection",
        detail: "Anonymization confirmed with SHA-256 audit logs",
        status: "done",
        time: "95ms",
      },
    ],
    metric: "Throughput: 4,500 docs/sec · Accuracy: 99.8% · Zero Data Leakage",
    outputCode: `// Autonomous Agent Result
const queryOutput = await agentPipeline.query({
  prompt: "Synthesize vendor liabilities in Master Services Agreement",
  confidenceScore: 0.9984,
  auditHash: "0x8f2e9a11c84",
});`,
  },
  {
    id: "db-modernize",
    name: "Zero-Downtime Migration",
    icon: "⚡",
    command: "agent.strangle({ legacy: 'Oracle 11g Monolith', target: 'PostgreSQL Distributed' })",
    steps: [
      {
        agent: "SchemaAgent",
        action: "Translating stored procedures into decoupled TypeScript microservices",
        detail: "420 SQL routines refactored with 100% test coverage",
        status: "done",
        time: "24ms",
      },
      {
        agent: "ReplicationBot",
        action: "Establishing bi-directional CDC replication stream via Debezium & Kafka",
        detail: "Real-time sync latency < 1.2ms without table locks",
        status: "done",
        time: "55ms",
      },
      {
        agent: "TrafficDirector",
        action: "Switching 100% read/write traffic with sub-second DNS failover",
        detail: "Cutover completed with exactly 0 seconds of user downtime",
        status: "done",
        time: "110ms",
      },
    ],
    metric: "Downtime: 0.00s · Data Discrepancies: 0 · Performance: +340%",
    outputCode: `// Migration Verification
const dbStatus = await migrationStream.verifySync();
assert(dbStatus.lagSeconds === 0);
console.log("Legacy Monolith decommissioned safely.");`,
  },
];

export default function AgentTerminal() {
  const [activeScenario, setActiveScenario] = useState<Scenario>(SCENARIOS[0]);
  const [typedCommand, setTypedCommand] = useState("");
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Animate command typing whenever scenario changes
  useEffect(() => {
    setIsTyping(true);
    setTypedCommand("");
    setActiveStepIndex(0);

    let charIdx = 0;
    const fullCommand = activeScenario.command;

    if (typingTimerRef.current) clearInterval(typingTimerRef.current);

    typingTimerRef.current = setInterval(() => {
      if (charIdx < fullCommand.length) {
        setTypedCommand(fullCommand.slice(0, charIdx + 1));
        charIdx++;
      } else {
        if (typingTimerRef.current) clearInterval(typingTimerRef.current);
        setIsTyping(false);

        // Sequence steps
        setTimeout(() => setActiveStepIndex(1), 300);
        setTimeout(() => setActiveStepIndex(2), 700);
        setTimeout(() => setActiveStepIndex(3), 1100);
      }
    }, 20);

    return () => {
      if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    };
  }, [activeScenario]);

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-3xl border border-white/15 bg-[#07080F]/90 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.8),0_0_50px_rgba(133,129,189,0.15)]">
      {/* Glow Top Line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent" />

      {/* Terminal Window Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-black/40 px-5 py-3.5 sm:px-6">
        {/* Window Controls */}
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-rose-500/80 border border-rose-400/40" />
          <div className="h-3 w-3 rounded-full bg-amber-500/80 border border-amber-400/40" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80 border border-emerald-400/40" />
          <span className="ml-2 font-mono text-[11px] text-[var(--mist)] flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-ping" />
            markslink-antigravity-engine v2.6.4
          </span>
        </div>

        {/* Live HUD Badges */}
        <div className="flex items-center gap-3 text-[11px]">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            9.2ms LATENCY
          </span>
          <span className="hidden sm:inline-flex rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[var(--mist)]">
            CPU: 4.2% · ZERO-G NOMINAL
          </span>
        </div>
      </div>

      {/* Scenario Switcher Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto border-b border-white/5 bg-black/20 p-2.5 sm:px-6 no-scrollbar">
        {SCENARIOS.map((scenario) => {
          const isActive = activeScenario.id === scenario.id;
          return (
            <button
              key={scenario.id}
              onClick={() => setActiveScenario(scenario)}
              className={`flex shrink-0 items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                isActive
                  ? "bg-[var(--primary)] text-black font-bold shadow-[0_0_15px_rgba(133,129,189,0.5)]"
                  : "border border-white/10 bg-white/[0.03] text-[var(--mist)] hover:bg-white/[0.08] hover:text-white"
              }`}
            >
              <span>{scenario.icon}</span>
              <span>{scenario.name}</span>
            </button>
          );
        })}
      </div>

      {/* Terminal Main Body */}
      <div className="p-5 sm:p-7 space-y-6">
        {/* Command Line Input Simulation */}
        <div className="rounded-xl border border-white/10 bg-black/60 p-4 font-mono text-xs sm:text-sm">
          <div className="flex items-start gap-2">
            <span className="text-[var(--primary)] font-bold select-none">&gt;</span>
            <div className="flex-1 text-[var(--foam)] break-all">
              <span>{typedCommand}</span>
              {isTyping && (
                <span className="inline-block h-4 w-2 translate-y-0.5 bg-[var(--primary)] animate-pulse ml-0.5" />
              )}
            </div>
          </div>
        </div>

        {/* Step Execution Sequence */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[var(--mist)] font-mono">
            <span>Live Agent Step Execution</span>
            <span>Real-time Telemetry</span>
          </div>

          <div className="grid gap-2.5">
            {activeScenario.steps.map((step, idx) => {
              const isVisible = idx < activeStepIndex;
              return (
                <div
                  key={idx}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-xl border p-3.5 transition-all duration-500 ${
                    isVisible
                      ? "border-white/15 bg-white/[0.03] opacity-100 translate-y-0"
                      : "border-transparent bg-transparent opacity-20 translate-y-1"
                  }`}
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold">
                      ✓
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] font-bold text-[var(--primary)]">
                          [{step.agent}]
                        </span>
                        <span className="text-xs font-medium text-white">
                          {step.action}
                        </span>
                      </div>
                      <p className="text-[11px] text-[var(--mist)] mt-0.5">
                        {step.detail}
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 self-end sm:self-center font-mono text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                    +{step.time}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Output Code & Metric Footer */}
        <div className="grid gap-4 sm:grid-cols-12 items-center pt-2">
          {/* Code block */}
          <div className="sm:col-span-8 rounded-xl border border-white/10 bg-black/80 p-4 font-mono text-[11px] text-emerald-300/90 overflow-x-auto">
            <pre className="no-scrollbar">{activeScenario.outputCode}</pre>
          </div>

          {/* Metric Pill */}
          <div className="sm:col-span-4 rounded-xl border border-[var(--primary)]/30 bg-[var(--primary)]/10 p-4 text-center">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--primary)] block">
              Benchmark Confirmed
            </span>
            <p className="mt-1 text-xs font-bold text-white leading-tight">
              {activeScenario.metric}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
