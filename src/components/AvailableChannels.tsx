
import React from "react";

const AvailableChannels: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="flex flex-col rounded-lg overflow-hidden">
      <div className="relative">
        <img 
          src="/lovable-uploads/5f9a379a-3c93-4042-8708-40512bbb75a8.png" 
          alt="Available TV Channels" 
          className="w-full object-cover"
        />
      </div>
      <div className="bg-gray-100 p-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">More Free Local 4K HDTV Channels</h3>
        <p className="text-lg mb-4">Access popular channels like NBC, CBS, ABC, FOX, PBS and many more!</p>
        <div className="flex gap-4 justify-center">
          <button 
            onClick={() => scrollToSection("connections")}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md font-bold transition-colors cursor-pointer"
          >
            1080p FULL HD
          </button>
          <button 
            onClick={() => scrollToSection("connections")}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md font-bold transition-colors cursor-pointer"
          >
            4K ULTRA HD
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailableChannels;
