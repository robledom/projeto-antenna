
import React from "react";
import PackageIncludes from "@/components/PackageIncludes";
import { Link } from "react-router-dom";

const PackageIncludesSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 100; // Account for sticky header and some padding
      const elementPosition = section.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 leading-tight">What's Included in the <Link to="/" onClick={(e) => { e.preventDefault(); scrollToSection("packages"); }} className="text-[#4cd1bc] hover:underline">Broad Wave Antenna</Link> Package</h2>
        <PackageIncludes />
      </div>
    </section>
  );
};

export default PackageIncludesSection;
