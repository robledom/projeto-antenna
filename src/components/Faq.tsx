
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Will Broadwave Antenna work with my TV?",
    answer: "Yes, Broadwave Antenna is compatible with any TV that has a built-in tuner or an external digital converter box. This includes virtually all TVs manufactured after 2007, when digital tuners became a requirement."
  },
  {
    question: "How do I set up the Broadwave Antenna?",
    answer: "Setup is incredibly simple. Just connect the antenna to your TV's coaxial port, place the antenna in an optimal location (typically near a window), and scan for channels using your TV's menu. The entire process takes less than 5 minutes."
  },
  {
    question: "Is it legal?",
    answer: "Absolutely! Broadcast TV signals are free by law. The Broadwave Antenna simply receives these already free over-the-air signals that networks broadcast. There's nothing illegal about using an antenna to watch TV."
  },
  {
    question: "Does Broadwave Antenna require a subscription or monthly fees?",
    answer: "No, there are absolutely no subscriptions or monthly fees. Once you purchase the Broadwave Antenna, you get completely free access to all available over-the-air channels in your area forever."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is processed, you'll receive a confirmation email with tracking information. You can use this tracking number to monitor your shipment on our website or through the carrier's tracking system."
  },
  {
    question: "What channels can I receive with the Broadwave Antenna?",
    answer: "The channels you can receive depend on your location and distance from broadcast towers. Typically, you'll get major networks like NBC, CBS, ABC, FOX, PBS, and many more. You can check available channels in your area by visiting websites like antennaweb.org or tvfool.com."
  },
  {
    question: "What is the range of the Broadwave Antenna?",
    answer: "The Broadwave Antenna has an impressive range of up to 80+ miles from broadcast towers, allowing you to pick up signals from a significant distance. However, actual reception may vary based on terrain, obstructions, and your specific location."
  }
];

const Faq: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
