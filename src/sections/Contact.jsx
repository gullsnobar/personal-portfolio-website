import { Phone, Mail, Linkedin } from "lucide-react";

export default function Contact() {
return (
<section id="contact" className="bg-black py-16">
<div className="container mx-auto px-4">
{/* Section Title */}
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-bold uppercase text-white">
Contact Me
</h2>
<div className="mt-2 flex items-center justify-center gap-2">
<span className="w-12 h-[2px] bg-emerald-500"></span>
<span className="text-sm font-semibold text-emerald-500">
Get in Touch
</span>
<span className="w-12 h-[2px] bg-emerald-500"></span>
</div>
<p className="mt-4 max-w-2xl mx-auto text-white">
Have a project in mind or just want to say hello? Let’s connect and
build something amazing together.</p>
</div>

{/* Contact Info Boxes */}
<div className="grid md:grid-cols-3 gap-6 mb-16">
{/* Phone */}
<div className="bg-gray-900 p-8 text-center rounded-lg shadow-lg border border-emerald-500/40 hover:border-emerald-400 transition">
<Phone className="w-10 h-10 mx-auto text-emerald-500 mb-4" />
<h3 className="text-lg font-semibold text-white">Phone</h3>
<p className="text-emerald-400 font-medium">0311 416 7260</p>
</div>

{/* Email */}
<div className="bg-gray-900 p-8 text-center rounded-lg shadow-lg border border-emerald-500/40 hover:border-emerald-400 transition">
<Mail className="w-10 h-10 mx-auto text-emerald-500 mb-4" />
<h3 className="text-lg font-semibold text-white">Email</h3>
<p className="text-emerald-400 font-medium">gullsnobar07@gmail.com</p>
</div>

{/* LinkedIn */}
<div className="bg-gray-900 p-8 text-center rounded-lg shadow-lg border border-emerald-500/40 hover:border-emerald-400 transition">
<Linkedin className="w-10 h-10 mx-auto text-emerald-500 mb-4" />
<h3 className="text-lg font-semibold text-white">LinkedIn</h3>
<a
href="https://www.linkedin.com/in/gullsanobar/"
target="_blank"
rel="noopener noreferrer"
className="text-emerald-400 font-medium hover:underline">
Gull Sanobar
</a>
</div>
</div>

{/* Contact Form */}
<div className="bg-gray-900 shadow-lg rounded-lg p-8 max-w-4xl mx-auto text-white border border-emerald-500/30">
<form className="grid md:grid-cols-2 gap-6">
<div>
<input
type="text"
placeholder="Name"
className="w-full border border-emerald-500 p-3 rounded bg-transparent text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500 transition-shadow"
required
/>
</div>
<div>
<input
type="email"
placeholder="Email"
className="w-full border border-emerald-500 p-3 rounded bg-transparent text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500 transition-shadow"
required
/>
</div>
<div>
<input
type="text"
placeholder="Phone"
className="w-full border border-emerald-500 p-3 rounded bg-transparent text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500 transition-shadow"
/>
</div>
<div>
<input
type="text"
placeholder="Subject"
className="w-full border border-emerald-500 p-3 rounded bg-transparent text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500 transition-shadow"
/>
</div>
<div className="md:col-span-2">
<textarea
rows="5"
placeholder="Your Message..."
className="w-full border border-emerald-500 p-3 rounded bg-transparent text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500 transition-shadow"
required></textarea>
</div>
<div className="md:col-span-2">
<button
type="submit"
className="w-full bg-emerald-500 text-white font-semibold py-3 rounded hover:bg-emerald-600 transition"
>
Send Message
</button>
</div>
</form>
</div>
</div>
</section>
);
}
