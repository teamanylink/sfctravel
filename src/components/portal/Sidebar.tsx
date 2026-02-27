"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Map, 
  Crown, 
  Gift, 
  Plane, 
  Wallet, 
  BarChart3,
  Menu,
  X,
  LogOut
} from "lucide-react";
import { useState } from "react";
import { mockMember } from "@/lib/mock-data";

const navItems = [
  { name: "Dashboard", href: "/portal", icon: LayoutDashboard },
  { name: "Tournaments", href: "/portal/tournaments", icon: Map },
  { name: "Captain's Table", href: "/portal/captains-table", icon: Crown },
  { name: "Sweepstakes", href: "/portal/sweepstakes", icon: Gift },
  { name: "Private Charter", href: "/portal/charter", icon: Plane },
  { name: "Loyalty Wallet", href: "/portal/wallet", icon: Wallet },
  { name: "Analytics", href: "/portal/analytics", icon: BarChart3 },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-navy-900 flex items-center justify-between px-6 z-50 border-b border-[#a8d4e6]/20">
        <span className="text-white font-serif text-xl tracking-tight">SFC Travel</span>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-screen w-64 bg-navy-900 flex flex-col z-40 transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        {/* Logo */}
        <div className="h-24 flex items-center px-8 border-b border-white/10">
          <Link href="/" className="flex flex-col">
            <span className="text-xl font-light tracking-tight text-white">SFC Travel</span>
            <span className="text-[10px] font-light tracking-[0.2em] text-white/50 uppercase">x CTMS Portal</span>
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 py-8 px-4 flex flex-col gap-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center gap-4 px-4 py-3 rounded-lg transition-colors
                  ${isActive 
                    ? "bg-[#a8d4e6]/10 text-[#a8d4e6] border-r-2 border-[#a8d4e6]" 
                    : "text-white/60 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                <Icon size={18} strokeWidth={isActive ? 2 : 1.5} />
                <span className="text-sm font-light tracking-wide">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Member Badge & Logout */}
        <div className="p-6 border-t border-white/10 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#a8d4e6] to-[#0a1628] flex items-center justify-center text-white font-serif">
              {mockMember.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm text-white font-light">{mockMember.name}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                <span className="text-xs text-white/60 tracking-wider uppercase">{mockMember.tier} Member</span>
              </div>
            </div>
          </div>
          
          <Link 
            href="/login"
            className="flex items-center gap-4 px-4 py-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors w-full"
          >
            <LogOut size={18} strokeWidth={1.5} />
            <span className="text-sm font-light tracking-wide">Sign Out</span>
          </Link>
        </div>
      </div>
      
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
