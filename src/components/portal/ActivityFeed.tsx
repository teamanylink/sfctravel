import { mockTransactions } from "@/lib/mock-data";
import { ArrowUpRight } from "lucide-react";

export default function ActivityFeed() {
  return (
    <div className="bg-white rounded-2xl border border-navy-900/5 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-navy-900/5 flex justify-between items-center">
        <h3 className="font-serif text-xl text-navy-900">Recent Activity</h3>
        <button className="text-xs font-light tracking-[0.1em] text-navy-900/60 uppercase hover:text-navy-900 transition-colors">
          View All
        </button>
      </div>
      
      <div className="divide-y divide-navy-900/5">
        {mockTransactions.slice(0, 5).map((tx) => (
          <div key={tx.id} className="p-6 flex items-center justify-between hover:bg-[#fcfcfc] transition-colors group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#fcfcfc] border border-navy-900/5 flex items-center justify-center text-navy-900/40 group-hover:text-navy-900 transition-colors">
                <ArrowUpRight size={16} />
              </div>
              <div>
                <p className="text-sm font-medium text-navy-900 mb-1">{tx.description}</p>
                <p className="text-xs font-light text-navy-900/50">{new Date(tx.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-navy-900 mb-1">${tx.amount.toLocaleString()}</p>
              <p className="text-xs font-medium text-green-600">+{tx.rebateEarned.toLocaleString()} rebate</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
