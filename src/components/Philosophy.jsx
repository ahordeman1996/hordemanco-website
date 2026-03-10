import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
        }
      });

      tl.from('.phil-line-1', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      })
      .from('.phil-line-2', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.4');
      
      // Subtle parallax on background abstract
      gsap.to('.phil-bg', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        y: 100,
        ease: 'none'
      });
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-40 bg-hc-black text-hc-white overflow-hidden" id="about">
      
      <div className="absolute inset-0 z-0 overflow-hidden mix-blend-color-dodge opacity-30">
        <img 
          src="https://images.unsplash.com/photo-1558244402-286dd748c593?q=80&w=2070&auto=format&fit=crop" 
          alt="Abstract dark architecture" 
          className="phil-bg w-full h-[120%] object-cover object-center grayscale origin-top scale-105"
        />
        <div className="absolute inset-0 bg-hc-black/80"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 flex flex-col gap-12">
        <div className="phil-line-1 max-w-4xl">
          <p className="font-heading text-4xl md:text-6xl text-hc-white mb-6">
            hordeman.co builds complete brands from the ground up.
          </p>
          <p className="font-mono text-lg opacity-70 mb-12 max-w-2xl">
            Beyond just a logo or a website, we create identities and systems that connect every element into a single, immersive whole.
          </p>
          <a href="/about" className="btn-magnetic bg-hc-red text-hc-white px-8 py-3 rounded-full font-mono text-sm uppercase tracking-widest overflow-hidden relative group interactive inline-block">
            <span className="relative z-10 group-hover:text-hc-black transition-colors duration-300">About Us</span>
            <span className="absolute inset-0 bg-hc-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></span>
          </a>
        </div>
      </div>
    </section>
  );
}
