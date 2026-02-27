"use client";

import { mockAnalytics } from "@/lib/mock-data";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ['#0a1628', '#152847', '#1a2d4a', '#a8d4e6'];

export default function RebateDonut() {
  return (
    <div className="bg-white rounded-2xl border border-navy-900/5 shadow-sm p-6 lg:p-8 h-full">
      <div className="mb-6">
        <h3 className="font-serif text-xl text-navy-900">Rebate Distribution</h3>
        <p className="text-xs font-light tracking-[0.1em] text-navy-900/50 uppercase mt-1">By Member Tier</p>
      </div>
      
      <div className="h-64 w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={mockAnalytics.rebateDistribution}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {mockAnalytics.rebateDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: '1px solid rgba(10,22,40,0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
              formatter={(value: any) => [`${value}%`, 'Share']}
            />
          </PieChart>
        </ResponsiveContainer>
        
        {/* Custom Legend */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 space-y-3">
          {mockAnalytics.rebateDistribution.map((entry, index) => (
            <div key={entry.name} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
              <span className="text-xs font-light text-navy-900">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
