import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-20 bg-speaker-light" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-speaker-navy mb-12 text-center font-inter">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-speaker-gray">
              With over 15 years of experience in public speaking, I've helped thousands of individuals 
              and organizations achieve breakthrough results through powerful storytelling and actionable insights.
            </p>
            <p className="text-lg text-speaker-gray">
              My mission is to inspire and empower audiences to reach their full potential, 
              combining deep expertise with engaging delivery to create lasting impact.
            </p>
          </div>
          <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4 text-speaker-navy">Expertise Areas</h3>
            <ul className="space-y-3">
              {["Leadership Development", "Personal Growth", "Team Building", "Innovation", "Change Management"].map((area) => (
                <li key={area} className="flex items-center text-speaker-gray">
                  <span className="w-2 h-2 bg-speaker-accent rounded-full mr-3"></span>
                  {area}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};