import { mockMember } from "@/lib/mock-data";

export default function VirtualCard() {
  return (
    <div className="bg-gradient-to-br from-[#1a2332] via-[#1e293b] to-[#0f172a] rounded-[2rem] p-8 relative overflow-hidden shadow-2xl min-h-[260px] flex flex-col justify-between group border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-navy-900/30">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 group-hover:from-white/10 transition-all duration-500" />
      <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full blur-3xl group-hover:from-blue-400/20 transition-all duration-500" />
      <div className="absolute inset-0 bg-white/[0.01] backdrop-blur-[1px]"></div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></div>
      
      {/* Card Header */}
      <div className="relative z-10 flex justify-between items-start">
        <div className="space-y-1.5">
          <h3 className="text-white font-serif text-3xl tracking-tight drop-shadow-sm">SFC Travel</h3>
          <p className="text-white/50 text-[10px] tracking-[0.25em] uppercase font-medium">x CTMS Portal</p>
        </div>
        <div className="px-4 py-1.5 bg-white/5 rounded-full border border-white/20 backdrop-blur-md shadow-inner">
          <span className="text-white text-[11px] font-medium tracking-[0.2em] uppercase">{mockMember.tier}</span>
        </div>
      </div>

      {/* Card Details */}
      <div className="relative z-10 mt-12">
        <div className="mb-8">
          <p className="text-white/50 text-[10px] tracking-[0.25em] uppercase mb-2 font-medium">Virtual Card Number</p>
          <p className="text-white font-mono text-2xl tracking-[0.2em] drop-shadow-md whitespace-nowrap">
            <span className="opacity-70">•••• •••• ••••</span> 4289
          </p>
        </div>
        <div className="flex justify-between items-end">
          <div className="space-y-1.5">
            <p className="text-white/50 text-[10px] tracking-[0.25em] uppercase font-medium">Cardholder</p>
            <p className="text-white font-medium tracking-widest uppercase text-sm drop-shadow-sm">{mockMember.name}</p>
          </div>
          <div className="text-right space-y-1.5">
            <p className="text-white/50 text-[10px] tracking-[0.25em] uppercase font-medium">Available Balance</p>
            <p className="text-white font-serif text-3xl drop-shadow-md">${mockMember.walletBalance.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
