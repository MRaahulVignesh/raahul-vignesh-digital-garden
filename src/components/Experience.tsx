
import React from 'react';
import Container from './Container';
import { MapPin, Calendar } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "IBM",
    position: "Software Developer",
    duration: "Jan 2022 - Present",
    location: "San Francisco, CA",
  },
  {
    company: "Startup Name",
    position: "Founding Engineer",
    duration: "Apr 2021 - Dec 2021",
    location: "Remote",
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 border-t border-black">
      <Container>
        <h2 className="text-2xl font-semibold mb-8">Experience</h2>
        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {index !== 0 && (
                <div className="absolute top-0 left-0 h-full">
                  <div className="w-px h-full bg-gray-300"></div>
                </div>
              )}
              <div className="relative grid grid-cols-1 md:grid-cols-8 gap-6">
                <div className="md:col-span-5 md:order-2">
                  <h3 className="text-xl font-medium text-accent">{exp.position}</h3>
                  <h4 className="text-lg font-medium mt-1">{exp.company}</h4>
                  <div className="mt-4 flex flex-col md:flex-row md:items-center text-gray-700 gap-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-highlight" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="hidden md:block w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-highlight" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3 md:order-1">
                  {/* This space can be used for additional info like company logo, accomplishments, etc */}
                </div>
              </div>
              {index !== experiences.length - 1 && (
                <Separator className="my-6 bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
