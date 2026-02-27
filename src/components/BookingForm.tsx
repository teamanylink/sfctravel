"use client";

import Link from "next/link";

interface BookingFormProps {
  selectedPackage: string | null;
}

export default function BookingForm({ selectedPackage }: BookingFormProps) {
  return (
    <section id="booking" className="bg-[#fcfcfc] py-20 md:py-32 lg:py-48 border-t border-navy-900/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <p className="text-xs font-light tracking-[0.3em] text-navy-900/40 uppercase mb-6">
            Join the Community
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-navy-900 mb-8 tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-base md:text-xl font-light text-navy-900/50 max-w-2xl mx-auto leading-relaxed mb-10 md:mb-16">
            Whether you&apos;re fishing the circuit, supporting your club, or following the season — SFC Travel is built for you. Sign in to access your member portal.
          </p>
          <Link
            href="/login"
            className="inline-block py-5 px-8 sm:px-12 md:px-16 bg-navy-900 text-white text-xs font-medium tracking-[0.2em] uppercase rounded-xl hover:bg-navy-800 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
          >
            Sign In to Your Portal
          </Link>
          <p className="text-center text-xs font-light text-navy-900/40 mt-8">
            New members — contact us to get set up with your account.
          </p>
        </div>
      </div>
    </section>
  );
}
