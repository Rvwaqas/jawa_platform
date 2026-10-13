"use client";

import { useCallback, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import AntigravitySection from "@/components/sections/AntigravitySection";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Industries from "@/components/sections/Industries";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  const [ready, setReady] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  const onRevealStart = useCallback(() => {
    setReady(true);
  }, []);

  const onLoadComplete = useCallback(() => {
    setShowLoader(false);
  }, []);

  return (
    <>
      {showLoader && (
        <LoadingScreen
          onRevealStart={onRevealStart}
          onComplete={onLoadComplete}
        />
      )}
      <SmoothScroll>
        <div className={ready ? "opacity-100" : "opacity-0"}>
          <Navigation />
          <main>
            <Hero ready={ready} />
            <TechStack />
            <AntigravitySection />
            <Services />
            <WhyChooseUs />
            <Industries />
            <About />
            <Testimonials />
            <FAQ />
            <CTABanner />
            <Contact />
          </main>
        </div>
      </SmoothScroll>
    </>
  );
}
