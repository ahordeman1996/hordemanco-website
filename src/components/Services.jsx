import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrambleText from './ScrambleText';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: '01',
    title: 'Creative Direction',
    items: ['Brand Strategy & Positioning', 'Naming & Narrative', 'Visual Identity Systems', 'Art Direction']
  },
  {
    id: '02',
    title: 'Content & Production',
    items: ['Copywriting & Messaging', 'Motion Graphics', 'Photography & Video', 'Social Content Strategy']
  },
  {
    id: '03',
    title: 'Design & Digital',
    items: ['Web Design & UX/UI', 'Packaging & Print', 'Editorial Design', 'Interactive Experiences']
  }
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Grid item stagger
      gsap.fromTo('.service-card',
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.15, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
          }
        }
      );

      // Infinite Marquee removed
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="work" className="w-full bg-hc-black text-hc-white pt-24 pb-0 overflow-hidden border-t border-hc-white/10">
      
      {/* Infrastructure Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-hc-red mb-4">Core Capabilities</p>
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.85]">
            Structural<br/>Integrity
          </h2>
        </div>
        <p className="font-mono text-sm uppercase tracking-widest text-hc-white/50 max-w-sm">
          We architect end-to-end solutions. No silos. Just complete vertical integration of brand narrative and digital product.
        </p>
      </div>

      {/* Services Grid - Industrial Table Format */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-32 services-grid">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-hc-white/10">
          
          {services.map((service) => (
            <Link to="/work" key={service.id} className="service-card group border-r border-b border-hc-white/10 p-8 md:p-12 hover:bg-hc-white/5 transition-colors duration-500 relative overflow-hidden block interactive">
              
              {/* Hover crosshair accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-hc-red opacity-0 group-hover:opacity-100 group-hover:translate-x-4 group-hover:translate-y-4 md:group-hover:translate-x-6 md:group-hover:translate-y-6 transition-all duration-300"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-hc-red opacity-0 group-hover:opacity-100 group-hover:-translate-x-4 group-hover:-translate-y-4 md:group-hover:-translate-x-6 md:group-hover:-translate-y-6 transition-all duration-300"></div>
              
              <div className="mb-16">
                <span className="font-mono text-xs text-hc-red mb-6 block">[{service.id}]</span>
                <h3 className="font-heading text-3xl md:text-4xl uppercase tracking-tighter">{service.title}</h3>
              </div>
              
              <ul className="flex flex-col gap-4">
                {service.items.map((item, i) => (
                  <li key={i} className="font-mono text-sm text-hc-white/60 flex items-center gap-3">
                    <span 
                      className="w-1.5 h-1.5 bg-hc-white/20 group-hover:bg-hc-red transition-colors duration-300"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    ></span>
                    <span 
                      className="group-hover:text-hc-white transition-colors duration-300 uppercase tracking-widest"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >{item}</span>
                  </li>
                ))}
              </ul>

              {/* Decorative button */}
              <div className="mt-12 flex items-center gap-4 text-hc-white/40 group-hover:text-hc-red transition-colors">
                <span className="font-mono text-xs uppercase tracking-widest">
                  <ScrambleText text="Deploy Module" />
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}

        </div>
      </div>

      {/* Marquee refactored out */}

    </section>
  );
}
