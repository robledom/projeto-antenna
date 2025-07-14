
import React from "react";
import { Link } from "react-router-dom";

const ConnectionTypes: React.FC = () => {
  // This URL would be replaced with the actual affiliate link
  const affiliateLink = "#"; // Replace with: [SEU LINK DE AFILIADO PARA O CHECKOUT AQUI]
  
  // Add scroll function for package section links
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  const handlePackageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection("packages");
  };
  
  return (
    <div id="connections" className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
      <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">Easy Connection</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
        <div className="flex flex-col">
          <div className="mb-3 sm:mb-4">
            <img alt="Smart TV Connection" className="w-full rounded-lg" src="/lovable-uploads/3b9bb219-5fca-4401-a913-65aa61201ae5.jpg" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Smart TV</h4>
            <p className="text-sm sm:text-base text-gray-600">Simply connect the <Link to="/" onClick={handlePackageClick} className="text-[#4cd1bc] hover:underline">Broadwave Antenna</Link> directly to your Smart TV with built-in HDTV tuner.</p>
          </div>
        </div>
        
        <div className="flex flex-col">
          <div className="mb-3 sm:mb-4">
            <img src="/lovable-uploads/250eea89-2e91-4d96-b8e2-6d533871d975.png" alt="TV Without HD Tuner Connection" className="w-full rounded-lg" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">TV Without HD Tuner</h4>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              For older TVs without an HDTV tuner, connect using a digital converter box.
              <span className="block mt-2 text-red-700 font-bold text-lg">
                ⚠️ <span className="text-xl">Digital Converter Box NOT PROVIDED WITH ANTENNA</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 sm:mt-8">
        <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
          <div className="text-center mb-4">
            <h5 className="text-lg font-bold text-orange-800 mb-2">🔍 IMPORTANT COMPATIBILITY CHECK</h5>
          </div>
          <div className="space-y-3">
            <p className="text-orange-800 font-bold text-base text-center">
              Please make sure your TV has an <span className="underline">HDTV tuner</span> built-in.
            </p>
            <p className="text-gray-800 text-center">
              If your TV doesn't have an HDTV tuner, you'll need to purchase a Digital Converter Box separately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionTypes;
