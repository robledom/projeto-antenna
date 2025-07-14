
import React from "react";
import Testimonials from "@/components/Testimonials";
import { Link } from "react-router-dom";

const TestimonialsSection: React.FC = () => {
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
  
  return (
    <section id="testimonials" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 leading-tight">CUSTOMER TESTIMONIALS</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl text-center mb-12 md:mb-16 leading-relaxed">What <Link 
          to="/" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("packages");
          }}
          className="text-[#4cd1bc] hover:underline font-medium"
        >BroadWave Antenna</Link> Owners Say</h3>
        <Testimonials />
      </div>
    </section>
  );
};

export default TestimonialsSection;
