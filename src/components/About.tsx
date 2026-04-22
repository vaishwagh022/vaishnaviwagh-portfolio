import { Code2, Layers, Zap, Globe } from 'lucide-react';
import { useElementAnimation } from '../hooks/useScrollAnimation';

const highlights = [
  { icon: Code2, label: 'React.js Expert', desc: 'Component-based architecture & hooks', color: 'from-sky-500 to-sky-600' },
  { icon: Layers, label: 'UI/UX Focus', desc: 'Responsive, accessible interfaces', color: 'from-cyan-500 to-cyan-600' },
  { icon: Zap, label: 'API Integration', desc: 'REST APIs, Axios, dynamic data', color: 'from-emerald-500 to-emerald-600' },
  { icon: Globe, label: 'Full-Stack Aware', desc: 'Java backend & web architecture', color: 'from-sky-400 to-cyan-500' },
];

function AnimatedCard({ icon: Icon, label, desc, color, delay }: typeof highlights[0] & { delay: number }) {
  const ref = useElementAnimation(delay);
  return (
    <div ref={ref} className="scroll-animate card-hover glass rounded-2xl p-5 border border-white/5">
      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-lg`}>
        <Icon size={18} className="text-white" />
      </div>
      <h4 className="font-semibold text-white mb-1">{label}</h4>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  );
}

export default function About() {
  const leftRef = useElementAnimation(0);
  const rightRef = useElementAnimation(150);

  return (
    <section id="about" className="py-24 bg-slate-950 dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full"
          style={{ background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)', filter: 'blur(80px)', transform: 'translateY(-50%)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Who I Am</p>
          <h2 className="section-title gradient-text">About Me</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-sky-500 to-cyan-400 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div ref={leftRef} className="scroll-animate-left space-y-5">
            <p className="text-slate-300 leading-relaxed text-lg">
              I'm a <span className="text-cyan-400 font-semibold">Frontend Developer</span> with 1 year of
              experience crafting responsive, user-friendly, and scalable web applications using
              <span className="text-sky-400 font-medium"> React.js</span>, HTML, CSS, and JavaScript.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I specialize in component-based architecture, state management, and REST API integration
              to build dynamic, polished web interfaces. My work spans dashboard development, reusable
              component design, and modern UI/UX implementation.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Beyond the frontend, I bring backend knowledge in <span className="text-emerald-400 font-medium">Core Java</span> and{' '}
              <span className="text-emerald-400 font-medium">Advanced Java</span>, giving me a solid
              understanding of full-stack architecture and REST API development.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: 'Location', value: 'Maharashtra, India' },
                { label: 'Experience', value: '1 Year' },
                { label: 'Email', value: 'vaishwagh02@gmail.com', truncate: true },
                { label: 'Phone', value: '+91-' },
              ].map(({ label, value, truncate }) => (
                <div key={label} className="glass rounded-xl p-4 border border-white/5">
                  <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">{label}</p>
                  <p className={`text-white text-sm font-medium ${truncate ? 'truncate' : ''}`}>{value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/vaishnavi-wagh-783a80274/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-5 py-2.5"
              >
                LinkedIn Profile
              </a>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary text-sm px-5 py-2.5"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right — highlights */}
          <div ref={rightRef} className="scroll-animate-right grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <AnimatedCard key={h.label} {...h} delay={i * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
