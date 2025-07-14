
import React from "react";
import { Check, SignalHigh, Tv, Zap, DollarSign, Layout } from "lucide-react";

const benefits = [
  {
    icon: <Tv className="h-12 w-12 text-[#4cd1bc]" />,
    title: "Free HD Channels",
    description: "Access over 100 local channels with no monthly bills."
  },
  {
    icon: <Zap className="h-12 w-12 text-[#4cd1bc]" />,
    title: "Easy Setup",
    description: "Connect in minutes with no technical knowledge required."
  },
  {
    icon: <SignalHigh className="h-12 w-12 text-[#4cd1bc]" />,
    title: "Powerful Signal",
    description: "80+ mile range for crystal-clear picture quality."
  },
  {
    icon: <DollarSign className="h-12 w-12 text-[#4cd1bc]" />,
    title: "No Monthly Fees",
    description: "Say goodbye to cable bills forever."
  },
  {
    icon: <Layout className="h-12 w-12 text-[#4cd1bc]" />,
    title: "Sleek Design",
    description: "Modern, discrete design that fits perfectly in your home."
  },
  {
    icon: <Check className="h-12 w-12 text-[#4cd1bc]" />,
    title: "100% Legal",
    description: "Receive broadcast signals that are free by law."
  }
];

const Benefits: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {benefits.map((benefit, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
