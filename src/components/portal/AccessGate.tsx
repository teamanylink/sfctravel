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
    <div className="absolute inset-0 z-30 flex items-center justify-center bg-navy-900/40 backdrop-blur-xl">
      <div className="bg-navy-900/80 backdrop-blur-md p-10 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.3)] border border-white/10 max-w-md w-full text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#a8d4e6]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        
        <div className="relative z-10">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10">
            <Lock className="text-white/50" size={24} />
          </div>
          
          <h3 className="font-serif text-3xl text-white mb-2">Restricted Access</h3>
          <p className="text-sm font-light text-white/60 mb-8">
            The Captain's Table is an invitation-only experience for our highest tier members.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="relative">
                <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter Invitation Code"
                  className={`w-full bg-white/5 border ${error ? 'border-red-500/50' : 'border-white/10'} rounded-lg py-3 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors uppercase tracking-widest text-sm`}
                />
              </div>
              {error && (
                <p className="text-red-400 text-xs mt-2 text-left animate-in fade-in slide-in-from-top-1">
                  Invalid code. Please try again.
                </p>
              )}
            </div>

            <button 
              type="submit"
              className="w-full py-3 bg-white text-navy-900 text-xs font-medium tracking-[0.2em] uppercase rounded-lg hover:bg-white/90 transition-colors"
            >
              Unlock Access
            </button>
          </form>

          <p className="text-[10px] text-white/30 mt-8 tracking-widest uppercase">
            Hint: Try CAPTAINS2026
          </p>
        </div>
      </div>
    </div>
  );
}
