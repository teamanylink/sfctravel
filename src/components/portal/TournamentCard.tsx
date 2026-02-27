import { Tournament } from "@/lib/types";
import { MapPin, Calendar, DollarSign, Globe } from "lucide-react";

interface TournamentCardProps {
  tournament: Tournament;
  isSelected: boolean;
  onClick: () => void;
}

export default function TournamentCard({ tournament, isSelected, onClick }: TournamentCardProps) {
  const statusStyles = {
    Active: "text-ocean-600 bg-ocean-50/50",
    Upcoming: "text-navy-900/60 bg-navy-900/5",
    Past: "text-navy-900/40 bg-transparent border border-navy-900/10"
  };

  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-6 rounded-2xl transition-all duration-500 ${
        isSelected 
          ? "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] scale-[1.02] border border-transparent" 
          : "bg-transparent border border-transparent hover:bg-white/60"
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <h4 className="font-serif text-lg text-navy-900 leading-snug pr-4">{tournament.name}</h4>
        <span className={`text-[9px] font-medium tracking-[0.2em] uppercase px-2.5 py-1 rounded-full shrink-0 ${statusStyles[tournament.status]}`}>
          {tournament.status}
        </span>
      </div>

      <div className="space-y-2.5 text-sm font-light text-navy-900/60">
        <div className="flex items-center gap-3">
          <MapPin size={14} className="text-navy-900/30 shrink-0" />
          <span className="truncate">{tournament.city}, {tournament.country}</span>
        </div>
        <div className="flex items-center gap-3">
          <Calendar size={14} className="text-navy-900/30 shrink-0" />
          {new Date(tournament.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} – {new Date(tournament.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </div>
        <div className="flex items-center gap-3">
          <DollarSign size={14} className="text-navy-900/30 shrink-0" />
          <span>{tournament.entryFee}</span>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-navy-900/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe size={12} className="text-navy-900/30" />
          <span className="text-[10px] tracking-[0.2em] uppercase text-navy-900/40">{tournament.region}</span>
        </div>
        <span className="text-[10px] tracking-[0.2em] uppercase text-navy-900/40">{tournament.prizePool}</span>
      </div>
    </button>
  );
}
