
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Works from '../components/Works';
import Skills from '../components/Skills';
import PaperShelf from '../components/PaperShelf';
import Resume from '../components/Resume';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Works />
        <PaperShelf />
        <Resume />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
