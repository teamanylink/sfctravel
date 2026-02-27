"use client";

import { useState, useMemo } from "react";
import { mockTournaments } from "@/lib/mock-data";
import TournamentMap from "@/components/portal/TournamentMap";
import TournamentCard from "@/components/portal/TournamentCard";
import TournamentDetail from "@/components/portal/TournamentDetail";
import { Globe, Trophy, CalendarDays, MapPin, Filter, X } from "lucide-react";

const REGIONS = ['All', 'Americas', 'Caribbean', 'Europe', 'Africa', 'Asia-Pacific', 'Middle East'] as const;
const STATUSES = ['All', 'Active', 'Upcoming', 'Past'] as const;

export default function TournamentsPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [regionFilter, setRegionFilter] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return mockTournaments.filter(t => {
      if (regionFilter !== 'All' && t.region !== regionFilter) return false;
      if (statusFilter !== 'All' && t.status !== statusFilter) return false;
      return true;
    });
  }, [regionFilter, statusFilter]);

  const selectedTournament = mockTournaments.find(t => t.id === selectedId) || null;

  const stats = useMemo(() => {
    const upcoming = mockTournaments.filter(t => t.status === 'Upcoming').length;
    const active = mockTournaments.filter(t => t.status === 'Active').length;
    const regions = new Set(mockTournaments.map(t => t.region)).size;
    const countries = new Set(mockTournaments.map(t => t.country)).size;
    return { upcoming, active, regions, countries, total: mockTournaments.length };
  }, []);

  const hasFilters = regionFilter !== 'All' || statusFilter !== 'All';

  return (
    <div className="max-w-[1400px] mx-auto space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl md:text-5xl text-navy-900 mb-4">Global Tournaments</h1>
          <p className="text-lg font-light text-navy-900/60 leading-relaxed">
            Discover {stats.total} premium sport fishing championships across {stats.countries} countries. Track active events and plan your next expedition.
          </p>
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-3 px-6 py-3.5 rounded-full border text-xs font-light tracking-[0.2em] uppercase transition-all duration-500 ${
            hasFilters || showFilters
              ? 'bg-navy-900 text-white border-navy-900 shadow-lg'
              : 'bg-transparent text-navy-900 border-navy-900/20 hover:border-navy-900/40'
          }`}
        >
          <Filter size={14} strokeWidth={1.5} />
          Filters {hasFilters && <span className="bg-white text-navy-900 px-2 py-0.5 rounded-full text-[9px]">{filtered.length}</span>}
        </button>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {[
          { label: 'Upcoming', value: stats.upcoming, icon: CalendarDays },
          { label: 'Active Now', value: stats.active, icon: Trophy },
          { label: 'Regions', value: stats.regions, icon: Globe },
          { label: 'Countries', value: stats.countries, icon: MapPin },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-navy-900/5 flex flex-col justify-between h-32 md:h-40 transition-transform duration-500 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-light tracking-[0.2em] text-navy-900/40 uppercase">{stat.label}</p>
              <stat.icon size={18} strokeWidth={1.5} className="text-navy-900/20" />
            </div>
            <p className="font-serif text-4xl md:text-5xl text-navy-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Filter Bar */}
      <div className={`transition-all duration-500 overflow-hidden ${showFilters ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white rounded-3xl border border-navy-900/5 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs font-light tracking-[0.2em] text-navy-900 uppercase">Refine Search</span>
            {hasFilters && (
              <button
                onClick={() => { setRegionFilter('All'); setStatusFilter('All'); }}
                className="flex items-center gap-2 text-xs font-light text-navy-900/50 hover:text-navy-900 transition-colors"
              >
                <X size={14} strokeWidth={1.5} /> Clear filters
              </button>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-[10px] font-light tracking-[0.2em] text-navy-900/40 uppercase mb-4">Region</p>
              <div className="flex flex-wrap gap-2">
                {REGIONS.map(r => (
                  <button
                    key={r}
                    onClick={() => setRegionFilter(r)}
                    className={`px-4 py-2 rounded-full text-xs font-light transition-all duration-300 ${
                      regionFilter === r
                        ? 'bg-navy-900 text-white shadow-md'
                        : 'bg-navy-900/5 text-navy-900/60 hover:bg-navy-900/10'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] font-light tracking-[0.2em] text-navy-900/40 uppercase mb-4">Status</p>
              <div className="flex flex-wrap gap-2">
                {STATUSES.map(s => (
                  <button
                    key={s}
                    onClick={() => setStatusFilter(s)}
                    className={`px-4 py-2 rounded-full text-xs font-light transition-all duration-300 ${
                      statusFilter === s
                        ? 'bg-navy-900 text-white shadow-md'
                        : 'bg-navy-900/5 text-navy-900/60 hover:bg-navy-900/10'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* List Area */}
        <div className="lg:col-span-5 xl:col-span-4 order-2 lg:order-1">
          <div className="flex items-center justify-between mb-6 px-2">
            <h3 className="text-[10px] font-light tracking-[0.2em] text-navy-900/40 uppercase">
              {hasFilters ? `${filtered.length} Results` : 'All Events'}
            </h3>
          </div>

          <div className="space-y-4 h-[600px] overflow-y-auto pr-4 custom-scrollbar">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <Globe size={48} strokeWidth={1} className="text-navy-900/10 mb-6" />
                <p className="text-lg font-serif text-navy-900 mb-2">No tournaments found</p>
                <p className="text-sm text-navy-900/50 font-light mb-6">Try adjusting your filters to see more events.</p>
                <button
                  onClick={() => { setRegionFilter('All'); setStatusFilter('All'); }}
                  className="text-xs font-light tracking-[0.2em] uppercase text-ocean-600 hover:text-ocean-700 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              filtered.map(t => (
                <TournamentCard 
                  key={t.id} 
                  tournament={t} 
                  isSelected={selectedId === t.id}
                  onClick={() => setSelectedId(t.id)}
                />
              ))
            )}
          </div>
        </div>

        {/* Map Area */}
        <div className="lg:col-span-7 xl:col-span-8 order-1 lg:order-2 relative sticky top-32">
          <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgb(0,0,0,0.05)] border border-navy-900/5 bg-white p-2">
            <div className="rounded-[1.25rem] overflow-hidden">
              <TournamentMap 
                tournaments={filtered} 
                selectedId={selectedId} 
                onSelect={setSelectedId} 
              />
            </div>
          </div>
          
          {/* Floating Detail Panel on Desktop */}
          <div className={`hidden lg:block absolute top-8 right-8 w-[380px] z-[1000] transition-all duration-500 origin-top-right ${
            selectedTournament ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}>
            <TournamentDetail 
              tournament={selectedTournament} 
              onClose={() => setSelectedId(null)} 
            />
          </div>
        </div>
        
        {/* Mobile Detail Panel (Modal-like) */}
        {selectedTournament && (
          <div className="lg:hidden fixed inset-0 z-[1000] flex items-end sm:items-center justify-center bg-navy-900/20 backdrop-blur-sm p-4 animate-in fade-in duration-300">
            <div className="w-full max-w-md animate-in slide-in-from-bottom-8 duration-500">
              <TournamentDetail 
                tournament={selectedTournament} 
                onClose={() => setSelectedId(null)} 
              />
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(10,22,40,0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(10,22,40,0.1);
        }
      `}</style>
    </div>
  );
}
