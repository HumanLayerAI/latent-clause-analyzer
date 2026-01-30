// Latent Clause Analyzer
// AI-powered contract analysis tool
// Built by Aakarsh Sharma | Human Layer AI
// Law × Psychology × AI

import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, XCircle, ChevronDown, ChevronUp, Zap, Eye, Users, FileText, ArrowRight, Brain, BookOpen, Sparkles, Globe, Info, MapPin } from 'lucide-react';

// Legal Disclaimer Component
const LegalDisclaimer = ({ compact = false }) => (
    <div className={`bg-amber-500/10 border border-amber-500/30 rounded-lg ${compact ? 'px-3 py-2' : 'px-4 py-3'}`}>
          <div className="flex items-start gap-2">
                <Info size={compact ? 14 : 16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <p className={`text-amber-200/80 ${compact ? 'text-xs' : 'text-sm'} leading-relaxed`}>
                        <span className="font-semibold text-amber-300">Disclaimer:</span>span> This tool provides educational analysis only and does not constitute legal advice.
                </p>p>
          </div>div>
    </div>div>
  );

// Human Layer AI Logo
const HumanLayerLogo = ({ size = 32 }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="48" fill="#0f172a" />
        <path d="M 50 6 A 44 44 0 1 1 15 75" stroke="#2dd4bf" strokeWidth="5" strokeLinecap="round" fill="none" />
        <path d="M 50 20 A 30 30 0 1 1 25 65" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M 50 35 A 15 15 0 1 1 38 58" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" fill="none" />
        <circle cx="50" cy="50" r="6" fill="#f97316" />
    </svg>svg>
  );

// Severity Badge Component
const SeverityBadge = ({ severity }) => {
    const config = {
          red: { bg: 'bg-red-500/20', text: 'text-red-400', icon: XCircle, label: 'High Risk' },
          yellow: { bg: 'bg-yellow-500/20', text: 'text-yellow-400', icon: AlertTriangle, label: 'Caution' },
          green: { bg: 'bg-emerald-500/20', text: 'text-emerald-400', icon: CheckCircle, label: 'Favorable' }
    };
    const { bg, text, icon: Icon, label } = config[severity];
    return (
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${bg} ${text}`}>
                <Icon size={12} /> {label}
          </span>span>
        );
};

// Main Application
export default function LatentClauseAnalyzer() {
    const [page, setPage] = useState('home');
  
    return (
          <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
                <header className="border-b border-slate-800/50 bg-slate-900/50 backdrop-blur-sm">
                        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
                                  <HumanLayerLogo size={40} />
                                  <div>
                                              <h1 className="text-xl font-bold">Human Layer AI</h1>h1>
                                              <p className="text-slate-500 text-xs">Law × Psychology × AI</p>p>
                                  </div>div>
                        </div>div>
                </header>header>
          
                <section className="max-w-6xl mx-auto px-6 py-16">
                        <div className="text-center max-w-3xl mx-auto">
                                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm mb-6">
                                              <Sparkles size={14} /> AI-Powered Contract Intelligence
                                  </div>div>
                                  
                                  <h1 className="text-5xl font-bold mb-6">
                                              Stop Signing Contracts That{' '}
                                              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                                                            Work Against You
                                              </span>span>
                                  </h1>h1>
                                  
                                  <p className="text-xl text-slate-400 mb-10">
                                              Most contract analyzers flag risk. This one reveals <span className="text-white font-medium">negotiation leverage</span>span> — 
                                              showing not just what's weak, but how each party perceives that weakness.
                                  </p>p>
                        
                                  <div className="flex gap-4 justify-center mb-8">
                                              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-xl">
                                                            Try Demo Contracts
                                              </button>button>
                                              <button className="px-8 py-4 bg-slate-800 border border-slate-700 rounded-xl">
                                                            Analyze Your Contract
                                              </button>button>
                                  </div>div>
                        
                                  <LegalDisclaimer />
                        </div>div>
                </section>section>
          
                <section className="max-w-6xl mx-auto px-6 pb-16">
                        <div className="grid md:grid-cols-3 gap-6">
                                  <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                                              <Eye className="text-cyan-400 mb-4" size={24} />
                                              <h3 className="text-lg font-semibold mb-2">Dual Perspective Analysis</h3>h3>
                                              <p className="text-slate-400 text-sm">See how each clause reads to you versus the counterparty.</p>p>
                                  </div>div>
                                  <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                                              <Brain className="text-violet-400 mb-4" size={24} />
                                              <h3 className="text-lg font-semibold mb-2">Psychological Tactics Exposed</h3>h3>
                                              <p className="text-slate-400 text-sm">Anchoring, loss aversion, framing effects decoded.</p>p>
                                  </div>div>
                                  <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                                              <Zap className="text-emerald-400 mb-4" size={24} />
                                              <h3 className="text-lg font-semibold mb-2">Negotiation Playbook</h3>h3>
                                              <p className="text-slate-400 text-sm">Specific tactics for each flagged clause.</p>p>
                                  </div>div>
                        </div>div>
                </section>section>
          
                <footer className="border-t border-slate-800/50">
                        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                              <HumanLayerLogo size={32} />
                                              <div>
                                                            <div className="text-slate-300 text-sm">Built by Aakarsh Sharma</div>div>
                                                            <div className="text-slate-500 text-xs">Founder, Human Layer AI</div>div>
                                              </div>div>
                                  </div>div>
                                  <a href="mailto:hello@aakarshsharma.com" className="text-cyan-400 text-sm">hello@aakarshsharma.com</a>a>
                        </div>div>
                </footer>footer>
          </div>div>
        );
}</div>
