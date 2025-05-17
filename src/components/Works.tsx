
import React from 'react';
import Container from './Container';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    title: "Centralized Auth Service",
    description: "A lightweight service that issues scoped access tokens for API authentication across multiple microservices. Focused on simplicity, security, and stateless validation.",
    techStack: ["Python", "JWT", "FastAPI", "Docker"]
  },
  {
    title: "Retrieval-Augmented Generation System",
    description: "Designed and deployed a multi-stage RAG pipeline to power enterprise document retrieval and question-answering systems.",
    techStack: ["Python", "LangChain", "FastAPI", "Vector DBs"]
  },
  {
    title: "Startup MVP",
    description: "Built the MVP for a seed-stage startup as the first engineer — from scratch to production in 4 months.",
    techStack: ["Node.js", "PostgreSQL", "Docker", "Kubernetes"]
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-6 hover:shadow-sm transition duration-200 hover:border-accent-light">
      <h3 className="text-lg font-semibold mb-3 text-accent-dark">{project.title}</h3>
      <p className="text-gray-700 mb-4 text-sm">{project.description}</p>
      
      <div className="mb-4">
        <h4 className="text-xs uppercase tracking-wide text-gray-500 mb-2">Tech</h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span key={index} className="inline-flex text-xs bg-accent-light text-accent-dark px-2 py-1 rounded">
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
        <h2 className="text-2xl font-semibold mb-8">Works</h2>
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
