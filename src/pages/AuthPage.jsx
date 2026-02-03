import React, { useState } from 'react';
import { ArrowLeft, Grip } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050505] text-red-600 font-mono flex flex-col items-center justify-center relative overflow-hidden selection:bg-red-900/30 selection:text-red-200">
      
      {/* Background Ambience */}
      {/* <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/5 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div> */}

       {/* Back Button */}
       <button 
        onClick={() => navigate('/')}
        className="absolute top-8 left-8 text-zinc-600 hover:text-red-500 transition-colors flex items-center gap-2 text-xs tracking-widest uppercase z-50 cursor-pointer"
      >
        <ArrowLeft size={16} />
        Abort Sequence
      </button>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        
        {/* Logo Section */}
        <div className="mb-12 flex items-center justify-center gap-4 animate-fade-in-down mt-[70px]">
          <Grip className="w-8 h-8 text-red-600" />
          <h1 className="text-3xl font-bold tracking-[0.3em] text-white uppercase drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">
            CipherX
          </h1>
        </div>

        {/* Auth Card */}
        <div className="w-full bg-[#0a0a0a] border border-red-900/20 rounded-3xl p-8 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            {/* Card Glow */}
            <div className="absolute -inset-px bg-gradient-to-b from-red-500/10 to-transparent rounded-3xl opacity-20 pointer-events-none"></div>
            
            {/* Tabs */}
            <div className="flex gap-8 mb-12 border-b border-white/5 pb-4 relative">
                <button 
                  onClick={() => setIsLogin(true)}
                  className={`cursor-pointer text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 ${isLogin ? 'text-white' : 'text-zinc-600 hover:text-red-400'}`}
                >
                    Login
                </button>
                <button 
                  onClick={() => setIsLogin(false)}
                  className={`cursor-pointer text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 ${!isLogin ? 'text-white' : 'text-zinc-600 hover:text-red-400'}`}
                >
                    Join
                </button>
                
                {/* Active Indicator */}
                <div className={`absolute bottom-0 h-0.5 bg-red-600 transition-all duration-300 ease-out w-8 ${isLogin ? 'left-0' : 'left-20'}`}></div>
            </div>

            {/* Form */}
            <div className="space-y-8">
                
                {/* Neural ID Input */}
                <div className="space-y-2 group/input">
                    <label className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase group-focus-within/input:text-red-500 transition-colors">
                        Neural ID
                    </label>
                    <input 
                        type="text" 
                        placeholder="ENTER ID..."
                        className="w-full bg-transparent border-b border-zinc-800 text-white py-2 focus:outline-none focus:border-red-600 transition-colors font-mono text-sm placeholder:text-zinc-800"
                    />
                </div>

                {/* Password Input */}
                 <div className="space-y-2 group/input">
                    <label className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase group-focus-within/input:text-red-500 transition-colors">
                        Security Key
                    </label>
                    <input 
                        type="password" 
                        placeholder="........"
                        className="w-full bg-transparent border-b border-zinc-800 text-white py-2 focus:outline-none focus:border-red-600 transition-colors font-mono text-sm placeholder:text-zinc-800 tracking-widest"
                    />
                </div>

                {!isLogin && (
                    <div className="space-y-2 group/input animate-fade-in">
                        <label className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase group-focus-within/input:text-red-500 transition-colors">
                            Access Token (Optional)
                        </label>
                        <input 
                            type="text" 
                            placeholder="TOKEN..."
                            className="w-full bg-transparent border-b border-zinc-800 text-white py-2 focus:outline-none focus:border-red-600 transition-colors font-mono text-sm placeholder:text-zinc-800"
                        />
                    </div>
                )}

                {/* Submit Button */}
                <button 
                    onClick={() => navigate('/ai')}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl tracking-[0.2em] uppercase text-xs transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:scale-[1.02] active:scale-[0.98] mt-4 relative overflow-hidden group/btn cursor-pointer"
                >
                    <span className="relative z-10">{isLogin ? 'Establish Link' : 'Initialize Node'}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                </button>

                {/* Footer Links */}
                <div className="text-center pt-4">
                     <button className="cursor-pointer text-[10px] font-bold tracking-[0.1em] text-zinc-700 uppercase hover:text-red-500 transition-colors">
                        Access Recovery
                     </button>
                </div>
            </div>
        </div>

        {/* Footer Info */}
         <div className="mt-16 flex flex-col items-center gap-4 opacity-40">
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
            <div className="flex gap-8 text-[9px] tracking-[0.2em] text-zinc-500 font-bold uppercase">
                <span>Secure Protocol V4.0</span>
                <div className="w-1 h-1 rounded-full bg-red-900 mt-1"></div>
                <span className="flex items-center gap-2">
                    Neural Link Stable
                    <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse"></span>
                </span>
            </div>
         </div>

      </div>
    </div>
  );
};

export default AuthPage;
