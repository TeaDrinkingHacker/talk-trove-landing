import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "One of the most inspiring speakers I've ever heard. Their message resonated deeply with our entire organization.",
    author: "Sarah Johnson",
    role: "CEO, Tech Innovations",
  },
  {
    text: "Transformed our leadership team's perspective on change management. The impact was immediate and lasting.",
    author: "Michael Chen",
    role: "Director of Operations, Global Corp",
  },
  {
    text: "Engaging, insightful, and truly transformative. Our team is still talking about the presentation months later.",
    author: "Emily Rodriguez",
    role: "HR Manager, Future Brands",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-speaker-light" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-speaker-navy mb-12 text-center font-inter">
          What People Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 bg-white hover:shadow-lg transition-shadow duration-300 border-2 border-speaker-light hover:border-speaker-accent"
            >
              <Quote className="h-8 w-8 text-speaker-accent mb-4" />
              <p className="text-speaker-gray mb-4">{testimonial.text}</p>
              <div>
                <p className="font-semibold text-speaker-navy">{testimonial.author}</p>
                <p className="text-sm text-speaker-gray">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};