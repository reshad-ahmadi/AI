import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AiConsole from '../components/AiConsole';
import Footer from '../components/Footer';
import { ArrowRight, Infinity, Zap, Sparkles } from 'lucide-react';

function LandingPage() {
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans selection:bg-red-900/30 selection:text-red-200 pb-32">
      <Navbar />
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-red-900/10 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-[100px] opacity-20"></div>
      </div>

      <main className="relative z-10 container mx-auto px-6 pt-32 flex flex-col items-center text-center">
        
        {/* Version Tag */}
        <div className={`mb-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="px-4 py-2 rounded-full border border-red-900/30 bg-red-950/10 text-red-500 text-xs font-bold tracking-[0.2em] uppercase">
            Universal Intelligence V4.0
          </span>
        </div>

        {/* Main Headline */}
        <h1 className={`text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-tight transition-all duration-1000 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          AI. WITHOUT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-600 drop-shadow-[0_0_35px_rgba(220,38,38,0.4)]">
            LIMITS.
          </span>
        </h1>

        {/* Subtext */}
        <p className={`max-w-2xl text-lg text-zinc-400 mb-12 leading-relaxed transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Transcending the boundaries of classical computation. The Singularity is an omni-capable neural architecture designed to <strong className="text-white font-semibold">reason</strong>, <strong className="text-white font-semibold">create</strong>, and <strong className="text-white font-semibold">evolve</strong> in real-time.
        </p>

        {/* CTA Button */}
        <button 
          onClick={() => navigate('/auth')}
          className={`group relative px-8 py-5 bg-gradient-to-r from-red-600 to-red-700 rounded-full text-white font-bold tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:scale-105 active:scale-95 mb-24 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <span className="flex items-center gap-3">
            Enter The Singularity
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>

        {/* Divider */}
        <div className="w-full max-w-sm flex items-center justify-center gap-4 mb-24 opacity-50">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-zinc-700"></div>
          <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">Presence Detected</span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-zinc-700"></div>
        </div>

        {/* Features Section */}
        <div className="w-full max-w-6xl">
          <div className="text-xs font-bold text-red-700 tracking-[0.2em] uppercase mb-12 text-center">
            Neural Capabilities
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Infinity className="w-8 h-8 text-red-500" />}
              title="Infinite Knowledge"
              description="Access the collective sum of human intelligence, real-time global data feeds, and multi-dimensional predictive analytics."
              delay={400}
            />
            <FeatureCard 
              icon={<Zap className="w-8 h-8 text-red-500" />}
              title="Autonomous Logic"
              description="Beyond simple responses. Our agents execute complex multi-step reasoning and autonomous workflows across any digital environment."
              delay={500}
            />
            <FeatureCard 
              icon={<Sparkles className="w-8 h-8 text-red-500" />}
              title="Hyper-Creation"
              description="Instant generation of production-grade code, cinematic visual assets, and complex system architectures from natural language."
              delay={600}
            />
          </div>
        </div>

        {/* Bottom Banner with Console */}
        <div className="w-full max-w-6xl mt-24 relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-zinc-900/50 to-zinc-950/50 p-6 md:p-12 text-left grid lg:grid-cols-2 gap-12 items-center">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
          
          <div className="relative z-10">
            <span className="text-[10px] font-bold tracking-[0.2em] text-red-600 uppercase block mb-4">Neural Synapse Interface</span>
            <h2 className="text-4xl md:text-5xl font-bold max-w-xl leading-tight mb-6">
              A New Dimension of <br /> Synthetic Logic
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Monitor real-time threat detection, cryptographic handshakes, and autonomous reasoning loops through our secure neural interface.
            </p>
            <button className="text-sm font-bold tracking-widest text-white uppercase border-b border-red-500 pb-1 hover:text-red-400 transition-colors">
              Access Terminal
            </button>
          </div>

          <div className="relative z-10 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect behind console */}
              <div className="absolute -inset-1 bg-red-600/20 blur-xl opacity-50 rounded-lg"></div>
              <AiConsole />
            </div>
          </div>
          
          {/* Decorative mesh lines would go here, simplified with gradient/border for now */}
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-red-600/5 to-transparent pointer-events-none"></div>
        </div>

      </main>
      <div className='mt-30'>
  <Footer />

      </div>
    
    </div>
  )
}

function FeatureCard({ icon, title, description, delay }) {
  return (
    <div className={`p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-red-500/30 hover:bg-zinc-900/50 transition-all duration-300 text-left group`}>
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-900/20 to-transparent border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default LandingPage;
