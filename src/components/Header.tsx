
import React from 'react';
import Container from './Container';
import { Github, Linkedin } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-6">
      <Container>
        <div className="flex justify-between items-center">
          <a href="#" className="text-sm font-medium text-accent hover:text-accent-dark transition">
            Raahul Vignesh
          </a>
          <nav className="flex items-center space-x-4">
            <a 
              href="#about" 
              className="text-sm text-gray-600 hover:text-accent transition"
            >
              About
            </a>
            <a 
              href="#experience" 
              className="text-sm text-gray-600 hover:text-accent transition"
            >
              Experience
            </a>
            <a 
              href="#works" 
              className="text-sm text-gray-600 hover:text-accent transition"
            >
              Works
            </a>
            <a 
              href="#papers" 
              className="text-sm text-gray-600 hover:text-accent transition"
            >
              Papers
            </a>
            <a 
              href="#resume" 
              className="text-sm text-gray-600 hover:text-accent transition"
            >
              Resume
            </a>
            <div className="flex items-center space-x-3 ml-2">
              <a 
                href="https://github.com/raahulv" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-highlight transition"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/raahulvignesh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-highlight transition"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
