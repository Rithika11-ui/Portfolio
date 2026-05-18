/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { motion } from 'framer-motion';
import { X, Cpu, Code2, CheckSquare } from 'lucide-react';
import { ProjectType } from './ProjectType';
import compilationContextImg from '../image/compilation-context.png';

const TokenBadge: React.FC<{ type: string }> = ({ type }) => {
    const styles: Record<string, string> = {
        'WORD_PALINDROME': 'bg-gold/10 border-gold/30 text-gold shadow-[0_0_15px_rgba(212,175,55,0.1)]',
        'NUMERIC_PALINDROME': 'bg-purple-500/10 border-purple-500/30 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.1)]',
        'ALPHANUMERIC_PALINDROME': 'bg-pink-500/10 border-pink-500/30 text-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.1)]',
        'WORD': 'bg-white/5 border-white/10 text-gray-400',
    };
    return (
        <span className={`text-[11px] font-mono px-2 py-0.5 border rounded uppercase tracking-wider ${styles[type] || 'border-white/5 bg-white/5 text-gray-500'}`}>
            {type}
        </span>
    );
};

interface CompilationDetailProps {
    project: ProjectType | null;
    onClose: () => void;
}

export const CompilationDetail: React.FC<CompilationDetailProps> = ({ project, onClose }) => {
    if (!project) return null;

    const simulationStream = [
        { lexeme: "radar", type: "WORD_PALINDROME", line: 1, col: 0 },
        { lexeme: "level", type: "WORD_PALINDROME", line: 1, col: 6 },
        { lexeme: "civic", type: "WORD_PALINDROME", line: 1, col: 12 },
        { lexeme: "rotator", type: "WORD_PALINDROME", line: 2, col: 0 },
        { lexeme: "deed", type: "WORD_PALINDROME", line: 2, col: 8 },
        { lexeme: "12321", type: "NUMERIC_PALINDROME", line: 3, col: 0 },
        { lexeme: "456", type: "WORD", line: 3, col: 6 },
        { lexeme: "palindrome", type: "WORD", line: 3, col: 10 },
        { lexeme: "1a1", type: "ALPHANUMERIC_PALINDROME", line: 4, col: 7 },
        { lexeme: "a1a", type: "ALPHANUMERIC_PALINDROME", line: 4, col: 11 },
        { lexeme: "noon", type: "WORD_PALINDROME", line: 5, col: 0 },
        { lexeme: "radar", type: "WORD_PALINDROME", line: 5, col: 10 },
        { lexeme: "1234321", type: "NUMERIC_PALINDROME", line: 6, col: 0 },
        { lexeme: "a1b2b1a", type: "ALPHANUMERIC_PALINDROME", line: 7, col: 0 },
        { lexeme: "222", type: "NUMERIC_PALINDROME", line: 12, col: 4 },
        { lexeme: "333", type: "NUMERIC_PALINDROME", line: 12, col: 8 },
        { lexeme: "abcba", type: "WORD_PALINDROME", line: 13, col: 0 },
        { lexeme: "12321", type: "NUMERIC_PALINDROME", line: 13, col: 6 },
        { lexeme: "1a1", type: "ALPHANUMERIC_PALINDROME", line: 13, col: 12 },
        { lexeme: "palindrome", type: "WORD", line: 14, col: 0 },
        { lexeme: "example", type: "WORD", line: 14, col: 11 },
        { lexeme: "text", type: "WORD", line: 14, col: 19 },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#050505] w-full h-screen overflow-y-auto selection:bg-gold selection:text-black text-gray-200 font-sans"
        >
            {/* HERO VIEWPORT */}
            <div className="w-full h-[35vh] md:h-[38vh] relative overflow-hidden bg-[#0A0A0A] border-b border-white/5">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-20 filter saturate-50 contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

                <div className="absolute top-0 w-full px-8 md:px-24 py-8 flex justify-between items-center backdrop-blur-sm bg-gradient-to-b from-black/50 to-transparent">
                    <div className="flex flex-col">
                        <span className="text-white font-extrabold text-xl tracking-tight uppercase">
                            Lexical Analyzer<span className="text-gold">.</span>
                        </span>
                        <span className="text-[9px] text-gold font-bold tracking-[0.2em] uppercase">JFlex Core Engine Analysis</span>
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

                {/* STATE BADGES */}
                <div className="flex flex-wrap gap-3 mb-10">
                    <div className="px-5 py-3 bg-[#0c0c0c] border border-white/10 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-3">
                        <Code2 size={16} className="text-gold" />
                        <span>JFlex Automata</span>
                    </div>
                    <div className="px-5 py-3 bg-[#0c0c0c] border border-white/10 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-3">
                        <Cpu size={16} className="text-purple-400" />
                        <span>Java Swing GUI</span>
                    </div>
                    <div className="px-5 py-3 bg-[#0c0c0c] border border-white/10 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-3">
                        <CheckSquare size={16} className="text-green-400" />
                        <span>4 Token Classes</span>
                    </div>
                </div>

                <p className="text-gold font-bold text-sm tracking-widest uppercase mb-4">
                    Phase 01 // Compiler Construction Frontend
                </p>
                <h3 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-8 max-w-4xl leading-[0.95]">
                    {project.title} Simulator
                </h3>

                {/* ── ARCHITECTURE GRID: only 01, 02, 03 + right sidebar ── */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-16 pt-12 border-t border-white/5">

                    {/* LEFT PANEL — 01, 02, 03 only */}
                    <div className="lg:col-span-10 space-y-12">

                        {/* 01 OVERVIEW */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">01. Architectural Intent</h4>
                            <p className="text-gray-300 text-xl md:text-2xl font-light leading-relaxed">
                                {project.fullDesc}
                            </p>
                        </div>

                        {/* 02 SCREENSHOT + DESCRIPTION */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">02. Live Tokenization Tool Interface</h4>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="w-[80%] rounded-xl place-content-center overflow-hidden border border-white/10 bg-[#0A0A0A] p-2 shadow-2xl shrink-0 hover:border-gold/30 transition-all">
                                    <img
                                        src={compilationContextImg}
                                        alt="Advanced Palindrome Lexer Interactive Application"
                                        className=" h-[40%] rounded-lg object-cover"
                                    />
                                </div>
                                
                            </div>
                        </div>

                        {/* 03 HOW IT WORKS */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">03. How It Works</h4>
                            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                                <p>
                                    Built on <span className="text-white font-semibold">JFlex</span>, a lexical analyzer generator for Java. Regex rules in a <code className="text-gold bg-gold/10 px-1.5 py-0.5 rounded text-xs">.flex</code> file are compiled into an optimized <span className="text-white font-semibold">DFA</span> — a Java class that scans input character by character at near-constant speed.
                                </p>
                                <p>
                                    Text entered in the Swing interface is wrapped in a <code className="text-purple-400 bg-purple-500/10 px-1.5 py-0.5 rounded text-xs">StringReader</code> and passed to the scanner. It loops on <code className="text-purple-400 bg-purple-500/10 px-1.5 py-0.5 rounded text-xs">yylex()</code>, auto-tracking <code className="text-purple-400/70">yyline</code> and <code className="text-purple-400/70">yycolumn</code> for precise position reporting.
                                </p>
                                <p>
                                    For each match, <code className="text-pink-400 bg-pink-500/10 px-1.5 py-0.5 rounded text-xs">isPalindrome(yytext())</code> reverses the lexeme via a char array and classifies it into one of four types: <span className="text-gold font-semibold">WORD_PALINDROME</span>, <span className="text-purple-400 font-semibold">NUMERIC_PALINDROME</span>, <span className="text-pink-400 font-semibold">ALPHANUMERIC_PALINDROME</span>, or plain <span className="text-gray-300 font-semibold">WORD</span>.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                {/* ── END OF 3-COL GRID ── */}

                {/* 04 TOKEN CLASSIFICATION — FULL WIDTH */}
                <div className="space-y-6 mt-16 pt-12 border-t border-white/5">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500">04. Token Classification Rules</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-sans text-sm">
                        <div className="p-5 bg-[#0A0A0A] border border-white/5 rounded-xl">
                            <span className="text-gold font-mono font-bold block mb-2">WORD_PALINDROME</span>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                Purely alphabetic tokens (e.g. <span className="text-white font-mono">radar</span>, <span className="text-white font-mono">level</span>, <span className="text-white font-mono">civic</span>) that read identically forwards and backwards. Matched by <code className="text-gold/70">[a-zA-Z]+</code> and confirmed by the palindrome check.
                            </p>
                        </div>
                        <div className="p-5 bg-[#0A0A0A] border border-white/5 rounded-xl">
                            <span className="text-purple-400 font-mono font-bold block mb-2">NUMERIC_PALINDROME</span>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                Digit-only tokens (e.g. <span className="text-white font-mono">12321</span>, <span className="text-white font-mono">222</span>) that are numerically symmetric. Matched by <code className="text-purple-400/70">[0-9]+</code> when the palindrome check passes.
                            </p>
                        </div>
                        <div className="p-5 bg-[#0A0A0A] border border-white/5 rounded-xl">
                            <span className="text-pink-400 font-mono font-bold block mb-2">ALPHANUMERIC_PALINDROME</span>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                Mixed letters-and-digits tokens (e.g. <span className="text-white font-mono">1a1</span>, <span className="text-white font-mono">a1b2b1a</span>) that are still symmetric as a string. Matched by <code className="text-pink-400/70">[a-zA-Z0-9]+</code> containing both character classes.
                            </p>
                        </div>
                        <div className="p-5 bg-[#0A0A0A] border border-white/5 rounded-xl">
                            <span className="text-gray-400 font-mono font-bold block mb-2">WORD</span>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                Any token that matched a pattern but <span className="text-white">failed</span> the palindrome check (e.g. <span className="text-white font-mono">palindrome</span>, <span className="text-white font-mono">example</span>). Classified as a plain non-palindrome word.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 05 PIPELINE STEPS — FULL WIDTH */}
                <div className="space-y-6 mt-16 pt-12 border-t border-white/5">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500">05. Lexical Pipeline — Step by Step</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-sm">
                        <div className="p-5 bg-[#0A0A0A] border border-white/5 rounded-xl">
                            <span className="text-gold font-mono font-bold block mb-2">[01] Input Buffer</span>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                User text from the Swing <code className="text-gold/70">JTextArea</code> is wrapped in a <code className="text-gold/70">StringReader</code> and passed to the JFlex scanner on click.
                            </p>
                        </div>
                        <div className="p-5 bg-[#0A0A0A] border border-white/5 rounded-xl">
                            <span className="text-purple-400 font-mono font-bold block mb-2">[02] DFA Scanning</span>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                The DFA loops on <code className="text-purple-400/70">yylex()</code>, advancing through input while auto-tracking <code className="text-purple-400/70">yyline</code> and <code className="text-purple-400/70">yycolumn</code>.
                            </p>
                        </div>
                        <div className="p-5 bg-[#0A0A0A] border border-white/5 rounded-xl">
                            <span className="text-pink-400 font-mono font-bold block mb-2">[03] Palindrome Check</span>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                <code className="text-pink-400/70">isPalindrome(yytext())</code> reverses each lexeme via a char array and assigns one of four token types.
                            </p>
                        </div>
                    </div>
                </div>

                {/* LIVE CONSOLE — FULL WIDTH */}
                <div className="mt-16 pt-12 border-t border-white/5">
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 font-mono text-sm shadow-2xl">
                        <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-4">
                            <span className="text-gray-500 font-bold text-xs uppercase tracking-wider">Live Token Stream — Lexical Analysis Results Panel</span>
                            <div className="flex gap-2">
                                <span className="w-3 h-3 rounded-full bg-red-500/40"></span>
                                <span className="w-3 h-3 rounded-full bg-yellow-500/40"></span>
                                <span className="w-3 h-3 rounded-full bg-green-500/40 animate-pulse"></span>
                            </div>
                        </div>
                        <div className="space-y-3 bg-black/40 p-4 rounded border border-white/5 max-h-72 overflow-y-auto">
                            <p className="text-gray-500 text-xs">// Output generated by yylex() loop — Show Detailed Analysis: ON</p>
                            <div className="space-y-1.5 pt-2">
                                {simulationStream.map((item, i) => (
                                    <div key={i} className="flex flex-wrap items-center gap-2 text-xs py-0.5 border-b border-white/5 last:border-0">
                                        <span className="text-gray-600">LINE {item.line}, COL {item.col}:</span>
                                        <span className="text-white font-bold">{item.lexeme}</span>
                                        <span className="text-gray-500">→</span>
                                        <TokenBadge type={item.type} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/5 space-y-1 font-mono text-xs">
                            <p className="text-gray-600">{"=================================================="}</p>
                            <p className="text-gray-400 font-bold">SUMMARY:</p>
                            <p className="text-gold">✔ Total tokens found: 43</p>
                            <p className="text-gold">✔ Palindromes detected: 22</p>
                            <p className="text-green-400">✔ Analysis completed successfully!</p>
                        </div>
                    </div>
                </div>

                {/* FOOTER ACTIONS */}
                <div className="flex flex-wrap gap-6 pt-12 mt-16 border-t border-white/5">
                    {project.githubLink && project.githubLink !== "#" && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-10 py-5 bg-white text-black hover:bg-gold font-extrabold uppercase tracking-widest text-xs rounded-full transition-all transform hover:scale-[1.02]"
                        >
                            <Code2 size={16} /> Inspect Source Matrices
                        </a>
                    )}
                </div>

            </div>
        </motion.div>
    );
};