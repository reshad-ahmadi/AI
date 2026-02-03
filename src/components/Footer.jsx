import React from 'react';
import { Grip, Github, Twitter, Linkedin, Disc } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-black pt-20  border-t border-red-900/30 overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50"></div>
        
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-16">
                
                {/* Brand & Subscribe Column */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="flex items-center gap-2">
                        <Grip className="w-6 h-6 text-red-600" />
                        <span className="text-xl font-bold tracking-wider text-white  font-display">CipherX</span>
                    </div>
                    
                    <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                        Subscribe to the Nexus. Get weekly transmissions on the evolution of neural architectures and synthetic intelligence.
                    </p>

                    <div className="space-y-4">
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="NEURAL_ID@HOST.SYS" 
                                className="w-full bg-zinc-900/50 border border-zinc-800 text-red-500 text-xs tracking-wider placeholder:text-zinc-700 px-4 py-3 focus:outline-none focus:border-red-900/50 transition-colors uppercase font-mono rounded"
                            />
                        </div>
                        <button className="w-full bg-red-950/20 border border-red-900/50 text-red-500 text-xs font-bold tracking-[0.2em] uppercase py-3 hover:bg-red-900/30 hover:border-red-500/50 transition-all rounded">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Links Columns */}
                <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    
                    {/* Column 1 */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-bold text-zinc-200 uppercase tracking-[0.2em]">Company</h4>
                        <ul className="space-y-4">
                            {['About', 'Manifesto', 'Careers', 'Press'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-zinc-500 hover:text-red-500 text-xs transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-bold text-zinc-200 uppercase tracking-[0.2em]">Product</h4>
                        <ul className="space-y-4">
                            {['Nexus Interface', 'API Access', 'Cloud Compute', 'Documentation'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-zinc-500 hover:text-red-500 text-xs transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-bold text-zinc-200 uppercase tracking-[0.2em]">Intelligence</h4>
                        <ul className="space-y-4">
                            {['Model Zoo', 'Benchmarks', 'Safety Systems', 'Research'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-zinc-500 hover:text-red-500 text-xs transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 - Legal (visually separated in image, but fitting here for grid) */}
                     <div className="space-y-6">
                        <h4 className="text-[10px] font-bold text-zinc-200 uppercase tracking-[0.2em]">Legal</h4>
                        <ul className="space-y-4">
                            {['Terms of Access', 'Neural Privacy', 'Security', 'Ethics'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-zinc-500 hover:text-red-500 text-xs transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex gap-6">
                    <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
                    <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Github className="w-4 h-4" /></a>
                    <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Disc className="w-4 h-4" /></a>
                    <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
                </div>
                
                <div className="text-[10px] font-bold tracking-[0.2em] text-zinc-700 uppercase">
                    © 2026 CipherX Neural Systems. All rights reserved.
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
