import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="group bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-emerald-500/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10">
      <div
        className={`h-2 w-full bg-gradient-to-r from-${project.accent}-500 to-${project.accent}-600 rounded-full mb-6`}
      ></div>

      <h3 className="text-xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">
        {project.title}
      </h3>

      <p className="text-gray-400 mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((tech, idx) => (
          <span
            key={idx}
            className={`px-3 py-1 bg-${project.accent}-500/10 border border-${project.accent}-500/30 rounded-full text-xs text-${project.accent}-300 font-medium`}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex space-x-4">
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-200"
        >
          <ExternalLink size={16} />
          <span className="text-sm font-medium">Live Demo</span>
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-2 px-4 py-2 bg-gray-500/10 border border-gray-500/30 rounded-lg text-gray-400 hover:bg-gray-500/20 hover:border-gray-500/50 transition-all duration-200"
        >
          <Github size={16} />
          <span className="text-sm font-medium">Source</span>
        </a>
      </div>
    </div>
  );
}
