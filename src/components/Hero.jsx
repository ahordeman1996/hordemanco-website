import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrambleText from './ScrambleText';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Background Image Scroll Desaturation
      gsap.fromTo('.hero-bg', 
        { filter: 'grayscale(0%)' },
        {
          filter: 'grayscale(100%)',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        }
      );

      // Content Parallax (moves up slightly on scroll)
      gsap.to('.hero-content', {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // SVG Glitch Effect
      const turbulence = document.querySelector('#glitch-turbulence');
      if (turbulence) {
        gsap.timeline({ repeat: -1, repeatDelay: 5 })
          .to(turbulence, { attr: { baseFrequency: '0.05 0.2' }, duration: 0.1, ease: 'none' })
          .to(turbulence, { attr: { baseFrequency: '0.00001 0.00001' }, duration: 0.1, ease: 'none' })
          .to(turbulence, { attr: { baseFrequency: '0.08 0.1' }, duration: 0.05, ease: 'none', delay: 0.1 })
          .to(turbulence, { attr: { baseFrequency: '0.00001 0.00001' }, duration: 0.05, ease: 'none' });
      }

      // Split text entrance animation (simulated with staggered lines)
      gsap.fromTo('.hero-line', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      );
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-hc-black">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 h-full w-full hero-bg pointer-events-none">
        <img 
          src="/assets/hero.webp" 
          alt="Atmospheric Background" 
          className="w-full h-full object-cover object-center opacity-70"
          style={{ filter: 'url(#hero-glitch)' }}
        />
        {/* Heavy Gradient Overlay for Dark Cinematic Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-hc-black via-hc-black/60 to-transparent mix-blend-multiply"></div>
      </div>

      {/* Removed Structural Brand Icon */}

      {/* Left Aligned Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start justify-center mt-24 hero-content">
        
        <div className="overflow-visible mb-6">
          <p className="hero-line font-mono text-xs md:text-sm text-hc-red uppercase tracking-[0.3em] font-bold">
            The Structural Identity Firm
          </p>
        </div>

        <div className="overflow-visible mb-8 pt-4 pb-4">
          <h1 className="hero-line font-heading text-6xl md:text-[8rem] lg:text-[11rem] leading-[0.85] text-hc-white uppercase tracking-tighter">
            we build<br />worlds<span className="text-hc-red">.</span>
          </h1>
        </div>
        
        <div className="overflow-hidden max-w-2xl">
          <p className="hero-line font-mono text-sm md:text-base text-hc-white/60 uppercase tracking-widest leading-relaxed">
            Hordeman.co builds complete brands from the ground up prioritizing purposeful design that converts the consumer directly into the fan.
          </p>
        </div>

        <div className="overflow-visible mt-12">
          <a href="/work" className="hero-line btn-magnetic bg-hc-white text-hc-black hover:bg-hc-red hover:text-hc-white px-10 py-5 font-mono font-bold text-sm uppercase tracking-widest inline-flex items-center justify-center transition-colors duration-300 interactive shadow-[0_0_40px_rgba(204,34,17,0)] hover:shadow-[0_0_40px_rgba(204,34,17,0.3)] border border-hc-white/10 rounded-full">
            <ScrambleText text="Explore Our Work" />
          </a>
        </div>
        
      </div>
      
      {/* SVG Glitch Filter */}
      <svg className="hidden">
        <filter id="hero-glitch">
          <feTurbulence id="glitch-turbulence" type="fractalNoise" baseFrequency="0.00001 0.00001" numOctaves="1" result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="30" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
    </section>
  );
}
