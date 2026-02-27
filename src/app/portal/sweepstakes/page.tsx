"use client";

import { mockSweepstakes } from "@/lib/mock-data";
import CountdownTimer from "@/components/portal/CountdownTimer";
import SweepstakesCard from "@/components/portal/SweepstakesCard";
import EntryProgress from "@/components/portal/EntryProgress";

export default function SweepstakesPage() {
  const featuredSweepstakes = mockSweepstakes[0];

  return (
    <div className="max-w-[1400px] mx-auto space-y-12">
      <div className="mb-8 max-w-2xl">
        <h1 className="font-serif text-4xl md:text-5xl text-navy-900 mb-4">Fan Sweepstakes</h1>
        <p className="text-lg font-light text-navy-900/60 leading-relaxed">
          Turn your travel volume into exclusive experiences and premium gear. Use your accumulated entries to win.
        </p>
      </div>

      {/* Featured Sweepstakes Hero */}
      <div className="bg-navy-900 rounded-[2.5rem] overflow-hidden relative shadow-[0_20px_60px_rgba(10,22,40,0.15)]">
        <div className="absolute inset-0">
          <img 
            src={featuredSweepstakes.image} 
            alt={featuredSweepstakes.title}
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/20" />
        </div>
        
        <div className="relative z-10 p-6 md:p-12 lg:p-20 xl:p-24 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 md:gap-16">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-[10px] text-white font-light tracking-[0.2em] uppercase mb-8">
              Grand Prize Draw
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white mb-6 tracking-tight leading-[1.1]">
              {featuredSweepstakes.title}
            </h2>
            <p className="text-xl font-light text-white/70 mb-12 leading-relaxed max-w-xl">
              {featuredSweepstakes.prize}
            </p>
            
            <div className="mb-12">
              <p className="text-[10px] font-light tracking-[0.2em] text-white/50 uppercase mb-6">Time Remaining</p>
              <CountdownTimer deadline={featuredSweepstakes.deadline} />
            </div>

            <button className="px-6 sm:px-8 md:px-10 py-4 md:py-5 bg-white text-navy-900 text-[11px] font-medium tracking-[0.2em] uppercase rounded-2xl hover:bg-white/90 hover:scale-105 transition-all duration-500 shadow-[0_10px_40px_rgba(255,255,255,0.2)]">
              Apply Entries Now
            </button>
          </div>

          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-10 text-center w-full lg:min-w-[280px] lg:w-auto shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
            <p className="text-[10px] font-light tracking-[0.2em] text-white/50 uppercase mb-3">Prize Value</p>
            <p className="font-serif text-5xl text-white mb-8">{featuredSweepstakes.value}</p>
            
            <div className="w-full h-px bg-white/10 mb-8" />
            
            <p className="text-[10px] font-light tracking-[0.2em] text-white/50 uppercase mb-3">Your Entries</p>
            <p className="font-serif text-4xl text-ocean-400">{featuredSweepstakes.myEntries}</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 pt-8">
        {/* Entry Progress */}
        <div className="lg:col-span-5 xl:col-span-4">
          <EntryProgress />
        </div>

        {/* Other Active Sweepstakes */}
        <div className="lg:col-span-7 xl:col-span-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-3xl text-navy-900">More Ways to Win</h3>
            <span className="text-[10px] font-light tracking-[0.2em] text-navy-900/40 uppercase">
              {mockSweepstakes.length - 1} Active
            </span>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {mockSweepstakes.slice(1).map(sweepstakes => (
              <SweepstakesCard key={sweepstakes.id} sweepstakes={sweepstakes} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
