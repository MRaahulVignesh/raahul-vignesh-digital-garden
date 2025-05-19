
import React, { useState } from 'react';
import Container from './Container';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { text: 'About', url: '/#about' },
    { text: 'Experience', url: '/#experience' },
    { text: 'Works', url: '/works' },
    { text: 'Papers', url: '/papers' },
    { text: 'Resume', url: '/#resume' },
  ];

  return (
    <header className="sticky top-0 bg-white z-50">
      <Container>
        <div className="border-b-2 border-black-700">
          <div className="flex justify-between items-center pt-4 pb-4 px-4 py-4">
            {/* Logo */}
            <Link to="/" className="text-lg font-medium hover:text-accent-dark transition">
              <span className="text-accent font-bold">R</span>aahul <span className="text-accent font-bold">V</span>ignesh
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map(({ text, url }) => (
                <Link
                  key={text}
                  to={url}
                  className="text-md text-gray-600 hover:text-accent relative hover:underline underline-offset-4 decoration-2 decoration-accent transition-all duration-200"
                >
                  {text}
                </Link>
              ))}
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

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden mt-6 space-y-4">
            {navItems.map(({ text, url }) => (
              <Link
                key={text}
                to={url}
                className="block text-lg text-center text-gray-700 hover:text-accent relative hover:underline underline-offset-4 decoration-2 decoration-accent transition-all duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {text}
              </Link>
            ))}
          </div>
        )}
      </Container>
    </header >
  );
};

export default Header;
