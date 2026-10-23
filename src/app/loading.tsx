"use client";

import React, { useEffect, useState } from "react";

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white font-sans overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Loader Container */}
      <div className="relative flex flex-col items-center justify-center p-8">
        
        {/* Animated Glowing Ring */}
        <div className="relative w-36 h-36 flex items-center justify-center mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-cyan-500/20 border-t-cyan-400 border-r-purple-500 animate-spin" />
          <div className="absolute inset-2 rounded-full border-2 border-purple-500/20 border-b-purple-400 animate-[spin_2s_linear_infinite_reverse]" />
          
          {/* Percentage Display */}
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl font-extrabold tracking-wider bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {progress}%
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold tracking-[0.2em] text-cyan-300 uppercase mb-2">
          TECH-A-THON
        </h2>

        {/* Loading Subtitle / Status */}
        <div className="flex items-center space-x-2 text-slate-400 text-sm font-mono">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>INITIALIZING CORE SYSTEM...</span>
        </div>

        {/* Dynamic Progress Bar */}
        <div className="w-64 h-1.5 bg-slate-800 rounded-full mt-6 overflow-hidden border border-slate-700/50">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
