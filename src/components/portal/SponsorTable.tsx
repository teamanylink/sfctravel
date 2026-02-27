import { mockAnalytics } from "@/lib/mock-data";

export default function SponsorTable() {
  return (
    <div className="bg-white rounded-2xl border border-navy-900/5 shadow-sm overflow-hidden h-full flex flex-col">
      <div className="p-6 lg:p-8 border-b border-navy-900/5">
        <h3 className="font-serif text-xl text-navy-900">Top Sponsors</h3>
        <p className="text-xs font-light tracking-[0.1em] text-navy-900/50 uppercase mt-1">Activation Performance</p>
      </div>
      
      <div className="flex-1 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-navy-900/5 text-xs font-light tracking-[0.1em] text-navy-900/40 uppercase bg-[#fcfcfc]">
              <th className="p-6 font-normal">Sponsor</th>
              <th className="p-6 font-normal text-right">Activations</th>
              <th className="p-6 font-normal text-right">Attr. Revenue</th>
              <th className="p-6 font-normal text-right">Est. ROI</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-900/5">
            {mockAnalytics.sponsors.map((sponsor) => (
              <tr key={sponsor.name} className="hover:bg-[#fcfcfc] transition-colors">
                <td className="p-6 text-sm font-medium text-navy-900">
                  {sponsor.name}
                </td>
                <td className="p-6 text-sm font-light text-navy-900 text-right">
                  {sponsor.activations.toLocaleString()}
                </td>
                <td className="p-6 text-sm font-light text-navy-900 text-right">
                  ${sponsor.revenue.toLocaleString()}
                </td>
                <td className="p-6 text-sm font-medium text-green-600 text-right">
                  {sponsor.roi}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
