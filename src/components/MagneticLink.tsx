"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function MagneticLink({ children, className }: { children: React.ReactNode; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: containerRef });

  const handleMouseMove = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = containerRef.current!.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    // Max pull is 8px
    const strength = 0.2; // Adjust for pull distance mapping
    gsap.to(containerRef.current, {
      x: x * strength,
      y: y * strength,
      duration: 1,
      ease: "elastic.out(1, 0.3)"
    });
  });

  const handleMouseLeave = contextSafe(() => {
    gsap.to(containerRef.current, {
      x: 0,
      y: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)"
    });
  });

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block cursor-pointer ${className || ""}`}
    >
      {children}
    </div>
  );
}
