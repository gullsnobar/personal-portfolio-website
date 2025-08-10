import { projects } from "../data/data";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-black to-gray-900 px-6"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
        Projects
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
}
