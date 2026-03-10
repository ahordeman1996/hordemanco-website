import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const clients = [
  { name: 'Berkshire Hathaway', src: '/assets/Berkshire Hathaway.svg' },
  { name: 'Concord', src: '/assets/Concord.svg' },
  { name: 'Fearless Records', src: '/assets/Fearless Records.svg' },
  { name: 'Rise Records', src: '/assets/Rise Records.svg' },
  { name: 'Silverback Gorilla Records', src: '/assets/Silverback Gorilla Records.svg' },
  { name: 'Wax Vessel', src: '/assets/Wax Vessel.svg' }
];

export default function ClientMarquee() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Infinite Marquee
      const marqueeInner = document.querySelector('.marquee-inner');
      if (marqueeInner) {
        gsap.to(marqueeInner, {
          xPercent: -50,
          ease: 'none',
          duration: 30, // Control speed here
          repeat: -1,
        });
      }
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={marqueeRef} className="w-full bg-hc-red border-y border-hc-red py-6 md:py-8 overflow-hidden relative z-20 flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-hc-black/10 mix-blend-multiply pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full px-6 flex justify-between items-center mb-6 z-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-hc-white/90 font-bold">Client Roster // Secure Channel</p>
        <div className="h-px bg-hc-white/30 flex-1 mx-6"></div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-hc-white/90 font-bold">Active</p>
      </div>

      <div className="marquee-container w-full overflow-hidden flex z-10">
        {/* Double the content for smooth infinite looping. The inner div contains both sets. */}
        <div className="marquee-inner flex items-center min-w-max gap-16 md:gap-24 px-8 opacity-90">
          {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
            <img
              key={`client-${index}`}
              src={client.src}
              alt={client.name}
              className={`w-auto object-contain brightness-0 mix-blend-multiply opacity-80 ${client.name === 'Concord' ? 'h-5 md:h-6' : 'h-12 md:h-12'}`}
              title={client.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
