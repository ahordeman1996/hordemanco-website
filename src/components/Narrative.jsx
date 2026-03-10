import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Narrative() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Background Crest Parallax
      gsap.to('.crest-bg', {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      // Split Text Reveal
      gsap.fromTo('.narrative-word',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.narrative-content',
            start: 'top 75%',
          }
        }
      );
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Split text helper to mimic SplitText functionality without the premium plugin
  const text = "we go beyond simple logo or web design. our goal is to create immersive brand universes and identity systems that produce tangible results for businesses.";
  const words = text.split(' ');

  return (
    <section ref={containerRef} id="about" className="relative min-h-[90dvh] w-full flex items-center justify-center bg-hc-black overflow-hidden py-32 px-6 md:px-12">
      
      {/* Bleeding Crest Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] md:w-[80vw] opacity-5 crest-bg pointer-events-none">
        <img src="/assets/outlined crest.svg" alt="Hordeman Crest Overlay" className="w-full h-full filter invert" />
      </div>

      {/* Main Philosophy Frame */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center narrative-content">
        
        <div className="mb-16 self-start md:self-start w-full max-w-5xl border-l-2 border-hc-red pl-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-hc-white/40 mb-2 lowercase">operational directive</p>
          <p className="font-heading text-2xl text-hc-white">system // 001</p>
        </div>

        <h2 className="font-heading text-4xl md:text-7xl lg:text-8xl leading-[1.1] md:leading-[1.1] text-hc-white max-w-5xl tracking-tight w-full">
          {words.map((word, index) => (
            <span key={index} className="narrative-word inline-block mr-[0.25em]">
              {word === 'universes' || word === 'tangible' ? (
                <span className="text-hc-red italic font-normal">{word}</span>
              ) : (
                word
              )}
            </span>
          ))}
        </h2>
        
      </div>
      
    </section>
  );
}
