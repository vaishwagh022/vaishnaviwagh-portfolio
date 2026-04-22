import { useElementAnimation } from '../hooks/useScrollAnimation';

const hobbies = [
  {
    title: 'Rangoli Design',
    description: 'Crafting intricate traditional Rangoli patterns using vibrant colors. This creative practice sharpens my attention to detail and aesthetic sensibility — skills I bring into UI design.',
    icon: '🎨',
    gradient: 'from-sky-500 to-cyan-400',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/20',
  },
  {
    title: 'Listening to Music',
    description: 'Music is my source of focus and inspiration. Whether coding or relaxing, a good playlist sets the right rhythm — much like the flow state I achieve when building great user experiences.',
    icon: '🎵',
    gradient: 'from-cyan-500 to-emerald-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
];

function HobbyCard({ hobby, delay }: { hobby: typeof hobbies[0]; delay: number }) {
  const ref = useElementAnimation(delay);
  return (
    <div ref={ref} className={`scroll-animate card-hover glass rounded-2xl p-8 border ${hobby.border} text-center`}>
      <div className={`w-20 h-20 rounded-2xl ${hobby.bg} border ${hobby.border} flex items-center justify-center mx-auto mb-6 text-4xl`}>
        {hobby.icon}
      </div>
      <h3 className="font-display font-bold text-white text-xl mb-3">{hobby.title}</h3>
      <p className="text-slate-400 leading-relaxed">{hobby.description}</p>
      <div className={`mt-6 w-12 h-1 rounded-full bg-gradient-to-r ${hobby.gradient} mx-auto`} />
    </div>
  );
}

export default function Hobbies() {
  const titleRef = useElementAnimation(0);

  return (
    <section className="py-24 bg-slate-900/50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="scroll-animate text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Beyond Code</p>
          <h2 className="section-title gradient-text">Hobbies & Interests</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-sky-500 to-cyan-400 mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {hobbies.map((hobby, i) => (
            <HobbyCard key={hobby.title} hobby={hobby} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
