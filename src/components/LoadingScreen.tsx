"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, registerGSAP } from "@/lib/gsap";

type LoadingScreenProps = {
  onComplete: () => void;
  onRevealStart?: () => void;
};

const NUM_POINTS = 10;
const DELAY_POINTS_MAX = 0.3;
const DELAY_PER_PATH = 0.25;
const DURATION = 0.9;

export default function LoadingScreen({
  onComplete,
  onRevealStart,
}: LoadingScreenProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const logoRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const doneRef = useRef(false);

  useEffect(() => {
    registerGSAP();

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const paths = pathRefs.current.filter(Boolean) as SVGPathElement[];
    const numPaths = paths.length;
    const isOpened = { value: false };
    const allPoints = Array.from({ length: numPaths }, () =>
      Array.from({ length: NUM_POINTS }, () => 100)
    );

    const render = () => {
      for (let i = 0; i < numPaths; i++) {
        const path = paths[i];
        const points = allPoints[i];
        if (!path || !points) continue;

        let d = isOpened.value
          ? `M 0 0 V ${points[0]} C`
          : `M 0 ${points[0]} C`;

        for (let j = 0; j < NUM_POINTS - 1; j++) {
          const p = ((j + 1) / (NUM_POINTS - 1)) * 100;
          const cp = p - ((1 / (NUM_POINTS - 1)) * 100) / 2;
          d += ` ${cp} ${points[j]} ${cp} ${points[j + 1]} ${p} ${points[j + 1]}`;
        }

        d += isOpened.value ? ` V 100 H 0` : ` V 0 H 0`;
        path.setAttribute("d", d);
      }
    };

    render();

    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      onComplete();
    };

    const counter = { value: 0 };
    const master = gsap.timeline();

    if (prefersReduced) {
      master
        .to(counter, {
          value: 100,
          duration: 0.35,
          ease: "none",
          onUpdate: () => setDisplay(Math.round(counter.value)),
        })
        .to(rootRef.current, {
          opacity: 0,
          duration: 0.2,
          onStart: () => onRevealStart?.(),
          onComplete: finish,
        });

      return () => {
        master.kill();
      };
    }

    gsap.set(logoRef.current, { y: 24, opacity: 0 });
    gsap.set(percentRef.current, { opacity: 0 });

    const buildWipe = () => {
      isOpened.value = false;
      const pointsDelay: number[] = [];
      for (let i = 0; i < NUM_POINTS; i++) {
        pointsDelay[i] = Math.random() * DELAY_POINTS_MAX;
      }

      const wipe = gsap.timeline({
        onUpdate: render,
        defaults: {
          ease: "power2.inOut",
          duration: DURATION,
        },
      });

      for (let i = 0; i < numPaths; i++) {
        const points = allPoints[i];
        const pathDelay = DELAY_PER_PATH * (numPaths - i - 1);

        for (let j = 0; j < NUM_POINTS; j++) {
          wipe.to(points, { [j]: 0 }, pointsDelay[j] + pathDelay);
        }
      }

      return wipe;
    };

    master
      .to(logoRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.55,
        ease: "power3.out",
      })
      .to(
        percentRef.current,
        { opacity: 1, duration: 0.4, ease: "power2.out" },
        "-=0.25"
      )
      .to(
        counter,
        {
          value: 100,
          duration: 1.45,
          ease: "power2.inOut",
          onUpdate: () => setDisplay(Math.round(counter.value)),
        },
        "-=0.15"
      )
      .to([logoRef.current, percentRef.current], {
        opacity: 0,
        y: -16,
        duration: 0.35,
        ease: "power2.in",
      })
      .add(() => {
        onRevealStart?.();
        if (rootRef.current) {
          rootRef.current.style.background = "transparent";
        }
      })
      .add(buildWipe())
      .add(() => {
        finish();
      });

    return () => {
      master.kill();
    };
  }, [onComplete, onRevealStart]);

  return (
    <div
      ref={rootRef}
      className="loading-screen fixed inset-0 z-[100] pointer-events-none"
      aria-live="polite"
      aria-busy="true"
      style={{ background: "#000000" }}
    >
      <svg
        className="shape-overlays"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="bw-gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8581BD" />
            <stop offset="100%" stopColor="#454270" />
          </linearGradient>
          <linearGradient id="bw-gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#b4b0d9" />
            <stop offset="100%" stopColor="#8581BD" />
          </linearGradient>
        </defs>
        <path
          ref={(el) => {
            pathRefs.current[0] = el;
          }}
          className="shape-overlays__path"
          fill="url(#bw-gradient2)"
          d="M 0 100 C 5 100 5 100 10 100 15 100 15 100 20 100 25 100 25 100 30 100 35 100 35 100 40 100 45 100 45 100 50 100 55 100 55 100 60 100 65 100 65 100 70 100 75 100 75 100 80 100 85 100 85 100 90 100 95 100 95 100 100 100 V 0 H 0"
        />
        <path
          ref={(el) => {
            pathRefs.current[1] = el;
          }}
          className="shape-overlays__path"
          fill="url(#bw-gradient1)"
          d="M 0 100 C 5 100 5 100 10 100 15 100 15 100 20 100 25 100 25 100 30 100 35 100 35 100 40 100 45 100 45 100 50 100 55 100 55 100 60 100 65 100 65 100 70 100 75 100 75 100 80 100 85 100 85 100 90 100 95 100 95 100 100 100 V 0 H 0"
        />
      </svg>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
        <div
          ref={logoRef}
          className="will-change-transform flex flex-col items-center gap-2"
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 56 56"
            fill="none"
            aria-hidden
          >
            <path
              d="M10 42L28 14L46 42"
              stroke="#8581BD"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 30L28 42L38 30"
              stroke="#b4b0d9"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="28" cy="24" r="3.5" fill="#8581BD" />
          </svg>
          <p className="font-display text-2xl tracking-tight sm:text-3xl text-white">
            Markslink
          </p>
          <p className="text-[10px] uppercase tracking-[0.32em] text-[var(--mist)]">
            Enterprise Solutions
          </p>
        </div>

        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center">
          <span
            ref={percentRef}
            className="font-display text-5xl tabular-nums will-change-contents sm:text-6xl"
          >
            {display}
            <span className="text-2xl opacity-60">%</span>
          </span>
        </div>
      </div>
    </div>
  );
}
