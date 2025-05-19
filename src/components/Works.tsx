
import React from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  description: string[];  // Changed to array for bullet points
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    title: "Centralized Auth Service",
    description: [
      "Lightweight service issuing scoped access tokens for API authentication",
      "Implemented JWT-based authentication with configurable scopes",
      "Designed for stateless validation across multiple microservices"
    ],
    techStack: ["Python", "JWT", "FastAPI", "Docker"]
  },
  {
    title: "Retrieval-Augmented Generation System",
    description: [
      "Built multi-stage RAG pipeline for enterprise document retrieval",
      "Implemented custom ranking algorithms to improve response relevance",
      "Deployed on Kubernetes with auto-scaling capabilities"
    ],
    techStack: ["Python", "LangChain", "FastAPI", "Vector DBs"]
  },
  {
    title: "Startup MVP",
    description: [
      "Built MVP as the first engineer — from scratch to production in 4 months",
      "Architected and implemented the entire backend infrastructure",
      "Created scalable API layer and core business logic"
    ],
    techStack: ["Node.js", "PostgreSQL", "Docker", "Kubernetes"]
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-6 hover:shadow-sm transition duration-200 hover:border-accent-light">
      <h3 className="text-lg font-semibold mb-3 text-accent-dark">{project.title}</h3>
      
      <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
        {project.description.map((point, idx) => (
          <li key={idx} className="text-sm">{point}</li>
        ))}
      </ul>
      
      <div className="mb-4">
        <h4 className="text-xs uppercase tracking-wide text-gray-500 mb-2">Tech</h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span key={index} className="inline-flex text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {(project.githubUrl || project.demoUrl) && (
        <div className="flex gap-3 mt-auto pt-2">
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              className="text-xs text-highlight hover:text-highlight-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub →
            </a>
          )}
          {project.demoUrl && (
            <a 
              href={project.demoUrl}
              className="text-xs text-highlight hover:text-highlight-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo →
            </a>
          )}
        </div>
      )}
    </div>
  );
};

const Works: React.FC = () => {
  return (
    <section id="works" className="py-16 border-t border-gray-100">
      <Container>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Works</h2>
          <Link 
            to="/works" 
            className="inline-flex items-center text-highlight hover:text-highlight-dark transition-colors"
          >
            View all works
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Works;
