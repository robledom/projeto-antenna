import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PackageSection from "@/components/PackageSection";
import BenefitsSection from "@/components/BenefitsSection";
import ChannelsSection from "@/components/ChannelsSection";
import PackageIncludesSection from "@/components/PackageIncludesSection";
import InstallationSection from "@/components/InstallationSection";
import ConnectionsSection from "@/components/ConnectionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePackageSelect = () => {
    const packagesSection = document.getElementById("packages");
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation handlePackageSelect={handlePackageSelect} />
      <Hero handlePackageSelect={handlePackageSelect} />

      <div id="packages" className="py-8 md:py-16">
        <PackageSection selectedPackage={selectedPackage} setSelectedPackage={setSelectedPackage} />
      </div>

      <div id="benefits" className="py-8 md:py-16 bg-gray-50">
        <BenefitsSection />
      </div>
      <div id="channels" className="py-8 md:py-16">
        <ChannelsSection />
      </div>
      <div id="includes" className="py-8 md:py-16 bg-gray-50">
        <PackageIncludesSection />
      </div>
      <div id="installation" className="py-8 md:py-16">
        <InstallationSection />
      </div>
      <div id="connections" className="py-8 md:py-16 bg-gray-50">
        <ConnectionsSection />
      </div>
      <div id="testimonials" className="py-8 md:py-16">
        <TestimonialsSection />
      </div>
      <div className="py-8 md:py-16 bg-gray-50">
        <TrustSection />
      </div>
      <div id="faq" className="py-8 md:py-16">
        <FAQSection />
      </div>
      <div className="py-8 md:py-16">
        <CTASection handlePackageSelect={handlePackageSelect} />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;