"use client";

import { useState } from "react";
import { mockCaptainsTableEvents } from "@/lib/mock-data";
import AccessGate from "@/components/portal/AccessGate";
import VIPEventCard from "@/components/portal/VIPEventCard";

export default function CaptainsTablePage() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <div className="-mx-4 md:-mx-6 lg:-mx-12 -mt-24 lg:-mt-12 min-h-screen relative bg-navy-900">
      {/* Full Bleed Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&w=2000&q=80" 
          alt="Dark Ocean"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/50 to-navy-900" />
      </div>

      {!isUnlocked && <AccessGate onUnlock={() => setIsUnlocked(true)} />}

      <div className={`relative z-10 px-6 lg:px-12 pt-32 pb-24 transition-all duration-1000 ${isUnlocked ? "opacity-100 blur-none" : "opacity-0 blur-md pointer-events-none select-none"}`}>
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto pt-12">
            <p className="text-xs font-light tracking-[0.4em] text-[#a8d4e6] uppercase mb-8">
              By Invitation Only
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[6rem] text-white mb-8 tracking-tight leading-[0.9]">
              The Captain's Table
            </h1>
            <p className="text-lg md:text-xl font-light text-white/60 leading-relaxed max-w-2xl mx-auto">
              Exclusive access to private dinners with pro anglers, closed-door sponsor mixers, 
              and priority booking for the world's most sought-after charter fleets.
            </p>
          </div>

          {/* Events Grid */}
          <div>
            <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-2">Upcoming Gatherings</h2>
                <p className="text-sm font-light text-[#a8d4e6]">Secure your seat at our next exclusive event.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {mockCaptainsTableEvents.map(event => (
                <VIPEventCard key={event.id} event={event} />
              ))}
            </div>
          </div>

          {/* Perks Callout */}
          <div className="grid md:grid-cols-3 gap-12 pt-12 border-t border-white/10">
            <div>
              <div className="w-8 h-8 rounded-full border border-[#a8d4e6]/30 flex items-center justify-center mb-6">
                <span className="text-[#a8d4e6] text-xs">01</span>
              </div>
              <h4 className="text-sm font-medium tracking-[0.2em] text-white uppercase mb-4">Priority Booking</h4>
              <p className="text-sm font-light text-white/50 leading-relaxed">72-hour advance access to all new tournament packages and charter availability before the general membership.</p>
            </div>
            <div>
              <div className="w-8 h-8 rounded-full border border-[#a8d4e6]/30 flex items-center justify-center mb-6">
                <span className="text-[#a8d4e6] text-xs">02</span>
              </div>
              <h4 className="text-sm font-medium tracking-[0.2em] text-white uppercase mb-4">Exclusive Rebates</h4>
              <p className="text-sm font-light text-white/50 leading-relaxed">Enhanced virtual card kickbacks on all private aviation, premium lodging, and sponsor gear purchases.</p>
            </div>
            <div>
              <div className="w-8 h-8 rounded-full border border-[#a8d4e6]/30 flex items-center justify-center mb-6">
                <span className="text-[#a8d4e6] text-xs">03</span>
              </div>
              <h4 className="text-sm font-medium tracking-[0.2em] text-white uppercase mb-4">Dedicated Line</h4>
              <p className="text-sm font-light text-white/50 leading-relaxed">Direct, unmetered access to our senior concierge team, available 24/7 for any request globally.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
