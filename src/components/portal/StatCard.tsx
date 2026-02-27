import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: string;
  trendUp?: boolean;
}

export default function StatCard({ title, value, icon, trend, trendUp }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-navy-900/5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-[#a8d4e6]/10 rounded-xl text-navy-900">
          {icon}
        </div>
        {trend && (
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            trendUp ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
          }`}>
            {trend}
          </span>
        )}
      </div>
      <p className="text-xs font-light tracking-[0.15em] text-navy-900/50 uppercase mb-1">
        {title}
      </p>
      <p className="font-serif text-3xl text-navy-900">
        {value}
      </p>
    </div>
  );
}
