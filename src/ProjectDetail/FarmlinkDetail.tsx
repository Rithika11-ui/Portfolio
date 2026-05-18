import React from 'react';
import { motion } from 'framer-motion';
import { X, Layout, Users, ShieldCheck, ShoppingCart, CreditCard, Layers, Key } from 'lucide-react';
import { ProjectType } from './ProjectType';

interface FarmLinkDetailProps {
    project: ProjectType | null;
    onClose: () => void;
}

export const FarmLinkDetail: React.FC<FarmLinkDetailProps> = ({ project, onClose }) => {
    if (!project) return null;

    const milestoneModules = [
        { name: "User Authentication Profiles", status: "COMPLETED", desc: "Secure multi-role account assignment managed via Supabase identity pools.", icon: <Key size={16} className="text-green-400" /> },
        { name: "Symmetric System Checkout Engine", status: "COMPLETED", desc: "Centralized cart buffering with dynamic inventory allocation streams.", icon: <ShoppingCart size={16} className="text-green-400" /> },
        { name: "E_Commerce Product", status: "COMPLETED", desc: "User Can buy any farmer's Products.", icon: <ShoppingCart size={16} className="text-green-400" /> },
        { name: "Payment Gateway Core Integration", status: "IN_PROGRESS", desc: "Currently wiring transactional callback webhooks for secure validation.", icon: <CreditCard size={16} className="text-gold animate-pulse" /> },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#050505] w-full h-screen overflow-y-auto selection:bg-gold selection:text-black text-gray-200 font-sans"
        >
            {/* HERO HERO VIEWPORT */}
            <div className="w-full h-[50vh] md:h-[55vh] relative overflow-hidden bg-[#0A0A0A] border-b border-white/5">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-20 filter saturate-50 contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

                {/* HEADER CONTROL TERMINAL */}
                <div className="absolute top-0 w-full px-8 md:px-24 py-8 flex justify-between items-center backdrop-blur-sm bg-gradient-to-b from-black/50 to-transparent">
                    <div className="flex flex-col">
                        <span className="text-white font-extrabold text-xl tracking-tight uppercase">Farm Link<span className="text-gold">.</span></span>
                        <span className="text-[9px] text-gold font-bold tracking-[0.2em] uppercase">E-Commerce Marketplace Panel</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="bg-white/5 hover:bg-gold hover:text-black text-white p-3 rounded-full transition-all border border-white/10 flex items-center gap-2 font-bold tracking-widest text-xs uppercase pl-5 pr-5 cursor-pointer"
                    >
                        Close Blueprint <X size={16} />
                    </button>
                </div>
            </div>

            {/* MAIN ARCHITECTURE BODY */}
            <div className="max-w-6xl mx-auto px-8 md:px-24 pb-32 -mt-20 relative z-10">

                {/* STATUS PROGRESS HEADER RADIAL */}
                <div className="flex flex-wrap items-center justify-between gap-6 mb-10 bg-[#0A0A0A] border border-white/10 p-6 rounded-2xl shadow-xl">
                    <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 flex items-center justify-center rounded-full border-4 border-white/5 border-t-gold animate-spin-slow">
                            <span className="text-sm font-black text-white font-mono absolute transform -rotate-0">70%</span>
                        </div>
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-gold block">Current Development Phase</span>
                            <span className="text-lg font-bold text-white uppercase tracking-tight">Active Ongoing Implementation</span>
                        </div>
                    </div>
                    <div className="flex gap-3 text-xs font-mono">
                        <span className="px-3 py-1.5 bg-green-500/10 border border-green-500/30 text-green-400 rounded">Nuxt 3</span>
                        <span className="px-3 py-1.5 bg-red-500/10 border border-red-500/30 text-red-400 rounded">Nest.js</span>
                        <span className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded">Supabase</span>
                    </div>
                </div>

                <p className="text-gold font-bold text-sm tracking-widest uppercase mb-4">
                    Phase 03  Multi-Sided Supply Chain Architecture
                </p>
                <h3 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-8 max-w-4xl leading-[0.95]">
                    {project.title} 
                </h3>

                {/* MAIN GRID BLOCK */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-16 pt-12 border-t border-white/5">
                    <div className="lg:col-span-3 space-y-12">

                        {/* SECTION 01: INTENT */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">01. Core Marketplace Intent</h4>
                            <p className="text-gray-300 text-xl md:text-2xl font-light leading-relaxed">
                                {project.fullDesc}
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500">02. Integrated Sub-System Hub Interfaces</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-sm">
                                <div className="p-6 bg-[#0A0A0A] border border-white/5 rounded-2xl relative overflow-hidden group hover:border-gold/30 transition-all">
                                    <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-4">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <span className="text-white text-base font-bold block mb-2">01  Administrative Panel</span>
                                    <p className="text-xs text-gray-400 leading-relaxed">
                                        Provides comprehensive backend insight infrastructure for product validation monitoring, commission distribution handling, and platform analytics tracking metrics.
                                    </p>
                                </div>
                                <div className="p-6 bg-[#0A0A0A] border border-white/5 rounded-2xl relative overflow-hidden group hover:border-purple-500/30 transition-all">
                                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                                        <Users size={20} />
                                    </div>
                                    <span className="text-white text-base font-bold block mb-2">02  Customer </span>
                                    <p className="text-xs text-gray-400 leading-relaxed">
                                        A premium marketplace viewport allowing consumers to filter local organic supply vectors directly by Cambodian region locations (e.g., Takeo Province Direct).
                                    </p>
                                </div>
                                <div className="p-6 bg-[#0A0A0A] border border-white/5 rounded-2xl relative overflow-hidden group hover:border-blue-500/30 transition-all">
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                                        <Layout size={20} />
                                    </div>
                                    <span className="text-white text-base font-bold block mb-2">03  Farmer Supply Panel</span>
                                    <p className="text-xs text-gray-400 leading-relaxed">
                                        A simplified inventory portal custom-built for regional growers to list direct harvest pipelines, define stock availability parameters, and receive transparent balance settlements.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500">03. Integration Specification (70% Build Progress)</h4>
                            <div className="space-y-4">
                                {milestoneModules.map((mod, i) => (
                                    <div key={i} className="bg-[#0A0A0A] border border-white/5 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:bg-black/40">
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10 shrink-0">
                                                {mod.icon}
                                            </div>
                                            <div>
                                                <span className="text-white font-bold block text-sm">{mod.name}</span>
                                                <span className="text-xs text-gray-400 font-light mt-0.5 block">{mod.desc}</span>
                                            </div>
                                        </div>
                                        <span className={`text-[10px] font-mono font-bold tracking-widest px-3 py-1 rounded shrink-0 uppercase w-fit align-middle ${mod.status === 'COMPLETED' ? 'bg-green-500/10 border border-green-500/20 text-green-400' : 'bg-gold/10 border border-gold/20 text-gold'
                                            }`}>
                                            {mod.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* BOTTOM ACTION BUTTON */}
                <div className="flex flex-wrap gap-6 pt-12 mt-16 border-t border-white/5">
                    {/* Removed 'cursor-default' from the end of the line below */}
                    <a href={project.githubLink} className="hover:border-white/20 cursor-pointer flex items-center gap-3 px-10 py-5 bg-[#0A0A0A] border border-white/10 text-gray-500 font-extrabold uppercase tracking-widest text-xs hover:text-white rounded-full">
                        <Layers size={16} /> Checkout Module Active In Staging Branch
                    </a>
                </div>

            </div>
        </motion.div>
    );
};