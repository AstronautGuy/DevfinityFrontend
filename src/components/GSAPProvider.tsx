"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function GSAPProvider({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    // ScrollTrigger defaults for global dampening/smoothing if needed
    ScrollTrigger.config({
      ignoreMobileResize: true,
    });
  }, []);

  return <>{children}</>;
}
