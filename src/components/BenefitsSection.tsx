
import React from "react";
import Benefits from "@/components/Benefits";

const BenefitsSection: React.FC = () => {
  const scrollToPackages = () => {
    const section = document.getElementById("packages");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="benefits" className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 leading-tight">
          Why Choose{" "}
          <a 
            href="#packages" 
            onClick={(e) => {
              e.preventDefault();
              scrollToPackages();
            }}
            className="text-[#4cd1bc] hover:underline"
          >
            Broadwave TV Antenna
          </a>
          ?
        </h2>
        <Benefits />
      </div>
    </section>
  );
};

export default BenefitsSection;
