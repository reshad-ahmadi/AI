import React from 'react';
import { Home, Globe, MessageSquare, Settings } from 'lucide-react';

const BottomDock = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-8 px-8 py-4 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/50">
        <button className="text-zinc-400 hover:text-white transition-colors group">
          <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
        <button className="text-zinc-400 hover:text-white transition-colors group">
          <Globe className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
        <button className="relative group">
          <div className="w-3 h-3 bg-red-600 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.8)] group-hover:bg-red-500 transition-colors"></div>
        </button>
        <button className="text-zinc-400 hover:text-white transition-colors group">
          <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
        <button className="text-zinc-400 hover:text-white transition-colors group">
          <Settings className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default BottomDock;
