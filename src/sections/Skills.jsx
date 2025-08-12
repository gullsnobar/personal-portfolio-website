export default function Skills() {
  const skills = [
    // Frontend
    { name: "HTML5", level: "Advanced" },
    { name: "CSS3 / Tailwind CSS", level: "Advanced" },
    { name: "JavaScript (ES6+)", level: "Advanced" },
    { name: "React.js", level: "Advanced" },
    { name: "Responsive Design", level: "Advanced" },
    { name: "UI/UX from Figma", level: "Advanced" },

    // Backend (Learning)
    { name: "Node.js", level: "Beginner" },
    { name: "Express.js", level: "Beginner" },
    { name: "MongoDB", level: "Beginner" },
    { name: "API Development", level: "Beginner" },

    // Tools & AI
    { name: "Git & GitHub", level: "Advanced" },
    { name: "Postman", level: "Intermediate" },
    { name: "Gradio", level: "Intermediate" },
    { name: "Streamlit", level: "Intermediate" },
    { name: "Hugging Face Spaces", level: "Intermediate" },
    { name: "Cursor", level: "Intermediate" },
    { name: "Claude AI", level: "Intermediate" },
    { name: "ChatGPT", level: "Advanced" },
    { name: "Bolt", level: "Intermediate" },
    { name: "Windsurf", level: "Intermediate" },
    { name: "Lovable", level: "Advanced" },
  ];

  return (
    <section id="skills" className="bg-black py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My Skills
          </h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            A mix of strong frontend expertise, growing backend knowledge, and hands-on
            experience with modern AI & development tools — building smooth, scalable, and creative web solutions.
          </p>
        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-emerald-500/30 bg-gray-900 hover:border-emerald-400 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400">
                {skill.name}
              </h3>
              <p className="text-gray-400 text-sm">{skill.level}</p>

              {/* Progress Bar */}
              <div className="mt-3 w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-emerald-400 to-green-400 h-2 transition-all duration-500"
                  style={{
                    width:
                      skill.level === "Advanced"
                        ? "90%"
                        : skill.level === "Intermediate"
                        ? "70%"
                        : "50%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
