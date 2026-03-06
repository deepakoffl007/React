import React from "react";
import { BackgroundEffects } from "@/components/login";

const AuthLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-[#050505] flex items-center justify-center p-4 overflow-hidden font-sans selection:bg-cyan-500/30">
      <BackgroundEffects />
      <div className="relative z-10 w-full max-w-4xl h-[520px] flex overflow-hidden rounded-lg border border-cyan-500/30 backdrop-blur-md bg-black/60 shadow-[0_0_50px_rgba(6,182,212,0.1)]">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
