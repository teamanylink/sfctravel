"use client";

import { useState, useEffect } from "react";

const heroSlides = [
  {
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2000&q=80",
    alt: "Luxury Sportfishing Yacht",
  },
  {
    src: "https://d27kdz5bm9.ufs.sh/f/dXaM68H4SPa9O8CMAdbMKQWsfY6InkiR7tZh2C0NVJHLEdgq",
    alt: "Private Aviation",
  },
];

export default function Hero() {
  const [currentGroup, setCurrentGroup] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentGroup(1);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen h-[100dvh] w-full overflow-hidden bg-navy-900">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroSlides.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-cover will-change-[opacity,transform] transition-[opacity,transform] duration-[2000ms] ease-in-out ${
              currentGroup === i
                ? "opacity-60 scale-100"
                : "opacity-0 scale-105 blur-md"
            } ${i === 0 ? "animate-scale-in" : ""}`}
          />
        ))}
        <div className="absolute inset-0 bg-navy-900/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/20 to-navy-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center pb-20 px-6 lg:px-12 mt-16 md:mt-0">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-4xl">
            <div className="h-[140px] sm:h-[120px] md:h-[160px] lg:h-[200px] xl:h-[240px] relative mb-6">
              <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6rem] font-medium leading-[1.15] tracking-[-0.02em] drop-shadow-2xl">
                {/* Group 1 */}
                <div className={`absolute inset-0 transition-[opacity,transform,filter] duration-1000 ease-in-out ${currentGroup === 0 ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 -translate-y-4 blur-sm pointer-events-none'}`}>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/60">From the seas,</span>
                  <span className="block text-[#a8d4e6] mt-1 md:mt-2">to the skies.</span>
                </div>
                
                {/* Group 2 */}
                <div className={`absolute inset-0 transition-[opacity,transform,filter] duration-1000 ease-in-out ${currentGroup === 1 ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-4 blur-sm pointer-events-none'}`}>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/60">Your next adventure,</span>
                  <span className="block text-[#a8d4e6] mt-1 md:mt-2">starts here.</span>
                </div>
              </h1>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-white/80 max-w-2xl leading-relaxed mb-10 md:mb-12 animate-blur-fade-in delay-1000 drop-shadow-lg">
              Book your next tournament trip and earn loyalty rewards, fly private to the best waters in the world, and unlock experiences built exclusively for anglers like you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-blur-fade-in delay-[1200ms]">
              <a 
                href="/login" 
                className="bg-[#a8d4e6] text-navy-900 text-xs font-medium tracking-[0.2em] uppercase py-4 px-8 sm:px-10 rounded-full hover:bg-white transition-all duration-500 text-center shadow-[0_0_30px_rgba(168,212,230,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:-translate-y-1 w-full sm:w-auto"
              >
                Sign In
              </a>
              <a 
                href="#packages" 
                className="border border-white/30 text-white text-xs font-medium tracking-[0.2em] uppercase py-4 px-8 sm:px-10 rounded-full hover:bg-white/10 transition-all duration-500 text-center backdrop-blur-sm hover:-translate-y-1 w-full sm:w-auto"
              >
                Explore Benefits
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-blur-fade-in delay-1000 flex flex-col items-center gap-4">
        <span className="text-[10px] font-medium tracking-[0.3em] text-white/50 uppercase">Scroll</span>
        <div className="w-px h-16 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-[#a8d4e6] animate-[bounce_2s_infinite] shadow-[0_0_10px_rgba(168,212,230,0.8)]" />
        </div>
      </div>
    </section>
  );
}
