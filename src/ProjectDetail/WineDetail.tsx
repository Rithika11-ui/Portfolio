import React from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

// --- CUSTOM SVG LOGO ICONS FOR WINE TECH ENVIRONMENT ---
const DotNetIcon = () => (
    <svg className="w-4 h-4 text-[#512BD4]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l5.5 4.5-5.5 4.5z" />
    </svg>
);

const ReactIcon = () => (
    <svg className="w-4 h-4 text-[#61DAFB] animate-[spin_20s_linear_infinite]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12c0-1.1-.38-2.18-1.07-3.13.7-1 1.07-2.16 1.07-3.3 0-2.43-1.74-4.43-4.04-4.83C16.93.28 15.63 0 14.25 0c-1.84 0-3.56.5-5.06 1.38C8.12.63 6.66.2 5.13.2 2.7.2.7 2.2.7 4.67c0 1.25.46 2.4 1.27 3.28C1.22 8.92.8 10.37.8 11.9c0 1.84.6 3.55 1.63 4.97-.8 1-1.23 2.25-1.23 3.53 0 2.47 2 4.47 4.47 4.47 1.44 0 2.8-.54 3.84-1.46 1.48.86 3.2 1.37 5.03 1.37 2.1 0 4.05-.65 5.67-1.77.9.72 2.06 1.13 3.27 1.13 2.76 0 5-2.24 5-5 0-1.4-.53-2.72-1.48-3.73.66-.92 1.04-2.04 1.04-3.22z" />
    </svg>
);

const MongoIcon = () => (
    <svg className="w-4 h-4 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 22c4.5-3.5 6-7.8 6-11.2C18 6.2 15 2 12 2S6 6.2 6 10.8c0 3.4 1.5 7.7 6 11.2zm-1.3-9.5c.3.5.7.8 1.3.8s1-.3 1.3-.8c.3-.6.4-1.4.4-2.3 0-.9-.1-1.7-.4-2.2-.3-.5-.7-.8-1.3-.8s-1 .3-1.3.8c-.3.5-.4 1.3-.4 2.2 0 .9.1 1.7.4 2.3z" fill="#47A248" />
    </svg>
);

const GithubIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5a4.8 4.8 0 0 0-1 3.5c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

interface WineDetailProps {
    project?: any;
    onClose: () => void;
}

export default function WineDetail({ project, onClose }: WineDetailProps) {

    const techBadges = [
        { name: "ASP.NET Core", icon: <DotNetIcon />, glowClass: "shadow-[0_0_15px_rgba(81,43,212,0.15)] border-[#512BD4]/30 text-white" },
        { name: "React.js", icon: <ReactIcon />, glowClass: "shadow-[0_0_15px_rgba(97,218,251,0.15)] border-[#61DAFB]/30 text-white" },
        { name: "MongoDB", icon: <MongoIcon />, glowClass: "shadow-[0_0_15px_rgba(71,162,72,0.15)] border-[#47A248]/30 text-white" }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#050505] w-full h-screen overflow-y-auto selection:bg-gold selection:text-black text-gray-200"
        >
            {/* FULL SCREEN HERO DECK IMAGE WRAPPER */}
            <div className="w-full h-[55vh] md:h-[65vh] relative overflow-hidden bg-[#0A0A0A] border-b border-white/5">
                <img
                    src={project?.image || "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200"}
                    alt={project?.title || "Wine E_Commerce"}
                    className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

                {/* TOP FLOATING CONTROL CONSOLE */}
                <div className="absolute top-0 w-full px-8 md:px-24 py-8 flex justify-between items-center backdrop-blur-sm bg-gradient-to-b from-black/50 to-transparent">
                    <div className="flex flex-col">
                        <span className="text-white font-extrabold text-xl tracking-tight uppercase">Inventory<span className="text-gold">.</span></span>
                        <span className="text-[9px] text-gold font-bold tracking-[0.2em] uppercase">Project Manifest</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="bg-white/5 hover:bg-gold hover:text-black text-white p-3 rounded-full transition-all border border-white/10 flex items-center gap-2 font-bold tracking-widest text-xs uppercase pl-5 pr-5"
                    >
                        Close Viewer <X size={16} />
                    </button>
                </div>
            </div>

            {/* CORE PORTFOLIO SPECIFICATION DECK */}
            <div className="max-w-6xl mx-auto px-8 md:px-24 pb-32 -mt-16 relative z-10">

                {/* METRIC CHIPS AREA */}
                <div className="flex flex-wrap gap-3 mb-10">
                    {techBadges.map((badge, i) => (
                        <div
                            key={i}
                            className={`px-5 py-3 bg-[#0c0c0c] border rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-3 transition-all duration-300 ${badge.glowClass}`}
                        >
                            {badge.icon}
                            <span>{badge.name}</span>
                        </div>
                    ))}
                </div>

                <p className="text-gold font-bold text-sm tracking-widest uppercase mb-4">
                    Core Engine: {project?.tech || "ASP.NET / React / MongoDB"}
                </p>
                <h3 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-8 max-w-4xl leading-[0.95]">
                    {project?.title || "Wine E_Commerce"}
                </h3>

                {/* TWO COLUMN WORKSPACE ENGINE */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-16 pt-12 border-t border-white/5">
                    {/* LEFT CONTAINER: ARCHITECTURAL HIGHLIGHTS */}
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">01. Architectural Specification</h4>
                            <p className="text-gray-300 text-xl md:text-2xl font-light leading-relaxed mb-8">
                                {project?.fullDesc || "An elite digital commerce environment built to support luxury artisanal wine transactions. Features strict decoupled asset inventory architectures, responsive client composition, and high-security OAuth framework matrices."}
                            </p>
                        </div>
                    </div>
                </div>

                {/* BOTTOM GLOBAL ACTION INFRASTRUCTURE */}
                <div className="flex flex-wrap gap-6 pt-12 mt-16 border-t border-white/5">
                    {project?.liveLink && project.liveLink !== "#" && (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-10 py-5 bg-white text-black hover:bg-gold font-extrabold uppercase tracking-widest text-xs rounded-full transition-all transform hover:scale-[1.02]"
                        >
                            <ExternalLink size={16} /> Mount Live Application
                        </a>
                    )}
                    <a
                        href={project?.githubLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-white/10 text-white hover:border-gold hover:text-gold font-extrabold uppercase tracking-widest text-xs rounded-full transition-all"
                    >
                        <GithubIcon size={16} /> Inspect Source Infrastructure
                    </a>
                </div>
            </div>

        </motion.div>
    );
}