"use client";

import { useEffect, useRef, useState } from "react";

export default function Statement() {
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
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#fcfcfc] py-40 lg:py-56 relative overflow-hidden">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto px-6 lg:px-12 text-center relative z-10 transition-all duration-[1.5s] ease-out ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"
        }`}
      >
        <p className="text-xs font-light tracking-[0.3em] text-navy-900/40 uppercase mb-16">
          Built for the Fishing Community
        </p>
        <h2 className="text-swiss text-4xl md:text-5xl lg:text-[4rem] text-navy-900 leading-[1.1] tracking-tight">
          Every trip you take earns you something back — <span className="text-navy-900/40">loyalty rewards, exclusive access, and savings</span> that grow the more you fish.
        </h2>
      </div>
      
      {/* Subtle architectural lines */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-navy-900/5 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`} />
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-navy-900/5 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`} />
    </section>
  );
}
