import { VIPEvent } from "@/lib/types";
import { Calendar, MapPin, Users } from "lucide-react";

interface VIPEventCardProps {
  event: VIPEvent;
}

export default function VIPEventCard({ event }: VIPEventCardProps) {
  return (
    <div className="bg-navy-900/40 backdrop-blur-md rounded-2xl overflow-hidden group border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1">
      <div className="h-64 relative overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent" />
        
        <div className="absolute top-4 right-4 px-3 py-1 bg-navy-900/60 backdrop-blur-md rounded-full border border-white/10">
          <span className="text-[10px] text-[#a8d4e6] font-medium tracking-widest uppercase">
            {event.spotsRemaining} Spots Left
          </span>
        </div>
      </div>

      <div className="p-8 relative">
        <h3 className="font-serif text-2xl text-white mb-6 leading-snug group-hover:text-[#a8d4e6] transition-colors duration-500">
          {event.title}
        </h3>

        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-4 text-sm font-light text-white/70">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
              <Calendar size={14} className="text-[#a8d4e6]" />
            </div>
            {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
          <div className="flex items-center gap-4 text-sm font-light text-white/70">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
              <MapPin size={14} className="text-[#a8d4e6]" />
            </div>
            {event.location}
          </div>
          <div className="flex items-center gap-4 text-sm font-light text-white/70">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
              <Users size={14} className="text-[#a8d4e6]" />
            </div>
            Intimate setting limited to {event.capacity} guests
          </div>
        </div>

        <button className="w-full py-4 bg-white/5 border border-white/10 text-white text-xs font-light tracking-[0.2em] uppercase hover:bg-[#a8d4e6] hover:text-navy-900 hover:border-[#a8d4e6] transition-all duration-500 rounded-xl">
          Request Seat
        </button>
      </div>
    </div>
  );
}
