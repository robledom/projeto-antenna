
import React from "react";

const InstallationSteps: React.FC = () => {
  const steps = [
    {
      title: "Step 1:",
      description: "Connect the antenna to your TV/HDTV or Digital Converter Box.",
    },
    {
      title: "Step 2:",
      description: "Position the antenna near a window for optimal reception.",
    },
    {
      title: "Step 3:",
      description: "Scan for channels using your TV's menu settings.",
    }
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="mb-10 w-full max-w-4xl rounded-3xl overflow-hidden bg-white shadow-md">
        <img 
          src="/lovable-uploads/e9362a00-ba25-48b4-b3f0-40c227ece722.png" 
          alt="Broadwave Antenna Installation Steps" 
          className="w-full object-contain"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold text-[#0EA5E9] mb-1">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstallationSteps;
