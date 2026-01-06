
import React from 'react';
import { N8NProject } from '../types';

interface ProjectCardProps {
  project: N8NProject;
  onClick: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      onClick={() => onClick(project.id)}
      className="group cursor-pointer card-gradient border border-slate-800 rounded-3xl overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
            project.difficulty === 'Advanced' ? 'bg-red-500/20 text-red-400' :
            project.difficulty === 'Intermediate' ? 'bg-orange-500/20 text-orange-400' :
            'bg-green-500/20 text-green-400'
          }`}>
            {project.difficulty}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest bg-slate-800/50 px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex items-center justify-between border-t border-slate-800 pt-6">
          <div className="flex -space-x-2">
            {project.nodes.slice(0, 3).map((node, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-slate-400" title={node}>
                {node.charAt(0)}
              </div>
            ))}
            {project.nodes.length > 3 && (
              <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-slate-400">
                +{project.nodes.length - 3}
              </div>
            )}
          </div>
          <button className="text-purple-400 text-sm font-semibold hover:text-purple-300 transition-colors">
            View Project →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
