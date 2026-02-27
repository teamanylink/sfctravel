"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Experience from "@/components/Experience";
import Packages from "@/components/Packages";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Statement />
      <Experience />
      <Packages onSelectPackage={setSelectedPackage} />
      <BookingForm selectedPackage={selectedPackage} />
      <Footer />
    </main>
  );
}
