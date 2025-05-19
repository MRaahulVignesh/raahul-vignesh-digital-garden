
import React from 'react';
import Container from '../components/Container';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Paper {
  title: string;
  dateRead: string;
  tags: string[];
  url: string;
  authors?: string;
}

const papers: Paper[] = [
  {
    title: "ReAct: Synergizing Reasoning and Acting in Language Models",
    dateRead: "May 2024",
    tags: ["LLMs", "Agents", "Reasoning"],
    url: "https://arxiv.org/abs/2210.03629",
    authors: "Shunyu Yao, Jeffrey Zhao, Dian Yu, et al."
  },
  {
    title: "Learning to Summarize from Human Feedback",
    dateRead: "April 2024",
    tags: ["RLHF", "Summarization", "LLMs"],
    url: "https://arxiv.org/abs/2009.01325",
    authors: "Nisan Stiennon, Long Ouyang, Jeff Wu, et al."
  },
  {
    title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
    dateRead: "March 2024",
    tags: ["RAG", "NLP", "Knowledge Retrieval"],
    url: "https://arxiv.org/abs/2005.11401",
    authors: "Patrick Lewis, Ethan Perez, Aleksandra Piktus, et al."
  },
  {
    title: "Attention Is All You Need",
    dateRead: "February 2024",
    tags: ["Transformers", "Deep Learning", "NLP"],
    url: "https://arxiv.org/abs/1706.03762",
    authors: "Ashish Vaswani, Noam Shazeer, Niki Parmar, et al."
  },
  {
    title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
    dateRead: "January 2024",
    tags: ["BERT", "NLP", "Pre-training"],
    url: "https://arxiv.org/abs/1810.04805",
    authors: "Jacob Devlin, Ming-Wei Chang, Kenton Lee, et al."
  }
];

const PaperShelfPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 bg-white border-b border-gray-100 shadow-sm z-10">
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
            <h1 className="text-3xl font-bold mb-2">Paper Shelf</h1>
            <p className="text-gray-600 mb-8">
              A collection of research papers I've read and found valuable in my journey through AI and software engineering.
            </p>
            
            <div className="space-y-6">
              {papers.map((paper, index) => (
                <div key={index} className="pb-6 border-b border-gray-100 last:border-0">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                    <h3 className="font-medium text-xl">
                      <a 
                        href={paper.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-highlight hover:text-highlight-dark transition-colors"
                      >
                        {paper.title}
                      </a>
                    </h3>
                    <span className="text-sm text-gray-500 mt-1 md:mt-0">{paper.dateRead}</span>
                  </div>
                  
                  {paper.authors && (
                    <p className="text-gray-700 mt-1 mb-2">
                      {paper.authors}
                    </p>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mt-3">
                    {paper.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
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
      </main>
    </div>
  );
};

export default PaperShelfPage;
