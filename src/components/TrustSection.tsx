
import React from "react";
import TrustBadges from "@/components/TrustBadges";

const TrustSection: React.FC = () => {
  // This URL would be replaced with the actual affiliate link
  const affiliateLink = "#"; // Replace with: [SEU LINK DE AFILIADO PARA O CHECKOUT AQUI]
  
  return (
    <section id="trust" className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 leading-tight">Trust & Security</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 md:mb-16 text-lg sm:text-xl leading-relaxed">
          Join thousands of satisfied customers who trust <a href={affiliateLink} className="text-[#4cd1bc] hover:underline font-medium">BroadWave Antenna</a> for their TV antenna needs. 
          We're committed to providing you with a secure shopping experience and top-quality products.
        </p>
        <TrustBadges />
      </div>
    </section>
  );
};

export default TrustSection;
