import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PrintDesign({ data }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!data.images || !data.images.gallery || data.images.gallery.length < 2) return;

    let ctx = gsap.context(() => {
      // Pin the container and create a horizontal/3D scroll effect
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });

      // We define 5 cards to simulate a stream. Index 0 is front, index 1 is back.
      const cards = gsap.utils.toArray('.business-card-item');
      
      // Setup initial 3D positions spread out horizontally
      gsap.set(cards, {
        x: (i) => i * 400 + 1000,
        y: (i) => (i % 2 === 0 ? 50 : -50),
        z: (i) => -Math.abs(i * 100),
        rotationX: (i) => (i % 2 === 0 ? 15 : -15),
        rotationY: (i) => (i % 2 === 0 ? -30 : 30),
        rotationZ: (i) => (i % 2 === 0 ? 5 : -5),
        opacity: 0.8
      });

      // Animate them flowing across the screen to the left and sorting out
      tl.to(cards, {
        x: (i) => i * 200 - 800,
        z: (i) => i * 50,
        rotationX: 0,
        rotationY: (i) => (i % 2 === 0 ? 5 : -5),
        rotationZ: (i) => (i % 2 === 0 ? -2 : 2),
        opacity: 1,
        stagger: 0.1,
        ease: "none"
      }, 0);

    }, containerRef);
    return () => ctx.revert();
  }, [data]);

  if (!data.images || !data.images.gallery || data.images.gallery.length < 2) {
    return null;
  }

  const front = data.images.gallery[0];
  const backs = data.images.gallery.slice(1);

  // We'll render a stream of front and back alternating
  const stream = [];
  for(let i=0; i<5; i++) {
    if(i % 2 === 0) {
      stream.push(front);
    } else {
      // Pick a different back for each alternating position
      const backIndex = Math.floor(i / 2) % backs.length;
      stream.push(backs[backIndex]);
    }
  }

  return (
    <section ref={containerRef} className="w-full h-screen bg-hc-black flex flex-col items-center justify-center overflow-hidden relative perspective-[1200px]">
      
      {/* Background Section Intro */}
      <div className="absolute top-1/4 left-6 md:left-12 z-0 opacity-20 pointer-events-none">
        <h3 className="font-heading text-6xl md:text-9xl uppercase tracking-tighter text-hc-white print-heading">
          04 // Print Physical
        </h3>
      </div>

      <div className="absolute inset-x-0 bottom-12 flex justify-center z-20">
        <p className="font-mono text-xs uppercase tracking-widest text-hc-white/40 border-b border-hc-white/10 pb-4 inline-block">
          Tangible Brand Artifacts
        </p>
      </div>

      {/* The 3D Card Stream */}
      <div className="relative w-full h-[60vh] flex items-center justify-center transform-style-3d z-10">
        {stream.map((src, i) => (
          <div 
            key={i} 
            className="business-card-item absolute w-[300px] md:w-[450px] aspect-[1.75/1] rounded-lg overflow-hidden shadow-2xl border border-white/5"
          >
            <img src={src} alt={`Business card flow ${i}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      
    </section>
  );
}
