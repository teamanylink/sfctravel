"use client";

import { mockMember } from "@/lib/mock-data";
import { Ticket } from "lucide-react";

export default function EntryProgress() {
  // Mock logic: 1 entry per $1000 spent
  const totalEntries = Math.floor(mockMember.lifetimeSpend / 1000);
  const availableEntries = 45; // Mock available
  const nextBonusTarget = 2500000;
  const progress = (mockMember.lifetimeSpend / nextBonusTarget) * 100;

  return (
    <div className="bg-white rounded-3xl border border-navy-900/5 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-8 lg:p-10 h-full flex flex-col">
      <div className="flex items-start justify-between mb-10">
        <div>
          <h3 className="font-serif text-3xl text-navy-900 mb-3">Your Entry Bank</h3>
          <p className="text-sm font-light text-navy-900/60 leading-relaxed max-w-[240px]">
            Earn entries automatically with every booking through the portal.
          </p>
        </div>
        <div className="text-right">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-ocean-50 rounded-2xl mb-3">
            <span className="font-serif text-3xl text-ocean-600">{availableEntries}</span>
          </div>
          <p className="text-[9px] font-light tracking-[0.2em] text-navy-900/40 uppercase">Available to apply</p>
        </div>
      </div>

      <div className="space-y-5 flex-1">
        <div className="flex justify-between text-sm font-light text-navy-900">
          <span>Next Bonus: <strong className="font-medium">50 Entries</strong></span>
          <span className="text-navy-900/50">${(nextBonusTarget - mockMember.lifetimeSpend).toLocaleString()} away</span>
        </div>
        
        <div className="relative h-1.5 bg-navy-900/5 rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-navy-900 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="text-xs font-light text-navy-900/40">
          Lifetime entries earned: <span className="text-navy-900/70">{totalEntries.toLocaleString()}</span>
        </p>
      </div>

      <div className="mt-10 grid grid-cols-3 gap-6 border-t border-navy-900/5 pt-8">
        <div className="text-center">
          <p className="text-[9px] font-light tracking-[0.15em] text-navy-900/40 uppercase mb-3">Charter Booking</p>
          <p className="font-serif text-xl text-navy-900">+25 <span className="text-sm font-sans font-light text-navy-900/50">pts</span></p>
        </div>
        <div className="text-center border-x border-navy-900/5">
          <p className="text-[9px] font-light tracking-[0.15em] text-navy-900/40 uppercase mb-3">Tournament Pkg</p>
          <p className="font-serif text-xl text-navy-900">+15 <span className="text-sm font-sans font-light text-navy-900/50">pts</span></p>
        </div>
        <div className="text-center">
          <p className="text-[9px] font-light tracking-[0.15em] text-navy-900/40 uppercase mb-3">Sponsor Add-on</p>
          <p className="font-serif text-xl text-navy-900">+5 <span className="text-sm font-sans font-light text-navy-900/50">pts</span></p>
        </div>
      </div>
    </div>
  );
}
