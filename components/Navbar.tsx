import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { APP_NAME } from '../constants';
import { SectionId } from '../types';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-lg py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="font-sans text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-background font-bold text-lg">N</span>
          </div>
          {APP_NAME}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-secondary">
          {[SectionId.HOME, SectionId.SERVICES, SectionId.ABOUT].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="hover:text-white transition-colors"
            >
              {item === SectionId.HOME ? 'Inicio' : item === SectionId.SERVICES ? 'Servicios' : 'Nosotros'}
            </button>
          ))}
          <button
            onClick={() => scrollTo(SectionId.CONTACT)}
            className="bg-accent text-background px-6 py-2.5 rounded-full font-bold hover:bg-accent/90 transition-all hover:shadow-glow hover:-translate-y-0.5"
          >
            Agendar Cita
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-background z-50 flex flex-col justify-center items-center transition-all duration-500 ${mobileMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}`}>
        <button
          className="absolute top-6 right-6 text-secondary hover:text-white"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>
        <div className="flex flex-col gap-8 text-center">
          {[SectionId.HOME, SectionId.SERVICES, SectionId.ABOUT, SectionId.CONTACT].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="font-sans text-4xl font-bold text-white hover:text-accent transition-colors"
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