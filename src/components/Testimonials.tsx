
import React from "react";
import { Star } from "lucide-react";
import { 
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Lisa T.",
    location: "Rural area",
    text: "I live a little outside the city, but I was amazed at how well this antenna works! Way better than my old antenna. Even during storms, the picture stays sharp, and I don't lose channels.",
    rating: 5,
    verified: true,
    image: "/lovable-uploads/4dcda905-1bab-4481-a0a0-fc35173d514c.png",
    alt: "Person holding TV antenna"
  },
  {
    id: 2,
    name: "Matt D.",
    location: "Urban area",
    text: "I gave Broadwave a shot, and I'm receiving all my local channels in crystal clear HD, plus a few extras I didn't even know existed. Setup took less than five minutes, and now I'm watching TV for free. Wish I had done this sooner!",
    rating: 5,
    verified: true,
    image: "/lovable-uploads/8d92d193-9d66-4aa4-9d85-b2a71eba67e0.png",
    alt: "Live sports broadcast on TV"
  },
  {
    id: 3,
    name: "Martha",
    location: "Suburban home",
    text: "I figured this would be a decent backup for days when my cable goes down. This turned out to be so much more! The signal is solid, the HD picture is perfect, and I don't have to deal with buffering or lag. Super happy with this purchase!",
    rating: 5,
    verified: true,
    image: "/lovable-uploads/7d30352f-2706-4181-b191-a691619d472d.png",
    alt: "Antenna and connection cables"
  },
  {
    id: 4,
    name: "Robert K.",
    location: "Apartment dweller",
    text: "I was skeptical about antennas since I live in an apartment, but the Broadwave surprised me. I placed it near my window and picked up 42 channels! The picture quality is excellent, and I'm saving $80 a month by cutting cable!",
    rating: 5,
    verified: true,
    image: "/lovable-uploads/107c0177-c156-4bc9-aef5-6109fd753567.png",
    alt: "TV setup in apartment"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id} className="bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
          <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
            <img 
              src={testimonial.image} 
              alt={testimonial.alt} 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/7d7d7d?text=Customer+Image";
              }}
            />
          </div>
          <CardContent className="pt-6">
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 md:h-5 md:w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <div className="text-sm font-bold text-[#4cd1bc] mb-2">
              Good for {testimonial.location}
            </div>
            <p className="text-gray-700 italic text-sm md:text-base">{testimonial.text}</p>
          </CardContent>
          <CardFooter className="pt-2 pb-6 flex items-center">
            <div className="text-sm font-semibold">{testimonial.name}</div>
            {testimonial.verified && (
              <div className="ml-2 flex items-center text-xs text-green-600">
                <span className="inline-block w-2 h-2 bg-green-600 rounded-full mr-1"></span>
                Verified Buyer
              </div>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Testimonials;
