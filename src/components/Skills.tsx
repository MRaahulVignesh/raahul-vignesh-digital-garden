
import React from 'react';
import Container from './Container';
import { Database, Code, Terminal, Cloud, Cpu, Laptop, Server } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: <Terminal className="h-5 w-5 text-highlight" />,
    skills: ["Python", "JavaScript/TypeScript", "Java", "C++", "SQL"]
  },
  {
    title: "Backend Frameworks",
    icon: <Server className="h-5 w-5 text-highlight" />,
    skills: ["Node.js", "FastAPI", "Django", "Spring Boot", "Express"]
  },
  {
    title: "Databases",
    icon: <Database className="h-5 w-5 text-highlight" />,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Cassandra"]
  },
  {
    title: "AI/ML",
    icon: <Cpu className="h-5 w-5 text-highlight" />,
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "LangChain"]
  },
  {
    title: "Frontend Frameworks",
    icon: <Laptop className="h-5 w-5 text-highlight" />,
    skills: ["React", "Vue.js", "Next.js", "Tailwind CSS", "Shadcn UI"]
  },
  {
    title: "Cloud Technologies",
    icon: <Cloud className="h-5 w-5 text-highlight" />,
    skills: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD"]
  },
  {
    title: "Others",
    icon: <Code className="h-5 w-5 text-highlight" />,
    skills: ["Git", "RESTful APIs", "GraphQL", "Microservices", "System Design"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 border-t border-black">
      <Container>
        <h2 className="text-2xl font-semibold mb-8">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.slice(0, 6).map((category, index) => (
            <div 
              key={index} 
              className="bg-white border-2 border-gray-200 hover:border-accent rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                {category.icon}
                <h3 className="text-lg font-medium text-accent">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
          
          {/* Center the "Others" card */}
          <div className="lg:col-span-3 md:col-span-2 flex justify-center">
            <div 
              className="bg-white border-2 border-gray-200 hover:border-accent rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-md"
            >
              <div className="flex items-center gap-2 mb-3">
                {skillCategories[6].icon}
                <h3 className="text-lg font-medium text-accent">{skillCategories[6].title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {skillCategories[6].skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
