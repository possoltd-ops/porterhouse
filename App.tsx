
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';
import AIAssistant from './components/AIAssistant';

export type View = 'home' | 'menu' | 'about' | 'contact';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const openReservation = () => setIsModalOpen(true);
  const closeReservation = () => setIsModalOpen(false);

  const renderView = () => {
    switch (currentView) {
      case 'menu':
        return <div className="pt-20"><Menu /></div>;
      case 'about':
        return <div className="pt-20"><About isFullPage /></div>;
      case 'contact':
        return <div className="pt-20"><Contact isFullPage /></div>;
      default:
        return (
          <>
            <Hero onBookClick={openReservation} />
            <About />
            <Menu />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] selection:bg-red-900 selection:text-white">
      <Navbar 
        scrolled={scrolled || currentView !== 'home'} 
        currentView={currentView}
        onViewChange={setCurrentView} 
        onBookClick={openReservation} 
      />
      
      <main className="animate-fadeIn">
        {renderView()}
      </main>

      <Footer />

      <ReservationModal isOpen={isModalOpen} onClose={closeReservation} />
      <AIAssistant />
    </div>
  );
};

export default App;
