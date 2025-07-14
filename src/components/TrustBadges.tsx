import React from "react";
import { Shield, CreditCard, Award, Clock } from "lucide-react";
const TrustBadges: React.FC = () => {
  return <div className="flex flex-col items-center space-y-10">
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
        
        
        
        
      </div>
      
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-14">
        <div className="flex flex-col items-center p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
          <Shield className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 mb-3 text-blue-600" />
          <span className="text-sm sm:text-base font-medium text-gray-800">Secure Checkout</span>
          <p className="text-xs text-gray-600 text-center mt-1 max-w-[140px]">Your payment information is always protected</p>
        </div>
        <div className="flex flex-col items-center p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
          <Award className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 mb-3 text-green-600" />
          <span className="text-sm sm:text-base font-medium text-gray-800">30-Day Guarantee</span>
          <p className="text-xs text-gray-600 text-center mt-1 max-w-[140px]">Try our product risk-free for 30 days</p>
        </div>
        <div className="flex flex-col items-center p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
          <Clock className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 mb-3 text-orange-600" />
          <span className="text-sm sm:text-base font-medium text-gray-800">Fast Shipping</span>
          <p className="text-xs text-gray-600 text-center mt-1 max-w-[140px]">Orders ship within 24-48 hours</p>
        </div>
        <div className="flex flex-col items-center p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
          <CreditCard className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 mb-3 text-purple-600" />
          <span className="text-sm sm:text-base font-medium text-gray-800">Multiple Payment Options</span>
          <p className="text-xs text-gray-600 text-center mt-1 max-w-[140px]">Credit card, PayPal, and more</p>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-gray-200 w-full max-w-3xl mx-auto">
        <p className="text-center text-sm text-gray-500">
          "BroadWave Antenna has transformed how we watch TV. The quality is outstanding, and their customer service is exceptional!"
        </p>
        <div className="flex justify-center mt-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>)}
          </div>
        </div>
        <p className="text-center text-xs mt-2 font-medium">Featured Customer Review</p>
      </div>
    </div>;
};
export default TrustBadges;