
import React, { useState } from 'react';
import Container from './Container';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { text: 'About', url: '/#about' },
    { text: 'Experience', url: '/#experience' },
    { text: 'Skills', url: '/#skills' },
    { text: 'Works', url: '/works' },
    { text: 'Papers', url: '/papers' },
    { text: 'Resume', url: '/#resume' },
  ];

  return (
    <header className="sticky top-0 bg-white z-50">
      <Container>
        <div className="border-b-2 border-black">
          <div className="flex justify-between items-center pt-4 pb-4 px-4 py-4">
            {/* Logo */}
            <Link to="/" className="text-lg font-medium hover:text-accent-dark transition">
              <span className="text-accent font-bold">R</span>aahul <span className="text-accent font-bold">V</span>ignesh
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map(({ text, url }) => (
                <a
                  key={text}
                  href={url}
                  className="text-md text-gray-600 hover:text-accent relative hover:underline underline-offset-4 decoration-2 decoration-accent transition-all duration-200"
                  onClick={(e) => {
                    if (url.startsWith('/#')) {
                      e.preventDefault();
                      const id = url.substring(2);
                      const element = document.getElementById(id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  {text}
                </a>
              ))}
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
              <a
                key={text}
                href={url}
                className="block text-lg text-center text-gray-700 hover:text-accent relative hover:underline underline-offset-4 decoration-2 decoration-accent transition-all duration-200"
                onClick={(e) => {
                  setMenuOpen(false);
                  if (url.startsWith('/#')) {
                    e.preventDefault();
                    const id = url.substring(2);
                    const element = document.getElementById(id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
              >
                {text}
              </a>
            ))}
          </div>
        )}
      </Container>
    </header >
  );
};

export default Header;
