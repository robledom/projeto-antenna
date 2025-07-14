
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { DollarSign } from "lucide-react";

interface AntennaPackage {
  id: number;
  title: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  discount: string;
  savings: string; 
  originalPrice: number;
  popular: boolean;
  image: string;
  affiliateLink?: string;
}

interface AntennaPackagesProps {
  selectedPackage: number | null;
  setSelectedPackage: (id: number) => void;
}

const packages: AntennaPackage[] = [
  {
    id: 1,
    title: "1x Broadwave Antenna",
    quantity: 1,
    unitPrice: 39.95,
    totalPrice: 39.95,
    originalPrice: 79.90,
    discount: "50% OFF",
    savings: "Save $39.95",
    popular: false,
    image: "/lovable-uploads/4f69f523-7c07-40d6-aafa-5c7565be3fb8.png",
    affiliateLink: "https://www.clickrtrckr.com/TSBJKN/461NQ2S/?uid=5976"
  },
  {
    id: 2,
    title: "2x Broadwave Antenna",
    quantity: 2,
    unitPrice: 35.98,
    totalPrice: 71.96,
    originalPrice: 159.80,
    discount: "60% OFF",
    savings: "Save $87.84",
    popular: false,
    image: "/lovable-uploads/4f69f523-7c07-40d6-aafa-5c7565be3fb8.png",
    affiliateLink: "https://www.clickrtrckr.com/TSBJKN/461NQ2S/?uid=5976"
  },
  {
    id: 3,
    title: "3x Broadwave Antenna",
    quantity: 3,
    unitPrice: 29.95,
    totalPrice: 89.85,
    originalPrice: 239.70,
    discount: "65% OFF",
    savings: "Save $149.85",
    popular: true,
    image: "/lovable-uploads/4f69f523-7c07-40d6-aafa-5c7565be3fb8.png",
    affiliateLink: "https://www.clickrtrckr.com/TSBJKN/461NQ2S/?uid=5976"
  },
  {
    id: 4,
    title: "4x Broadwave Antenna",
    quantity: 4,
    unitPrice: 25.95,
    totalPrice: 103.80,
    originalPrice: 319.60,
    discount: "70% OFF",
    savings: "Save $215.80",
    popular: false,
    image: "/lovable-uploads/4f69f523-7c07-40d6-aafa-5c7565be3fb8.png",
    affiliateLink: "https://www.clickrtrckr.com/TSBJKN/461NQ2S/?uid=5976"
  }
];

const AntennaPackages: React.FC<AntennaPackagesProps> = ({ selectedPackage, setSelectedPackage }) => {
  const handleSelectPackage = (packageId: number) => {
    setSelectedPackage(packageId);
    
    // Redirect to affiliate link
    const selectedPkg = packages.find(pkg => pkg.id === packageId);
    if (selectedPkg && selectedPkg.affiliateLink) {
      window.open(selectedPkg.affiliateLink, '_blank', 'noopener,noreferrer');
    }
  };

  const handleDiscountClick = (packageId: number) => {
    const selectedPkg = packages.find(pkg => pkg.id === packageId);
    if (selectedPkg && selectedPkg.affiliateLink) {
      window.open(selectedPkg.affiliateLink, '_blank', 'noopener,noreferrer');
    }
  };

  const getCardBgColor = (pkg: AntennaPackage) => {
    if (pkg.id === 2 || pkg.id === 4) {
      return 'bg-blue-100 border-blue-200';
    }
    return 'bg-green-100 border-green-200';
  };

  const getDiscountColor = (pkg: AntennaPackage) => {
    if (pkg.id === 2 || pkg.id === 4) {
      return 'bg-blue-700 text-white';
    }
    return 'bg-green-700 text-white';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {packages.map((pkg) => (
        <Card 
          key={pkg.id} 
          className={`overflow-hidden transition-all duration-300 border-2 ${getCardBgColor(pkg)} border-gray-200 ${
            selectedPackage === pkg.id 
              ? 'ring-4 ring-[#4cd1bc] shadow-lg' 
              : 'hover:shadow-md hover:ring-2 hover:ring-[#4cd1bc] hover:border-[#4cd1bc]'
          } ${pkg.popular ? 'relative' : ''}`}
        >
          {pkg.popular && (
            <div className="absolute top-0 right-0 bg-[#ff6b35] text-white py-1 px-4 text-sm font-bold z-10">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  handleDiscountClick(pkg.id);
                }}
                className="hover:underline cursor-pointer"
              >
                MOST POPULAR
              </button>
            </div>
          )}
          
          <CardHeader className="bg-white p-4 text-center border-b border-gray-200">
            <button 
              onClick={() => handleDiscountClick(pkg.id)}
              className="text-lg font-bold hover:text-[#4cd1bc] transition-colors cursor-pointer"
            >
              {pkg.title}
            </button>
          </CardHeader>
          
          <CardContent className="p-6 text-center space-y-4">
            <button 
              onClick={() => handleDiscountClick(pkg.id)}
              className="block aspect-square w-32 mx-auto cursor-pointer"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-contain"
              />
            </button>
            
            <div className="space-y-3">
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${getDiscountColor(pkg)}`}>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    handleDiscountClick(pkg.id);
                  }}
                  className="hover:underline cursor-pointer"
                >
                  {pkg.discount}
                </button>
              </div>
              
              <div className="text-green-700 font-bold text-lg">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    handleDiscountClick(pkg.id);
                  }}
                  className="hover:underline cursor-pointer"
                >
                  {pkg.savings}
                </button>
              </div>
              
              <div className="text-4xl font-extrabold flex items-center justify-center">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    handleDiscountClick(pkg.id);
                  }}
                  className="flex items-center hover:text-[#4cd1bc] transition-colors cursor-pointer"
                >
                  <DollarSign className="h-8 w-8" />
                  <span className="font-black text-5xl">{pkg.unitPrice}</span>
                  <span className="text-lg text-gray-500 font-normal ml-1"> / each</span>
                </button>
              </div>
              
              <div className="flex flex-col space-y-1">
                <span className="text-gray-700 text-xl font-bold">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      handleDiscountClick(pkg.id);
                    }}
                    className="hover:text-[#4cd1bc] transition-colors cursor-pointer"
                  >
                    Total: ${pkg.totalPrice.toFixed(2)}
                  </button>
                </span>
                <span className="text-gray-500 line-through text-base">
                  Original: ${pkg.originalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="p-4 pt-0">
            <Button 
              onClick={(e) => {
                e.preventDefault();
                handleSelectPackage(pkg.id);
              }}
              className={`w-full ${
                pkg.popular 
                  ? 'bg-[#ff6b35] hover:bg-[#e25a2a]' 
                  : 'bg-[#4cd1bc] hover:bg-[#3db6a3]'
              } text-white font-bold text-base py-3`}
            >
              BUY {pkg.quantity} {pkg.quantity > 1 ? 'ANTENNAS' : 'ANTENNA'} &rarr;
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default AntennaPackages;
