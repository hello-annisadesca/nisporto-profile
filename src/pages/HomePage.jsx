import React from "react";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import SkillsSection from "../components/SkillsSection";
import PortfolioSection from "../components/PortofolioSection";
import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <SkillsSection />
      <PortfolioSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </>
  );
}
