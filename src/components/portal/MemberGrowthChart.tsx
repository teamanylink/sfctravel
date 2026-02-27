"use client";

import { mockAnalytics } from "@/lib/mock-data";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function MemberGrowthChart() {
  return (
    <div className="bg-white rounded-2xl border border-navy-900/5 shadow-sm p-6 lg:p-8 h-full">
      <div className="mb-6">
        <h3 className="font-serif text-xl text-navy-900">Member Growth</h3>
        <p className="text-xs font-light tracking-[0.1em] text-navy-900/50 uppercase mt-1">Active Accounts</p>
      </div>
      
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockAnalytics.memberGrowth} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#0a1628', opacity: 0.5 }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#0a1628', opacity: 0.5 }} />
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: '1px solid rgba(10,22,40,0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
            />
            <Line type="monotone" dataKey="members" stroke="#a8d4e6" strokeWidth={3} dot={{ r: 4, fill: '#a8d4e6', strokeWidth: 0 }} activeDot={{ r: 6, fill: '#0a1628' }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
