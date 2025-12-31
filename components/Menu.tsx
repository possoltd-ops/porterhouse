
import React, { useState } from 'react';
import { Utensils, Wine, Clock, Star, Snowflake } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dinner' | 'daytime' | 'specials' | 'drinks'>('dinner');

  const MenuSection = ({ title, items, subtitle }: { title: string; items: any[]; subtitle?: string }) => (
    <div className="mb-12">
      <div className="border-b border-zinc-800 pb-4 mb-6">
        <h3 className="text-2xl serif text-white">{title}</h3>
        {subtitle && <p className="text-red-700 text-xs uppercase tracking-widest mt-1">{subtitle}</p>}
      </div>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
        {items.map((item, idx) => (
          <div key={idx} className="flex justify-between items-start group">
            <div className="space-y-1">
              <h4 className="text-zinc-100 font-medium group-hover:text-red-700 transition-colors">
                {item.name} {item.gf && <span className="text-[10px] text-zinc-500 ml-2 border border-zinc-800 px-1">GF</span>}
              </h4>
              <p className="text-sm text-zinc-500 font-light leading-relaxed max-w-xs">{item.desc}</p>
            </div>
            <span className="serif text-white font-bold">£{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="menu" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-red-700 uppercase tracking-[0.3em] text-sm font-bold">Exquisite Selection</h3>
          <h2 className="text-5xl md:text-7xl serif text-white">Our Menu</h2>
          <div className="w-24 h-1 bg-red-900 mx-auto mt-6"></div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            { id: 'dinner', label: 'Dinner Menu', icon: <Utensils size={16} /> },
            { id: 'daytime', label: 'Day Time', icon: <Clock size={16} /> },
            { id: 'specials', label: 'Specials & Xmas', icon: <Snowflake size={16} /> },
            { id: 'drinks', label: 'Wine & Drinks', icon: <Wine size={16} /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                activeTab === tab.id 
                ? 'bg-red-900 border-red-900 text-white shadow-xl' 
                : 'bg-transparent border-zinc-800 text-zinc-500 hover:border-zinc-600'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Menu Content */}
        <div className="animate-fadeIn">
          {activeTab === 'dinner' && (
            <div>
              <MenuSection 
                title="House Specialities" 
                items={[
                  { name: "Chimichurri Beef Skewers", desc: "Grilled beef, red onion & vine tomato salad", price: "24", gf: true },
                  { name: "Grilled Trio", desc: "Fillet mignon, chicken breast, lamb chop", price: "27", gf: true },
                  { name: "Hampshire Pork Loin", desc: "Roasted vegetables, vintage port & fig sauce", price: "20" },
                  { name: "Grilled Lamb Chops", desc: "English lamb, rosemary red wine sauce", price: "27" },
                ]}
              />
              <div className="bg-zinc-900/40 border border-zinc-800 p-8 mb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Star size={120} /></div>
                <h3 className="text-3xl serif text-white mb-8 border-b border-red-900/30 pb-4 flex items-center">
                  Premium Steaks <span className="text-xs uppercase tracking-widest text-red-700 ml-4">The Heart of Porterhouse</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-white font-bold">32oz Porterhouse (For Two)</p>
                        <p className="text-xs text-zinc-500 italic mt-1">Allow 30 mins cooking time. Flavourful top loin & buttery soft tenderloin.</p>
                      </div>
                      <span className="serif text-2xl text-red-700">£72</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-white font-bold">Wagyu 14oz Rib Eye</p>
                        <p className="text-xs text-zinc-500 mt-1">Freedown Hills UK Olive Fed. Amazing umami experience.</p>
                      </div>
                      <span className="serif text-2xl text-red-700">£75</span>
                    </div>
                  </div>
                  <div className="space-y-4 text-sm text-zinc-400">
                    <p className="flex justify-between"><span>Charred Tenderloin (Fillet) 10oz</span> <span className="text-white">£42</span></p>
                    <p className="flex justify-between"><span>Char-Grilled Sirloin 16oz</span> <span className="text-white">£42</span></p>
                    <p className="flex justify-between"><span>Char-Grilled T-Bone 18oz</span> <span className="text-white">£39</span></p>
                    <p className="flex justify-between"><span>Char-Grilled Prime Rib 20oz</span> <span className="text-white">£45</span></p>
                  </div>
                </div>
                <p className="text-[10px] text-zinc-600 uppercase tracking-widest mt-8 text-center">All steaks served with chips & house sauces of the day</p>
              </div>
            </div>
          )}

          {activeTab === 'daytime' && (
            <div>
              <div className="bg-red-950/10 border border-red-900/20 p-6 text-center mb-12">
                <p className="text-zinc-300 text-sm italic">Available 12:00 noon till 4:00 pm</p>
              </div>
              <MenuSection 
                title="Starters" 
                items={[
                  { name: "Mixed Platter for Two", desc: "Tiger prawns, skewers, ribs, halloumi, croquettes", price: "19" },
                  { name: "Smoked Salmon", desc: "Oak wood fired, capers, horseradish, garlic toast", price: "9" },
                  { name: "Pan Fried Sea Scallops", desc: "Grilled asparagus, lime butter", price: "12" },
                ]}
              />
              <MenuSection 
                title="Mains" 
                items={[
                  { name: "8oz Porterhouse Burger", desc: "Topped with crispy bacon, salad and chips", price: "11" },
                  { name: "Porterhouse Sandwich", desc: "Sliced tender beef in fresh baguette, horseradish", price: "11" },
                  { name: "8oz Rib Eye Steak", desc: "Served with vegetables and chips", price: "20" },
                  { name: "Pan Fried Sea Bass", desc: "Baby spinach, lime butter sauce", price: "16" },
                ]}
              />
            </div>
          )}

          {activeTab === 'specials' && (
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-zinc-900/50 p-10 border border-zinc-800 space-y-6">
                <h3 className="text-3xl serif text-white">Chateaubriand Offer</h3>
                <p className="text-red-700 text-xs font-bold uppercase tracking-widest">Sunday - Thursday | £74 for Two</p>
                <p className="text-zinc-400 text-sm leading-loose">
                  From the head of the prime fillet, lean and exquisitely tender. 
                  Includes Grilled Halloumi & Asparagus starter, followed by 21oz Chateaubriand with all the trimmings.
                </p>
                <div className="pt-4">
                  <span className="px-6 py-2 border border-zinc-700 text-xs text-white uppercase tracking-widest">Limited Time Only</span>
                </div>
              </div>
              <div className="bg-red-950/20 p-10 border border-red-900/30 flex flex-col justify-center items-center text-center space-y-4">
                <Snowflake size={48} className="text-red-700 mb-2" />
                <h3 className="text-3xl serif text-white">Christmas Party 2025</h3>
                <p className="text-zinc-300 text-sm">Our 2025 Festive Menus are now available for groups and parties.</p>
                <p className="text-red-700 font-bold uppercase tracking-widest text-xs">Pre-orders only</p>
                <button className="mt-4 px-8 py-3 bg-red-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-red-800 transition-colors">
                  Download Menu
                </button>
              </div>
            </div>
          )}

          {activeTab === 'drinks' && (
            <div className="space-y-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-6">
                  <h4 className="text-xl serif text-white border-b border-zinc-800 pb-2">Champagne</h4>
                  <ul className="space-y-4 text-sm">
                    <li className="flex justify-between"><span>Francois Lavergne Brut</span> <span className="text-white">£41</span></li>
                    <li className="flex justify-between"><span>Bollinger Special Cuvée</span> <span className="text-white">£75</span></li>
                    <li className="flex justify-between text-red-700"><span>Laurent-Perrier Rosé</span> <span className="text-white">£95</span></li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h4 className="text-xl serif text-white border-b border-zinc-800 pb-2">Featured Reds</h4>
                  <ul className="space-y-4 text-sm">
                    <li className="flex justify-between"><span>La Vuelta Malbec</span> <span className="text-white">£29</span></li>
                    <li className="flex justify-between"><span>Rutini Altamira Malbec</span> <span className="text-white">£85</span></li>
                    <li className="flex justify-between"><span>Saint Julien 2016</span> <span className="text-white">£95</span></li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h4 className="text-xl serif text-white border-b border-zinc-800 pb-2">Aperitifs</h4>
                  <ul className="space-y-4 text-sm">
                    <li className="flex justify-between"><span>Winchester Twisted Nose Gin</span> <span className="text-white">£5.9</span></li>
                    <li className="flex justify-between"><span>Peroni 330ml</span> <span className="text-white">£4.1</span></li>
                    <li className="flex justify-between"><span>Alfred's Brewery CAN</span> <span className="text-white">£5.1</span></li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;
