"use client";

import KPICard from "@/components/portal/KPICard";
import RevenueChart from "@/components/portal/RevenueChart";
import BookingsChart from "@/components/portal/BookingsChart";
import RebateDonut from "@/components/portal/RebateDonut";
import MemberGrowthChart from "@/components/portal/MemberGrowthChart";
import SponsorTable from "@/components/portal/SponsorTable";
import { DollarSign, CalendarDays, TrendingUp, Users, Download } from "lucide-react";

export default function AnalyticsPage() {
  const handleExport = (type: 'pdf' | 'csv') => {
    alert(`Mock ${type.toUpperCase()} export initiated.`);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
        <div>
          <h1 className="font-serif text-4xl text-navy-900 mb-2">Executive Analytics</h1>
          <p className="text-lg font-light text-navy-900/60">High-level commercial insights and portal performance.</p>
        </div>
        
        <div className="flex gap-4">
          <button 
            onClick={() => handleExport('csv')}
            className="flex items-center gap-2 px-6 py-3 bg-white border border-navy-900/10 text-navy-900 text-xs font-medium tracking-[0.2em] uppercase rounded-lg hover:border-navy-900/30 transition-colors shadow-sm"
          >
            <Download size={14} />
            Export CSV
          </button>
          <button 
            onClick={() => handleExport('pdf')}
            className="flex items-center gap-2 px-6 py-3 bg-navy-900 text-white text-xs font-medium tracking-[0.2em] uppercase rounded-lg hover:bg-navy-800 transition-colors shadow-sm"
          >
            <Download size={14} />
            Export PDF
          </button>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard 
          title="Total Revenue (YTD)" 
          value="$3.2M" 
          trend="12.5%" 
          trendUp={true}
          icon={<DollarSign size={20} />} 
        />
        <KPICard 
          title="Total Bookings" 
          value="428" 
          trend="8.2%" 
          trendUp={true}
          icon={<CalendarDays size={20} />} 
        />
        <KPICard 
          title="Rebates Distributed" 
          value="$145K" 
          trend="15.0%" 
          trendUp={true}
          icon={<TrendingUp size={20} />} 
        />
        <KPICard 
          title="Active Members" 
          value="650" 
          trend="24.5%" 
          trendUp={true}
          icon={<Users size={20} />} 
        />
      </div>

      {/* Charts Grid 1 */}
      <div className="grid lg:grid-cols-2 gap-8">
        <RevenueChart />
        <BookingsChart />
      </div>

      {/* Charts Grid 2 */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <RebateDonut />
        </div>
        <div className="lg:col-span-2">
          <MemberGrowthChart />
        </div>
      </div>

      {/* Table */}
      <div className="pb-12">
        <SponsorTable />
      </div>
    </div>
  );
}
