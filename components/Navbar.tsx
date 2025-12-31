
import React from 'react';
import { Menu, X } from 'lucide-react';
import { View } from '../App';

interface NavbarProps {
  scrolled: boolean;
  currentView: View;
  onViewChange: (view: View) => void;
  onBookClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, currentView, onViewChange, onBookClick }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks: { name: string; view: View }[] = [
    { name: 'Home', view: 'home' },
    { name: 'Menu', view: 'menu' },
    { name: 'About Us', view: 'about' },
    { name: 'Contact', view: 'contact' },
  ];

  const handleNavClick = (view: View) => {
    onViewChange(view);
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 px-6 py-4 md:px-12 ${
        scrolled ? 'bg-[#0a0a0a]/95 border-b border-zinc-800 py-3 shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button onClick={() => handleNavClick('home')} className="flex flex-col text-left">
          <span className="text-2xl md:text-3xl font-bold serif tracking-tight text-white leading-none">
            Porterhouse
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-red-700 font-semibold ml-0.5">
            Steakhouse
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.view)}
              className={`text-sm font-medium tracking-widest uppercase transition-colors duration-200 ${
                currentView === link.view ? 'text-red-700' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={onBookClick}
            className="px-6 py-2.5 bg-red-900 hover:bg-red-800 text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 transform active:scale-95 shadow-lg shadow-red-900/20"
          >
            Reservations
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-100 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-zinc-800 py-10 px-8 flex flex-col space-y-8 md:hidden animate-fadeIn">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.view)}
              className={`text-2xl font-medium serif tracking-wide text-left ${
                currentView === link.view ? 'text-red-700' : 'text-zinc-100'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => {
              onBookClick();
              setIsOpen(false);
            }}
            className="w-full py-5 bg-red-900 text-white font-bold uppercase tracking-widest text-sm shadow-xl"
          >
            Reservations
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
