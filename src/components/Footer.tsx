import { Linkedin, Github, Mail, Heart, ArrowUp } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center shadow-md">
                <span className="font-display font-bold text-sm text-white">VW</span>
              </div>
              <span className="font-display font-semibold text-white">
                Vaishnavi<span className="text-cyan-400">.</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Frontend Developer building modern, responsive, and scalable web applications with a passion for clean UI/UX.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.linkedin.com/in/vaishnavi-wagh-783a80274/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass border border-white/10 text-slate-500 hover:text-sky-400 hover:border-sky-500/30 transition-all duration-200"
              >
                <Linkedin size={16} />
              </a>
              <a href="#" className="p-2 rounded-lg glass border border-white/10 text-slate-500 hover:text-slate-200 hover:border-white/20 transition-all duration-200">
                <Github size={16} />
              </a>
              <a href="mailto:vaishwagh02@gmail.com" className="p-2 rounded-lg glass border border-white/10 text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-slate-300 font-semibold text-sm uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className="text-slate-500 hover:text-cyan-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-300 font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-slate-500">
              <p>vaishwagh02@gmail.com</p>
              <p>+91-</p>
              <p>Maharashtra, India</p>
              <div className="pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-sm">Open to opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm flex items-center gap-1.5">
            Built with <Heart size={13} className="text-red-500 fill-red-500" /> by Vaishnavi Wagh &copy; {new Date().getFullYear()}
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-600 hover:text-cyan-400 text-sm transition-colors duration-200 group"
          >
            Back to top
            <div className="p-1 rounded-md glass border border-white/10 group-hover:border-cyan-500/30 transition-colors">
              <ArrowUp size={13} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
