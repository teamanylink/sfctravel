"use client";

import { mockAnalytics } from "@/lib/mock-data";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-2xl border border-navy-900/5 shadow-sm p-6 lg:p-8 h-full">
      <div className="mb-6">
        <h3 className="font-serif text-xl text-navy-900">Revenue Growth</h3>
        <p className="text-xs font-light tracking-[0.1em] text-navy-900/50 uppercase mt-1">Last 6 Months</p>
      </div>
      
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={mockAnalytics.monthlyRevenue} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0a1628" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#0a1628" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#0a1628', opacity: 0.5 }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#0a1628', opacity: 0.5 }} tickFormatter={(value) => `$${value / 1000}k`} />
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: '1px solid rgba(10,22,40,0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
              formatter={(value: any) => [`$${value.toLocaleString()}`, 'Revenue']}
            />
            <Area type="monotone" dataKey="revenue" stroke="#0a1628" strokeWidth={2} fillOpacity={1} fill="url(#colorRevenue)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
