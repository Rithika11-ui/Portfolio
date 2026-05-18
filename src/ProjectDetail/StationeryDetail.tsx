import React from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

// Import image relative to this file's location inside ProjectDetail folder
import stationeryImg from '../image/stationery.png';

// --- BRAND COLOR TECH ICONS (SVGs) ---
const VueIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 256 221"
        fill="none"
        className='block shrink-0'
    >
        <path d="M204.8 0H256L128 220.8L0 0h51.2L128 132.4L204.8 0z" fill="#42b883" />
        <path d="M0 0l128 220.8L256 0h-51.2L128 132.4L51.2 0H0z" fill="#35495E" />
    </svg>
);

const ExpressIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 512 512"
        fill="none"
        className='block shrink-0'
    >
        <path
            d="M239.5 289.4H47.1C51.1 366.1 110.8 424 186.2 424c43.6 0 83.1-19.1 110.7-50l32.5 24.3C293.7 441.7 242.3 466 186.2 466 84.7 466 1.1 386.3 0 286.4h239.5v3zM186.2 46c100.8 0 183.9 78.4 186.2 177.4H0C2.3 124.4 85.4 46 186.2 46zM321.4 283.6l71.2-101.4 72 101.4h47.4L421.2 153.2 508.8 28.5h-47.4l-68.6 98.4-69.4-98.4h-47.4l88 124.7-90.2 130.4h47.4z"
            fill="#FFFFFF"
        />
    </svg>
);

const MongoIcon = () => (
    <svg className="w-4 h-4 text-[#47A248] " viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 22c4.5-3.5 6-7.8 6-11.2C18 6.2 15 2 12 2S6 6.2 6 10.8c0 3.4 1.5 7.7 6 11.2zm-1.3-9.5c.3.5.7.8 1.3.8s1-.3 1.3-.8c.3-.6.4-1.4.4-2.3 0-.9-.1-1.7-.4-2.2-.3-.5-.7-.8-1.3-.8s-1 .3-1.3.8c-.3.5-.4 1.3-.4 2.2 0 .9.1 1.7.4 2.3z" fill="#47A248" />
    </svg>
);

const NodeIcon = () => (
    <svg className="w-4 h-4 text-[#339933] " viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm1 15.7c0 .4-.3.7-.7.7h-1.5c-.4 0-.7-.3-.7-.7v-1.5c0-.4.3-.7.7-.7h1.5c.4 0 .7.3.7.7v1.5zm0-4.5c0 .4-.3.7-.7.7h-1.5c-.4 0-.7-.3-.7-.7V7.5c0-.4.3-.7.7-.7h1.5c.4 0 .7.3.7.7v5.7z" />
    </svg>
);

const DefaultTechIcon = () => (
    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
);

