
import React from 'react';
import Container from './Container';
import { Download } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-16 border-t border-gray-100">
      <Container>
        <h2 className="text-2xl font-semibold mb-8">Resume</h2>
        
        <div className="flex justify-center">
          <a 
            href="/raahul_vignesh_resume.pdf" 
            download
            className="inline-flex items-center px-5 py-3 bg-accent hover:bg-accent-dark text-white rounded-lg transition"
          >
            <Download size={18} className="mr-2" />
            Download Resume
          </a>
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">
          PDF format, directly downloadable
        </p>
      </Container>
    </section>
  );
};

export default Resume;
