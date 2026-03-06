import React from "react";

const BrandPanel = () => {
  return (
    <div className="hidden md:flex w-1/2 relative items-center justify-end overflow-hidden group">
      <div className="absolute inset-0 angled-panel bg-gradient-to-br from-cyan-950 via-teal-900 to-black transition-transform duration-1000 group-hover:scale-110" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent h-20 w-full animate-[scan_4s_linear_infinite] pointer-events-none" />

      <div className="relative z-10 pr-12 text-right select-none">
        <h1 className="text-6xl font-black text-white leading-[0.85] tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
          WELCOME <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
            BACK!
          </span>
        </h1>
        <div className="mt-6 flex flex-col items-end gap-1 opacity-40 font-mono text-[9px] text-cyan-300">
          <span>LATENCY: 12ms</span>
          <span>NODE: SECTOR_7G</span>
          <span>UPLINK: ACTIVE</span>
        </div>
      </div>
    </div>
  );
};

export default BrandPanel;
