import React from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

interface NavigationProps {
  handlePackageSelect?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ handlePackageSelect }) => {
  const navigate = useNavigate();

  const navigateToHomeAndScroll = (sectionId?: string) => {
    navigate("/");
    setTimeout(() => {
      if (sectionId) {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link to="/" onClick={() => navigateToHomeAndScroll()} className="hover:opacity-80 transition-opacity duration-200">
          <img 
            alt="Broadwave Antenna" 
            className="h-8 md:h-10 cursor-pointer" // Tamanho responsivo
            src="/assets/09ff3de9-a35b-4eb9-81ed-32c90613a37b.png" 
          />
        </Link>
        <Button 
          onClick={handlePackageSelect}
          className="bg-[#4cd1bc] hover:bg-[#3db6a3] text-white text-xs sm:text-sm font-bold px-4 py-2 md:px-6 rounded-md transition-colors duration-200"
        >
          Select package
        </Button>
      </div>
    </header>
  );
};

export default Navigation;
