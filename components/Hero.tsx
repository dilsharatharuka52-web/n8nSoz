
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-purple-600/20 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-slate-900/50 border border-slate-800 px-4 py-1.5 rounded-full mb-8">
          <span className="text-purple-400 text-xs font-bold uppercase tracking-wider">New</span>
          <span className="text-slate-400 text-xs font-medium">n8n Mastery 2.0 is now live!</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          The Ultimate <br />
          <span className="text-gradient">n8n Automation</span> Showcase
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
          Master business automation with production-grade workflows. Explore our curated collection of n8n samples or use AI to generate your next big idea.
        </p>
      </div>
    </section>
  );
};

export default Hero;
