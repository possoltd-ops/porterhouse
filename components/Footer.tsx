
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-zinc-900 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="flex flex-col">
            <span className="text-3xl md:text-4xl font-bold serif tracking-tight text-white leading-none">
              Porterhouse
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-red-700 font-semibold mt-1">
              Steakhouse
            </span>
          </div>

          <div className="flex space-x-8">
            <a href="#" className="text-zinc-500 hover:text-red-700 transition-colors"><Instagram size={24} /></a>
            <a href="#" className="text-zinc-500 hover:text-red-700 transition-colors"><Facebook size={24} /></a>
            <a href="#" className="text-zinc-500 hover:text-red-700 transition-colors"><Twitter size={24} /></a>
          </div>

          <div className="text-sm font-medium tracking-widest uppercase text-zinc-500 flex space-x-8">
             <a href="#" className="hover:text-zinc-100 transition-colors">Privacy</a>
             <a href="#" className="hover:text-zinc-100 transition-colors">Terms</a>
             <a href="#" className="hover:text-zinc-100 transition-colors">Careers</a>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs tracking-widest uppercase">
            Copyright &copy; 2025 Porterhouse Restaurant. All Rights Reserved.
          </p>
          <p className="text-zinc-700 text-[10px] tracking-widest uppercase">
            Handcrafted for Winchester Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
