import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-primary text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn font-inter">
          Inspiring Audiences,<br />Transforming Lives
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-speaker-light max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          Professional speaker helping organizations and individuals reach their full potential
        </p>
        <Button 
          size="lg" 
          className="bg-speaker-secondary text-white hover:bg-speaker-accent transition-all duration-300 animate-fadeIn"
          style={{ animationDelay: "0.4s" }}
        >
          Book a Speech <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};