import React, { useState } from 'react';
import { 
  PanelLeft, 
  SquarePen, 
  Search, 
  Image as ImageIcon, 
  LayoutGrid, 
  FolderOpen, 
  Plus, 
  Mic, 
  Headphones, 
  ChevronDown,
  Sparkles,
  Grip
} from 'lucide-react';

const AiPage = () => {
    const [query, setQuery] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-[#030303] text-white font-sans overflow-hidden selection:bg-red-900/30 selection:text-red-200">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-red-900/10 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-red-900/5 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none brightness-50"></div>
      </div>

      {/* Sidebar */}
      <div 
        className={`${isSidebarOpen ? 'w-[280px]' : 'w-0'} bg-black/60 backdrop-blur-3xl flex-shrink-0 transition-all duration-500 ease-in-out flex flex-col border-r border-white/5 relative z-30 group/sidebar`}
      >
        <div className={`${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300 flex flex-col h-full w-[280px]`}>
            {/* Sidebar Header */}
            <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-red-600/10 border border-red-600/20 flex items-center justify-center">
                            <Grip className="w-5 h-5 text-red-600" />
                        </div>
                        <span className="text-sm font-black tracking-[0.25em] h-fit uppercase text-white">CipherX</span>
                    </div>
                    <button 
                        onClick={() => setIsSidebarOpen(false)} 
                        className="p-2 text-zinc-500 hover:text-white hover:bg-white/5 rounded-xl transition-all cursor-pointer"
                    >
                        <PanelLeft className="w-4 h-4" />
                    </button>
                </div>

                <button className="w-full flex items-center gap-3 px-4 py-3.5 bg-gradient-to-r from-red-600/10 to-transparent border border-red-900/20 rounded-2xl hover:border-red-600/40 hover:bg-red-600/20 transition-all group/btn cursor-pointer whitespace-nowrap overflow-hidden">
                    <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                        <Plus className="w-4 h-4 text-red-500 group-hover/btn:scale-110 transition-transform" />
                    </div>
                    <span className="text-sm font-bold tracking-wider uppercase text-zinc-200">New Node</span>
                </button>

                <div className="space-y-1">
                    <NavItem icon={<Search className="w-4 h-4" />} label="Neural Search" />
                    <NavItem icon={<ImageIcon className="w-4 h-4" />} label="Visual Synthesis" />
                    <NavItem icon={<LayoutGrid className="w-4 h-4" />} label="Core Apps" />
                    <NavItem icon={<FolderOpen className="w-4 h-4" />} label="Projects" />
                </div>
            </div>

            {/* History Area */}
            <div className="flex-1 overflow-y-auto px-4 py-2 scrollbar-none">
                <div className="text-[10px] font-black tracking-[0.2em] text-zinc-700 uppercase mb-4 px-2">Recent Protocols</div>
                <div className="space-y-1">
                    <HistoryItem label="Neural Link Strategy" />
                    <HistoryItem label="Autonomous Logic V9" />
                    <HistoryItem label="Crypto Handshake Fix" />
                    <HistoryItem label="Global Data Sync" />
                    <HistoryItem label="Neural weights stable" />
                </div>
            </div>

            {/* Sidebar Footer */}
            <div className="p-4 border-t border-white/5 bg-black/40">
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl border border-white/5 hover:border-red-600/30 transition-all cursor-pointer group/user">
                    <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center text-xs font-bold shadow-[0_0_20px_rgba(220,38,38,0.2)]">
                        RA
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="text-xs font-black truncate tracking-wider uppercase">RESHAD AHEAD</div>
                        <div className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest mt-0.5">V4.0 PROTOCOL</div>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.6)]"></div>
                </div>
            </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative z-10 overflow-hidden bg-[#030303]">
            
            {/* Top Bar */}
            <header className="flex items-center justify-between px-8 py-6 relative z-40 bg-gradient-to-b from-black/50 to-transparent">
                <div className="flex items-center gap-4">
                    {!isSidebarOpen && (
                        <button 
                            onClick={() => setIsSidebarOpen(true)} 
                            className="p-2.5 text-zinc-500 hover:text-white hover:bg-white/5 rounded-xl transition-all cursor-pointer"
                        >
                             <PanelLeft className="w-5 h-5" />
                        </button>
                    )}
                    <div className="flex items-center gap-2.5 px-3.5 py-2 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl cursor-pointer hover:border-white/20 transition-all select-none group/model">
                        <span className="text-[10px] font-black tracking-[0.15em] text-zinc-400 uppercase group-hover/model:text-white transition-colors">Core Model</span>
                        <ChevronDown className="w-3.5 h-3.5 text-zinc-600 group-hover/model:text-zinc-300 transition-colors" />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex flex-col items-end mr-2">
                        <span className="text-[10px] font-black tracking-widest text-emerald-500 uppercase">System Stable</span>
                        <span className="text-[9px] text-zinc-600 font-mono tracking-widest">TLS 1.3 ENCRYPTED</span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all cursor-pointer">
                        <Sparkles className="w-4 h-4" />
                    </div>
                </div>
            </header>

            {/* Chat View */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                
                {/* Visual Centerpiece */}
                <div className="mb-12 relative animate-fade-in-down">
                    <div className="absolute -inset-10 bg-red-600/10 blur-[60px] rounded-full opacity-50"></div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-tight">
                        WAKE UP <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-700 drop-shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                            THE MACHINE.
                        </span>
                    </h1>
                    <p className="text-zinc-500 text-sm tracking-[0.1em] font-medium uppercase max-w-sm mx-auto">
                        Initiate direct neural link with the singularity core
                    </p>
                </div>

                {/* Styled Input Pill */}
                <div className="w-full max-w-3xl relative animate-fade-in-up">
                    <div className="absolute -inset-2 bg-gradient-to-r from-red-600/20 to-transparent blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
                    
                    <div className="relative bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/5 focus-within:border-red-600/40 rounded-[2.5rem] shadow-2xl transition-all p-2 group">
                        
                        <div className="flex items-center px-4 py-2">
                            <button className="p-2.5 text-zinc-500 hover:text-red-500 hover:bg-red-500/5 rounded-full transition-all">
                                <Plus className="w-5 h-5 transition-transform group-hover:rotate-90" />
                            </button>
                            <input 
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Ask the Singularity..." 
                                className="flex-1 bg-transparent border-none text-white text-base px-3 py-4 focus:outline-none placeholder:text-zinc-700 font-medium tracking-wide"
                            />
                        </div>

                         <div className="flex items-center justify-between px-6 pb-2 pt-0">
                             <div className="flex items-center gap-4">
                                 <div className="h-px w-8 bg-zinc-800"></div>
                                 <div className="text-[10px] font-bold tracking-widest text-zinc-700 uppercase">Input Terminal</div>
                             </div>
                             <div className="flex items-center gap-2">
                                <button className="p-3 text-zinc-500 hover:text-white transition-colors">
                                    <Mic className="w-5 h-5" />
                                </button>
                                <button className="p-3 bg-red-600 hover:bg-red-500 text-white rounded-full transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] group-hover:scale-105 active:scale-95">
                                     <Headphones className="w-5 h-5" />
                                </button>
                             </div>
                         </div>
                    </div>
                    
                    {/* Console-style Warning */}
                    <div className="mt-8 flex items-center justify-center gap-2 opacity-30 text-[9px] font-bold tracking-[0.2em] text-zinc-500 uppercase">
                        <div className="w-1 h-1 rounded-full bg-red-600"></div>
                        Neural weights stable
                        <div className="w-1 h-1 rounded-full bg-red-600"></div>
                        Zero knowledge protocol active
                    </div>
                </div>

            </div>
      </div>

    </div>
  );
};

// Subcomponents with Landing Page Styles
const NavItem = ({ icon, label }) => (
    <div className="flex items-center gap-3 px-3 py-2.5 hover:bg-red-600/5 rounded-xl cursor-pointer text-zinc-500 hover:text-red-500 transition-all group border border-transparent hover:border-red-900/20">
        <div className="group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <span className="text-xs font-bold tracking-wider uppercase">{label}</span>
    </div>
);

const HistoryItem = ({ label }) => (
    <div className="px-3 py-2 hover:bg-white/5 rounded-lg cursor-pointer text-xs font-medium text-zinc-400 hover:text-white transition-all truncate border-l-2 border-transparent hover:border-red-600 pl-4">
        {label}
    </div>
);

export default AiPage;
