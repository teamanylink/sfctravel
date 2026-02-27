import Sidebar from "@/components/portal/Sidebar";
import { mockMember } from "@/lib/mock-data";
import { Bell } from "lucide-react";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#fcfcfc] flex">
      <Sidebar />
      
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* Topbar */}
        <header className="h-24 px-8 flex items-center justify-between border-b border-navy-900/5 bg-white/50 backdrop-blur-md sticky top-0 z-30 hidden lg:flex">
          <div>
            <h1 className="text-xl font-serif text-navy-900">Welcome back, {mockMember.name.split(' ')[0]}</h1>
            <p className="text-sm font-light text-navy-900/60 mt-1">{mockMember.organization}</p>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="text-right">
              <p className="text-xs font-light tracking-widest text-navy-900/40 uppercase mb-1">YTD Rebates</p>
              <p className="text-xl font-light text-navy-900">${mockMember.ytdRebates.toLocaleString()}</p>
            </div>
            <div className="w-px h-8 bg-navy-900/10"></div>
            <button className="relative p-2 text-navy-900/60 hover:text-navy-900 transition-colors">
              <Bell size={20} strokeWidth={1.5} />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500"></span>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 lg:p-12 pt-24 lg:pt-12 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
