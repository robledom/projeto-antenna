import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  handlePackageSelect: () => void;
}

const Hero: React.FC<HeroProps> = ({ handlePackageSelect }) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 100;
      const elementPosition = section.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative bg-white pt-8 md:py-12">
      <div 
        className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-10 md:hidden"
        // O caminho da imagem foi ALTERADO para um caminho público
        style={{ backgroundImage: `url('/assets/f0223742-2263-4b43-8e92-351490804d2f.png')` }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="bg-red-600 text-white p-3 rounded-lg inline-block mb-6 shadow-md">
              <span className="font-bold">⚡ PROGRESSIVE DISCOUNT: UP TO 70% OFF TODAY ONLY!</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              <button 
                onClick={() => scrollToSection("packages")}
                className="text-blue-600 hover:underline"
              >
                Broadwave Antenna
              </button>
              <br />
              Watch Free HD TV & Save Up To 70%!
            </h1>
            
            <p className="mt-4 text-lg text-gray-600">
              Enjoy Local Channels in HD Without Monthly Bills. Exclusive Limited-Time Offer.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 my-6 text-sm text-blue-800">
              <p><strong>📢 Affiliate Disclosure:</strong> This site contains affiliate links. If you make a purchase through our links, we may receive a commission at no additional cost to you.</p>
            </div>
            
            <div className="pt-2">
              <Button 
                onClick={handlePackageSelect}
                className="w-full sm:w-auto bg-[#ff6b35] hover:bg-[#e25a2a] text-white rounded-md px-8 py-4 text-base md:text-lg font-bold shadow-lg transform transition hover:-translate-y-0.5"
              >
                BUY NOW WITH EXCLUSIVE DISCOUNT
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 mt-6 text-sm text-gray-600">
              <button onClick={() => scrollToSection("benefits")} className="flex items-center hover:text-blue-600 transition-colors"><Check className="h-4 w-4 mr-1.5 text-green-500" />No Monthly Fees</button>
              <button onClick={() => scrollToSection("benefits")} className="flex items-center hover:text-blue-600 transition-colors"><Check className="h-4 w-4 mr-1.5 text-green-500" />100% Legal</button>
              <button onClick={() => scrollToSection("packages")} className="flex items-center hover:text-blue-600 transition-colors"><Check className="h-4 w-4 mr-1.5 text-green-500" />Exclusive Offer Today</button>
              <button onClick={() => scrollToSection("testimonials")} className="flex items-center hover:text-blue-600 transition-colors"><Check className="h-4 w-4 mr-1.5 text-green-500" />100,000+ Customers</button>
              <button onClick={() => scrollToSection("trust")} className="flex items-center hover:text-blue-600 transition-colors"><Check className="h-4 w-4 mr-1.5 text-green-500" />Fast Shipping</button>
              <button onClick={() => scrollToSection("trust")} className="flex items-center hover:text-blue-600 transition-colors"><Check className="h-4 w-4 mr-1.5 text-green-500" />30-Day Guarantee</button>
            </div>
          </div>
          
          <div className="hidden md:flex w-full md:w-1/2 justify-center mt-8 md:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              <img 
                alt="Broadwave Antenna" 
                className="relative z-10" 
                // O caminho da imagem foi ALTERADO aqui também
                src="/assets/f0223742-2263-4b43-8e92-351490804d2f.png" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
