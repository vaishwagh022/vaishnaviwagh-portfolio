import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { useElementAnimation } from '../hooks/useScrollAnimation';

const achievements = [
  'Developed and maintained responsive React.js web applications for enterprise clients',
  'Built reusable component libraries reducing development time by 30%',
  'Integrated multiple REST APIs using Axios for dynamic data rendering',
  'Implemented dashboard features including charts, data tables, and real-time updates',
  'Collaborated with UI/UX designers to translate Figma mockups into pixel-perfect code',
  'Conducted code reviews and participated in Agile sprint planning sessions',
  'Optimized application performance through lazy loading and component memoization',
];

export default function Experience() {
  const titleRef = useElementAnimation(0);
  const cardRef = useElementAnimation(150);

  return (
    <section id="experience" className="py-24 bg-slate-900/50 dark:bg-slate-900/50 relative">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full"
          style={{ background: 'radial-gradient(circle, #10b981 0%, transparent 70%)', filter: 'blur(80px)', transform: 'translateY(-50%)' }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="scroll-animate text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Career</p>
          <h2 className="section-title gradient-text">Work Experience</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-sky-500 to-cyan-400 mx-auto" />
        </div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-sky-500 to-transparent opacity-30" />

          <div ref={cardRef} className="scroll-animate-left pl-16 sm:pl-20">
            {/* Timeline node */}
            <div className="absolute left-3.5 sm:left-5.5 top-6">
              <div className="timeline-dot" />
            </div>

            <div className="glass rounded-2xl p-6 sm:p-8 border border-white/5 card-hover">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center shadow-lg flex-shrink-0">
                    <Briefcase size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-xl">Frontend Developer</h3>
                    <p className="text-cyan-400 font-semibold mt-0.5">Avsoft Technologies</p>
                  </div>
                </div>
                <div className="flex flex-col sm:items-end gap-2 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    2023 – Present
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} />
                    Maharashtra, India
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-medium">
                    Full-time
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-400 leading-relaxed mb-6">
                Working as a Frontend Developer building enterprise-grade web applications with React.js,
                focusing on performance, reusability, and clean UI/UX implementation. Collaborating closely
                with backend teams to integrate REST APIs and deliver end-to-end features.
              </p>

              {/* Achievements */}
              <div>
                <h4 className="text-slate-300 font-semibold text-sm uppercase tracking-wider mb-4">Key Contributions</h4>
                <ul className="space-y-3">
                  {achievements.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-400 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div className="mt-6 pt-6 border-t border-white/5">
                <h4 className="text-slate-400 text-xs uppercase tracking-widest mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'JavaScript', 'Tailwind CSS', 'Axios', 'REST API', 'Git', 'HTML5', 'CSS3'].map((t) => (
                    <span key={t} className="skill-tag text-xs">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
