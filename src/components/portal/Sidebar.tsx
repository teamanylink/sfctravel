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
  LogOut,
  ChevronLeft
} from "lucide-react";
import { useState, useEffect } from "react";
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
  const isDashboard = pathname === "/portal";
  const currentPage = navItems.find(item => item.href === pathname);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Header — native iOS style */}
      <div 
        className="lg:hidden fixed top-0 left-0 right-0 bg-[#fcfcfc]/70 backdrop-blur-2xl z-50"
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <div className="flex items-center justify-between h-11 px-4">
          {/* Left: Back button or brand */}
          {isDashboard ? (
            <span className="text-navy-900 font-serif text-[17px] tracking-tight">SFC Travel</span>
          ) : (
            <Link 
              href="/portal" 
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_1px_3px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)] active:scale-90 transition-transform -ml-0.5"
            >
              <ChevronLeft size={18} strokeWidth={2.2} className="text-navy-900/70 -ml-0.5" />
            </Link>
          )}

          {/* Center: Page title (sub-pages only) */}
          {!isDashboard && currentPage && (
            <span className="absolute left-1/2 -translate-x-1/2 text-[17px] font-semibold text-navy-900 pointer-events-none">
              {currentPage.name}
            </span>
          )}

          {/* Right: Menu */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-navy-900/60 p-1.5 -mr-1.5 rounded-full active:bg-navy-900/5 transition-colors"
          >
            {isOpen ? <X size={22} strokeWidth={1.8} /> : <Menu size={22} strokeWidth={1.8} />}
          </button>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex fixed top-0 left-0 h-screen w-64 bg-navy-900 flex-col z-40">
        <div className="h-24 flex items-center px-8 border-b border-white/10">
          <Link href="/" className="flex flex-col">
            <span className="text-xl font-light tracking-tight text-white">SFC Travel</span>
            <span className="text-[10px] font-light tracking-[0.2em] text-white/50 uppercase">x CTMS Portal</span>
          </Link>
        </div>

        <nav className="flex-1 py-8 px-4 flex flex-col gap-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link 
                key={item.name} 
                href={item.href}
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

      {/* Mobile Bottom Sheet Backdrop */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Bottom Sheet */}
      <div 
        className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-navy-900 rounded-t-3xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] max-h-[85dvh] flex flex-col ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="pt-4 pb-2 flex-shrink-0">
          <div className="w-12 h-1 bg-white/20 rounded-full mx-auto" />
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-8" style={{ paddingBottom: "max(2rem, env(safe-area-inset-bottom))" }}>
          {/* Member Info */}
          <div className="flex items-center gap-4 py-5 mb-2 border-b border-white/10">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#a8d4e6] to-[#0a1628] flex items-center justify-center text-white font-serif text-lg">
              {mockMember.name.charAt(0)}
            </div>
            <div>
              <p className="text-base text-white font-light">{mockMember.name}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                <span className="text-xs text-white/50 tracking-wider uppercase">{mockMember.tier} Member</span>
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-1 py-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center gap-4 px-4 py-3.5 rounded-xl transition-colors
                    ${isActive 
                      ? "bg-[#a8d4e6]/10 text-[#a8d4e6]" 
                      : "text-white/60 hover:text-white hover:bg-white/5"
                    }
                  `}
                >
                  <Icon size={20} strokeWidth={isActive ? 2 : 1.5} />
                  <span className="text-base font-light tracking-wide">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Sign Out */}
          <div className="mt-4 pt-4 border-t border-white/10">
            <Link 
              href="/login"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 px-4 py-3 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-colors w-full"
            >
              <LogOut size={20} strokeWidth={1.5} />
              <span className="text-base font-light tracking-wide">Sign Out</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
