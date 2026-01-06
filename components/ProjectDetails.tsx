
import React, { useState } from 'react';
import { N8NProject } from '../types';

interface ProjectDetailsProps {
  project: N8NProject;
  onBack: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onBack }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen pb-24 animate-in fade-in slide-in-from-bottom-2 duration-700">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-[600px] -z-20 overflow-hidden opacity-30">
        <img 
          src={`src/${project.image}`} 
          className="w-full h-full object-cover blur-[100px] scale-110" 
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/0 via-[#020617]/50 to-[#020617]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center space-x-2 text-slate-400 hover:text-white transition-all mb-12 bg-slate-900/40 hover:bg-slate-900/80 px-4 py-2 rounded-full border border-slate-800"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-semibold">Back to Catalog</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT COLUMN: PRIMARY CONTENT */}
          <div className="lg:col-span-8 space-y-16">
            <header>
              <div className="flex items-center space-x-3 mb-6">
                <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                  project.difficulty === 'Advanced' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                  project.difficulty === 'Intermediate' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' :
                  'bg-green-500/10 text-green-400 border-green-500/20'
                }`}>
                  {project.difficulty}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                  Updated Dec 2024
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-tight text-white">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </header>

            <div className="relative rounded-[48px] overflow-hidden border border-slate-800 shadow-3xl group ring-1 ring-white/10">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full aspect-video object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
            </div>

            {/* Business Value Section */}
            <section className="bg-slate-900/30 p-10 md:p-14 rounded-[40px] border border-slate-800/50 backdrop-blur-sm">
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-purple-500/10 rounded-2xl">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold">Business Value & ROI</h2>
              </div>
              <p className="text-xl text-slate-300 leading-relaxed font-medium">
                {project.businessValue}
              </p>
            </section>

            {/* Implementation Details */}
            <section>
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <span className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mr-4 text-xl">⚙️</span>
                Technical Implementation
              </h2>
              <div className="prose prose-invert max-w-none text-slate-400">
                <p className="text-lg leading-relaxed mb-10">
                  {project.detailedImplementation}
                </p>
                
                <h3 className="text-xl font-bold text-white mb-6">Workflow Logic Breakdown</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.nodes.map((node, i) => (
                    <div key={i} className="flex items-center p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-all">
                      <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center font-bold text-blue-400 shrink-0 mr-4">
                        {node.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm uppercase tracking-wider">{node}</h4>
                        <p className="text-xs text-slate-500">Node Configuration Ready</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Setup Guide */}
            <section>
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <span className="w-10 h-10 rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center mr-4 text-xl">🚀</span>
                Step-by-Step Installation
              </h2>
              <div className="space-y-6">
                {project.setupSteps.map((step, i) => (
                  <div key={i} className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center font-bold text-slate-500 group-hover:text-green-400 group-hover:border-green-500/30 transition-all mr-6 mt-1">
                      {i + 1}
                    </div>
                    <p className="text-lg text-slate-400 py-2 leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: SIDEBAR */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              {/* Quick Action Card */}

              {/* Requirements Card */}
              <div className="glass p-10 rounded-[40px] border-slate-800">
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-8">Prerequisites</h4>
                <ul className="space-y-4">
                  {project.prerequisites.map((req, i) => (
                    <li key={i} className="flex items-center text-slate-400 text-sm">
                      <svg className="w-4 h-4 mr-3 text-purple-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
