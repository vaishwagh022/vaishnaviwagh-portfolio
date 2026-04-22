import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return p + 4;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950">
      <div className="relative mb-8">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center shadow-lg animate-pulse-glow">
          <span className="font-display font-bold text-2xl text-white">VW</span>
        </div>
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 opacity-30 blur-md animate-pulse" />
      </div>

      <p className="text-slate-400 text-sm mb-6 tracking-widest uppercase font-medium">
        Portfolio
      </p>

      <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full loading-bar rounded-full transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-slate-600 text-xs mt-3 tabular-nums">{progress}%</p>
    </div>
  );
}
