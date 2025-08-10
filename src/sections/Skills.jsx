import { skills } from "../data/data";

export default function Skills() {
return (
<section
id="skills"
className="py-20 bg-gradient-to-b from-gray-900 to-black px-6"
>
<h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
Skills
</h2>
<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
<div className="bg-gray-800/50 p-6 rounded-lg border border-emerald-500/20">
<h3 className="text-xl font-semibold text-emerald-400 mb-4">
Frontend
</h3>
<ul className="text-gray-300 space-y-2">
{skills.frontend.map((skill, i) => (
<li key={i}>{skill}</li>
))}
</ul>
</div>
<div className="bg-gray-800/50 p-6 rounded-lg border border-emerald-500/20">
<h3 className="text-xl font-semibold text-emerald-400 mb-4">
Backend
</h3>
<ul className="text-gray-300 space-y-2">
{skills.backend.map((skill, i) => (
<li key={i}>{skill}</li>
))}
</ul>
</div>
<div className="bg-gray-800/50 p-6 rounded-lg border border-emerald-500/20">
<h3 className="text-xl font-semibold text-emerald-400 mb-4">
Tools & Others
</h3>
<ul className="text-gray-300 space-y-2">
{skills.tools.map((skill, i) => (
<li key={i}>{skill}</li>
))}
</ul></div>
</div>
 </section>
  );
}
