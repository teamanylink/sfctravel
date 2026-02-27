"use client";

import { mockTransactions } from "@/lib/mock-data";
import { Download } from "lucide-react";

export default function TransactionTable() {
  const handleExport = () => {
    // Mock CSV export
    const headers = ["Date", "Description", "Amount", "Rebate Earned", "Status"];
    const csvContent = [
      headers.join(","),
      ...mockTransactions.map(tx => 
        `"${tx.date}","${tx.description}",${tx.amount},${tx.rebateEarned},"${tx.status}"`
      )
    ].join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "sportfishing_rebates.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white rounded-2xl border border-navy-900/5 shadow-sm overflow-hidden">
      <div className="p-4 md:p-6 border-b border-navy-900/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#fcfcfc]">
        <h3 className="font-serif text-xl text-navy-900">Transaction History</h3>
        <button 
          onClick={handleExport}
          className="flex items-center gap-2 text-xs font-medium tracking-[0.1em] text-navy-900/60 uppercase hover:text-navy-900 transition-colors bg-white px-4 py-2 rounded-lg border border-navy-900/10 hover:bg-navy-50"
        >
          <Download size={14} />
          Export CSV
        </button>
      </div>
      
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-navy-900/5 text-xs font-medium tracking-[0.1em] text-navy-900/40 uppercase bg-navy-50/30">
              <th className="p-6 font-normal">Date</th>
              <th className="p-6 font-normal">Description</th>
              <th className="p-6 font-normal text-right">Amount</th>
              <th className="p-6 font-normal text-right">Rebate Earned</th>
              <th className="p-6 font-normal text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-900/5">
            {mockTransactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-[#fcfcfc] transition-colors group">
                <td className="p-6 text-sm font-light text-navy-900/60 whitespace-nowrap">
                  {new Date(tx.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </td>
                <td className="p-6 text-sm font-medium text-navy-900">
                  {tx.description}
                </td>
                <td className="p-6 text-sm font-light text-navy-900 text-right whitespace-nowrap">
                  ${tx.amount.toLocaleString()}
                </td>
                <td className="p-6 text-sm font-medium text-green-600 text-right whitespace-nowrap">
                  +${tx.rebateEarned.toLocaleString()}
                </td>
                <td className="p-6 text-right whitespace-nowrap">
                  <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium ${
                    tx.status === 'Completed' ? 'bg-green-50 text-green-700 border border-green-200/50' :
                    tx.status === 'Pending' ? 'bg-yellow-50 text-yellow-700 border border-yellow-200/50' :
                    'bg-navy-50 text-navy-700 border border-navy-200/50'
                  }`}>
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden divide-y divide-navy-900/5">
        {mockTransactions.map((tx) => (
          <div key={tx.id} className="p-4 space-y-3 hover:bg-[#fcfcfc] transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-navy-900 mb-1">{tx.description}</p>
                <p className="text-xs font-light text-navy-900/60">
                  {new Date(tx.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
              <span className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider ${
                tx.status === 'Completed' ? 'bg-green-50 text-green-700 border border-green-200/50' :
                tx.status === 'Pending' ? 'bg-yellow-50 text-yellow-700 border border-yellow-200/50' :
                'bg-navy-50 text-navy-700 border border-navy-200/50'
              }`}>
                {tx.status}
              </span>
            </div>
            
            <div className="flex justify-between items-end pt-2 border-t border-navy-900/5">
              <div>
                <p className="text-[10px] font-light tracking-[0.1em] text-navy-900/40 uppercase mb-0.5">Amount</p>
                <p className="text-sm font-light text-navy-900">${tx.amount.toLocaleString()}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-light tracking-[0.1em] text-navy-900/40 uppercase mb-0.5">Rebate</p>
                <p className="text-sm font-medium text-green-600">+${tx.rebateEarned.toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
