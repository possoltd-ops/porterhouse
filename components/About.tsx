
import React from 'react';
import { ShieldCheck, Target, Heart } from 'lucide-react';

interface AboutProps {
  isFullPage?: boolean;
}

const About: React.FC<AboutProps> = ({ isFullPage = false }) => {
  return (
    <div className="bg-[#0a0a0a]">
      <section className={`py-24 ${isFullPage ? 'md:py-32' : 'md:py-40'} px-6`}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-900/10 rounded-full blur-3xl"></div>
            <img 
              src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwBha8dc_-yAk6VkYUMUzrcbt1inbnNJWgpUQ4DWZnYc2_J21C0Hml0b8dW4sgYN8czhYdTvTkjt8nzjDaho3sOD-4JrY9YEF838_dZhzKScWXLn24DHqGE9pZf2kjj-Mm9CVOpHw=s680-w680-h510-rw" 
              alt="Porterhouse Steakhouse Winchester" 
              className="relative z-10 w-full h-[500px] object-cover border border-zinc-800 shadow-2xl grayscale-[10%] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-48 h-48 bg-zinc-900 border border-zinc-800 hidden md:flex items-center justify-center p-8 shadow-2xl">
              <p className="serif italic text-zinc-500 text-center leading-relaxed">
                "Simple, honest, and better than anyone else."
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <div className="space-y-2">
              <h3 className="text-red-700 uppercase tracking-widest text-sm font-bold">Our Heritage</h3>
              <h2 className="text-4xl md:text-6xl serif text-white leading-tight">Our Philosophy</h2>
            </div>
            <div className="space-y-6">
              <p className="text-xl md:text-2xl serif italic text-zinc-100 leading-relaxed">
                "Porterhouse is not about variety. It's not about being all things to all people. It's about doing something simple and doing it better than anyone else."
              </p>
              <p className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-red-900 serif border-l-4 border-red-900 pl-8 py-4">
                That something is Beef.
              </p>
              <p className="text-zinc-400 leading-loose text-lg font-light">
                We source only the finest grass-fed beef, aged to perfection and grilled over intense heat to lock in flavor. Every cut is a testament to our dedication to quality and traditional butchery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {isFullPage && (
        <>
          <section className="py-24 bg-[#0d0d0d] border-y border-zinc-900">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-12">
                <div className="space-y-4 text-center">
                  <div className="w-16 h-16 bg-red-900/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck className="text-red-700" size={32} />
                  </div>
                  <h4 className="text-xl serif text-white uppercase tracking-widest">Quality Guaranteed</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Every piece of meat is inspected by our master butcher to ensure it meets our exacting standards for marbling and age.
                  </p>
                </div>
                <div className="space-y-4 text-center">
                  <div className="w-16 h-16 bg-red-900/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="text-red-700" size={32} />
                  </div>
                  <h4 className="text-xl serif text-white uppercase tracking-widest">Expert Sourcing</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    We partner with select local farms that share our commitment to natural rearing and sustainable practices.
                  </p>
                </div>
                <div className="space-y-4 text-center">
                  <div className="w-16 h-16 bg-red-900/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="text-red-700" size={32} />
                  </div>
                  <h4 className="text-xl serif text-white uppercase tracking-widest">A Passion for Beef</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Beef isn't just an item on our menu; it's our obsession. We believe in letting the quality of the product speak for itself.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 px-6 bg-[#0a0a0a]">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl serif text-white">The Porterhouse Story</h2>
                <div className="w-20 h-1 bg-red-900 mx-auto"></div>
              </div>
              <div className="space-y-8 text-zinc-400 text-lg font-light leading-relaxed">
                <p>
                  Porterhouse began with a simple observation: Winchester was missing a true temple to beef. We didn't want a generic bistro or a fusion experiment. We wanted a place where the steak was the star, treated with the reverence it deserves.
                </p>
                <p>
                  Our journey took us to farms across Hampshire and beyond, searching for the perfect grass-fed cattle. We experimented with aging techniques until we found the "sweet spot" of 28 to 35 days, where tenderness and flavor reach their peak.
                </p>
                <p>
                  Today, located next to the historic Theatre Royal, Porterhouse stands as a beacon for those who appreciate the finer things in life—exceptional meat, fine wine, and a rustic-modern atmosphere that feels both timeless and current.
                </p>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default About;
