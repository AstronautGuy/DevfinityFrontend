"use client";

import { useState, useRef, MouseEvent, TouchEvent } from "react";
import { AlertCircle, Server } from "lucide-react";

export function ComparisonSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <div 
      className="relative w-full h-[500px] border border-[#2C2C35] rounded overflow-hidden select-none cursor-ew-resize bg-[#1A1A1E]"
      ref={containerRef}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchEnd={() => setIsDragging(false)}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* Background/Left: Legacy System (Slow, Warning) */}
      <div className="absolute inset-0 w-full h-full bg-[#1A1A1E] p-8 flex flex-col justify-center">
        <div className="max-w-md space-y-6">
          <div className="text-red-500 font-mono text-sm flex items-center">
            <AlertCircle className="w-4 h-4 mr-2" />
            [WARN] LAYOUT SHIFT DETECTED - 1.2s RENDER
          </div>
          <div className="h-48 w-full border border-red-500/30 bg-red-500/5 relative overflow-hidden flex flex-col items-center justify-center">
            {/* Mock stuttering boxes */}
            <div className="absolute top-4 left-4 w-32 h-8 bg-red-500/20" />
            <div className="absolute top-16 left-4 w-48 h-8 bg-red-500/20" />
            <div className="absolute top-32 left-8 w-24 h-12 bg-red-500/10" />
            <span className="text-red-500/50 font-mono">LOADING HEAVY SCRIPTS...</span>
          </div>
        </div>
      </div>

      {/* Foreground/Right: Devfinity UI (Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full bg-[#121214] border-r border-[#0A84FF] p-8 flex flex-col justify-center shadow-[5px_0_15px_rgba(10,132,255,0.2)]"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <div className="max-w-md space-y-6">
          <div className="text-[#30D158] font-mono text-sm flex items-center">
            <Server className="w-4 h-4 mr-2" />
            [OK] OPTIMIZED RENDER - 45ms
          </div>
          <div className="h-48 w-full border border-[#2C2C35] bg-[#1A1A1E] flex flex-col items-center justify-center p-4">
             <div className="w-full flex items-end justify-between h-32 px-4 border-b border-[#2C2C35]">
                {/* Mock flat line chart */}
                <div className="w-8 bg-[#0A84FF] h-[30%]" />
                <div className="w-8 bg-[#0A84FF] h-[50%]" />
                <div className="w-8 bg-[#0A84FF] h-[80%]" />
                <div className="w-8 bg-[#0A84FF] h-[60%]" />
                <div className="w-8 bg-[#30D158] h-[95%]" />
             </div>
             <div className="w-full flex justify-between pt-2 text-xs text-[#8E8E93] font-mono">
               <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span><span>YTD</span>
             </div>
          </div>
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-[#0A84FF] pointer-events-none shadow-[0_0_10px_#0A84FF]"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#121214] border-2 border-[#0A84FF] rounded-full flex items-center justify-center">
          <div className="flex space-x-1">
            <div className="w-0.5 h-3 bg-[#0A84FF]" />
            <div className="w-0.5 h-3 bg-[#0A84FF]" />
          </div>
        </div>
      </div>
    </div>
  );
}
