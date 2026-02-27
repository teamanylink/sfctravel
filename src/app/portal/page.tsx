import TierTracker from "@/components/portal/TierTracker";
import SavingsCounter from "@/components/portal/SavingsCounter";
import StatCard from "@/components/portal/StatCard";
import ActivityFeed from "@/components/portal/ActivityFeed";
import { mockMember } from "@/lib/mock-data";
import { Anchor, CalendarDays, Wallet, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Section: Tier & Savings */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <TierTracker />
        </div>
        <div>
          <SavingsCounter />
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Bookings" 
          value={mockMember.totalBookings} 
          icon={<CalendarDays size={20} strokeWidth={1.5} />} 
          trend="+3 this year"
          trendUp={true}
        />
        <StatCard 
          title="Active Trips" 
          value={mockMember.activeTrips} 
          icon={<Anchor size={20} strokeWidth={1.5} />} 
        />
        <StatCard 
          title="Rebate Rate" 
          value={`${mockMember.rebateRate}%`} 
          icon={<TrendingUp size={20} strokeWidth={1.5} />} 
        />
        <StatCard 
          title="Wallet Balance" 
          value={`$${mockMember.walletBalance.toLocaleString()}`} 
          icon={<Wallet size={20} strokeWidth={1.5} />} 
        />
      </div>

      {/* Bottom Section: Activity & Promos */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ActivityFeed />
        </div>
        
        <div className="space-y-6">
          {/* Sweepstakes Promo */}
          <div className="bg-white rounded-2xl border border-navy-900/5 shadow-sm overflow-hidden group cursor-pointer">
            <div className="h-32 bg-navy-900 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" 
                alt="Bahamas"
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <p className="text-xs font-light tracking-[0.2em] text-white/70 uppercase mb-1">Active Sweepstakes</p>
                <p className="font-serif text-xl text-white">Ultimate Bahamas Getaway</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-navy-900/60">Your Entries</span>
                <span className="font-serif text-xl text-navy-900">15</span>
              </div>
              <Link href="/portal/sweepstakes" className="block w-full text-center py-3 bg-[#fcfcfc] border border-navy-900/10 rounded-lg text-xs font-light tracking-[0.1em] text-navy-900 uppercase hover:bg-navy-900 hover:text-white transition-colors">
                View Details
              </Link>
            </div>
          </div>

          {/* Captain's Table Teaser */}
          <div className="bg-navy-900 rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
            <div className="relative z-10">
              <p className="font-serif text-2xl text-white mb-2">The Captain's Table</p>
              <p className="text-sm font-light text-white/60 mb-6">Exclusive events and private dinners. By invitation only.</p>
              <Link href="/portal/captains-table" className="inline-block border border-white/20 text-white text-xs font-light tracking-[0.1em] uppercase px-6 py-2 hover:bg-white hover:text-navy-900 transition-colors">
                Enter Code
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
