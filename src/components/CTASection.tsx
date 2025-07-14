import React from "react";
import { Button } from "@/components/ui/button";

interface CtaSectionProps {
  handlePackageSelect: () => void;
}

export const CTASection: React.FC<CtaSectionProps> = ({ handlePackageSelect }) => {
  // Função local para rolar para a seção de pacotes
  const scrollToPackages = () => {
    const packagesSection = document.getElementById("packages");
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-gray-800">
          Ready to Cut the Cord? Choose Your<br />
          <button onClick={scrollToPackages} className="text-blue-600 hover:underline">
           Broadwave Antenna Package
          </button>
          &nbsp;& Start Saving!
        </h2>

        {/* BOTÃO COM ESTILO RESPONSIVO CORRIGIDO */}
        <Button 
          onClick={handlePackageSelect}
          className="w-full sm:w-auto bg-[#ff6b35] hover:bg-[#e25a2a] text-white rounded-md px-8 py-4 text-base md:text-lg font-bold shadow-lg transform transition hover:-translate-y-0.5"
        >
          BUY NOW WITH EXCLUSIVE DISCOUNT
        </Button>
      </div>
    </section>
  );
};