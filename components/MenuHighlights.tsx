
import React from 'react';
import { Wine } from 'lucide-react';

const MenuHighlights: React.FC = () => {
  const items = [
    {
      title: "32oz Porterhouse Steak",
      description: "The Signature Cut. Bone-in, aged for 28 days for exceptional depth and tenderness.",
      image: "https://images.unsplash.com/photo-1546241072-48010ad2862c?auto=format&fit=crop&q=80&w=800",
      tag: "Signature"
    },
    {
      title: "Tenderloin Fillet Steak",
      description: "Lean, buttery, and melt-in-the-mouth texture. The leanest cut available.",
      image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=800",
      tag: "Classic"
    },
    {
      title: "Rib Eye Steak",
      description: "Richly marbled for maximum flavor and juiciness. A favorite for meat lovers.",
      image: "https://images.unsplash.com/photo-1606416132922-22ab37c1231e?auto=format&fit=crop&q=80&w=800",
      tag: "Prime"
    },
    {
      title: "Salmon Fillet & Calamari",
      description: "Freshly sourced seafood options, perfectly grilled with lemon-herb butter.",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
      tag: "Seafood"
    }
  ];

  return (
    <section id="menu" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-2">
            <h3 className="text-red-700 uppercase tracking-widest text-sm font-bold">From The Grill</h3>
            <h2 className="text-4xl md:text-6xl serif text-white">Menu Highlights</h2>
          </div>
          
          <div className="bg-zinc-900/50 p-6 border border-zinc-800 flex items-center space-x-4 max-w-sm">
            <div className="p-3 bg-red-950/40 rounded-full text-red-700">
              <Wine size={24} />
            </div>
            <div>
              <p className="text-zinc-100 font-bold tracking-wide text-sm uppercase">Vintage Cellar</p>
              <p className="text-zinc-400 text-xs mt-1">Explore our Extensive Fine Wine Selection, curated to complement our cuts.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="group bg-zinc-900/30 border border-zinc-800 overflow-hidden hover:border-red-900/50 transition-all duration-500"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-md border border-zinc-700 text-[10px] uppercase tracking-widest text-zinc-400">
                  {item.tag}
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h4 className="text-xl serif text-white group-hover:text-red-700 transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-zinc-500 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-10 py-4 border border-zinc-700 hover:border-red-900 hover:text-red-700 text-zinc-400 text-sm font-bold uppercase tracking-widest transition-all duration-300">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
