import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const AiConsole = () => {

    const logs = [
        { type: 'critical', text: '[CRITICAL] UNAUTHORIZED BUFFER OVERFLOW ATTEMPT DETECTED AT 0x7FFD2BA...' },
        { type: 'success', text: '[SUCCESS] DEPLOYING HONEYPOT_TRAP_v4 AT NODE-LATAM-89' },
        { type: 'system', text: '[SYSTEM] KERNEL_INTEGRITY_CHECK: PASSING...' },
        { type: 'warning', text: '[WARNING] PACKET_LOSS_DETECTION: 2.4% INCREASE IN AS-9981' },
        { type: 'agent', text: '[AI_AGENT_01] INITIATING COUNTER-EXPLOIT SEQUENCE: "BLACK_MAMBA"' },
        { type: 'success', text: '[SUCCESS] TARGET IP 104.22.1.88 NULL-ROUTED VIA EDGE_GATEWAY' },
        { type: 'info', text: '[INFO] NEURAL_WEIGHTS_UPDATED: RECOGNIZING_NEW_POLYMORPHIC_MALWARE' },
        { type: 'trace', text: '[TRACE] RTCP REVERSE-SHELL TRACED TO KNOWN BOTNET_CNC: "IRON_STORM"' },
        { type: 'success', text: '[SUCCESS] FIREWALL_FLUSH COMPLETE. 40,212 MALICIOUS REQUESTS BLOCKED.' },
        { type: 'warning', text: '[WARNING] UNKNOWN_PROTOCOL_OBSERVED: HEURISTIC_ANALYSIS_REQUIRED' },
        { type: 'alarm', text: '[ALARM] BRUTE_FORCE_THRESHOLD_EXCEEDED ON ADMIN_PORT_8080' },
        { type: 'success', text: '[SUCCESS] ENCRYPTION_ROTATION: RSA-4096 COMPLETE' },
        { type: 'critical', text: '[CRITICAL] UNAUTHORIZED BUFFER OVERFLOW ATTEMPT DETECTED AT 0x7FFD2BA...' }
    ];

    const getLogStyle = (type) => {
        switch (type) {
            case 'critical': return 'text-red-600 font-bold drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]';
            case 'success': return 'text-green-500 font-semibold';
            case 'system': return 'text-zinc-300';
            case 'warning': return 'text-yellow-500';
            case 'agent': return 'text-orange-500 font-semibold';
            case 'info': return 'text-white';
            case 'trace': return 'text-zinc-500';
            case 'alarm': return 'text-red-500 font-bold';
            default: return 'text-zinc-400';
        }
    };

    const [lines, setLines] = useState(logs.slice(0, 8));

    useEffect(() => {
        const interval = setInterval(() => {
            setLines((prevLines) => {
                const nextIndex = (prevLines.length + 1) % logs.length;
                // Keep adding from the source logs loop to simulate infinite stream
                const nextLog = logs[Math.floor(Math.random() * logs.length)]; 
                const newLines = [...prevLines, nextLog];
                if (newLines.length > 10) {
                    return newLines.slice(1);
                }
                return newLines;
            });
        }, 1200);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-3xl h-[400px] flex flex-col bg-[#050505] rounded-xl border border-red-900/30 font-mono text-xs shadow-2xl shadow-red-900/10 overflow-hidden relative group">
            
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-red-900/5 group-hover:bg-red-900/10 transition-colors duration-500 pointer-events-none"></div>

            {/* Header */}
            <div className="flex-none flex items-center justify-between px-4 py-3 bg-zinc-950/80 border-b border-red-900/30 backdrop-blur-md z-10">
                <div className="flex items-center gap-3">
                    <Terminal className="w-4 h-4 text-red-600" />
                    <span className="text-zinc-200 font-extrabold tracking-widest text-[10px] uppercase font-mono">AI COMMAND CONSOLE V9.2.0</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold tracking-widest text-zinc-600 uppercase">SECURE_ROOT_ACCESS</span>
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-600 opacity-50"></div>
                        <div className="w-2 h-2 rounded-full bg-green-600 opacity-50"></div>
                    </div>
                </div>
            </div>

            {/* Console Body */}
            <div className="flex-1 p-6 space-y-3 font-mono overflow-hidden flex flex-col justify-end relative min-h-0 z-10">
                {/* Mask fade out at top */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none z-20"></div>
                
                {lines.map((log, index) => (
                    <div key={index} className={`${getLogStyle(log.type)} animate-in fade-in slide-in-from-bottom-2 duration-200 leading-snug tracking-wide text-[11px]`}>
                        {log.text}
                    </div>
                ))}
            </div>

            {/* Input Line */}
            <div className="flex-none px-6 py-4 bg-zinc-950/80 border-t border-red-900/30 flex items-center gap-3 z-10">
                <span className="text-red-500 font-bold text-[11px]">root@sentinel:~#</span>
                <div className="flex items-center text-[11px] text-zinc-400 font-bold tracking-wider">
                    {/* <span className="mr-1">analyze</span>
                    <span className="text-zinc-600">--threat-level --deep-packet --neural-override</span>
                    <span className="w-2 h-4 bg-zinc-400 ml-1 animate-pulse"></span> */}
                </div>
            </div>
        </div>
    );
};

export default AiConsole;
