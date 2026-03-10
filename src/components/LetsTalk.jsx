import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrambleText from './ScrambleText';

gsap.registerPlugin(ScrollTrigger);

export default function LetsTalk() {
  const ctaRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.cta-content', {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    }, ctaRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ctaRef} id="contact" className="w-full bg-hc-red text-hc-white py-32 px-6 md:px-12 relative overflow-hidden border-t border-hc-white/10">

      {/* Background motif */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 mix-blend-multiply pointer-events-none flex justify-end items-center">
        <img src="/assets/outlined crest.svg" alt="Crest Motif" className="h-[150%] max-w-none filter invert -translate-y-[10%] translate-x-[20%]" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center cta-content relative z-10">

        <p className="font-mono text-sm md:text-base uppercase tracking-[0.4em] mb-8 font-bold text-hc-black/60 bg-hc-black/10 px-6 py-2 border border-hc-black/20">
          Transmission Intercepted
        </p>

        <h2 className="font-heading text-5xl md:text-8xl lg:text-9xl mb-12 tracking-tighter uppercase leading-[0.85] text-hc-black mix-blend-color-burn">
          INITIALIZE<br />PROTOCOL.
        </h2>

        <p className="font-mono text-base md:text-xl opacity-90 max-w-2xl mb-16 uppercase tracking-widest leading-relaxed font-bold">
          Currently open to select projects. Begin the integration process.
        </p>

        <Link to="/contact" className="btn-magnetic bg-transparent text-hc-white hover:bg-hc-white hover:text-hc-black px-12 py-6 font-mono font-bold text-lg tracking-widest flex items-center gap-4 transition-colors duration-300 border border-hc-black interactive rounded-full">
          <ScrambleText text="Get Started" />
          <ArrowUpRight className="w-6 h-6" />
        </Link>

      </div>
    </section>
  );
}
