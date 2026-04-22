import { ExternalLink, Github, Layers } from 'lucide-react';
import { useElementAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive admin dashboard for managing products, orders, and analytics. Features real-time charts, inventory management, and role-based access control.',
    tech: ['React.js', 'Tailwind CSS', 'REST API', 'Axios', 'Chart.js'],
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    demo: '#',
    github: '#',
    accent: 'from-sky-500 to-cyan-500',
  },
  {
    title: 'Employee Management System',
    description: 'Full-stack web application for managing employee records, attendance, and payroll. Includes department-wise filtering and report generation.',
    tech: ['React.js', 'Core Java', 'Spring Boot', 'MySQL', 'Bootstrap'],
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    demo: '#',
    github: '#',
    accent: 'from-cyan-500 to-emerald-500',
  },
  {
    title: 'Weather Application',
    description: 'Dynamic weather app with real-time data fetching, 5-day forecasts, and location-based weather updates. Supports multiple cities with smooth UI transitions.',
    tech: ['React.js', 'OpenWeather API', 'Axios', 'CSS3'],
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    demo: '#',
    github: '#',
    accent: 'from-sky-400 to-sky-600',
  },
  {
    title: 'Task Manager App',
    description: 'Feature-rich task management application with drag-and-drop, priority tagging, due dates, and persistent local storage. Built with React Context for state management.',
    tech: ['React.js', 'Context API', 'Local Storage', 'Tailwind CSS'],
    image: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=800',
    demo: '#',
    github: '#',
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Restaurant Booking Website',
    description: 'Responsive multi-page restaurant website with online table reservation, dynamic menu display, and contact form. Optimized for all screen sizes.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'JSON'],
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
    demo: '#',
    github: '#',
    accent: 'from-teal-500 to-cyan-500',
  },
  {
    title: 'Portfolio Website',
    description: 'This personal portfolio website built with React.js and Tailwind CSS, featuring smooth animations, dark/light mode, and a modern glassmorphism design.',
    tech: ['React.js', 'Tailwind CSS', 'TypeScript', 'CSS Animations'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    demo: '#',
    github: '#',
    accent: 'from-sky-500 to-emerald-500',
  },
];

function ProjectCard({ project, delay }: { project: typeof projects[0]; delay: number }) {
  const ref = useElementAnimation(delay);
  return (
    <div ref={ref} className="scroll-animate group card-hover glass rounded-2xl overflow-hidden border border-white/5">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className={`absolute top-4 left-4 w-8 h-1 rounded-full bg-gradient-to-r ${project.accent}`} />
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.demo}
            className="p-2 rounded-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
            aria-label="Live demo"
          >
            <ExternalLink size={14} />
          </a>
          <a
            href={project.github}
            className="p-2 rounded-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
            aria-label="GitHub"
          >
            <Github size={14} />
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display font-semibold text-white text-lg mb-2 group-hover:text-cyan-400 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/50"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const headRef = useElementAnimation(0);

  return (
    <section id="projects" className="py-24 bg-slate-950 dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-1/3 w-72 h-72 rounded-full"
          style={{ background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headRef} className="scroll-animate text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-sky-500 to-cyan-400 mx-auto mb-4" />
          <p className="section-subtitle">
            A selection of projects that showcase my skills in frontend development, API integration, and user experience design.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 100} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 btn-secondary"
          >
            <Layers size={16} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
