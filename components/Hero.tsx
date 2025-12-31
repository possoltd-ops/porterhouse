
import React from 'react';

interface HeroProps {
  onBookClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect simulation */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105 transition-transform duration-1000"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=2000')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <h2 className="text-red-700 uppercase tracking-[0.4em] text-sm md:text-base mb-4 font-bold animate-fadeIn">
          Established Excellence
        </h2>
        <h1 className="text-5xl md:text-8xl serif text-white mb-6 leading-tight tracking-tight">
          Winchester's Premier <br />
          <span className="italic font-normal">Steakhouse</span>
        </h1>
        <p className="text-lg md:text-2xl text-zinc-300 font-light tracking-wide mb-10 max-w-2xl mx-auto">
          100% Grass-Fed, Naturally Reared Beef.
        </p>
        <button 
          onClick={onBookClick}
          className="group relative px-10 py-5 bg-red-900 hover:bg-red-800 text-white font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-2xl overflow-hidden"
        >
          <span className="relative z-10">Book A Table</span>
          <div className="absolute inset-0 w-full h-full bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </div>

      {/* Decorative wood grain overlay subtle texture */}
      <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
    </section>
  );
};

export default Hero;
