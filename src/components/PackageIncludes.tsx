
import React from "react";
import { Link } from "react-router-dom";

const PackageIncludes: React.FC = () => {
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
  
  return <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-2xl font-bold text-center mb-6"><Link to="/" onClick={(e) => { e.preventDefault(); scrollToSection("packages"); }} className="text-[#4cd1bc] hover:underline">BroadWave TV Antenna</Link> Package Includes</h3>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img src="/lovable-uploads/fd66e41a-b5d6-4ed0-882b-2c240443cc76.png" alt="Broadwave Antenna Package Contents" className="w-full max-w-md" />
        </div>
        <div className="md:w-1/2">
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-[#4cd1bc] font-bold mr-2">✓</span>
              <span>1× HDTV Antenna with 80+ mile range</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4cd1bc] font-bold mr-2">✓</span>
              <span>Signal amplifier with Smart IC chip technology</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4cd1bc] font-bold mr-2">✓</span>
              <span>16.4ft/5m coaxial cable for flexible placement</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4cd1bc] font-bold mr-2">✓</span>
              <span>USB power adapter</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4cd1bc] font-bold mr-2">✓</span>
              <span>Detailed user manual</span>
            </li>
          </ul>
          <div className="mt-6 bg-gray-50 p-4 rounded-lg border-l-4 border-[#4cd1bc]">
            <p className="text-gray-700 font-medium text-sm md:text-base">
              The <Link to="/" onClick={(e) => { e.preventDefault(); scrollToSection("packages"); }} className="text-[#4cd1bc] hover:underline font-bold">Broadwave Antenna</Link> features a <span className="font-bold">sleek design that fits perfectly into any home décor</span>. With its <span className="font-bold">14.5cm/5.7in height and 5.2cm/2.04in base</span>, it's compact yet powerful.
            </p>
          </div>
        </div>
      </div>
    </div>;
};

export default PackageIncludes;
