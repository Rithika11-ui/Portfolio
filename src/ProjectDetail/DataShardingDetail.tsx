import React from 'react';
import { motion } from 'framer-motion';
import { X, Server, Database, Code2 } from 'lucide-react';
import { ProjectType } from './ProjectType';
import hostnameImg from '../image/hostname.png';
import shardingImg from '../image/sharding.png';

const NodeBadge: React.FC<{ status: string }> = ({ status }) => {
    const styles: Record<string, string> = {
        'PRIMARY_SHARD_01': 'bg-gold/10 border-gold/30 text-gold shadow-[0_0_15px_rgba(212,175,55,0.1)]',
        'REPLICA_SHARD_02': 'bg-purple-500/10 border-purple-500/30 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.1)]',
        'ROUTER_PROXY': 'bg-blue-500/10 border-blue-500/30 text-blue-400',
        'HEALTHY': 'bg-green-500/10 border-green-500/30 text-green-400',
    };
    return (
        <span className={`text-[11px] font-mono px-2 py-0.5 border rounded uppercase tracking-wider ${styles[status] || 'border-white/5 bg-white/5 text-gray-500'}`}>
            {status}
        </span>
    );
};

interface DataShardingDetailProps {
    project: ProjectType | null;
    onClose: () => void;
}

export const DataShardingDetail: React.FC<DataShardingDetailProps> = ({ project, onClose }) => {
    if (!project) return null;

    const shardingNodesLog = [
        { query: "INSERT INTO customers (id: 4, name: 'Dave')", route: "4 % 3 = 1 → Shard A", lat: "0.3ms", node: "PRIMARY_SHARD_01" },
        { query: "INSERT INTO customers (id: 8, name: 'Henry')", route: "8 % 3 = 2 → Shard B", lat: "0.5ms", node: "REPLICA_SHARD_02" },
        { query: "INSERT INTO customers (id: 9, name: 'Ivy')", route: "9 % 3 = 0 → Shard C", lat: "0.4ms", node: "PRIMARY_SHARD_01" },
        { query: "CLUSTER HEALTH CHECK", route: "HA_PROXY_ROUTER", lat: "0.1ms", node: "ROUTER_PROXY" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#050505] w-full h-screen overflow-y-auto selection:bg-gold selection:text-black text-gray-200 font-sans"
        >
            {/* HERO VIEWPORT IMAGE */}
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
                        <span className="text-white font-extrabold text-xl tracking-tight uppercase">Database Sharding<span className="text-gold">.</span></span>
                        <span className="text-[9px] text-gold font-bold tracking-[0.2em] uppercase">Horizontal Scaling Control Panel</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="bg-white/5 hover:bg-gold hover:text-black text-white p-3 rounded-full transition-all border border-white/10 flex items-center gap-2 font-bold tracking-widest text-xs uppercase pl-5 pr-5 cursor-pointer"
                    >
                        Terminate Session <X size={16} />
                    </button>
                </div>
            </div>

            {/* MAIN ARCHITECTURE BODY */}
            <div className="max-w-6xl mx-auto px-8 md:px-24 pb-32 -mt-20 relative z-10">

                {/* STATE SYSTEM BADGES */}
                <div className="flex flex-wrap gap-3 mb-10">
                    <div className="px-5 py-3 bg-[#0c0c0c] border border-white/10 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-3">
                        <Database size={16} className="text-gold" />
                        <span>MySQL Clustering</span>
                    </div>
                    <div className="px-5 py-3 bg-[#0c0c0c] border border-white/10 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-3">
                        <Server size={16} className="text-purple-400" />
                        <span>Docker Provisioned</span>
                    </div>
                </div>

                <p className="text-gold font-bold text-sm tracking-widest uppercase mb-4">
                    Phase 02 // High-Concurrency Backend Infrastructure
                </p>
                <h3 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-8 max-w-4xl leading-[0.95]">
                    {project.title} Management
                </h3>

                {/* SYSTEM GRID IMPLEMENTATION */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-16 pt-12 border-t border-white/5">

                    <div className="lg:col-span-3 space-y-12">

                        {/* SECTION 01: ARCHITECTURAL LAYOUT & SYSTEM PROFILE */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">01. Core Database Infrastructure</h4>
                            <div className="w-full rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0A] p-2 shadow-2xl mb-6">
                                <img
                                    src={hostnameImg}
                                    alt="ProxySQL Administrative Terminal Session"
                                    className="w-full h-auto rounded-lg object-cover opacity-95"
                                />
                            </div>
                            <div className="text-gray-400 text-base leading-relaxed font-light space-y-4">
                                <p>
                                    The architectural environment trace demonstrates an active administrative session inside our isolated <strong className="text-white font-semibold">ProxySQL container infrastructure</strong>, operating over port <code className="text-gold font-mono bg-white/5 px-1.5 py-0.5 rounded text-sm">6032</code>.
                                </p>
                                <p>
                                    As captured in the configuration query logs, the proxy engine maps three decoupled target MySQL router endpoints—<code className="text-gray-300 font-mono text-sm">mysqlA-router</code>, <code className="text-gray-300 font-mono text-sm">mysqlB-router</code>, and <code className="text-gray-300 font-mono text-sm">mysqlC-router</code>—each listening cleanly across port <code className="text-gray-300 font-mono text-sm">6446</code>.
                                </p>
                                <p>
                                    These servers are explicitly divided into discrete, tracking hostgroups (<code className="text-gold font-mono text-xs">hostgroup_id: 1, 2, 3</code>) running a live <span className="text-green-400 font-medium">ONLINE</span> status structure. This cluster isolates write inputs dynamically through specific user permissions (<code className="text-gray-300 font-mono text-xs">admin1, admin2, admin3</code>) mapped directly to their designated server hostgroups with sub-millisecond connection times.
                                </p>
                            </div>
                        </div>

                        {/* SECTION 02: VISUAL SHARDING DATA FLOW SHIFTING */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">02. Sharding Partition Model (DFA Scale Strategy)</h4>
                            <div className="w-full rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0A] p-2 shadow-2xl transition-all hover:border-gold/30 mb-4">
                                <img
                                    src={shardingImg}
                                    alt="Horizontal Sharding Mapping Matrix Diagram"
                                    className="w-full h-auto rounded-lg object-cover opacity-95 transition-transform duration-500"
                                />
                            </div>

                            {/* SIMPLIFIED EXPLANATION TEXT */}
                            <div className="text-gray-400 text-base leading-relaxed font-light space-y-4">
                                <p>
                                    To scale our database and handle heavy traffic, we split our customer data across three separate databases using a simple mathematical rule based on the <strong className="text-white">Customer ID</strong>.
                                </p>

                                <div className="bg-black/30 border border-white/5 p-5 rounded-xl font-mono text-sm text-gray-300 my-4 space-y-2">
                                    <div className="text-gold font-bold text-xs uppercase tracking-wider mb-2"> The Hashing Rule: Customer ID % 3</div>
                                    <p className="text-white font-semibold text-lg">{"Routing Value = Customer ID % 3"}</p>
                                    <p className="text-xs text-gray-500 pt-1">The "%" (or mod) operator divides the ID number by 3 and takes only the remainder. This remainder decides exactly where the data goes.</p>
                                </div>

                                <p>
                                    As verified by the terminal outputs executing across our backend layer, data maps precisely to three isolated target nodes running inside separate <strong className="text-white font-semibold">Docker container environments</strong>:
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs mt-4">
                                    <div className="p-4 bg-[#0A0A0A] border border-white/5 rounded-xl border-l-2 border-l-gold">
                                        <span className="text-gold font-bold block mb-1">Remainder = 1 → Shard A</span>
                                        <span className="text-gray-500 block mb-2">Docker: mysql1</span>
                                        <p className="text-gray-400">Customer <strong className="text-white">Dave (ID: 4)</strong>: 4 mod 3 leaves a remainder of 1. Sent to Shard A.</p>
                                    </div>
                                    <div className="p-4 bg-[#0A0A0A] border border-white/5 rounded-xl border-l-2 border-l-purple-500">
                                        <span className="text-purple-400 font-bold block mb-1">Remainder = 2 → Shard B</span>
                                        <span className="text-gray-500 block mb-2">Docker: mysql4</span>
                                        <p className="text-gray-400">Customer <strong className="text-white">Henry (ID: 8)</strong>: 8 mod 3 leaves a remainder of 2. Sent to Shard B.</p>
                                    </div>
                                    <div className="p-4 bg-[#0A0A0A] border border-white/5 rounded-xl border-l-2 border-l-blue-400">
                                        <span className="text-blue-400 font-bold block mb-1">Remainder = 0 → Shard C</span>
                                        <span className="text-gray-500 block mb-2">Docker: mysql7</span>
                                        <p className="text-gray-400">Customer <strong className="text-white">Ivy (ID: 9)</strong>: 9 mod 3 leaves a remainder of 0. Sent to Shard C.</p>
                                    </div>
                                </div>

                                <p className="pt-4">
                                    By running each database inside its own isolated **Docker container**, they are completely decoupled from each other. When a new query hits our ProxySQL routing layer, the system instantly calculates this remainder and sends the records straight to the correct server. This splits the data load evenly and keeps the system lightning-fast.
                                </p>
                            </div>
                        </div>

                        {/* LIVE ACTIVE SIMULATOR TERMINAL */}
                        <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 font-mono text-sm shadow-2xl">
                            <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-4">
                                <span className="text-gray-500 font-bold text-xs uppercase tracking-wider">Database Shift Nodes Console</span>
                                <div className="flex gap-2">
                                    <span className="w-3 h-3 rounded-full bg-red-500/40"></span>
                                    <span className="w-3 h-3 rounded-full bg-yellow-500/40"></span>
                                    <span className="w-3 h-3 rounded-full bg-green-500/40 animate-pulse"></span>
                                </div>
                            </div>

                            <div className="space-y-3 bg-black/40 p-4 rounded border border-white/5">
                                <p className="text-gray-500 text-xs">{'// Automated Query Shard Allocation Vector Pipeline'}</p>
                                <div className="space-y-2 pt-2">
                                    {shardingNodesLog.map((item, i) => (
                                        <div key={i} className="flex flex-wrap items-center gap-2 text-xs py-1 border-b border-white/5 last:border-0">
                                            <span className="text-gray-600">LAT: {item.lat}</span>
                                            <span className="text-white font-bold">{item.query}</span>
                                            <span className="text-gray-500">→</span>
                                            <span className="text-gray-400 italic">{item.route}</span>
                                            <span className="text-gray-500">→</span>
                                            <NodeBadge status={item.node} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap justify-between items-center text-xs text-gold font-bold uppercase tracking-wider">
                                <div className="flex gap-6">
                                    <span>✔ 3 Live Shard Mounts</span>
                                    <span>✔ 0 Collision Collisions</span>
                                </div>
                                <div className="flex items-center gap-2 text-green-400">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
                                    CLUSTER_STATE: ACCEPT (HEALTHY)
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* BOTTOM INSPECT BAR */}
                <div className="flex flex-wrap gap-6 pt-12 mt-16 border-t border-white/5">
                    {project.githubLink && project.githubLink !== "#" && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-10 py-5 bg-white text-black hover:bg-gold font-extrabold uppercase tracking-widest text-xs rounded-full transition-all transform hover:scale-[1.02]"
                        >
                            <Code2 size={16} /> Inspect Cluster Configurations
                        </a>
                    )}
                </div>

            </div>
        </motion.div>
    );
};