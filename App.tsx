
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import ProjectDetails from './components/ProjectDetails';
import { SAMPLE_PROJECTS } from './constants';

const App: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Auto-scroll to top when changing views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedProjectId]);

  const selectedProject = SAMPLE_PROJECTS.find(p => p.id === selectedProjectId);

  return (
    <div className="min-h-screen selection:bg-purple-500 selection:text-white">
      <Header />
      
      <main>
        {!selectedProject ? (
          <>
            <Hero />
            
            {/* Project Filters Placeholder */}
            <section className="py-12 border-y border-slate-900 bg-slate-950">
              <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                <span className="text-2xl font-bold tracking-tighter">FINANCE</span>
                <span className="text-2xl font-bold tracking-tighter">MARKETING</span>
                <span className="text-2xl font-bold tracking-tighter">AI AGENTS</span>
                <span className="text-2xl font-bold tracking-tighter">SAAS SYNC</span>
                <span className="text-2xl font-bold tracking-tighter">DATA PIPELINE</span>
              </div>
            </section>

            <ProjectGrid onProjectSelect={setSelectedProjectId} />
          </>
        ) : (
          <ProjectDetails 
            project={selectedProject} 
            onBack={() => setSelectedProjectId(null)} 
          />
        )}
      </main>

      <footer className="bg-slate-950 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center font-bold">n8</div>
                <span className="text-lg font-bold">n8n<span className="text-purple-500">ZOY</span></span>
              </div>
              <p className="text-slate-500 max-w-xs text-sm leading-relaxed">
                The leading educational resource for n8n workflow engineering and advanced business automation.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Explore</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-white transition-colors">Free Samples</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Premium Course</a></li>
                <li><a href="#" className="hover:text-white transition-colors">n8n Templates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Support</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
            <p>© 2026 n8n ZOY Hub. Built for automation pros.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
              <a href="#" className="hover:text-white transition-colors">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
