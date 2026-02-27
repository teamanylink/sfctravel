import VirtualCard from "@/components/portal/VirtualCard";
import TransactionTable from "@/components/portal/TransactionTable";
import RebateTierVisual from "@/components/portal/RebateTierVisual";
import { mockMember } from "@/lib/mock-data";
import { ArrowUpRight, Clock, History } from "lucide-react";

export default function WalletPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-6 md:mb-8">
        <h1 className="font-serif text-3xl md:text-4xl text-navy-900 mb-2 md:mb-3">Loyalty Wallet</h1>
        <p className="text-base md:text-lg font-light text-navy-900/60 max-w-2xl">Manage your virtual card, track rebates, and view transaction history.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
        {/* Left Column: Card & Summary */}
        <div className="space-y-6 md:space-y-8">
          <div className="bg-white rounded-[2rem] border border-navy-900/5 shadow-sm p-6 md:p-8">
            <div className="mb-8">
              <VirtualCard />
            </div>
            
            <div>
              <h3 className="text-[11px] font-medium tracking-[0.2em] text-navy-900/40 uppercase mb-6">Rebate Summary</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-5 p-5 rounded-2xl bg-white border border-navy-900/5 hover:border-navy-900/10 transition-colors shadow-sm">
                  <div className="p-3 bg-green-50/50 rounded-xl text-green-600 shrink-0">
                    <ArrowUpRight size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium tracking-[0.2em] text-navy-900/40 mb-1.5 uppercase">YTD Earned</p>
                    <p className="font-serif text-2xl sm:text-3xl text-navy-900">${mockMember.ytdRebates.toLocaleString()}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-5 rounded-2xl bg-white border border-navy-900/5 hover:border-navy-900/10 transition-colors shadow-sm">
                  <div className="p-3 bg-yellow-50/50 rounded-xl text-yellow-600 shrink-0">
                    <Clock size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium tracking-[0.2em] text-navy-900/40 mb-1.5 uppercase">Pending Processing</p>
                    <p className="font-serif text-2xl sm:text-3xl text-navy-900">$4,250</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-5 rounded-2xl bg-white border border-navy-900/5 hover:border-navy-900/10 transition-colors shadow-sm">
                  <div className="p-3 bg-navy-50/50 rounded-xl text-navy-600 shrink-0">
                    <History size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium tracking-[0.2em] text-navy-900/40 mb-1.5 uppercase">Lifetime Earned</p>
                    <p className="font-serif text-2xl sm:text-3xl text-navy-900">${(mockMember.lifetimeSpend * 0.035).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Transactions & Tiers */}
        <div className="lg:col-span-2 space-y-6 md:space-y-8">
          <TransactionTable />
          <RebateTierVisual />
        </div>
      </div>
    </div>
  );
}
