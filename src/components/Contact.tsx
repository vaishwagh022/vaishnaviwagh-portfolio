import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react';
import { useElementAnimation } from '../hooks/useScrollAnimation';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'vaishwagh02@gmail.com', href: 'mailto:vaishwagh02@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91-', href: 'tel:+91' },
  { icon: MapPin, label: 'Location', value: 'Maharashtra, India', href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const leftRef = useElementAnimation(0);
  const rightRef = useElementAnimation(150);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full"
          style={{ background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full"
          style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Let's Talk</p>
          <h2 className="section-title gradient-text">Get In Touch</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-sky-500 to-cyan-400 mx-auto mb-4" />
          <p className="section-subtitle">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div ref={leftRef} className="scroll-animate-left lg:col-span-2 space-y-6">
            <div className="glass rounded-2xl p-6 border border-white/5">
              <h3 className="font-display font-semibold text-white text-lg mb-6">Contact Information</h3>
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center flex-shrink-0 shadow-md">
                      <Icon size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-widest mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-slate-200 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium break-all">
                          {value}
                        </a>
                      ) : (
                        <p className="text-slate-200 text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-white/5">
              <h3 className="font-display font-semibold text-white text-base mb-4">Find me on</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/vaishnavi-wagh-783a80274/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 hover:bg-sky-500/20 hover:border-sky-500/40 transition-all duration-200 text-sm font-medium"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-700/30 border border-slate-700/50 text-slate-300 hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-200 text-sm font-medium"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-sm font-medium">Available for work</span>
              </div>
              <p className="text-slate-500 text-sm">
                Open to frontend developer roles, freelance projects, and collaborations.
              </p>
            </div>
          </div>

          {/* Form */}
          <div ref={rightRef} className="scroll-animate-right lg:col-span-3">
            <div className="glass rounded-2xl p-6 sm:p-8 border border-white/5">
              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} className="text-emerald-400" />
                  </div>
                  <h3 className="font-display font-bold text-white text-xl mb-2">Message Sent!</h3>
                  <p className="text-slate-400">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-400 text-xs uppercase tracking-widest mb-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all duration-200 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs uppercase tracking-widest mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all duration-200 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs uppercase tracking-widest mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all duration-200 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs uppercase tracking-widest mb-2">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all duration-200 text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full btn-primary flex items-center justify-center gap-2 py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
