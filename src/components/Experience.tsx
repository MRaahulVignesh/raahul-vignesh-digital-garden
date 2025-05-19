
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
        <h2 className="text-2xl font-semibold mb-8">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="p-6 border border-gray-100 rounded-lg hover:border-accent hover:shadow-sm transition-all duration-300"
            >
              <h3 className="text-xl font-medium text-accent mb-2">{exp.position}</h3>
              <p className="text-lg font-medium mb-3">{exp.company}</p>
              
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar className="h-4 w-4 mr-2 text-highlight" />
                <span>{exp.duration}</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-2 text-highlight" />
                <span>{exp.location}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
