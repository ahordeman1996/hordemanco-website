import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LogoDesign({ data }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.logo-reveal',
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.15, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );
      
      gsap.fromTo('.logo-image-reveal',
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [data]);

  return (
    <section ref={containerRef} className="w-full pb-32">
      
      {/* 1. Context / Issue */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          <div className="md:col-span-4 logo-reveal">
            <h3 className="font-heading text-4xl uppercase tracking-tighter text-hc-white mb-6">01 // Context</h3>
            <div className="w-full h-px bg-hc-red opacity-30"></div>
          </div>
          <div className="md:col-span-8 font-mono text-base md:text-lg text-hc-white/80 leading-relaxed font-light logo-reveal whitespace-pre-wrap">
            {data.context}
          </div>
        </div>
      </div>

      {/* 2. Planning / Preparation - Broken Grid Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-12 logo-reveal mb-8">
            <h3 className="font-heading text-4xl uppercase tracking-tighter text-hc-white">02 // Preparation</h3>
          </div>
          <div className="md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 font-mono text-lg md:text-xl lg:text-2xl text-hc-white/90 leading-relaxed font-light logo-reveal whitespace-pre-wrap">
            <div className="border-l-[3px] border-hc-red pl-8 md:pl-12 py-4">
              {data.prep}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Execution - Asymmetrical Sticky Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 relative">
        <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
          <div className="md:w-1/3 logo-reveal sticky top-32">
            <h3 className="font-heading text-4xl lg:text-5xl uppercase tracking-tighter text-hc-red mb-2">03 // Execution</h3>
            <p className="font-mono text-xs uppercase tracking-widest text-hc-white/40 mb-8 border-b border-hc-white/10 pb-4 inline-block">Final Deployment Phase</p>
          </div>
          <div className="md:w-3/5 font-mono text-base md:text-xl text-hc-white/90 leading-relaxed font-light logo-reveal whitespace-pre-wrap">
            {data.execution}
          </div>
        </div>
      </div>

      {/* Logo Gallery Grid */}
      {data.images && data.images.gallery && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.images.gallery.map((imgObj, i) => (
            <div 
              key={i} 
              className={`w-full aspect-square flex items-center justify-center p-12 lg:p-24 relative logo-image-reveal ${i === 0 ? 'lg:col-span-2 aspect-[2/1]' : ''}`}
              style={{ backgroundColor: imgObj.bg }}
            >
              <img src={imgObj.src} alt={`Logo Variant ${i+1}`} className="w-full h-full object-contain" />
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20"></div>
            </div>
          ))}
        </div>
      )}

    </section>
  );
}
