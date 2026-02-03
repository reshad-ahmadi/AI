import React from 'react';
import { Grip } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-2">
        <Grip className="w-6 h-6 text-red-600" />
        <span className="text-xl font-bold tracking-wider text-white uppercas font-display">CipherX</span>
      </div>
      <button 
        onClick={() => navigate('/auth')} 
        className="cursor-pointer px-6 py-2 text-xs font-bold tracking-widest text-red-500 uppercase transition-all border border-red-900/50 rounded-full hover:bg-red-900/10 hover:border-red-500/50"
      >
        Connect
      </button>
    </nav>
  );
};

export default Navbar;
