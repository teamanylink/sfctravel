"use client";

import { mockAnalytics } from "@/lib/mock-data";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function BookingsChart() {
  return (
    <div className="bg-white rounded-2xl border border-navy-900/5 shadow-sm p-6 lg:p-8 h-full">
      <div className="mb-6">
        <h3 className="font-serif text-xl text-navy-900">Top Destinations</h3>
        <p className="text-xs font-light tracking-[0.1em] text-navy-900/50 uppercase mt-1">By Booking Volume</p>
      </div>
      
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={mockAnalytics.topDestinations} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#0a1628' }} width={80} />
            <Tooltip 
              cursor={{ fill: 'rgba(10,22,40,0.02)' }}
              contentStyle={{ borderRadius: '12px', border: '1px solid rgba(10,22,40,0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
            />
            <Bar dataKey="bookings" fill="#a8d4e6" radius={[0, 4, 4, 0]} barSize={24} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
