
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
  summary?: string;
}

const papers: Paper[] = [
  {
    title: "ReAct: Synergizing Reasoning and Acting in Language Models",
    dateRead: "May 2024",
    tags: ["LLMs", "Agents", "Reasoning"],
    url: "https://arxiv.org/abs/2210.03629",
    authors: "Shunyu Yao, Jeffrey Zhao, Dian Yu, et al.",
    summary: "This paper introduces ReAct, a framework that integrates reasoning and acting in language models. By generating both reasoning traces and task-specific actions, models can better handle complex tasks that require thinking and interaction with external environments."
  },
  {
    title: "Learning to Summarize from Human Feedback",
    dateRead: "April 2024",
    tags: ["RLHF", "Summarization", "LLMs"],
    url: "https://arxiv.org/abs/2009.01325",
    authors: "Nisan Stiennon, Long Ouyang, Jeff Wu, et al.",
    summary: "The authors present a method for training language models to summarize text using human feedback. By leveraging reinforcement learning, they significantly improve summary quality compared to supervised learning approaches."
  },
  {
    title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
    dateRead: "March 2024",
    tags: ["RAG", "NLP", "Knowledge Retrieval"],
    url: "https://arxiv.org/abs/2005.11401",
    authors: "Patrick Lewis, Ethan Perez, Aleksandra Piktus, et al.",
    summary: "This paper introduces RAG, a framework that combines neural sequence generation with retrieval of documents from a corpus. This approach enables language models to access non-parametric memory, enhancing their performance on knowledge-intensive tasks."
  },
  {
    title: "Attention Is All You Need",
    dateRead: "February 2024",
    tags: ["Transformers", "Deep Learning", "NLP"],
    url: "https://arxiv.org/abs/1706.03762",
    authors: "Ashish Vaswani, Noam Shazeer, Niki Parmar, et al.",
    summary: "The landmark paper that introduced the Transformer architecture, which has become the foundation for modern language models. The authors propose a novel neural network architecture based solely on attention mechanisms, dispensing with recurrence and convolutions entirely."
  },
  {
    title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
    dateRead: "January 2024",
    tags: ["BERT", "NLP", "Pre-training"],
    url: "https://arxiv.org/abs/1810.04805",
    authors: "Jacob Devlin, Ming-Wei Chang, Kenton Lee, et al.",
    summary: "This paper presents BERT, a bidirectional transformer pre-trained on masked language modeling and next sentence prediction tasks. The authors demonstrate that this approach achieves state-of-the-art results on a wide range of NLP tasks."
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
            
            <div className="space-y-8">
              {papers.map((paper, index) => (
                <div 
                  key={index} 
                  className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-all duration-300"
                >
                  <h3 className="font-medium text-xl mb-2">
                    <a 
                      href={paper.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-highlight hover:text-highlight-dark transition-colors"
                    >
                      {paper.title}
                    </a>
                  </h3>
                  
                  {paper.authors && (
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Authors:</span> {paper.authors}
                    </p>
                  )}
                  
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>Read: {paper.dateRead}</span>
                  </div>
                  
                  {paper.summary && (
                    <p className="text-gray-700 mb-4">{paper.summary}</p>
                  )}
                  
                  <div className="flex gap-2">
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
