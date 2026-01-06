
import React from 'react';
import { SAMPLE_PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

interface ProjectGridProps {
  onProjectSelect: (id: string) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ onProjectSelect }) => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-[10px] font-bold uppercase tracking-widest mb-4 border border-purple-500/20">
              Collection
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Curated Workflows</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SAMPLE_PROJECTS.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={onProjectSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
