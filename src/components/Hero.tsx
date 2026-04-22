import { Github, Linkedin, ChevronDown, Mail, MapPin } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

const phrases = [
  'Building modern web applications',
  'Creating responsive UI/UX designs',
  'Integrating REST APIs seamlessly',
  'Delivering scalable solutions',
];

export default function Hero() {
  const typed = useTypewriter(phrases);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 dark:bg-slate-950"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 rounded-full opacity-20 animate-orb-1"
          style={{ background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute top-1/2 right-1/6 w-96 h-96 rounded-full opacity-15 animate-orb-2"
          style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)', filter: 'blur(50px)' }} />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full opacity-20 animate-orb-3"
          style={{ background: 'radial-gradient(circle, #10b981 0%, transparent 70%)', filter: 'blur(40px)' }} />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(14,165,233,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-4 animate-slide-up">
              Hi, I'm{' '}
              <span className="gradient-text block sm:inline">Vaishnavi</span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500" />
              <span className="text-xl sm:text-2xl font-semibold text-slate-300 font-display">
                Frontend Developer
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500" />
            </div>

            <div className="h-8 mb-8">
              <p className="text-lg text-slate-400">
                <span className="text-cyan-400">{typed}</span>
                <span className="cursor-blink text-cyan-400 ml-0.5">|</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-cyan-500" />
                Maharashtra, India
              </span>
              <span className="text-slate-700">·</span>
              <span className="flex items-center gap-1.5">
                <Mail size={14} className="text-cyan-500" />
                vaishwagh02@gmail.com
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary"
              >
                Hire Me
              </button>
              <button
                onClick={() => scrollToSection('#projects')}
                className="btn-secondary"
              >
                View Projects
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a
                href="https://www.linkedin.com/in/vaishnavi-wagh-783a80274/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass border border-white/10 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-all duration-200"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-xl glass border border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/30 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:vaishwagh02@gmail.com"
                className="p-2.5 rounded-xl glass border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Profile visual */}
          <div className="flex-shrink-0 animate-float">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-spin-slow" />
              <div className="absolute inset-2 rounded-full border border-sky-500/10" />
              {/* Orbiting dot */}
              <div className="absolute inset-0 rounded-full"
                style={{ animation: 'spin 8s linear infinite' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
              </div>
              {/* Main circle */}
              <div className="absolute inset-8 rounded-full overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #0a1628 0%, #0f2744 50%, #0a2540 100%)',
                  border: '2px solid rgba(6, 182, 212, 0.3)',
                  boxShadow: '0 0 60px rgba(6, 182, 212, 0.2), inset 0 0 40px rgba(6, 182, 212, 0.05)',
                }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-display font-bold text-6xl sm:text-7xl gradient-text">VW</span>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-2 opacity-60" />
                  <span className="text-slate-500 text-xs mt-2 tracking-widest">DEV</span>
                </div>
              </div>
              {/* Corner badges */}
              <div className="absolute top-4 right-4 glass px-2.5 py-1 rounded-lg text-xs font-medium text-cyan-400 border border-cyan-500/20">
                React.js
              </div>
              <div className="absolute bottom-6 left-2 glass px-2.5 py-1 rounded-lg text-xs font-medium text-emerald-400 border border-emerald-500/20">
                1yr exp
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors duration-200 group"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce-slow group-hover:text-cyan-400 transition-colors" />
      </button>
    </section>
  );
}
