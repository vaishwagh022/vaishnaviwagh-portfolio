import { useElementAnimation } from '../hooks/useScrollAnimation';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🖥',
    color: 'from-sky-500 to-sky-600',
    borderColor: 'border-sky-500/20',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'],
  },
  {
    title: 'React Ecosystem',
    icon: '⚛',
    color: 'from-cyan-500 to-cyan-600',
    borderColor: 'border-cyan-500/20',
    skills: ['Functional Components', 'React Hooks', 'Context API', 'React Router', 'Reusable Components', 'State Management'],
  },
  {
    title: 'Backend',
    icon: '⚙',
    color: 'from-emerald-500 to-emerald-600',
    borderColor: 'border-emerald-500/20',
    skills: ['Core Java', 'Advanced Java', 'REST API Development', 'Spring Boot (Basic)'],
  },
  {
    title: 'API & Integration',
    icon: '🔗',
    color: 'from-sky-400 to-cyan-500',
    borderColor: 'border-sky-400/20',
    skills: ['REST API', 'Axios', 'JSON', 'API Testing', 'Postman'],
  },
  {
    title: 'Database & Tools',
    icon: '🗄',
    color: 'from-teal-500 to-emerald-500',
    borderColor: 'border-teal-500/20',
    skills: ['MySQL (Basic)', 'Git', 'GitHub', 'VS Code', 'Postman', 'Chrome DevTools'],
  },
  {
    title: 'Other Skills',
    icon: '✨',
    color: 'from-sky-500 to-teal-500',
    borderColor: 'border-teal-500/20',
    skills: ['Dashboard Development', 'Form Validation', 'Debugging', 'Code Optimization', 'Agile Basics'],
  },
];

function SkillCard({ title, icon, color, borderColor, skills, delay }: typeof skillCategories[0] & { delay: number }) {
  const ref = useElementAnimation(delay);
  return (
    <div ref={ref} className={`scroll-animate card-hover glass rounded-2xl p-6 border ${borderColor}`}>
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-lg shadow-md`}>
          {icon}
        </div>
        <h3 className="font-display font-semibold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="skill-tag">{skill}</span>
        ))}
      </div>
    </div>
  );
}

const proficiencies = [
  { label: 'React.js', level: 85 },
  { label: 'JavaScript (ES6+)', level: 82 },
  { label: 'HTML & CSS', level: 90 },
  { label: 'Tailwind CSS', level: 80 },
  { label: 'REST API Integration', level: 78 },
  { label: 'Core Java', level: 70 },
];

export default function Skills() {
  const barRef = useElementAnimation(0);

  return (
    <section id="skills" className="py-24 bg-slate-900/50 dark:bg-slate-900/50 relative">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">What I Know</p>
          <h2 className="section-title gradient-text">Technical Skills</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-sky-500 to-cyan-400 mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} {...cat} delay={i * 80} />
          ))}
        </div>

        {/* Proficiency bars */}
        <div ref={barRef} className="scroll-animate glass rounded-2xl p-8 border border-white/5">
          <h3 className="font-display font-semibold text-white text-xl mb-8">Core Proficiencies</h3>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
            {proficiencies.map(({ label, level }) => (
              <div key={label}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-300 text-sm font-medium">{label}</span>
                  <span className="text-cyan-400 text-sm font-semibold">{level}%</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full loading-bar"
                    style={{ width: `${level}%`, transition: 'width 1s ease 0.3s' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
