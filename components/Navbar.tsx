import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { APP_NAME } from '../constants';
import { SectionId } from '../types';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: SectionId) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b ${scrolled ? 'bg-background/90 backdrop-blur-md border-border py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="font-serif text-xl tracking-widest text-primary font-semibold flex items-center gap-2">
          <div className="w-3 h-3 bg-accent rotate-45"></div>
          {APP_NAME}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm tracking-wide font-medium text-secondary">
          {[SectionId.HOME, SectionId.SERVICES, SectionId.ABOUT].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollTo(item)}
              className="hover:text-primary transition-colors uppercase text-xs"
            >
              {item === SectionId.HOME ? 'Inicio' : item === SectionId.SERVICES ? 'Servicios' : 'Nosotros'}
            </button>
          ))}
          <button 
            onClick={() => scrollTo(SectionId.CONTACT)}
            className="border border-border px-6 py-2 text-primary hover:bg-white hover:text-black transition-all duration-300 uppercase text-xs"
          >
            Agendar Cita
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-background z-50 flex flex-col justify-center items-center transition-transform duration-500 ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <button 
          className="absolute top-6 right-6 text-secondary hover:text-primary"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>
        <div className="flex flex-col gap-8 text-center">
          {[SectionId.HOME, SectionId.SERVICES, SectionId.ABOUT, SectionId.CONTACT].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollTo(item)}
              className="font-serif text-3xl text-primary hover:text-accent transition-colors uppercase"
            >
               {item === SectionId.HOME ? 'Inicio' : item === SectionId.SERVICES ? 'Servicios' : item === SectionId.ABOUT ? 'Nosotros' : 'Contacto'}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;