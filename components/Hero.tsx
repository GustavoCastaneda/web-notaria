import React from 'react';
import { ArrowDown } from 'lucide-react';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HOME} className="relative min-h-screen flex flex-col justify-center pt-20 border-b border-border">
      {/* Background Grid Effect - Subtle Light Mode Version */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          <div className="lg:col-span-8">
            <h2 className="text-accent uppercase tracking-[0.2em] text-xs font-semibold mb-6">Lic. Víctor Alfonso Varela Velasco</h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary leading-[1.1] mb-8">
              Seguridad Jurídica, <br/>
              <span className="text-secondary italic">Tradición Moderna.</span>
            </h1>
            <p className="text-secondary text-lg md:text-xl max-w-2xl leading-relaxed font-light">
              Brindamos certeza y legalidad a sus actos más importantes con un enfoque sofisticado, ágil y tecnológico.
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth'})}
                className="bg-primary text-white px-8 py-4 font-medium hover:bg-secondary transition-colors uppercase tracking-widest text-xs flex items-center justify-center gap-2"
              >
                Iniciar Trámite
              </button>
              <button 
                 onClick={() => document.getElementById(SectionId.SERVICES)?.scrollIntoView({ behavior: 'smooth'})}
                className="border border-border text-primary px-8 py-4 font-medium hover:bg-surface transition-colors uppercase tracking-widest text-xs flex items-center justify-center"
              >
                Nuestros Servicios
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end h-full pl-0 lg:pl-12 border-l border-transparent lg:border-border/50">
             <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-serif text-accent">25+</span>
                  <p className="text-sm text-secondary uppercase tracking-wide mt-1">Años de <br/>Experiencia</p>
                </div>
                <div className="w-full h-px bg-border"></div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-serif text-accent">5k+</span>
                  <p className="text-sm text-secondary uppercase tracking-wide mt-1">Escrituras <br/>Firmadas</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Marquee effect at bottom */}
      <div className="absolute bottom-0 w-full overflow-hidden border-t border-border py-4 bg-background">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
             <span key={i} className="text-4xl md:text-6xl font-serif text-stone-200/50 mx-8 uppercase font-bold select-none">
               Confianza • Legalidad • Prestigio •
             </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;