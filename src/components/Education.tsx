import { GraduationCap, Calendar } from 'lucide-react';
import { useElementAnimation } from '../hooks/useScrollAnimation';

const education = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Computer Engineering',
    institution: 'SND College of Engineering, Yeola',
    period: '2021 – 2024',
    grade: 'First Class',
    gradient: 'from-sky-500 to-cyan-500',
    border: 'border-sky-500/20',
  },
  {
    degree: 'Diploma in Engineering',
    field: 'Computer Technology',
    institution: 'SND Polytechnic, Yeola',
    period: '2019 – 2021',
    grade: 'First Class with Distinction',
    gradient: 'from-cyan-500 to-emerald-500',
    border: 'border-cyan-500/20',
  },
];

function EduCard({ edu, delay }: { edu: typeof education[0]; delay: number }) {
  const ref = useElementAnimation(delay);
  return (
    <div ref={ref} className="scroll-animate-left relative pl-16 sm:pl-20">
      <div className="absolute left-3.5 sm:left-5.5 top-6">
        <div className="timeline-dot" />
      </div>
      <div className={`glass rounded-2xl p-6 sm:p-8 border ${edu.border} card-hover`}>
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
            <GraduationCap size={22} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <h3 className="font-display font-bold text-white text-lg">{edu.degree}</h3>
                <p className="text-cyan-400 font-medium">{edu.field}</p>
              </div>
              <div className="flex flex-col sm:items-end gap-1.5 text-sm">
                <span className="flex items-center gap-1.5 text-slate-500">
                  <Calendar size={13} />
                  {edu.period}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-medium">
                  {edu.grade}
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm mt-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0" />
              {edu.institution}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Education() {
  const titleRef = useElementAnimation(0);

  return (
    <section id="education" className="py-24 bg-slate-950 dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full"
          style={{ background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="scroll-animate text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Academic Background</p>
          <h2 className="section-title gradient-text">Education</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-sky-500 to-cyan-400 mx-auto" />
        </div>

        <div className="relative">
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500 via-cyan-500 to-transparent opacity-30" />
          <div className="space-y-8">
            {education.map((edu, i) => (
              <EduCard key={edu.degree} edu={edu} delay={i * 150} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
