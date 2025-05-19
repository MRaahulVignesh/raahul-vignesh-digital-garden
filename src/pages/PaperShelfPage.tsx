
import React from 'react';
import Container from '../components/Container';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  },
  {
    title: "Attention Is All You Need",
    dateRead: "February 2024",
    tags: ["Transformers", "Deep Learning", "NLP"],
    url: "https://arxiv.org/abs/1706.03762",
    notes: "Foundational paper on transformer architecture"
  },
  {
    title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
    dateRead: "January 2024",
    tags: ["BERT", "NLP", "Pre-training"],
    url: "https://arxiv.org/abs/1810.04805"
  }
];

const PaperShelfPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 bg-white border-b border-black shadow-sm z-10">
        <Container>
          <div className="py-4">
            <Link to="/" className="inline-flex items-center text-gray-700 hover:text-accent transition-colors">
              <ArrowLeft size={18} className="mr-2" />
              Back to Home
            </Link>
          </div>
        </Container>
      </header>
      
      <main>
        <section className="py-12">
          <Container>
            <h1 className="text-3xl font-bold mb-6">Paper Shelf</h1>
            <p className="text-gray-600 mb-8">
              A collection of research papers I've read and found valuable in my journey through AI and software engineering.
            </p>
            
            <div className="space-y-6">
              {papers.map((paper, index) => (
                <div key={index} className="pb-6 border-b border-gray-200 last:border-0">
                  <div className="flex flex-col md:flex-row">
                    <span className="text-sm text-gray-700 font-medium min-w-[100px] md:min-w-[150px]">{paper.dateRead}:</span>
                    <div className="flex-1">
                      <h3 className="font-medium">
                        <a 
                          href={paper.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-highlight hover:text-highlight-dark transition-colors"
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
      </main>
    </div>
  );
};

export default PaperShelfPage;
