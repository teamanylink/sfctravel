"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Mail, Lock, Anchor } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleDemoSignIn = async () => {
    setIsLoading(true);
    // Simulate authentication delay
    await new Promise(resolve => setTimeout(resolve, 1200));
    router.push("/portal");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleDemoSignIn();
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Side - Image/Branding (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-navy-900">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=2000&q=80" 
            alt="Luxury Sportfishing" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
        </div>
        
        <div className="relative z-10 flex flex-col justify-between p-16 w-full h-full">
          <Link href="/" className="flex items-center gap-3 text-white w-fit">
            <Anchor className="text-[#a8d4e6]" size={28} />
            <span className="text-2xl font-serif tracking-wide">SFC Travel</span>
          </Link>

          <div className="max-w-xl">
            <p className="text-[#a8d4e6] text-sm font-medium tracking-[0.2em] uppercase mb-4">
              CTMS Member Portal
            </p>
            <h1 className="text-5xl font-serif text-white leading-tight mb-6">
              The ultimate competitive fishing experience.
            </h1>
            <p className="text-white/70 font-light text-lg leading-relaxed">
              Access your exclusive tournaments, manage private charters, and unlock premium rewards through our dedicated member portal.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col p-6 sm:p-12 lg:p-16 xl:p-24 relative">
        {/* Mobile Logo */}
        <div className="lg:hidden pt-[env(safe-area-inset-top)] mb-4">
          <div className="pt-4">
            <Link href="/" className="flex items-center gap-3 text-navy-900">
              <Anchor className="text-[#a8d4e6]" size={24} />
              <span className="text-xl font-serif tracking-wide">SFC Travel</span>
            </Link>
          </div>
        </div>

        <div className="max-w-md w-full mx-auto space-y-8 sm:space-y-10 flex-1 flex flex-col justify-center">
          <div>
            <h2 className="text-3xl font-serif text-navy-900 mb-3">Welcome Back</h2>
            <p className="text-navy-900/60 font-light">
              Sign in to access your CTMS member dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-5">
              <div className="relative">
                <label className="block text-[10px] font-medium tracking-[0.2em] text-navy-900/50 uppercase mb-2 ml-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-900/40" size={18} />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="member@example.com"
                    className="w-full bg-[#fcfcfc] border border-navy-900/10 rounded-xl py-3.5 pl-12 pr-4 text-navy-900 focus:outline-none focus:border-[#a8d4e6] focus:ring-1 focus:ring-[#a8d4e6] transition-all font-light [&:-webkit-autofill]:bg-[#fcfcfc] [&:-webkit-autofill]:[-webkit-box-shadow:0_0_0_1000px_#fcfcfc_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:#0a1628]"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="flex justify-between items-center mb-2 ml-1">
                  <label className="block text-[10px] font-medium tracking-[0.2em] text-navy-900/50 uppercase">
                    Password
                  </label>
                  <button type="button" className="text-xs text-[#a8d4e6] hover:text-navy-900 transition-colors">
                    Forgot?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-900/40" size={18} />
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-[#fcfcfc] border border-navy-900/10 rounded-xl py-3.5 pl-12 pr-4 text-navy-900 focus:outline-none focus:border-[#a8d4e6] focus:ring-1 focus:ring-[#a8d4e6] transition-all font-light [&:-webkit-autofill]:bg-[#fcfcfc] [&:-webkit-autofill]:[-webkit-box-shadow:0_0_0_1000px_#fcfcfc_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:#0a1628]"
                  />
                </div>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-navy-900 text-white text-xs font-medium tracking-[0.2em] uppercase rounded-xl hover:bg-navy-800 transition-colors flex items-center justify-center gap-2 group disabled:opacity-70"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Authenticating...
                </span>
              ) : (
                <>
                  Sign In
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="relative flex items-center justify-center py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-navy-900/10"></div>
            </div>
            <div className="relative bg-white px-4">
              <span className="text-xs text-navy-900/40 uppercase tracking-widest">Or</span>
            </div>
          </div>

          <button 
            onClick={handleDemoSignIn}
            disabled={isLoading}
            className="w-full py-4 bg-white border-2 border-[#a8d4e6] text-navy-900 text-xs font-medium tracking-[0.2em] uppercase rounded-xl hover:bg-[#a8d4e6]/5 transition-colors disabled:opacity-50"
          >
            One-Click Demo Sign In
          </button>

          <p className="text-center text-sm text-navy-900/60 font-light mt-8">
            Don't have an account?{" "}
            <button className="text-navy-900 font-medium hover:text-[#a8d4e6] transition-colors">
              Request Access
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
