
import React from 'react';
import Container from './Container';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-black">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0 text-sm text-gray-600">
            © {year} <span className="text-accent">Raahul Vignesh</span>. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
