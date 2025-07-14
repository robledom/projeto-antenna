
import React from "react";
import ConnectionTypes from "@/components/ConnectionTypes";

const ConnectionsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Works With Any TV</h2>
        <ConnectionTypes />
      </div>
    </section>
  );
};

export default ConnectionsSection;
