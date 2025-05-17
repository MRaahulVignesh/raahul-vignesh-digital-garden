
import React from 'react';
import Container from './Container';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-gray-100">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0 text-sm text-gray-600">
            © {year} Raahul Vignesh. All rights reserved.
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/raahulv" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-gray-900 transition"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/raahulvignesh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-gray-900 transition"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
