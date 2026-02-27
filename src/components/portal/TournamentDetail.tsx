import { Tournament } from "@/lib/types";
import { X, MapPin, Calendar, ExternalLink } from "lucide-react";

interface TournamentDetailProps {
  tournament: Tournament | null;
  onClose: () => void;
}

export default function TournamentDetail({ tournament, onClose }: TournamentDetailProps) {
  if (!tournament) return null;

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_rgb(0,0,0,0.08)] flex flex-col relative overflow-hidden h-full max-h-[600px] border border-white">
      <div className="p-8 pb-6 border-b border-navy-900/5 relative shrink-0">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-navy-900/30 hover:text-navy-900 transition-colors"
        >
          <X size={20} strokeWidth={1.5} />
        </button>
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-ocean-600 mb-3 block">
          {tournament.status} — {tournament.region}
        </span>
        <h2 className="font-serif text-3xl text-navy-900 tracking-tight leading-tight pr-8">{tournament.name}</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-[10px] font-light tracking-[0.2em] text-navy-900/40 uppercase mb-2">Location</p>
            <p className="text-sm font-light text-navy-900 flex items-start gap-2">
              <MapPin size={14} className="text-navy-900/30 mt-0.5 shrink-0" />
              <span>{tournament.city}<br/><span className="text-navy-900/60">{tournament.country}</span></span>
            </p>
          </div>
          <div>
            <p className="text-[10px] font-light tracking-[0.2em] text-navy-900/40 uppercase mb-2">Dates</p>
            <p className="text-sm font-light text-navy-900 flex items-start gap-2">
              <Calendar size={14} className="text-navy-900/30 mt-0.5 shrink-0" />
              <span>
                {new Date(tournament.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}<br/>
                <span className="text-navy-900/60">to {new Date(tournament.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </span>
            </p>
          </div>
        </div>

        <div className="h-px w-full bg-navy-900/5" />

        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-[10px] font-light tracking-[0.2em] text-navy-900/40 uppercase mb-2">Prize Pool</p>
            <p className="font-serif text-2xl text-navy-900">{tournament.prizePool}</p>
          </div>
          <div>
            <p className="text-[10px] font-light tracking-[0.2em] text-navy-900/40 uppercase mb-2">Entry Fee</p>
            <p className="font-serif text-2xl text-navy-900">{tournament.entryFee}</p>
          </div>
        </div>

        <div className="h-px w-full bg-navy-900/5" />

        <div className="space-y-6">
          <div>
            <p className="text-[10px] font-light tracking-[0.2em] text-navy-900/40 uppercase mb-2">Organizer</p>
            <p className="text-sm font-light text-navy-900">{tournament.organizer}</p>
          </div>

          <div>
            <p className="text-[10px] font-light tracking-[0.2em] text-navy-900/40 uppercase mb-2">Format</p>
            <p className="text-sm font-light text-navy-900/70 leading-relaxed">{tournament.format}</p>
          </div>

          {tournament.registrationDeadline && (
            <div>
              <p className="text-[10px] font-light tracking-[0.2em] text-navy-900/40 uppercase mb-2">Registration</p>
              <p className="text-sm font-light text-navy-900">Closes {new Date(tournament.registrationDeadline).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            </div>
          )}

          <div>
            <p className="text-[10px] font-light tracking-[0.2em] text-navy-900/40 uppercase mb-3">Target Species</p>
            <div className="flex flex-wrap gap-2">
              {tournament.species.map(s => (
                <span key={s} className="px-3 py-1.5 bg-navy-900/5 rounded-full text-xs font-light text-navy-900">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 border-t border-navy-900/5 bg-white flex gap-4 shrink-0">
        {tournament.status === 'Past' ? (
          <button disabled className="flex-1 py-3.5 bg-navy-900/5 text-navy-900/30 text-xs font-light tracking-[0.2em] uppercase rounded-xl cursor-not-allowed">
            Event Concluded
          </button>
        ) : (
          <>
            <button className="flex-1 py-3.5 bg-navy-900 text-white text-xs font-light tracking-[0.2em] uppercase rounded-xl hover:bg-navy-800 transition-all hover:shadow-lg hover:-translate-y-0.5">
              Register Interest
            </button>
            {tournament.website && (
              <a
                href={tournament.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 border border-navy-900/10 text-navy-900/60 rounded-xl hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-all flex items-center justify-center"
              >
                <ExternalLink size={16} strokeWidth={1.5} />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
}
