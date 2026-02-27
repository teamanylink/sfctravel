import { mockMember } from "@/lib/mock-data";

export default function VirtualCard() {
  return (
    <div className="bg-gradient-to-br from-[#1a2332] via-[#1e293b] to-[#0f172a] rounded-[1.5rem] p-6 relative overflow-hidden shadow-2xl aspect-[1.586/1] flex flex-col justify-between group border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-navy-900/30 w-full max-w-[340px] mx-auto">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/4 group-hover:from-white/10 transition-all duration-500" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full blur-2xl group-hover:from-blue-400/20 transition-all duration-500" />
      <div className="absolute inset-0 bg-white/[0.01] backdrop-blur-[1px]"></div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></div>
      
      {/* Card Header */}
      <div className="relative z-10 flex justify-between items-start">
        <h3 className="text-white/90 font-serif text-xl tracking-wide drop-shadow-sm">SFC Travel</h3>
        <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
          <span className="text-white/80 text-[9px] font-medium tracking-[0.2em] uppercase">{mockMember.tier}</span>
        </div>
      </div>

      {/* Card Details */}
      <div className="relative z-10 flex justify-between items-end">
        <div className="space-y-1">
          <p className="text-white/90 font-medium tracking-widest uppercase text-[10px] drop-shadow-sm">{mockMember.name}</p>
          <p className="text-white/50 font-mono text-sm tracking-[0.2em]">
            •••• 4289
          </p>
        </div>
        <p className="text-white font-serif text-2xl drop-shadow-md">${mockMember.walletBalance.toLocaleString()}</p>
      </div>
    </div>
  );
}
