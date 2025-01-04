import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Calendar, MessageSquare } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-speaker-navy mb-12 text-center font-inter">
          Let's Connect
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Mail className="h-8 w-8 mx-auto mb-4 text-speaker-navy" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-speaker-gray mb-4">Get in touch for inquiries</p>
            <Button variant="outline" className="w-full">
              Send Email
            </Button>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Calendar className="h-8 w-8 mx-auto mb-4 text-speaker-navy" />
            <h3 className="font-semibold mb-2">Schedule</h3>
            <p className="text-speaker-gray mb-4">Book a consultation</p>
            <Button variant="outline" className="w-full">
              Check Availability
            </Button>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <MessageSquare className="h-8 w-8 mx-auto mb-4 text-speaker-navy" />
            <h3 className="font-semibold mb-2">Speaking Topics</h3>
            <p className="text-speaker-gray mb-4">View presentation topics</p>
            <Button variant="outline" className="w-full">
              Learn More
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};