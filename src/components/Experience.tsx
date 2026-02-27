"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: "Earn on Every Trip",
    description: "Every booking you make through the portal earns you loyalty rewards. The more you travel with the community, the higher your tier — and the better the perks.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
      </svg>
    ),
    title: "Loyalty Rewards",
    description: "Watch your savings stack up in your member wallet. Your travel spending converts into credits you can redeem on future trips, gear upgrades, and exclusive experiences.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
      </svg>
    ),
    title: "Fly Private. Fish Anywhere.",
    description: "Skip the layovers and go direct to the water. Our private aviation layer gets you and your crew to remote tournament destinations in comfort — on your schedule.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    title: "Fish with Purpose",
    description: "Track your environmental footprint alongside your tournament record. Carbon offsets, catch-and-release metrics, and sustainability credentials you can share with pride.",
  },
];

const stats = [
  { value: "$3.5M+", label: "In Member Travel Savings" },
  { value: "150+", label: "Premium Destinations" },
  { value: "24/7", label: "Concierge Support" },
  { value: "5x", label: "Rewards on Private Flights" },
];

export default function Experience() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="benefits" className="py-32 lg:py-48 relative overflow-hidden bg-navy-900">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12" ref={ref}>
        {/* Header */}
        <div className={`mb-24 lg:mb-32 transition-all duration-[1.5s] ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
          <p className="text-xs font-light tracking-[0.3em] text-white/40 uppercase mb-6">
            Why SFC Travel
          </p>
          <h2 className="font-serif text-5xl lg:text-7xl font-light text-white mb-8 tracking-tight">
            Travel More.<br />Earn More. Fish Better.
          </h2>
          <p className="text-xl font-light text-white/50 max-w-2xl leading-relaxed">
            SFC Travel is a members-only portal built around the fishing community. Every trip you book earns loyalty rewards, unlocks exclusive access, and puts money back in your pocket — automatically.
          </p>
        </div>

        {/* Stats Bar */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-12 mb-32 py-16 border-t border-b border-white/5 transition-all duration-[1.5s] delay-300 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center lg:text-left">
              <div className="font-serif text-4xl lg:text-5xl font-light text-white mb-4 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-light text-white/40 tracking-[0.2em] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group cursor-pointer transition-all duration-[1.5s] ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
              style={{ transitionDelay: `${500 + index * 150}ms` }}
              onClick={() => router.push("/login")}
            >
              <div className="w-12 h-12 mb-8 text-[#a8d4e6]/50 group-hover:text-[#a8d4e6] transition-colors duration-500">
                {feature.icon}
              </div>
              <h3 className="font-serif text-3xl font-light text-white mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-base font-light text-white/50 leading-relaxed max-w-md">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
