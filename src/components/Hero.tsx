
import React from 'react';
import Container from './Container';

const Hero: React.FC = () => {
  return (
    <section className="py-24">
      <Container>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hey, I'm Raahul Vignesh
        </h1>
        <h2 className="text-xl sm:text-2xl text-gray-600 mb-6">
          backend developer, system thinker, and AI tinkerer
        </h2>
        <p className="text-lg max-w-2xl text-gray-700">
          I'm a software developer at IBM, where I build scalable systems at the intersection of backend engineering and AI. 
          I work on architecting APIs, deploying LLM-powered systems, and bringing ideas into production — fast.
        </p>
      </Container>
    </section>
  );
};

export default Hero;
