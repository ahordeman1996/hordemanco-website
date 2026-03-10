import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrambleText from '../components/ScrambleText';
import LetsTalk from '../components/LetsTalk';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Staggered text reveal for narrative paragraphs
      gsap.fromTo('.reveal-text', 
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          stagger: 0.2, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%',
          }
        }
      );

      // Parallax on the portrait image
      gsap.to('.portrait-img', {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: '.portrait-container',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen pt-40 bg-hc-black overflow-hidden">
      
      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          
          <div className="max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-hc-red mb-6 block">Classification // Founder</p>
            <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-hc-white uppercase tracking-tighter leading-[0.85] mb-8">
              Alexander<br/>Hordeman<span className="text-hc-red">.</span>
            </h1>
          </div>

          <div className="md:w-1/3 flex flex-col gap-6 font-mono text-sm text-hc-white/60 uppercase tracking-widest leading-relaxed">
            <p className="border-l border-hc-red pl-6">
              "Brands are most effective when every part is carefully considered and ties into the whole. That is how you fully immerse others into the world you're creating."
            </p>
          </div>
          
        </div>
      </div>

      {/* Unconstrained Image & Narrative Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-32 md:pb-48 about-content grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        
        {/* Left Column - Proportional Unconstrained Image */}
        <div className="w-full relative reveal-text portrait-container">
          <img 
            src="/images/homepage/war banner.webp" 
            alt="Alexander Hordeman Placeholder" 
            className="portrait-img w-[85%] md:w-full h-auto object-contain"
          />
        </div>

        {/* Right Column - Human Bio Copy */}
        <div className="w-full flex flex-col gap-12 font-mono text-base md:text-lg text-hc-white/80 leading-relaxed font-light mt-8 md:mt-24">
          
          <div className="reveal-text">
            <p className="font-heading text-3xl md:text-4xl text-hc-white uppercase tracking-tighter mb-6">
              Establishment <span className="text-hc-red">— 2014</span>
            </p>
            <p>
              My name is Alexander Hordeman. I started my graphic design career in 2014, originally doing work almost exclusively for bands across the globe. While my passion for music persists to this day, my love of pure visual language eventually necessitated an evolution into a more traditional design career.
            </p>
          </div>
          
          <p className="reveal-text">
            I ended up working backward from doing complex photomanipulation and intricate artwork into learning the ruthless fundamentals: typography, color theory, composition, and hierarchy. I wanted to understand exactly how all of these elements communicate different things to the viewer.
          </p>

          <p className="reveal-text">
            My career has traversed from doing merch designs, album covers, logos, and print design into deep web and UI/UX architecture. Ultimately, my current objective is total integration. I'm looking to work on full projects, overseeing the entire vision rather than functioning as just one of these singular parts.
          </p>

          <div className="border-l-[4px] border-hc-red pl-8 my-8 reveal-text">
            <p className="font-heading text-3xl md:text-5xl text-hc-white uppercase tracking-tighter leading-[1.1]">
              I am passionate about cutting through the noise to make things that stand out and, above all else, <span className="text-hc-red italic font-normal">work.</span>
            </p>
          </div>

          <p className="reveal-text">
            I think brands are most effective when every part is carefully considered and ties into the whole. That is how you can fully immerse others into this world you're creating and make it something tangible that they can get lost in. I want my architectures to be captivating, but also simple and terrifyingly effective.
          </p>

        </div>

      </div>

      <LetsTalk />

    </main>
  );
}
