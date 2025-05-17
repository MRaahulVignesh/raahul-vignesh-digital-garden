
import React from 'react';
import Container from './Container';

interface Paper {
  title: string;
  dateRead: string;
  tags: string[];
  url: string;
}

const papers: Paper[] = [
  {
    title: "ReAct: Synergizing Reasoning and Acting in Language Models",
    dateRead: "May 2024",
    tags: ["LLMs", "Agents", "Reasoning"],
    url: "https://arxiv.org/abs/2210.03629"
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
    <section id="papers" className="py-16 border-t border-gray-100">
      <Container>
        <h2 className="text-2xl font-semibold mb-4">Paper Shelf</h2>
        <p className="text-gray-700 mb-8">
          I usually read some papers every week and I store the most memorable here. Each one taught me something 
          valuable — about models, infrastructure, or how we think about AI.
        </p>
        
        <div className="space-y-6">
          {papers.map((paper, index) => (
            <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
              <h3 className="font-medium mb-1">
                <a 
                  href={paper.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 transition"
                >
                  {paper.title}
                </a>
              </h3>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>{paper.dateRead}</span>
              </div>
              <div className="flex gap-2">
                {paper.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="text-xs bg-gray-100 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PaperShelf;
