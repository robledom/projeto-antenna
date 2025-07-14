
import React from "react";
import AntennaPackages from "@/components/AntennaPackages";
import { Link } from "react-router-dom";

interface PackageSectionProps {
  selectedPackage: number | null;
  setSelectedPackage: (packageId: number) => void;
}

const PackageSection: React.FC<PackageSectionProps> = ({ selectedPackage, setSelectedPackage }) => {
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
    <section id="packages" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 leading-tight">Choose Your <Link to="/" onClick={(e) => { e.preventDefault(); scrollToSection("packages"); }} className="text-[#4cd1bc] hover:underline">Broadwave Antenna</Link> Package & Start Saving!</h2>
        <p className="text-xl sm:text-2xl text-center text-gray-600 mb-6 leading-relaxed">How many antennas do you need? The more you buy, the bigger your discount!</p>
        <p className="text-lg sm:text-xl text-center text-gray-700 mb-12 leading-relaxed">Save from <span className="font-bold text-[#ff6b35]">$39.95 to $215.80</span> depending on the package you choose!</p>
        
        <AntennaPackages selectedPackage={selectedPackage} setSelectedPackage={setSelectedPackage} />
      </div>
    </section>
  );
};

export default PackageSection;