const GithubIcon = ({ size = 16, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5a4.8 4.8 0 0 0-1 3.5c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

export interface ProjectType {
    title: string;
    desc: string;
    tech: string;
    techBadges: { name: string; icon: React.ReactNode; glowClass: string }[]; 
    image: string;
    fullDesc: string;
    features: string[];
    liveLink: string;
    githubLink: string;
    isPrivate: boolean;
}

export const projectsData: ProjectType[] = [
    {
        title: "Vino & VinoAdmin",
        desc: "Luxury E-Commerce with RBAC and decoupled Admin dashboard.",
        tech: "ASP.NET / React",
        techBadges: [
            { name: "ASP.NET Core", icon: <NodeIcon />, glowClass: "hover:shadow-[0_0_15px_rgba(51,153,51,0.2)] border-green-600/30" },
            { name: "React.js", icon: <NodeIcon />, glowClass: "hover:shadow-[0_0_15px_rgba(97,218,251,0.2)] border-blue-400/30" }
        ],
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=600",
        fullDesc: "A complete luxury e-commerce solution tailored for high-end beverages. Includes secure Role-Based Access Control and a completely decoupled administrative dashboard for inventory and order management.",
        features: ["Decoupled Admin Dashboard", "Role-Based Access Control (RBAC)", "Secure Authentication frameworks"],
        liveLink: "#",
        githubLink: "#",
        isPrivate: false
    },
    {
        title: "ConfSys",
        desc: "Enterprise Conference management system with tiered permissions.",
        tech: "Spring Boot / PostgreSQL",
        techBadges: [
            { name: "Spring Boot", icon: <DefaultTechIcon />, glowClass: "border-white/10" },
            { name: "PostgreSQL", icon: <DefaultTechIcon />, glowClass: "border-white/10" }
        ],
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600",
        fullDesc: "An enterprise-grade system designed to handle large-scale conference bookings, attendee tracking, and tiered user permissions for admins, speakers, and guests.",
        features: ["Tiered Permissions Logic", "Real-time Attendee Tracking", "High-concurrency database handling"],
        liveLink: "#",
        githubLink: "#",
        isPrivate: false
    },
    {
        title: "Data Sharding Logic",
        desc: "Implementation of horizontal scaling and database shifting.",
        tech: "MySQL / Docker",
        techBadges: [
            { name: "MySQL", icon: <DefaultTechIcon />, glowClass: "border-white/10" },
            { name: "Docker", icon: <DefaultTechIcon />, glowClass: "border-white/10" }
        ],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600",
        fullDesc: "A backend architecture project focusing on database optimization. Implemented horizontal sharding logic to distribute heavy data loads across multiple nodes seamlessly.",
        features: ["Horizontal Scaling", "Database Shifting Maps", "Docker Containerization"],
        liveLink: "#",
        githubLink: "#",
        isPrivate: false
    },
    {
        title: "CPU Scheduling",
        desc: "System-level simulator for FCFS, SJF, and Round Robin.",
        tech: "C++ / Logic",
        techBadges: [
            { name: "C++", icon: <DefaultTechIcon />, glowClass: "border-white/10" }
        ],
        image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=600",
        fullDesc: "A low-level system simulator built in C++ to visualize and calculate the efficiency of core operating system CPU scheduling algorithms.",
        features: ["FCFS & SJF Algorithms", "Round Robin Implementation", "Performance Metrics Output"],
        liveLink: "#",
        githubLink: "#",
        isPrivate: false
    },
    {
        title: "GIC Networking",
        desc: "Major project: Secure network communication protocols.",
        tech: "Bash / Linux",
        techBadges: [
            { name: "Bash Scripting", icon: <DefaultTechIcon />, glowClass: "border-white/10" }
        ],
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600",
        fullDesc: "Engineered secure communication protocols across Linux environments using advanced bash scripting and network security fundamentals.",
        features: ["Custom Protocol Engineering", "Secure Shell Scripting", "Network Penetration Testing Concepts"],
        liveLink: "#",
        githubLink: "#",
        isPrivate: false
    },
    {
        title: "Stationery E-Commerce",
        desc: "Dedicated storefront for educational supplies with versatile payments.",
        tech: "Vue.js / Express / MongoDB",
        techBadges: [
            { name: "Vue.js", icon: <VueIcon />, glowClass: "shadow-[0_0_15px_rgba(66,184,131,0.15)] border-[#42b883]/30 text-white" },
            { name: "Express.js", icon: <ExpressIcon />, glowClass: "shadow-[0_0_15px_rgba(247,223,30,0.1)] border-[#f7df1e]/30 text-white" },
            { name: "MongoDB", icon: <MongoIcon />, glowClass: "shadow-[0_0_15px_rgba(71,162,72,0.15)] border-[#47A248]/30 text-white" },
            { name: "Node.js Architecture", icon: <NodeIcon />, glowClass: "shadow-[0_0_15px_rgba(51,153,51,0.15)] border-[#339933]/30 text-white" }
        ],
        image: stationeryImg,
        fullDesc: "A full-stack e-commerce platform custom-engineered specifically to serve educational supply ecosystems. Users can interactively explore and purchase essential study tools including premium pens, books, bags, pencil boxes, and other educational materials. Built with optimized performance and user journeys in mind.",
        features: [
            "Dynamic supply catalogs (Books, Bags, Pens, Boxes)",
            "Flexible Checkout: Cash on Delivery & Scan-to-Pay QR Codes",
            "Robust REST API integration handling heavy inventory updates"
        ],
        liveLink: "https://stationery-store-ip.vercel.app",
        githubLink: "https://github.com/Kimheng-SOK/Stationery-Store",
        isPrivate: false
    }
];

interface ProjectModalProps {
    project: ProjectType | null;
    onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#050505] w-full h-screen overflow-y-auto selection:bg-gold selection:text-black text-gray-200"
        >
            {/* FULL SCREEN MAIN HERO IMAGE WRAPPER */}
            <div className="w-full h-[55vh] md:h-[65vh] relative overflow-hidden bg-[#0A0A0A] border-b border-white/5">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

                {/* TOP INTERACTIVE FLOATING BAR */}
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

            {/* FULL SCREEN CORE BODY COMPOSITION */}
            <div className="max-w-6xl mx-auto px-8 md:px-24 pb-32 -mt-16 relative z-10">

                {/* TECH STACK CHIPS SECTION - Vibrant Brand Colors & Icons */}
                <div className="flex flex-wrap gap-3 mb-10">
                    {project.techBadges.map((badge, i) => (
                        <div
                            key={i}
                            className={`px-5 py-3 bg-[#0c0c0c] border rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-3 transition-all duration-300 ${badge.glowClass}`}
                        >
                            {badge.icon}
                            <span className="text-gray-200">{badge.name}</span>
                        </div>
                    ))}
                </div>

                <p className="text-gold font-bold text-sm tracking-widest uppercase mb-4">
                    Core Engine: {project.tech}
                </p>
                <h3 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-8 max-w-4xl leading-[0.95]">
                    {project.title}
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-16 pt-12 border-t border-white/5">
                    {/* LEFT SIDE: SUMMARY OVERVIEW */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">01. Architectural Specification</h4>
                        <p className="text-gray-300 text-xl md:text-2xl font-light leading-relaxed mb-8">
                            {project.fullDesc}
                        </p>
                    </div>

                    {/* RIGHT SIDE: TARGET GOALS & FEATURES */}
                    <div className="lg:col-span-1">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">02. Engineering Milestones</h4>
                        <ul className="space-y-4">
                            {project.features.map((feature: string, i: number) => (
                                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm font-medium leading-relaxed">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5"></div>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* BOTTOM ACTIONS BAR */}
                <div className="flex flex-wrap gap-6 pt-12 mt-16 border-t border-white/5">
                    {project.liveLink !== "#" && (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-10 py-5 bg-white text-black hover:bg-gold font-extrabold uppercase tracking-widest text-xs rounded-full transition-all transform hover:scale-[1.02]"
                        >
                            <ExternalLink size={16} /> Mount Live Application
                        </a>
                    )}

                    {project.isPrivate ? (
                        <div className="flex items-center gap-3 px-10 py-5 bg-[#0A0A0A] border border-white/10 text-gray-600 font-extrabold uppercase tracking-widest text-xs rounded-full cursor-not-allowed">
                            <GithubIcon size={16} /> Private Module (Source Secured)
                        </div>
                    ) : (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-white/10 text-white hover:border-gold hover:text-gold font-extrabold uppercase tracking-widest text-xs rounded-full transition-all"
                        >
                            <GithubIcon size={16} /> Inspect Source Infrastructure
                        </a>
                    )}
                </div>

            </div>
        </motion.div>
    );
};