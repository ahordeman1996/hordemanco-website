import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Link, useLocation } from 'react-router-dom';
import ScrambleText from './ScrambleText';

export default function Navbar() {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleLinkClick = (e, path) => {
    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-6 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-[#0c0c0c]/50 backdrop-blur-md border-hc-white/10' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <Link to="/" className="flex items-center interactive group" onClick={(e) => handleLinkClick(e, '/')}>
        <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 355.5 45" className="h-6 md:h-8 transition-transform duration-300 overflow-visible">
          <g id="hordeman.co">
            <g id="hordeman" className="fill-hc-white">
              <polygon points="8.41 7.9 8.52 7.84 8.51 7.84 13.7 4.84 7.7 .03 0 4.47 0 7.84 0 40.53 7.71 44.97 13.71 40.15 8.41 37.09 8.41 7.9"/>
              <polygon points="30.37 24.9 30.37 21.46 30.37 7.89 30.46 7.84 30.48 7.84 35.66 4.84 29.67 .03 21.95 4.47 21.95 7.84 21.97 7.84 21.95 17.99 15.84 20.38 21.95 29.41 21.97 40.53 29.68 44.97 35.67 40.15 30.37 37.09 30.37 24.9"/>
              <polygon points="47.06 4.81 38.74 11.56 38.74 39.37 54.52 45 60.46 40.19 47.06 35.43 47.06 4.81"/>
              <polygon points="47.06 4.81 60.46 9.57 60.46 40.19 68.76 33.43 68.76 5.63 52.98 0 47.06 4.81"/>
              <path d="M106.09,23.24l-12.77-4.55c1.99-.83,3.99-1.66,5.97-2.47,1.97-.8,4.24-1.76,6.8-2.84L94.54.62l-10.15,6.57v-2.76l-7.62-4.43-5.92,4.81,5.23,3.07v32.69l7.61,4.43,5.94-4.81-5.24-3.06v-14.68l13.4,4.74v13.38l7.61,4.43,5.93-4.81-5.24-3.06v-13.88ZM84.39,9.07l4.77-3.06,8.47,9.37-13.23,5.62v-11.93Z"/>
              <polygon points="112.49 5.43 125.57 8 114.65 15.12 114.65 39.31 130.42 44.94 136.35 40.12 122.95 35.37 122.95 11.62 127.81 8.44 136.35 10.12 136.35 40.12 144.67 33.37 144.67 5.82 118.41 .63 112.49 5.43"/>
              <polygon points="171.76 19.94 160.74 19.94 158.36 24.43 169.37 24.43 171.76 19.94"/>
              <polygon points="232.71 2.07 220.25 0 211.01 6 211.01 2.07 198.55 0 189.31 6 189.31 5.51 163.87 .31 157.93 5.12 157.97 5.13 150.05 11.56 150.05 39.37 165.83 45 171.76 40.19 158.36 35.43 158.36 24.43 158.36 5.21 180.99 9.81 180.99 40.56 188.62 45 194.54 40.19 189.31 37.12 189.31 7.87 193.77 5 202.69 6.5 202.69 19.94 198.24 19.94 195.85 24.43 202.69 24.43 202.69 40.56 210.32 45 216.25 40.19 211.01 37.12 211.01 24.43 215.4 24.43 217.79 19.94 211.01 19.94 211.01 7.87 215.48 5 224.41 6.5 224.41 40.56 232.03 45 237.95 40.19 232.71 37.12 232.71 2.07"/>
              <polygon points="309.76 37.12 309.76 2.07 297.3 0 288.06 6 288.06 4.44 280.44 0 274.51 4.81 279.74 7.87 279.74 40.56 287.36 45 293.3 40.19 288.06 37.12 288.06 7.87 292.53 5 301.45 6.5 301.45 40.56 309.08 45 315 40.19 309.76 37.12"/>
              <polygon points="270.81 5.2 244.57 0 238.64 4.81 251.73 7.44 240.79 14.5 240.79 40.56 248.42 45 254.34 40.19 249.11 37.12 249.11 11 253.96 7.88 262.51 9.57 262.51 17.99 256.39 20.38 262.51 29.41 262.51 40.56 270.12 45 276.05 40.19 270.81 37.12 270.81 5.2"/>
            </g>
            <g id="co" className="fill-hc-red transition-all duration-300 group-hover:animate-logo-pulse">
              <path d="M325.38,8.9c.53-.36,1.16-.54,1.89-.54.87,0,1.61.25,2.21.75.55.47.93,1.04,1.13,1.75h3.25c-.17-.97-.53-1.85-1.09-2.64-.58-.84-1.34-1.5-2.28-1.98-.95-.49-2.01-.73-3.22-.73-1.36,0-2.55.31-3.57.93-1.01.62-1.79,1.44-2.33,2.45s-.8,2.1-.8,3.25.27,2.22.8,3.24c.53,1.02,1.31,1.84,2.33,2.46,1.01.63,2.21.93,3.57.93,1.21,0,2.27-.24,3.22-.74.94-.49,1.7-1.15,2.28-1.99.55-.79.91-1.66,1.09-2.62h-3.25c-.21.7-.59,1.27-1.13,1.73-.6.51-1.34.76-2.21.76-.72,0-1.35-.17-1.88-.52-.54-.36-.94-.82-1.21-1.39-.27-.58-.41-1.2-.41-1.85s.14-1.27.41-1.85c.27-.58.67-1.04,1.2-1.4Z"/>
              <path d="M349.13,8.9c-.54-1.01-1.31-1.83-2.33-2.45s-2.21-.93-3.57-.93-2.55.31-3.57.93-1.79,1.44-2.33,2.45c-.53,1.01-.8,2.1-.8,3.25s.27,2.22.8,3.24c.53,1.02,1.31,1.84,2.33,2.46,1.02.62,2.21.93,3.57.93s2.55-.31,3.57-.93c1.02-.62,1.79-1.44,2.33-2.46.53-1.02.8-2.1.8-3.24s-.27-2.24-.8-3.25ZM346.34,14c-.28.58-.69,1.04-1.22,1.39s-1.16.53-1.88.53-1.35-.18-1.88-.53-.94-.82-1.21-1.39c-.27-.58-.41-1.19-.41-1.85s.14-1.27.41-1.85c.27-.58.67-1.04,1.2-1.4.53-.36,1.16-.54,1.89-.54s1.37.18,1.9.54c.53.36.93.83,1.21,1.4s.42,1.19.42,1.85-.14,1.27-.42,1.85Z"/>
              <path d="M342.83,0h-15.16c-6.99,0-12.67,5.45-12.67,12.15s5.68,12.15,12.67,12.15h15.16c6.99,0,12.67-5.45,12.67-12.15s-5.68-12.15-12.67-12.15ZM342.83,21.74h-15.16c-5.53,0-10-4.29-10-9.59s4.48-9.59,10-9.59h15.16c5.53,0,10,4.29,10,9.59s-4.48,9.59-10,9.59Z"/>
            </g>
          </g>
        </svg>
      </Link>
      
      <div className="hidden md:flex items-center gap-12 font-mono text-sm uppercase tracking-widest text-hc-white">
        <Link to="/work" onClick={(e) => handleLinkClick(e, '/work')} className="hover:text-hc-red transition-colors hover-lift link-hover interactive">Work</Link>
        <Link to="/about" onClick={(e) => handleLinkClick(e, '/about')} className="hover:text-hc-red transition-colors hover-lift link-hover interactive">About</Link>
        <Link to="/contact" onClick={(e) => handleLinkClick(e, '/contact')} className="hover:text-hc-red transition-colors hover-lift link-hover interactive">Contact</Link>
      </div>

      <Link to="/contact" onClick={(e) => handleLinkClick(e, '/contact')} className="btn-magnetic border text-hc-white border-hc-white/20 hover:border-hc-red bg-hc-black px-6 py-2 font-mono text-sm uppercase tracking-wider overflow-hidden relative group interactive rounded-full">
        <ScrambleText text="Let's Talk" className="relative z-10" />
        <span className="absolute inset-0 bg-hc-red transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></span>
      </Link>
    </nav>
  );
}

