
import React from 'react';
import Container from './Container';
import { MapPin, Calendar } from 'lucide-react';

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
    <section id="experience" className="py-16 border-t border-gray-100">
      <Container>
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="p-5 border-l-4 border-accent bg-gray-50 hover:bg-gray-100 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-medium text-accent mb-1">{exp.position}</h3>
                  <p className="text-lg font-medium">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <div className="flex items-center text-gray-600 mb-1">
                    <Calendar className="h-4 w-4 mr-2 text-highlight" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-highlight" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
