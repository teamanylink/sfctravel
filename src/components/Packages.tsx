"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const packages = [
  {
    id: "fan-travel",
    name: "Tournament Travel",
    tagline: "Group & VIP Access",
    description: "Get there together and enjoy it more. Exclusive group travel packages with VIP hospitality, ringside access at top tournaments, and perks that make every event unforgettable.",
    price: "Earn Rewards",
    duration: "Per Event",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "private-aviation",
    name: "Fly Private",
    tagline: "Your Waters. Your Schedule.",
    description: "No layovers, no missed tides. Book private charters direct to the world's best fishing grounds. Your gear travels with you — and 5x loyalty rewards apply on every flight.",
    price: "5x Rewards",
    duration: "On Demand",
    image: "https://images.unsplash.com/photo-1559080463-5c7eb3a52de1?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "concierge",
    name: "Concierge Services",
    tagline: "Every Detail. Handled.",
    description: "Your dedicated concierge takes care of everything — equipment shipping, boat transfers, accommodations, and private dining. You just show up and fish.",
    price: "All-Inclusive",
    duration: "Custom",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "sustainability",
    name: "Fish with Purpose",
    tagline: "Your Conservation Footprint",
    description: "Track your catch-and-release record, offset your trip's carbon, and earn recognition for fishing responsibly. Make your passion a force for the ocean's future.",
    price: "Member Dashboard",
    duration: "Ongoing",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function Packages() {
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
    <section id="packages" className="bg-[#fcfcfc] py-20 md:py-32 lg:py-48 relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12" ref={ref}>
        {/* Header */}
        <div className={`mb-24 lg:mb-32 transition-all duration-[1.5s] ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
          <p className="text-xs font-light tracking-[0.3em] text-navy-900/40 uppercase mb-6">
            Member Experiences
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-navy-900 tracking-tight">
            The Portal Advantage
          </h2>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative flex flex-col gap-12 lg:gap-24 pb-24">
          {packages.map((pkg, index) => (
            <div 
              key={pkg.id}
              className={`sticky w-full max-w-6xl mx-auto h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden group cursor-pointer bg-navy-900 shadow-[0_-10px_40px_rgba(10,22,40,0.15)] transition-all duration-[1.5s] ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}`}
              style={{ 
                top: `calc(12vh + ${index * 2}rem)`,
                transitionDelay: `${index * 200}ms`
              }}
              onClick={() => router.push("/login")}
            >
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.name}
                  className="w-full h-full object-cover opacity-60 transition-transform duration-[3s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-10 lg:p-16 flex flex-col justify-end">
                <div className="flex items-baseline justify-between mb-6">
                  <span className="text-xs font-light tracking-[0.2em] text-white/50 uppercase">
                    {pkg.duration}
                  </span>
                  <span className="text-sm font-light tracking-widest text-white/80 uppercase">
                    {pkg.price}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-light text-white mb-4 tracking-tight">
                  {pkg.name}
                </h3>
                <p className="text-sm font-light tracking-[0.1em] text-[#a8d4e6] uppercase mb-6">
                  {pkg.tagline}
                </p>
                <p className="text-base lg:text-lg font-light text-white/60 leading-relaxed max-w-xl mb-12">
                  {pkg.description}
                </p>

                <div className="flex items-center gap-6">
                  <span className="btn-swiss text-xs font-light tracking-[0.2em] text-white uppercase py-2">
                    Learn More
                  </span>
                  <span className="text-xs font-light text-white/20 tracking-[0.3em] uppercase ml-auto">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
