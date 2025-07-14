
import React from "react";
import InstallationSteps from "@/components/InstallationSteps";

const InstallationSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 leading-tight">Easy 3-Step Installation Process</h2>
        <InstallationSteps />
      </div>
    </section>
  );
};

export default InstallationSection;
