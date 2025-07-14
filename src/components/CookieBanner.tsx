
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already seen the banner
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleLearnMore = () => {
    localStorage.setItem('cookieConsent', 'viewed');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50 border-t-2 border-[#4cd1bc]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm leading-relaxed">
              This website uses cookies to ensure you get the best experience on our website. By continuing to use our site, you agree to our use of cookies. For more details, please review our{' '}
              <Link 
                to="/privacy-policy" 
                className="text-[#4cd1bc] hover:underline font-medium"
                onClick={handleLearnMore}
              >
                Privacy Policy
              </Link>
              {' '}and{' '}
              <Link 
                to="/privacy-policy" 
                className="text-[#4cd1bc] hover:underline font-medium"
                onClick={handleLearnMore}
              >
                Cookie Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Button
              onClick={handleLearnMore}
              variant="outline"
              size="sm"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 w-full sm:w-auto"
            >
              Learn More
            </Button>
            <Button
              onClick={handleAccept}
              size="sm"
              className="bg-[#4cd1bc] hover:bg-[#3db6a3] text-white border-none w-full sm:w-auto"
            >
              Got It
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
