import React from 'react';
import Container from './Container';

const Hero: React.FC = () => {
  return (
    <section className="py-12">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] lg:grid-rows-[auto_1fr] gap-4">
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hey, I'm <span className="text-accent">Raahul</span>
              </h1>
              <h2 className="bold text-xl text-tagline md:text-2xl text-gray-600 mb-4">
                Engineering the future of Software and AI
              </h2>
            </div>
          </div>

          <div className="lg:row-span-2 lg:col-start-2 flex items-center justify-center">
            <img
              src="/title_img_1.png"
              alt="Raahul Vignesh"
              className="w-72 h-72 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] object-cover rounded-xl"
            />
          </div>

          <div className="lg:row-start-2">
            <div className="text-sm md:text-md text-gray-700 mt-2 grow space-y-4">
              <p>
                I'm a Software Engineer with a strong interest in Distributed Systems and Artificial Intelligence. I’m a passionate advocate for AI and am currently expanding my knowledge in Computer Vision, driven by the belief that AI will reshape the future of software.
              </p>
              <p>
                My journey in tech began right after my undergraduate degree, when I joined BoomerangAI as the Founding Engineer and their first employee. I built the backend systems from scratch and helped shape the core architecture of the product. This early, high-ownership experience laid a strong foundation for my growth as a software engineer and continues to influence the way I think about system design and product development.
              </p>
              <p>
                I went on to pursue a Master’s degree in Computer Science, focusing on AI and Big Data, and have since worked at IBM, where I contribute to building scalable, intelligent systems. I love designing distributed architectures, tackling complex engineering challenges, and blending traditional software engineering with modern AI capabilities.
              </p>
              <p>
                To stay sharp, I regularly read AI research papers—many of which are stacked on my digital paper shelf—and practice algorithms on LeetCode, keeping my problem-solving skills sharp. I believe that as AI systems grow in scale and performance demands, strong fundamentals in data structures and algorithms will be more important than ever.
              </p>
              <p>
                Whether I’m reading research, building production systems, or experimenting with AI models, I bring curiosity, discipline, and a builder’s mindset to everything I do.
              </p>
            </div>
          </div>
        </div>


      </Container>
    </section>
  );
};

export default Hero;
