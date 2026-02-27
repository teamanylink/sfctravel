import { mockTiers, mockMember } from "@/lib/mock-data";
import { Check } from "lucide-react";

export default function RebateTierVisual() {
  return (
    <div className="bg-white rounded-2xl border border-navy-900/5 shadow-sm p-5 md:p-8">
      <div className="mb-6 md:mb-8">
        <h3 className="font-serif text-xl text-navy-900 mb-2">Rebate Structure</h3>
        <p className="text-sm font-light text-navy-900/60">Your rebate percentage increases as your lifetime travel volume grows.</p>
      </div>

      <div className="space-y-4">
        {mockTiers.map((tier, index) => {
          const isCurrent = tier.name === mockMember.tier;
          const isPast = mockMember.lifetimeSpend >= tier.threshold && !isCurrent;
          
          return (
            <div 
              key={tier.name}
              className={`p-5 md:p-6 rounded-xl border transition-all ${
                isCurrent 
                  ? "border-navy-900 bg-navy-900/5 shadow-sm" 
                  : "border-navy-900/5 bg-[#fcfcfc]"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 md:mb-6">
                <div className="flex items-center gap-3">
                  <h4 className={`font-serif text-lg md:text-xl ${isCurrent ? "text-navy-900" : "text-navy-900/80"}`}>
                    {tier.name}
                  </h4>
                  {isCurrent && (
                    <span className="px-2.5 py-1 bg-navy-900 text-white text-[10px] tracking-widest uppercase rounded-full font-medium">
                      Current
                    </span>
                  )}
                </div>
                <div className="sm:text-right flex items-center sm:block gap-2">
                  <span className={`font-serif text-2xl md:text-3xl ${isCurrent ? "text-navy-900" : "text-navy-900/60"}`}>
                    {tier.rebatePercentage}%
                  </span>
                  <span className="text-xs font-light tracking-wide text-navy-900/40 sm:ml-1 uppercase">rebate</span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 pt-4 border-t border-navy-900/5">
                <p className="text-xs font-medium tracking-[0.1em] text-navy-900/50 uppercase">
                  {tier.threshold === 0 ? "Entry Level" : `$${(tier.threshold / 1000).toLocaleString()}k+ Volume`}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {tier.perks.map((perk, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs font-light text-navy-900/70 bg-white px-2.5 py-1 rounded-md border border-navy-900/5">
                      <Check size={12} className={isCurrent || isPast ? "text-green-600" : "text-navy-900/30"} />
                      {perk}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
