
import React from 'react';
import Container from '../components/Container';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  fullDescription?: string;
}

const projects: Project[] = [
  {
    title: "Centralized Auth Service",
    description: "A lightweight service that issues scoped access tokens for API authentication across multiple microservices. Focused on simplicity, security, and stateless validation.",
    fullDescription: "This service acts as the central authority for authentication across our microservice ecosystem. It implements JWT-based access tokens with configurable scopes, allowing fine-grained control over API access. The system includes token refresh mechanisms, role-based permissions, and integrates with multiple identity providers.",
    techStack: ["Python", "JWT", "FastAPI", "Docker"],
    image: "/placeholder.svg"
  },
  {
    title: "Retrieval-Augmented Generation System",
    description: "Designed and deployed a multi-stage RAG pipeline to power enterprise document retrieval and question-answering systems.",
    fullDescription: "Built a production-grade RAG system that enhances LLM responses with enterprise-specific knowledge. The pipeline includes document chunking, embeddings generation, vector storage, and an optimized retrieval strategy. Implemented custom ranking algorithms to improve response relevance and accuracy. Deployed on Kubernetes with auto-scaling capabilities.",
    techStack: ["Python", "LangChain", "FastAPI", "Vector DBs"],
    image: "/placeholder.svg"
  },
  {
    title: "Startup MVP",
    description: "Built the MVP for a seed-stage startup as the first engineer — from scratch to production in 4 months.",
    fullDescription: "As the founding engineer, I architected and implemented the entire backend infrastructure for this early-stage startup. Created a scalable API layer, database schema, authentication system, and core business logic. Collaborated closely with frontend developers to ensure seamless integration. The MVP successfully secured the next round of funding.",
    techStack: ["Node.js", "PostgreSQL", "Docker", "Kubernetes"],
    image: "/placeholder.svg"
  },
  {
    title: "AI-Enhanced Customer Support Dashboard",
    description: "Developed a dashboard that uses AI to analyze customer support tickets and provide actionable insights.",
    fullDescription: "Created an intelligent system that processes support tickets in real-time, categorizes issues, detects sentiment, and identifies recurring problems. The dashboard presents these insights through visualizations, helping support teams prioritize critical issues and recognize patterns. Reduced average resolution time by 35%.",
    techStack: ["React", "Python", "TensorFlow", "ElasticSearch"],
    image: "/placeholder.svg"
  },
  {
    title: "Distributed Task Scheduler",
    description: "Built a fault-tolerant distributed task scheduling system for handling periodic and one-time jobs.",
    fullDescription: "Designed and implemented a distributed scheduler that ensures reliable execution of tasks across multiple worker nodes. The system handles task prioritization, retries, dead-letter queues, and distributed locking. Supports both cron-style recurring jobs and one-time tasks with configurable delays and timeouts.",
    techStack: ["Go", "Redis", "gRPC", "Prometheus"],
    image: "/placeholder.svg"
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300"
                >
                  {project.image && (
                    <div className="h-48 bg-gray-100 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-accent-dark">{project.title}</h3>
                    <p className="text-gray-700 mb-4">{project.fullDescription || project.description}</p>
                    
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
