import { mockMember } from "@/lib/mock-data";

export default function VirtualCard() {
  return (
    <div className="bg-gradient-to-br from-navy-900 via-[#1a2d4a] to-navy-800 rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-2xl aspect-[1.6/1] flex flex-col justify-between group border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-navy-900/20">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#a8d4e6]/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 group-hover:from-[#a8d4e6]/30 transition-all duration-500" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl group-hover:from-blue-500/20 transition-all duration-500" />
      <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-[1px]"></div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></div>
      
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
      
      {/* Card Header */}
      <div className="relative z-10 flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="text-white font-serif text-2xl md:text-3xl tracking-tight drop-shadow-sm">SFC Travel</h3>
          <p className="text-white/60 text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium">x CTMS Portal</p>
        </div>
        <div className="px-3 md:px-4 py-1.5 bg-white/10 rounded-full border border-white/20 backdrop-blur-md shadow-inner">
          <span className="text-white text-[10px] md:text-xs font-semibold tracking-widest uppercase">{mockMember.tier}</span>
        </div>
      </div>

      {/* Card Details */}
      <div className="relative z-10 mt-auto">
        <div className="mb-6 md:mb-8">
          <p className="text-white/60 text-[10px] tracking-[0.2em] uppercase mb-2 font-medium">Virtual Card Number</p>
          <p className="text-white font-mono text-xl md:text-2xl tracking-[0.25em] drop-shadow-md">•••• •••• •••• 4289</p>
        </div>
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <p className="text-white/60 text-[10px] tracking-[0.2em] uppercase font-medium">Cardholder</p>
            <p className="text-white font-medium tracking-widest uppercase text-sm md:text-base drop-shadow-sm">{mockMember.name}</p>
          </div>
          <div className="text-right space-y-1">
            <p className="text-white/60 text-[10px] tracking-[0.2em] uppercase font-medium">Available Balance</p>
            <p className="text-white font-serif text-2xl md:text-3xl drop-shadow-md">${mockMember.walletBalance.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
