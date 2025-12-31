
import React from 'react';
import { X, Calendar, Users, Clock } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-[#121212] border border-zinc-800 w-full max-w-xl shadow-2xl overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-100 transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12 space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-red-700 uppercase tracking-widest text-xs font-bold">Reserve</h3>
            <h2 className="text-3xl md:text-4xl serif text-white">Book Your Table</h2>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Table request sent. We will confirm shortly!"); onClose(); }}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-zinc-900/50 border border-zinc-800 py-3 px-4 text-white focus:outline-none focus:border-red-900 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  className="w-full bg-zinc-900/50 border border-zinc-800 py-3 px-4 text-white focus:outline-none focus:border-red-900 transition-colors"
                  placeholder="01234 567890"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold flex items-center">
                  <Calendar size={12} className="mr-1" /> Date
                </label>
                <input 
                  type="date" 
                  required
                  className="w-full bg-zinc-900/50 border border-zinc-800 py-3 px-4 text-white focus:outline-none focus:border-red-900 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold flex items-center">
                  <Clock size={12} className="mr-1" /> Time
                </label>
                <select className="w-full bg-zinc-900/50 border border-zinc-800 py-3 px-4 text-white focus:outline-none focus:border-red-900 transition-colors appearance-none">
                  <option>12:00 PM</option>
                  <option>1:00 PM</option>
                  <option>6:00 PM</option>
                  <option>7:30 PM</option>
                  <option>8:00 PM</option>
                  <option>9:00 PM</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold flex items-center">
                  <Users size={12} className="mr-1" /> Guests
                </label>
                <select className="w-full bg-zinc-900/50 border border-zinc-800 py-3 px-4 text-white focus:outline-none focus:border-red-900 transition-colors appearance-none">
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4 People</option>
                  <option>6+ People</option>
                </select>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-red-900 hover:bg-red-800 text-white font-bold uppercase tracking-[0.2em] transition-all shadow-xl mt-4"
            >
              Confirm Reservation
            </button>
          </form>
          
          <p className="text-[10px] text-zinc-600 uppercase text-center tracking-widest">
            For parties over 6, please contact the restaurant directly at 01962 810532.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
