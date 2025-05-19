
import React from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Paper {
  title: string;
  dateRead: string;
  tags: string[];
  url: string;
  notes?: string;
}

const papers: Paper[] = [
  {
    title: "ReAct: Synergizing Reasoning and Acting in Language Models",
    dateRead: "May 2024",
    tags: ["LLMs", "Agents", "Reasoning"],
    url: "https://arxiv.org/abs/2210.03629",
    notes: "Interesting approach to chain of thought reasoning"
  },
  {
    title: "Learning to Summarize from Human Feedback",
    dateRead: "April 2024",
    tags: ["RLHF", "Summarization", "LLMs"],
    url: "https://arxiv.org/abs/2009.01325"
  },
  {
    title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
    dateRead: "March 2024",
    tags: ["RAG", "NLP", "Knowledge Retrieval"],
    url: "https://arxiv.org/abs/2005.11401"
  }
];

const PaperShelf: React.FC = () => {
  return (
    <section id="papers" className="py-16 border-t border-black">
      <Container>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Paper Shelf</h2>
          <Link 
            to="/papers" 
            className="inline-flex items-center text-highlight hover:text-highlight-dark transition-colors"
          >
            View all papers
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="space-y-4">
          {papers.map((paper, index) => (
            <div key={index} className="pb-4 border-b border-gray-200 last:border-0">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <span className="text-sm text-gray-700 font-medium min-w-[100px]">{paper.dateRead}:</span>
                <div className="flex-1">
                  <h3 className="font-medium">
                    <a 
                      href={paper.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-highlight hover:text-highlight-dark transition"
                    >
                      {paper.title}
                    </a>
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {paper.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {paper.notes && (
                    <p className="mt-1 text-sm text-gray-600">{paper.notes}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PaperShelf;
