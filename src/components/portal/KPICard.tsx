import { ReactNode } from "react";

interface KPICardProps {
  title: string;
  value: string;
  trend: string;
  trendUp: boolean;
  icon: ReactNode;
}

export default function KPICard({ title, value, trend, trendUp, icon }: KPICardProps) {
  return (
    <div className="bg-white rounded-2xl border border-navy-900/5 shadow-sm p-6">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-[#a8d4e6]/10 rounded-xl text-navy-900 inline-block">
          {icon}
        </div>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
          trendUp ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
        }`}>
          {trendUp ? "+" : "-"}{trend}
        </span>
      </div>
      <p className="font-serif text-3xl text-navy-900 mb-1">{value}</p>
      <p className="text-xs font-light tracking-[0.1em] text-navy-900/50 uppercase">
        {title}
      </p>
    </div>
  );
}
