"use client";

import { useState } from "react";
import { Lock, KeyRound } from "lucide-react";

interface AccessGateProps {
  onUnlock: () => void;
}

export default function AccessGate({ onUnlock }: AccessGateProps) {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.toUpperCase() === "CAPTAINS2026") {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/80 backdrop-blur-2xl">
      <div className="bg-navy-900/40 backdrop-blur-xl p-12 rounded-[2rem] shadow-[0_0_80px_rgba(0,0,0,0.4)] border border-white/10 max-w-lg w-full mx-4 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-ocean-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-ocean-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <Lock className="text-white/60" size={28} strokeWidth={1.5} />
          </div>
          
          <h3 className="font-serif text-4xl text-white mb-4 tracking-tight">Restricted Access</h3>
          <p className="text-base font-light text-white/60 mb-10 leading-relaxed max-w-sm mx-auto">
            The Captain's Table is an invitation-only experience reserved for our highest tier members.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="relative group">
                <KeyRound className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white/80 transition-colors" size={18} strokeWidth={1.5} />
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter Invitation Code"
                  className={`w-full bg-white/5 border ${error ? 'border-red-500/50' : 'border-white/10'} rounded-2xl py-4 pl-14 pr-6 text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300 uppercase tracking-[0.2em] text-xs font-light`}
                />
              </div>
              {error && (
                <p className="text-red-400 text-xs mt-3 text-left font-light tracking-widest uppercase animate-in fade-in slide-in-from-top-1 px-2">
                  Invalid code. Please try again.
                </p>
              )}
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-white text-navy-900 text-xs font-medium tracking-[0.2em] uppercase rounded-2xl hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 shadow-[0_10px_40px_rgba(255,255,255,0.1)]"
            >
              Unlock Access
            </button>
          </form>

          <p className="text-[9px] text-white/30 mt-10 tracking-[0.3em] uppercase">
            Hint: Try CAPTAINS2026
          </p>
        </div>
      </div>
    </div>
  );
}
