import React from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { ProjectType } from './StationeryDetail';

const BadgeIconLookup: React.FC<{ iconKey: string; size?: number }> = ({ iconKey, size = 16 }) => {
    switch (iconKey.toLowerCase()) {
        case 'jenkins':
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-[#D24939]">
                    <path d="M19.16 11.23c-.22-.3-.5-.54-.84-.71.18-.32.28-.68.28-1.07 0-1.25-1.02-2.27-2.27-2.27-.47 0-.91.15-1.28.39-.32-.61-.96-1.02-1.7-1.02-.63 0-1.19.3-1.54.78-.44-.45-1.06-.73-1.74-.73-.84 0-1.58.43-2.02 1.09C7.4 7.37 7 7.9 7 8.52c0 .28.06.55.18.8-.75.32-1.28 1.06-1.28 1.93 0 .75.4 1.41 1 1.78-.06.23-.1.48-.1.74 0 1.54 1.25 2.78 2.78 2.78.53 0 1.02-.15 1.45-.4.43.68 1.18 1.14 2.05 1.14.77 0 1.45-.36 1.89-.93.44.47 1.07.77 1.78.77 1.25 0 2.27-1.02 2.27-2.27 0-.32-.07-.63-.2-.9.55-.38.9-.99.9-1.69 0-.46-.14-.88-.36-1.24zM12 17.5c-2.48 0-4.5-2.02-4.5-4.5s2.02-4.5 4.5-4.5 4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z" />
                </svg>
            );
        case 'ansible':
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#EE0000]">
                    <path d="M12 2L2 22h4l3-6h6l3 6h4L12 2z M12 6l3.5 7h-7L12 6z" />
                </svg>
            );
        case 'vue':
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-[#42b883]">
                    <path d="M24,1.45,12,22.22,0,1.45H4.69L12,14.12l7.31-12.67Z" />
                </svg>
            );
        case 'mongo':
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-[#47A248]">
                    <path d="M12 23.5c-.3 0-.6-.2-.7-.5-.9-2.9-2.8-5.9-4.7-8.1-1.7-1.9-3.1-3.6-3.1-5.9 0-3.9 3.8-7 8.5-7s8.5 3.1 8.5 7c0 2.3-1.4 4-3.1 5.9-1.9 2.2-3.8 5.2-4.7 8.1-.1.3-.4.5-.7.5zM12 4c-3.6 0-6.5 2.2-6.5 5 0 1.6 1 3 2.3 4.5 1.7 1.9 3.4 4.6 4.2 7 1-.1 1.7-.1 2.5 0 .8-2.4 2.5-5.1 4.2-7 1.3-1.5 2.3-2.9 2.3-4.5 0-2.8-2.9-5-6.5-5z" />
                </svg>
            );
        default:
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            );
    }
};

// --- ISOLATED DEVOPS SPECIFIC ICONS ---
const GithubIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5a4.8 4.8 0 0 0-1 3.5c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

interface DevopsDetailProps {
    project: ProjectType | null;
    onClose: () => void;
}

export const DevopsDetail: React.FC<DevopsDetailProps> = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#050505] w-full h-screen overflow-y-auto selection:bg-gold selection:text-black text-gray-200 font-sans"
        >
            {/* IMMERSIVE HEADER VIEWPORT IMAGE */}
            <div className="w-full h-[55vh] md:h-[65vh] relative overflow-hidden bg-[#0A0A0A] border-b border-white/5">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

                {/* TOP STATUS CONTROL NAVIGATION */}
                <div className="absolute top-0 w-full px-8 md:px-24 py-8 flex justify-between items-center backdrop-blur-sm bg-gradient-to-b from-black/50 to-transparent">
                    <div className="flex flex-col">
                        <span className="text-white font-extrabold text-xl tracking-tight uppercase">Infrastructure<span className="text-gold">.</span></span>
                        <span className="text-[9px] text-gold font-bold tracking-[0.2em] uppercase">Pipeline Inspection Panel</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="bg-white/5 hover:bg-gold hover:text-black text-white p-3 rounded-full transition-all border border-white/10 flex items-center gap-2 font-bold tracking-widest text-xs uppercase pl-5 pr-5 cursor-pointer"
                    >
                        Close Pipeline <X size={16} />
                    </button>
                </div>
            </div>

            {/* DETAILED MANIFEST ARCHITECTURE */}
            <div className="max-w-6xl mx-auto px-8 md:px-24 pb-32 -mt-16 relative z-10">

                {/* AUTOMATION TOOL TECH PILLS */}
                <div className="flex flex-wrap gap-3 mb-10">
                    {project.techBadges?.map((badge, i) => {
                        // FIX: Safely store the string key before mounting the component lookup
                        const currentIconKey = typeof badge.icon === 'string' ? badge.icon : 'default';

                        return (
                            <div
                                key={i}
                                className={`px-5 py-3 bg-[#0c0c0c] border rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-3 transition-all duration-300 ${badge.glowClass || 'border-white/5'}`}
                            >
                                <BadgeIconLookup iconKey={currentIconKey} size={18} />
                                <span className="text-gray-200">{badge.name}</span>
                            </div>
                        );
                    })}
                </div>

                <p className="text-gold font-bold text-sm tracking-widest uppercase mb-4">
                    Environment Cluster: {project.tech}
                </p>
                <h3 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-8 max-w-4xl leading-[0.95]">
                    {project.title}
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-16 pt-12 border-t border-white/5">
                    {/* ARCHITECTURAL CORE DEFINITION */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">01. Pipeline Core Specifications</h4>
                        <p className="text-gray-300 text-xl md:text-2xl font-light leading-relaxed mb-8">
                            {project.fullDesc}
                        </p>
                    </div>

                    {/* SYSTEM METRICS / ENGINEERING MILESTONES */}
                    <div className="lg:col-span-1">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">02. Automation Objectives</h4>
                        <ul className="space-y-4">
                            {project.features?.map((feature: string, i: number) => (
                                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm font-medium leading-relaxed">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5"></div>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* CLUSTER ACTIONS ROUTING */}
                <div className="flex flex-wrap gap-6 pt-12 mt-16 border-t border-white/5">
                    {project.liveLink !== "#" && (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-10 py-5 bg-white text-black hover:bg-gold font-extrabold uppercase tracking-widest text-xs rounded-full transition-all transform hover:scale-[1.02]"
                        >
                            <ExternalLink size={16} /> Connect Server Endpoints
                        </a>
                    )}

                    {project.isPrivate ? (
                        <div className="flex items-center gap-3 px-10 py-5 bg-[#0A0A0A] border border-white/10 text-gray-600 font-extrabold uppercase tracking-widest text-xs rounded-full cursor-not-allowed">
                            <GithubIcon size={16} /> Secured Source Profile
                        </div>
                    ) : (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-white/10 text-white hover:border-gold hover:text-gold font-extrabold uppercase tracking-widest text-xs rounded-full transition-all"
                        >
                            <GithubIcon size={16} /> Inspect Infrastructure Configuration
                        </a>
                    )}
                </div>

            </div>
        </motion.div>
    );
};