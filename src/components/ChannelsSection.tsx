
import React from "react";
import AvailableChannels from "@/components/AvailableChannels";

const ChannelsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AvailableChannels />
      </div>
    </section>
  );
};

export default ChannelsSection;
