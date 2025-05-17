
import React from 'react';
import Container from './Container';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 border-t border-gray-100">
      <Container>
        <h2 className="text-2xl font-semibold mb-8">About Me</h2>
        <div className="space-y-6 text-gray-700">
          <p>
            I'm a software developer at IBM, where I build scalable systems at the intersection of backend engineering and AI. 
            I work on architecting APIs, deploying LLM-powered systems, and bringing ideas into production — fast.
          </p>
          <p>
            In 2024, I played a core role in moving a Retrieval-Augmented Generation (RAG) system into pre-production, 
            powering intelligent search and retrieval for enterprise documents. I also built a centralized 
            authorization service from scratch, supporting scoped access across multiple APIs. Earlier, I was 
            the first engineer at a seed-stage startup — where I helped take the MVP from architecture to launch 
            in just four months. That product is now in use, and the team has since grown in size, funding, and impact.
          </p>
          <p>
            Beyond work, I spend time exploring papers in AI, reasoning systems, and agentic design — and I maintain 
            a "paper shelf" where I save the ones that left a mark. I care deeply about building robust systems, 
            clean interfaces, and engineering teams that can ship.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default About;
