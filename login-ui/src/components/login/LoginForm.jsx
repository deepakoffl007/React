import React from "react";
import { User, Lock, Terminal, ShieldCheck } from "lucide-react";

const LoginForm = () => {
  return (
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

        <div className="pt-4">
          <button className="relative w-full py-4 overflow-hidden rounded-md bg-cyan-600 text-white font-black tracking-[0.2em] uppercase text-xs hover:bg-cyan-500 transition-all group active:scale-[0.97] shadow-[0_0_20px_rgba(6,182,212,0.3)]">
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
  );
};

export default LoginForm;
