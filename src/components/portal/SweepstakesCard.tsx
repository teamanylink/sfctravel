import { Sweepstakes } from "@/lib/types";
import { Ticket, Trophy } from "lucide-react";

interface SweepstakesCardProps {
  sweepstakes: Sweepstakes;
}

export default function SweepstakesCard({ sweepstakes }: SweepstakesCardProps) {
  return (
    <div className="bg-white rounded-3xl border border-navy-900/5 shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden group flex flex-col h-full transition-all duration-500 hover:shadow-[0_20px_60px_rgb(0,0,0,0.06)] hover:-translate-y-1">
      <div className="h-56 relative overflow-hidden">
        <img 
          src={sweepstakes.image} 
          alt={sweepstakes.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent opacity-80" />
        
        <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
          <span className="text-[10px] font-light tracking-[0.2em] text-white uppercase px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            Value: {sweepstakes.value}
          </span>
        </div>
      </div>

      <div className="p-8 flex-1 flex flex-col">
        <h3 className="font-serif text-2xl text-navy-900 mb-3 leading-tight">{sweepstakes.title}</h3>
        <p className="text-sm font-light text-navy-900/60 mb-8 flex-1 leading-relaxed">
          {sweepstakes.prize}
        </p>

        <div className="space-y-5">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-3 text-navy-900/50 font-light">
              <Trophy size={16} strokeWidth={1.5} />
              <span>Total Entries</span>
            </div>
            <span className="font-serif text-lg text-navy-900">{sweepstakes.totalEntries.toLocaleString()}</span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-3 text-navy-900/50 font-light">
              <Ticket size={16} strokeWidth={1.5} />
              <span>Your Entries</span>
            </div>
            <span className="font-serif text-lg text-ocean-600">{sweepstakes.myEntries}</span>
          </div>

          <div className="pt-6 mt-2 border-t border-navy-900/5">
            <button className="w-full py-4 bg-transparent border border-navy-900/20 text-navy-900 text-[10px] font-light tracking-[0.2em] uppercase rounded-xl hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-all duration-300">
              Apply Entries
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
