"use client";

import { mockMember, mockTiers } from "@/lib/mock-data";
import { useEffect, useState } from "react";

export default function TierTracker() {
  const [progress, setProgress] = useState(0);
  
  const currentTierIndex = mockTiers.findIndex(t => t.name === mockMember.tier);
  const nextTier = mockTiers[currentTierIndex + 1];
  
  const currentThreshold = mockTiers[currentTierIndex].threshold;
  const nextThreshold = nextTier ? nextTier.threshold : currentThreshold;
  
  const spendInCurrentTier = mockMember.lifetimeSpend - currentThreshold;
  const tierRange = nextThreshold - currentThreshold;
  
  const targetProgress = nextTier ? (spendInCurrentTier / tierRange) * 100 : 100;

  useEffect(() => {
    const timer = setTimeout(() => setProgress(targetProgress), 500);
    return () => clearTimeout(timer);
  }, [targetProgress]);

  return (
    <div className="bg-white p-8 rounded-2xl border border-navy-900/5 shadow-sm">
      <div className="flex justify-between items-end mb-8">
        <div>
          <p className="text-xs font-light tracking-[0.2em] text-navy-900/40 uppercase mb-2">Current Status</p>
          <div className="flex items-center gap-3">
            <h2 className="font-serif text-3xl text-navy-900">{mockMember.tier} Member</h2>
            <span className="px-3 py-1 bg-navy-900/5 text-navy-900 text-xs font-medium rounded-full">
              {mockMember.rebateRate}% Rebate
            </span>
          </div>
        </div>
        {nextTier && (
          <div className="text-right">
            <p className="text-sm font-light text-navy-900/60">
              <span className="font-medium text-navy-900">${(nextThreshold - mockMember.lifetimeSpend).toLocaleString()}</span> to {nextTier.name}
            </p>
          </div>
        )}
      </div>

      <div className="relative h-2 bg-navy-900/5 rounded-full overflow-hidden mb-4">
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-navy-900 to-[#a8d4e6] transition-all duration-1500 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex justify-between text-xs font-light text-navy-900/40 uppercase tracking-widest">
        <span>{mockMember.tier} (${(currentThreshold / 1000).toFixed(0)}k)</span>
        {nextTier && <span>{nextTier.name} (${(nextThreshold / 1000000).toFixed(1)}M)</span>}
      </div>
    </div>
  );
}
