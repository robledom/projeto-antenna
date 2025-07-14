
import React from "react";
import Faq from "@/components/Faq";

const FAQSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Faq />
      </div>
    </section>
  );
};

export default FAQSection;
