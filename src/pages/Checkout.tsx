
import React from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Checkout: React.FC = () => {
  const [searchParams] = useSearchParams();
  const packageId = searchParams.get('package');
  
  // Package data for display
  const packages = {
    '1': { title: '1x Broadwave Antenna', price: '$39.95', originalPrice: '$79.90' },
    '2': { title: '2x Broadwave Antenna', price: '$71.96', originalPrice: '$159.80' },
    '3': { title: '3x Broadwave Antenna', price: '$89.85', originalPrice: '$239.70' },
    '4': { title: '4x Broadwave Antenna', price: '$103.80', originalPrice: '$319.60' }
  };

  const selectedPackage = packageId ? packages[packageId as keyof typeof packages] : null;

  const handlePackageSelect = (packageId: number) => {
    // Placeholder function for navigation component
    console.log('Package selected:', packageId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation handlePackageSelect={handlePackageSelect} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Página de Checkout</h1>
          
          {selectedPackage ? (
            <Card className="mb-8">
              <CardHeader>
                <h2 className="text-xl font-semibold">Produto Selecionado</h2>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{selectedPackage.title}</h3>
                    <p className="text-gray-600">Preço: {selectedPackage.price}</p>
                    <p className="text-gray-500 line-through text-sm">Original: {selectedPackage.originalPrice}</p>
                  </div>
                  <img 
                    src="/lovable-uploads/4f69f523-7c07-40d6-aafa-5c7565be3fb8.png" 
                    alt="Broadwave Antenna" 
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="mb-8">
              <CardContent className="text-center py-8">
                <p className="text-gray-600">Nenhum produto selecionado</p>
              </CardContent>
            </Card>
          )}

          <div className="text-center">
            <h3 className="text-lg font-medium mb-4">Esta é uma página de teste</h3>
            <p className="text-gray-600 mb-6">
              Todos os links dos pacotes agora direcionam para esta página de checkout para teste.
              Package ID: {packageId || 'Não especificado'}
            </p>
            
            <Button 
              onClick={() => window.history.back()} 
              className="bg-[#4cd1bc] hover:bg-[#3db6a3] text-white"
            >
              Voltar para a página inicial
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Checkout;
