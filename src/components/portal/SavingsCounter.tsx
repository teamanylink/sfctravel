"use client";

import { useEffect, useState } from "react";
import { mockMember } from "@/lib/mock-data";

export default function SavingsCounter() {
  const [count, setCount] = useState(0);
  const target = mockMember.ytdRebates;

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="bg-navy-900 p-8 rounded-2xl text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#a8d4e6]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      
      <p className="text-xs font-light tracking-[0.2em] text-white/50 uppercase mb-6">
        YTD Realized Savings
      </p>
      
      <div className="font-serif text-5xl lg:text-6xl tracking-tight mb-8">
        ${Math.floor(count).toLocaleString()}
      </div>

      <div className="flex gap-8 border-t border-white/10 pt-6">
        <div>
          <p className="text-xs font-light text-white/40 uppercase tracking-widest mb-1">Lifetime</p>
          <p className="text-lg font-light">${(mockMember.lifetimeSpend * 0.035).toLocaleString()}</p>
        </div>
        <div>
          <p className="text-xs font-light text-white/40 uppercase tracking-widest mb-1">Pending</p>
          <p className="text-lg font-light text-[#a8d4e6]">$4,250</p>
        </div>
      </div>
    </div>
  );
}
