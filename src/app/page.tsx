"use client";

import Navbar from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/About";
import { ProgramInfoSection } from "@/components/Aboutca";
import { FAQSection } from "../components/Faq";
import { ContactSection } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function LandingPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <HeroSection />
      <AboutSection />
      <ProgramInfoSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
