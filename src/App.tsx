import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight, Layers, Mail, Smartphone, MapPin
} from 'lucide-react';
import personal from './image/personal.png'; 

import { ProjectType, ProjectsData as projectsData } from './ProjectDetail/ProjectType';
import { ProjectModal } from './ProjectDetail/StationeryDetail';
import { DevopsDetail } from './ProjectDetail/DevopsDetail';
import { CompilationDetail } from './ProjectDetail/CompilationDetail';
import { DataShardingDetail } from './ProjectDetail/DataShardingDetail';
import { FarmLinkDetail } from './ProjectDetail/FarmlinkDetail';
import WineDetail from './ProjectDetail/WineDetail';

const GithubIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5a4.8 4.8 0 0 0-1 3.5c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const techs = [
  {
    name: 'React',
    color: '#61DAFB',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="#61DAFB" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'Vue.js',
    color: '#42B883',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M2 4h4.5L12 15 17.5 4H22L12 21z" fill="#42B883" />
        <path d="M6.5 4H10l2 4 2-4h3.5L12 12z" fill="#35495E" />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
        <path d="M7 8h2v9.5c0 1.2-.6 2-1.8 2-.9 0-1.5-.5-1.8-1.1l1.1-.7c.1.3.3.5.6.5.4 0 .6-.2.6-.7V8H7z" fill="#000" transform="translate(-1,0)" />
        <path d="M13.5 8c1.1 0 1.9.4 2.4 1.1l-1 .8c-.3-.4-.8-.6-1.4-.6-.7 0-1 .3-1 .8 0 .5.3.7 1.3 1.1l.5.2c1.4.6 2.1 1.3 2.1 2.7 0 1.5-1.1 2.5-2.9 2.5-1.6 0-2.7-.8-3.2-1.9l1.1-.7c.3.7.9 1.2 2 1.2.9 0 1.4-.4 1.4-1.1 0-.6-.4-.9-1.3-1.3l-.5-.2c-1.3-.5-2-1.2-2-2.6C11 9 12 8 13.5 8z" fill="#000" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    color: '#3178C6',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="3" fill="#3178C6" />
        <path d="M3 8h7v1.5H7V17H5.5V9.5H3V8z" fill="#fff" />
        <path d="M13.5 8c1.1 0 1.9.4 2.4 1.1l-1 .8c-.3-.4-.8-.6-1.4-.6-.7 0-1 .3-1 .8 0 .5.3.7 1.3 1.1l.5.2c1.4.6 2.1 1.3 2.1 2.7 0 1.5-1.1 2.5-2.9 2.5-1.6 0-2.7-.8-3.2-1.9l1.1-.7c.3.7.9 1.2 2 1.2.9 0 1.4-.4 1.4-1.1 0-.6-.4-.9-1.3-1.3l-.5-.2c-1.3-.5-2-1.2-2-2.6C11 9 12 8 13.5 8z" fill="#fff" transform="translate(3.5,0)" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    color: '#68A063',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7v10l9 5 9-5V7z" fill="#68A063" />
        <path d="M12 2v20M12 12L3 7M12 12l9-5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Express',
    color: '#ffffff',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <text x="2" y="17" fontFamily="monospace" fontWeight="900" fontSize="11" fill="#ffffff">EX</text>
        <path d="M3 19h18" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'ASP.NET',
    color: '#512BD4',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="3" fill="#512BD4" />
        <path d="M5 16l4-8 4 8M7 13h4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 10v6M16 10h2a2 2 0 0 1 0 3h-2" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    color: '#336791',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="9" rx="6" ry="6.5" fill="#336791" />
        <ellipse cx="6.5" cy="7" rx="2" ry="2.5" fill="#336791" />
        <ellipse cx="17.5" cy="7" rx="2" ry="2.5" fill="#336791" />
        <circle cx="9.5" cy="8" r="1" fill="#fff" />
        <circle cx="14.5" cy="8" r="1" fill="#fff" />
        <circle cx="9.8" cy="8" r="0.4" fill="#336791" />
        <circle cx="14.8" cy="8" r="0.4" fill="#336791" />
        <path d="M10 13 Q8 15 9 18 Q9.5 20 11 19" stroke="#336791" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M10.5 13.5 Q9 14.5 9.5 16" stroke="#fff" strokeWidth="1" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    color: '#47A248',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 2c0 0-6 4-6 10a6 6 0 0 0 12 0C18 6 12 2 12 2z" fill="#47A248" />
        <path d="M12 2v20" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 4 Q14 8 13 14" stroke="#6ECF6E" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'MySQL',
    color: '#F29111',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M3 13 Q6 8 11 9 Q15 10 18 7 Q20 5 21 6 Q19 8 18 11 Q17 14 14 15 Q10 16 8 19 Q6 21 5 20 Q6 17 7 16 Q5 15 3 13z" fill="#00618A" />
        <path d="M14 9 Q16 6 18 7 Q17 9 15 10z" fill="#F29111" />
        <circle cx="10" cy="11" r="0.8" fill="#fff" />
        <path d="M7 16 Q4 18 3 17 Q4 15 5 14z" fill="#00618A" />
      </svg>
    ),
  },
  {
    name: 'Jenkins',
    color: '#D33833',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" fill="#D33833" />
        <circle cx="12" cy="9" r="3" fill="#fff" />
        <path d="M7 19c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    name: 'Ansible',
    color: '#EE0000',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" fill="#EE0000" />
        <path d="M9 17l3-10 3 10" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 14l4 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [status, setStatus] = useState('');

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const handleMailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', question);
    const res = await fetch("https://formspree.io/f/xdajozwj", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      setStatus('sent');
      setName('');
      setEmail('');
      setQuestion('');
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 selection:bg-gold selection:text-black font-sans">

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 px-8 md:px-24 py-6 flex justify-between items-center"
      >
        <div className="flex flex-col">
          <span className="text-white font-extrabold text-2xl tracking-tight uppercase">Rithika<span className="text-gold">.</span></span>
          <span className="text-[10px] text-gold font-bold tracking-[0.2em] uppercase">GIC Engineer</span>
        </div>

        <nav className="hidden md:flex gap-10">
          <HeaderLink href="#about" label="Identity" />
          <HeaderLink href="#work" label="Inventory" />
          <HeaderLink href="#contact" label="Connect" />
        </nav>

        <div className="flex gap-5">
          <motion.a
            whileHover={{ scale: 1.1, color: "#D4AF37" }}
            href="https://github.com/Rithika11-ui/GIC26-G05.git"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon size={22} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1, color: "#D4AF37" }}
            href="#contact"
            onClick={handleMailClick}
          >
            <Mail size={22} />
          </motion.a>
        </div>
      </motion.header>

      <main className="pt-32 overflow-x-hidden">

        {/* ABOUT SECTION */}
        <section id="about" className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-between px-8 md:px-24 py-12 gap-16">
          <motion.div initial="initial" animate="animate" className="max-w-3xl">
            <motion.h2 variants={fadeInUp} className="text-gold font-bold text-sm tracking-widest uppercase mb-6">ITC Year 4 Engineering</motion.h2>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-7xl font-extrabold text-white leading-[0.85] mb-10 tracking-tighter">
              Information & <br />
              <span className="text-gray-500">Communication.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-gray-400 text-lg md:text-2xl max-w-2xl leading-relaxed">
              Senior engineering student at <strong className="text-white">ITC</strong>. Exploring Full-Stack development and building real-world systems with modern technologies.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10, rotate: 1 }}
            className="relative w-full max-w-[440px] h-[580px] bg-[#0A0A0A] border-2 border-white/10 rounded-2xl p-8 flex flex-col justify-between shadow-2xl lg:mr-16"
          >
            <div className="w-full h-[100%] bg-[#151515] border border-white/5 flex items-center justify-center rounded-xl overflow-hidden transition-all duration-700">
              <img
                src={personal}
                alt="Rithika"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="mt-6">
              <h3 className="text-white text-3xl font-extrabold">RITHIKA PHE</h3>
              <p className="text-gold font-bold mt-1 tracking-tight">GIC Engineer Y4</p>
            </div>
          </motion.div>
        </section>

        {/* PROJECTS GRID SECTION */}
        <section id="work" className="py-32 px-8 md:px-24 bg-[#080808]">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-gold font-bold text-sm tracking-widest uppercase mb-4">01. Inventory</h2>
              <h3 className="text-6xl text-white font-extrabold tracking-tighter">Selected Projects</h3>
            </div>
            <p className="text-gray-500 max-w-xs font-medium italic">High-performance systems built with modern engineering frameworks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((proj: ProjectType, idx: number) => (
              <motion.div
                key={idx}
                onClick={() => setSelectedProject(proj)}
                whileHover={{ y: -10 }}
                className="group bg-[#0A0A0A] border-2 border-white/5 hover:border-gold/50 rounded-2xl flex flex-col justify-between min-h-[410px] transition-all relative overflow-hidden cursor-pointer"
              >
                <div className="w-full aspect-video bg-[#151515] overflow-hidden border-b border-white/5 relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    sizes="(max-w-768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-10 pb-0">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-3xl font-extrabold text-gray-800">0{idx + 1}</span>
                    <ArrowUpRight size={28} className="text-white group-hover:text-gold transition-all" />
                  </div>
                  <div className="mb-4 inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gold font-bold uppercase tracking-wider">
                    {proj.tech.split(' / ')[0]}
                  </div>
                  <h4 className="text-3xl font-extrabold text-white mb-4 group-hover:text-gold transition-colors">{proj.title}</h4>
                  <p className="text-lg text-gray-400 font-medium leading-relaxed">{proj.desc}</p>
                </div>
                <div className="mt-10 pt-6 border-t border-white/10 text-sm font-bold text-gray-500 uppercase">
                  Environment: <span className="text-white font-semibold">{proj.tech}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TECHNICAL SKILLS — Logo Grid */}
        <section id="skills" className="py-32 px-8 md:px-24 bg-[#050505] border-t border-white/5">
          <div className="mb-20">
            <h2 className="text-gold font-bold text-sm tracking-widest uppercase mb-4">02. Core Capabilities</h2>
            <h3 className="text-6xl text-white font-extrabold tracking-tighter">Technical Skills</h3>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5">
            {techs.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ scale: 1.08 }}
                className="flex flex-col items-center justify-center gap-4 bg-[#0A0A0A] border-2 border-white/5 rounded-2xl p-6 aspect-square transition-all duration-300 cursor-default group"
                style={{ '--tw-border-opacity': '1' } as React.CSSProperties}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = tech.color + '66';
                  e.currentTarget.style.boxShadow = `0 0 24px 4px ${tech.color}22, 0 0 8px 2px ${tech.color}33`;
                  e.currentTarget.style.background = `radial-gradient(ellipse at center, ${tech.color}18 0%, #0A0A0A 70%)`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.boxShadow = '';
                  e.currentTarget.style.background = '';
                }}
              >
                <div className="w-16 h-16 flex items-center justify-center">
                  {tech.icon}
                </div>
                <span
                  className="text-[11px] font-bold uppercase tracking-wider text-center leading-tight transition-colors duration-300"
                  style={{ color: '#6B7280' }}
                  onMouseEnter={e => ((e.target as HTMLElement).style.color = tech.color)}
                  onMouseLeave={e => ((e.target as HTMLElement).style.color = '#6B7280')}
                >
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" className="bg-[#0A0A0A] border-t border-white/5 pt-32 pb-12 px-8 md:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
            <div>
              <h2 className="text-6xl md:text-7xl font-extrabold text-white tracking-tighter mb-10 italic">
                Ready to <br /> collaborate?
              </h2>

              <form onSubmit={handleFormSubmit} className="space-y-4 max-w-md bg-[#050505] p-6 rounded-2xl border border-white/5 shadow-xl">
                <span className="text-xs text-gold font-bold tracking-widest uppercase block mb-2">Send a Message</span>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#111] border border-white/10 rounded-xl p-4 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold/40 transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#111] border border-white/10 rounded-xl p-4 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold/40 transition-colors"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Ask me a question..."
                    rows={4}
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="w-full bg-[#111] border border-white/10 rounded-xl p-4 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold/40 transition-colors resize-none"
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "#D4AF37", color: "#000" }}
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  className="w-full py-4 border-2 border-gold text-gold font-bold uppercase rounded-full tracking-widest text-xs transition-all duration-300 bg-transparent text-center cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent ✓' : 'Submit Inquiry'}
                </motion.button>
                {status === 'sent' && (
                  <p className="text-green-400 text-xs text-center mt-2">Thanks! I'll get back to you soon.</p>
                )}
                {status === 'error' && (
                  <p className="text-red-400 text-xs text-center mt-2">Something went wrong. Please try again.</p>
                )}
              </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 self-end">
              <FooterContact icon={<Smartphone size={20} />} label="Phone" value="+855 81 551 097" />
              <FooterContact icon={<Mail size={20} />} label="Email" value="pherithika@gmail.com" />
              <FooterContact icon={<MapPin size={20} />} label="Location" value="ITC  Phnom Penh" />
              <FooterContact icon={<Layers size={20} />} label="Education" value="GIC Engineer Y4" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-12 opacity-40">
            <p className="text-xs font-bold uppercase tracking-widest mb-4 md:mb-0">P. Rithika  2026  Phnom Penh</p>
            <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>© All Rights Reserved</span>
            </div>
          </div>
        </footer>
      </main>

      <AnimatePresence mode="wait">
        {selectedProject && selectedProject.title.toLowerCase().includes('pipeline') ? (
          <DevopsDetail key="devops-detail" project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject && selectedProject.title.toLowerCase().includes('compilation') ? (
          <CompilationDetail key="compilation-detail" project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject && selectedProject.title.toLowerCase().includes('sharding') ? (
          <DataShardingDetail key="sharding-detail" project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject && selectedProject.title.toLowerCase().includes('farm') ? (
          <FarmLinkDetail key="farmlink-detail" project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject && selectedProject.title.toLowerCase().includes('wine') ? (
          <WineDetail key="wine-detail" project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject ? (
          <ProjectModal key="project-modal" project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : null}
      </AnimatePresence>

    </div>
  );
};

const HeaderLink = ({ href, label }: { href: string, label: string }) => (
  <motion.a
    whileHover={{ color: "#D4AF37", y: -2 }}
    href={href}
    className="text-sm font-bold uppercase tracking-widest text-gray-400"
  >
    {label}
  </motion.a>
);

const FooterContact = ({ icon, label, value }: { icon: any, label: string, value: string }) => (
  <div className="space-y-3">
    <div className="text-gold flex items-center gap-2">
      {icon}
      <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{label}</span>
    </div>
    <p className="text-xl font-bold text-white tracking-tight">{value}</p>
  </div>
);



export default App;
