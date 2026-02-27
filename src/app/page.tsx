"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Experience from "@/components/Experience";
import Packages from "@/components/Packages";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Statement />
      <Experience />
      <Packages />
      <BookingForm selectedPackage={null} />
      <Footer />
    </main>
  );
}
