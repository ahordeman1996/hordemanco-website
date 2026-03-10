import React from 'react';
import { Mail, Instagram } from 'lucide-react';
import ScrambleText from '../components/ScrambleText';

export default function Contact() {
  return (
    <main className="min-h-screen pt-48 pb-24 px-6 md:px-12 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background Motifs */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none flex items-center justify-center mix-blend-screen">
        <img src="/assets/outlined crest.svg" alt="Crest Outline" className="w-[120vw] h-[120vw] md:w-[60vw] md:h-[60vw] object-contain filter invert" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        <div className="mb-8">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-hc-red mb-4">Secure Channel</p>
          <h1 className="font-heading text-6xl md:text-9xl text-hc-white uppercase tracking-tighter leading-[0.85] mb-12">
            Establish<br/>Connection<span className="text-hc-red">.</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full">
          <a href="mailto:alexander@hordeman.com" className="btn-magnetic bg-hc-white text-hc-black hover:bg-hc-red hover:text-hc-white px-12 py-6 font-mono font-bold text-lg tracking-widest flex items-center gap-4 transition-colors duration-300 border border-hc-white/10 interactive rounded-full">
            <ScrambleText text="Shoot us an email" />
            <Mail className="w-5 h-5" />
          </a>

          <a href="https://www.instagram.com/hordeman.co" target="_blank" rel="noreferrer" className="btn-magnetic bg-transparent text-hc-white hover:bg-hc-white/10 px-12 py-6 font-mono font-bold text-lg tracking-widest flex items-center gap-4 transition-colors duration-300 border border-hc-white/20 interactive rounded-full">
            <ScrambleText text="Instagram" />
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </main>
  );
}
