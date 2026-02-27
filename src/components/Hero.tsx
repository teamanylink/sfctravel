"use client";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-navy-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Sportfishing Yacht"
          className="w-full h-full object-cover opacity-60 animate-scale-in"
        />
        <div className="absolute inset-0 bg-navy-900/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/20 to-navy-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center pb-20 px-6 lg:px-12 mt-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[6rem] font-light text-white leading-[1.1] mb-8 tracking-tight drop-shadow-lg">
              <span className="block animate-blur-fade-in">From the sky to the seas,</span>
              <span className="block animate-blur-fade-in delay-700 text-[#a8d4e6]">your next adventure starts here.</span>
            </h1>
            
            <p className="text-lg md:text-xl font-light text-white/90 max-w-2xl leading-relaxed mb-12 animate-blur-fade-in delay-1000 drop-shadow-md">
              Book your next tournament trip and earn loyalty rewards, fly private to the best waters in the world, and unlock experiences built exclusively for anglers like you.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 animate-blur-fade-in delay-[1200ms]">
              <a 
                href="/login" 
                className="bg-[#a8d4e6] text-navy-900 text-xs font-medium tracking-[0.2em] uppercase py-4 px-10 rounded-full hover:bg-white transition-all duration-500 text-center shadow-[0_0_30px_rgba(168,212,230,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:-translate-y-1"
              >
                Sign In
              </a>
              <a 
                href="#packages" 
                className="border border-white/30 text-white text-xs font-medium tracking-[0.2em] uppercase py-4 px-10 rounded-full hover:bg-white/10 transition-all duration-500 text-center backdrop-blur-sm hover:-translate-y-1"
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
