import React from "react";
import { User, Lock, Terminal, ShieldCheck } from "lucide-react";

const App = () => {
  return (
    <div className="relative min-h-screen bg-[#050505] flex items-center justify-center p-4 overflow-hidden font-sans selection:bg-cyan-500/30">
      {/* --- BACKGROUND ANIMATION LAYER --- */}
      {/* Moving Digital Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          className="absolute inset-0 h-[200%] w-full animate-[grid-move_20s_linear_infinite]"
          style={{
            backgroundImage: `linear-gradient(to right, #0891b2 1px, transparent 1px), 
                              linear-gradient(to bottom, #0891b2 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
        {/* Radial vignette to fade the grid edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_80%)]" />
      </div>

      {/* Floating Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-900/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-900/20 blur-[120px] rounded-full animate-pulse delay-700" />

      {/* --- MAIN LOGIN CARD --- */}
      <div className="relative z-10 w-full max-w-4xl h-[520px] flex overflow-hidden rounded-lg border border-cyan-500/30 backdrop-blur-md bg-black/60 shadow-[0_0_50px_rgba(6,182,212,0.1)]">
        {/* LEFT SIDE: FORM AREA */}
        <div className="w-full md:w-1/2 p-10 lg:p-14 flex flex-col justify-center bg-black/40">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <Terminal size={16} className="text-cyan-500 animate-pulse" />
              <span className="text-[10px] text-cyan-500/60 uppercase tracking-[0.3em] font-mono">
                Secure Access Protocol
              </span>
            </div>
            <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic">
              Login<span className="text-cyan-500">.</span>
            </h2>
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            {/* Username */}
            <div className="relative group">
              <label className="block text-gray-500 text-[10px] uppercase tracking-widest mb-1 font-bold group-focus-within:text-cyan-400 transition-colors">
                Identity
              </label>
              <div className="flex items-center border-b border-white/10 group-focus-within:border-cyan-500 transition-all duration-500 py-2">
                <input
                  type="text"
                  className="bg-transparent w-full text-white focus:outline-none pr-8 placeholder:text-gray-800 text-sm tracking-wide"
                  placeholder="USERNAME / EMAIL"
                />
                <User
                  size={18}
                  className="text-gray-600 group-focus-within:text-cyan-400 transition-colors"
                />
              </div>
            </div>

            {/* Password */}
            <div className="relative group">
              <label className="block text-gray-500 text-[10px] uppercase tracking-widest mb-1 font-bold group-focus-within:text-cyan-400 transition-colors">
                Access Key
              </label>
              <div className="flex items-center border-b border-white/10 group-focus-within:border-cyan-500 transition-all duration-500 py-2">
                <input
                  type="password"
                  className="bg-transparent w-full text-white focus:outline-none pr-8 placeholder:text-gray-800 text-sm"
                  placeholder="••••••••••••"
                />
                <Lock
                  size={18}
                  className="text-gray-600 group-focus-within:text-cyan-400 transition-colors"
                />
              </div>
            </div>

            {/* Login Button */}
            <div className="pt-4">
              <button className="relative w-full py-4 overflow-hidden rounded-md bg-cyan-600 text-white font-black tracking-[0.2em] uppercase text-xs hover:bg-cyan-500 transition-all group active:scale-[0.97] shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                {/* Button Shimmer Effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                Authorize Access
              </button>
            </div>
          </form>

          <div className="mt-8 flex items-center justify-between text-[10px] text-gray-600 uppercase tracking-widest font-mono">
            <div className="flex items-center gap-1 hover:text-cyan-500 cursor-pointer transition-colors">
              <ShieldCheck size={12} /> Encrypted
            </div>
            <span className="hover:text-white cursor-pointer transition-colors">
              Forgot Credentials?
            </span>
          </div>
        </div>

        {/* RIGHT SIDE: VISUAL BRANDING */}
        <div className="hidden md:flex w-1/2 relative items-center justify-end overflow-hidden group">
          {/* Background Split / Angled Shape */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-teal-900 to-black transition-transform duration-1000 group-hover:scale-110"
            style={{ clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          />

          {/* Scanning Line Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent h-20 w-full animate-[scan_4s_linear_infinite] pointer-events-none" />

          {/* Text Content */}
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
      </div>

      {/* Global CSS for custom animations that Tailwind needs defined */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes grid-move {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(500px); }
        }
      `,
        }}
      />
    </div>
  );
};

export default App;
