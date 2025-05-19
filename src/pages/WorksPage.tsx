
import React from 'react';
import Container from '../components/Container';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  title: string;
  description: string[];
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
      "Designed for stateless validation across multiple microservices",
      "Supports multiple identity providers with token refresh mechanisms",
      "Includes role-based permissions system for fine-grained access control"
    ],
    techStack: ["Python", "JWT", "FastAPI", "Docker"]
  },
  {
    title: "Retrieval-Augmented Generation System",
    description: [
      "Built multi-stage RAG pipeline for enterprise document retrieval",
      "Implemented custom ranking algorithms to improve response relevance",
      "Deployed on Kubernetes with auto-scaling capabilities",
      "Integrated with enterprise knowledge bases for enhanced responses",
      "Reduced inference latency by 40% with optimized retrieval strategy"
    ],
    techStack: ["Python", "LangChain", "FastAPI", "Vector DBs"]
  },
  {
    title: "Startup MVP",
    description: [
      "Built MVP as the first engineer — from scratch to production in 4 months",
      "Architected and implemented the entire backend infrastructure",
      "Created scalable API layer and core business logic",
      "Led integration with payment processors and third-party APIs",
      "Implemented robust monitoring and alerting system"
    ],
    techStack: ["Node.js", "PostgreSQL", "Docker", "Kubernetes"]
  },
  {
    title: "AI-Enhanced Customer Support Dashboard",
    description: [
      "Developed real-time dashboard that analyzes customer support tickets",
      "Implemented sentiment analysis and issue categorization",
      "Created visualizations to identify recurring problems",
      "Reduced average resolution time by 35%",
      "Built automated priority routing system based on urgency"
    ],
    techStack: ["React", "Python", "TensorFlow", "ElasticSearch"]
  },
  {
    title: "Distributed Task Scheduler",
    description: [
      "Built fault-tolerant distributed task scheduling system",
      "Implemented priority-based queuing system with deadlines",
      "Designed distributed locking mechanism for critical sections",
      "Added support for both cron-style recurring and one-time tasks",
      "Created comprehensive monitoring and retry mechanism"
    ],
    techStack: ["Go", "Redis", "gRPC", "Prometheus"]
  }
];

const WorksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 bg-white border-b border-gray-100 shadow-sm z-10">
        <Container>
          <div className="py-4">
            <Link to="/" className="inline-flex items-center text-gray-700 hover:text-accent transition-colors">
              <ArrowLeft size={18} className="mr-2" />
              Back to Home
            </Link>
          </div>
        </Container>
      </header>
      
      <main>
        <section className="py-12">
          <Container>
            <h1 className="text-3xl font-bold mb-2">My Works</h1>
            <p className="text-gray-600 mb-8">A collection of projects I've worked on over the years.</p>
            
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 p-6"
                >
                  <h3 className="text-xl font-semibold mb-4 text-accent-dark">{project.title}</h3>
                  
                  <ul className="list-disc pl-5 mb-5 text-gray-700 space-y-2">
                    {project.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                  
                  <div className="mb-4">
                    <h4 className="text-xs uppercase tracking-wide text-gray-500 mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="inline-flex text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
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
                          className="text-sm text-highlight hover:text-highlight-dark transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub →
                        </a>
                      )}
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl}
                          className="text-sm text-highlight hover:text-highlight-dark transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Demo →
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default WorksPage;
