import { VIPEvent } from "@/lib/types";
import { Calendar, MapPin, Users } from "lucide-react";

interface VIPEventCardProps {
  event: VIPEvent;
}

export default function VIPEventCard({ event }: VIPEventCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-3xl rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden group border border-white/10 hover:border-white/20 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
      <div className="h-64 sm:h-80 relative overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 ease-out mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent" />
        
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 px-4 py-2 sm:px-5 sm:py-2.5 bg-navy-900/60 backdrop-blur-xl rounded-full border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
          <span className="text-[9px] sm:text-[10px] text-ocean-400 font-light tracking-[0.3em] uppercase">
            {event.spotsRemaining} Spots Left
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-8 lg:p-12 relative">
        <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white mb-6 sm:mb-10 leading-tight group-hover:text-ocean-400 transition-colors duration-500">
          {event.title}
        </h3>

        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
          <div className="flex items-center gap-4 sm:gap-6 text-sm sm:text-base font-light text-white/70">
            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
              <Calendar size={18} strokeWidth={1.5} className="text-ocean-400" />
            </div>
            {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
          <div className="flex items-center gap-4 sm:gap-6 text-sm sm:text-base font-light text-white/70">
            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
              <MapPin size={18} strokeWidth={1.5} className="text-ocean-400" />
            </div>
            {event.location}
          </div>
          <div className="flex items-center gap-4 sm:gap-6 text-sm sm:text-base font-light text-white/70">
            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
              <Users size={18} strokeWidth={1.5} className="text-ocean-400" />
            </div>
            Intimate setting limited to {event.capacity} guests
          </div>
        </div>

        <button className="w-full py-4 sm:py-5 bg-transparent border border-white/20 text-white text-[10px] sm:text-[11px] font-medium tracking-[0.3em] uppercase hover:bg-white hover:text-navy-900 transition-all duration-500 rounded-xl sm:rounded-2xl">
          Request Seat
        </button>
      </div>
    </div>
  );
}
