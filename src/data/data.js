import { User, Code, Globe, Briefcase, MessageCircle } from "lucide-react";

export const navItems = [
  { id: "hero", label: "Home", icon: User },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "projects", label: "Projects", icon: Globe },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "contact", label: "Contact", icon: MessageCircle },
];

// data/data.js
export const skills = {
  frontend: [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript (ES6+)",
    "React.js",
    "Responsive Web Design",
    "UI/UX from Figma",
    "Material UI",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "API Development",
    "Authentication (JWT)",
  ],
  tools: [
    "Git & GitHub",
    "Gradio",
    "Streamlit",
    "Hugging Face Spaces",
    "Vercel & Netlify",
    "Postman",
    "Cursor",
    "Claude",
    "ChatGPT",
    "Bolt",
    "Windsurf",
    "Lovable",
  ],
};


export const projects = [
  {
    title: "QuickShop E-commerce",
    description:
      "Advanced e-commerce platform with real-time cart updates, secure checkout, and modern UI/UX design.",
    tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "Stripe API"],
    live: "https://quickshop-ecommerce.vercel.app",
    github: "#",
    accent: "emerald",
  },
  {
    title: "React Music Player",
    description:
      "Premium music streaming interface with custom audio controls, playlist management, and visualizations.",
    tech: ["React.js", "Tailwind CSS", "Audio API", "Canvas"],
    live: "https://react-music-player.vercel.app",
    github: "#",
    accent: "green",
  },
  {
    title: "GitHub Profile Explorer",
    description:
      "Comprehensive GitHub analytics dashboard with repository insights, contribution graphs, and user statistics.",
    tech: ["React.js", "Tailwind CSS", "GitHub API", "Chart.js"],
    live: "#",
    github: "#",
    accent: "teal",
  },
  {
    title: "Redux Task Manager",
    description:
      "Professional task management system with team collaboration, priority levels, and progress tracking.",
    tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "Drag & Drop"],
    live: "https://redux-todo-app-n3t4.vercel.app",
    github: "https://github.com/gullsnobar/Redux-Todo-App",
    accent: "emerald",
  },
  {
    title: "Cinema Hub",
    description:
      "Modern movie discovery platform with advanced search, reviews, watchlists, and recommendation engine.",
    tech: ["Next.js", "React", "Tailwind CSS", "TMDB API", "Framer Motion"],
    live: "https://react-movie-app-five-sable.vercel.app",
    github: "https://github.com/gullsnobar/React-Movie-App",
    accent: "green",
  },
  {
    title: "Weather App",
    description:
    "Glassmorphism weather app with real-time search, 3-day forecast, light/dark mode, and responsive design.",
    tech: ["React.js", "Vite", "Tailwind CSS", "OpenWeather API"],
    live: "https://weather-app-azure-nine-44.vercel.app/",
    github: "https://github.com/gullsnobar/Weather-App",
    accent: "emerald",
  },
  {
  title: "Login & Signup System",
  description:
    "Secure auth system with JWT, bcryptjs, and middleware for route protection, built using Node.js, Express, and EJS.",
  tech: ["Node.js", "Express", "JWT", "bcryptjs", "EJS"],
  live: "#",
  github: "https://lnkd.in/d5VNW2XH",
  accent: "emerald",
},
 
 {
  title: "Full-Stack User Registration App",
  description:
    "Full-stack app with user registration, form handling, and routing using Node.js, Express, MongoDB, and EJS.",
  tech: ["Node.js", "Express", "MongoDB", "EJS"],
  live: "#",
  github: "https://github.com/gullsnobar/mini-backend-project",
  accent: "green",
},

{
  title: "Personal Portfolio Website (v1)",
  description:
    "First personal portfolio showcasing my technical journey, UX design skills, and projects like digital clock, calculator, and image slider.",
  tech: ["HTML", "CSS", "JavaScript"],
  live: "https://snobar-portfiolio.vercel.app",
  github: "https://github.com/gullsnobar/snobar-portfiolio",
  accent: "emerald",
},


];

export const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "CodeAlpha",
    period: "Jun 2025 – Aug 2025",
    description:
      "2-month remote internship working on real-world projects including a Weather App, Quiz App, and multiple responsive React.js websites. Enhanced skills in React.js, Tailwind CSS, and API integration.",
    skills: [
      "React.js",
      "Tailwind CSS",
      "API Integration",
      "Responsive Design",
    ],
    type: "remote",
  },
  {
    title: "Frontend Developer Intern",
    company: "Arch Technologies",
    period: "Jun 2025 – August 2025",
    description:
      "Engineered responsive web applications with React.js, implemented advanced animations and micro-interactions, optimized performance achieving 95+ Lighthouse scores, and collaborated with design teams to deliver pixel-perfect interfaces.",
    skills: [
      "React.js",
      "Performance Optimization",
      "UI/UX Design",
      "Team Collaboration",
    ],
    type: "remote",
  },
  {
    title: "Technical Content Specialist",
    company: "Microtechx",
    period: "Jun 2025 – July 2025",
    description:
      "Lead technical documentation initiatives, create comprehensive API documentation, develop internal training materials, and maintain technical knowledge bases. Streamlined developer onboarding processes and improved documentation standards.",
    skills: [
      "Technical Writing",
      "API Documentation",
      "Process Improvement",
      "Knowledge Management",
    ],
    type: "Remote",
  },
];
