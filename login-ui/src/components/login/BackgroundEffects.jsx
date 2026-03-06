import React from "react";

const BackgroundEffects = () => {
  return (
    <>
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 h-[200%] w-full grid-layer animate-[grid-move_20s_linear_infinite]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_80%)]" />
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-900/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-900/20 blur-[120px] rounded-full animate-pulse delay-700" />
    </>
  );
};

export default BackgroundEffects;
