import { experiences } from "../data/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-gray-900 to-black px-6"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
        Experience
      </h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-gray-800/50 p-6 rounded-lg border border-emerald-500/20"
          >
            <h3 className="text-xl font-semibold text-emerald-400">
              {exp.title}
            </h3>
            <p className="text-gray-400 italic">
              {exp.company} — {exp.period}
            </p>
            <p className="text-gray-300 mt-2">{exp.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {exp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-xs text-emerald-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
