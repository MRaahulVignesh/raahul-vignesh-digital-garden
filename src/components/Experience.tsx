
import React from 'react';
import Container from './Container';
import { Briefcase, Calendar, Building, MapPin } from 'lucide-react';

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "IBM",
    position: "Software Developer",
    duration: "Jan 2022 - Present",
    location: "San Francisco, CA",
    description: [
      "Lead development of a Retrieval-Augmented Generation (RAG) system for enterprise document search and QA",
      "Built a centralized authorization service supporting scoped access across multiple APIs",
      "Architected and deployed LLM-powered systems with focus on scalability and production readiness"
    ]
  },
  {
    company: "Startup Name",
    position: "Founding Engineer",
    duration: "Apr 2021 - Dec 2021",
    location: "Remote",
    description: [
      "First engineer at seed-stage startup, taking MVP from architecture to launch in 4 months",
      "Designed and implemented core backend infrastructure using Node.js and PostgreSQL",
      "Set up containerization with Docker and deployment pipelines on Kubernetes"
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 border-t border-gray-100">
      <Container>
        <h2 className="text-2xl font-semibold mb-8">Experience</h2>
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/3">
                  <h3 className="font-medium text-lg">{exp.position}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mt-1">
                    <Building className="h-4 w-4" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mt-1">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mt-1">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <ul className="space-y-2 list-disc list-inside text-gray-700">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {index < experiences.length - 1 && (
                <div className="absolute left-0 top-full mt-5 h-5 border-l-2 border-dashed border-gray-200" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
