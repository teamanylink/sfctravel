"use client";

import { useState } from "react";
import { mockCaptainsTableEvents } from "@/lib/mock-data";
import AccessGate from "@/components/portal/AccessGate";
import VIPEventCard from "@/components/portal/VIPEventCard";

export default function CaptainsTablePage() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <div className="-mx-4 md:-mx-6 lg:-mx-12 -mt-24 lg:-mt-12 min-h-screen relative bg-navy-900 overflow-hidden flex flex-col">
      {/* Full Bleed Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&w=2000&q=80" 
          alt="Dark Ocean"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-900/60 to-navy-900" />
      </div>

      {!isUnlocked && (
        <AccessGate onUnlock={() => setIsUnlocked(true)} />
      )}

      <div className={`relative z-10 px-6 lg:px-12 pt-32 lg:pt-40 pb-32 transition-all duration-1000 flex-1 ${isUnlocked ? "opacity-100 blur-none" : "opacity-0 blur-xl pointer-events-none select-none"}`}>
        <div className="max-w-[1400px] mx-auto space-y-32">
          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto pt-12">
            <span className="inline-block px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-[10px] text-white font-light tracking-[0.3em] uppercase mb-10">
              By Invitation Only
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[7rem] text-white mb-10 tracking-tight leading-[0.9]">
              The Captain's Table
            </h1>
            <p className="text-lg md:text-2xl font-light text-white/60 leading-relaxed max-w-3xl mx-auto">
              Exclusive access to private dinners with pro anglers, closed-door sponsor mixers, 
              and priority booking for the world's most sought-after charter fleets.
            </p>
          </div>

          {/* Events Grid */}
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8 gap-6">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Upcoming Gatherings</h2>
                <p className="text-lg font-light text-ocean-400">Secure your seat at our next exclusive event.</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
              {mockCaptainsTableEvents.map(event => (
                <VIPEventCard key={event.id} event={event} />
              ))}
            </div>
          </div>

          {/* Perks Callout */}
          <div className="grid md:grid-cols-3 gap-16 pt-16 border-t border-white/10">
            {[
              {
                num: "01",
                title: "Priority Booking",
                desc: "72-hour advance access to all new tournament packages and charter availability before the general membership."
              },
              {
                num: "02",
                title: "Exclusive Rebates",
                desc: "Enhanced virtual card kickbacks on all private aviation, premium lodging, and sponsor gear purchases."
              },
              {
                num: "03",
                title: "Dedicated Line",
                desc: "Direct, unmetered access to our senior concierge team, available 24/7 for any request globally."
              }
            ].map((perk, i) => (
              <div key={i} className="group">
                <div className="w-12 h-12 rounded-full border border-ocean-400/30 flex items-center justify-center mb-8 group-hover:bg-ocean-400/10 transition-colors duration-500">
                  <span className="text-ocean-400 text-xs font-light tracking-[0.2em]">{perk.num}</span>
                </div>
                <h4 className="text-sm font-light tracking-[0.25em] text-white uppercase mb-6">{perk.title}</h4>
                <p className="text-base font-light text-white/50 leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
