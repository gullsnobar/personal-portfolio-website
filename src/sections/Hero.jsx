import profileImg from "../assets/snow.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-animated-gradient min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden pt-24"
    >
      {/* Profile Image with Glow */}
      <div className="relative group mb-6">
        <img
          src={profileImg}
          alt="Gul Snobar"
          className="w-60 h-60 sm:w-52 sm:h-52 object-cover rounded-full border-4 border-emerald-400 shadow-lg transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute -inset-1 rounded-full bg-emerald-500/30 blur-2xl opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
      </div>

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 animate-fade-in-down">
        Hi, I&apos;m{" "}
        <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
          Gul Snobar
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-200 max-w-2xl mx-auto mb-6 text-lg animate-fade-in-up leading-relaxed">
        Frontend Developer building sleek, responsive, and engaging web experiences with React & Tailwind CSS.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 animate-fade-in-up">
        <a
          href="#projects"
          className="px-6 py-3 bg-emerald-500/20 border border-emerald-400 text-emerald-300 rounded-lg hover:bg-emerald-500/40 hover:scale-105 transition duration-300 shadow-lg"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-gray-500/20 border border-gray-400 text-gray-300 rounded-lg hover:bg-gray-500/40 hover:scale-105 transition duration-300 shadow-lg"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
